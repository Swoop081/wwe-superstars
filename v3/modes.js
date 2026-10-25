/* WWE Superstars v3 - game modes. Every mode is played at your own pace against computer decks: no timers, no energy. */
(function () {
  'use strict';
  const V = window.V3, E = V.E, C = V.C, RAR = V.RAR, ST = V.ST, I = V.I, face = V.face, screen = V.screen, back = V.back, rnd = V.rnd, fmt = V.fmt;
  const S = () => V.S;
  const M = V.modes;
  const rng = () => Math.random();
  let LN = 0;
  // Loaner cards fill any shortfall in a deck so no mode is ever locked behind collection size.
  function loaner(g, rarMax) { const pool = C.map((c, i) => i).filter(i => C[i].g === g && C[i].rar <= (rarMax == null ? 1 : rarMax)); return E.mk(pool[Math.floor(rnd() * pool.length)], { u: --LN }); }
  function best(g, n) { const have = S().cards.filter(c => (g === 'F') === E.isF(c)).sort((a, b) => E.total(b) - E.total(a)).slice(0, n); while (have.length < n) have.push(loaner(g)); return have; }
  const pw = () => V.power();
  const dBack = (to) => back(to || 'UI.home()', 'Home');
  const opp = (mult, o) => E.aiDeck(pw() * mult, rng, o);
  const picksFor = g => E.picksFor(g);
  const regs = {};
  function reg(name, fn) { regs[name] = fn; window.UI[name] = fn; }
  const title = (t, sub) => '<h2 class="big-title">' + t + '</h2>' + (sub ? '<p class="sub">' + sub + '</p>' : '');
  const stat = i => V.statImg(i);

  /* ================= Campaign: 84 stages, 12 bosses, 3 stars each. Every stage is open. ================= */
  const MAPS = ['Rookie', 'Amateur', 'Pro'];
  let CAMP = { map: 0 };
  const bossNames = () => E.shuffle(C.filter(c => c.rar >= 3).map(c => c.n), rng);
  function stagePower(i) { return 520 + i * 22 + ((i + 1) % 7 === 0 ? 120 : 0); }
  M.campaign = function () {
    const st = S().camp.stars, total = Object.values(st).reduce((a, b) => a + b, 0);
    const base = CAMP.map * 28;
    screen(dBack() + title('Campaign', total + ' / 252 stars · win = 1★, one match lost = 2★, perfect = 3★') + '<div class="seg">' + MAPS.map((m, i) => '<button class="' + (CAMP.map === i ? 'on' : '') + '" onclick="UI.campMap(' + i + ')">' + m + '</button>').join('') + '</div>'
      + '<div class="stages">' + Array.from({ length: 28 }, (_, k) => { const i = base + k, s = st[i] || 0, boss = (i + 1) % 7 === 0;
        return '<button class="stg' + (boss ? ' boss' : '') + '" onclick="UI.campGo(' + i + ')"><b>' + (boss ? '★' : i + 1) + '</b><span>' + '★'.repeat(s) + '<i>' + '★'.repeat(3 - s) + '</i></span></button>'; }).join('') + '</div>'
      + '<p class="edge" style="text-align:center;margin:6px 0 0;font-size:12px">Every stage is open. New stars earn bonus picks.</p>');
  };
  reg('campMap', i => { CAMP.map = i; M.campaign(); });
  reg('campGo', i => {
    const boss = (i + 1) % 7 === 0, name = boss ? bossNames()[0] : E.aiName(rng);
    V.startGame({ title: (boss ? 'Boss · ' : 'Stage ') + (i + 1), deckA: V.getDeck(), deckB: E.aiDeck(stagePower(i) * (boss ? 1.06 : 1), rng), oppName: name, oppRec: boss ? 'Boss' : MAPS[Math.floor(i / 28)] + ' · stage ' + (i + 1),
      onEnd: g => {
        let picks = E.picksFor(g) - (g.winner === 'a' ? 0 : 0), stars = 0;
        if (g.winner === 'a') { stars = g.b.pts === 0 ? 3 : g.b.pts === 1 ? 2 : 1; const old = S().camp.stars[i] || 0; if (stars > old) { picks += stars - old; S().camp.stars[i] = stars; } if (boss) picks += 1; V.persist(); }
        V.awardPicks(picks, M.campaign, 'Stage ' + (i + 1) + (stars ? ' · ' + '★'.repeat(stars) : ''));
      } });
  });

  /* ================= Money in the Bank: 5 tougher opponents ================= */
  M.mitb = function () {
    const step = S().mitb.step;
    screen(dBack() + title('Money in the Bank', 'Climb the ladder. Reach the top to win the briefcase.')
      + '<div class="ladder">' + E.MITB_STEPS.map((m, i) => '<div class="rung ' + (i < step ? 'done' : i === step ? 'cur' : '') + '"><b>' + (5 - i) + '</b><span>Opponent ' + (i + 1) + '</span><small>' + (i < step ? 'Cleared' : 'Rank ' + Math.round(pw() * m / 10)) + '</small></div>').reverse().join('') + '</div>'
      + '<button class="btn big" onclick="UI.mitbGo()">' + (step === 0 ? 'Start climbing' : 'Climb rung ' + (step + 1)) + '</button><p class="edge" style="text-align:center">Lose and you can simply try this rung again. Each win = 1 card pick.</p>');
  };
  reg('mitbGo', () => {
    const step = S().mitb.step, o = E.MITB_STEPS[step];
    V.startGame({ title: 'MITB · rung ' + (step + 1), deckA: V.getDeck(), deckB: opp(o), oppName: E.aiName(rng), oppRec: 'Rung ' + (step + 1) + ' of 5',
      onEnd: g => {
        if (g.winner !== 'a') return V.awardPicks(1, M.mitb, 'MITB rewards');
        S().mitb.step++; V.persist();
        if (S().mitb.step >= 5) { S().mitb.step = 0; V.persist(); return V.awardPicks(1, briefcase, 'Rung 5 cleared!'); }
        V.awardPicks(1, M.mitb, 'MITB rewards');
      } });
  });
  function briefcase() {
    const pool = C.map((c, i) => i).filter(i => C[i].rar >= 5), opts = E.shuffle(pool, rng).slice(0, 3);
    screen(title('The Briefcase', 'You won the contract. Cash it in for one of these cards.') + '<div class="grid">' + opts.map(ci => face(E.mk(ci), { click: 'UI.cashIn(' + ci + ')' })).join('') + '</div>');
  }
  reg('cashIn', ci => { const r = V.give(ci); screen(title('Cashed in!') + '<div class="gotbox">' + face(r.inst, { cls: 'reveal-in' }) + '</div><button class="btn big" onclick="UI.home()">Done</button>'); });

  /* ================= Ring Domination ================= */
  let RD = null;
  M.rd = function () {
    const d = V.getDeck(), o = opp(1.0);
    RD = { st: E.rdNew(d, o, rnd), sel: null, msg: 'Pick a card, then a square. Cards can only be placed away from enemy cards — or challenge one your arrows point at.', oppName: E.aiName(rng), wait: false };
    rdRender();
  };
  const ARW = '↑↗→↘↓↙←↖';
  function rdCell(i) {
    const st = RD.st, c = st.board[i];
    if (c.owner) return '<div class="cell own ' + c.owner + '">' + face(c.card, { cls: 'tiny' }) + '<div class="arw">' + C[c.card.c].ar.map(d => '<i class="d' + d + '">' + ARW[d] + '</i>').join('') + '</div></div>';
    let cls = '', click = '';
    if (RD.sel && !RD.wait && !st.over) { const mv = E.rdMoves(st, 'a', RD.sel).filter(m => m.cell === i); if (mv.length) { cls = mv.some(m => m.target != null) ? 'legal chal' : 'legal'; click = ' onclick="UI.rdCell(' + i + ')"'; } }
    return '<button class="cell empty ' + cls + '"' + click + '></button>';
  }
  function rdRender(duel) {
    const st = RD.st, a = st.board.filter(c => c.owner === 'a').length, b = st.board.filter(c => c.owner === 'b').length;
    screen(dBack() + '<div class="hud"><span class="rnd">RING DOMINATION</span><span class="who">YOU ' + a + ' – ' + b + ' ' + RD.oppName + '</span></div>'
      + '<div class="board">' + Array.from({ length: 9 }, (_, i) => rdCell(i)).join('') + '</div>'
      + (duel ? duelHTML(duel) : '<p class="edge" style="text-align:center">' + RD.msg + '</p>')
      + (st.over ? '<button class="btn big" onclick="UI.rdEnd()">' + (st.winner === 'a' ? 'You win — collect rewards' : st.winner === 'b' ? 'You lose — collect rewards' : 'Draw — collect rewards') + '</button>'
        : '<h3 class="sect">Your hand <small>' + (st.turn === 'a' ? 'your turn' : 'opponent thinking…') + '</small></h3><div class="hand">' + st.hand.a.map((c, i) => face(c, { cls: 'mini ' + (RD.sel === c ? 'sel' : ''), click: 'UI.rdSel(' + i + ')' })).join('') + '</div>'
          + '<div class="arrowhint">Gold squares: free to place. Red squares: you challenge an enemy card (winner takes both squares).</div>'));
  }
  function duelHTML(d) {
    const x = d.duel;
    return '<div class="duel2"><div class="dlbl">' + d.sideName + ' · ' + x.stats.map(i => ST[i].name).join(' + ') + '</div><div class="dline">'
      + face(d.att, { cls: 'mini', hl: x.stats, val: x.att.total }) + '<b>VS</b>' + face(d.def, { cls: 'mini', hl: x.stats, val: x.def.total }) + '</div><div class="banner ' + (x.attWins === (d.side === 'a') ? 'w' : 'l') + '">' + (x.attWins === (d.side === 'a') ? 'YOU TAKE BOTH SQUARES' : 'THEY TAKE BOTH SQUARES') + '</div></div>';
  }
  reg('rdSel', i => { RD.sel = RD.st.hand.a[i]; rdRender(); });
  reg('rdCell', i => {
    const st = RD.st, card = RD.sel; if (!card || st.turn !== 'a') return;
    const mv = E.rdMoves(st, 'a', card).filter(m => m.cell === i);
    mv.sort((p, q) => (p.target == null ? 0 : E.total(st.board[p.target].card)) - (q.target == null ? 0 : E.total(st.board[q.target].card)));
    const m = mv[0]; if (!m) return;
    const att = card, def = m.target != null ? st.board[m.target].card : null;
    const info = E.rdPlay(st, 'a', card, m); RD.sel = null;
    RD.msg = 'Placed ' + C[card.c].n + '.';
    const duel = info.duel ? { duel: info.duel, att, def, side: 'a', sideName: 'You challenge' } : null;
    RD.wait = true; rdRender(duel);
    setTimeout(() => rdAI(duel), duel ? 1400 : 500);
  });
  function rdAI(prevDuel) {
    const st = RD.st;
    if (st.over || st.turn !== 'b') { RD.wait = false; return rdRender(prevDuel); }
    const mv = E.rdAI(st, 'b'); if (!mv) { RD.wait = false; return rdRender(); }
    const def = mv.move.target != null ? st.board[mv.move.target].card : null;
    const info = E.rdPlay(st, 'b', mv.card, mv.move);
    const duel = info.duel ? { duel: info.duel, att: mv.card, def, side: 'b', sideName: 'They challenge' } : null;
    RD.msg = RD.oppName + ' played ' + C[mv.card.c].n + '.';
    RD.wait = false; rdRender(duel);
    if (!st.over && st.turn === 'b') { RD.wait = true; setTimeout(() => rdAI(duel), 900); }
  }
  reg('rdEnd', () => { const w = RD.st.winner; V.awardPicks(w === 'a' ? 2 : 1, M.rd, 'Ring Domination'); });

  /* ================= Royal Rumble (15 cards) ================= */
  let RR = null;
  const rrCards = (g, n, mult) => { const mine = S().cards.filter(c => (g === 'F') === E.isF(c)).sort((a, b) => E.total(b) - E.total(a)).slice(0, n); while (mine.length < n) mine.push(loaner(g)); return mine; };
  function rrStartGame(g, n) {
    const mine = rrCards(g, n), theirs = E.aiDeck(pw(), rng, { m: g === 'F' ? 0 : n, f: g === 'F' ? n : 0, s: 0 });
    const foe = g === 'F' ? theirs.f : theirs.m;
    const first = rnd() < 0.5 ? 'a' : 'b';
    const st = E.rrNew(mine, foe, rng, first);
    RR = { st, oppName: E.aiName(rng), phase: null, last: null, g };
    if (first === 'b') { const h = foe.slice().sort((x, y) => E.total(y) - E.total(x))[0]; E.rrStart(st, h); }
    rrNext();
  }
  M.rr = () => rrStartGame('M', 15);
  function rrNext() {
    const st = RR.st; if (st.over) return rrRender();
    if (!st.holder) { // ring side must choose a holder
      if (st.ring === 'a') { RR.phase = 'holder'; return rrRender(); }
      const h = st.b.reserve.slice().sort((x, y) => E.total(y) - E.total(x))[0]; E.rrStart(st, h);
    }
    if (st.ring === 'a') { RR.phase = 'stat'; return rrRender(); }
    // AI is ring holder: it names a stat (sacrificing a card); the player picks a challenger
    RR.aiStat = E.rrAIStat(st, 'b'); RR.aiSac = E.rrAISacrifice(st, 'b'); RR.phase = 'challenge'; rrRender();
  }
  function rrBar() {
    const st = RR.st;
    return '<div class="hud"><span class="rnd">' + (RR.g === 'F' ? "WOMEN'S RUMBLE" : 'ROYAL RUMBLE') + '</span><span class="who">Round ' + (st.round + 1) + '</span></div>'
      + '<div class="foe foe3"><div><b>YOU</b><small>' + st.a.reserve.length + ' in reserve · ' + st.a.out.length + ' out</small></div><div class="score">' + st.pts.a + ' – ' + st.pts.b + '</div><div><b>' + RR.oppName + '</b><small>' + st.b.reserve.length + ' in reserve · ' + st.b.out.length + ' out</small></div></div>';
  }
  function rrRender(res) {
    const st = RR.st;
    let body = '';
    if (st.over) {
      const w = st.winner === 'a';
      body = '<div class="banner ' + (w ? 'w' : 'l') + '">' + (w ? 'YOU WIN THE RUMBLE' : 'YOU WERE ELIMINATED') + '</div><div class="pills"><span>Final points <b>' + st.pts.a + ' – ' + st.pts.b + '</b></span></div>'
        + (res ? rrResult(res) : '') + '<button class="btn big sticky" onclick="UI.rrEnd()">Collect rewards</button>';
    } else if (RR.phase === 'result') body = rrResult(res) + '<button class="btn big sticky" onclick="UI.rrContinue()">Continue</button>';
    else if (RR.phase === 'holder') body = '<h3 class="sect">Choose your ring-holder</h3>' + V.paged('rrh', st.a.reserve.map((c, i) => face(c, { cls: 'mini', click: 'UI.rrHolder(' + i + ')' })), { cols: 5, reserve: 240 });
    else if (RR.phase === 'stat') {
      const h = st.holder, s = E.stats(h);
      body = '<div class="ringhold">' + face(h, { cls: 'mini' }) + '<div><b>You hold the ring</b><small>Drain ×' + st.drain.toFixed(2) + ' · each defence tires your card</small></div></div>'
        + '<h3 class="sect">Name the match type <small>(sacrifices a card from your reserve)</small></h3><div class="tiles4">'
        + s.map((v, i) => '<button class="stile ' + 'win' + '" onclick="UI.rrStat(' + i + ')">' + stat(i) + '<b>' + ST[i].name + '</b><span class="duel"><em class="w">' + Math.round(v * st.drain) + '</em></span></button>').join('') + '</div>';
    } else if (RR.phase === 'sacrifice') {
      body = '<h3 class="sect">Sacrifice a card <small>to call ' + ST[RR.pStat].name + '</small></h3>' + V.paged('rrs', st.a.reserve.map((c, i) => face(c, { cls: 'mini', click: 'UI.rrSac(' + i + ')' })), { cols: 5, reserve: 320 }) + '<button class="btn alt" onclick="UI.rrSac(-1)">Sacrifice my weakest</button>';
    } else if (RR.phase === 'challenge') {
      const sIdx = RR.aiStat, h = st.holder;
      body = '<div class="ringhold">' + face(h, { cls: 'mini', hl: [sIdx], val: Math.round(E.stats(h)[sIdx] * st.drain) }) + '<div><b>' + RR.oppName + ' holds the ring</b><small>Match type: <b style="color:var(--gold2)">' + ST[sIdx].name + '</b> · drain ×' + st.drain.toFixed(2) + '</small></div></div>'
        + '<h3 class="sect">Send a challenger</h3>' + V.paged('rrc', st.a.reserve.map((c, i) => face(c, { cls: 'mini', hl: [sIdx], click: 'UI.rrChal(' + i + ')' })), { cols: 5, reserve: 350 });
    }
    screen(dBack() + rrBar() + body);
  }
  function rrResult(r) {
    const you = r.ring === 'a';
    return '<div class="duel2 keep"><div class="dlbl">' + ST[r.stat].name + (r.sacrifice ? ' · ' + (you ? 'you' : 'they') + ' sacrificed ' + C[r.sacrifice.c].n : '') + '</div><div class="dline">' + face(r.holder, { cls: 'mini', hl: [r.stat], val: r.hv }) + '<b>VS</b>' + face(r.challenger, { cls: 'mini', hl: [r.stat], val: r.cv }) + '</div>'
      + '<div class="banner ' + ((r.holderWins === you) ? 'w' : 'l') + '">' + (r.holderWins ? (you ? 'YOU HOLD THE RING (+1)' : 'THEY HOLD THE RING (+1)') : (you ? 'THE RING CHANGES HANDS — YOU LOSE IT' : 'YOU TAKE THE RING!')) + '</div></div>';
  }
  function rrDo(stat, sac, chal) { const st = RR.st, ringSide = st.ring; const r = E.rrRound(st, stat, sac, chal); RR.phase = 'result'; RR.last = r; rrRender(r); }
  reg('rrHolder', i => { const st = RR.st; E.rrStart(st, st.a.reserve[i]); RR.phase = 'stat'; rrRender(); });
  reg('rrStat', i => { const st = RR.st; RR.pStat = i; if (st.a.reserve.length > 1) { RR.phase = 'sacrifice'; rrRender(); } else rrDo(i, null, E.rrAIChallenger(st, 'b', i)); });
  reg('rrSac', i => { const st = RR.st; const sac = i < 0 ? st.a.reserve.slice().sort((x, y) => E.total(x) - E.total(y))[0] : st.a.reserve[i]; E.rrRound; const ch = E.rrAIChallenger(st, 'b', RR.pStat); rrDo(RR.pStat, sac, ch); });
  reg('rrChal', i => { const st = RR.st; const ch = st.a.reserve[i]; rrDo(RR.aiStat, RR.aiSac, ch); });
  reg('rrContinue', () => { const st = RR.st; if (st.over) return rrRender(RR.last); if (!st.holder) { /* shouldn't happen */ } rrNext(); });
  reg('rrEnd', () => { const w = RR.st.winner === 'a'; V.awardPicks(w ? 3 : 1, RR.g === 'F' ? M.rrw : M.rr, 'Royal Rumble'); });
  M.rrw = () => rrStartGame('F', 15);

  /* ================= Survivor: 10 players, same deck, third loss is out ================= */
  let SV = null;
  M.surv = function () {
    const tier = Math.round(pw() * 0.95), shared = E.aiDeck(tier, rng);
    SV = { shared, round: 0, me: { name: 'You', losses: 0, me: true }, bots: Array.from({ length: 9 }, () => ({ name: E.aiName(rng), losses: 0 })), done: false };
    survRender();
  };
  const alive = () => [SV.me].concat(SV.bots).filter(p => p.losses < 3);
  function survRender() {
    const all = [SV.me].concat(SV.bots).sort((a, b) => a.losses - b.losses);
    screen(dBack() + title('Survivor', 'Everyone has the same deck. Three losses and you are out.')
      + '<div class="plist">' + all.map(p => '<div class="pl ' + (p.losses >= 3 ? 'out' : '') + (p.me ? ' me' : '') + '"><b>' + p.name + '</b><span>' + [0, 1, 2].map(i => '<i class="' + (i < p.losses ? 'x' : '') + '"></i>').join('') + '</span></div>').join('') + '</div>'
      + (SV.done ? '<button class="btn big" onclick="UI.survEnd()">Collect rewards</button>' : '<button class="btn big" onclick="UI.survRound()">Play round ' + (SV.round + 1) + '</button>'));
  }
  const clone = d => ({ m: d.m.map(c => Object.assign({}, c)), f: d.f.map(c => Object.assign({}, c)), s: d.s.map(s => Object.assign({}, s)) });
  reg('survRound', () => {
    const pool = E.shuffle(alive(), rng), me = SV.me;
    const pairs = []; while (pool.length >= 2) pairs.push([pool.pop(), pool.pop()]);
    const mine = pairs.find(p => p.includes(me));
    SV.round++;
    pairs.forEach(p => { if (p === mine) return; const g = E.newGame(clone(SV.shared), clone(SV.shared), rng); E.autoPlayGame(g, rng, E.aiPick); (g.winner === 'a' ? p[1] : p[0]).losses++; });
    const finish = () => { SV.bots.forEach(b => { }); survCheck(); };
    if (!mine) return finish(); // bye
    const foe = mine[0] === me ? mine[1] : mine[0];
    V.startGame({ title: 'Survivor · R' + SV.round, deckA: clone(SV.shared), deckB: clone(SV.shared), oppName: foe.name, oppRec: foe.losses + ' loss' + (foe.losses === 1 ? '' : 'es'),
      onEnd: g => { (g.winner === 'a' ? foe : me).losses++; survCheck(); } });
  });
  function survCheck() {
    const left = alive();
    if (SV.me.losses >= 3 || left.length <= 1) { SV.done = true; SV.place = SV.me.losses >= 3 ? left.length + 1 : 1; }
    survRender();
  }
  reg('survEnd', () => { const p = SV.place, picks = p === 1 ? 6 : p <= 3 ? 4 : p <= 5 ? 3 : 2; V.awardPicks(picks, M.surv, 'Survivor · place ' + p); });

  /* ================= People's Champion Challenge ================= */
  M.pcc = function () {
    const P = S().pcc;
    if (!P) {
      const opts = E.shuffle(C.map((c, i) => i).filter(i => C[i].rar >= 5), rng).slice(0, 2);
      return screen(dBack() + title("People's Champion", 'Choose a Superstar to back. Win matches to score points for them.') + '<div class="grid2">' + opts.map(ci => face(E.mk(ci), { click: 'UI.pccPick(' + ci + ')' })).join('') + '</div>');
    }
    const opps = E.opponents(pw(), rng, 3); PCCO = opps;
    screen(dBack() + title("People's Champion", 'Backing ' + C[P.c].n) + '<div class="gotbox">' + face(E.mk(P.c), {}) + '</div>'
      + '<div class="bar"><i style="width:' + Math.min(100, P.pts / 30 * 100) + '%"></i></div><p class="sub">' + P.pts + ' / 30 points · win Easier = 1, Even = 3, Harder = 5</p>'
      + opps.map((o, i) => '<button class="opp" onclick="UI.pccGo(' + i + ')"><span class="av">' + o.name.slice(0, 2).toUpperCase() + '</span><span class="on"><b>' + o.name + '</b><small>' + o.record + '</small></span><span class="tag ' + o.label.toLowerCase() + '">' + o.label + ' · ' + [1, 3, 5][i] + ' pts</span></button>').join('')
      + '<button class="btn alt" onclick="UI.pccReset()">Switch Superstar</button>');
  };
  let PCCO = [];
  reg('pccPick', ci => { S().pcc = { c: ci, pts: 0 }; V.persist(); M.pcc(); });
  reg('pccReset', () => { S().pcc = null; V.persist(); M.pcc(); });
  reg('pccGo', i => {
    const o = PCCO[i], pts = [1, 3, 5][i];
    V.startGame({ title: 'People\'s Champion', deckA: V.getDeck(), deckB: o.deck, oppName: o.name, oppRec: o.record, onEnd: g => {
      const P = S().pcc; if (g.winner === 'a') P.pts += pts; V.persist();
      if (P.pts >= 30) { const r = V.give(P.c, { lvl: 25 }); S().pcc = null; V.persist(); return V.awardPicks(3, () => screen(title('Champion!', 'Your Superstar wins it all') + '<div class="gotbox">' + face(r.inst, { cls: 'reveal-in' }) + '</div><button class="btn big" onclick="UI.home()">Done</button>'), 'Goal reached!'); }
      V.awardPicks(E.picksFor(g), M.pcc, "People's Champion");
    } });
  });

  /* ================= Road to Glory: 4 rounds with random hands ================= */
  let RTG = null;
  M.rtg = function () { RTG = { round: 0, wins: 0 }; rtgNext(); };
  function rtgNext() {
    const R = RTG;
    if (R.round >= 4) return V.awardPicks(Math.round(3 + R.wins * 1.5), V.home, 'Road to Glory · ' + R.wins + ' / 4 wins');
    const pool = S().cards.slice().sort((a, b) => E.total(b) - E.total(a)).slice(0, 20);
    const ms = E.shuffle(pool.filter(c => !E.isF(c)), rng).slice(0, 3), fs = E.shuffle(pool.filter(E.isF), rng).slice(0, 3);
    while (ms.length < 3) ms.push(loaner('M')); while (fs.length < 3) fs.push(loaner('F'));
    const sups = E.shuffle(S().sups, rng).slice(0, 2);
    const mult = [0.92, 1.0, 1.1, 1.2][R.round];
    V.startGame({ title: 'Road to Glory · R' + (R.round + 1), deckA: { m: ms, f: fs, s: sups }, deckB: opp(mult), oppName: E.aiName(rng), oppRec: 'Round ' + (R.round + 1) + ' of 4',
      onEnd: g => { R.round++; if (g.winner === 'a') R.wins++; screen(title('Round ' + R.round + ' complete', R.wins + ' wins so far') + '<button class="btn big" onclick="UI.rtgNext()">' + (R.round >= 4 ? 'Finish' : 'Next round (new random hand)') + '</button>'); } });
  }
  reg('rtgNext', rtgNext);

  /* ================= Elimination Chamber (Women's, 10 bouts) ================= */
  let EC = null;
  M.ec = function () {
    const mine = best('F', 10), theirs = E.aiDeck(pw(), rng, { m: 0, f: 10, s: 0 }).f;
    const order = []; while (order.length < 10) E.shuffle([0, 1, 2, 3, 4], rng).forEach(x => { if (order.length < 10) order.push(x); });
    EC = { mine, theirs, usedA: [], usedB: [], pts: [0, 0], i: 0, order, oppName: E.aiName(rng), log: [] };
    ecRender();
  };
  function ecRender(res) {
    const e = EC;
    if (e.i >= 10) { const w = e.pts[0] > e.pts[1] ? 'a' : e.pts[1] > e.pts[0] ? 'b' : null;
      return screen(dBack() + title('Elimination Chamber', e.pts[0] + ' – ' + e.pts[1]) + '<div class="banner ' + (w === 'a' ? 'w' : w ? 'l' : 't') + '">' + (w === 'a' ? 'YOU SURVIVE THE CHAMBER' : w ? 'ELIMINATED' : 'DRAW') + '</div>' + (res ? ecRes(res) : '') + '<button class="btn big" onclick="UI.ecEnd()">Collect rewards</button>'); }
    const stI = e.order[e.i], avail = e.mine.filter(c => !e.usedA.includes(c));
    screen(dBack() + '<div class="hud"><span class="rnd">BOUT ' + (e.i + 1) + ' / 10</span><span class="who">YOU ' + e.pts[0] + ' – ' + e.pts[1] + ' ' + e.oppName + '</span></div>'
      + (res ? ecRes(res) : '')
      + '<div class="matchbanner"><span class="ic">' + I.divas + '</span><div><b>' + ST[stI].name + ' bout</b><small>Highest ' + ST[stI].name + ' wins</small></div></div>'
      + '<div class="specs4">' + e.order.map((s, k) => '<span class="' + (k < e.i ? 'done' : k === e.i ? 'cur' : '') + '">' + stat(s) + '</span>').join('') + '</div>'
      + '<h3 class="sect">Choose your wrestler</h3>' + V.paged('ec', avail.map(c => face(c, { cls: 'mini', hl: [stI], click: 'UI.ecPlay(' + e.mine.indexOf(c) + ')' })), { cols: 5, reserve: 300 }));
  }
  function ecRes(r) {
    return '<div class="duel2"><div class="dline">' + face(r.a, { cls: 'mini', hl: [r.stat], val: r.av }) + '<b>VS</b>' + face(r.b, { cls: 'mini', hl: [r.stat], val: r.bv }) + '</div><div class="banner ' + (r.w === 'a' ? 'w' : r.w === 'b' ? 'l' : 't') + '">' + (r.w === 'a' ? 'BOUT WON' : r.w === 'b' ? 'BOUT LOST' : 'DRAW') + '</div></div>';
  }
  reg('ecPlay', k => {
    const e = EC, stI = e.order[e.i], a = e.mine[k];
    const avail = e.theirs.filter(c => !e.usedB.includes(c)).sort((x, y) => E.stats(y)[stI] * (0.9 + rng() * 0.2) - E.stats(x)[stI] * (0.9 + rng() * 0.2));
    const b = avail[rng() < 0.25 && avail.length > 2 ? 1 : 0] || avail[0];
    const sg = c => E.stats(c)[stI] + (rng() < E.sigChance(c) && E.sigStats(c).includes(stI) ? E.baseStats(c)[stI] * E.T.sigBoost : 0);
    const av = Math.round(sg(a)), bv = Math.round(sg(b)), w = av > bv ? 'a' : bv > av ? 'b' : null;
    e.usedA.push(a); e.usedB.push(b); a.mt = (a.mt || 0) + 1; if (w === 'a') e.pts[0]++; else if (w === 'b') e.pts[1]++; else { e.pts[0] += 0.5; e.pts[1] += 0.5; }
    e.i++; V.persist(); ecRender({ a, b, av, bv, w, stat: stI });
  });
  reg('ecEnd', () => { const w = EC.pts[0] > EC.pts[1]; V.awardPicks(w ? 3 : 1, M.ec, 'Elimination Chamber'); });

  /* ================= King of the Ring: stamina tournament, simulated ================= */
  let KR = null;
  M.kotr = function () {
    KR = { m: best('M', 8), f: best('F', 4), s: S().sups.slice().sort((a, b) => E.SUPPORTS[b.s].pct - E.SUPPORTS[a.s].pct).slice(0, 4), stam: {}, rec: { w: 0, l: 0 }, log: [], phase: 'qual', n: 0, tour: null };
    KR.m.concat(KR.f).forEach(c => { KR.stam[c.u] = 100; });
    krRender();
  };
  const FAT = s => 0.6 + 0.4 * s / 100;
  function krLineup() {
    // auto-manage: use the freshest 3 men + 3 women, 2 best-fit supports
    const ms = KR.m.slice().sort((a, b) => KR.stam[b.u] * E.total(b) - KR.stam[a.u] * E.total(a)).slice(0, 3), fs = KR.f.slice().sort((a, b) => KR.stam[b.u] - KR.stam[a.u]);
    return { act: ms.concat(fs.slice(0, 3)), ms, fs: fs.slice(0, 3) };
  }
  function krGame(oppMult) {
    const L = krLineup();
    const tmp = c => Object.assign({}, c, { fat: FAT(KR.stam[c.u]) });
    const map = new Map(); L.act.forEach(c => map.set(c, tmp(c)));
    const da = { m: L.ms.map(c => map.get(c)), f: L.fs.map(c => map.get(c)), s: KR.s.slice(0, 2) };
    const g = E.newGame(da, E.aiDeck(pw() * oppMult, rng), rng); E.autoPlayGame(g, rng, E.aiPick);
    KR.m.concat(KR.f).forEach(c => { KR.stam[c.u] = L.act.includes(c) ? Math.max(0, KR.stam[c.u] - 8) : Math.min(100, KR.stam[c.u] + 6); });
    return g;
  }
  function krRender() {
    const k = KR, L = krLineup();
    const stam = c => '<div class="stam"><i style="width:' + k.stam[c.u] + '%"></i></div>';
    screen(dBack() + title('King of the Ring', k.phase === 'qual' ? 'Qualifying · ' + k.n + ' / 15 played · ' + k.rec.w + '–' + k.rec.l : k.phase === 'tour' ? 'Knockout bracket' : 'Finished')
      + V.paged('kotr', k.m.concat(k.f).map(c => '<div class="kc' + (L.act.includes(c) ? '' : ' rest') + '">' + face(c, { cls: 'mini' }) + stam(c) + '<small>' + (L.act.includes(c) ? 'Active' : 'Resting') + ' · ' + Math.round(k.stam[c.u]) + '%</small></div>').join('') ? k.m.concat(k.f).map(c => '<div class="kc' + (L.act.includes(c) ? '' : ' rest') + '">' + face(c, { cls: 'mini' }) + stam(c) + '<small>' + (L.act.includes(c) ? 'Active' : 'Resting') + ' · ' + Math.round(k.stam[c.u]) + '%</small></div>') : [], { cols: 4, aspect: 1.8, reserve: 400 })
      + '<p class="edge" style="text-align:center;font-size:11.5px;margin:2px 0">Active cards lose 8 stamina a game, resting ones recover 6. Lineups are automatic.</p>'
      + (k.phase === 'done' ? '<button class="btn big" onclick="UI.krEnd()">Collect rewards</button>' : '<button class="btn big" onclick="UI.krSim()">' + (k.phase === 'qual' ? 'Simulate next match' : 'Play ' + ['quarter-final', 'semi-final', 'final'][k.tour.round]) + '</button>' + (k.phase === 'qual' ? '<button class="btn alt" onclick="UI.krAll()">Simulate all qualifying</button>' : '')) + (k.log.length ? '<div class="panel log2">' + k.log.slice(-2).reverse().map(l => '<p>' + l + '</p>').join('') + '</div>' : ''));
  }
  function krStep() {
    const k = KR;
    if (k.phase === 'qual') {
      const g = krGame(0.85 + rng() * 0.3), w = g.winner === 'a'; k.n++; k.rec[w ? 'w' : 'l']++; k.log.push((w ? 'Won ' : 'Lost ') + g.a.pts + '–' + g.b.pts + ' (match ' + k.n + ')');
      if (k.n >= 15) { if (k.rec.w >= 8) { k.phase = 'tour'; k.tour = { round: 0 }; k.log.push('Qualified for the bracket!'); } else { k.phase = 'done'; k.place = 'q'; k.log.push('Did not qualify.'); } }
    } else if (k.phase === 'tour') {
      const mult = [0.95, 1.05, 1.15][k.tour.round], g = krGame(mult), w = g.winner === 'a', nm = ['Quarter-final', 'Semi-final', 'Final'][k.tour.round];
      k.log.push(nm + (w ? ' won ' : ' lost ') + g.a.pts + '–' + g.b.pts);
      if (!w) { k.phase = 'done'; k.place = ['qf', 'sf', 'f'][k.tour.round]; } else { k.tour.round++; if (k.tour.round >= 3) { k.phase = 'done'; k.place = 'champ'; } }
    }
  }
  reg('krSim', () => { krStep(); krRender(); });
  reg('krAll', () => { while (KR.phase === 'qual') krStep(); krRender(); });
  reg('krEnd', () => { const p = { champ: 8, f: 6, sf: 4, qf: 3, q: 2 }[KR.place] || 2; V.awardPicks(p, M.kotr, 'King of the Ring'); });

  /* ================= War: ranked leagues (season of 10 matches) ================= */
  const LEAGUES = ['Bronze', 'Silver', 'Gold', 'Platinum'];
  M.war = function () {
    const s = S(); if (!s.league) { s.league = { tier: 0, played: 0, tr: 0, bots: Array.from({ length: 29 }, () => ({ name: E.aiName(rng), tr: 0 })) }; V.persist(); }
    const L = s.league, opps = E.opponents(pw(), rng, 3); WARO = opps;
    const table = L.bots.concat([{ name: 'You', tr: L.tr, me: true }]).sort((a, b) => b.tr - a.tr);
    const place = table.findIndex(p => p.me) + 1;
    screen(dBack() + title('War · ' + LEAGUES[L.tier] + ' League', 'Match ' + (L.played + 1) + ' of 10 · rank ' + place + ' of 30')
      + (L.played >= 10 ? '<button class="btn big" onclick="UI.warEnd()">Finish season</button>' : opps.map((o, i) => '<button class="opp" onclick="UI.warGo(' + i + ')"><span class="av">' + o.name.slice(0, 2).toUpperCase() + '</span><span class="on"><b>' + o.name + '</b><small>' + o.record + '</small></span><span class="tag ' + o.label.toLowerCase() + '">+' + [10, 20, 30][i] + '</span></button>').join(''))
      + '<div class="plist">' + table.slice(0, 4).map((p, i) => '<div class="pl ' + (p.me ? 'me' : '') + '"><b>' + (i + 1) + '. ' + p.name + '</b><span>' + p.tr + '</span></div>').join('') + '</div>' + (place > 4 ? '<div class="plist"><div class="pl me"><b>' + place + '. You</b><span>' + L.tr + '</span></div></div>' : '')
      + '<p class="edge" style="text-align:center;font-size:12px;margin:2px 0">Top 5 promoted, bottom 5 relegated after 10 matches.</p>');
  };
  let WARO = [];
  reg('warGo', i => {
    const o = WARO[i], L = S().league;
    V.startGame({ title: 'War', deckA: V.getDeck(), deckB: o.deck, oppName: o.name, oppRec: o.record, onEnd: g => {
      L.played++; if (g.winner === 'a') L.tr += [10, 20, 30][i]; else L.tr = Math.max(0, L.tr - 5);
      L.bots.forEach(b => { b.tr += Math.round(rng() * 30 * (0.6 + L.tier * 0.1)) - 3 + (b.tr < 20 ? 2 : 0); if (b.tr < 0) b.tr = 0; });
      V.persist(); V.awardPicks(E.picksFor(g), M.war, 'War');
    } });
  });
  reg('warEnd', () => {
    const L = S().league, table = L.bots.concat([{ tr: L.tr, me: true }]).sort((a, b) => b.tr - a.tr), place = table.findIndex(p => p.me) + 1;
    const promo = place <= 5 && L.tier < 3, rel = place >= 26 && L.tier > 0;
    const picks = place <= 5 ? 5 : place <= 15 ? 3 : 2 + (place <= 25 ? 0 : 0);
    S().league = { tier: L.tier + (promo ? 1 : 0) - (rel ? 1 : 0), played: 0, tr: 0, bots: Array.from({ length: 29 }, () => ({ name: E.aiName(rng), tr: 0 })) };
    V.persist(); V.awardPicks(picks, M.war, 'Season over · place ' + place + (promo ? ' · promoted!' : rel ? ' · relegated' : ''));
  });

  /* ================= Crack the Case: code-breaking puzzle ================= */
  let CASE = null;
  M.case = function () { CASE = { code: Array.from({ length: 4 }, () => 1 + Math.floor(rng() * 6)), guesses: [], cur: [] }; caseRender(); };
  function caseScore(code, g) {
    let exact = 0; const rc = [], rg = [];
    g.forEach((v, i) => { if (v === code[i]) exact++; else { rc.push(code[i]); rg.push(v); } });
    let near = 0; rg.forEach(v => { const k = rc.indexOf(v); if (k >= 0) { near++; rc.splice(k, 1); } });
    return { exact, near };
  }
  function caseRender() {
    const c = CASE, solved = c.guesses.length && c.guesses[c.guesses.length - 1].s.exact === 4, over = solved || c.guesses.length >= 8;
    screen(dBack() + title('Crack the Case', '4-number code, 1–6. Gold = right place, white = wrong place.')
      + '<div class="guesses">' + c.guesses.map(g => '<div class="gr">' + g.g.map(v => '<span>' + v + '</span>').join('') + '<em>' + '<i class="e"></i>'.repeat(g.s.exact) + '<i class="n"></i>'.repeat(g.s.near) + '</em></div>').join('') + '</div>'
      + (over ? '<div class="banner ' + (solved ? 'w' : 'l') + '">' + (solved ? 'CASE CRACKED' : 'The code was ' + c.code.join(' ')) + '</div><button class="btn big" onclick="UI.caseEnd()">' + (solved ? 'Collect reward' : 'New case') + '</button>'
        : '<div class="gr cur">' + [0, 1, 2, 3].map(i => '<span>' + (c.cur[i] || '·') + '</span>').join('') + '</div><div class="keys">' + [1, 2, 3, 4, 5, 6].map(n => '<button onclick="UI.caseKey(' + n + ')">' + n + '</button>').join('') + '<button onclick="UI.caseKey(0)">⌫</button></div><button class="btn big" ' + (c.cur.length === 4 ? '' : 'disabled') + ' onclick="UI.caseGuess()">Guess (' + (8 - c.guesses.length) + ' left)</button>'));
  }
  reg('caseKey', n => { const c = CASE; if (n === 0) c.cur.pop(); else if (c.cur.length < 4) c.cur.push(n); caseRender(); });
  reg('caseGuess', () => { const c = CASE; c.guesses.push({ g: c.cur.slice(), s: caseScore(c.code, c.cur) }); c.cur = []; caseRender(); });
  reg('caseEnd', () => { const c = CASE, solved = c.guesses.length && c.guesses[c.guesses.length - 1].s.exact === 4; if (solved) V.awardPicks(c.guesses.length <= 4 ? 2 : 1, M.case, 'Case cracked'); else M.case(); });

  window.UI.rrw = M.rrw;
  M.rumble = M.rr;
  // wire mode ids used on the home screen
  M.rtg = M.rtg;
  Object.assign(V.modes, { rd: M.rd, rr: M.rr, surv: M.surv, pcc: M.pcc, rtg: M.rtg, ec: M.ec, kotr: M.kotr, war: M.war, case: M.case, campaign: M.campaign, mitb: M.mitb });
})();
