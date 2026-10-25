/* WWE Superstars v3 - core UI: save, cards, collection, deck, card picks and the 3-match game screen.
   Modes (Ring Domination, Royal Rumble, Campaign...) live in modes.js and use window.V3. */
(function () {
  'use strict';
  const E = window.Eng, C = E.CARDS, RAR = E.RAR, SUP = E.SUPPORTS, I = window.I3, ST = E.STATS;
  const KEY = 'wweSuperstarsV3';
  const DEV = new URLSearchParams(location.search).has('dev');
  const app = document.getElementById('app');
  const rnd = Math.random;
  let S = null;

  /* ---------- tiny synth sounds + haptics (no audio files; mute on the home screen) ---------- */
  let AC = null;
  function tone(f, d, type, at, vol) {
    try {
      if (S && S.mute) return;
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      const o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + (at || 0);
      o.type = type || 'sine'; o.frequency.value = f; g.gain.setValueAtTime(vol || 0.08, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + d);
    } catch (e) { }
  }
  const buzz = p => { try { if (!(S && S.mute) && navigator.vibrate) navigator.vibrate(p); } catch (e) { } };
  function sfx(k) {
    if (k === 'flip') tone(520, 0.08, 'triangle');
    else if (k === 'win') { [523, 659, 784].forEach((f, i) => tone(f, 0.18, 'triangle', i * 0.09)); buzz(30); }
    else if (k === 'lose') { tone(160, 0.3, 'sawtooth', 0, 0.06); buzz([20, 40, 20]); }
    else if (k === 'sig') { tone(880, 0.12, 'square', 0, 0.04); tone(1320, 0.18, 'square', 0.08, 0.04); }
    else if (k === 'rare') { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.22, 'triangle', i * 0.08)); buzz(40); }
    else if (k === 'tap') tone(380, 0.04, 'sine', 0, 0.04);
  }

  /* ---------- save ---------- */
  // v3.10: no rarities. Duplicates of a wrestler stack on one card (d = spare copies) and are spent to level it up.
  function migrate(s) {
    if (s.lv2) return;
    const keep = {}, remap = {};
    (s.cards || []).slice().sort((a, b) => (b.lvl || 0) - (a.lvl || 0)).forEach(c => { const k = keep[c.c]; if (k) { k.d++; remap[c.u] = k.u; } else { keep[c.c] = c; c.d = 0; } });
    s.cards = (s.cards || []).filter(c => keep[c.c] === c);
    s.cards.forEach(c => { c.lvl = Math.max(1, c.lvl || 1); delete c.pro; delete c.fort; });
    if (s.deck) ['m', 'f'].forEach(k => { const seen = []; s.deck[k] = (s.deck[k] || []).map(u => remap[u] || u).filter(u => seen.includes(u) ? false : (seen.push(u), true)); });
    s.lv2 = 1;
  }
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.v === 3) { migrate(s); s.camp = s.camp || { stars: {} }; s.mitb = s.mitb || { step: 0 }; s.pcc = s.pcc || null; s.stats = s.stats || { wins: 0, losses: 0, perfect: 0, picks: 0 }; s.seen = s.seen || {}; s.surv = s.surv || null; return s; }
    } catch (e) { }
    return null;
  }
  const uid = () => ++S.nextU;
  const byU = u => S.cards.find(c => c.u === u) || null;
  const supByU = u => S.sups.find(s => s.u === u) || null;
  const owned = () => S.cards;
  const short = n => n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + 'M' : n >= 1e5 ? Math.round(n / 1e3) + 'k' : n >= 1e4 ? (n / 1e3).toFixed(1) + 'k' : String(n);
  const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const pick = a => a[Math.floor(rnd() * a.length)];
  const art = c => '<img class="artimg" src="../assets/superstars/' + c.a + '.webp" alt="" loading="lazy" onerror="this.onerror=null;this.src=\'../assets/superstars/' + c.a + '.png\'">';
  const screen = (html, keepScroll) => { app.innerHTML = html; if (!keepScroll) window.scrollTo(0, 0); initPagers(); };

  /* ---------- fit toolkit: no screen scrolls down. Long lists become swipeable pages; dense screens use tabs. ---------- */
  const PGN = {};   // remembered page per list
  // items: array of single-element html strings. o: {cols, reserve (px used by everything else), aspect (cell height / width)}
  function pagedCards(key, items, o) {
    o = o || {};
    const cols = Array.isArray(o.cols) ? o.cols.join(',') : (o.cols || 3);
    return '<div class="pgwrap" data-key="' + key + '" data-n="1" data-cols="' + cols + '" data-aspect="' + (o.aspect || 1.43) + '" data-total="' + items.length + '" data-res="' + (o.reserve || 200) + '"><div class="pgr"><div class="pgpage">' + items.join('') + '</div></div>'
      + '<div class="pgnav"><button onclick="UI.pgGo(\'' + key + '\',-1)" aria-label="Previous page">‹</button><span class="pgl"></span><button onclick="UI.pgGo(\'' + key + '\',1)" aria-label="Next page">›</button></div></div>';
  }
  // Re-flow a pager to the space that is really left on screen: picks the column count that wastes least, spreads spare room between rows.
  function layoutPager(w) {
    const key = w.dataset.key, r = w.querySelector('.pgr'), items = [].slice.call(w.querySelectorAll('.pgpage > *'));
    const opts = w.dataset.cols.split(',').map(Number), aspect = +w.dataset.aspect, gap = 8, W = Math.min(560, window.innerWidth) - 28, NAV = 44;
    const top = w.getBoundingClientRect().top, below = Math.max(0, +w.dataset.res - top - NAV - 14), avail = Math.max(120, window.innerHeight - top - NAV - 14 - below);
    let best = null;
    opts.forEach(cols => {
      const cw = (W - gap * (cols - 1)) / cols, lo = cw * aspect * 0.92, hi = cw * aspect * 1.1, rows = Math.max(1, Math.floor((avail + gap) / (lo + gap)));
      const ch = Math.round(Math.min(hi, (avail - (rows - 1) * gap) / rows)), waste = avail - (rows * ch + (rows - 1) * gap);
      if (!best || waste < best.waste - 6) best = { cols, ch, rows, waste, per: cols * rows };
    });
    const n = Math.max(1, Math.ceil(items.length / best.per)), rg = best.rows > 1 ? gap + Math.min(14, best.waste / (best.rows - 1)) : gap;
    PGN[key] = Math.min(PGN[key] || 0, n - 1); w.dataset.n = n;
    r.innerHTML = '';
    for (let p = 0; p < n; p++) {
      const pg = document.createElement('div'); pg.className = 'pgpage';
      pg.style.cssText = 'grid-template-columns:repeat(' + best.cols + ',1fr);grid-template-rows:repeat(' + best.rows + ',' + best.ch + 'px);row-gap:' + rg.toFixed(1) + 'px';
      items.slice(p * best.per, (p + 1) * best.per).forEach(x => pg.appendChild(x)); r.appendChild(pg);
    }
    w.querySelector('.pgl').textContent = 'Page ' + ((PGN[key] || 0) + 1) + ' / ' + n + ' · ' + w.dataset.total;
    w.querySelector('.pgnav').style.visibility = n > 1 ? 'visible' : 'hidden';
  }
  function initPagers() {
    document.querySelectorAll('.pgwrap').forEach(w => {
      layoutPager(w);
      const key = w.dataset.key, r = w.querySelector('.pgr'), l = w.querySelector('.pgl'), n = +w.dataset.n;
      r.scrollLeft = (PGN[key] || 0) * r.clientWidth;
      r.addEventListener('scroll', () => { const i = Math.max(0, Math.min(n - 1, Math.round(r.scrollLeft / Math.max(1, r.clientWidth)))); PGN[key] = i; l.textContent = l.textContent.replace(/Page \d+/, 'Page ' + (i + 1)); }, { passive: true });
    });
  }
  function pgGo(key, d) { const r = document.querySelector('.pgwrap[data-key="' + key + '"] .pgr'); if (!r) return; const n = +r.parentNode.dataset.n, i = Math.max(0, Math.min(n - 1, (PGN[key] || 0) + d)); r.scrollTo({ left: i * r.clientWidth, behavior: 'smooth' }); }
  // Stat badges: a coloured disc with a white glyph (red Strength, green Technical, sky-blue Agility, yellow Charisma).
  const gear = (() => { let d = ''; for (let k = 0; k < 16; k++) { const a = k * Math.PI / 8, r = k % 2 ? 6.4 : 9.4, w = 0.2; const pts = (k % 2) ? [[a - w, 6.4], [a + w, 6.4]] : [[a - w * .7, 9.4], [a + w * .7, 9.4]]; pts.forEach(([t, rr]) => { d += (d ? 'L' : 'M') + (12 + rr * Math.cos(t)).toFixed(2) + ' ' + (12 + rr * Math.sin(t)).toFixed(2); }); } return d + 'Z M12 8.6a3.4 3.4 0 1 0 0 6.8a3.4 3.4 0 1 0 0-6.8z'; })();
  const star = (() => { let d = ''; for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? 4.2 : 9.6; d += (k ? 'L' : 'M') + (12 + r * Math.cos(a)).toFixed(2) + ' ' + (12 + r * Math.sin(a)).toFixed(2); } return d + 'Z'; })();
  const FIST = 'M7 10.2c0-1 .8-1.7 1.7-1.7h6.6c1 0 1.7.8 1.7 1.7v4.1c0 1.7-1.3 3-3 3h-4c-1.7 0-3-1.3-3-3zM9.4 6.3a1 1 0 0 1 2 0v2.2h-2zM11.6 5.6a1 1 0 0 1 2 0v2.9h-2zM13.8 6.3a1 1 0 0 1 2 0v2.2h-2z'; // clenched fist (strike)
  const GLYPH = [
    'M3 9.5h2.2v5H3zM5.2 7.5h2.6v9H5.2zM7.8 11h8.4v2H7.8zM16.2 7.5h2.6v9h-2.6zM18.8 9.5H21v5h-2.2z', // dumbbell: strength
    FIST, // fist: strike
    gear, // gear: technical
    'M13.4 2.5 5 13.6h5.4L9.4 21.5l9.2-11.6h-5.6z', // bolt: agility
    star // star: charisma
  ];
  const statImg = i => '<svg class="sti" viewBox="0 0 24 24" aria-label="' + ST[i].name + '"><circle cx="12" cy="12" r="11.2" fill="' + ST[i].col + '" stroke="#000" stroke-opacity=".55" stroke-width="1"/><path fill="#fff" fill-rule="evenodd" stroke="#0007" stroke-width=".6" transform="translate(12 12) scale(.72) translate(-12 -12)" d="' + GLYPH[i] + '"/></svg>';

  function give(ci, extra) {
    const have = S.cards.find(c => c.c === ci);
    if (have) { have.d = (have.d || 0) + 1; persist(); return { inst: have, isNew: false }; }
    const inst = E.mk(ci, Object.assign({ u: uid() }, extra || {}));
    S.cards.push(inst); S.seen[C[ci].n] = 1; persist();
    return { inst, isNew: true };
  }
  function giveSup(si) { const s = { u: uid(), s: si }; S.sups.push(s); persist(); return s; }
  function newSave() {
    S = { v: 3, lv2: 1, nextU: 0, cards: [], sups: [], deck: { m: [], f: [], s: [] }, stats: { wins: 0, losses: 0, perfect: 0, picks: 0 }, camp: { stars: {} }, mitb: { step: 0 }, pcc: null, surv: null, seen: {} };
    const idx = g => C.map((c, i) => i).filter(i => C[i].g === g);
    const take = (g, n) => E.shuffle(idx(g), rnd).slice(0, n);
    take('M', 16).concat(take('F', 8)).forEach(ci => give(ci));
    [0, 1, 2, 3, 4, 5].forEach(si => giveSup(si));
    autoDeck();
    // a spare copy of your best man and best woman, so you can try levelling straight away
    const b = E.bestDeck(S.cards, S.sups, 1, 1, 0); b.m.concat(b.f).forEach(c => { c.d = 1; });
    persist();
  }
  function autoDeck() {
    const d = E.bestDeck(S.cards, S.sups);
    S.deck = { m: d.m.map(c => c.u), f: d.f.map(c => c.u), s: d.s.map(s => s.u) };
  }
  // The current deck as instances; any empty slot is filled from the collection.
  function getDeck() {
    const clean = (arr, n, pool) => { const out = arr.filter(u => pool.some(x => x.u === u)); return out.slice(0, n); };
    const males = S.cards.filter(c => !E.isF(c)), females = S.cards.filter(E.isF);
    S.deck.m = clean(S.deck.m, 3, males); S.deck.f = clean(S.deck.f, 3, females); S.deck.s = clean(S.deck.s, 2, S.sups);
    const best = E.bestDeck(S.cards, S.sups);
    best.m.forEach(c => { if (S.deck.m.length < 3 && !S.deck.m.includes(c.u)) S.deck.m.push(c.u); });
    best.f.forEach(c => { if (S.deck.f.length < 3 && !S.deck.f.includes(c.u)) S.deck.f.push(c.u); });
    best.s.forEach(c => { if (S.deck.s.length < 2 && !S.deck.s.includes(c.u)) S.deck.s.push(c.u); });
    return { m: S.deck.m.map(byU), f: S.deck.f.map(byU), s: S.deck.s.map(supByU) };
  }
  const power = () => Math.round(E.deckPower(getDeck()));
  const rankNo = () => Math.round(power() / 10);

  /* ---------- card faces ---------- */
  const SYMCH = { BL: '◀', BR: '▶', YU: '▲', YD: '▼' };
  // Each wrestler has their own Google Font (data/fonts.js). We load only the capital letters of that font, on first use.
  const FONT_TXT = encodeURIComponent("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .'()-&\u00c1\u00c9\u00cd\u00d3\u00da");
  const fontSeen = new Set();
  function ensureFont(f, w) {
    const k = f + w; if (fontSeen.has(k)) return; fontSeen.add(k);
    try { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=' + f.replace(/ /g, '+') + (w ? ':wght@' + w : '') + '&text=' + FONT_TXT + '&display=swap'; document.head.appendChild(l); } catch (e) {}
  }
  function nameEl(c) {
    const F = (globalThis.CFONTS || {})[c.n];
    if (!F) return '<div class="nm">' + c.n + '</div>';
    ensureFont(F[0], F[1]);
    return '<div class="nm' + (F[3] === 1 ? ' one' : '') + '" style="font-family:\'' + F[0] + '\',Impact,sans-serif;font-weight:' + (F[1] || 400) + ';font-size:' + F[2] + 'cqw">' + c.n + '</div>';
  }
  // Card = the artwork; a slim stat band sits on the bottom edge. o: {cls, click, hl:[stat idx], val, mini}
  function face(inst, o) {
    o = o || {};
    const c = C[inst.c], st = E.stats(inst), dup = inst.d || 0;
    return '<div class="cf ' + (o.cls || '') + '" style="--rc:#2b3050"' + (o.click ? ' onclick="' + o.click + '"' : '') + '>'
      + '<div class="art">' + art(c) + '</div>'
      + (dup ? '<div class="gem dup"><span class="f">+' + dup + ' DUP</span><span class="s">+' + dup + '</span></div>' : '')
      + '<div class="lv' + (inst.lvl > 999 ? ' d4' : inst.lvl > 99 ? ' d3' : '') + '">' + inst.lvl + '</div>'
      + '<div class="sym ' + c.sym + '">' + SYMCH[c.sym] + '</div>'
      + (o.val != null ? '<div class="val">' + fmt(o.val) + '</div>' : '')
      + nameEl(c)
      + '<div class="sb">' + st.map((v, i) => '<span style="--sc:' + ST[i].col + '" class="' + (o.hl && o.hl.includes(i) ? 'hl' : '') + '">' + statImg(i) + '<b>' + short(v) + '</b></span>').join('') + '</div></div>';
  }
  function supFace(s, o) {
    o = o || {}; const d = SUP[s.s], r = RAR[d.rar];
    return '<div class="sf ' + (o.cls || '') + '" style="--rc:' + r.col + '"' + (o.click ? ' onclick="' + o.click + '"' : '') + '><div class="sico">' + I[d.id] + '</div><div class="stx"><div class="snm">' + d.name + '</div><div class="spct">+' + Math.round(d.pct * 100) + '% ' + (d.stats.length === 4 ? 'ALL' : d.stats.map(i => ST[i].ab).join('+')) + '</div></div></div>';
  }
  const LOGO = '<div class="logo"><img src="../assets/wwe-superstar-logo.png" alt="WWE Superstars"></div>';
  const back = (to, label) => '<div class="topbar"><button onclick="' + to + '">‹ ' + (label || 'Back') + '</button></div>';

  /* ---------- home ---------- */
  const MODES = [
    ['wild', 'Play Now', 'ring', 'Best of 3 matches. 2 picks for a win.'],
    ['campaign', 'Campaign', 'campaign', '84 stages, 12 bosses, up to 3 stars.'],
    ['mitb', 'Money in the Bank', 'bank', 'Climb 5 rungs, win the briefcase.'],
    ['rd', 'Ring Domination', 'ring', 'Claim squares on the 3×3 board.'],
    ['rr', 'Royal Rumble', 'rumble', '15 cards. Hold the ring.'],
    ['rrw', "Women's Rumble", 'rumble', '15 women. Hold the ring.'],
    ['surv', 'Survivor', 'survivor', '10 players, 3rd loss is out.'],
    ['pcc', "People's Champion", 'crown', 'Back a Superstar, score points.'],
    ['rtg', 'Road to Glory', 'star', '4 rounds, random hands.'],
    ['ec', 'Elimination Chamber', 'lock', 'Women\'s decks, 10 bouts.'],
    ['kotr', 'King of the Ring', 'crown', 'Tournament with stamina.'],
    ['war', 'War', 'fight', 'Ranked ladder season.'],
    ['case', 'Crack the Case', 'puzzle', 'Daily code puzzle.']
  ];
  // Mode pages: [mode, columns, rows] on a 6 x 2 grid, swiped sideways. Tile sizes differ per page.
  const PAGES = [
    [['campaign', 4, 2], ['mitb', 2, 1], ['rd', 2, 1]],
    [['rr', 3, 2], ['rrw', 3, 1], ['surv', 3, 1]],
    [['pcc', 2, 1], ['rtg', 4, 1], ['ec', 4, 1], ['kotr', 2, 1]],
    [['war', 3, 2], ['case', 3, 2]]
  ];
  let HP = 0;
  function home() {
    if (!S || !S.onb) return welcome();
    const d = getDeck();
    const spk = S.mute ? '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
    const modeBtn = (key, c, r, hi) => {
      const m = MODES.find(x => x[0] === key), area = c * r;
      return '<button style="grid-column:span ' + c + ';grid-row:span ' + r + ';--h:' + ((hi * 37 + 8) % 360) + ';--art:url(' + tileArt(key) + ')" class="mode sz' + (area >= 6 ? 'L' : area >= 3 ? 'M' : 'S') + (V3.modes[key] ? '' : ' soon') + '" onclick="UI.mode(\'' + key + '\')"><span class="ic">' + I[m[2]] + '</span><b>' + m[1] + '</b><small>' + m[3] + '</small></button>';
    };
    let hi = 0;
    screen('<div class="hscr"><div class="hud"><button class="av" onclick="UI.rename()" aria-label="Change name">' + ini(S.name) + '</button>'
      + '<span class="hs"><small>Deck rank</small><b>' + rankNo() + '</b></span>'
      + '<span class="hs"><small>Cards</small><b>' + S.cards.length + '</b></span>'
      + '<span class="hs"><small>Won–Lost</small><b>' + S.stats.wins + '–' + S.stats.losses + '</b></span>'
      + '<button class="hsnd hq" onclick="UI.help()" aria-label="How to play">?</button>'
      + '<button class="hsnd' + (S.mute ? ' off' : '') + '" onclick="UI.mute()" aria-label="Sound">' + spk + '</button></div>'
      + LOGO
      + '<div class="deckcap"><b>' + esc(S.name) + '\'s deck</b><button onclick="UI.deckScreen()">Edit ›</button></div>'
      + '<div class="deckrow">' + d.m.concat(d.f).map(c => face(c, { cls: 'mini', click: 'UI.detail(' + c.u + ')' })).join('') + '</div>'
      + (S.stats.wins + S.stats.losses === 0 ? '<div class="tip"><b>New here?</b> These 6 are your starting team. Hit <em>Play Now</em> for a quick best-of-3, or tap <em>?</em> for a quick guide.</div>' : '')
      + '<button class="btn big go" style="--art:url(' + tileArt('wild') + ')" onclick="UI.mode(\'wild\')"><span>Play Now</span></button>'
      + '<div class="railwrap"><div class="railhead"><b>Game modes</b><span class="pdots">' + PAGES.map((p, k) => '<i class="' + (k === HP ? 'on' : '') + '"></i>').join('') + '</span></div>'
      + '<div class="pager">' + PAGES.map(pg => '<div class="page">' + pg.map(([k, c, r]) => modeBtn(k, c, r, hi++)).join('') + '</div>').join('') + '</div></div>'
      + '<div class="hnav"><button class="tile" onclick="UI.deckScreen()"><span class="ic">' + I.deck + '</span><b>Deck</b></button><button class="tile" onclick="UI.collection()"><span class="ic">' + I.cards + '</span><b>Cards</b></button><button class="tile" onclick="UI.book()"><span class="ic">' + I.star + '</span><b>Book</b></button></div>'
      + devBar() + '</div>');
    const pg = document.querySelector('.pager');
    if (pg) {
      const dots = [...document.querySelectorAll('.pdots i')], step = () => pg.children[1].offsetLeft - pg.children[0].offsetLeft;
      pg.scrollLeft = HP * step();
      pg.addEventListener('scroll', () => { const i = pg.scrollLeft + pg.clientWidth >= pg.scrollWidth - 4 ? PAGES.length - 1 : Math.round(pg.scrollLeft / step()); HP = i; dots.forEach((x, k) => x.classList.toggle('on', k === i)); }, { passive: true });
      dots.forEach((x, k) => { x.onclick = () => pg.scrollTo({ left: k * step(), behavior: 'smooth' }); });
    }
  }
  /* ---------- wrestler art on the mode buttons: random each visit, one card per button ---------- */
  const TA = {};
  function tileArt(k) {
    if (!TA[k]) {
      const women = k === 'rrw' || k === 'ec', used = Object.values(TA);
      const pool = C.filter(c => (!women || c.g === 'F') && !used.includes('../assets/superstars-t/' + c.a + '.webp'));
      TA[k] = '../assets/superstars-t/' + pick(pool.length ? pool : C).a + '.webp';
    }
    return TA[k];
  }

  /* ---------- first run: name, how to play, your starting deck ---------- */
  const esc = t => String(t == null ? '' : t).replace(/[&<>"']/g, ch => '&#' + ch.charCodeAt(0) + ';');
  const cleanName = t => String(t || '').replace(/[^A-Za-z0-9 .'-]/g, '').replace(/\s+/g, ' ').trim().slice(0, 12);
  const ini = n => (String(n || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 2) || 'ME').toUpperCase();
  function welcome(edit) {
    const cur = S && S.name || '';
    screen('<div class="fillscr wel"><div class="fh">' + (edit ? back('UI.home()', 'Home') : '') + '</div><div class="fillmid">' + LOGO
      + '<h2 class="big-title">' + (edit ? 'Your name' : 'Welcome') + '</h2>'
      + '<p class="sub">' + (edit ? 'This shows on your profile and in matches.' : 'Collect wrestlers, build a deck and win matches. Free to play: no energy, timers or purchases, ever.') + '</p>'
      + '<div class="panel namep"><label for="pname">What should we call you?</label><div class="nmrow"><span class="av" id="pav">' + ini(cur) + '</span>'
      + '<input id="pname" maxlength="12" autocomplete="off" autocapitalize="words" spellcheck="false" placeholder="Your name" value="' + esc(cur) + '" oninput="document.getElementById(\'pav\').textContent=UI.ini(this.value)"></div></div></div>'
      + '<div class="fillbot"><button class="btn big" onclick="UI.nameGo(' + (edit ? 1 : 0) + ')">' + (edit ? 'Save' : 'Continue') + '</button></div></div>' + devBar());
  }
  function nameGo(edit) {
    const el = document.getElementById('pname'), nm = cleanName(el && el.value) || 'Champ';
    if (!S) newSave();
    S.name = nm; persist();
    if (edit) home(); else howto(0, false);
  }
  const obDots = (i, n) => '<div class="obdots">' + Array.from({ length: n }, (_, k) => '<i class="' + (k === i ? 'on' : '') + '"></i>').join('') + '</div>';
  const STAT_INFO = ['Slams, lifts and throws', 'Punches, kicks and chops', 'Mat skill and submissions', 'Speed and high flying', 'Crowd and mic work'];
  function howto(i, help) {
    OB = { i, help: !!help };
    const d = getDeck(), N = 4, skip = '<div class="topbar"><button onclick="UI.obDone(0)">' + (help ? '‹ Home' : 'Skip ›') + '</button></div>';
    let h;
    if (i === 0) {
      const c = d.m[0] || d.f[0];
      h = '<h2 class="big-title">Your cards</h2><p class="sub">Every Superstar has 5 stats. Higher is better.</p>@@MID@@'
        + '<div class="obrow"><div class="obcard">' + face(c, { cls: '' }) + '</div><div class="obleg">' + ST.map((s, k) => '<div><span style="--sc:' + s.col + '">' + statImg(k) + '</span><b>' + s.name + '</b><small>' + STAT_INFO[k] + '</small></div>').join('') + '</div></div>'
        + '<div class="panel obnote"><p>The <b>big number</b> top right is the card&rsquo;s level. Everyone starts at level 1, and every level adds <b>+20</b> to all five stats, so a higher level beats a lower level almost every time.</p></div>';
    } else if (i === 1) {
      h = '<h2 class="big-title">Your deck</h2><p class="sub">3 men, 3 women and 2 support cards.</p>@@MID@@'
        + '<div class="obgrid deck6">' + d.m.concat(d.f).map(c => face(c, { cls: 'mini' })).join('') + '</div>'
        + '<div class="obsup">' + d.s.map(s => supFace(s, { cls: 'sm' })).join('') + '</div>'
        + '<div class="panel obnote"><p>We pick your strongest deck automatically. Open <b>Deck</b> on the home screen to swap anyone. Support cards boost certain stats.</p></div>';
    } else if (i === 2) {
      h = '<h2 class="big-title">How a match works</h2>@@MID@@'
        + '<div class="panel obsteps"><ol>'
        + '<li><b>3 matches per game.</b> Solo uses 1 man, Tag uses 2 men, Women&rsquo;s uses 1 woman.</li>'
        + '<li><b>Each match counts certain stats</b>, shown in <span class="gold">gold</span> on your cards. Pick the cards from your hand with the highest total.</li>'
        + '<li><b>Every card can be used once per game</b>, so spend your best ones wisely.</li>'
        + '<li><b>Win 2 of 3 to win the game.</b> Wins earn card picks (3 for a clean sweep). Even a loss gives you 1.</li>'
        + '<li>Tag partners with matching symbols get <i class="g">+10%</i>.</li>'
        + '</ol></div>';
    } else {
      const rest = S.cards.length - 6;
      h = '<h2 class="big-title">Ready!</h2><p class="sub">Your starting team. ' + (rest > 0 ? 'You own ' + S.cards.length + ' cards in total.' : '') + '</p>@@MID@@'
        + '<div class="obgrid">' + d.m.concat(d.f).map(c => face(c, { click: 'UI.detail(' + c.u + ')' })).join('') + '</div>'
        + '<div class="panel obnote"><p>Win matches to open card picks. Pull a duplicate of someone you own and spend it in <b>Cards</b> to level them up. You start with a spare copy of your best man and woman.</p></div>';
    }
    const last = i === N - 1;
    const hp = h.split('@@MID@@');
    screen('<div class="fillscr ob' + i + '"><div class="fh">' + (last ? '<div class="topbar"><button onclick="UI.obStep(' + (i - 1) + ')">‹ Back</button></div>' : skip) + hp[0] + '</div><div class="fillmid">' + hp[1] + '</div><div class="fillbot">' + obDots(i, N)
      + (last ? '<button class="btn big" onclick="UI.obDone(1)">Play a match</button><button class="btn alt" onclick="UI.obDone(0)">Go to home</button>'
        : '<button class="btn big" onclick="UI.obStep(' + (i + 1) + ')">Next</button>' + (i ? '<button class="btn alt" onclick="UI.obStep(' + (i - 1) + ')">Back</button>' : '')) + '</div></div>');
  }
  let OB = { i: 0, help: false };
  function obDone(play) { S.onb = 1; persist(); if (play) wild(); else home(); }
  function start() { newSave(); S.onb = 1; persist(); home(); }
  function devBar() {
    if (!DEV) return '';
    return '<div class="dev"><b>DEV</b> <button onclick="UI.dev(\'cards\')">+20 cards</button><button onclick="UI.dev(\'max\')">best cards L100</button><button onclick="UI.dev(\'reset\')">reset</button></div>';
  }
  function dev(w) {
    if (!DEV) return;
    if (w === 'reset') { S = null; try { localStorage.removeItem(KEY); } catch (e) { } return home(); }
    if (!S) { newSave(); S.onb = 1; }
    if (w === 'cards') for (let i = 0; i < 20; i++) give(Math.floor(rnd() * C.length));
    if (w === 'max') { S.cards.forEach(c => { c.lvl = 100; c.d = 0; }); autoDeck(); }
    persist(); home();
  }

  /* ---------- collection / book / detail ---------- */
  let COL = { tab: 'all', sort: 'power' };
  function collection(tab) {
    if (tab) COL.tab = tab;
    const tabs = [['all', 'All'], ['m', 'Men'], ['f', 'Women'], ['s', 'Support']];
    let list;
    if (COL.tab === 's') list = S.sups.slice().sort((a, b) => SUP[b.s].pct - SUP[a.s].pct);
    else {
      list = S.cards.filter(c => COL.tab === 'all' || (COL.tab === 'f') === E.isF(c));
      list.sort(COL.sort === 'power' ? (a, b) => E.total(b) - E.total(a) : COL.sort === 'lvl' ? (a, b) => b.lvl - a.lvl || (b.d || 0) - (a.d || 0) || E.total(b) - E.total(a) : (a, b) => C[a.c].n.localeCompare(C[b.c].n));
    }
    const inDeck = u => S.deck.m.includes(u) || S.deck.f.includes(u) || S.deck.s.includes(u);
    const items = COL.tab === 's' ? list.map(s => supFace(s, { cls: 'pgs' + (inDeck(s.u) ? ' indeck' : '') })) : list.map(c => face(c, { cls: 'mini' + (inDeck(c.u) ? ' indeck' : ''), click: 'UI.detail(' + c.u + ')' }));
    screen(back('UI.home()', 'Home') + '<div class="seg">' + tabs.map(t => '<button class="' + (COL.tab === t[0] ? 'on' : '') + '" onclick="UI.collection(\'' + t[0] + '\')">' + t[1] + '</button>').join('') + '</div>'
      + (COL.tab === 's' ? '' : '<div class="seg small">' + [['power', 'Overall'], ['lvl', 'Level'], ['name', 'A–Z']].map(t => '<button class="' + (COL.sort === t[0] ? 'on' : '') + '" onclick="COL_SORT(\'' + t[0] + '\')">' + t[1] + '</button>').join('') + '</div>')
      + pagedCards('col' + COL.tab + COL.sort, items, COL.tab === 's' ? { cols: 2, aspect: 0.5, reserve: 175 } : { cols: [3, 4], reserve: 170 }));
  }
  window.COL_SORT = k => { COL.sort = k; collection(); };
  function book() {
    const have = new Set(S.cards.map(c => c.c)), total = C.length;
    screen(back('UI.home()', 'Home') + '<h3 class="mini-title">Collection Book <small>' + have.size + ' of ' + total + ' found</small></h3>'
      + '<div class="bar"><i style="width:' + have.size / total * 100 + '%"></i></div>'
      + pagedCards('book', C.map((c, i) => '<div class="bk' + (have.has(i) ? '' : ' miss') + '" style="--rc:#2b3050">' + art(c) + '<span>' + c.n + '</span></div>'), { cols: 6, aspect: 1.33, reserve: 165 }));
  }
  let DT = 'lvl';
  function dtab(u, t) { DT = t; detail(u); }
  function detail(u) {
    const inst = byU(u); if (!inst) return collection();
    const c = C[inst.c], st = E.stats(inst), ss = E.sigStats(inst), mx = Math.max.apply(null, st);
    const arrows = Array.from({ length: 9 }, (_, i) => i === 4 ? '<i class="ctr"></i>' : '<i></i>');
    const ar = { 0: 1, 1: 2, 2: 5, 3: 8, 4: 7, 5: 6, 6: 3, 7: 0 }; // dir -> cell in a 3x3 around the centre
    c.ar.forEach(d => { arrows[ar[d]] = '<i class="on">' + '↑↗→↘↓↙←↖'[d] + '</i>'; });
    const panels = {
      lvl: '<p class="edge">Level <b>' + fmt(inst.lvl) + '</b> · +' + fmt((inst.lvl - 1) * E.T.levelAdd) + ' to every stat. Each level adds +' + E.T.levelAdd + ' to all five stats, with no maximum, so a higher level beats a lower one almost every time.</p>'
        + '<p class="edge dupline">' + (inst.d ? 'You have <b>' + inst.d + '</b> spare duplicate' + (inst.d > 1 ? 's' : '') + ' of ' + c.n + '.' : 'Get a duplicate of ' + c.n + ' from a card pick to level this card up.') + '</p>'
        + '<div class="btnrow"><button class="btn" ' + (inst.d ? '' : 'disabled') + ' onclick="UI.levelUp(' + inst.u + ')">Level up</button>' + (inst.d > 1 ? '<button class="btn alt" onclick="UI.levelUp(' + inst.u + ',1)">Use all ' + inst.d + '</button>' : '') + '</div>',
      sig: '<p class="edge"><b style="color:var(--gold2)">' + c.f + '</b> — ' + Math.round(E.sigChance() * 100) + '% chance each match to boost <b>' + ST[ss[0]].name + '</b> and <b>' + ST[ss[1]].name + '</b> by ' + Math.round(E.T.sigBoost * 100) + '% of base stats.</p><p class="edge">Matches played: ' + Math.min(100, inst.mt) + ' / 100 (+' + Math.round(Math.min(100, inst.mt) * 0.1) + '% of base stats).</p>',
      tag: '<div class="tagrow"><div class="arrows">' + arrows.join('') + '</div><p class="edge">Tag symbol <b class="sym ' + c.sym + '" style="position:static;background:none">' + SYMCH[c.sym] + '</b>. Opposite arrows of the same colour make a diamond (+10%); mixed colours −5%. Lit squares show where this card can challenge in Ring Domination.</p></div>'
    };
    const tabs = [['lvl', 'Level up'], ['sig', 'Signature'], ['tag', 'Tag &amp; ring']];
    screen('<div class="fillscr dscr"><div class="fh">' + back('UI.collection()', 'Cards') + '</div>'
      + '<div class="dtl"><div class="dcard">' + face(inst, { cls: 'big' }) + '</div><div class="dstats"><h3>' + (E.isF(inst) ? 'Women' : 'Men') + ' · Level ' + fmt(inst.lvl) + '</h3>'
      + st.map((v, i) => '<div class="srow">' + statImg(i) + '<span class="sn">' + ST[i].name + '<b>' + fmt(v) + '</b></span><span class="bar" style="--sc:' + ST[i].col + '"><i style="width:' + Math.max(4, v / mx * 100) + '%"></i></span></div>').join('') + '</div></div>'
      + '<div class="seg dtabs">' + tabs.map(t => '<button class="' + (DT === t[0] ? 'on' : '') + '" onclick="UI.dtab(' + inst.u + ',\'' + t[0] + '\')">' + t[1] + '</button>').join('') + '</div>'
      + '<div class="panel dpanel">' + panels[DT] + '</div></div>');
  }
  function levelUp(u, all) { const t = byU(u); if (!t) return; if (E.levelUp(t, all)) { sfx('win'); persist(); } detail(u); }

  /* ---------- deck builder ---------- */
  let DP = null;
  function deckScreen() {
    const d = getDeck();
    const slot = (kind, i, inst) => inst ? (kind === 's' ? supFace(inst, { cls: 'slotc', click: "UI.deckPick('s'," + i + ')' }) : face(inst, { cls: 'slotc mini', click: 'UI.deckPick(\'' + kind + '\',' + i + ')' })) : '<div class="empty" onclick="UI.deckPick(\'' + kind + '\',' + i + ')">+</div>';
    screen(back('UI.home()', 'Home') + '<h3 class="mini-title">Your deck <small>rank ' + rankNo() + ' · tap a card to swap it</small></h3>'
      + '<h3 class="sect">Men (3)</h3><div class="slots">' + d.m.map((c, i) => slot('m', i, c)).join('') + '</div>'
      + '<h3 class="sect">Women (3)</h3><div class="slots">' + d.f.map((c, i) => slot('f', i, c)).join('') + '</div>'
      + '<h3 class="sect">Support (2)</h3><div class="slots two">' + d.s.map((c, i) => slot('s', i, c)).join('') + '</div>'
      + '<button class="btn" onclick="UI.deckAuto()">Auto-build best deck</button>');
  }
  function deckPick(kind, i) {
    DP = { kind, i };
    const cur = S.deck[kind];
    let list;
    if (kind === 's') list = S.sups.filter(s => !cur.includes(s.u) || cur[i] === s.u).sort((a, b) => SUP[b.s].pct * SUP[b.s].stats.length - SUP[a.s].pct * SUP[a.s].stats.length);
    else list = S.cards.filter(c => (kind === 'f') === E.isF(c) && (!cur.includes(c.u) || cur[i] === c.u)).sort((a, b) => E.total(b) - E.total(a));
    screen(back('UI.deckScreen()', 'Deck') + '<h3 class="mini-title">Choose <small>' + (kind === 's' ? 'a support card' : kind === 'f' ? 'a woman' : 'a man') + '</small></h3>'
      + pagedCards('dp' + kind, list.map(x => kind === 's' ? supFace(x, { cls: 'pgs', click: 'UI.deckSet(' + x.u + ')' }) : face(x, { cls: 'mini', click: 'UI.deckSet(' + x.u + ')' })), kind === 's' ? { cols: 2, aspect: 0.5, reserve: 120 } : { cols: 4, reserve: 130 }));
  }
  function deckSet(u) { S.deck[DP.kind][DP.i] = u; persist(); deckScreen(); }
  function deckAuto() { autoDeck(); persist(); deckScreen(); }

  /* ---------- card picks ---------- */
  let PT = null;
  // Reward screen: n face-down picks. Every pick is a random wrestler or support card.
  function awardPicks(n, then, title) {
    PT = { n, left: n, table: E.pickTable(power(), rnd), got: [], last: null, then: then || home, title: title || 'Card Picks' };
    S.stats.picks += n; persist();
    renderPicks();
  }
  function renderPicks() {
    const p = PT, sh = p.show;
    const ov = sh ? '<div class="pickov"><div class="gotbox' + (sh.inst && sh.isNew ? ' burst' : '') + '" style="--rc:#ffd34d">' + (sh.sup ? supFace(sh.sup, { cls: 'reveal-in' }) : face(sh.inst, { cls: 'reveal-in gotcard' }))
      + '<div class="gotlbl">' + (sh.isNew ? 'NEW WRESTLER!' : sh.sup ? 'SUPPORT CARD' : 'DUPLICATE!<br><small>Spend it on this wrestler in Cards → Level up</small>') + '</div></div>'
      + '<button class="btn big" onclick="UI.pickNext()">' + (p.left > 0 ? 'Next pick (' + p.left + ' left)' : 'Continue') + '</button></div>' : '';
    const gn = p.got.length, gc = gn <= 1 ? 1 : gn <= 4 ? 2 : 3, gr = Math.ceil(gn / gc);
    screen('<div class="fillscr pkscr"><div class="fh"><h2 class="big-title">' + p.title + '</h2><p class="sub">' + (p.left > 0 ? p.left + ' pick' + (p.left === 1 ? '' : 's') + ' left. Tap a card.' : 'All picks used') + '</p></div><div class="fillmid">'
      + (p.left > 0 ? '<div class="pickgrid">' + p.table.map((s, i) => '<button class="pk' + (s.open ? ' open' : '') + '" ' + (s.open ? 'disabled' : '') + ' onclick="UI.pick(' + i + ')">' + (s.open ? (s.k === 'card' ? '<span style="color:#ffd34d">★</span>' : '<span>✦</span>') : '?') + '</button>').join('') + '</div>'
        : '<div class="recap" style="--gc:' + gc + ';--gr:' + gr + '">' + p.got.map(g => g.sup ? supFace(g.sup, { cls: 'mini' }) : face(g.inst, { cls: 'mini' })).join('') + '</div>')
      + '</div><div class="fillbot">' + (p.left > 0 ? '' : '<button class="btn big" onclick="UI.picksDone()">Done</button>') + '</div></div>' + ov);
  }
  function pickNext() { PT.show = null; renderPicks(); }
  function pickSlot(i) {
    const p = PT, s = p.table[i]; if (!s || s.open || p.left < 1 || p.show) return;
    s.open = true; p.left--;
    if (s.k === 'sup') { const o = giveSup(s.s); p.last = { sup: o }; p.got.push(p.last); }
    else { const r = give(s.c); p.last = r; p.got.push(r); }
    p.show = p.last;
    persist(); renderPicks();
    sfx(p.last && p.last.isNew ? 'rare' : 'flip');
  }
  function picksDone() { const t = PT.then; PT = null; t(); }

  /* ---------- the 3-match game ---------- */
  let GM = null;
  // cfg: {title, deckA, deckB, oppName, oppRec, onEnd(g), specs?, back?}
  function startGame(cfg) {
    const rng = rnd;
    GM = { cfg, g: E.newGame(cfg.deckA, cfg.deckB, rng, { specs: cfg.specs }), sel: [], sup: null, last: null };
    pickPhase();
  }
  const specOf = g => g.extra ? E.extraSpec() : g.specs[g.results.length];
  function eligible(spec, inst, g) {
    if (!E.availCards(g.a).includes(inst)) return false;
    if (spec.extra) return true;
    const n = E.cardsNeeded(spec.type);
    return E.isF(inst) ? n.f > 0 : n.m > 0;
  }
  function needCount(spec) { const n = E.cardsNeeded(spec.type); return spec.extra ? 1 : n.m + n.f; }
  function specLine(sp, i, g) {
    const r = g.results[i], cls = r ? (r.winner === 'a' ? 'won' : r.winner === 'b' ? 'lost' : 'tied') : (i === g.results.length ? 'cur' : '');
    return '<div class="spec ' + cls + '"><span class="ic">' + I[sp.type] + '</span><small>' + E.TYPE_NAME[sp.type] + '</small><span class="sp">' + sp.stats.map(statImg).join('') + '</span></div>';
  }
  const initials = n => n.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase();
  const arenaBG = '<div class="arena-bg"><div class="spots"></div><div class="ringfloor"><i></i><i></i><i></i></div><div class="crowd"></div></div>';
  const backs = (cards, used) => '<div class="backs">' + cards.map((c, i) => '<i class="back ' + (used.includes(c) ? 'used' : '') + '" style="--r:' + ((i - (cards.length - 1) / 2) * 7) + 'deg"><b>WS</b></i>').join('') + '</div>';
  const plate = (name, sub, pts, me) => '<div class="plate ' + (me ? 'me' : 'foe') + '"><span class="av">' + initials(name) + '</span><span class="pn"><b>' + name + '</b><small>' + sub + '</small></span><span class="ptsb">' + pts + '<small>PTS</small></span></div>';
  const statTags = hl => '<div class="stags">' + ST.map((s, i) => '<span style="--sc:' + s.col + '" class="' + (hl.includes(i) ? 'on' : '') + '">' + statImg(i) + s.ab + '</span>').join('') + '</div>';
  function pickPhase() {
    const { g, cfg } = GM, spec = specOf(g), d = g.a.deck;
    const need = needCount(spec), sel = GM.sel, hl = spec.stats, hand = handFor(spec, d, g), ok = sel.length === need;
    let sub = 'Deck rank ' + rankNo();
    if (sel.length) {
      let tot = sel.reduce((a, c) => a + vsum(c, spec), 0), tg = '';
      if (sel.length === 2 && spec.type === 'tag') { const m = E.tagMod(sel[0], sel[1]); tot = Math.round(tot * m); tg = m > 1 ? ' · <i class="g">DIAMOND +10%</i>' : m < 1 ? ' · <i class="r">MISMATCH −5%</i>' : ''; }
      sub = '<span class="tot">TOTAL ' + fmt(tot) + '</span>' + tg;
    }
    const supsHTML = d.s.map((s, i) => {
      const used = g.a.supUsed.includes(s), helps = hl.some(x => SUP[s.s].stats.includes(x)), D = SUP[s.s];
      return '<button class="supb ' + (used ? 'used ' : '') + (GM.sup === s ? 'on ' : '') + (helps && !used ? 'helps' : '') + '" ' + (used ? 'disabled' : 'onclick="UI.supTog(' + i + ')"') + '><span class="si">' + I[D.id] + '</span><small>+' + Math.round(D.pct * 100) + '%</small></button>';
    }).join('');
    const foeCards = cfg.deckB.m.concat(cfg.deckB.f);
    const slot = sel.length ? sel.map(c => face(c, { cls: 'slotbig' + (sel.length > 1 ? ' two' : ''), hl, val: vsum(c, spec), click: 'UI.selTog(' + hand.indexOf(c) + ')' })).join('') : '<div class="slotempty"><span class="ic">' + I[spec.type] + '</span><b>' + (spec.extra ? 'TIE-BREAK' : E.TYPE_NAME[spec.type].toUpperCase()) + '</b><small>Tap ' + need + ' card' + (need > 1 ? 's' : '') + ' to play</small></div>';
    screen(arenaBG + '<div class="mscreen mpk">'
      + '<div class="topline">' + plate(cfg.oppName, cfg.oppRec || cfg.title, g.b.pts, false) + '</div>' + backs(foeCards, g.b.used)
      + '<div class="mnum"><span>' + (g.extra ? 'EXTRA' : 'MATCH ' + (g.results.length + 1)) + '</span><div class="mdots">' + (g.extra ? '' : g.specs.map((sp, i) => { const r = g.results[i]; return '<i class="' + (r ? (r.winner === 'a' ? 'won' : r.winner === 'b' ? 'lost' : 'tied') : i === g.results.length ? 'cur' : '') + '"></i>'; }).join('')) + '</div></div>'
      + statTags(hl)
      + '<div class="slotarea ' + (sel.length > 1 ? 'dbl' : '') + '">' + slot + '</div>'
      + '<div class="meline">' + plate(S.name || 'You', sub, g.a.pts, true) + '<div class="supcol">' + supsHTML + '</div></div>'
      + '<div class="tray">' + hand.map((c, i) => {
        const used = g.a.used.includes(c), elig = eligible(spec, c, g);
        return face(c, { cls: 'tr ' + (used ? 'used ' : !elig ? 'dim ' : '') + (sel.includes(c) ? 'sel' : ''), hl, val: elig ? vsum(c, spec) : null, click: elig ? 'UI.selTog(' + i + ')' : '' });
      }).join('') + '</div>'
      + '</div>');
  }
  // Solo/Tag matches show your men, Women's matches your women, a tie-break any unused card.
  const handFor = (spec, d, g) => spec.extra ? d.m.concat(d.f).filter(c => !g.a.used.includes(c)) : spec.type === 'divas' ? d.f : d.m;
  const vsum = (c, spec) => spec.stats.reduce((a, i) => a + E.stats(c)[i], 0);
  function selTog(i) {
    const { g } = GM, spec = specOf(g), d = g.a.deck, hand = handFor(spec, d, g), c = hand[i], need = needCount(spec);
    if (GM.locked) return;
    const k = GM.sel.indexOf(c);
    if (k >= 0) GM.sel.splice(k, 1);
    else {
      if (!eligible(spec, c, g)) return;
      if (GM.sel.length >= need) GM.sel.shift();
      GM.sel.push(c);
    }
    pickPhase();
    // Tapping the last card the match needs plays it straight away (choose a support card first if you want one).
    if (GM.sel.length === need) { GM.locked = true; setTimeout(() => { GM.locked = false; if (GM.sel.length === need) play(); }, 380); }
  }
  function supTog(i) { if (GM.locked) return; const s = GM.g.a.deck.s[i]; GM.sup = GM.sup === s ? null : s; pickPhase(); }
  function play() {
    const { g, cfg } = GM, spec = specOf(g), need = needCount(spec);
    if (GM.sel.length !== need) return;
    const mine = GM.sel.slice(), sup = GM.sup;
    mine.forEach(c => { c.mt = (c.mt || 0) + 1; });
    const res = g.extra ? E.playExtra(g, { cards: mine, sup }) : E.playMatch(g, { cards: mine, sup });
    GM.sel = []; GM.sup = null; GM.last = res; persist();
    reveal(res);
  }
  function sideBlock(side, res, spec) {
    const r = res[side], win = res.winner === side, name = side === 'a' ? 'You' : GM.cfg.oppName, n = r.cards.length;
    return '<div class="rrow ' + side + (win ? ' win' : res.winner ? ' lose' : '') + '"><div class="rcards n' + n + '">' + r.cards.map((c, k) => face(c, { cls: 'rc flip' + (r.parts[k].sig ? ' sigflash' : ''), hl: spec.stats, val: r.parts[k].value | 0 })).join('') + '</div>'
      + '<div class="rscore"><div class="who3"><span class="av">' + initials(name) + '</span><b>' + name + '</b>' + (win ? '<em class="stamp">WINNER</em>' : '') + '</div>'
      + '<div class="paper"><span class="rtotal" data-t="' + r.total + '">0</span></div><div class="rchips">'
      + r.parts.map((p, k) => p.sig ? '<span class="chip gold">SIGNATURE · ' + C[r.cards[k].c].f + '</span>' : '').join('')
      + (r.tag > 1 ? '<span class="chip gold">DIAMOND +10%</span>' : r.tag < 1 ? '<span class="chip red">MISMATCH −5%</span>' : '')
      + (r.sup ? '<span class="chip cyan">' + SUP[r.sup.s].name + (r.boost ? ' +' + Math.round(r.boost * 100) + '%' : ' (no effect)') + '</span>' : '') + '</div></div></div>';
  }
  function reveal(res) {
    const { g } = GM, spec = res.spec.extra ? E.extraSpec() : res.spec;
    const w = res.winner;
    screen(arenaBG + '<div class="mscreen">'
      + '<div class="mnum"><span>' + (spec.extra ? 'EXTRA MATCH' : 'MATCH ' + (res.idx + 1)) + '</span><small>' + E.TYPE_NAME[spec.type] + '</small></div>' + statTags(spec.stats)
      + '<div class="rarena">' + sideBlock('b', res, spec) + '<div class="vsline"><b>VS</b></div>' + sideBlock('a', res, spec) + '</div>'
      + '<div class="verdict late ' + (w === 'a' ? 'w' : w === 'b' ? 'l' : 't') + '">' + (w === 'a' ? 'YOU WIN THE MATCH' : w === 'b' ? 'THEY WIN THE MATCH' : 'DRAW — BOTH SCORE') + ' · ' + g.a.pts + '–' + g.b.pts + '</div>'
      + '<button class="btn big play sticky" onclick="UI.afterMatch()">' + (g.over ? 'FINISH' : 'NEXT MATCH') + '</button></div>');
    if (res.a.parts.concat(res.b.parts).some(x => x.sig)) setTimeout(() => sfx('sig'), 500);
    setTimeout(() => sfx(w === 'a' ? 'win' : w === 'b' ? 'lose' : 'flip'), 1150);
    document.querySelectorAll('.rtotal').forEach(el => { const t = +el.dataset.t, t0 = performance.now() + 450; (function tick(now) { const k = Math.max(0, Math.min(1, (now - t0) / 800)); el.textContent = fmt(Math.round(t * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(tick); })(t0); });
  }
  function afterMatch() {
    const { g, cfg } = GM;
    if (!g.over) return pickPhase();
    const win = g.winner === 'a', perf = E.perfect(g);
    S.stats[win ? 'wins' : 'losses']++; if (perf) S.stats.perfect++; persist();
    GM.done = () => cfg.onEnd(g);
    const n = E.picksFor(g), me = S.name || 'You';
    const thumb = c => '<img src="../assets/superstars-t/' + C[c.c].a + '.webp" alt="">';
    const rows = g.results.map((r, i) => {
      const t = r.spec && r.spec.extra ? 'Tie-break' : E.TYPE_NAME[r.spec.type], w = r.winner;
      return '<div class="vrow ' + (w === 'a' ? 'w' : w === 'b' ? 'l' : 't') + '" style="--i:' + i + '"><span class="vm"><b>' + (r.spec && r.spec.extra ? 'EX' : i + 1) + '</b><small>' + t + '</small></span>'
        + '<span class="vt a ' + (w === 'a' ? 'win' : '') + '"><span class="th">' + r.a.cards.map(thumb).join('') + '</span><b>' + fmt(Math.round(r.a.total)) + '</b></span>'
        + '<i class="vv">' + (w === 'a' ? 'W' : w === 'b' ? 'L' : 'D') + '</i>'
        + '<span class="vt b ' + (w === 'b' ? 'win' : '') + '"><b>' + fmt(Math.round(r.b.total)) + '</b><span class="th">' + r.b.cards.map(thumb).join('') + '</span></span></div>';
    }).join('');
    const confetti = win ? '<div class="vconf">' + Array.from({ length: 22 }, (_, k) => '<i style="left:' + ((k * 47) % 100) + '%;--d:' + (2.6 + (k % 5) * 0.5) + 's;--w:' + ((k % 7) * 0.18) + 's;--c:' + ['#ffd23f', '#ff7a1a', '#fff', '#38bdf8', '#ff4d5a'][k % 5] + '"></i>').join('') + '</div>' : '';
    screen('<div class="victory ' + (win ? 'vw' : 'vl') + '">' + confetti
      + '<div class="vhead"><small>' + (perf ? 'PERFECT · 3–0' : win ? 'YOU WON THE GAME' : 'YOU LOST THE GAME') + '</small><h1>' + (win ? 'VICTORY!' : 'DEFEAT') + '</h1></div>'
      + '<div class="vsc2"><div class="vside me"><span class="av">' + initials(me) + '</span><em>' + esc(me) + '</em></div><div class="vnums"><b class="' + (win ? 'g' : '') + '">' + g.a.pts + '</b><i>–</i><b class="' + (!win && g.b.pts > g.a.pts ? 'g' : '') + '">' + g.b.pts + '</b></div><div class="vside vfoe"><span class="av">' + initials(cfg.oppName) + '</span><em>' + esc(cfg.oppName) + '</em></div></div>'
      + '<div class="vrows">' + rows + '</div>'
      + '<div class="vrew"><div class="vbacks">' + Array.from({ length: n }, (_, k) => '<i style="--k:' + k + '"><b>WS</b></i>').join('') + '</div><div class="vrt"><b>' + n + '× CARD PICK' + (n > 1 ? 'S' : '') + '</b><small>' + (perf ? 'Clean sweep bonus!' : win ? 'Win 3–0 for a bonus pick' : 'A loss still earns a pick') + '</small></div></div>'
      + '<div class="vrec"><span>Record <b>' + S.stats.wins + '–' + S.stats.losses + '</b></span><span>Perfect wins <b>' + S.stats.perfect + '</b></span><span>Deck rank <b>' + rankNo() + '</b></span></div>'
      + '<button class="btn big go2" onclick="UI.gameDone()">Continue</button></div>');
    sfx(win ? 'win' : 'lose');
  }
  function gameDone() { const d = GM.done; d(); }

  /* ---------- Wild ---------- */
  function wild() {
    const opps = E.opponents(power(), rnd, 3); WILD = opps;
    const star = o => { const all = o.deck.m.concat(o.deck.f).sort((a, b) => E.total(b) - E.total(a)); return all[0] ? C[all[0].c].a : ''; };
    screen('<div class="fillscr wildscr"><div class="fh">' + back('UI.home()', 'Home') + '<h2 class="big-title">Play Now</h2><p class="sub">Pick an opponent. Win 2 picks, perfect win 3, a loss still gives 1.</p></div><div class="fillmid oppcol">'
      + opps.map((o, i) => '<button class="opp bigopp ' + o.label.toLowerCase() + '" style="--art:url(../assets/superstars-t/' + star(o) + '.webp)" onclick="UI.wildGo(' + i + ')"><span class="av">' + o.name.slice(0, 2).toUpperCase() + '</span><span class="on"><b>' + o.name + '</b><small>' + o.record + ' · deck rank ' + Math.round(E.deckPower(o.deck) / 10) + '</small></span><span class="tag ' + o.label.toLowerCase() + '">' + o.label + '</span></button>').join('')
      + '</div><div class="fillbot"><p class="edge" style="text-align:center;margin:0">Your deck rank <b>' + rankNo() + '</b></p></div></div>');
  }
  let WILD = [];
  function wildGo(i) {
    const o = WILD[i];
    startGame({ title: 'Play Now', deckA: getDeck(), deckB: o.deck, oppName: o.name, oppRec: o.record, onEnd: g => awardPicks(E.picksFor(g), wild, 'Match rewards') });
  }

  /* ---------- exports ---------- */
  const V3 = { paged: pagedCards, E, C, RAR, SUP, ST, I, get S() { return S; }, persist, give, giveSup, byU, getDeck, power, rankNo, face, supFace, art, screen, back, home, awardPicks, startGame, statImg, fmt, pick, rnd, clamp, uid, modes: {}, specOf, autoDeck };
  window.V3 = V3;
  window.UI = {
    mute: () => { S.mute = !S.mute; persist(); home(); }, home, start, ini, nameGo, obStep: i => howto(i, OB.help), obDone, help: () => howto(0, true), rename: () => welcome(true), dev, collection, book, detail, levelUp, pgGo, dtab, pickNext, deckScreen, deckPick, deckSet, deckAuto,
    pick: pickSlot, picksDone, selTog, supTog, play, afterMatch, gameDone, wild, wildGo,
    mode: k => { if (k === 'wild') return wild(); if (V3.modes[k]) return V3.modes[k](); soon(k); }
  };
  function soon(k) { const m = MODES.find(x => x[0] === k); screen(back('UI.home()', 'Home') + '<h2 class="big-title">' + m[1] + '</h2><div class="panel"><p class="edge">Coming next.</p></div>'); }
  S = load();
  window.V3.boot = () => home();
})();
