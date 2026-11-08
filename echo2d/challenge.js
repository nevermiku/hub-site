(()=>{'use strict';
const API=window.__ECHO2D__;if(!API||!API.S)return;
const style=document.createElement('style');style.textContent=`
#echoTrials{display:flex;gap:7px;justify-content:center;flex-wrap:wrap;margin:10px auto 2px;max-width:620px}
.echo-trial{border:1px solid #8cd8ff55;border-radius:12px;padding:8px 11px;background:linear-gradient(135deg,#142c45,#201c3d);color:#dff5ff;font-size:11px}
.echo-trial b{color:#ffd98a}.echo-trial:active{transform:scale(.96)}
#echoTrialHud{position:fixed;left:50%;top:58px;transform:translateX(-50%);z-index:25;display:none;padding:8px 14px;border:1px solid #8cd8ff66;border-radius:12px;background:#081426ef;color:#dff5ff;font:12px/1.5 system-ui;box-shadow:0 8px 30px #0008;white-space:nowrap;max-width:94vw}
#echoTrialHud.on{display:block}#echoTrialHud strong{color:#ffd98a}
`;document.head.appendChild(style);
const title=document.querySelector('#title .box');if(!title)return;
const row=document.createElement('div');row.id='echoTrials';row.innerHTML='<button class="echo-trial" data-mode="daily">✦ <b>每日回响</b> · 今日随机</button><button class="echo-trial" data-mode="blind">◈ <b>盲听试炼</b> · 禁用提示</button><button class="echo-trial" data-mode="steps">⌁ <b>步数封印</b> · 精简操作</button><button class="echo-trial" data-mode="marathon">∞ <b>深渊马拉松</b> · 连续挑战</button>';
const start=title.querySelector('#btnStart')?.parentElement;if(start)start.after(row);else title.append(row);
const hud=document.createElement('div');hud.id='echoTrialHud';document.body.append(hud);
let active=null,startAt=0,raf=0,originalHints=3,trialBest={};
try{trialBest=JSON.parse(localStorage.getItem('echo-trial-records-v2')||'{}')}catch{}
const day=Math.floor(Date.now()/86400000);
function stop(){active=null;cancelAnimationFrame(raf);hud.classList.remove('on');const hint=document.getElementById('btnHint');if(hint)hint.disabled=false;}
function finish(){if(!active||active.done)return;active.done=true;const elapsed=Math.floor((performance.now()-startAt)/1000),moves=API.S.moves||0;const old=trialBest[active.id];const score=active.mode==='steps'?moves:elapsed;const better=old==null||(active.mode==='steps'?score<old:score<old);if(better){trialBest[active.id]=score;try{localStorage.setItem('echo-trial-records-v2',JSON.stringify(trialBest))}catch{}}hud.innerHTML='<strong>试炼完成！</strong> '+elapsed+' 秒 · '+moves+' 步 · 最佳 '+(trialBest[active.id])+(active.mode==='steps'?' 步':' 秒');setTimeout(stop,4500);}
function frame(){if(!active)return;const elapsed=(performance.now()-startAt)/1000,left=Math.max(0,180-elapsed);const moves=API.S.moves||0;
 if(active.mode==='steps'&&moves>active.limit&&!active.failed){active.failed=true;hud.innerHTML='<strong>步数封印已破</strong> · 上限 '+active.limit+' 步，点击重置后可再试';}
 else if(API.S.won)finish();
 else hud.innerHTML='<strong>'+active.label+'</strong>　'+(active.mode==='steps'?'步数 '+moves+'/'+active.limit:'剩余 '+Math.floor(left/60)+':'+String(Math.floor(left%60)).padStart(2,'0'))+'　·　'+(active.mode==='blind'?'提示已封印':'完成当前关卡结算');
 if(active&&active.mode!=='steps'&&left<=0&&!active.failed){active.failed=true;hud.innerHTML='<strong>计时结束</strong>　仍可继续完成关卡，但不记录成绩';}
 raf=requestAnimationFrame(frame);}
row.addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(!b)return;const mode=b.dataset.mode;let depth=1,label='',id=mode,limit=0;
 if(mode==='daily'){depth=2+(day%24);label='每日回响 · 第 '+depth+' 层';}
 if(mode==='blind'){depth=9+(day%18);label='盲听试炼 · 提示封印';}
 if(mode==='steps'){depth=4+(day%16);label='步数封印 · 精简解法';}
 if(mode==='marathon'){depth=Math.max(1,API.S.endless.best||1);label='深渊马拉松 · 连续挑战';}
 stop();API.startEndless(depth);API.S.hintsLeft=mode==='blind'?0:originalHints;
 const hint=document.getElementById('btnHint');if(hint)hint.disabled=mode==='blind';
 limit=mode==='steps'?Math.max(3,Math.ceil(API.optimalMoves(API.S.level)*1.55)):0;
 active={id,mode,label,limit,failed:false,done:false};startAt=performance.now();hud.classList.add('on');frame();
});
window.__ECHO_TRIALS__={stop,get records(){return {...trialBest}}};
})();