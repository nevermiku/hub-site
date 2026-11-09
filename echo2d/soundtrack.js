(()=>{'use strict';
const $=s=>document.querySelector(s);
const css=document.createElement('style');css.textContent=`
#echo-soundtrack{position:fixed;left:max(10px,env(safe-area-inset-left));bottom:calc(12px + env(safe-area-inset-bottom));z-index:10020}
#echo-track-toggle{border:1px solid #d5a9ff99;border-radius:999px;background:#17162af2;color:#f5eaff;padding:10px 14px;font-weight:800;box-shadow:0 8px 24px #0008}
#echo-track-panel{display:none;position:absolute;left:0;bottom:48px;width:min(310px,88vw);padding:14px;border:1px solid #ffffff2b;border-radius:16px;background:#11172af7;color:#f3efff;box-shadow:0 14px 44px #000b}
#echo-track-panel.open{display:block}#echo-track-panel p{font-size:11px;line-height:1.7;color:#b8bbd4}
#echo-track-panel select,#echo-track-panel input{width:100%;margin:8px 0;padding:9px;border-radius:9px;background:#202742;color:white;border:1px solid #ffffff28}
#echo-track-panel button{border:0;border-radius:9px;padding:10px 12px;background:linear-gradient(120deg,#8f68db,#d36eb3);color:white;font-weight:800}
#echo-music-meter{height:28px;display:flex;align-items:end;gap:3px;margin:10px 0}
#echo-music-meter i{display:block;flex:1;height:5px;border-radius:4px;background:linear-gradient(0deg,#7a70ee,#ff8ec9);transform-origin:bottom}
#echo-track-panel .small{font-size:9px;color:#8991b2}
`;document.head.append(css);
const root=document.createElement('div');root.id='echo-soundtrack';root.innerHTML='<button id="echo-track-toggle">♫ ECHO 原创音乐：关</button><div id="echo-track-panel"><b>回声 · ORIGINAL SOUNDTRACK</b><p>内置原创电子乐，不依赖外部播放器或手动导入。点开始后音乐会持续播放，并与关卡音效叠加。</p><select id="echo-track-select"><option value="0">星轨回响 · 电子流行 / 112 BPM</option><option value="1">雨夜钢琴 · 氛围叙事 / 92 BPM</option><option value="2">霓虹追逐 · Synthwave / 128 BPM</option><option value="3">深渊脉冲 · 高速电子 / 150 BPM</option></select><div id="echo-music-meter">'+Array.from({length:16},()=>'<i></i>').join('')+'</div><button id="echo-track-play">▶ 开始播放</button> <button id="echo-track-stop" style="background:#303750">■ 停止</button><input id="echo-track-volume" type="range" min="0" max="100" value="55"><div class="small">音量　·　首次点击后启动，手机浏览器限制自动播放时也可正常使用。</div></div>';document.body.append(root);
const panel=$('#echo-track-panel'),toggle=$('#echo-track-toggle'),select=$('#echo-track-select'),play=$('#echo-track-play'),stop=$('#echo-track-stop'),volume=$('#echo-track-volume'),bars=[...root.querySelectorAll('#echo-music-meter i')];
const tracks=[
 {bpm:112,root:55,scale:[0,2,3,7,9],prog:[0,3,5,4],lead:'triangle',bass:'sawtooth'},
 {bpm:92,root:50,scale:[0,2,5,7,9],prog:[0,4,5,3],lead:'sine',bass:'triangle'},
 {bpm:128,root:52,scale:[0,2,4,7,9],prog:[0,5,3,4],lead:'sawtooth',bass:'square'},
 {bpm:150,root:48,scale:[0,3,5,6,10],prog:[0,3,6,5],lead:'square',bass:'sawtooth'}
];
let ctx=null,master=null,filter=null,timer=0,step=0,active=false,track=0,visual=0;
function midi(n){return 440*Math.pow(2,(n-69)/12)}
function init(){if(!ctx){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;ctx=new AC();master=ctx.createGain();filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=8200;master.gain.value=Number(volume.value)/100*.32;filter.connect(master);master.connect(ctx.destination)}if(ctx.state==='suspended')ctx.resume();return true}
function note(freq,at,dur,wave='sine',gain=.06,end=null){const o=ctx.createOscillator(),g=ctx.createGain();o.type=wave;o.frequency.setValueAtTime(freq,at);if(end)o.frequency.exponentialRampToValueAtTime(end,at+dur);g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(Math.max(.0002,gain),at+.012);g.gain.exponentialRampToValueAtTime(.0001,at+dur);o.connect(g);g.connect(filter);o.start(at);o.stop(at+dur+.03)}
function kick(at){note(130,at,.17,'sine',.14,42)}
function hat(at,gain=.018){const n=ctx.createBufferSource(),len=Math.floor(ctx.sampleRate*.07),b=ctx.createBuffer(1,len,ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<len;i++)d[i]=Math.random()*2-1;n.buffer=b;const f=ctx.createBiquadFilter(),g=ctx.createGain();f.type='highpass';f.frequency.value=6500;g.gain.setValueAtTime(gain,at);g.gain.exponentialRampToValueAtTime(.0001,at+.06);n.connect(f);f.connect(g);g.connect(filter);n.start(at);n.stop(at+.07)}
function schedule(){if(!active||!init())return;const t=tracks[track],beat=60/t.bpm,at=ctx.currentTime+.035,bar=Math.floor(step/16),pos=step%16,prog=t.prog[bar%4],root=t.root+t.scale[prog%t.scale.length];
 if(pos%4===0){note(midi(root-12),at,beat*1.8,t.bass,.075);note(midi(root),at,beat*1.7,'sine',.025);note(midi(root+7),at,beat*1.6,'sine',.022)}
 if(pos%2===0){kick(at);if(pos%4===2)hat(at,.012)}
 else hat(at,.021);
 const seq=[0,2,1,3,2,4,3,2,0,2,4,3,1,2,3,4],deg=t.scale[seq[pos]],oct=(pos===0||pos===8)?12:0;
 note(midi(t.root+deg+oct),at,beat*.72,t.lead,.045+(pos%4===0?.025:0));
 if(pos===6||pos===14)note(midi(t.root+t.scale[(prog+2)%t.scale.length]+12),at,beat*.45,'sine',.025);
 step++;visual=pos;requestAnimationFrame(meter);
}
function meter(){bars.forEach((b,i)=>b.style.height=(5+Math.abs(Math.sin(performance.now()/120+i*.82))*22)+'px')}
function start(){if(!init())return;stopLoop();active=true;step=0;const beat=60/tracks[track].bpm;timer=setInterval(schedule,beat*250);toggle.textContent='♫ ECHO 原创音乐：播放中';play.textContent='↻ 重新开始';}
function stopLoop(){if(timer)clearInterval(timer);timer=0;active=false;toggle.textContent='♫ ECHO 原创音乐：关';play.textContent='▶ 开始播放'}
toggle.onclick=()=>{panel.classList.toggle('open');if(active)toggle.textContent='♫ ECHO 原创音乐：播放中'};
play.onclick=start;stop.onclick=stopLoop;
select.onchange=()=>{track=Number(select.value)||0;if(active)start()};
volume.oninput=()=>{if(master)master.gain.setTargetAtTime(Number(volume.value)/100*.32,ctx.currentTime,.04)};
window.addEventListener('pointerdown',()=>{if(!active)setTimeout(()=>{if(!active)start()},140)},{once:true});
window.addEventListener('pagehide',stopLoop);
const win=$('#win'),replay=$('#btnReplaySong');if(replay)replay.addEventListener('click',start);
if(win)new MutationObserver(()=>{if(!win.classList.contains('hidden')){panel.classList.add('open');if(!active)start()}}).observe(win,{attributes:true,attributeFilter:['class']});
window.__ECHO_SOUNDTRACK__={version:'4.0.0',start,stop:stopLoop,get playing(){return active},get track(){return track}};
})();