const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try{
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8765/',{waitUntil:'domcontentloaded'});
 const result=await page.evaluate(()=>{
   save={roster:Object.fromEntries(BASE.map(w=>[w.name,1])),wins:0,losses:0,records:{},coins:5,coinMatches:0,shopPurchases:{date:dailyKey(),bought:[]}};
   const output={singles:0,teams:{2:0,3:0,4:0},rounds:0,tagSwaps:0,failures:[]};
   const verify=b=>{
     for(const side of ['p','c']){
       const hp=side==='p'?b.php:b.chp,max=side==='p'?b.pmax:b.cmax;
       if(!Number.isFinite(hp)||hp<0||hp>max)throw Error(side+' HP invalid');
       if(b.multi)for(const fighter of b.teams[side])if(!Number.isFinite(fighter.hp)||fighter.hp<0||fighter.hp>fighter.max)throw Error('bench HP invalid');
     }
   };
   for(let i=0;i<120;i++){
     begin(BASE[i%BASE.length].name);const b=state.b;
     for(let t=0;t<80&&!b.ended;t++){attack(b.hand[Math.floor(Math.random()*b.hand.length)]);verify(b);output.rounds++}
     if(!b.ended)output.failures.push('singles match '+i+' did not finish');else output.singles++;
   }
   for(const size of [2,3,4]){
     for(let i=0;i<60;i++){
       selectMultiFighter(size);
       for(let p=0;p<size;p++)addMultiFighter(BASE[(i*size+p)%BASE.length].name);
       const b=state.b;
       for(let t=0;t<160&&!b.ended;t++){
         if(!b.multiTagCooldown&&b.php>0&&b.teams.p[1]?.hp>0&&t%5===0){
           const previous=b.p.name;multiChooseTag(1);if(b.p.name!==previous)output.tagSwaps++;
         }
         attack(b.hand[Math.floor(Math.random()*b.hand.length)]);verify(b);output.rounds++;
       }
       if(!b.ended)output.failures.push(size+'v'+size+' match '+i+' did not finish');else output.teams[size]++;
     }
   }
   return output;
 });
 assert.deepEqual(result.failures,[]);
 assert.equal(result.singles,120);
 for(const size of [2,3,4])assert.equal(result.teams[size],60);
 assert(result.tagSwaps>0,'tag swaps should occur');
 assert.deepEqual(errors,[],'uncaught browser errors');
 console.log('PASS 300-match stress test',JSON.stringify(result));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
