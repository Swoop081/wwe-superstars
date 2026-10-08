// Run after starting a static server on port 8765. Requires Playwright Chromium.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8765/',{waitUntil:'domcontentloaded'});
 const results=await page.evaluate(()=>{
   // Isolate QA in browser test storage. Do not use a production save.
   save={roster:Object.fromEntries(BASE.map(w=>[w.name,1])),wins:0,losses:0,records:{},coins:5,coinMatches:0,shopPurchases:{date:dailyKey(),bought:[]}};
   persist();
   let rounds=0,damage=0;
   const checks=[];
   for(const n of ['Roman Reigns','Rhea Ripley','Sting','Chelsea Green','Drew McIntyre']){
     begin(n);
     const b=state.b;
     for(let t=0;t<35&&!b.ended;t++){
       const oldP=b.php,oldC=b.chp;
       if(!b.hand.length)battle();
       attack(b.hand[0]);
       rounds++;
       if(!Number.isFinite(b.php)||!Number.isFinite(b.chp)||b.php<0||b.chp<0||b.php>b.pmax||b.chp>b.cmax)throw Error('Invalid HP in '+n+' turn '+t);
       if(b.php<oldP||b.chp<oldC)damage++;
     }
     checks.push({name:n,ended:b.ended,php:b.php,chp:b.chp});
   }
   return {rounds,damage,checks};
 });
 assert(results.rounds>=5,'should simulate turns');
 assert(results.damage>0,'combat should cause damage');
 assert.deepEqual(errors,[],'uncaught errors during gameplay');
 console.log('PASS gameplay invariant simulation',JSON.stringify(results));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
