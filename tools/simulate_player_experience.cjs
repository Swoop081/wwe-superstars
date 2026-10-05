const fs=require('node:fs'),vm=require('node:vm');
let seed=202610061; const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
const app={innerHTML:''},ctx=vm.createContext({console,Math:Object.assign(Object.create(Math),{random:rnd}),localStorage:{getItem:()=>null,setItem(){}},document:{querySelector:()=>app},setTimeout:fn=>fn(),clearInterval(){},setInterval:()=>1,window:{},URL,Image:function(){}});
let src=fs.readFileSync('app.js','utf8').replace(/start\(\);setTimeout\(\(\)=>\{loadFinisherMedia\(\);preloadRosterInBackground\(\)\},1500\);\s*$/,'');
vm.runInContext(src+`\nglobalThis.g={BASE,KEYS,ACTIONS,ROAD_MODS,statsAt,hpOf,actionBy,actionValue,chooseCard,initActionDecks,battle,attack,roadNode,get b(){return state.b},set b(v){state.b=v},setCPU(fn){cpuChoice=fn},resetCPU(){cpuChoice=this.cpuChoice}};finish=win=>{state.b.result=win};preloadMatchMedia=()=>{};loadFinisherMedia=()=>Promise.resolve({});`,ctx);
const g=ctx.g,keys=g.KEYS.map(x=>x[0]);
function rank(b,stats,side,hand){let left=[...hand],out=[];while(left.length){let best=g.chooseCard(b,stats,side,left);out.push(best);left=left.filter(x=>x!==best)}return out}
const profiles={optimal:[1,0,0],decent:[.80,.15,.05],average:[.55,.25,.20],poor:[1/3,1/3,1/3]};
function pick(profile,b,stats,side,hand){let r=rank(b,stats,side,hand),p=profiles[profile],x=rnd(),i=x<p[0]?0:x<p[0]+p[1]?1:2;return r[Math.min(i,r.length-1)]}
function makeMatch(p,node,playerLevel){let lvl=node.band,cpu=node.cpu,pmax=g.hpOf(p,playerLevel),cmax=g.hpOf(cpu,lvl);if(node.mod.id==='iron'){pmax=Math.round(pmax*1.25);cmax=Math.round(cmax*1.25)}if(node.mod.id==='glass'){pmax=Math.round(pmax*.7);cmax=Math.round(cmax*.7)}let php=pmax,chp=cmax;if(node.mod.id==='opening'){php=Math.round(pmax*.75);chp=Math.round(cmax*.75)}return {p,cpu,pl:playerLevel,cl:lvl,php,chp,pmax,cmax,avail:[...node.pool],road:true,node,log:'SIM'} }
function one(profile,p,node,playerLevel){let b=makeMatch(p,node,playerLevel);g.b=b;g.battle();let turns=0;while(b.result===undefined&&turns<30){let ps=g.statsAt(p,b.pl),pk=pick(profile,b,ps,'p',b.hand);g.attack(pk);turns++}return {win:!!b.result,turns,timeout:b.result===undefined}}
let out={version:src.match(/APP_VERSION='([^']+)'/)[1],seed:202610061,runsPerScenario:100,matchesPerRun:50,scenarios:{}};
const scenarios=[
 {id:'L1_vs_road',playerLevel:1},
 {id:'L2_vs_road',playerLevel:2},
 {id:'L3_vs_road',playerLevel:3},
 {id:'L4_vs_road',playerLevel:4}
];
for(const scenario of scenarios){out.scenarios[scenario.id]={playerLevel:scenario.playerLevel,profiles:{}};for(const profile of Object.keys(profiles)){let s={matches:0,wins:0,losses:0,turns:0,timeouts:0,maxNodeSum:0,finalNodeSum:0,reached25:0,reached50:0,backsteps:0,byRoadLevel:{}};for(let run=0;run<out.runsPerScenario;run++){let nodeNo=1,maxNode=1;for(let m=0;m<out.matchesPerRun;m++){let node=g.roadNode(nodeNo),eligible=g.BASE.filter(w=>!node.eligibleTag||(w.tags||[]).includes(node.eligibleTag)),p=eligible[Math.floor(rnd()*eligible.length)],r=one(profile,p,node,scenario.playerLevel);s.matches++;s.turns+=r.turns;s.timeouts+=+r.timeout;if(r.win){s.wins++;nodeNo++}else{s.losses++;let before=nodeNo;nodeNo=Math.max(1,nodeNo-1);if(nodeNo<before)s.backsteps++}maxNode=Math.max(maxNode,nodeNo);let q=s.byRoadLevel[node.band]||(s.byRoadLevel[node.band]={matches:0,wins:0});q.matches++;q.wins+=+r.win} s.maxNodeSum+=maxNode;s.finalNodeSum+=nodeNo;s.reached25+=+(maxNode>=25);s.reached50+=+(maxNode>=50)}
 s.winRate=s.wins/s.matches;s.meanTurns=s.turns/s.matches;s.meanMaxNode=s.maxNodeSum/out.runsPerScenario;s.meanFinalNode=s.finalNodeSum/out.runsPerScenario;s.reached25/=out.runsPerScenario;s.reached50/=out.runsPerScenario;for(const q of Object.values(s.byRoadLevel))q.winRate=q.wins/q.matches;out.scenarios[scenario.id].profiles[profile]=s;console.log(scenario.id,profile,'win',s.winRate.toFixed(4),'max',s.meanMaxNode.toFixed(2),'final',s.meanFinalNode.toFixed(2),JSON.stringify(s.byRoadLevel))}}
fs.writeFileSync('tools/player-experience-results.json',JSON.stringify(out,null,2)+'\\n');
