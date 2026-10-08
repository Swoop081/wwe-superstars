const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const reports=[];
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try{
  fs.mkdirSync('qa-screenshots',{recursive:true});
  const screens=[{label:'iphone',width:390,height:844},{label:'android',width:360,height:800}];
  for(const screen of screens){
   const page=await browser.newPage({viewport:{width:screen.width,height:screen.height},isMobile:true,hasTouch:true,deviceScaleFactor:2});
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:8765/',{waitUntil:'domcontentloaded'});
   await page.evaluate(()=>{save={roster:Object.fromEntries(BASE.slice(0,40).map(w=>[w.name,1])),wins:0,losses:0,records:{},coins:10,coinMatches:0,shopPurchases:{date:dailyKey(),bought:[]}};persist();home()});
   const views=[
    ['home',()=>page.evaluate(()=>home())],
    ['collection',()=>page.evaluate(()=>collection())],
    ['shop',()=>page.evaluate(()=>shop())],
    ['exhibition',()=>page.evaluate(()=>selectFighter())],
    ['battle',()=>page.evaluate(()=>begin('Roman Reigns'))],
    ['live',()=>page.evaluate(()=>wweLive())]
   ];
   for(const [name,open] of views){
    await open();await page.waitForTimeout(120);
    await page.screenshot({path:'qa-screenshots/'+screen.label+'-'+name+'.png',fullPage:true,animations:'disabled'});
    const audit=await page.evaluate(()=>{
     const screen=document.querySelector('.screen'),r=screen?.getBoundingClientRect();
     const visible=[...document.querySelectorAll('.screen img')].filter(el=>{const b=el.getBoundingClientRect();return b.width>0&&b.height>0&&b.top<innerHeight&&b.bottom>0});
     const clippedText=[...document.querySelectorAll('.screen button,.screen .title,.screen .tile-copy,.screen .card-name,.screen .nameplate')].filter(el=>{const b=el.getBoundingClientRect(),s=getComputedStyle(el);return b.width>0&&b.height>0&&s.overflowX!=='visible'&&el.scrollWidth>el.clientWidth+3}).slice(0,20).map(el=>({tag:el.tagName,cls:el.className,text:(el.textContent||'').trim().slice(0,90),client:el.clientWidth,scroll:el.scrollWidth}));
     return {hasScreen:!!screen,width:r?.width,viewport:innerWidth,documentWidth:document.documentElement.scrollWidth,brokenImages:visible.filter(el=>el.complete&&el.naturalWidth===0).map(el=>el.getAttribute('src')).slice(0,12),buttons:[...document.querySelectorAll('.screen button')].filter(el=>{const b=el.getBoundingClientRect();return b.width>0&&b.height>0}).length,clippedText};
    });
    assert(audit.hasScreen,screen.label+' '+name+' screen missing');
    assert(Number.isFinite(audit.width)&&audit.width>0,screen.label+' '+name+' invalid screen width');
    assert(audit.buttons>0,screen.label+' '+name+' has no visible buttons');
    reports.push({device:screen.label,screen:name,...audit});
    assert(audit.documentWidth<=audit.viewport+3,screen.label+' '+name+' horizontal document overflow: '+JSON.stringify(audit));
    console.log('VISUAL',screen.label,name,JSON.stringify(audit));
   }
   assert.deepEqual(errors,[],screen.label+' page errors');
   await page.close();
  }
  fs.writeFileSync('qa-screenshots/layout-report.json',JSON.stringify(reports,null,2));
  console.log('PASS mobile screenshot capture and structural checks');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
