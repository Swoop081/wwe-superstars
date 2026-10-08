// Run with: node tests/qa-static.cjs
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync('app.js','utf8'),html=fs.readFileSync('index.html','utf8'),css=fs.readFileSync('style.css','utf8'),version=JSON.parse(fs.readFileSync('version.json','utf8')).version;
let checks=0;function test(label,fn){try{fn();checks++;console.log('PASS '+label)}catch(e){console.error('FAIL '+label+': '+e.message);process.exitCode=1}}
function declaration(name){const start=app.indexOf('const '+name+'=');assert(start>=0,'missing '+name);const end=app.indexOf('];',start);assert(end>start,'unclosed '+name);return vm.runInNewContext(app.slice(start,end+2)+';'+name)}
const roster=vm.runInNewContext(app.slice(0,app.indexOf('const KEYS='))+';BASE'),events=declaration('LIVE_EVENTS'),actions=declaration('ACTIONS'),names=new Set(roster.map(w=>w.name));
test('JavaScript parses',()=>new Function(app));
test('version synchronized across HTML JS and JSON',()=>{assert(app.includes("const APP_VERSION='"+version+"'"));assert(html.includes('style.css?v='+version));assert(html.includes("||'"+version+"-"));assert(/^\d+\.\d+\.\d+$/.test(version))});
test('all superstar names unique',()=>assert.equal(names.size,roster.length));
test('all superstars have gender',()=>roster.forEach(w=>assert(w.tags?.some(t=>t==='Male'||t==='Female'),w.name)));
test('all superstars have an era or a brand to infer it',()=>roster.forEach(w=>assert(w.tags?.some(t=>/Era$/.test(t)||t==='Legend'||t==='NXT'||t==='Ruthless Aggression'),w.name)));
test('all eight normalized stats are finite and between 65 and 100',()=>roster.forEach(w=>['str','stk','tec','agi','sub','cha','star','fnr'].forEach(k=>assert(Number.isFinite(w[k])&&w[k]>=65&&w[k]<=100,w.name+' '+k))));
test('all finishers defined',()=>roster.forEach(w=>assert(w.finisher,w.name)));
test('action IDs unique',()=>assert.equal(new Set(actions.map(x=>x.id)).size,actions.length));
test('live matches reference existing superstars',()=>events.forEach(e=>e.matches.forEach(m=>{let sides=Array.isArray(m[0])?[...m[0],...m[1]]:m.slice(0,2);sides.forEach(n=>assert(names.has(n),e.name+' '+n))})));
test('all live events have a logo mapping',()=>{let block=app.slice(app.indexOf('const LIVE_EVENT_LOGOS='),app.indexOf('function liveEventHeading'));events.forEach(e=>assert(block.includes("'"+e.name.replaceAll("'","\\'")+"'"),e.name))});
test('selection screens use filters',()=>['pickMultiFighter','selectFighter','selectTagFighter','pickTag1'].forEach(n=>{let i=app.indexOf('function '+n+'('),j=app.indexOf('function ',i+12);assert(app.slice(i,j).includes('exhibitionFilterBar()'),n)}));
test('team elimination feedback present',()=>assert(app.includes('ELIMINATED —')&&app.includes('elimination-notice')));
test('coin emblem blank',()=>assert(app.includes('<span class="coin-face"></span>')));
test('mobile filter CSS present',()=>assert(css.includes('.exhibition-filter-heading')));
console.log(checks+' QA static checks passed');if(process.exitCode)process.exit(process.exitCode);
