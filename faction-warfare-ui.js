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
function dashboard(){
const s=save.factionWarfare;if(!s)return selection();
const labels={world:'WORLD CHAMPIONSHIP',intercontinental:'INTERCONTINENTAL CHAMPIONSHIP',tag:'TAG TEAM CHAMPIONSHIPS'};
const names=k=>k==='tag'?s.roles.tag.join(' & '):s.roles[k];
shell('<div class="fw-page"><button class="btn fw-back" onclick="home()">← HOME</button><div class="fw-kicker">FACTION WARFARE · WEEK '+s.week+'</div><h1>CHAMPIONSHIP CONTROL</h1><p>'+esc(s.members.join(' · '))+'</p><div class="fw-divisions">'+rules().DIVISIONS.map(k=>{const d=s.divisions[k];const stage=d.champion?'CHAMPION · DEFENCE WEEK '+d.nextDefence:d.stage==='ladder'?'LADDER '+d.streak+'/3':d.stage==='contender'?'NUMBER ONE CONTENDER MATCH':'CHAMPIONSHIP MATCH';const active=rules().available(s).some(x=>x.division===k);return '<div class="fw-division"><h2>'+labels[k]+'</h2><p>'+esc(names(k))+'</p><strong>'+stage+'</strong>'+(active?'<span class="fw-ready">READY</span>':'')+'</div>'}).join('')+'</div><div class="fw-status">'+(s.status==='final-ready'||s.status==='final-retry'?'WARGAMES FINAL UNLOCKED': 'Choose a division to continue. Mandatory defences take priority.')+'</div><p class="fw-note">Match launch and rewards will be enabled when combat integration is complete. Season progress is saved automatically.</p></div>','fw-screen');
}
g.factionWarfareMenu=menu;g.factionPick=pick;g.factionClear=clear;g.factionStart=begin;g.factionDashboard=dashboard;
})(window);
