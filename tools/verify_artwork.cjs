// Run with Playwright installed: node tools/verify_artwork.cjs
const {chromium}=require('playwright');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');

(async()=>{
  const server=http.createServer((req,res)=>{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file=path.join(root,pathname==='/'?'index.html':pathname);
    if(!file.startsWith(root+path.sep)||!fs.existsSync(file)){res.writeHead(404);return res.end()}
    const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.webp':'image/webp','.png':'image/png'};
    res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');
    res.setHeader('Cache-Control','public, max-age=3600');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  let browser;
  try{
    browser=await chromium.launch({headless:true});
    const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:3});
    const errors=[],broken=[];
    page.on('pageerror',e=>errors.push(e.message));
    page.on('response',r=>{if(r.status()>=400)broken.push(r.url())});
    await page.goto(`http://127.0.0.1:${server.address().port}/?v=0.7.72`);
    const result=await page.evaluate(async()=>{
      const decode=src=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve({ok:true,width:img.naturalWidth,height:img.naturalHeight});img.onerror=()=>resolve({ok:false});img.src=src});
      const refs=[];
      for(const w of BASE){refs.push({name:w.name,webp:await decode(artUrl(w.name)),png:await decode(artUrl(w.name,'png'))})}
      return {version:APP_VERSION,refs};
    });
    assert.equal(result.refs.length,80);
    assert.equal(new Set(result.refs.map(r=>r.name)).size,80);
    assert(result.refs.every(r=>r.webp.ok&&r.png.ok&&r.webp.width===720&&r.webp.height===1056));
    await page.evaluate(()=>{save={roster:Object.fromEntries(BASE.map(w=>[w.name,1])),wins:0,losses:0,records:{}};persist();collection()});
    assert.equal(await page.locator('.cardart[loading="lazy"]').count(),80);
    await page.evaluate(()=>openCard(BASE[0].name,1));
    await page.waitForFunction(()=>document.querySelector('.viewer-card img')?.naturalWidth>0);
    await page.evaluate(()=>{document.querySelector('.card-viewer').remove();careerStats()});
    assert.equal(await page.locator('.record-row img[data-art-name]').count(),80);
    await page.evaluate(()=>{selectFighter();begin(BASE[0].name)});
    await page.waitForFunction(()=>[...document.querySelectorAll('.versus img')].every(img=>img.naturalWidth>0));
    assert.equal(await page.locator('.versus .cardart').count(),2);
    await page.evaluate(()=>{road();dailyGauntlet();welcome()});
    await page.waitForFunction(()=>document.querySelector('.reveal-card img')?.naturalWidth>0);
    assert.deepEqual(errors,[]);
    assert.deepEqual(broken,[]);
    // A missing/corrupt WebP falls back once to PNG; a missing master produces a placeholder.
    await page.route('**/assets/superstars/roman-reigns.webp*',r=>r.abort());
    await page.evaluate(()=>{failedWebpArt.clear();shell(card(BASE[0]))});
    await page.waitForFunction(()=>document.querySelector('.cardart')?.src.includes('.png')&&document.querySelector('.cardart').naturalWidth===750);
    await page.evaluate(()=>shell(card({name:'Missing Artwork',str:1,stk:1,tec:1,agi:1,sub:1,cha:1,star:1,fnr:1})));
    await page.waitForSelector('.card .sil');
    assert.deepEqual(errors,[]);
    console.log('PASS: all 80 WebP + PNG references decode; mobile collection, viewer, career, battle, Road, Gauntlet and welcome screens; PNG fallback; missing-art placeholder; no unexpected broken paths or script errors.');
  }finally{if(browser)await browser.close();server.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
