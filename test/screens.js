const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const dir=process.argv[2];
const p=await b.newPage({viewport:{width:400,height:860},deviceScaleFactor:1});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+dir+'/index.html');await p.waitForTimeout(800);
await p.screenshot({path:dir+'/shots/1-setup.png',fullPage:true});
await p.click('[data-site="mars"]');await p.click('#go');
for(let i=0;i<9;i++){const o=await p.$('[data-opt="0"]');if(o)await o.click();await p.click('#run');}
const o=await p.$('[data-opt="0"]');
await p.screenshot({path:dir+'/shots/2-game.png',fullPage:true});
if(o)await o.click();await p.screenshot({path:dir+'/shots/3-plan.png',fullPage:true});
for(let i=0;i<40;i++){const o=await p.$('[data-opt="0"]');if(o)await o.click();const r=await p.$('#run');if(!r)break;await r.click();}
await p.screenshot({path:dir+'/shots/4-debrief.png',fullPage:true});
const ow=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
console.log('errors',errs,'overflow',ow);await b.close()})();
