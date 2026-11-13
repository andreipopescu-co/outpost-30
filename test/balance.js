// Headless balance check: runs scripted strategies against many mission codes.
const fs=require('fs'),path=require('path');
const html=fs.readFileSync(path.join(__dirname,'..','src','game.html'),'utf8');
const js=html.match(/<script>([\s\S]*)<\/script>/)[1];
const el={innerHTML:'',dataset:{},addEventListener(){}};
global.window={scrollTo(){}};global.document={getElementById:()=>el};global.localStorage={getItem:()=>null,setItem(){}};
eval(js);const G=window.__o30;
const strategies={
  careless:(S)=>{S.alloc={ls:2,gh:0,sh:0,lab:3};return 1},           // science first, never shelters
  survivor:(S)=>{S.alloc={ls:4,gh:2,sh:3,lab:0};return 0},            // never does science
  planner:(S)=>{                                                      // sensible play
    let low=false;for(let i=1;i<=2;i++)if(S.solar[S.day+i]<0.6)low=true;
    const dark=S.solar[S.day]<0.6;
    S.task=S.leak?'leak':S.clog&&S.spares?'clog':S.dusty?'dusty':'none';
    S.alloc={ls:4,gh:dark?1:2,sh:dark?0:(S.shield<100?(S.site==='moon'?3:1):0),lab:dark||low&&S.batt<20?0:3};
    return 0}
};
for(const site of ['moon','mars'])for(const cadet of [true,false])for(const [name,fn] of Object.entries(strategies)){
  let wins=0,sci=0,why={},days=0;const N=200;
  for(let seed=1;seed<=N;seed++){
    const S=G.newGame(site,cadet,seed);S.pending=S.ev[1]||null;
    while(!S.over){ if(S.pending){const p=S.pending;G.chooseEvent(S,p==='spe'||p==='mc'?fn(S):0)} fn(S);G.clampAlloc(S);G.runDay(S)}
    if(S.over.win){wins++;sci+=S.science}else{why[S.over.why]=(why[S.over.why]||0)+1;days+=S.over.day}
  }
  console.log(site.padEnd(5),cadet?'cadet    ':'commander',name.padEnd(9),'win',String(wins).padStart(3)+'/'+N,'avgSci',wins?Math.round(sci/wins):'-','fail',JSON.stringify(why),wins<N?'avgFailDay '+Math.round(days/(N-wins)):'');
}
