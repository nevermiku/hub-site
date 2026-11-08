(()=>{'use strict';
const KEY='nexus-investigation-board-v1',SAVE='nexus-casebook-v2';
const $=s=>document.querySelector(s);
const events=[
['01:40','顾临川的指纹出现在观察窗内侧','卷宗 15 · 玻璃上的第二个人',14],
['01:54','许照刷卡离开档案馆','卷宗 05 · 两份值班表',4],
['02:08','机械钟显示的时间被人为拨慢','卷宗 02 · 慢九分钟的钟',1],
['02:17','港区授时记录保持准确，灯塔信号中断','卷宗 02 / 08 · 时间基准与证词顺序',1],
['02:20 后','沈知微经地下维修水道抵达观察窗夹层','卷宗 15 · 玻璃上的第二个人',14],
['02:26','许照重新进入档案馆','卷宗 05 · 两份值班表',4],
['02:30 后','录音链路出现统一九分钟延迟','卷宗 14 · 九分钟的回声',13],
['02:31','码头摄像头被远程转向海面','卷宗 12 · 被抹掉的回程',11],
['02:44','备用拖船从旧船坞维修水道靠岸','卷宗 12 · 被抹掉的回程',11]
];
const people=[
['许照','档案权限、采购封条、维护证书副本','组织与掩盖层'],
['闻秋','中继器固件、备用电源线路、被删除的第五人','技术设计层'],
['顾临川','灯塔机械、现场执行、观察窗指纹','现场执行层'],
['沈知微','档案原件、隐藏路线、匿名线索','证据留存与引导层'],
['周既白','救援船、空船返港、证词顺序','转运与证词层'],
['林澄','铜钟维修、工具痕迹、维修钥匙','现场条件与通道层']
];
let save={memo:'',hypothesis:'',checks:[]};try{save=Object.assign(save,JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(e){}
const css=`
#nexus-board-btn{margin-left:8px;border:1px solid #80e5ff66;border-radius:11px;padding:10px 13px;background:#17364a;color:#dff8ff;font-size:12px}
#nexus-board{position:fixed;inset:0;z-index:10050;display:none;overflow:auto;background:#07101df5;padding:18px 14px max(24px,env(safe-area-inset-bottom));backdrop-filter:blur(14px)}
#nexus-board.open{display:block}#nexus-board .wrap{width:min(900px,100%);margin:auto}
#nexus-board .top{display:flex;justify-content:space-between;align-items:center;gap:12px;position:sticky;top:0;background:#07101df2;padding:8px 0 14px;z-index:2}
#nexus-board h2{font-size:22px;letter-spacing:2px;margin:4px 0;color:#80e5ff}
#nexus-board p{color:#a9bad0;font-size:12px;line-height:1.8}
#nexus-board button{border:1px solid #ffffff24;border-radius:9px;background:#17283b;color:#edf4ff;padding:9px 12px}
#nexus-board .grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
#nexus-board .panel{border:1px solid #ffffff20;border-radius:15px;background:#101d2e;padding:15px;margin:12px 0}
#nexus-board .event{display:grid;grid-template-columns:66px 1fr;gap:10px;border-left:2px solid #80e5ff66;padding:8px 0 8px 12px;margin-left:7px}
#nexus-board .time{color:#f3c879;font-weight:800;font-size:12px}
#nexus-board .event b{font-size:12px}#nexus-board .event small{display:block;color:#91a5c0;margin-top:4px;font-size:10px}
#nexus-board .locked{opacity:.3}#nexus-board textarea{width:100%;min-height:110px;resize:vertical;border:1px solid #ffffff24;border-radius:10px;background:#091523;color:#edf4ff;padding:12px;line-height:1.7}
#nexus-board .suspect{padding:10px;border:1px solid #ffffff18;border-radius:10px;margin:7px 0;background:#0b1726}
#nexus-board .suspect b{color:#80e5ff;font-size:12px}#nexus-board .suspect small{display:block;color:#91a5c0;margin-top:5px;line-height:1.6}
#nexus-board .checks{display:grid;gap:8px}#nexus-board label{font-size:12px;color:#c6d4e4;line-height:1.6}
#nexus-board .muted{color:#91a5c0;font-size:10px}
@media(max-width:650px){#nexus-board .grid{grid-template-columns:1fr}#nexus-board h2{font-size:18px}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const panel=document.createElement('section');panel.id='nexus-board';panel.innerHTML='<div class="wrap"><div class="top"><div><div class="muted">NEXUS · INVESTIGATION WORKSPACE</div><h2>调查工作台</h2></div><div><button id="nb-export">导出调查备份</button> <button id="nb-import">导入备份</button> <button id="nb-close">关闭 ×</button></div></div><input id="nb-file" type="file" accept="application/json,.json" hidden><p>把分散在不同卷宗里的时间、权限和物证放在同一张桌面上。未解锁的内容不会提前显示，避免剧透。调查笔记和卷宗进度可单独备份到本机。</p><div class="grid"><article class="panel"><h3>关键时间线</h3><div id="nb-timeline"></div></article><article class="panel"><h3>人物关系与权限矩阵</h3><div id="nb-people"></div></article></div><article class="panel"><h3>你的核心假设</h3><p>当前最能解释全部线索的因果链是什么？写下假设，再随着新证据修订。</p><textarea id="nb-memo" placeholder="例如：谁控制了档案与授时系统？谁负责转运？哪些证据能证明二者存在协作？"></textarea><div class="muted" id="nb-count"></div><button id="nb-save" style="margin-top:10px">保存调查笔记</button></article><article class="panel"><h3>终局复核清单</h3><div class="checks" id="nb-checks"></div><p class="muted">这是玩家自己的复核记录，不会替代正式卷宗答案。</p></article></div>';
document.body.appendChild(panel);
const checklist=['时间基准：机械钟与港区授时为何相差九分钟？','权限链：谁能同时接触档案、采购和维护证书？','转运链：备用拖船如何离港、返港且避开摄像头？','技术链：中继器与备用电源如何共同制造假现场？','人物动机：谁获利、谁被抹去、谁留下了可复核证据？'];
function readProgress(){try{const s=JSON.parse(localStorage.getItem(SAVE)||'{}');return new Set(Array.isArray(s.cleared)?s.cleared:[])}catch(e){return new Set()}}
function render(){const done=readProgress();$('#nb-timeline').innerHTML=events.map(([time,title,ref,idx])=>done.has(idx)?'<div class="event"><span class="time">'+time+'</span><div><b>'+title+'</b><small>'+ref+'</small></div></div>':'<div class="event locked"><span class="time">未解锁</span><div><b>完成对应卷宗后显示</b><small>继续调查以解锁时间线证据</small></div></div>').join('');
$('#nb-people').innerHTML=people.map(([name,access,role],i)=>'<div class="suspect"><b>'+name+'</b><small>'+role+' · '+(i===0&&done.has(4)||i===1&&done.has(17)||i===2&&done.has(14)||i===3&&done.has(19)||i===4&&done.has(7)||i===5&&done.has(6)?access:'完成相关卷宗后解锁权限细节')+'</small></div>').join('');
$('#nb-memo').value=save.memo||'';$('#nb-count').textContent='已完成卷宗 '+done.size+' / 20';
$('#nb-checks').innerHTML=checklist.map((v,i)=>'<label><input type="checkbox" data-check="'+i+'" '+(save.checks.includes(i)?'checked':'')+'> '+v+'</label>').join('');
}
function open(){render();panel.classList.add('open');}
function close(){panel.classList.remove('open');}
const btn=document.createElement('button');btn.id='nexus-board-btn';btn.textContent='调查工作台';btn.onclick=open;
const attach=()=>{const target=$('#evidenceBtn');if(target&&!$('#nexus-board-btn'))target.after(btn);};
new MutationObserver(attach).observe(document.body,{childList:true,subtree:true});attach();
$('#nb-close').onclick=close;
function exportBackup(){save.memo=$('#nb-memo').value;const payload={app:'NEXUS_CASEBOOK',version:1,createdAt:new Date().toISOString(),board:save,casebook:(()=>{try{return JSON.parse(localStorage.getItem(SAVE)||'{}')}catch(e){return {}}})()};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='nexus-casebook-backup-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#nb-count').textContent='备份已导出 · '+new Date().toLocaleString();}
function importBackup(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!data||data.app!=='NEXUS_CASEBOOK'||data.version!==1||!data.board||!data.casebook||!Array.isArray(data.casebook.cleared)||!Array.isArray(data.board.checks))throw new Error('格式不匹配');const cleared=data.casebook.cleared.every(n=>Number.isInteger(n)&&n>=0&&n<20);const checks=data.board.checks.every(n=>Number.isInteger(n)&&n>=0&&n<checklist.length);if(!cleared||!checks||typeof data.board.memo!=='string')throw new Error('数据校验失败');if(!confirm('导入将覆盖本机当前的 NEXUS 卷宗进度与调查笔记，确定继续吗？'))return;localStorage.setItem(SAVE,JSON.stringify(data.casebook));save={memo:data.board.memo,hypothesis:typeof data.board.hypothesis==='string'?data.board.hypothesis:'',checks:data.board.checks};localStorage.setItem(KEY,JSON.stringify(save));render();$('#nb-count').textContent='备份导入成功 · '+data.casebook.cleared.length+' 份卷宗已完成';}catch(err){alert('无法导入：备份文件无效或版本不兼容。');}};reader.readAsText(file);}
$('#nb-export').onclick=exportBackup;$('#nb-import').onclick=()=>$('#nb-file').click();$('#nb-file').onchange=e=>{importBackup(e.target.files&&e.target.files[0]);e.target.value='';};
$('#nb-save').onclick=()=>{save.memo=$('#nb-memo').value;localStorage.setItem(KEY,JSON.stringify(save));$('#nb-count').textContent='笔记已保存 · '+save.memo.length+' 字';};
$('#nb-checks').addEventListener('change',e=>{const i=Number(e.target.dataset.check);if(!Number.isInteger(i))return;save.checks=save.checks.filter(x=>x!==i);if(e.target.checked)save.checks.push(i);localStorage.setItem(KEY,JSON.stringify(save));});
window.addEventListener('storage',e=>{if(e.key===SAVE&&panel.classList.contains('open'))render();});
})();