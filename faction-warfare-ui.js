/* Faction Warfare UI — season selection and dashboard. Match integration follows. */
(function(g){
'use strict';
const rules=()=>g.FactionWarfareRules;
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let picks=[];
function owned(){return BASE.filter(w=>level(w.name)>0)}
function menu(){const season=save.factionWarfare;if(season&&season.status!=='completed')return dashboard();picks=[];selection()}
function selection(){
const all=owned();const chosen=new Set(picks);
shell('<div class="fw-page"><button class="btn fw-back" onclick="home()">← HOME</button><div class="fw-kicker">WWE SUPERSTARS</div><h1>FACTION WARFARE</h1><p>Choose four unique superstars. All championship divisions are intergender.</p><h2>YOUR FACTION ('+picks.length+'/4)</h2><div class="fw-picked">'+[0,1,2,3].map(i=>'<div class="fw-slot">'+(picks[i]?esc(picks[i]):'EMPTY')+'<small>'+['WORLD','INTERCONTINENTAL','TAG','TAG'][i]+'</small></div>').join('')+'</div><p>Selection order assigns championship roles.</p><div class="fw-actions"><button class="btn" onclick="factionClear()">CLEAR</button><button class="btn" '+(picks.length!==4?'disabled':'')+' onclick="factionStart()">START SEASON</button></div><div class="fw-roster">'+all.map(w=>'<button class="fw-wrestler '+(chosen.has(w.name)?'selected':'')+'" onclick="factionPick('+JSON.stringify(w.name).replace(/"/g,'&quot;')+')">'+esc(w.name)+' <small>LV '+level(w.name)+'</small></button>').join('')+'</div></div>','fw-screen');
}
function pick(name){if(picks.includes(name))picks=picks.filter(x=>x!==name);else if(picks.length<4&&owned().some(w=>w.name===name))picks.push(name);selection()}
function clear(){picks=[];selection()}
function begin(){if(picks.length!==4)return;save.factionWarfare=rules().createSeason(picks,{world:picks[0],intercontinental:picks[1],tag:picks.slice(2)});persist();dashboard()}
function launch(division){
 const season=save.factionWarfare,match=rules().available(season).find(x=>x.division===division);
 if(!match)return dashboard();
 const names=division==='tag'?season.roles.tag:[season.roles[division]];
 const pool=BASE.filter(w=>!season.members.includes(w.name)).sort(()=>Math.random()-.5);
 const mk=(w,l)=>({w,l,hp:hpOf(w,l),max:hpOf(w,l)});
 const players=names.map(n=>{const w=BASE.find(x=>x.name===n);return mk(w,level(n))});
 const opponents=pool.slice(0,names.length).map((w,i)=>mk(w,players[i].l));
 let b;
 if(names.length>1){b={multi:true,tag:true,teams:{p:players,c:opponents},avail:KEYS.map(x=>x[0]),log:'FACTION WARFARE · TAG TEAM'};multiSync(b)}
 else {const p=players[0],c=opponents[0];b={p:p.w,cpu:c.w,pl:p.l,cl:c.l,php:p.hp,chp:c.hp,pmax:p.max,cmax:c.max,avail:KEYS.map(x=>x[0]),log:'FACTION WARFARE · '+match.kind.toUpperCase()}}
 b.faction={division,kind:match.kind};
 state.b=b;preloadMatchMedia(...[...players,...opponents].map(x=>x.w));battle();
}
function finalMatch(){
 const season=save.factionWarfare;if(!['final-ready','final-retry'].includes(season?.status))return dashboard();
 const pool=BASE.filter(w=>!season.members.includes(w.name)).sort(()=>Math.random()-.5);
 const mk=(w,l)=>({w,l,hp:hpOf(w,l),max:hpOf(w,l)});
 const players=season.members.map(n=>{const w=BASE.find(x=>x.name===n);return mk(w,level(n))});
 const opponents=pool.slice(0,4).map((w,i)=>mk(w,players[i].l));
 const b={multi:true,tag:true,teams:{p:players,c:opponents},avail:KEYS.map(x=>x[0]),log:'FACTION WARFARE · WARGAMES ELIMINATION',faction:{final:true}};
 multiSync(b);state.b=b;preloadMatchMedia(...[...players,...opponents].map(x=>x.w));battle();
}
function finalRewards(){
 const names=state.factionSurvivorRewards||[];
 if(!names.length)return dashboard();
 const name=names.shift(),w=BASE.find(x=>x.name===name);
 if(!w)return finalRewards();
 const old=level(name),neu=Math.max(old,3);
 save.roster[name]=neu;ensureRecord(name);persist();
 const next='factionFinalRewards()';
 if(old)return duplicateUpgrade(w,old,neu,next,'WARGAMES SURVIVOR · LEVEL 3');
 shell('<div class="fw-page"><h1>WARGAMES GRAND PRIZE</h1><p>'+esc(name)+' · LEVEL '+neu+'</p><button class="btn" onclick="'+next+'">CONTINUE</button></div>','fw-screen');
}
function dashboard(){
const s=save.factionWarfare;if(!s)return selection();
const labels={world:'WORLD CHAMPIONSHIP',intercontinental:'INTERCONTINENTAL CHAMPIONSHIP',tag:'TAG TEAM CHAMPIONSHIPS'};
const names=k=>k==='tag'?s.roles.tag.join(' & '):s.roles[k];
shell('<div class="fw-page"><button class="btn fw-back" onclick="home()">← HOME</button><div class="fw-kicker">FACTION WARFARE · WEEK '+s.week+'</div><h1>CHAMPIONSHIP CONTROL</h1><p>'+esc(s.members.join(' · '))+'</p><div class="fw-divisions">'+rules().DIVISIONS.map(k=>{const d=s.divisions[k];const stage=d.champion?'CHAMPION · DEFENCE WEEK '+d.nextDefence:d.stage==='ladder'?'LADDER '+d.streak+'/3':d.stage==='contender'?'NUMBER ONE CONTENDER MATCH':'CHAMPIONSHIP MATCH';const active=rules().available(s).some(x=>x.division===k);return '<div class="fw-division"><h2>'+labels[k]+'</h2><p>'+esc(names(k))+'</p><strong>'+stage+'</strong>'+(active?'<button class="btn fw-play" onclick="factionLaunch(\''+k+'\')">PLAY MATCH</button>':'')+'</div>'}).join('')+'</div><div class="fw-status">'+(s.status==='final-ready'||s.status==='final-retry'?'WARGAMES FINAL UNLOCKED': 'Choose a division to continue. Mandatory defences take priority.')+'</div><p class="fw-note">Match launch and rewards will be enabled when combat integration is complete. Season progress is saved automatically.</p></div>','fw-screen');
}
g.factionLaunch=launch;g.factionFinalMatch=finalMatch;g.factionFinalRewards=finalRewards;g.factionWarfareMenu=menu;g.factionPick=pick;g.factionClear=clear;g.factionStart=begin;g.factionDashboard=dashboard;
})(window);
