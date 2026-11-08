(()=>{'use strict';
const list=document.querySelector('#clues');if(!list)return;
const KEY='nexus-evidence-workbench-v1';let records=[],selected=[];
try{records=JSON.parse(localStorage.getItem(KEY)||'[]');if(!Array.isArray(records))records=[]}catch(e){records=[]}
const css=document.createElement('style');css.textContent=`
#evidenceWorkbench{margin:14px 0 8px;padding:14px;border:1px solid #80e5ff33;border-radius:13px;background:linear-gradient(145deg,#102238,#0b1726)}
#evidenceWorkbench .ew-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}
#evidenceWorkbench strong{font-size:12px;color:#aeeaff;letter-spacing:1px}
#evidenceWorkbench small{font-size:10px;color:#8fa8c2}
#evidenceWorkbench .ew-help{font-size:11px;line-height:1.8;color:#aebfd2;margin:6px 0 10px}
#clues li{cursor:pointer;transition:background .15s,border-color .15s}
#clues li.ew-picked{background:#1c3d55;border-radius:8px;outline:1px solid #80e5ff88}
#clues li.ew-picked i{color:#80e5ff}
#evidenceWorkbench button{border:1px solid #80e5ff55;border-radius:9px;padding:8px 11px;background:#19334b;color:#dff6ff;font-size:11px}
#evidenceWorkbench button:disabled{opacity:.35}
#evidenceWorkbench .ew-save{background:linear-gradient(110deg,#80e5ff,#b6a7ff);color:#091523;font-weight:800}
#evidenceWorkbench .ew-selected{font-size:11px;color:#c6d8e9;line-height:1.7;margin:8px 0}
#evidenceWorkbench .ew-note{margin-top:8px;padding:9px;border-radius:9px;background:#ffffff08;border:1px solid #ffffff12}
#evidenceWorkbench .ew-note b{font-size:10px;color:#80e5ff}
#evidenceWorkbench .ew-note p{font-size:11px;line-height:1.75;color:#c5d4e4;margin:5px 0}
#evidenceWorkbench .ew-note button{padding:4px 8px;font-size:10px}
`;document.head.append(css);
const panel=document.createElement('section');panel.id='evidenceWorkbench';panel.innerHTML='<div class="ew-head"><strong>证据对照台 / WORKBENCH</strong><small id="ewCount">已选 0 / 4</small></div><p class="ew-help">点击上方两条或更多现场证据，将它们放在一起核对。保存后会留在本机，不会改变案件的标准答案。</p><div class="ew-selected" id="ewSelected">尚未选择证据。建议至少选择两条。</div><button class="ew-save" id="ewSave" disabled>保存为对照笔记</button><div id="ewNotes"></div>';
list.insertAdjacentElement('afterend',panel);
const $=s=>panel.querySelector(s),caseId=()=>{const m=(document.querySelector('#caseNo')?.textContent||'').match(/FILE\s+(\d+)/i);return m?Number(m[1]):0};
function currentClues(){return Array.from(list.querySelectorAll('li')).map((li,i)=>({i,text:li.textContent.replace(/^\s*0?\d+\s*/,'').trim()}))}
function render(){
 const clues=currentClues();list.querySelectorAll('li').forEach((li,i)=>li.classList.toggle('ew-picked',selected.includes(i)));
 $('#ewCount').textContent='已选 '+selected.length+' / 4';
 $('#ewSelected').textContent=selected.length?selected.map(i=>'证据 '+(i+1)+'：'+(clues[i]?.text||'')).join('　｜　'):'尚未选择证据。建议至少选择两条。';
 $('#ewSave').disabled=selected.length<2;
 const notes=records.filter(n=>n.case===caseId()).slice().reverse();
 $('#ewNotes').innerHTML=notes.length?'<div class="ew-help">本卷已保存的对照笔记（'+notes.length+'）</div>'+notes.map(n=>'<div class="ew-note"><b>'+new Date(n.time).toLocaleString()+'</b><p>'+n.items.map((x,i)=>'证据 '+(i+1)+'：'+x).join('<br>')+'</p><button data-remove="'+n.id+'">删除笔记</button></div>').join(''):'';
}
list.addEventListener('click',e=>{
 const li=e.target.closest('li');if(!li)return;
 const i=Array.from(list.querySelectorAll('li')).indexOf(li);if(i<0)return;
 const at=selected.indexOf(i);if(at>=0)selected.splice(at,1);else if(selected.length<4)selected.push(i);
 render();
});
$('#ewSave').addEventListener('click',()=>{
 const clues=currentClues(),items=selected.map(i=>clues[i]?.text).filter(Boolean);if(items.length<2)return;
 records.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),case:caseId(),title:document.querySelector('#title')?.textContent||'',items,time:Date.now()});
 try{localStorage.setItem(KEY,JSON.stringify(records));selected=[];render()}catch(e){alert('本机存储空间不足，笔记未能保存。')}
});
$('#ewNotes').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(!b)return;records=records.filter(n=>n.id!==b.dataset.remove);try{localStorage.setItem(KEY,JSON.stringify(records))}catch(e){}render();});
const observer=new MutationObserver(()=>{selected=[];render()});observer.observe(list,{childList:true,subtree:true});
render();
window.__NEXUS_WORKBENCH__={get records(){return records.slice()},clear(){records=[];localStorage.removeItem(KEY);render()}};
})();