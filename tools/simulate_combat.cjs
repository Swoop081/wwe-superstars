// Execute the shipped app in a headless VM; no duplicate combat implementation.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
let seed=20261006;
const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
const app={innerHTML:''},context=vm.createContext({console,Math:Object.assign(Object.create(Math),{random}),localStorage:{getItem:()=>null,setItem(){}},document:{querySelector:()=>app},setTimeout:fn=>fn(),clearInterval(){},setInterval:()=>1,window:{},URL,Image:function(){}});
let source=fs.readFileSync('app.js','utf8').replace(/start\(\);setTimeout\(\(\)=>\{loadFinisherMedia\(\);preloadRosterInBackground\(\)\},1500\);\s*$/,'');
vm.runInContext(source+`\nglobalThis.game={BASE,KEYS,ACTIONS,ROAD_MODS,statsAt,hpOf,actionNumbers,actionDesc,actionValue,actionBy,initActionDecks,battle,attack,cpuChoice,chooseCard,beginRoad,beginGauntlet,roadNode,originalFinish:finish,recordGame,recordStats,openReward,claimGauntletReward,get b(){return state.b},set b(v){state.b=v},set save(v){save=v},get save(){return save},setCPU(fn){cpuChoice=fn},resetCPU(){cpuChoice=this.cpuChoice},setWinAward(v){state.winAward=v}};finish=win=>{state.b.result=win};preloadMatchMedia=()=>{};loadFinisherMedia=()=>Promise.resolve({});`,context);
const g=context.game,keys=g.KEYS.map(x=>x[0]),round=Math.round;
function fresh(p=g.BASE[0],cpu=g.BASE[1],pl=1,cl=pl,mod='normal'){
 let pool=keys.slice();if(mod==='noStat')pool=pool.filter(k=>k!=='str');if(mod==='specialist')pool=pool.slice(0,4);
 let b={p,cpu,pl,cl,pmax:g.hpOf(p,pl),cmax:g.hpOf(cpu,cl),avail:pool,log:'TEST'};
 if(mod==='iron'){b.pmax=round(b.pmax*1.25);b.cmax=round(b.cmax*1.25)}if(mod==='glass'){b.pmax=round(b.pmax*.7);b.cmax=round(b.cmax*.7)}
 b.php=mod==='opening'?round(b.pmax*.75):b.pmax;b.chp=mod==='opening'?round(b.cmax*.75):b.cmax;
 if(mod!=='normal'){b.road=true;b.node={mod:g.ROAD_MODS.find(m=>m.id===mod),pool}}
 return b;
}
function exchange(b,pk,ck){g.b=b;g.battle();b.hand=[pk];g.setCPU(()=>{b.cpuUsed ||= [];b.cpuHand=[ck];return ck});try{g.attack(pk)}finally{g.resetCPU()}return b}
let checks=0,failures=[];
function check(name,fn){try{fn();checks++}catch(e){failures.push({name,error:e.message})}}
check('Reverse It reflects a fully blocked attack',()=>{let b=fresh(),s=g.statsAt(b.p,1),n=g.actionNumbers('reverse','p',b,s),incoming=g.statsAt(b.cpu,1).str;exchange(b,'act:reverse','str');assert.equal(b.chp,b.cmax-Math.min(n.reflect,incoming));assert.equal(b.php,b.pmax-Math.max(0,incoming-n.block))});
check('Cancelled stat attack retains Adrenaline',()=>{let b=fresh();b.pBoost=100;exchange(b,'str','act:ref');assert.equal(b.pBoost,100);assert.equal(b.chp,b.cmax)});
check('Hardcore displayed damage includes modifier',()=>{let b=fresh(undefined,undefined,1,1,'hardcore'),s=g.statsAt(b.p,1),n=g.actionNumbers('chair','p',b,s);exchange(b,'act:chair','act:adrenaline');assert.equal(b.cmax-b.chp,n.damage)});
check('Healing actions are explained in the turn log',()=>{let b=fresh();b.php=round(b.pmax/2);exchange(b,'act:crowd','act:adrenaline');assert.match(b.log,/RESTORED \d+ HP/)});
check('KO HP is clamped and repeated taps cannot resolve twice',()=>{let b=fresh();b.chp=1;exchange(b,'act:chair','str');assert.equal(b.chp,0);let hp=b.php;g.attack(b.hand[0]);assert.equal(b.php,hp)});
check('Chaos redraws all three choices after exchange',()=>{let b=fresh(undefined,undefined,1,1,'random');g.b=b;g.battle();let old=b.hand.slice(),pk=old[0];g.attack(pk);assert.equal(b.used.length,0);assert.equal(b.cpuUsed.length,0);assert.equal(b.hand.length,3)});
for(let lvl of [1,10,50,250])for(let p of g.BASE)for(let a of g.ACTIONS){check(`numbers ${p.name} L${lvl} ${a.id}`,()=>{let b=fresh(p,undefined,lvl);let s=g.statsAt(p,lvl),n=g.actionNumbers(a.id,'p',b,s);for(let v of Object.values(n))assert.ok(Number.isInteger(v)&&v>=0);assert.ok(!/\d%|×/.test(g.actionDesc(a.id,'p',b,s)));let hi=g.actionNumbers(a.id,'p',fresh(p,undefined,lvl+1),g.statsAt(p,lvl+1));for(let k in n)assert.ok(hi[k]>=n[k]);});}

// Independent numerical oracle for every Action/stat pairing and stipulation.
function expected(k,side,b,stats){let avg=Object.values(stats).reduce((a,v)=>a+v,0)/8,hp=side==='p'?b.php:b.chp,max=side==='p'?b.pmax:b.cmax;
 const r=round;let n={damage:0,heal:0,block:0,reflect:0,boost:0,incoming:0,cancel:false};
 switch(k){
 case 'act:defence':n.heal=r(max*.12);n.block=r(avg*1.5);break;
 case 'act:chair':n.damage=r(avg*1.5);break;
 case 'act:lowblow':n.damage=r(avg);n.block=r(avg*.8);break;
 case 'act:ref':n.cancel=true;break;
 case 'act:crowd':n.heal=r(max*.35);break;
 case 'act:adrenaline':n.boost=r(avg);break;
 case 'act:reverse':n.block=r(avg);n.reflect=r(avg);break;
 case 'act:cheap':n.damage=r(avg*1.1);n.block=r(avg*.6);break;
 case 'act:secondwind':n.heal=r(max*(hp<max/2?.4:.2));break;
 case 'act:mindgames':n.block=r(avg);n.boost=r(avg*.75);break;
 case 'act:fighting':n.heal=r(max*.2);n.boost=r(avg);break;
 case 'act:brawl':n.damage=r(avg*1.75);n.incoming=r(avg*.2);break;
 default:n.damage=stats[k]+((side==='p'?b.pBoost:b.cBoost)||0);
 }
 let m=b.node?.mod.id;
 if(m==='comeback'&&hp/max<.3)n.damage=r(n.damage*1.25);
 if(m==='hardcore'&&['act:chair','act:lowblow','act:cheap','act:brawl'].includes(k))n.damage=r(n.damage*1.25);
 if(m==='submission'&&k==='sub'||m==='aerial'&&k==='agi'||m==='technical'&&k==='tec')n.damage=r(n.damage*1.35);
 if(m==='mainEvent'&&['cha','star','fnr'].includes(k))n.damage=r(n.damage*1.2);
 n.heal=Math.min(max-hp,n.heal);return n;
}
let cards=[...keys,...g.ACTIONS.map(a=>'act:'+a.id)];
for(let lvl of [1,10,50,250])for(let mod of g.ROAD_MODS)for(let pk of cards)for(let ck of cards){
 check(`exchange L${lvl} ${mod.id} ${pk}/${ck}`,()=>{
 let b=fresh(g.BASE[36],g.BASE[37],lvl,lvl+2,mod.id);b.php=round(b.pmax*.24);b.chp=round(b.cmax*.49);b.pBoost=31;b.cBoost=47;
 let p=expected(pk,'p',b,g.statsAt(b.p,b.pl)),c=expected(ck,'c',b,g.statsAt(b.cpu,b.cl));
 let pd=p.damage+c.incoming,cd=c.damage+p.incoming,pr=Math.min(p.reflect,p.block,cd),cr=Math.min(c.reflect,c.block,pd);
 if(p.cancel||c.cancel){pd=cd=pr=cr=0}else{pd=Math.max(0,pd-c.block);cd=Math.max(0,cd-p.block)}
 let php=Math.max(0,b.php+p.heal-cd-cr),chp=Math.max(0,b.chp+c.heal-pd-pr),pb=g.actionBy(pk)||p.cancel||c.cancel?31+p.boost:null,cb=g.actionBy(ck)||p.cancel||c.cancel?47+c.boost:null;
 exchange(b,pk,ck);assert.equal(b.php,php);assert.equal(b.chp,chp);assert.equal(b.pBoost,pb);assert.equal(b.cBoost,cb);
 });
}
for(let [hp,cls] of [[.61,'hp-green'],[.6,'hp-amber'],[.31,'hp-amber'],[.3,'hp-red'],[0,'hp-red']])check(`HP colour ${hp}`,()=>{let b=fresh();b.php=b.pmax*hp;g.b=b;g.battle();assert.ok(app.innerHTML.includes('hpfill '+cls))});
check('CPU spends a banked boost',()=>{let b=fresh();b.cBoost=200;let cs=g.statsAt(b.cpu,1);assert.equal(g.chooseCard(b,cs,'c',['str','act:adrenaline','act:mindgames']),'str')});
for(let mod of ['iron','glass','opening'])check(`Road initialization ${mod}`,()=>{g.save={roster:{'Roman Reigns':10},roadLevel:1};let node;for(let n=1;n<2000;n++){node=g.roadNode(n);if(node.mod.id===mod){g.save.roadLevel=n;break}}assert.equal(node.mod.id,mod);g.beginRoad('Roman Reigns');let b=g.b,factor=mod==='iron'?1.25:mod==='glass'?.7:1;assert.equal(b.pmax,round(g.hpOf(b.p,b.pl)*factor));assert.equal(b.cmax,round(g.hpOf(b.cpu,b.cl)*factor));assert.equal(b.php,round(b.pmax*(mod==='opening'?.75:1)));});
check('Gauntlet specialist offers four stat categories',()=>{g.save={roster:{'Roman Reigns':10},dailyGauntlet:{date:vm.runInContext('dailyKey()',context),wins:2}};g.beginGauntlet('Roman Reigns');assert.equal(g.b.avail.length,4)});
for(let win of [true,false])check(`Road finish progression ${win}`,()=>{g.save={roster:{},wins:0,losses:0,roadLevel:5,records:{}};g.b=fresh();g.b.road=true;g.originalFinish(win);assert.equal(g.save.roadLevel,win?6:4);assert.equal(g.save.wins,+win);assert.equal(g.save.losses,+!win)});
check('Road losses stop at first node',()=>{g.save={roster:{},wins:0,losses:0,roadLevel:1,records:{}};g.b=fresh();g.b.road=true;g.originalFinish(false);assert.equal(g.save.roadLevel,1)});
let stalled=[],matches=0,turns=0,timeouts=0,wins=0,byLevel={},byMod={},actionUses={},positions={};
for(let lvl of [1,10,50,250])for(let mod of g.ROAD_MODS)for(let p of g.BASE)for(let repeat=0;repeat<8;repeat++){
 let cpu=g.BASE[Math.floor(random()*g.BASE.length)],b=fresh(p,cpu,lvl,lvl,mod.id);g.b=b;g.battle();let t=0;
 while(b.result===undefined&&t<200){let ps=g.statsAt(p,lvl),choices=b.hand.slice(),pk=g.chooseCard(b,ps,'p',choices);actionUses[pk]=(actionUses[pk]||0)+1;g.attack(pk);t++;assert.ok(Number.isFinite(b.php)&&Number.isFinite(b.chp));assert.ok(b.php<=b.pmax&&b.chp<=b.cmax);assert.equal(new Set(b.hand).size,b.hand.length);assert.ok(b.hand.every(k=>b.avail.includes(k)||b.actionCards.includes(k)));}
 matches++;turns+=t;if(b.result===undefined){timeouts++;stalled.push({p:p.name,cpu:cpu.name,lvl,mod:mod.id,php:b.php,chp:b.chp,hand:b.hand,cpuHand:b.cpuHand,actions:b.actionCards,cpuActions:b.cpuActionCards})};if(b.result)wins++;for(let [obj,key] of [[byLevel,lvl],[byMod,mod.id],[positions,p.position]]){obj[key] ||= {matches:0,wins:0,turns:0};obj[key].matches++;obj[key].wins+=+!!b.result;obj[key].turns+=t;}
}
const report={version:source.match(/APP_VERSION='([^']+)'/)[1],seed:20261006,roster:g.BASE.length,checks,failures,matches,timeouts,stalled,wins,meanTurns:turns/matches,byLevel,byMod,positions,actionUses};
fs.writeFileSync('tools/combat-simulation-results.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,actionUses:undefined},null,2));if(failures.length||timeouts)process.exitCode=1;
