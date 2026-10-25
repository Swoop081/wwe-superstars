/* WWE Superstars v2 — mobile UI. Pure view layer over Engine; the save lives in localStorage. */
(function () {
  'use strict';
  const E = window.Engine, R = window.ROSTER, T = E.TUNE, ICONS = window.ICONS;
  const SAVE_KEY = 'wweSuperstarsV2';
  const DEV = new URLSearchParams(location.search).has('dev');
  const app = document.getElementById('app');
  const idxOf = Object.fromEntries(R.map((w, i) => [w.n, i]));
  let save = null, B = null, shown = null; // B = current battle controller

  /* ---------- save ---------- */
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (s && s.owned) {
        s.shards = s.shards || {}; s.shiny = s.shiny || {}; s.claimed = s.claimed || {}; s.gClears = s.gClears || 0;
        if (s.bank === undefined) { s.bank = s.daily === today() ? 0 : 1; s.lastDay = today(); }
        return s;
      }
    } catch (e) { } return null;
  }
  function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { } }
  const ownedList = () => Object.keys(save.owned).map(n => R[idxOf[n]]).filter(Boolean)
    .sort((a, b) => save.owned[b.n] - save.owned[a.n] || a.n.localeCompare(b.n));
  const bestLevel = () => Math.max(1, ...Object.values(save.owned));
  // Give a card: new card = level 1; duplicate = merges into the owned card (+1 level).
  // Merge cost rises: level L needs cost(L) duplicates to reach L+1 (1,2,2,3,3,4...). Extra copies are kept as progress.
  const weekNo = () => Math.floor(Date.now() / (7 * 864e5));
  const featured = () => R[Math.floor(E.mulberry32(weekNo() * 31 + 7)() * R.length)];
  const cost = L => 1 + Math.floor(L / 2);
  // Shiny: a rare cosmetic foil that can appear whenever you get a card. Purely for show.
  function give(w) {
    const g = giveCore(w);
    save.shiny = save.shiny || {};
    if (!save.shiny[w.n] && Math.random() < (g.isNew ? 0.03 : 0.08)) { save.shiny[w.n] = true; g.shiny = true; persist(); }
    return g;
  }
  function giveCore(w) {
    const old = save.owned[w.n] || 0;
    save.shards = save.shards || {};
    if (!old) { save.owned[w.n] = 1; save.shards[w.n] = 0; persist(); return { w, from: 0, to: 1, isNew: true, sh: 0 }; }
    let sh = (save.shards[w.n] || 0) + 1, l = old;
    while (sh >= cost(l)) { sh -= cost(l); l++; }
    save.owned[w.n] = l; save.shards[w.n] = sh; persist();
    return { w, from: old, to: l, isNew: false, sh };
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
    return '<div class="card ' + (w.p === 'Main Event' ? 'tier-main ' : '') + (!o.noShine && save && save.shiny && save.shiny[w.n] && save.owned[w.n] ? 'shiny ' : '') + (o.cls || '') + '"' + (o.click ? ' onclick="' + o.click + '"' : '') + '>'
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

  // Free cards bank up (max 5) so you never lose one by skipping a day.
  const BANK_MAX = 5;
  function accrue() {
    const p = d => { const a = d.split('-'); return Date.UTC(+a[0], +a[1] - 1, +a[2]); };
    const days = Math.max(0, Math.round((p(today()) - p(save.lastDay || today())) / 864e5));
    if (days) { save.bank = Math.min(BANK_MAX, (save.bank || 0) + days); save.lastDay = today(); persist(); }
  }
  // Lifetime goals: no timers, claim whenever. Each pays a pick-1-of-3.
  const METRICS = [
    { id: 'cards', name: 'Own cards', v: () => Object.keys(save.owned).length, at: [10, 25, 50, 100, 150, R.length] },
    { id: 'rung', name: 'Reach ladder rung', v: () => rung(), at: [5, 10, 20, 40, 80] },
    { id: 'wins', name: 'Win matches', v: () => save.wins, at: [10, 25, 50, 100, 250] },
    { id: 'level', name: 'Get a card to level', v: () => bestLevel(), at: [3, 5, 10, 25, 50] },
    { id: 'streak', name: 'Win in a row', v: () => save.bestStreak || 0, at: [3, 5, 10, 20] },
    { id: 'gaunt', name: 'Clear the Gauntlet', v: () => save.gClears || 0, at: [1, 3, 10, 25] }
  ];
  const nextGoal = m => { for (let i = 0; i < m.at.length; i++) if (!save.claimed[m.id + ':' + m.at[i]]) return { i, t: m.at[i] }; return null; };
  const SETS = [
    ...['Main Event', 'Upper Midcard', 'Midcard', 'Lower Midcard', 'Opener'].map(t => ({ id: 'set:' + t, name: t + ' set', has: w => w.p === t })),
    { id: 'set:Men', name: 'Men\'s roster', has: w => w.g === 'M' }, { id: 'set:Women', name: 'Women\'s roster', has: w => w.g === 'F' }
  ];
  const setProg = S => { const all = R.filter(S.has); return { got: all.filter(w => save.owned[w.n]).length, of: all.length }; };
  const setsReady = () => SETS.filter(S => { const p = setProg(S); return p.of && p.got === p.of && !save.claimed[S.id]; }).length;
  const goalsReady = () => setsReady() + METRICS.filter(m => { const g = nextGoal(m); return g && m.v() >= g.t; }).length;

  /* ---------- screens ---------- */
  function devBar() {
    if (!DEV) return '';
    return '<div class="dev"><b>DEV</b><br><button onclick="UI.dev(\'cards\')">+10 random cards</button><button onclick="UI.dev(10)">all → LVL 10</button><button onclick="UI.dev(100)">all → LVL 100</button><button onclick="UI.dev(10000)">all → LVL 10,000</button><button onclick="UI.dev(\'reset\')">reset save</button></div>';
  }

  function home() {
    B = null;
    if (!save) return welcome();
    accrue();
    const top = ownedList()[0], r = rung(), nextRank = RANK[(r - 1) % 3];
    screen('<div class="logo">WWE<span>SUPERSTARS</span></div>'
      + '<div class="hero" onclick="UI.detail(' + idxOf[top.n] + ')">' + cardHTML(top, save.owned[top.n], { cls: 'hero-card' }) + '<div class="hero-tag">YOUR TOP CARD</div></div>'
      + '<button class="btn big fightbtn" onclick="UI.fightSelect()"><span class="ic">' + ICONS.fight + '</span>Fight<small>Ladder · rung ' + lv(r) + ' · ' + nextRank + '</small></button>'
      + (save.bank > 0 ? '<button class="btn green" onclick="UI.daily()"><span class="ic sm">' + ICONS.gift + '</span>Free card' + (save.bank > 1 ? ' ×' + save.bank : '') + ' ready</button>' : '')
      + '<div class="tiles">'
      + '<button class="tile" onclick="UI.fightSelect(\'g\')"><span class="ic">' + ICONS.gauntlet + '</span><b>Gauntlet</b><small>5 fights · HP carries</small></button>'
      + '<button class="tile" onclick="UI.goals()"><span class="ic">' + ICONS.goals + '</span><b>Goals</b><small>' + (goalsReady() ? goalsReady() + ' ready!' : 'rewards') + '</small>' + (goalsReady() ? '<i class="dot"></i>' : '') + '</button>'
      + '<button class="tile" onclick="UI.collection()"><span class="ic">' + ICONS.cards + '</span><b>Cards</b><small>' + Object.keys(save.owned).length + ' / ' + R.length + '</small></button></div>'
      + '<div class="pills"><span>🔥 Streak <b>' + (save.streak || 0) + '</b></span><span>W–L <b>' + save.wins + '–' + save.losses + '</b></span><span>Best <b>LVL ' + lv(bestLevel()) + '</b></span></div>'
      + '<p class="edge" style="text-align:center">⭐ Featured this week: <b>' + featured().n + '</b>' + (save.bank > 0 ? '' : ' · next free card in ' + untilMidnight()) + '</p>'
      + devBar());
  }

  function welcome() {
    screen('<h1 class="title">WWE Superstars</h1><p class="sub">Your collection starts here.</p>'
      + '<div class="panel"><h3>Starter pack</h3><p>Five random Superstars, all level 1. Beat opponents to win more cards — duplicates merge into your card and level it up.</p></div>'
      + '<button class="btn" onclick="UI.starter()">Open starter pack</button>' + devBar());
  }
  function starter() {
    save = { owned: {}, shards: {}, shiny: {}, claimed: {}, gClears: 0, wins: 0, losses: 0, bank: 1, lastDay: today() };
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
      + '<div class="panel"><h3>Next level</h3><p class="edge">Duplicates merged: <b>' + ((save.shards || {})[w.n] || 0) + ' / ' + cost(l) + '</b> to reach level ' + lv(l + 1) + '. Every stat and HP ×' + T.m + ' — Power ' + E.fmtStat(w.s[0], l) + ' → ' + E.fmtStat(w.s[0], l + 1) + '.</p></div>');
  }

  function fightSelect(mode) {
    const list = ownedList(), g = mode === 'g';
    screen('<div class="topbar"><button onclick="UI.home()">‹ Home</button><span>' + (g ? 'Gauntlet · choose your fighter' : 'Choose your fighter') + '</span></div>'
      + (g ? '<p class="edge" style="text-align:center">5 fights in a row with one fighter. HP carries over (+30% between fights). Clear it for 3 picks.</p>' : '')
      + '<div class="grid">' + list.map(w => cardHTML(w, save.owned[w.n], { cls: 'pick', click: (g ? 'UI.gIntro(' : 'UI.preview(') + idxOf[w.n] + ')' })).join('') + '</div>');
  }

  // Ranked ladder: rung r has a fixed opponent. Level steps up every 3 rungs; each step goes warm-up -> contender -> boss.
  const rung = () => save.rung || 1;
  const GROUPS = [['Opener', 'Lower Midcard'], ['Midcard', 'Upper Midcard'], ['Main Event']];
  const RANK = ['Warm-up', 'Contender', 'Boss'];
  function ladderOpp(r) {
    const pool = R.filter(x => GROUPS[(r - 1) % 3].includes(x.p));
    return { w: pool[Math.floor(E.mulberry32(r * 7919 + 13)() * pool.length)], level: 1 + Math.floor((r - 1) / 3), rung: r, rank: RANK[(r - 1) % 3] };
  }
  // Boss rungs (every 3rd) carry a special rule and pay a bonus pick.
  const RULES = [
    { id: 'nofin', name: 'No Finishers', text: 'Finishers are banned this match.' },
    { id: 'sudden', name: 'Sudden Death', text: 'Both fighters start at 50% HP.' },
    { id: 'charged', name: 'Charged Up', text: 'The boss starts with 2 finisher charges.' }
  ];
  const ruleFor = o => o.rank === 'Boss' ? RULES[(o.rung / 3 - 1) % RULES.length] : null;
  function preview(pi) {
    const w = R[pi], l = save.owned[w.n], o = ladderOpp(rung());
    B = { pi, opp: o };
    screen('<div class="topbar"><button onclick="UI.fightSelect()">‹ Back</button><span>Ladder · Rung ' + lv(o.rung) + ' · ' + o.rank + '</span></div>'
      + '<div class="grid">' + cardHTML(w, l, {}) + cardHTML(o.w, o.level, { noShine: true }) + '</div>'
      + (ruleFor(o) ? '<div class="panel"><h3>Boss rule · ' + ruleFor(o).name + '</h3><p class="edge">' + ruleFor(o).text + ' Win for a bonus pick.</p></div>' : '')
      + '<p class="edge" style="text-align:center">' + (l > o.level ? 'You out-level them.' : l === o.level ? 'Evenly matched on level.' : 'They out-level you — merge duplicates to catch up.') + ' Win to climb to rung ' + lv(o.rung + 1) + '.</p>'
      + '<button class="btn" onclick="UI.start()">Start match</button>');
  }

  /* ---------- battle ---------- */
  function start() {
    const w = R[B.pi], o = B.opp;
    B.m = E.createMatch(w, save.owned[w.n], o.w, o.level);
    if (B.g) B.m.a.hp = B.m.a.max * G.carry;
    B.rule = B.g ? null : ruleFor(o);
    if (B.rule && B.rule.id === 'sudden') { B.m.a.hp = B.m.a.max / 2; B.m.b.hp = B.m.b.max / 2; }
    if (B.rule && B.rule.id === 'charged') B.m.b.meter = 2;
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
    B.prev = { a: m.a.hp / m.a.max, b: m.b.hp / m.b.max };
    B.ev = E.resolveRound(m, idx, id, E.cpuAction(m, 'b', idx));
    if (B.rule && B.rule.id === 'nofin') { B.m.a.meter = 0; B.m.b.meter = 0; }
    B.phase = 'result';
    renderBattle();
  }

  const KCLS = { powerslam: 'atk', strike: 'atk', suplex: 'tech', dive: 'air', hold: 'sub', chair: 'heel', reversal: 'ctr', crowd: 'heal', finisher: 'fin' };
  const mb = (id, big) => '<span class="mb k-' + KCLS[id] + (big ? ' big' : '') + '">' + ICONS[id] + '</span>';
  const statImg = i => '<img src="../assets/' + E.STATS[i].icon + '" alt="">';

  // One fighter in the arena: big card, control ribbon, HP bar, finisher pips, and floating results.
  function fighterCard(f, side, m, o) {
    const r = Math.max(0, f.hp / f.max), cls = r > 0.6 ? '' : r > 0.3 ? 'amber' : 'red';
    const from = o.prev != null ? Math.max(0, o.prev) : r;
    const pips = [0, 1, 2].map(i => '<span class="pip ' + (f.meter > i ? 'on ' : '') + (f.meter >= T.meterMax ? 'ready' : '') + '"></span>').join('');
    let fl = '';
    if (o.taken > o.tiny) fl += '<div class="flt dmg">−' + m.fmtVal(o.taken) + '</div>';
    if (o.healed > o.tiny) fl += '<div class="flt heal">+' + m.fmtVal(o.healed) + '</div>';
    const chips = (o.chips || []).map(c => '<span class="chip ' + c[1] + '">' + c[0] + '</span>').join('');
    return '<div class="fz ' + side + (o.ctrl ? ' ctrl' : '') + (o.taken > o.tiny ? ' hit' : '') + (o.healed > o.tiny ? ' healed' : '') + '">'
      + '<div class="cardbox">' + cardHTML(f.w, f.level, { cls: 'arena', noShine: side === 'b' })
      + (o.ctrl ? '<div class="ribbon">CONTROL</div>' : '') + fl + (chips ? '<div class="chips">' + chips + '</div>' : '') + '</div>'
      + '<div class="hpbar"><div class="hpfill ' + cls + '" style="width:' + from * 100 + '%" data-to="' + r * 100 + '"></div></div>'
      + '<div class="hpnums"><span>' + (side === 'a' ? 'YOU' : 'RIVAL') + ' · ' + m.fmtVal(f.hp) + '</span><span class="pips" title="Finisher meter">' + pips + '</span></div></div>';
  }
  // Big number + one short tag per move tile.
  function moveFace(n, m) {
    const F = v => m.fmtVal(v);
    let num = '', lab = '';
    if (n.d) { num = F(n.d); lab = 'DAMAGE'; }
    else if (n.h) { num = '+' + F(n.h); lab = 'HEAL'; }
    else if (n.cancel) { num = pct(n.counter) + '%'; lab = 'RETURNED'; }
    const chips = [];
    if (n.combo) chips.push(['COMBO ×' + T.combo, 'gold']);
    if (n.cancel) chips.push(['BLOCKS MOVE', 'cyan']);
    if (n.risk) chips.push(['RISKY', 'red']);
    if (n.weak) chips.push(['WEAKENS', 'purple']);
    if (n.h && n.meter) chips.push(['+1 ⚡', 'gold']);
    return { num, lab, chips };
  }
  function resultInfo(m, ev) {
    const tiny = m.a.avg * 0.01, o = {};
    for (const t of ['a', 'b']) {
      const x = t === 'a' ? 'b' : 'a', fx = ev.fx[t], fo = ev.fx[x], chips = [];
      if (fx.combo) chips.push(['COMBO', 'gold']);
      if (fx.negated) chips.push(['NEGATED', 'cyan']);
      if (fx.missed) chips.push(['MISSED', 'red']);
      if (fx.fizzled) chips.push(['FIZZLED', 'dim']);
      if (fo.weakened) chips.push(['WEAKENED', 'purple']);
      if (fx.counter > tiny) chips.push(['COUNTER', 'cyan']);
      if (ev.act[t] === 'finisher' && !fx.fizzled) chips.push(['FINISHER', 'gold']);
      o[t] = { taken: (fo.damage || 0) + (fo.counter || 0) + (fx.selfHit || 0), healed: fx.healed || 0, chips, tiny };
    }
    return o;
  }

  function renderBattle() {
    const m = B.m, a = m.a, b = m.b, res = B.phase === 'result', ev = B.ev;
    const F = v => m.fmtVal(v);
    let ctrlSide = null, ri = null;
    if (res) { ctrlSide = ev.winner; ri = resultInfo(m, ev); }
    else if (B.phase === 'action') ctrlSide = E.predictedControl(m, 'a', B.idx) === T.ctrlWin ? 'a' : 'b';
    const pv = B.prev || {};
    const head = '<div class="hud"><span class="rnd">ROUND ' + (res ? m.round : m.round + 1) + '</span>'
      + (B.rule ? '<span class="rule">' + B.rule.name + '</span>' : B.g ? '<span class="rule">GAUNTLET ' + (G.k + 1) + '/5</span>' : '')
      + '<span class="who">' + (m.caller === 'a' ? 'YOUR CALL' : 'RIVAL\'S CALL') + '</span></div>';
    const arena = '<div class="arena">' + fighterCard(a, 'a', m, Object.assign({ ctrl: ctrlSide === 'a', prev: res ? pv.a : null }, ri ? ri.a : {}))
      + '<div class="vsbadge">VS</div>' + fighterCard(b, 'b', m, Object.assign({ ctrl: ctrlSide === 'b', prev: res ? pv.b : null }, ri ? ri.b : {})) + '</div>';
    let body = '';
    if (B.phase === 'call') {
      body = '<div class="stage"><div class="stg-title">Call a stat <small>you vs rival · green = you win it</small></div><div class="tiles3">'
        + a.hand.map(i => {
          const mine = a.stats[i], theirs = b.stats[i], win = mine > theirs, st = E.STATS[i];
          const combos = a.actions.filter(id => (E.ACTIONS[id].stats || []).includes(i));
          return '<button class="stile ' + (win ? 'win' : 'lose') + '" onclick="UI.stat(' + i + ')">' + statImg(i) + '<b>' + st.name + '</b>'
            + '<span class="duel"><em class="' + (win ? 'w' : 'l') + '">' + F(mine) + '</em><span class="vsb"><i style="width:' + Math.round(mine / (mine + theirs) * 100) + '%"></i></span><em>' + F(theirs) + '</em></span>'
            + '<span class="cmb">' + (combos.length ? combos.map(id => mb(id)).join('') + '<small>COMBO</small>' : '<small>&nbsp;</small>') + '</span></button>';
        }).join('') + '</div></div>';
    } else if (B.phase === 'action') {
      const st = E.STATS[B.idx], you = ctrlSide === 'a';
      body = '<div class="stage"><div class="ctrlstrip ' + (you ? 'you' : 'them') + '">' + statImg(B.idx) + '<span class="cs"><b>' + st.name + '</b><small>' + F(a.stats[B.idx]) + ' vs ' + F(b.stats[B.idx]) + '</small></span>'
        + '<span class="cbadge">' + (you ? 'YOU HAVE CONTROL <small>your move +' + pct(T.ctrlWin - 1) + '%</small>' : 'RIVAL HAS CONTROL <small>your move −' + pct(1 - T.ctrlLose) + '%</small>') + '</span></div>'
        + (a.meter >= T.meterMax ? (() => { const n = E.finisherNumbers(a), f = moveFace(n, m); return '<button class="mtile fin" onclick="UI.act(\'finisher\')">' + mb('finisher', true) + '<span class="mt"><b>FINISHER</b><small>' + a.w.f + '</small></span><span class="num">' + f.num + '<small>UNBLOCKABLE</small></span></button>'; })() : '')
        + '<div class="moves">' + a.actions.map(id => {
          const A = E.ACTIONS[id], n = E.actionNumbers(id, a, E.predictedControl(m, 'a', B.idx), B.idx), f = moveFace(n, m);
          return '<button class="mtile k-' + KCLS[id] + (n.combo ? ' combo' : '') + '" onclick="UI.act(\'' + id + '\')">' + mb(id, true) + '<b>' + A.name + '</b><span class="num">' + f.num + '<small>' + f.lab + '</small></span>'
            + '<span class="mchips">' + f.chips.map(c => '<span class="chip ' + c[1] + '">' + c[0] + '</span>').join('') + '</span></button>';
        }).join('') + '</div></div>';
    } else if (res) {
      const st = E.STATS[ev.statIdx], you = ev.winner === 'a';
      const mv = s => { const id = ev.act[s], f = s === 'a' ? a : b; return '<div class="mv ' + s + '">' + mb(id, true) + '<span><small>' + (s === 'a' ? 'YOU' : 'RIVAL') + '</small><b>' + (id === 'finisher' ? f.w.f : E.ACTIONS[id].name) + '</b></span></div>'; };
      body = '<div class="stage"><div class="ctrlstrip ' + (you ? 'you' : 'them') + '">' + statImg(ev.statIdx) + '<span class="cs"><b>' + st.name + '</b><small>' + F(ev.vals.a) + ' vs ' + F(ev.vals.b) + '</small></span><span class="cbadge">' + (you ? 'YOU TOOK CONTROL' : 'RIVAL TOOK CONTROL') + '</span></div>'
        + '<div class="mvrow">' + mv('a') + '<span class="mvx">⚔</span>' + mv('b') + '</div>'
        + '<button class="btn big" onclick="UI.next()">' + (m.over ? 'Finish match' : 'Next round') + '</button></div>';
    }
    screen(head + arena + body);
    requestAnimationFrame(() => requestAnimationFrame(() => document.querySelectorAll('.hpfill[data-to]').forEach(e => { e.style.width = e.dataset.to + '%'; })));
  }

  function endScreen() {
    if (B.g) return gEnd();
    const m = B.m, win = m.winner === 'a';
    if (win) { save.wins++; if (B.opp && B.opp.rung === rung()) save.rung = rung() + 1; save.streak = (save.streak || 0) + 1; save.bestStreak = Math.max(save.bestStreak || 0, save.streak); } else { save.losses++; save.streak = 0; }
    const bonus = win && save.streak % STREAK_BONUS === 0;
    const boss = win && B.opp && B.opp.rank === 'Boss', n = (bonus ? 2 : 1) + (boss ? 1 : 0);
    pending = win ? { left: n, total: n } : null;
    persist();
    screen('<div class="reveal"><h2 class="big-title">' + (win ? 'Victory' : 'Defeat') + '</h2>'
      + '<p class="sub">' + m.round + ' rounds · ' + (win ? 'you beat ' : 'you lost to ') + m.b.w.n + ' (LVL ' + lv(m.b.level) + ')</p>'
      + (win ? (bonus ? '<p class="merge" style="color:var(--gold2)">🔥 ' + save.streak + ' wins in a row — BONUS CARD!</p>' : '') + '<button class="btn" onclick="UI.reward()">Open reward card' + (n > 1 ? 's' : '') + '</button>' : '<button class="btn" onclick="UI.home()">Back home</button><button class="btn alt" onclick="UI.preview(' + B.pi + ')">Rematch</button>') + '</div>');
  }
  function daily() {
    if (!(save.bank > 0)) return home();
    save.bank--; persist();
    pending = { left: 1, total: 1 };
    reward();
  }
  // Pick 1 of 3: three different random cards, you keep one.
  function reward() {
    if (!pending || pending.left < 1) return home();
    // One slot is always a card you own (guaranteed progress); the others are open to the whole roster.
    const pool = R.slice(), ch = [], own = ownedList();
    if (own.length) { const o = pick(own); ch.push(o); pool.splice(pool.indexOf(o), 1); }
    while (ch.length < 3) ch.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    const ft = featured();
    if (!ch.includes(ft) && Math.random() < 0.4) { ch.pop(); ch.push(ft); }
    ch.sort(() => Math.random() - 0.5);
    pending.choices = ch;
    screen('<div class="reveal"><h2 class="big-title">Pick 1 card</h2><p class="sub">' + (pending.total > 1 ? 'Reward ' + (pending.total - pending.left + 1) + ' of ' + pending.total + ' · ' : '') + 'Duplicates level your card up.</p><div class="grid3">'
      + ch.map((w, i) => { const o = save.owned[w.n] || 0;
        return '<div class="choice">' + cardHTML(w, o || 1, { cls: 'pick', click: 'UI.choose(' + i + ')' }) + '<div class="chtag ' + (o ? 'up' : 'new') + '">' + (w === featured() ? '⭐ ' : '') + (!o ? 'NEW' : ((save.shards[w.n] || 0) + 1 >= cost(o) ? 'LEVEL UP → ' + lv(o + 1) : '+1 merge · ' + ((save.shards[w.n] || 0) + 1) + '/' + cost(o))) + '</div></div>'; }).join('')
      + '</div></div>');
  }
  function choose(i) {
    pending.left--;
    const g = give(pending.choices[i]), w = g.w;
    const jump = g.isNew ? '<div class="merge">NEW CARD!</div>'
      : g.to === g.from ? '<div class="merge">MERGED +1<br><small>' + g.sh + ' / ' + cost(g.to) + ' toward level ' + lv(g.to + 1) + '</small></div>'
      : '<div class="merge">LEVEL UP! LVL ' + lv(g.from) + ' → ' + lv(g.to) + '<br><small>Power ' + E.fmtStat(w.s[0], g.from) + ' → ' + E.fmtStat(w.s[0], g.to) + ' · HP ' + E.fmtHp(w, g.from) + ' → ' + E.fmtHp(w, g.to) + '</small></div>';
    screen('<div class="reveal"><h2 class="big-title">You picked</h2>' + cardHTML(w, g.to, { cls: 'big reveal-in' }) + (g.shiny ? '<div class="merge" style="color:#7fe7ff">✨ SHINY FOIL! ✨</div>' : '') + jump
      + (pending.left > 0 ? '<button class="btn" onclick="UI.reward()">Next pick (' + pending.left + ' left)</button>' : '<button class="btn" onclick="UI.fightSelect()">Fight again</button><button class="btn alt" onclick="UI.home()">Home</button>') + '</div>');
  }

  /* ---------- gauntlet ---------- */
  let G = null;
  const G_LEVELS = [-1, -1, 0, 0, 1];
  const G_TIERS = [['Opener', 'Lower Midcard'], ['Lower Midcard', 'Midcard'], ['Midcard', 'Upper Midcard'], ['Upper Midcard', 'Main Event'], ['Main Event']];
  function gIntro(pi, newRun) {
    if (newRun !== false || !G || G.pi !== pi) G = { pi: pi, k: 0, carry: 1, wins: 0 };
    const w = R[pi], l = save.owned[w.n], k = G.k;
    const pool = R.filter((x, i) => i !== pi && G_TIERS[k].includes(x.p));
    G.opp = { w: pick(pool), level: Math.max(1, l + G_LEVELS[k]) };
    if (k > 0) G.carry = Math.min(1, G.carry + 0.3);
    screen('<div class="topbar"><button onclick="UI.fightSelect(\'g\')">‹ Quit</button><span>Gauntlet · fight ' + (k + 1) + ' of 5</span></div>'
      + '<div class="grid">' + cardHTML(w, l, {}) + cardHTML(G.opp.w, G.opp.level, { noShine: true }) + '</div>'
      + '<div class="panel"><h3>Your HP</h3><div class="hpbar"><div class="hpfill ' + (G.carry > 0.6 ? '' : G.carry > 0.3 ? 'amber' : 'red') + '" style="width:' + pct(G.carry) + '%"></div></div><p class="edge">' + pct(G.carry) + '% health' + (k > 0 ? ' (includes +30% rest)' : '') + ' · win ' + (5 - k) + ' more to clear it.</p></div>'
      + '<button class="btn" onclick="UI.gGo()">Start fight</button>');
  }
  function gGo() { B = { pi: G.pi, opp: G.opp, g: true }; start(); }
  function gEnd() {
    const m = B.m, win = m.winner === 'a';
    if (win) { G.wins++; G.carry = Math.max(0.05, m.a.hp / m.a.max); G.k++; }
    if (win && G.k < 5) {
      screen('<div class="reveal"><h2 class="big-title">Fight ' + G.k + ' won</h2><p class="sub">' + (5 - G.k) + ' to go · ' + pct(G.carry) + '% HP left</p><button class="btn" onclick="UI.gIntro(' + G.pi + ', false)">Next fight</button></div>');
      return;
    }
    const clear = win, picks = clear ? 3 : Math.ceil(G.wins / 2);
    if (clear) save.gClears = (save.gClears || 0) + 1;
    persist();
    pending = picks ? { left: picks, total: picks } : null;
    screen('<div class="reveal"><h2 class="big-title">' + (clear ? 'Gauntlet cleared!' : 'Gauntlet over') + '</h2><p class="sub">' + G.wins + ' of 5 fights won · ' + picks + ' pick' + (picks === 1 ? '' : 's') + ' earned</p>'
      + (picks ? '<button class="btn" onclick="UI.reward()">Open reward cards</button>' : '') + '<button class="btn alt" onclick="UI.home()">Home</button></div>');
    G = null;
  }

  /* ---------- goals ---------- */
  function goals() {
    screen('<div class="topbar"><button onclick="UI.home()">‹ Home</button><span>Goals · no timers</span></div>'
      + METRICS.map(m => {
        const g = nextGoal(m);
        if (!g) return '<div class="panel"><h3>' + m.name + '</h3><p class="edge">All done ✔</p></div>';
        const v = m.v(), ok = v >= g.t, picks = 1 + (g.i >= 3 ? 1 : 0);
        return '<div class="panel"><h3>' + m.name + ' ' + lv(g.t) + '</h3><div class="hpbar"><div class="hpfill" style="width:' + Math.min(100, v / g.t * 100) + '%"></div></div><p class="edge">' + lv(Math.min(v, g.t)) + ' / ' + lv(g.t) + ' · reward: ' + picks + ' pick' + (picks > 1 ? 's' : '') + '</p>'
          + (ok ? '<button class="btn" onclick="UI.claim(\'' + m.id + '\')">Claim</button>' : '') + '</div>';
      }).join('')
      + '<h3 style="margin:16px 0 4px;color:var(--gold)">Collection sets · 2 picks each</h3>'
      + SETS.map(S => { const p = setProg(S), done = p.got === p.of && p.of > 0;
        return '<div class="panel"><h3>' + S.name + '</h3><div class="hpbar"><div class="hpfill" style="width:' + (p.of ? p.got / p.of * 100 : 0) + '%"></div></div><p class="edge">' + p.got + ' / ' + p.of + (save.claimed[S.id] ? ' · claimed ✔' : '') + '</p>'
          + (done && !save.claimed[S.id] ? '<button class="btn" onclick="UI.claimSet(\'' + S.id + '\')">Claim</button>' : '') + '</div>'; }).join(''));
  }
  function claimSet(id) {
    const S = SETS.find(x => x.id === id), p = setProg(S);
    if (!S || save.claimed[id] || p.got !== p.of) return goals();
    save.claimed[id] = true; persist(); pending = { left: 2, total: 2 }; reward();
  }
  function claim(id) {
    const m = METRICS.find(x => x.id === id), g = nextGoal(m);
    if (!g || m.v() < g.t) return goals();
    save.claimed[id + ':' + g.t] = true; persist();
    const picks = 1 + (g.i >= 3 ? 1 : 0);
    pending = { left: picks, total: picks };
    reward();
  }

  /* ---------- dev tools (?dev=1) ---------- */
  function dev(what) {
    if (!DEV) return;
    if (what === 'reset') { save = null; try { localStorage.removeItem(SAVE_KEY); } catch (e) { } return home(); }
    if (!save) save = { owned: {}, shards: {}, shiny: {}, claimed: {}, gClears: 0, wins: 0, losses: 0, bank: 1, lastDay: today() };
    if (what === 'cards') for (let i = 0; i < 10; i++) give(pick(R));
    else R.forEach(w => { save.owned[w.n] = what; });
    persist(); home();
  }

  window.UI = { home, starter, collection, detail, fightSelect: m => fightSelect(m), preview: pi => preview(pi), start, daily, choose, goals, claim, claimSet, gIntro, gGo, stat: chooseStat, act: chooseAction, next: nextRound, reward, dev };
  save = load();
  home();
})();
