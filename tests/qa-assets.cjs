// Verify every roster WebP is not merely present but decodes as a real image.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try{
  const page=await browser.newPage();
  await page.goto('http://127.0.0.1:8765/',{waitUntil:'domcontentloaded'});
  const audit=await page.evaluate(async()=>{
   const assets=BASE.map(w=>({name:w.name,url:artUrl(w.name)}));
   const failures=[],results=[];
   for(let i=0;i<assets.length;i+=12){
    const batch=assets.slice(i,i+12);
    const status=await Promise.all(batch.map(async a=>{
     try{
      const response=await fetch(a.url,{cache:'no-store'});
      if(!response.ok)return {...a,ok:false,reason:'HTTP '+response.status};
      const bytes=await response.arrayBuffer();
      const header=new Uint8Array(bytes.slice(0,12));
      const fourcc=(start,end)=>String.fromCharCode(...header.slice(start,end));
      if(fourcc(0,4)!=='RIFF'||fourcc(8,12)!=='WEBP')return {...a,ok:false,reason:'not a WebP file'};
      const blob=new Blob([bytes],{type:'image/webp'});
      const url=URL.createObjectURL(blob);
      try{
       const image=new Image();
       image.src=url;
       await image.decode();
       if(!image.naturalWidth||!image.naturalHeight)return {...a,ok:false,reason:'zero dimensions'};
       return {...a,ok:true,width:image.naturalWidth,height:image.naturalHeight,bytes:bytes.byteLength};
      }finally{URL.revokeObjectURL(url)}
     }catch(e){return {...a,ok:false,reason:String(e)}}
    }));
    results.push(...status.filter(x=>x.ok));
    failures.push(...status.filter(x=>!x.ok));
   }
   return {total:assets.length,passed:results.length,failed:failures.length,failures,smallest:results.length?Math.min(...results.map(x=>x.bytes)):null};
  });
  fs.mkdirSync('qa-screenshots',{recursive:true});
  fs.writeFileSync('qa-screenshots/artwork-report.json',JSON.stringify(audit,null,2));
  console.log('ARTWORK AUDIT',JSON.stringify(audit));
  assert(audit.total>0,'roster must not be empty');
  assert.equal(audit.failed,0,'every superstar portrait must decode as WebP');
  assert.equal(audit.passed,audit.total,'all roster portraits must be valid');
  console.log('PASS all '+audit.total+' superstar WebP portraits fetched, verified and decoded');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
