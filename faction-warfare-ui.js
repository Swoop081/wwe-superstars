/* Faction Warfare UI — season selection and dashboard. Match integration follows. */
(function(g){
'use strict';
const rules=()=>g.FactionWarfareRules;
const belts={world:'https://commons.wikimedia.org/wiki/Special:FilePath/Undisputed_WWE_Championship.png',intercontinental:'https://commons.wikimedia.org/wiki/Special:FilePath/WWE_Intercontinental_Championship_2024.png',tag:'https://commons.wikimedia.org/wiki/Special:FilePath/WWE_championship_belt_icon.svg'};
const belt=(k)=>'<img class="fw-belt" loading="lazy" alt="'+({world:'Undisputed WWE Championship',intercontinental:'Intercontinental Championship',tag:'Tag Team Championship symbol'}[k])+'" src="'+belts[k]+'">';
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let picks=[null,null,null,null];
function owned(){return BASE.filter(w=>level(w.name)>0).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name))}
function menu(){const season=save.factionWarfare;if(season&&season.status!=='completed')return dashboard();picks=[null,null,null,null];selection()}
function selection(){
const all=owned();const chosen=new Set(picks);
shell('<div class="fw-page"><button class="btn fw-back" onclick="home()">← HOME</button><div class="fw-kicker">WWE SUPERSTARS</div><h1>FACTION WARFARE</h1><p>Choose four unique superstars. All championship divisions are intergender.</p><h2>YOUR FACTION ('+picks.filter(Boolean).length+'/4)</h2><div class="fw-picked">'+[0,1,2,3].map(i=>'<button type="button" class="fw-slot" onclick="factionRemoveSlot('+i+')" '+(picks[i]?'title="Remove '+esc(picks[i])+'"':'disabled')+'>'+(picks[i]?'<div class="fw-slot-card">'+card(BASE.find(w=>w.name===picks[i]),level(picks[i]),"","lazy")+'</div>':'<span class="fw-empty">EMPTY</span>')+'<small>'+['WORLD','INTERCONTINENTAL','TAG','TAG'][i]+'</small></button>').join('')+'</div><p>Selection order assigns championship roles.</p><div class="fw-actions"><button class="btn" onclick="factionClear()">CLEAR</button><button class="btn" '+(picks.filter(Boolean).length!==4?'disabled':'')+' onclick="factionStart()">START SEASON</button></div><div id="fw-start-error" class="fw-start-error" role="alert" hidden></div><div class="fw-roster">'+all.map(w=>'<button class="fw-wrestler '+(chosen.has(w.name)?'selected':'')+'" onclick="factionPick('+JSON.stringify(w.name).replace(/"/g,'&quot;')+')">'+'<span class="fw-roster-card">'+card(w,level(w.name),"","lazy")+'</span></button>').join('')+'</div></div>','fw-screen');
}
function removeSlot(index){if(index<0||index>3)return;picks[index]=null;selection()}
function pick(name){
 if(!owned().some(w=>w.name===name))return;
 const existing=picks.indexOf(name);
 if(existing!==-1)picks[existing]=null;
 else {const empty=picks.indexOf(null);if(empty===-1)return;picks[empty]=name}
 selection();
}
function clear(){picks=[null,null,null,null];selection()}
async function begin(){
 const startButton=document.querySelector('.fw-actions button:last-child');
 if(startButton){startButton.disabled=true;startButton.textContent='STARTING…'}
 try{
  if(!rules()||typeof rules().generateOpponents!=='function'){
   await new Promise((resolve,reject)=>{
    const el=document.createElement('script');
    el.src='faction-warfare.js?retry='+Date.now();
    el.onload=resolve;
    el.onerror=()=>reject(Error('Could not download Faction Warfare rules'));
    document.body.appendChild(el);
   });
  }
 }catch(loadError){console.error('Faction Warfare rules reload failed',loadError)}
 if(startButton){startButton.disabled=false;startButton.textContent='START SEASON'}
 if(picks.length!==4||picks.some(n=>!n)||new Set(picks).size!==4){showStartError('Choose four different superstars before starting.');return}
 try{
  if(!rules()||typeof rules().generateOpponents!=='function')throw Error('Faction rules could not load. Check your connection and reopen the latest game.');
  const roles={world:picks[0],intercontinental:picks[1],tag:picks.slice(2)};
  const levels={world:level(picks[0]),intercontinental:level(picks[1]),tag:picks.slice(2).map(n=>level(n))};
  const opponents=rules().generateOpponents(BASE.map(w=>w.name),picks,levels);
  const season=rules().createSeason([...picks],roles,opponents);
  save.factionWarfare=season;
  persist();
  dashboard();
 }catch(error){console.error('Faction Warfare season start failed',error);showStartError('Unable to start season: '+(error?.message||String(error)))}
}
function showStartError(message){
 const el=document.getElementById('fw-start-error');
 if(el){el.textContent=message;el.hidden=false;el.scrollIntoView({block:'nearest',behavior:'smooth'})}
 else alert(message);
}
function launch(division){
 const season=save.factionWarfare,match=rules().available(season).find(x=>x.division===division);
 if(!match)return dashboard();
 const names=division==='tag'?season.roles.tag:[season.roles[division]];
 const faction=season.opponents?.length?season.opponents[(season.week-1)%season.opponents.length]:null;
 const mk=(w,l)=>({w,l,hp:hpOf(w,l),max:hpOf(w,l)});
 const players=names.map(n=>{const w=BASE.find(x=>x.name===n);return mk(w,level(n))});
 const fallback=BASE.filter(w=>!season.members.includes(w.name)).sort(()=>Math.random()-.5);
 const cpuNames=faction?(division==='tag'?faction.members.slice(2,4):[faction.members[division==='world'?0:1]]):fallback.slice(0,names.length).map(w=>w.name);
 const cpuLevels=faction?(division==='tag'?faction.levels.tag:[faction.levels[division]]):players.map(p=>p.l);
 const opponents=cpuNames.map((n,i)=>mk(BASE.find(w=>w.name===n)||fallback[i],cpuLevels[i]));
 let b;
 if(names.length>1){b={multi:true,tag:true,teams:{p:players,c:opponents},avail:KEYS.map(x=>x[0]),log:'FACTION WARFARE · TAG TEAM'};multiSync(b)}
 else {const p=players[0],c=opponents[0];b={p:p.w,cpu:c.w,pl:p.l,cl:c.l,php:p.hp,chp:c.hp,pmax:p.max,cmax:c.max,avail:KEYS.map(x=>x[0]),log:'FACTION WARFARE · '+match.kind.toUpperCase()}}
 b.faction={division,kind:match.kind,opponent:faction?.name||'Challengers'};
 state.b=b;preloadMatchMedia(...[...players,...opponents].map(x=>x.w));battle();
}
function finalMatch(){
 const season=save.factionWarfare;if(!['final-ready','final-retry'].includes(season?.status))return dashboard();
 const faction=season.opponents?.[Math.floor(Math.random()*season.opponents.length)];
 const mk=(w,l)=>({w,l,hp:hpOf(w,l),max:hpOf(w,l)});
 const players=season.members.map(n=>{const w=BASE.find(x=>x.name===n);return mk(w,level(n))});
 const fallback=BASE.filter(w=>!season.members.includes(w.name)).sort(()=>Math.random()-.5);
 const opponents=(faction?faction.members:fallback.slice(0,4).map(w=>w.name)).map((n,i)=>mk(BASE.find(w=>w.name===n)||fallback[i],faction?[faction.levels.world,faction.levels.intercontinental,...faction.levels.tag][i]:players[i].l));
 const b={multi:true,tag:true,teams:{p:players,c:opponents},avail:KEYS.map(x=>x[0]),log:'FACTION WARFARE · WARGAMES ELIMINATION',faction:{final:true}};
 multiSync(b);state.b=b;preloadMatchMedia(...[...players,...opponents].map(x=>x.w));battle();
}
function finalRewards(){
 const names=state.factionSurvivorRewards||[];
 if(!names.length){state.factionSurvivorRewards=null;return completed()}
 const name=names.shift(),w=BASE.find(x=>x.name===name);
 if(!w)return finalRewards();
 const old=level(name),neu=Math.max(old,3);
 save.roster[name]=neu;ensureRecord(name);persist();
 const next='factionFinalRewards()';
 if(old)return duplicateUpgrade(w,old,neu,next,'WARGAMES SURVIVOR · LEVEL 3');
 shell('<div class="fw-page"><h1>WARGAMES GRAND PRIZE</h1><p>'+esc(name)+' · LEVEL '+neu+'</p><button class="btn" onclick="'+next+'">CONTINUE</button></div>','fw-screen');
}
function completed(){shell('<div class="fw-page fw-champions"><div class="fw-kicker">FACTION WARFARE · SEASON COMPLETE</div><h1>WARGAMES CHAMPIONS</h1><p>Your faction conquered all three championships and won WarGames.</p><button class="btn" onclick="factionNewSeason()">START NEW SEASON</button><button class="btn" onclick="home()">HOME</button></div>','fw-screen')}
function newSeason(){save.factionWarfare=null;persist();picks=[null,null,null,null];selection()}
function dashboard(){
const s=save.factionWarfare;if(!s)return selection();if(s.status==='completed')return completed();
const labels={world:'WORLD CHAMPIONSHIP',intercontinental:'INTERCONTINENTAL CHAMPIONSHIP',tag:'TAG TEAM CHAMPIONSHIPS'};
const names=k=>k==='tag'?s.roles.tag.join(' & '):s.roles[k];
shell('<div class="fw-page"><button class="btn fw-back" onclick="home()">← HOME</button><div class="fw-kicker">FACTION WARFARE · WEEK '+s.week+'</div><h1>CHAMPIONSHIP CONTROL</h1><p>'+esc(s.members.join(' · '))+'</p><div class="fw-opponent-heading">SEASON OPPONENTS · '+(s.opponents?.length||0)+' FACTIONS</div><div class="fw-opponent-list">'+(s.opponents||[]).map(f=>'<div class="fw-opponent"><strong>'+esc(f.name)+'</strong><small>'+esc(f.members.join(' · '))+'</small></div>').join('')+'</div><div class="fw-divisions">'+rules().DIVISIONS.map(k=>{const d=s.divisions[k];const stage=d.champion?'CHAMPION · DEFENCE WEEK '+d.nextDefence:d.stage==='ladder'?'LADDER '+d.streak+'/3':d.stage==='contender'?'NUMBER ONE CONTENDER MATCH':'CHAMPIONSHIP MATCH';const active=rules().available(s).some(x=>x.division===k);return '<div class="fw-division fw-division-'+k+'"><div class="fw-belt-area">'+belt(k)+'</div><div class="fw-division-info"><h2>'+labels[k]+'</h2><p>'+esc(names(k))+'</p><strong>'+stage+'</strong>'+(active?'<button class="btn fw-play" onclick="factionLaunch(\''+k+'\')">PLAY MATCH</button>':'')+'</div></div>'}).join('')+'</div><div class="fw-status">'+(s.status==='final-ready'||s.status==='final-retry'?'<button class="btn fw-final-button" onclick="factionFinalMatch()">ENTER WARGAMES · 4 VS 4</button>': 'Choose a division to continue. Mandatory defences take priority.')+'</div><p class="fw-note">WIN: 2 RANDOM CARDS · LOSS: 1 RANDOM CARD · WARGAMES: LEVEL 3 CARDS FOR SURVIVORS</p></div>','fw-screen');
}
g.factionNewSeason=newSeason;g.factionLaunch=launch;g.factionFinalMatch=finalMatch;g.factionFinalRewards=finalRewards;g.factionWarfareMenu=menu;g.factionPick=pick;g.factionRemoveSlot=removeSlot;g.factionClear=clear;g.factionStart=begin;g.factionDashboard=dashboard;
})(window);
