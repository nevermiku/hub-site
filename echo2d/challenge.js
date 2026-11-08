(()=>{'use strict';
const API=window.__ECHO2D__;if(!API)return;
const style=document.createElement('style');style.textContent=`
#echoTrials{display:flex;gap:7px;justify-content:center;flex-wrap:wrap;margin:10px auto 2px}
.echo-trial{border:1px solid #8cd8ff55;border-radius:12px;padding:8px 12px;background:linear-gradient(135deg,#142c45,#201c3d);color:#dff5ff;font-size:11px}
.echo-trial b{color:#ffd98a}
#echoTrialHud{position:fixed;left:50%;top:58px;transform:translateX(-50%);z-index:25;display:none;padding:8px 14px;border:1px solid #8cd8ff66;border-radius:12px;background:#081426eF;color:#dff5ff;font:12px/1.5 system-ui;box-shadow:0 8px 30px #0008;white-space:nowrap}
#echoTrialHud.on{display:block}#echoTrialHud strong{color:#ffd98a}
`;document.head.appendChild(style);
const title=document.querySelector('#title .box');if(!title)return;
const row=document.createElement('div');row.id='echoTrials';row.innerHTML='<button class="echo-trial" data-mode="daily">✦ <b>每日回响</b> · 随机深层</button><button class="echo-trial" data-mode="blind">◈ <b>盲听试炼</b> · 禁用提示</button><button class="echo-trial" data-mode="marathon">∞ <b>深渊马拉松</b> · 连续挑战</button>';const start=title.querySelector('#btnStart')?.parentElement;if(start)start.after(row);else title.append(row);
const hud=document.createElement('div');hud.id='echoTrialHud';document.body.append(hud);
let active=null,startAt=0,raf=0;
const day=Math.floor(Date.now()/86400000);
function stop(){active=null;cancelAnimationFrame(raf);hud.classList.remove('on');}
function frame(){if(!active)return;const elapsed=(performance.now()-startAt)/1000;const left=Math.max(0,180-elapsed);hud.innerHTML='<strong>'+active.label+'</strong>　'+(active.timed?'剩余 '+Math.floor(left/60)+':'+String(Math.floor(left%60)).padStart(2,'0'):'已用时 '+Math.floor(elapsed)+' 秒')+'　·　'+(API.S.won?'本层完成，继续冲刺':'完成当前回响后计时结算');if(API.S.won&&!active.done){active.done=true;const key='echo-trial-best-'+active.id;const old=Number(localStorage.getItem(key)||0);const score=Math.floor(elapsed);if(!old||score<old)localStorage.setItem(key,String(score));hud.innerHTML='<strong>试炼完成！</strong> 用时 '+score+' 秒 · 最佳 '+Math.min(old||score,score)+' 秒';setTimeout(stop,3600);return;}if(active.timed&&left<=0){hud.innerHTML='<strong>本轮计时结束</strong>　仍可继续完成关卡，成绩不计入最快纪录';active.timed=false;}raf=requestAnimationFrame(frame);}
row.addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(!b)return;const mode=b.dataset.mode;let depth=1,label='',timed=false;
 if(mode==='daily'){depth=2+(day%18);label='每日回响 · 第 '+depth+' 层';timed=true;}
 if(mode==='blind'){depth=9+(day%12);label='盲听试炼 · 禁用提示';}
 if(mode==='marathon'){depth=Math.max(1,API.S.endless.best||1);label='深渊马拉松 · 连续挑战';}
 stop();API.startEndless(depth);if(mode==='blind'){API.S.hintsLeft=0;const hint=document.getElementById('btnHint');if(hint)hint.disabled=true;}
 active={id:mode,label,timed,done:false};startAt=performance.now();hud.classList.add('on');frame();
});
window.__ECHO_TRIALS__={stop};
})();