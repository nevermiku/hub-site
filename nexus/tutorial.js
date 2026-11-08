(()=>{'use strict';
const $=s=>document.querySelector(s);if(!$('#app'))return;
const steps=[
 {title:'欢迎来到衍尾之宙',text:'这是一款以证据链为核心的长篇悬疑推理游戏。你的任务不是凭直觉猜测，而是用材料证明一种解释。'},
 {title:'认识调查首页',text:'首页展示人物档案、章节卷宗和调查进度。章节按顺序开放，前一份卷宗完成后，下一份才会解锁。'},
 {title:'阅读现场信息',text:'进入卷宗后，先读现场描述与时间背景。注意现场是否存在无法同时成立的细节，例如设备记录与证人叙述的时间差。'},
 {title:'逐条检查物证',text:'证据列表中的每一条都可能有用。把时间、地点、权限、物理痕迹放在一起比较，不要只抓住某一句证词。'},
 {title:'推理练习：哪个时间可信？',text:'第一份卷宗中，机械钟停在 02:08，而港区电子授时记录为 02:17。维修单证明机械钟曾被人为拨慢。请选择可靠的时间基准。',quiz:{options:['机械钟 02:08','港区电子授时 02:17','两者取平均值'],answer:1,explain:'正确。电子授时是外部标准基准，机械钟被人为拨慢。先确认时间基准，再判断不在场证明。'}},
 {title:'提交推理与使用提示',text:'选择最能解释全部材料的方案后提交。答错不会消耗提示；提示会指出两条值得交叉核对的证据，但使用后会影响本案的无提示记录。'},
 {title:'证据墙与长期进度',text:'结案后，关键关联会写入证据墙。后续卷宗会引用此前线索。调查记录保存在当前浏览器本地，清除网站数据可能导致存档丢失。'},
 {title:'开始调查',text:'教程结束。建议从第一卷开始，逐步还原这起跨越十二年的失踪案。'}
];
const css=document.createElement('style');css.textContent=`
#nexusTutorialBtn{margin-left:6px;border:1px solid #80e5ff55;border-radius:11px;padding:10px 12px;background:#142a3c;color:#bfefff;font-size:12px}
#nexusTutorial{position:fixed;inset:0;z-index:10000;display:none;align-items:center;justify-content:center;padding:20px;background:#030914e8;backdrop-filter:blur(8px)}
#nexusTutorial.on{display:flex}.nt-card{width:min(540px,94vw);padding:24px;border:1px solid #80e5ff66;border-radius:20px;background:linear-gradient(145deg,#182b42,#0b1422);box-shadow:0 24px 90px #000b}
.nt-k{font-size:10px;letter-spacing:3px;color:#80e5ff}.nt-title{font-size:23px;font-weight:900;margin:12px 0}.nt-text{font-size:13px;line-height:2;color:#c6d5e6;min-height:75px}.nt-progress{height:4px;background:#ffffff16;border-radius:9px;margin:18px 0}.nt-progress i{display:block;height:100%;background:linear-gradient(90deg,#80e5ff,#f3c879);transition:width .2s}.nt-actions{display:flex;justify-content:space-between;gap:8px}.nt-actions button{border:1px solid #ffffff22;border-radius:10px;padding:10px 15px;background:#1a3048;color:#eaf6ff}.nt-actions .nt-next{background:linear-gradient(120deg,#80e5ff,#b7a6ff);color:#081525;font-weight:800}.nt-quiz{display:grid;gap:8px;margin:14px 0}.nt-choice{padding:11px;border:1px solid #80e5ff44;border-radius:10px;background:#14283d;color:#e8f7ff;text-align:left}.nt-choice.correct{border-color:#7fe0a0;background:#173d37}.nt-choice.wrong{border-color:#ff8b8b;background:#40232d}.nt-result{font-size:12px;line-height:1.7;color:#aee8c6;min-height:30px}
@media(max-width:480px){.nt-card{padding:20px}.nt-title{font-size:20px}.nt-text{font-size:12px}}
`;document.head.appendChild(css);
const header=$('header .header-actions');if(header){const b=document.createElement('button');b.id='nexusTutorialBtn';b.textContent='新手教程';header.prepend(b);b.onclick=()=>show(0);}
const modal=document.createElement('div');modal.id='nexusTutorial';modal.innerHTML='<section class="nt-card" role="dialog" aria-modal="true" aria-labelledby="ntTitle"><div class="nt-k">NEXUS FIELD MANUAL · <span id="ntCount">01 / 08</span></div><div class="nt-title" id="ntTitle"></div><div class="nt-text" id="ntText"></div><div id="ntQuiz"></div><div class="nt-progress"><i id="ntBar"></i></div><div class="nt-actions"><button id="ntSkip">跳过教程</button><div><button id="ntPrev">上一步</button> <button class="nt-next" id="ntNext">下一步</button></div></div></section>';document.body.append(modal);
let index=0,passed={};function render(){const s=steps[index];$('#ntCount').textContent=String(index+1).padStart(2,'0')+' / '+String(steps.length).padStart(2,'0');$('#ntTitle').textContent=s.title;$('#ntText').textContent=s.text;$('#ntBar').style.width=((index+1)/steps.length*100)+'%';$('#ntPrev').disabled=index===0;$('#ntNext').textContent=index===steps.length-1?'开始调查':'下一步';const q=$('#ntQuiz');q.innerHTML='';if(s.quiz){s.quiz.options.forEach((v,i)=>{const b=document.createElement('button');b.className='nt-choice';b.textContent=v;b.onclick=()=>{q.querySelectorAll('button').forEach(x=>x.disabled=true);if(i===s.quiz.answer){b.classList.add('correct');passed[index]=true;$('#ntNext').disabled=false;}else{b.classList.add('wrong');q.querySelectorAll('button')[s.quiz.answer].classList.add('correct');}const r=document.createElement('div');r.className='nt-result';r.textContent=i===s.quiz.answer?s.quiz.explain:'这项证据不能支持该时间。再对照维修单和授时来源。';q.append(r);};q.append(b);});$('#ntNext').disabled=!passed[index];}else $('#ntNext').disabled=false;}
function close(){modal.classList.remove('on');try{localStorage.setItem('nexus-tutorial-v3','done')}catch(e){}}
function show(i){index=Math.max(0,Math.min(steps.length-1,i));render();modal.classList.add('on');}
$('#ntPrev').onclick=()=>{if(index>0){index--;render();}};$('#ntNext').onclick=()=>{if(index<steps.length-1){index++;render();}else close();};$('#ntSkip').onclick=close;
let seen=false;try{seen=localStorage.getItem('nexus-tutorial-v3')==='done'}catch(e){}if(!seen)show(0);
window.__NEXUS_TUTORIAL__={show,close};
})();