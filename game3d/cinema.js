(()=>{'use strict';
const $=s=>document.querySelector(s);
const css=`
#bossIntro:not(.hidden){filter:drop-shadow(0 0 26px #e7b96a55);animation:cinemaIn .85s cubic-bezier(.16,.84,.24,1) both}
#bossIntro:not(.hidden) .bi1{letter-spacing:6px;text-shadow:0 0 20px #f3b95a;animation:cinemaText .65s .12s both}
#bossIntro:not(.hidden) .bi2{font-size:clamp(34px,7vw,64px);letter-spacing:5px;text-shadow:0 0 12px #fff,0 0 34px #ff9d48,0 0 72px #ff4d2e;animation:bossName .9s .18s cubic-bezier(.16,.84,.24,1) both}
#bossIntro:not(.hidden) .bi3{letter-spacing:3px;animation:cinemaText .7s .35s both}
#bossIntro:not(.hidden):after{content:"";position:absolute;left:50%;top:50%;width:min(90vw,620px);height:2px;transform:translate(-50%,-50%);background:linear-gradient(90deg,transparent,#ffd78b,transparent);box-shadow:0 0 22px #ff9e4a;animation:bossSlash .8s .1s both;pointer-events:none}
#cinema-flare{position:fixed;inset:0;z-index:9980;pointer-events:none;opacity:0;background:radial-gradient(ellipse at 50% 45%,#ffbd6030,transparent 55%),linear-gradient(90deg,transparent,#fff4 50%,transparent)}
#cinema-flare.on{animation:cinemaFlash .65s ease-out}
#cinema-audio{position:fixed;right:12px;bottom:calc(94px + env(safe-area-inset-bottom));z-index:10018;border:1px solid #e6c47a77;border-radius:999px;background:#101c2ce8;color:#ffe8b0;padding:8px 11px;font:11px sans-serif}
@keyframes cinemaIn{0%{opacity:0;transform:translateY(30px) scale(.94);filter:blur(8px)}55%{opacity:1;transform:translateY(-3px) scale(1.02);filter:blur(0)}100%{transform:none}}
@keyframes cinemaText{from{opacity:0;letter-spacing:12px}to{opacity:1;letter-spacing:3px}}
@keyframes bossName{0%{opacity:0;transform:scale(1.22);filter:blur(12px)}55%{opacity:1;transform:scale(.97);filter:blur(0)}100%{transform:scale(1)}}
@keyframes bossSlash{0%{opacity:0;width:0}35%{opacity:1;width:min(90vw,620px)}100%{opacity:0;width:min(90vw,620px)}}
@keyframes cinemaFlash{0%{opacity:0}18%{opacity:1}100%{opacity:0}}
@media(prefers-reduced-motion:reduce){#bossIntro:not(.hidden),#bossIntro:not(.hidden) *{animation-duration:.01ms!important}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const flare=document.createElement('div');flare.id='cinema-flare';document.body.appendChild(flare);
const button=document.createElement('button');button.id='cinema-audio';button.textContent='♫ 电影配乐：关';document.body.appendChild(button);
let ctx=null,master=null,enabled=false,timer=null,step=0,lastHit=0;
function audio(){if(ctx)return;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;ctx=new AC();master=ctx.createGain();master.gain.value=.14;master.connect(ctx.destination);}
function tone(freq,dur,type='sine',vol=.12,when){if(!ctx||!master)return;const t=when||ctx.currentTime,o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.0002,vol),t+.035);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.04);}
const scale=[0,3,5,7,10,12,15,17],root=55;
function tick(){if(!enabled||!ctx)return;const t=ctx.currentTime,notes=[0,3,5,7,10,7,5,3],n=notes[step%notes.length];tone(root*Math.pow(2,(n+24)/12),1.8,'triangle',.045,t);if(step%4===0){tone(root/2,.8,'sine',.08,t);tone(root*Math.pow(2,(n+36)/12),.42,'sine',.025,t+.18);}step++;timer=setTimeout(tick,720);}
function sting(){audio();if(!ctx)return;ctx.resume();const t=ctx.currentTime;[55,82.4,110,164.8].forEach((f,i)=>tone(f,2.2,'sawtooth',.025,t+i*.075));tone(880,.24,'sine',.08,t+.35);flare.classList.remove('on');void flare.offsetWidth;flare.classList.add('on');}
function hit(){if(!enabled||!ctx)return;const now=performance.now();if(now-lastHit<110)return;lastHit=now;const t=ctx.currentTime;tone(95,.12,'sawtooth',.12,t);tone(620,.08,'triangle',.06,t+.015);}
button.onclick=()=>{enabled=!enabled;button.textContent='♫ 电影配乐：'+(enabled?'开':'关');audio();if(ctx)ctx.resume();clearTimeout(timer);if(enabled){tick();}else if(master)master.gain.setTargetAtTime(0,ctx.currentTime,.08);};
const boss=$('#bossIntro');if(boss)new MutationObserver(()=>{if(!boss.classList.contains('hidden')){sting();if(enabled&&master)master.gain.setTargetAtTime(.2,ctx.currentTime,.15);}}).observe(boss,{attributes:true,attributeFilter:['class']});
const hitFlash=$('#hitFlash');if(hitFlash)new MutationObserver(()=>{if(hitFlash.classList.contains('on'))hit();}).observe(hitFlash,{attributes:true,attributeFilter:['class']});
document.addEventListener('pointerdown',()=>{if(ctx&&ctx.state==='suspended')ctx.resume();},{once:false,passive:true});
window.__AINCRAD_CINEMA__={version:'1.0.0',get enabled(){return enabled;}};
})();