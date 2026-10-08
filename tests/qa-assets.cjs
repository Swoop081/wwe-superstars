const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const page=await browser.newPage();
 await page.goto('http://127.0.0.1:8765/',{waitUntil:'domcontentloaded'});
 const audit=await page.evaluate(async()=>{
   const assets=BASE.map(w=>({name:w.name,url:artUrl(w.name)}));
   const failed=[];
   for(let i=0;i<assets.length;i+=20){
     const batch=assets.slice(i,i+20);
     const status=await Promise.all(batch.map(async a=>{try{let r=await fetch(a.url,{method:'HEAD'});return {...a,status:r.status,ok:r.ok}}catch(e){return {...a,status:String(e),ok:false}}}));
     failed.push(...status.filter(x=>!x.ok));
   }
   return {total:assets.length,failed};
 });
 console.log('Superstar artwork checked:',audit.total);
 if(audit.failed.length){console.error('Missing superstar artwork:',JSON.stringify(audit.failed,null,2));process.exitCode=1}
 else console.log('PASS all superstar WebP assets respond successfully');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
