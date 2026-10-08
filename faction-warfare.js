/* Faction Warfare season rules — v1. Pure, browser-compatible module.
   Integration with battle(), finish(), reward screens and UI is a separate step. */
(function(global){
 'use strict';
 const DIVISIONS=['world','intercontinental','tag'];

 const FACTION_TEMPLATES=[
 ['nWo Hollywood','Hollywood Hogan','Syxx','Kevin Nash','Scott Hall'],
 ['D-Generation X','Shawn Michaels DX','Triple H DX','Road Dogg','Billy Gunn'],
 ['The Bloodline','Roman Reigns','Solo Sikoa','Jimmy Uso','Jey Uso'],
 ['Legion of Doom','Ultimate Warrior','British Bulldog','Road Warrior Hawk','Road Warrior Animal'],
 ['Attitude Era','Stone Cold Steve Austin','Ken Shamrock','The Undertaker','Kane'],
 ['Nation of Domination',"The Rock '98",'Faarooq',"D'Lo Brown",'Mark Henry'],
 ['The New Day','Big E','Xavier Woods','Kofi Kingston','The Rock'],
 ['The Judgment Day','Finn Bálor','Dominik Mysterio','Damian Priest','Rhea Ripley'],
 ['The Family','Dusty Rhodes','Goldust','Cody Rhodes','Randy Orton'],
 ['The Kliq','Shawn Michaels','X-Pac','Kevin Nash','Scott Hall'],
 ['The Hardcore Legends','Mankind','Cactus Jack','Terry Funk','Chainsaw Charlie'],
 ['The Usos','Roman Reigns','Solo Sikoa','Jey Uso','Jimmy Uso'],
 ['The Icons','Hulk Hogan','Mr Perfect','Ultimate Warrior','British Bulldog'],
 ['The Authority','Triple H','Randy Orton','Batista','Ric Flair'],
 ['The Phenoms','The Undertaker','Kane','Mankind','Vader'],
 ['The Scottish Alliance','Drew McIntyre','Sheamus','Rowdy Roddy Piper','British Bulldog'],
 ['The Hart Foundation','Bret Hart','British Bulldog','Owen Hart','Jim Neidhart'],
 ['The OG Bloodline','Roman Reigns','Rikishi','Jimmy Uso','Jey Uso'],
 ['The Islanders','Umaga','Solo Sikoa','Rikishi','Kama Mustafa']
 ];
 const RANDOM_NAMES=['The Renegades','The Iron Syndicate','The Outlaws','The Vanguard','The Dominion','The Reckoning','The Wildcards','The Powerhouse','The Revolution','The Blacklist','The Uprising','The Untouchables'];
 const shuffled=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
 function generateOpponents(roster,members,levels){
  const available=new Set(roster.filter(n=>!members.includes(n)));
  const valid=FACTION_TEMPLATES.filter(t=>t.slice(1).every(n=>available.has(n)));
  const chosen=[],used=new Set(members);
  for(const t of shuffled(valid)){if(chosen.length>=5)break;if(t.slice(1).some(n=>used.has(n)))continue;chosen.push({name:t[0],members:t.slice(1),random:false});t.slice(1).forEach(n=>used.add(n))}
  // If roster coverage prevents five unique historical factions, allow repeat wrestlers
  // between factions, never within one faction or on the player's team.
  for(const t of shuffled(valid)){if(chosen.length>=5)break;if(chosen.some(f=>f.name===t[0]))continue;chosen.push({name:t[0],members:t.slice(1),random:false})}
  const pool=roster.filter(n=>!members.includes(n));
  const names=shuffled(RANDOM_NAMES);
  while(chosen.length<7){const pick=shuffled(pool).slice(0,4);if(pick.length<4)throw Error('Not enough superstars to create opponent factions');chosen.push({name:names[(chosen.length-5+names.length)%names.length],members:pick,random:true})}
  const factions=shuffled(chosen.slice(0,5)).concat(chosen.slice(5,7));
  // Five factions match all four player levels. Two get one level lower in each
  // title division. For tags, alternate which member is lowered across the two.
  for(const division of ['world','intercontinental','tag']){
   const weaker=shuffled([0,1,2,3,4,5,6]).slice(0,2);
   factions.forEach((f,i)=>{f.levels=f.levels||{};if(division==='tag'){f.levels.tag=[levels.tag[0],levels.tag[1]];if(weaker.includes(i))f.levels.tag[weaker.indexOf(i)%2]=Math.max(1,f.levels.tag[weaker.indexOf(i)%2]-1)}
    else f.levels[division]=Math.max(1,levels[division]-(weaker.includes(i)?1:0))});
  }
  return factions;
 }
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
 global.FactionWarfareRules=Object.freeze({DIVISIONS,FACTION_TEMPLATES,generateOpponents,createSeason,due,available,allTitles,applyResult,finishFinal});
})(typeof window!=='undefined'?window:globalThis);
