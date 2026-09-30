const APP_VERSION='0.7.41';
const BASE=[
{name:'Roman Reigns',cha:94,str:94,stk:93,tec:89,agi:85,iq:93,finisher:'SPEAR'},{name:'Cody Rhodes',cha:92,str:88,stk:92,tec:91,agi:90,iq:91,finisher:'CROSS RHODES'},{name:'Rhea Ripley',cha:92,str:93,stk:91,tec:89,agi:86,iq:93,finisher:'RIPTIDE'},{name:'CM Punk',cha:93,str:83,stk:91,tec:94,agi:85,iq:94,finisher:'GO TO SLEEP'},{name:'IYO SKY',cha:88,str:79,stk:84,tec:91,agi:93,iq:95,finisher:'OVER THE MOONSAULT'},{name:'Seth Rollins',cha:92,str:85,stk:91,tec:92,agi:92,iq:87,finisher:'CURB STOMP'},{name:'Becky Lynch',cha:91,str:82,stk:91,tec:91,agi:86,iq:90,finisher:'MANHANDLE SLAM'},{name:'Randy Orton',cha:91,str:90,stk:92,tec:92,agi:83,iq:92,finisher:'RKO'},{name:'Bianca Belair',cha:89,str:94,stk:86,tec:85,agi:94,iq:85,finisher:'K.O.D.'},{name:'Gunther',cha:87,str:95,stk:95,tec:92,agi:79,iq:92,finisher:'POWERBOMB'},{name:'Sami Zayn',cha:92,str:84,stk:88,tec:88,agi:88,iq:89,finisher:'HELLUVA KICK'},{name:'Charlotte Flair',cha:91,str:87,stk:87,tec:94,agi:88,iq:86,finisher:'FIGURE EIGHT'},
{name:'Tiffany Stratton',cha:89,str:86,stk:86,tec:87,agi:93,iq:87,finisher:'PRETTIEST MOONSAULT EVER',tags:['Female','SmackDown','Current Era']},
{name:'Liv Morgan',cha:91,str:83,stk:87,tec:87,agi:92,iq:86,finisher:'OBLIVION',tags:['Female','RAW','Current Era']},
{name:'Lola Vice',cha:83,str:83,stk:92,tec:86,agi:88,iq:81,finisher:'SPINNING BACKFIST',tags:['Female','NXT','Current Era']},
{name:'Stone Cold Steve Austin',cha:96,str:94,stk:94,tec:89,agi:82,iq:93,finisher:'STONE COLD STUNNER',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'The Rock',cha:96,str:93,stk:93,tec:89,agi:86,iq:86,finisher:'ROCK BOTTOM',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'Triple H',cha:93,str:92,stk:90,tec:92,agi:80,iq:91,finisher:'PEDIGREE',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'The Undertaker',cha:95,str:95,stk:93,tec:89,agi:82,iq:91,finisher:'TOMBSTONE PILEDRIVER',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'Shawn Michaels',cha:93,str:83,stk:93,tec:94,agi:92,iq:83,finisher:'SWEET CHIN MUSIC',tags:['Male','Attitude Era','Legend','Hall of Fame']},
{name:'Paige',cha:86,str:79,stk:87,tec:89,agi:86,iq:89,finisher:'RAMPAIGE',tags:['Female','Legend']},
{name:'Rob Van Dam',cha:87,str:85,stk:88,tec:86,agi:94,iq:83,finisher:'FIVE STAR FROG SPLASH',tags:['Male','Legend','Hall of Fame']},
{name:'Kurt Angle',cha:90,str:91,stk:87,tec:94,agi:85,iq:89,finisher:'ANGLE SLAM',tags:['Male','Legend','Hall of Fame']},
{name:'Jeff Hardy',cha:89,str:83,stk:86,tec:86,agi:94,iq:85,finisher:'SWANTON BOMB',tags:['Male','Legend']},
{name:'Sol Ruca',cha:84,str:84,stk:82,tec:86,agi:93,iq:86,finisher:'SOL SNATCHER',tags:['Female','NXT','Current Era']},
{name:'Giulia',cha:86,str:83,stk:91,tec:91,agi:86,iq:83,finisher:'NORTHERN LIGHTS BOMB',tags:['Female','NXT','Current Era']},
{name:'Stephanie Vaquer',cha:86,str:84,stk:88,tec:91,agi:89,iq:80,finisher:'SVB',tags:['Female','RAW','Current Era']},
{name:'Bret Hart',cha:90,str:85,stk:87,tec:94,agi:88,iq:92,finisher:'SHARPSHOOTER',tags:['Male','Legend','Hall of Fame']},
{name:'Razor Ramon',cha:93,str:87,stk:90,tec:87,agi:79,iq:87,finisher:"RAZOR'S EDGE",tags:['Male','Legend','Hall of Fame']},
{name:'Diesel',cha:87,str:94,stk:89,tec:83,agi:76,iq:95,finisher:'JACKKNIFE POWERBOMB',tags:['Male','Legend','Hall of Fame']},
{name:'Blake Monroe',cha:88,str:81,stk:85,tec:88,agi:90,iq:81,finisher:'GLAMOUR SHOT',tags:['Female','NXT','Current Era']},
{name:'Goldberg',cha:92,str:95,stk:93,tec:81,agi:79,iq:89,finisher:'JACKHAMMER',tags:['Male','Legend','Hall of Fame']},
{name:'Bron Breakker',cha:87,str:93,stk:91,tec:86,agi:89,iq:82,finisher:'SPEAR',tags:['Male','RAW','Current Era']},
{name:'Sting',cha:93,str:87,stk:88,tec:89,agi:84,iq:93,finisher:'SCORPION DEATH DROP',tags:['Male','Legend','Hall of Fame']},
{name:'Hulk Hogan',cha:98,str:95,stk:93,tec:82,agi:79,iq:98,finisher:'LEG DROP',tags:['Male','Legend','Hall of Fame']},
{name:'Lita',cha:89,str:80,stk:87,tec:86,agi:94,iq:86,finisher:'LITASAULT',tags:['Female','Legend','Hall of Fame']},
{name:'Jade Cargill',cha:87,str:94,stk:89,tec:84,agi:84,iq:82,finisher:'JADED',tags:['Female','SmackDown','Current Era']},
{name:'AJ Styles',cha:89,str:82,stk:88,tec:91,agi:91,iq:89,finisher:'STYLES CLASH',tags:['Male','SmackDown','Current Era']},
{name:'Finn Bálor',cha:88,str:83,stk:87,tec:90,agi:90,iq:86,finisher:'COUP DE GRÂCE',tags:['Male','RAW','Current Era']},
{name:'Naomi',cha:90,str:80,stk:85,tec:86,agi:91,iq:86,finisher:'SPLIT-LEGGED MOONSAULT',tags:['Female','SmackDown','Current Era']},
{name:'Trish Stratus',cha:92,str:82,stk:88,tec:89,agi:90,iq:87,finisher:'STRATUSFACTION',tags:['Female','Legend','Hall of Fame']},
{name:'Demolition Smash',cha:86,str:91,stk:91,tec:84,agi:75,iq:87,finisher:'DEMOLITION DECAPITATION',tags:['Male','Legend']},
{name:'Demolition Ax',cha:85,str:93,stk:91,tec:84,agi:75,iq:87,finisher:'DEMOLITION DECAPITATION',tags:['Male','Legend']},
{name:'Ultimate Warrior',cha:93,str:94,stk:92,tec:77,agi:85,iq:87,finisher:'WARRIOR SPLASH',tags:['Male','Legend','Hall of Fame']},
{name:'Macho Man Randy Savage',cha:96,str:88,stk:92,tec:87,agi:87,iq:87,finisher:'DIVING ELBOW DROP',tags:['Male','Legend','Hall of Fame']},
{name:'Andre the Giant',cha:93,str:95,stk:93,tec:84,agi:71,iq:95,finisher:'BUTTERFLY SUPLEX',tags:['Male','Legend','Hall of Fame']},
{name:'Roxanne Perez',cha:86,str:77,stk:86,tec:89,agi:91,iq:87,finisher:'POP ROX',tags:['Female','RAW','Current Era']},
{name:'Brock Lesnar',cha:93,str:95,stk:95,tec:93,agi:84,iq:84,finisher:'F-5',tags:['Male','Legend']},
{name:'John Cena',cha:95,str:94,stk:93,tec:89,agi:82,iq:94,finisher:'ATTITUDE ADJUSTMENT',tags:['Male','Legend']},
{name:'Sable',cha:91,str:84,stk:88,tec:84,agi:85,iq:83,finisher:'SABLE BOMB',tags:['Female','Legend']}];

// Canonical Superstar metadata used by Superstar Road eligibility rules.
// Keep this map additive: new roster members should receive era, division, brand,
// faction/stable and tag-team metadata here as appropriate.
const SUPERSTAR_TAGS={
'Roman Reigns':['Male','Current Era','SmackDown','The Bloodline','The Shield'],
'Cody Rhodes':['Male','Current Era','SmackDown','Legacy'],
'Rhea Ripley':['Female','Current Era','RAW','Judgment Day'],
'CM Punk':['Male','Current Era','RAW','Straight Edge Society'],
'IYO SKY':['Female','Current Era','RAW','Damage CTRL'],
'Seth Rollins':['Male','Current Era','RAW','The Shield'],
'Becky Lynch':['Female','Current Era','RAW'],
'Randy Orton':['Male','Current Era','SmackDown','Evolution','Legacy'],
'Bianca Belair':['Female','Current Era','SmackDown'],
'Gunther':['Male','Current Era','RAW','Imperium'],
'Sami Zayn':['Male','Current Era','RAW','The Bloodline'],
'Charlotte Flair':['Female','Current Era','SmackDown','Four Horsewomen'],
'Tiffany Stratton':['Female','Current Era','SmackDown','NXT Alumni'],
'Liv Morgan':['Female','Current Era','RAW','Judgment Day'],
'Lola Vice':['Female','Current Era','NXT'],
'Stone Cold Steve Austin':['Male','Attitude Era','Legend','Hall of Fame'],
'The Rock':['Male','Attitude Era','Legend','Hall of Fame','Nation of Domination'],
'Triple H':['Male','Attitude Era','Legend','Hall of Fame','D-Generation X','Evolution'],
'The Undertaker':['Male','Attitude Era','Legend','Hall of Fame','Brothers of Destruction'],
'Shawn Michaels':['Male','Attitude Era','Legend','Hall of Fame','D-Generation X'],
'Paige':['Female','Reality Era','Legend'],
'Rob Van Dam':['Male','Ruthless Aggression Era','Legend','Hall of Fame','ECW'],
'Kurt Angle':['Male','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame','Team Angle'],
'Jeff Hardy':['Male','Attitude Era','Ruthless Aggression Era','Legend','The Hardy Boyz'],
'Sol Ruca':['Female','Current Era','NXT'],
'Giulia':['Female','Current Era','NXT'],
'Stephanie Vaquer':['Female','Current Era','RAW'],
'Bret Hart':['Male','New Generation Era','Legend','Hall of Fame','Hart Foundation'],
'Razor Ramon':['Male','New Generation Era','Legend','Hall of Fame','The Kliq'],
'Diesel':['Male','New Generation Era','Legend','Hall of Fame','The Kliq','Two Dudes with Attitudes'],
'Blake Monroe':['Female','Current Era','NXT'],
'Goldberg':['Male','Monday Night War Era','Legend','Hall of Fame','WCW'],
'Bron Breakker':['Male','Current Era','RAW','The Vision','Steiner Family'],
'Sting':['Male','Monday Night War Era','Legend','Hall of Fame','WCW'],
'Hulk Hogan':['Male','Golden Era','Legend','Hall of Fame','nWo','Mega Powers'],
'Lita':['Female','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame','Team Xtreme'],
'Jade Cargill':['Female','Current Era','SmackDown'],
'AJ Styles':['Male','Current Era','SmackDown','The O.C.'],
'Finn Bálor':['Male','Current Era','RAW','Judgment Day','Bullet Club'],
'Naomi':['Female','Current Era','SmackDown'],
'Trish Stratus':['Female','Attitude Era','Ruthless Aggression Era','Legend','Hall of Fame'],
'Demolition Smash':['Male','Golden Era','Legend','Demolition'],
'Demolition Ax':['Male','Golden Era','Legend','Demolition'],
'Ultimate Warrior':['Male','Golden Era','Legend','Hall of Fame'],
'Macho Man Randy Savage':['Male','Golden Era','Legend','Hall of Fame','Mega Powers'],
'Andre the Giant':['Male','Golden Era','Legend','Hall of Fame'],
'Roxanne Perez':['Female','Current Era','RAW','NXT Alumni'],
'Brock Lesnar':['Male','Ruthless Aggression Era','Legend'],
'John Cena':['Male','Ruthless Aggression Era','PG Era','Legend'],
'Sable':['Female','Attitude Era','Legend']
};
BASE.forEach(w=>w.tags=[...new Set([...(w.tags||[]),...(SUPERSTAR_TAGS[w.name]||[])])]);
function hasTag(w,t){return (w.tags||[]).includes(t)}
function roadEligibleTags(){let owned=BASE.filter(w=>level(w.name));let candidates=[...new Set(BASE.flatMap(w=>w.tags||[]))].filter(t=>owned.some(w=>hasTag(w,t)));return candidates.filter(t=>owned.filter(w=>hasTag(w,t)).length>=2)}
const KEYS=[['str','Strength'],['stk','Strike'],['tec','Technique'],['agi','Agility'],['cha','Charisma'],['iq','Ring IQ']];let save=JSON.parse(localStorage.getItem('wweSuperstarsSave')||'null'),state={};const app=document.querySelector('#app');
function persist(){localStorage.setItem('wweSuperstarsSave',JSON.stringify(save))}
function ensureRecord(n){if(!save.records)save.records={};if(!save.records[n])save.records[n]={wins:0,losses:0,streak:0,bestStreak:0};return save.records[n]}
function recordGame(n,win){let r=ensureRecord(n);if(win){r.wins++;r.streak=Math.max(1,r.streak+1);r.bestStreak=Math.max(r.bestStreak,r.streak)}else{r.losses++;r.streak=Math.min(-1,r.streak-1)}}
function recordStats(n){let r=ensureRecord(n),g=r.wins+r.losses,p=g?Math.round(r.wins/g*100):0;return {...r,games:g,pct:p}}
function statsAt(w,lvl){let m=1+(lvl-1)*.05;return Object.fromEntries(KEYS.map(([k])=>[k,Math.round(w[k]*m)]))}function hpOf(w,lvl){let s=statsAt(w,lvl),v=KEYS.map(([k])=>s[k]).sort((a,b)=>a-b).slice(1,-1);return v.reduce((a,b)=>a+b,0)}function level(n){return save?.roster?.[n]||0}
function artFile(name){return name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.png'}
function card(w,l=1,c=''){let s=statsAt(w,l);let file=artFile(w.name);let art='<img class="cardart" src="assets/superstars/'+file+'" alt="'+w.name+'" onerror="this.onerror=null;this.outerHTML=\'<div class=&quot;sil&quot;></div>\'">';return '<div class="card '+c+'">'+art+'<div class="corner levelcorner"><small>LVL</small><b>'+l+'</b></div><div class="corner hpcorner"><small>HP</small><b>'+hpOf(w,l)+'</b></div><div class="name">'+w.name+'</div><div class="stats sixstats"><span class="stat-str">STR <b>'+s.str+'</b></span><span class="stat-stk">STK <b>'+s.stk+'</b></span><span class="stat-tec">TEC <b>'+s.tec+'</b></span><span class="stat-agi">AGI <b>'+s.agi+'</b></span><span class="stat-cha">CHA <b>'+s.cha+'</b></span><span class="stat-iq">IQ <b>'+s.iq+'</b></span></div></div>';}function shell(x,c=''){app.innerHTML=`<section class="screen ${c}">${x}</section>`}
function logo(){return '<img class="game-logo" src="assets/wwe-superstars-logo.webp?v='+APP_VERSION+'" alt="WWE Superstars">'}
function versionBadge(){return '<div class="version-badge">VERSION '+APP_VERSION+'</div>'}
function start(){document.title='WWE Superstars · '+APP_VERSION;if(save)return home();shell(`<div class="startscreen"><div class="startglow"></div>${logo()}<div class="startcopy"><div class="kicker">BUILD YOUR ROSTER · BECOME UNSTOPPABLE</div><button class="btn startbtn" onclick="welcome()">START GAME</button></div>${versionBadge()}</div>`,'start')}
function welcome(){let p=[...BASE].sort(()=>Math.random()-.5).slice(0,5);state.picks=p;state.reveal=0;welcomeReveal()}
function welcomeReveal(){let i=state.reveal,w=state.picks[i],last=i===state.picks.length-1;shell(`<div class="topbar onboardingbar"><span>WELCOME PACK</span><span>${i+1} / 5</span></div><div class="welcome-reveal"><div class="kicker">YOUR STARTING ROSTER</div><div class="reveal-stage">${card(w,1,'reveal-card')}</div><div class="reveal-name">${w.name}</div><div class="reveal-progress">${state.picks.map((_,n)=>'<i class="'+(n<=i?'on':'')+'"></i>').join('')}</div><button class="btn" onclick="${last?'claimWelcome()':'nextWelcome()'}">${last?'CLAIM YOUR ROSTER':'REVEAL NEXT SUPERSTAR'}</button></div>`,'onboarding')}
function nextWelcome(){state.reveal++;welcomeReveal()}
function claimWelcome(){save={roster:{},wins:0,losses:0,records:{}};state.picks.forEach(x=>{save.roster[x.name]=1;ensureRecord(x.name)});persist();home()}
function home(){shell(`<div class="topbar"><span>WWE SUPERSTARS · v${APP_VERSION}</span><span>${save.wins}W · ${save.losses}L</span></div><div class="home-logo">${logo()}</div><div class="hero homehero"><div class="mode" onclick="selectFighter()" role="button" tabindex="0"><div class="kicker">PLAY NOW</div><h2>EXHIBITION</h2><p>Choose a Superstar. Face a level-scaled random opponent. Win a reward card.</p></div><div class="mode road-home" onclick="road()" role="button" tabindex="0"><div class="kicker">ENDLESS ARCADE</div><h2>SUPERSTAR ROAD</h2><p>Fixed progression difficulty. Win to advance. Lose and move back.</p><div class="mode-action">ENTER ROAD · LEVEL ${save.roadLevel||1}</div></div><div class="mode" onclick="dailyGauntlet()" role="button" tabindex="0"><div class="kicker">DAILY FEATURE</div><h2>DAILY GAUNTLET</h2><p>Beat today's featured Superstar five times. Each win awards a copy of them.</p><div class="mode-action">${dailyFeatured().name.toUpperCase()} · ${dailyProgress()}/5</div></div><button class="btn secondary" onclick="collection()">MY SUPERSTARS · ${Object.keys(save.roster).length}</button><button class="btn secondary" onclick="careerStats()">CAREER STATS</button></div>`)}
function collection(){let o=BASE.filter(x=>level(x.name));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>${o.length} OWNED</span></div><div class="title">My Superstars</div><div class="cards">${o.sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name)).map(x=>card(x,level(x.name))).join('')}</div>`)}
function careerStats(){let o=BASE.filter(x=>level(x.name)).map(w=>({w,...recordStats(w.name)})).sort((a,b)=>b.games-a.games||b.wins-a.wins||a.w.name.localeCompare(b.w.name));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>CAREER STATS</span></div><div class="title">Career Stats</div><div class="sub">${save.wins} wins · ${save.losses} losses</div><div class="record-list">${o.map(x=>`<div class="record-row"><img src="assets/superstars/${artFile(x.w.name)}" alt=""><div class="record-name"><b>${x.w.name}</b><small>LVL ${level(x.w.name)} · ${x.games} MATCHES</small></div><div class="record-numbers"><b>${x.wins}-${x.losses}</b><small>${x.pct}% · ${x.streak>0?'W'+x.streak:x.streak<0?'L'+Math.abs(x.streak):'—'} STREAK</small></div></div>`).join('')}</div>`,'stats-screen')}

function dailyKey(){let d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return y+'-'+m+'-'+day}
function dailyFeatured(){let k=dailyKey(),seed=[...k].reduce((a,c)=>((a*31+c.charCodeAt(0))>>>0),7);return BASE[seed%BASE.length]}
function dailyProgress(){return save?.dailyGauntlet?.date===dailyKey()?Math.min(5,save.dailyGauntlet.wins||0):0}
function ensureDaily(){let k=dailyKey();if(!save.dailyGauntlet||save.dailyGauntlet.date!==k)save.dailyGauntlet={date:k,wins:0};return save.dailyGauntlet}
function dailyGauntlet(){let d=ensureDaily(),w=dailyFeatured(),done=d.wins>=5;persist();shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>DAILY GAUNTLET</span></div><div class="title">${w.name}</div><div class="sub">TODAY'S FEATURED SUPERSTAR · ${d.wins}/5 WINS</div><div class="hero finish">${card(w,Math.max(1,Math.min(5,d.wins+1)))}<div class="sub">${done?'Gauntlet complete. A new featured Superstar arrives tomorrow.':'Each victory awards one '+w.name+' copy. Losses do not consume an attempt.'}</div>${done?'<button class="btn secondary" onclick="home()">COMPLETE · RETURN HOME</button>':'<button class="btn" onclick="selectGauntletFighter()">PLAY MATCH '+(d.wins+1)+' OF 5</button>'}</div>`,'gauntlet-screen')}
function selectGauntletFighter(){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let w=dailyFeatured(),stage=d.wins+1,o=BASE.filter(x=>level(x.name)).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name));shell(`<div class="topbar"><button onclick="dailyGauntlet()" style="background:none;border:0">‹ GAUNTLET</button><span>MATCH ${stage} / 5</span></div><div class="title">Choose Superstar</div><div class="sub">${w.name} · 100% HP · Each match has a different rule.</div><div class="cards select">${o.map(x=>`<div onclick="beginGauntlet('${x.name.replaceAll("'","\\'")}')">${card(x,level(x.name))}</div>`).join('')}</div>`)}
function beginGauntlet(n){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let p=BASE.find(x=>x.name===n),cpu=dailyFeatured(),stage=d.wins+1,pl=level(n),cl=pl,pmax=hpOf(p,pl),cmax=hpOf(cpu,cl),mods=['normal','noStat','specialist','comeback','random'],mod=ROAD_MODS.find(x=>x.id===mods[stage-1])||ROAD_MODS[0],pool=[...KEYS.map(x=>x[0])],blocked=null;if(mod.id==='noStat'){blocked=pool[(stage+dailyKey().charCodeAt(9))%pool.length];pool=pool.filter(x=>x!==blocked)}if(mod.id==='specialist')pool=pool.slice(0,3);state.b={p,cpu,pl,cl,php:pmax,chp:cmax,pmax,cmax,avail:pool,gauntlet:true,gauntletStage:stage,node:{mod,pool,blocked},log:mod.name+' · DAILY GAUNTLET · MATCH '+stage+' OF 5'};battle()}
const ROAD_CITIES=['New York, USA','London, England','Tokyo, Japan','Mexico City, Mexico','Toronto, Canada','Paris, France','Sydney, Australia','Berlin, Germany','Rio de Janeiro, Brazil','Mumbai, India','Rome, Italy','Seoul, South Korea','Chicago, USA','Dublin, Ireland','Madrid, Spain','Singapore','Cape Town, South Africa','Las Vegas, USA','Auckland, New Zealand','Dubai, UAE','Buenos Aires, Argentina','Amsterdam, Netherlands','Bangkok, Thailand','Montreal, Canada'];
const ROAD_MODS=[
{id:'normal',name:'STANDARD MATCH',desc:'No special rules.'},
{id:'noStat',name:'STAT LOCKOUT',desc:'One attack category is unavailable.'},
{id:'specialist',name:'SPECIALIST',desc:'Only three attack categories are available.'},
{id:'iron',name:'IRON MAN',desc:'Both Superstars have 25% more HP.'},
{id:'glass',name:'GLASS CANNON',desc:'Both Superstars have 30% less HP.'},
{id:'opening',name:'DAMAGED START',desc:'Both Superstars begin at 75% HP.'},
{id:'comeback',name:'COMEBACK',desc:'Attacks deal 25% more damage below 30% HP.'},
{id:'random',name:'CHAOS',desc:'Attack categories fully reshuffle every turn.'}
];
function roadNode(n){let boss=false,seed=(n*9301+49297)%233280,r=seed/233280,mod=ROAD_MODS[Math.floor(r*ROAD_MODS.length)],pool=[...KEYS.map(x=>x[0])],blocked=null;if(mod.id==='noStat'){blocked=pool[Math.floor(r*pool.length)];pool=pool.filter(x=>x!==blocked)}if(mod.id==='specialist')pool=pool.sort((a,b)=>((a.charCodeAt(0)*n)%7)-((b.charCodeAt(0)*n)%7)).slice(0,3);let eligibleTag=null;if(n>=6&&n%4===0){let tags=roadEligibleTags();if(tags.length)eligibleTag=tags[seed%tags.length]}let cpuPool=eligibleTag?BASE.filter(w=>hasTag(w,eligibleTag)):BASE;let cpu=cpuPool[(seed+n)%cpuPool.length],city=ROAD_CITIES[(n-1)%ROAD_CITIES.length];return {n,boss:false,mod,cpu,blocked,pool,eligibleTag,city}}
function road(){if(!save.roadLevel)save.roadLevel=1;persist();let n=save.roadLevel,nodes=[0,1,2,3].map(i=>roadNode(n+i));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>SUPERSTAR ROAD</span></div><div class="title">LEVEL ${n}</div><div class="sub">The road never ends. Three matches are generated ahead.</div><div class="road-map"><div class="road-track"></div>${nodes.map((x,i)=>{let cl=1+Math.floor((x.n-1)/10),max=hpOf(x.cpu,cl),start=max;if(x.mod.id==='iron')max=Math.round(max*1.25);if(x.mod.id==='glass')max=Math.round(max*.7);start=max;if(x.mod.id==='opening')start=Math.round(max*.75);return `<div class="road-stop stop-${i} ${i?'future':'current'} ${x.boss?'boss':''}"><div class="road-pin"><span>${x.n}</span></div><div class="road-card"><div class="road-city">📍 ${x.city}</div><div class="road-level">LEVEL ${x.n}</div><div class="road-opponent">${card(x.cpu,cl,'road-mini-card')}</div><b>${x.mod.name}</b><small>${(x.eligibleTag?x.eligibleTag+' ONLY · ':'')+x.mod.desc}</small><span>${x.cpu.name} · LVL ${cl} · ${start} HP${start!==max?' / '+max+' MAX':''}</span>${i===0?'<button class="btn" onclick="selectRoadFighter()">PLAY MATCH</button>':''}</div></div>`}).join('')}</div>`,'road-screen')}
function selectRoadFighter(){let node=roadNode(save.roadLevel||1),cl=1+Math.floor((node.n-1)/10),cmax=hpOf(node.cpu,cl),chp=cmax;if(node.mod.id==='iron')cmax=Math.round(cmax*1.25);if(node.mod.id==='glass')cmax=Math.round(cmax*.7);chp=cmax;if(node.mod.id==='opening')chp=Math.round(cmax*.75);let o=BASE.filter(x=>level(x.name)&&(!node.eligibleTag||hasTag(x,node.eligibleTag))).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name));shell(`<div class="topbar"><button onclick="road()" style="background:none;border:0">‹ ROAD</button><span>LEVEL ${save.roadLevel||1}</span></div><div class="title">Choose Superstar</div><div class="sub">${node.cpu.name} · LVL ${cl} · ${chp} HP${chp!==cmax?` / ${cmax} MAX`:``}</div><div class="cards select">${o.map(x=>`<div onclick="beginRoad('${x.name.replaceAll("'","\\'")}')">${card(x,level(x.name))}</div>`).join('')}</div>`)}
function beginRoad(n){let node={...roadNode(save.roadLevel||1),boss:false},p=BASE.find(x=>x.name===n),pl=level(n),cl=1+Math.floor((node.n-1)/10);let pmax=hpOf(p,pl),cmax=hpOf(node.cpu,cl);if(node.mod.id==='iron'){pmax=Math.round(pmax*1.25);cmax=Math.round(cmax*1.25)}if(node.mod.id==='glass'){pmax=Math.round(pmax*.7);cmax=Math.round(cmax*.7)}let php=pmax,chp=cmax;if(node.mod.id==='opening'){php=Math.round(pmax*.75);chp=Math.round(cmax*.75)}state.b={p,cpu:node.cpu,pl,cl,php,chp,pmax,cmax,avail:[...node.pool],road:true,node,log:node.mod.name+' · Choose your attack.'};battle()}

function selectFighter(){let o=BASE.filter(x=>level(x.name)).sort((a,b)=>level(b.name)-level(a.name)||hpOf(b,level(b.name))-hpOf(a,level(a.name))||a.name.localeCompare(b.name));shell(`<div class="topbar"><button onclick="home()" style="background:none;border:0">‹ HOME</button><span>EXHIBITION</span></div><div class="title">Choose Superstar</div><div class="sub">Pick anyone in your collection.</div><div class="cards select">${o.map(x=>`<div onclick="begin('${x.name.replaceAll("'","\\'")}')">${card(x,level(x.name))}</div>`).join('')}</div>`)}
function begin(n){let p=BASE.find(x=>x.name===n),pool=BASE.filter(x=>x.name!==n),cpu=pool[Math.floor(Math.random()*pool.length)],pl=level(n),cl=Math.max(1,Math.round(pl*(.8+Math.random()*.35)));state.b={p,cpu,pl,cl,php:hpOf(p,pl),chp:hpOf(cpu,cl),pmax:hpOf(p,pl),cmax:hpOf(cpu,cl),avail:KEYS.map(x=>x[0]),log:'Choose your attack.'};battle()}
const ATTACK_ICONS={str:'strength-icon.png',stk:'strike-icon.png',tec:'technical-icon.png',agi:'agility-icon.png',cha:'charisma-icon.png',iq:'ring-iq-icon.png'};
function battle(){let b=state.b,ps=statsAt(b.p,b.pl); let choices=[...b.avail].sort(()=>Math.random()-.5).slice(0,Math.min(3,b.avail.length));shell(`<div class="battle-logo-wrap">${logo()}</div><div class="topbar"><span>${b.gauntlet?'DAILY GAUNTLET · '+b.gauntletStage+'/5':(b.road?'SUPERSTAR ROAD · '+b.node.n:'EXHIBITION')}</span><span>${b.gauntlet?b.node.mod.name:(b.road?b.node.mod.name:'LIVE')}</span></div><div class="versus">${card(b.p,b.pl)}<div class="vs">VS</div>${card(b.cpu,b.cl)}</div><div class="hpbox"><div class="hphead"><span>${b.p.name}</span><span>${b.php}/${b.pmax}</span></div><div class="hpbar"><div class="hpfill" style="width:${Math.max(0,b.php/b.pmax*100)}%"></div></div></div><div class="hpbox"><div class="hphead"><span>${b.cpu.name}</span><span>${b.chp}/${b.cmax}</span></div><div class="hpbar"><div class="hpfill" style="width:${Math.max(0,b.chp/b.cmax*100)}%"></div></div></div><div class="log">${b.log}</div><div class="chooser"><h3>CHOOSE YOUR ATTACK</h3><div class="attacks">${choices.map(k=>`<button class="attack" onclick="attack('${k}')"><img class="attackicon" src="assets/${ATTACK_ICONS[k]}" alt=""><b>${ps[k]}</b></button>`).join('')}</div></div>`,'battle')}
function attack(pk){let b=state.b,ps=statsAt(b.p,b.pl),cs=statsAt(b.cpu,b.cl); let ck=b.avail[Math.floor(Math.random()*b.avail.length)],pd=ps[pk],cd=cs[ck];if((b.road||b.gauntlet)&&b.node.mod.id==='comeback'){if(b.php/b.pmax<.3)pd=Math.round(pd*1.25);if(b.chp/b.cmax<.3)cd=Math.round(cd*1.25)}b.chp-=pd;b.php-=cd;if((b.road||b.gauntlet)&&b.node.mod.id==='random'){b.avail=[...b.node.pool]}else{b.avail=b.avail.filter(x=>x!==pk&&x!==ck);if(!b.avail.length)b.avail=(b.road||b.gauntlet)?[...b.node.pool]:KEYS.map(x=>x[0])}b.log=`${KEYS.find(x=>x[0]===pk)[1]} ${ps[pk]} DAMAGE · ${b.cpu.name.toUpperCase()} ANSWERS WITH ${KEYS.find(x=>x[0]===ck)[1].toUpperCase()} ${cs[ck]}`;if(b.php<=0||b.chp<=0){let win=b.php<=0&&b.chp<=0?ps[pk]>=cs[ck]:b.chp<=0;return setTimeout(()=>finish(win),350)}battle()}
const FINISHER_MEDIA_URL='finisher-media.json?v='+APP_VERSION;
function tenorEmbed(url){if(!url)return'';let m=url.match(/(?:\/view\/[^?#]*-gif-)(\d+)/i);return m?'https://tenor.com/embed/'+m[1]:url}
async function finish(win){let b=state.b;if(win)save.wins++;else save.losses++;recordGame(b.p.name,win);let r=recordStats(b.p.name);state.winAward=win&&r.wins>0&&r.wins%50===0?b.p.name:null;if(b.road){save.roadLevel=win?(save.roadLevel||1)+1:Math.max(1,(save.roadLevel||1)-1)}persist();let w=win?b.p:b.cpu,media={};try{media=await fetch(FINISHER_MEDIA_URL,{cache:'no-store'}).then(r=>r.ok?r.json():{})}catch(e){}let raw=media[w.name]||'',url=tenorEmbed(raw),direct=/\.(?:gif|webp|mp4)(?:$|\?)/i.test(raw);shell(`<div class="finish-show"><div class="finish-head"><div class="kicker">${win?'YOU WIN':'DEFEAT'}</div><div class="big">${w.finisher}</div><div class="sub">${w.name} hits the finisher!</div></div>${url?`<div class="finisher-media">${direct?`<img src="${url}" alt="${w.name} finisher">`:`<iframe src="${url}" title="${w.name} finisher" allow="autoplay; fullscreen" scrolling="no" frameborder="0"></iframe>`}</div>`:`<div class="finisher-media missing"><span>FINISHER CLIP</span><b>${w.name}</b><small>Add a URL in Finisher Studio</small></div>`}<div class="pin-stage"><div class="pin-label">PIN COUNT</div><div id="pinCount" class="pin-number">1</div></div><div id="finishAction" class="finish-action"></div></div>`,'finish-screen');let n=1,el=document.querySelector('#pinCount');let timer=setInterval(()=>{n++;if(el){el.classList.remove('pop');void el.offsetWidth;el.textContent=n;el.classList.add('pop')}if(n===3){clearInterval(timer);setTimeout(()=>{let a=document.querySelector('#finishAction');if(a)a.innerHTML=win?(b.gauntlet?'<button class="btn" onclick="claimGauntletReward()">CLAIM '+b.cpu.name.toUpperCase()+'</button>':'<button class="btn" onclick="rewardPack()">CLAIM REWARD</button>'):(b.gauntlet?'<button class="btn secondary" onclick="dailyGauntlet()">TRY AGAIN</button>':(b.road?'<button class="btn secondary" onclick="road()">RETURN TO ROAD</button>':'<button class="btn secondary" onclick="home()">RETURN HOME</button>'))},700)}},900)}
function claimGauntletReward(){let d=ensureDaily();if(d.wins>=5)return dailyGauntlet();let w=dailyFeatured(),old=level(w.name),neu=old+1;save.roster[w.name]=neu;ensureRecord(w.name);d.wins++;persist();let next=state.winAward?'claimWinAward()':'dailyGauntlet()';shell(`<div class="hero finish"><div class="kicker">DAILY GAUNTLET REWARD · ${d.wins}/5</div>${card(w,neu,'flash')}<div class="title">${old?'LV. '+old+' → LV. '+neu:'UNLOCKED'}</div><div class="sub">${w.name} awarded for defeating today's featured Superstar.</div><button class="btn" onclick="${next}">Continue</button></div>`,'reward')}
function rewardPack(){shell(`<div class="hero finish"><div class="kicker">MATCH REWARD</div><div class="title">Victory Pack</div><div class="pack" onclick="openReward()">WWE<br>SUPERSTARS</div><div class="sub">Tap the pack to reveal your Superstar.</div></div>`,'reward')}
function openReward(){let wasRoad=!!state.b?.road,w=BASE[Math.floor(Math.random()*BASE.length)],old=level(w.name),neu=old+1;save.roster[w.name]=neu;ensureRecord(w.name);persist();let next=state.winAward?'claimWinAward()':(wasRoad?'road()':'home()');shell(`<div class="hero finish"><div class="kicker">${old?'DUPLICATE ABSORBED':'NEW SUPERSTAR!'}</div>${card(w,neu,'flash')}<div class="title">${old?`LV. ${old} → LV. ${neu}`:'UNLOCKED'}</div><div class="sub">${old?'Your existing card is permanently stronger.':'Added to your WWE Superstars collection.'}</div><button class="btn" onclick="${next}">Continue</button></div>`,'reward')}
function claimWinAward(){let n=state.winAward;if(!n)return state.b?.gauntlet?dailyGauntlet():(state.b?.road?road():home());let w=BASE.find(x=>x.name===n),old=level(n),neu=old+1;save.roster[n]=neu;state.winAward=null;persist();shell(`<div class="hero finish"><div class="kicker">50-WIN AWARD</div>${card(w,neu,'flash')}<div class="title">BONUS ${w.name.toUpperCase()}</div><div class="sub">50 wins with ${w.name}! Extra Superstar copy awarded. LV. ${old} → LV. ${neu}</div><button class="btn" onclick="${state.b?.road?'road()':'home()'}">Continue</button></div>`,'reward')}start();