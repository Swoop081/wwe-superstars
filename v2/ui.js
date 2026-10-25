/* WWE Superstars v2 — mobile UI. Pure view layer over Engine; the save lives in localStorage. */
(function () {
  'use strict';
  const E = window.Engine, R = window.ROSTER, T = E.TUNE;
  const SAVE_KEY = 'wweSuperstarsV2';
  const DEV = new URLSearchParams(location.search).has('dev');
  const app = document.getElementById('app');
  const idxOf = Object.fromEntries(R.map((w, i) => [w.n, i]));
  let save = null, B = null, shown = null; // B = current battle controller

  /* ---------- save ---------- */
  function load() { try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); if (s && s.owned) return s; } catch (e) { } return null; }
  function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { } }
  const ownedList = () => Object.keys(save.owned).map(n => R[idxOf[n]]).filter(Boolean)
    .sort((a, b) => save.owned[b.n] - save.owned[a.n] || a.n.localeCompare(b.n));
  const bestLevel = () => Math.max(1, ...Object.values(save.owned));
  // Give a card: new card = level 1; duplicate = merges into the owned card (+1 level).
  function give(w) {
    const old = save.owned[w.n] || 0;
    save.owned[w.n] = old + 1;
    persist();
    return { w, from: old, to: old + 1, isNew: old === 0 };
  }

  /* ---------- helpers ---------- */
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const lv = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const pct = (x) => Math.round(x * 100);
  const today = () => { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };
  const untilMidnight = () => { const n = new Date(), m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1); const s = Math.max(0, Math.floor((m - n) / 1000)); return Math.floor(s / 3600) + 'h ' + String(Math.floor(s % 3600 / 60)).padStart(2, '0') + 'm'; };
  let pending = null; // reward cards still to open: {left,total}
  const STREAK_BONUS = 3; // every 3rd win in a row earns a bonus card
  const art = w => '<img class="art" src="../assets/superstars/' + w.a + '.webp" alt="" loading="lazy" onerror="this.onerror=null;this.src=\'../assets/superstars/' + w.a + '.png\'">';
  const screen = html => { app.innerHTML = html; window.scrollTo(0, 0); };

  // The card is the artwork: full-bleed art, level, HP and name. Stats never sit on the art.
  function cardHTML(w, level, o) {
    o = o || {};
    return '<div class="card ' + (w.p === 'Main Event' ? 'tier-main ' : '') + (o.cls || '') + '"' + (o.click ? ' onclick="' + o.click + '"' : '') + '>'
      + '<div class="artwrap">' + art(w) + '</div>'
      + '<div class="lvl"><small>LVL</small><b>' + lv(level) + '</b></div>'
      + '<div class="hp"><small>HP</small><b>' + E.fmtHp(w, level) + '</b></div>'
      + '<div class="nameplate">' + w.n + '</div></div>';
  }
  // Stats live in their own panel under the card (bars show the card's shape; numbers are the real values).
  function statsPanel(w, level) {
    const max = Math.max(...w.s), min = Math.min(...w.s);
    return '<div class="panel"><h3>Stats · Level ' + lv(level) + '</h3>' + E.STATS.map((st, i) =>
      '<div class="srow ' + (w.s[i] === max ? 'best' : w.s[i] === min ? 'worst' : '') + '"><img src="../assets/' + st.icon + '" alt=""><span class="sn">' + st.name + '</span><span class="bar"><i style="width:' + w.s[i] + '%"></i></span><b>' + E.fmtStat(w.s[i], level) + '</b></div>'
    ).join('') + '<div class="srow fin"><img src="../assets/finisher.png" alt=""><span class="sn">Finisher</span><b>' + w.f + '</b></div></div>';
  }

  /* ---------- screens ---------- */
  function devBar() {
    if (!DEV) return '';
    return '<div class="dev"><b>DEV</b><br><button onclick="UI.dev(\'cards\')">+10 random cards</button><button onclick="UI.dev(10)">all → LVL 10</button><button onclick="UI.dev(100)">all → LVL 100</button><button onclick="UI.dev(10000)">all → LVL 10,000</button><button onclick="UI.dev(\'reset\')">reset save</button></div>';
  }

  function home() {
    B = null;
    if (!save) return welcome();
    screen('<h1 class="title">WWE Superstars</h1><p class="sub">Collect · merge · level up forever</p>'
      + '<div class="stats-row"><div class="stat-box"><b>' + Object.keys(save.owned).length + '/' + R.length + '</b><small>Cards</small></div>'
      + '<div class="stat-box"><b>' + save.wins + '–' + save.losses + '</b><small>W–L</small></div>'
      + '<div class="stat-box"><b>' + lv(bestLevel()) + '</b><small>Best level</small></div></div>'
      + (save.daily !== today() ? '<button class="btn" style="background:var(--green);color:#04210f" onclick="UI.daily()">🎁 Free daily card</button>' : '<p class="edge" style="text-align:center">Next free card in ' + untilMidnight() + '</p>')
      + '<p class="edge" style="text-align:center">🔥 Win streak ' + (save.streak || 0) + ' · every ' + STREAK_BONUS + 'rd win in a row = bonus card (' + (STREAK_BONUS - ((save.streak || 0) % STREAK_BONUS)) + ' to go)</p>'
      + '<button class="btn" onclick="UI.fightSelect()">Fight</button>'
      + '<button class="btn alt" onclick="UI.collection()">Collection</button>'
      + devBar()
      + '<p class="note">Win a match to earn a random card. A duplicate merges into your card and raises its level — every stat and HP grows ×' + T.m + ' per level.</p>');
  }

  function welcome() {
    screen('<h1 class="title">WWE Superstars</h1><p class="sub">Your collection starts here.</p>'
      + '<div class="panel"><h3>Starter pack</h3><p>Five random Superstars, all level 1. Beat opponents to win more cards — duplicates merge into your card and level it up.</p></div>'
      + '<button class="btn" onclick="UI.starter()">Open starter pack</button>' + devBar());
  }
  function starter() {
    save = { owned: {}, wins: 0, losses: 0 };
    const pool = R.slice(), got = [];
    while (got.length < 5) got.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    got.forEach(give);
    screen('<div class="reveal"><h2 class="big-title">Starter pack</h2><div class="grid">' + got.map(w => cardHTML(w, 1, { cls: 'reveal-in' })).join('') + '</div><button class="btn" onclick="UI.home()">Let\'s go</button></div>');
  }

  function collection() {
    const list = ownedList();
    screen('<div class="topbar"><button onclick="UI.home()">‹ Home</button><span>' + list.length + ' of ' + R.length + ' cards</span></div>'
      + '<div class="grid">' + list.map(w => cardHTML(w, save.owned[w.n], { cls: 'pick', click: 'UI.detail(' + idxOf[w.n] + ')' })).join('') + '</div>');
  }
  function detail(i) {
    const w = R[i], l = save.owned[w.n];
    screen('<div class="topbar"><button onclick="UI.collection()">‹ Collection</button><span>' + w.p + '</span></div>'
      + cardHTML(w, l, { cls: 'big' })
      + statsPanel(w, l)
      + '<div class="panel"><h3>Next level</h3><p class="edge">Every stat and HP ×' + T.m + ' — Power ' + E.fmtStat(w.s[0], l) + ' → ' + E.fmtStat(w.s[0], l + 1) + '. Win a duplicate to merge it in.</p></div>');
  }

  function fightSelect() {
    const list = ownedList();
    screen('<div class="topbar"><button onclick="UI.home()">‹ Home</button><span>Choose your fighter</span></div>'
      + '<div class="grid">' + list.map(w => cardHTML(w, save.owned[w.n], { cls: 'pick', click: 'UI.preview(' + idxOf[w.n] + ')' })).join('') + '</div>');
  }

  // Opponent: random Superstar at your level, one higher or one lower.
  function newOpponent(pi) {
    const pl = save.owned[R[pi].n], w = pick(R.filter((x, i) => i !== pi));
    return { w, level: Math.max(1, pl + pick([-1, 0, 0, 1])) };
  }
  function preview(pi, keep) {
    const w = R[pi], l = save.owned[w.n];
    if (!keep || !B || B.pi !== pi) B = { pi, opp: newOpponent(pi) };
    const o = B.opp;
    screen('<div class="topbar"><button onclick="UI.fightSelect()">‹ Back</button><span>Match preview</span></div>'
      + '<div class="grid">' + cardHTML(w, l, {}) + cardHTML(o.w, o.level, {}) + '</div>'
      + '<button class="btn" onclick="UI.start()">Start match</button><button class="btn alt" onclick="UI.preview(' + pi + ')">New opponent</button>');
  }

  /* ---------- battle ---------- */
  function start() {
    const w = R[B.pi], o = B.opp;
    B.m = E.createMatch(w, save.owned[w.n], o.w, o.level);
    B.phase = null; B.idx = null; B.ev = null;
    nextRound();
  }
  function nextRound() {
    const m = B.m;
    if (m.over) return endScreen();
    const c = E.chooseCaller(m);
    B.ev = null;
    if (c === 'b') { B.idx = E.cpuStat(m, 'b', 0.15); B.phase = 'action'; } else { B.idx = null; B.phase = 'call'; }
    renderBattle();
  }
  function chooseStat(i) { B.idx = i; B.phase = 'action'; renderBattle(); }
  function chooseAction(id) {
    const m = B.m, idx = B.idx;
    B.ev = E.resolveRound(m, idx, id, E.cpuAction(m, 'b', idx));
    B.phase = 'result';
    renderBattle();
  }

  function fighterHTML(f, side, m) {
    const r = f.hp / f.max, cls = r > 0.6 ? '' : r > 0.3 ? 'amber' : 'red';
    const pips = [0, 1, 2].map(i => '<span class="pip ' + (f.meter > i ? 'on ' : '') + (f.meter >= T.meterMax ? 'ready' : '') + '"></span>').join('');
    return '<div class="fighter"><div class="thumb">' + art(f.w) + '</div><div class="info">'
      + '<div class="nm"><span>' + (side === 'a' ? 'You · ' : '') + f.w.n + '</span><i>LVL ' + lv(f.level) + '</i></div>'
      + '<div class="hpbar"><div class="hpfill ' + cls + '" style="width:' + Math.max(0, r * 100) + '%"></div></div>'
      + '<div class="hpnums"><span>' + m.fmtVal(f.hp) + ' / ' + m.fmtVal(f.max) + '</span><span class="pips" title="Finisher meter">' + pips + '</span></div></div></div>';
  }
  function describe(n, m) {
    const F = v => m.fmtVal(v), p = [];
    if (n.d) p.push('Deal ' + F(n.d));
    if (n.risk) p.push('misses if you lose the stat — you take ' + pct(n.risk) + '% of your avg');
    if (n.weak) p.push('their next stat −20%');
    if (n.cancel) p.push('negates their move and hits back for ' + pct(n.counter) + '% of its damage');
    if (n.h) p.push('Heal ' + F(n.h));
    if (n.meter) p.push('+' + n.meter + ' finisher charge');
    return p.join(' · ');
  }
  function resultHTML(m, ev) {
    const F = v => m.fmtVal(v), st = E.STATS[ev.statIdx], youWin = ev.winner === 'a';
    const tiny = m.a.avg * 0.01;
    let h = '<p><b>' + st.name + '</b> · you ' + F(ev.vals.a) + ' vs them ' + F(ev.vals.b) + ' → <span class="win">' + (youWin ? 'YOU TAKE CONTROL' : 'THEY TAKE CONTROL') + '</span></p>';
    for (const s of ['a', 'b']) {
      const f = s === 'a' ? m.a : m.b, id = ev.act[s], fx = ev.fx[s];
      const name = s === 'a' ? 'You' : f.w.n;
      const act = id === 'finisher' ? 'FINISHER — ' + f.w.f : E.ACTIONS[id].name.toUpperCase();
      const parts = [];
      if (fx.negated) parts.push('NEGATED');
      if (fx.fizzled) parts.push('fizzled (meter not full)');
      if (fx.damage > tiny) parts.push('<span class="hit">' + F(fx.damage) + ' damage</span>');
      if (fx.counter > tiny) parts.push('<span class="hit">countered for ' + F(fx.counter) + '</span>');
      if (fx.missed) parts.push('MISSED — takes ' + F(fx.selfHit) + ' from the fall');
      if (fx.combo) parts.push('<span class="win">COMBO</span>');
      if (fx.healed > tiny) parts.push('<span class="heal">+' + F(fx.healed) + ' HP</span>');
      if (fx.weakened) parts.push('opponent weakened');
      h += '<p><b>' + name + '</b> · ' + act + (parts.length ? ' → ' + parts.join(' · ') : '') + '</p>';
    }
    return h;
  }

  function renderBattle() {
    const m = B.m, a = m.a, b = m.b;
    let body = '';
    const head = '<div class="topbar"><span>Round ' + (B.phase === 'result' ? m.round : m.round + 1) + '</span><span>' + (m.caller === 'a' ? 'You call the stat' : 'Opponent calls the stat') + '</span></div>';
    if (B.phase === 'call') {
      body = '<div class="panel"><h3>You call the stat</h3><p class="edge">Both cards are compared on the stat you pick. Pick where you beat them — and remember the moves in your hand: a move that matches the stat is a COMBO.</p><div class="statbtns">'
        + a.hand.map(i => {
          const mine = a.stats[i], theirs = b.stats[i], st = E.STATS[i];
          return '<button class="statbtn" onclick="UI.stat(' + i + ')"><img src="../assets/' + st.icon + '" alt=""><span class="t">' + st.name + '</span><span class="vs"><span class="' + (mine > theirs ? 'w' : 'l') + '">' + m.fmtVal(mine) + '</span> vs ' + m.fmtVal(theirs) + '</span></button>';
        }).join('') + '</div></div>';
    } else if (B.phase === 'action') {
      const st = E.STATS[B.idx], p = E.predictedControl(m, 'a', B.idx), youEdge = p === T.ctrlWin;
      const swing = pct(T.noise);
      body = '<div class="panel"><h3>' + (m.caller === 'a' ? 'You called' : 'Opponent called') + ' ' + st.name + '</h3>'
        + '<p class="edge ' + (youEdge ? 'you' : 'them') + '">You ' + m.fmtVal(a.stats[B.idx]) + ' vs them ' + m.fmtVal(b.stats[B.idx]) + ' — '
        + (youEdge ? 'you hold the edge: your action +' + pct(T.ctrlWin - 1) + '%, theirs −' + pct(1 - T.ctrlLose) + '%' : 'they hold the edge: their action +' + pct(T.ctrlWin - 1) + '%, yours −' + pct(1 - T.ctrlLose) + '%')
        + '. Each roll swings ±' + swing + '%.</p><h3>Choose your move</h3><div class="statbtns">'
        + (a.meter >= T.meterMax ? '<button class="actbtn finisher" onclick="UI.act(\'finisher\')"><img src="../assets/finisher.png" alt=""><span class="t"><b>Finisher · ' + a.w.f + '</b><em>' + describe(E.finisherNumbers(a), m) + ' · cannot be reversed</em></span></button>'
          : '<p class="edge">Finisher charging ' + a.meter + '/' + T.meterMax + ' — win stat rounds to charge it.</p>')
        + a.actions.map(id => {
          const A = E.ACTIONS[id], n = E.actionNumbers(id, a, p, B.idx);
          return '<button class="actbtn' + (n.combo ? ' combo' : '') + '" onclick="UI.act(\'' + id + '\')"><img src="../assets/' + A.icon + '" alt=""><span class="t"><b>' + A.name + (n.combo ? '<span class="tag">COMBO ×' + T.combo + '</span>' : '') + '</b><small class="kind">' + A.kind + '</small><em>' + describe(n, m) + '</em></span></button>';
        }).join('') + '</div></div>';
    } else if (B.phase === 'result') {
      body = '<div class="panel log"><h3>Round ' + m.round + '</h3>' + resultHTML(m, B.ev) + '</div>'
        + '<button class="btn" onclick="UI.next()">' + (m.over ? 'Finish match' : 'Next round') + '</button>';
    }
    screen(head + fighterHTML(b, 'b', m) + fighterHTML(a, 'a', m) + body);
  }

  function endScreen() {
    const m = B.m, win = m.winner === 'a';
    if (win) { save.wins++; save.streak = (save.streak || 0) + 1; save.bestStreak = Math.max(save.bestStreak || 0, save.streak); } else { save.losses++; save.streak = 0; }
    const bonus = win && save.streak % STREAK_BONUS === 0;
    pending = win ? { left: bonus ? 2 : 1, total: bonus ? 2 : 1 } : null;
    persist();
    screen('<div class="reveal"><h2 class="big-title">' + (win ? 'Victory' : 'Defeat') + '</h2>'
      + '<p class="sub">' + m.round + ' rounds · ' + (win ? 'you beat ' : 'you lost to ') + m.b.w.n + ' (LVL ' + lv(m.b.level) + ')</p>'
      + (win ? (bonus ? '<p class="merge" style="color:var(--gold2)">🔥 ' + save.streak + ' wins in a row — BONUS CARD!</p>' : '') + '<button class="btn" onclick="UI.reward()">Open reward card' + (bonus ? 's' : '') + '</button>' : '<button class="btn" onclick="UI.home()">Back home</button><button class="btn alt" onclick="UI.preview(' + B.pi + ')">Rematch</button>') + '</div>');
  }
  function daily() {
    if (save.daily === today()) return home();
    save.daily = today(); persist();
    pending = { left: 1, total: 1 };
    reward();
  }
  function reward() {
    if (!pending || pending.left < 1) return home();
    pending.left--;
    const g = give(pick(R)), w = g.w;
    const merged = !g.isNew;
    let jump = '';
    if (merged) jump = '<div class="merge">MERGED! LVL ' + lv(g.from) + ' → ' + lv(g.to) + '<br><small>Power ' + E.fmtStat(w.s[0], g.from) + ' → ' + E.fmtStat(w.s[0], g.to) + ' · HP ' + E.fmtHp(w, g.from) + ' → ' + E.fmtHp(w, g.to) + '</small></div>';
    else jump = '<div class="merge">NEW CARD!</div>';
    screen('<div class="reveal"><h2 class="big-title">Reward</h2>' + cardHTML(w, g.to, { cls: 'big reveal-in' }) + jump
      + (pending.left > 0 ? '<button class="btn" onclick="UI.reward()">Next card (' + pending.left + ' left)</button>' : '<button class="btn" onclick="UI.fightSelect()">Fight again</button><button class="btn alt" onclick="UI.home()">Home</button>') + '</div>');
  }

  /* ---------- dev tools (?dev=1) ---------- */
  function dev(what) {
    if (!DEV) return;
    if (what === 'reset') { save = null; try { localStorage.removeItem(SAVE_KEY); } catch (e) { } return home(); }
    if (!save) save = { owned: {}, wins: 0, losses: 0 };
    if (what === 'cards') for (let i = 0; i < 10; i++) give(pick(R));
    else R.forEach(w => { save.owned[w.n] = what; });
    persist(); home();
  }

  window.UI = { home, starter, collection, detail, fightSelect, preview: pi => preview(pi), start, daily, stat: chooseStat, act: chooseAction, next: nextRound, reward, dev };
  save = load();
  home();
})();
