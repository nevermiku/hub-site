(()=>{'use strict';
const $=s=>document.querySelector(s);const app=$('#app');if(!app)return;
const steps=[
 ['欢迎来到衍尾之宙','这是一款以证据链为核心的长篇悬疑推理游戏。你不是猜凶手，而是要让每一条结论都能被材料支持。'],
 ['从卷宗开始','首页展示章节与案件进度。点击章节卡片进入对应卷宗；建议从第一章开始，案件会逐步开放，避免跳过关键线索。'],
 ['先读现场，再看证据','进入案件后，先读现场叙述，再逐条检查左侧证据。留意时间、地点、权限、物理痕迹之间是否互相吻合。'],
 ['建立推理，而不是凭感觉','阅读问题和选项时，优先排除无法解释全部证据的说法。正确答案需要同时解释多条线索；单条证词不能直接等同于事实。'],
 ['提示与证据墙','卡住时可以使用提示，但提示次数有限。完成卷宗后，关键线索会进入证据墙，后续案件会逐步补全整条因果链。'],
 ['开始调查','教程结束。你的调查进度会保存在当前设备浏览器中；不要清理网站数据，否则本机存档可能丢失。']
];
const css=document.createElement('style');css.textContent=`
#nexusTutorialBtn{margin-left:6px;border:1px solid #80e5ff55;border-radius:11px;padding:10px 12px;background:#142a3c;color:#bfefff;font-size:12px}
#nexusTutorial{position:fixed;inset:0;z-index:10000;display:none;align-items:center;justify-content:center;padding:20px;background:#030914d9;backdrop-filter:blur(8px)}
#nexusTutorial.on{display:flex}.nt-card{width:min(520px,94vw);padding:24px;border:1px solid #80e5ff66;border-radius:20px;background:linear-gradient(145deg,#182b42,#0b1422);box-shadow:0 24px 90px #000b}
.nt-k{font-size:10px;letter-spacing:3px;color:#80e5ff}.nt-title{font-size:23px;font-weight:900;margin:12px 0}.nt-text{font-size:13px;line-height:2;color:#c6d5e6;min-height:90px}.nt-progress{height:4px;background:#ffffff16;border-radius:9px;margin:18px 0}.nt-progress i{display:block;height:100%;background:linear-gradient(90deg,#80e5ff,#f3c879);transition:width .2s}.nt-actions{display:flex;justify-content:space-between;gap:8px}.nt-actions button{border:1px solid #ffffff22;border-radius:10px;padding:10px 15px;background:#1a3048;color:#eaf6ff}.nt-actions .nt-next{background:linear-gradient(120deg,#80e5ff,#b7a6ff);color:#081525;font-weight:800}
@media(max-width:480px){.nt-card{padding:20px}.nt-title{font-size:20px}.nt-text{font-size:12px}}
`;document.head.appendChild(css);
const header=$('header .header-actions');if(header){const b=document.createElement('button');b.id='nexusTutorialBtn';b.textContent='新手教程';header.prepend(b);b.onclick=()=>show(0);}
const modal=document.createElement('div');modal.id='nexusTutorial';modal.innerHTML='<section class="nt-card" role="dialog" aria-modal="true" aria-labelledby="ntTitle"><div class="nt-k">NEXUS FIELD MANUAL · <span id="ntCount">01 / 06</span></div><div class="nt-title" id="ntTitle"></div><div class="nt-text" id="ntText"></div><div class="nt-progress"><i id="ntBar"></i></div><div class="nt-actions"><button id="ntSkip">跳过教程</button><div><button id="ntPrev">上一步</button> <button class="nt-next" id="ntNext">下一步</button></div></div></section>';document.body.append(modal);
let index=0;function render(){const s=steps[index];$('#ntCount').textContent=String(index+1).padStart(2,'0')+' / '+String(steps.length).padStart(2,'0');$('#ntTitle').textContent=s[0];$('#ntText').textContent=s[1];$('#ntBar').style.width=((index+1)/steps.length*100)+'%';$('#ntPrev').disabled=index===0;$('#ntNext').textContent=index===steps.length-1?'开始调查':'下一步';}
function close(){modal.classList.remove('on');try{localStorage.setItem('nexus-tutorial-v1','done')}catch(e){}}
function show(i){index=Math.max(0,Math.min(steps.length-1,i));render();modal.classList.add('on');}
$('#ntPrev').onclick=()=>{if(index>0){index--;render();}};$('#ntNext').onclick=()=>{if(index<steps.length-1){index++;render();}else close();};$('#ntSkip').onclick=close;
let seen=false;try{seen=localStorage.getItem('nexus-tutorial-v1')==='done'}catch(e){}if(!seen)show(0);
window.__NEXUS_TUTORIAL__={show,close};
})();