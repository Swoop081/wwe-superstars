/* Faction Warfare season rules — v1. Pure, browser-compatible module.
   Integration with battle(), finish(), reward screens and UI is a separate step. */
(function(global){
 'use strict';
 const DIVISIONS=['world','intercontinental','tag'];
 const freshDivision=()=>({streak:0,stage:'ladder',champion:false,nextDefence:null});
 function createSeason(members,roles,opponents){
  if(!Array.isArray(members)||members.length!==4||new Set(members).size!==4||members.some(x=>typeof x!=='string'||!x.trim()))throw Error('Exactly four unique faction members required');
  if(!roles||!members.includes(roles.world)||!members.includes(roles.intercontinental)||!Array.isArray(roles.tag)||roles.tag.length!==2||new Set([roles.world,roles.intercontinental,...roles.tag]).size!==4||[roles.world,roles.intercontinental,...roles.tag].some(x=>!members.includes(x)))throw Error('Each member must have one championship role');
  return {schema:1,week:1,members:[...members],roles:{world:roles.world,intercontinental:roles.intercontinental,tag:[...roles.tag]},opponents:opponents||[],divisions:Object.fromEntries(DIVISIONS.map(k=>[k,freshDivision()])),status:'active',history:[],rewarded:false};
 }
 function due(season){return DIVISIONS.filter(k=>{const d=season.divisions[k];return d.champion&&d.nextDefence!==null&&d.nextDefence<=season.week})}
 function available(season){if(season.status!=='active')return [];const urgent=due(season);return urgent.length?urgent.map(division=>({division,kind:'defence'})):DIVISIONS.map(division=>({division,kind:season.divisions[division].champion?'waiting':season.divisions[division].stage})).filter(x=>x.kind!=='waiting')}
 function allTitles(season){return DIVISIONS.every(k=>season.divisions[k].champion)}
 function applyResult(season,division,won){
  if(!DIVISIONS.includes(division)||season.status!=='active')throw Error('Invalid match');
  const match=available(season).find(x=>x.division===division);
  if(!match)throw Error('Division unavailable while a defence is due');
  const d=season.divisions[division],kind=match.kind;
  if(kind==='defence'){if(won)d.nextDefence=season.week+4;else Object.assign(d,freshDivision())}
  else if(kind==='ladder'){d.streak=won?d.streak+1:0;if(d.streak===3)d.stage='contender'}
  else if(kind==='contender'){if(won)d.stage='title';else Object.assign(d,freshDivision())}
  else if(kind==='title'){if(won){d.stage='champion';d.champion=true;d.nextDefence=season.week+4}else Object.assign(d,freshDivision())}
  else throw Error('Unsupported match stage');
  season.history.push({week:season.week,division,kind,won:!!won});
  season.week++;
  if(allTitles(season))season.status='final-ready';
  return {kind,won:!!won,randomRewards:won?2:1,finalReady:season.status==='final-ready',due:due(season)};
 }
 function finishFinal(season,won,survivors){
  if(!['final-ready','final-retry'].includes(season.status))throw Error('Final not available');
  if(!Array.isArray(survivors)||new Set(survivors).size!==survivors.length||survivors.some(x=>!season.members.includes(x)))throw Error('Invalid survivors');
  if(won&&!survivors.length)throw Error('Victory requires a survivor');
  if(!won){season.status='final-retry';return {randomRewards:1,level3:[]}}
  if(season.rewarded)throw Error('Rewards already claimed');
  season.status='completed';season.rewarded=true;
  season.history.push({week:season.week,kind:'wargames',won:true,survivors:[...survivors]});
  return {randomRewards:2,level3:[...survivors]};
 }
 global.FactionWarfareRules=Object.freeze({DIVISIONS,createSeason,due,available,allTitles,applyResult,finishFinal});
})(typeof window!=='undefined'?window:globalThis);
