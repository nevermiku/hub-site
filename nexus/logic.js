(()=>{'use strict';
const SAVE='nexus-casebook-v2',KEY='nexus-cross-exam-v1', $=s=>document.querySelector(s);
const dossiers=[
{id:'time',title:'时间基准交叉核验',need:[1,7],a:'卷宗 02：港区授时记录在 02:17 保持准确，机械钟被人为拨慢九分钟。',b:'卷宗 08：灯塔信号中断记录与港区授时日志存在可校准的时间差。',q:'两份记录放在一起，能证明什么？',o:['所有人在 02:08 都有不在场证明','机械钟不能作为独立时间证据，相关证词必须按港区授时重新校准','港区授时系统也被整体篡改'],ans:1,why:'两份记录共同建立了外部时间基准，并指出机械钟的偏差是人为制造的。它能推翻依赖 02:08 的时间说法，但不能单独证明某个人在场。'},
{id:'access',title:'权限链交叉核验',need:[4,17],a:'卷宗 05：档案馆出入记录显示许照的账号在关键时段有两次操作。',b:'卷宗 18：维护证书副本的流转记录显示，权限凭据曾被复制并交给维护人员。',q:'关于操作账号与实际操作者，哪项判断最严谨？',o:['账号记录等于本人亲自操作','凭据可能被转交或复制，账号只能证明权限被使用，不能独立识别操作者','所有维护人员都参与了伪造'],ans:1,why:'认证凭据记录的是权限使用，不是生物身份。需要门禁、设备位置、物理痕迹等独立证据才能把操作归到具体的人。'},
{id:'transfer',title:'转运路径交叉核验',need:[11,14],a:'卷宗 12：摄像头被转向海面，备用拖船能够通过维修水道靠岸。',b:'卷宗 15：观察窗夹层存在第二个人的指纹，地下维修水道可抵达夹层。',q:'这两条路径证据能支持哪种结论？',o:['已经证明沈知微乘拖船离开雾港','现场存在绕开常规监控的替代通道，但具体乘员身份仍需独立证据','摄像头转向与夹层指纹必然由同一人留下'],ans:1,why:'路径可行性与身份认定是两件事。摄像头盲区和维修水道说明行动路线可能存在，但不能据此认定谁使用了路线。'},
{id:'signal',title:'短波信号交叉核验',need:[20,21],a:'卷宗 21：死亡证明的签发链存在日期、印章与交接记录矛盾。',b:'卷宗 22：官方死亡日期之后出现使用旧校验节奏的短波信号，但密钥曾被复制。',q:'关于闻秋的状态，证据允许得出什么结论？',o:['闻秋已被证实存活并亲自发报','死亡记录不可靠，旧凭据在之后被使用；发报者身份和闻秋生死仍未证实','短波信号证明死亡证明完全真实'],ans:1,why:'伪造或不可靠的死亡记录不能自动证明当事人仍然存活；被复制的密钥也不能作为发送者身份认证。结论必须保留证据边界。'},
{id:'deletion',title:'档案删除交叉核验',need:[18,22],a:'卷宗 19：档案馆出现过权限组账号执行的记录清理操作。',b:'卷宗 23：短波接收缓存被人工删除，终端账号属于档案管理权限组。',q:'两处删除痕迹最合理的共同解释是？',o:['已经锁定同一名操作者','存在持续清理证据的行为链，但账号权限组不足以锁定具体个人','删除行为证明被删除内容全部属实'],ans:1,why:'相似的权限痕迹能提示组织层面的关联，却不能把权限组直接等同于某个成员。还需要终端登录、设备指纹和现场记录互证。'},
{id:'causality',title:'因果链终局复核',need:[14,19,22],a:'卷宗 15：现场存在第二条进入观察窗夹层的路线。',b:'卷宗 20 与 23：沈知微留下可复核线索，后续档案仍出现权限操作与记录清理。',q:'哪项结论同时尊重了现场、档案和身份三类证据？',o:['所有行动者的身份和动机都已完全确定','可以确认存在被隐藏的行动路线与持续的证据清理，但不能把线索链直接等同于完整身份链','沈知微必然是全部事件的策划者'],ans:1,why:'路线、权限、记录与身份需要分别证明。证据能建立行动链的结构，却不自动补齐每个节点的执行者和动机。'}
];
let state={solved:[]};try{state=Object.assign(state,JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(e){}if(!Array.isArray(state.solved))state.solved=[];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function cleared(){try{const s=JSON.parse(localStorage.getItem(SAVE)||'{}');return new Set(Array.isArray(s.cleared)?s.cleared:[])}catch(e){return new Set()}}
const css=`
#nexus-cross-btn{margin-left:8px;border:1px solid #d7b87888;border-radius:11px;padding:10px 13px;background:#3a3020;color:#fff0c9;font-size:12px}
#nexus-cross{position:fixed;inset:0;z-index:10070;display:none;overflow:auto;background:#07101df7;padding:18px 14px max(24px,env(safe-area-inset-bottom))}
#nexus-cross.open{display:block}#nexus-cross .wrap{width:min(820px,100%);margin:auto}
#nexus-cross .top{display:flex;justify-content:space-between;align-items:center;gap:12px;position:sticky;top:0;background:#07101df2;padding:8px 0 14px;z-index:2}
#nexus-cross h2{font-size:21px;color:#f0cf8b;letter-spacing:2px;margin:4px 0}
#nexus-cross p{font-size:12px;color:#afbed0;line-height:1.8}
#nexus-cross button{border:1px solid #ffffff24;border-radius:9px;background:#17283b;color:#edf4ff;padding:9px 12px}
#nexus-cross .case{border:1px solid #ffffff20;border-radius:14px;background:#101d2e;padding:14px;margin:12px 0}
#nexus-cross .case.locked{opacity:.45}
#nexus-cross .case h3{margin:0 0 8px;color:#f0cf8b;font-size:15px}
#nexus-cross .evidence{border-left:2px solid #80e5ff66;padding:7px 10px;margin:8px 0;background:#0b1726;color:#cbd9e8;font-size:12px;line-height:1.7}
#nexus-cross .opts{display:grid;gap:7px;margin-top:12px}
#nexus-cross .opts label{display:flex;gap:8px;padding:9px;border:1px solid #ffffff18;border-radius:9px;color:#d7e1ed;font-size:12px;line-height:1.6}
#nexus-cross .result{margin-top:10px;padding:10px;border-radius:9px;background:#0b1726;color:#cbd9e8;font-size:12px;line-height:1.8}
#nexus-cross .good{border:1px solid #70d6a366}#nexus-cross .bad{border:1px solid #e58b8b66}
@media(max-width:600px){#nexus-cross h2{font-size:18px}#nexus-cross .top{align-items:flex-start}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const panel=document.createElement('section');panel.id='nexus-cross';panel.innerHTML='<div class="wrap"><div class="top"><div><small style="color:#91a5c0">NEXUS · EVIDENCE CROSS-EXAMINATION</small><h2>证据交叉验证</h2><p>把不同卷宗的证据放在一起，判断它们能共同证明什么。解锁条件：完成相关卷宗。</p></div><button id="nc-close">关闭 ×</button></div><div id="nc-list"></div></div>';document.body.appendChild(panel);
function render(){const done=cleared();$('#nc-list').innerHTML=dossiers.map(d=>{const open=d.need.every(n=>done.has(n-1)),solved=state.solved.includes(d.id);if(!open)return '<article class="case locked"><h3>🔒 '+esc(d.title)+'</h3><p>完成卷宗 '+d.need.map(n=>String(n).padStart(2,'0')).join('、')+' 后解锁交叉验证。</p></article>';return '<article class="case" data-case="'+d.id+'"><h3>'+(solved?'✓ ':'◇ ')+esc(d.title)+'</h3><div class="evidence">'+esc(d.a)+'</div><div class="evidence">'+esc(d.b)+'</div><b style="font-size:12px;color:#e8eff8">'+esc(d.q)+'</b><div class="opts">'+d.o.map((o,i)=>'<label><input type="radio" name="nc-'+d.id+'" value="'+i+'" '+(solved?'disabled':'')+'><span>'+esc(o)+'</span></label>').join('')+'</div><button data-check="'+d.id+'" '+(solved?'disabled':'')+' style="margin-top:10px">'+(solved?'已完成验证':'提交交叉判断')+'</button><div class="result '+(solved?'good':'')+'" '+(solved?'':'hidden')+'>'+(solved?'<b>验证成立</b><br>'+esc(d.why):'')+'</div></article>';}).join('');}
function open(){render();panel.classList.add('open')}function close(){panel.classList.remove('open')}
$('#nc-close').onclick=close;
panel.addEventListener('click',e=>{const b=e.target.closest('[data-check]');if(!b)return;const d=dossiers.find(x=>x.id===b.dataset.check),v=panel.querySelector('input[name="nc-'+d.id+'"]:checked'),card=b.closest('.case'),box=card.querySelector('.result');if(!v){box.hidden=false;box.className='result bad';box.textContent='先选择一个结论，再提交。';return;}box.hidden=false;if(Number(v.value)!==d.ans){box.className='result bad';box.innerHTML='<b>推断不成立</b><br>这项结论超出了证据能够支持的范围。重新对照两份卷宗，区分“权限被使用”和“某人亲自操作”等概念。';return;}state.solved.push(d.id);localStorage.setItem(KEY,JSON.stringify(state));box.className='result good';box.innerHTML='<b>交叉验证成立</b><br>'+esc(d.why);b.disabled=true;b.textContent='已完成验证';card.querySelector('h3').textContent='✓ '+d.title;});
const attach=()=>{const target=$('#evidenceBtn');if(target&&!$('#nexus-cross-btn')){const b=document.createElement('button');b.id='nexus-cross-btn';b.textContent='证据交叉验证';b.onclick=open;target.after(b);}};
new MutationObserver(attach).observe(document.body,{childList:true,subtree:true});attach();
window.addEventListener('storage',e=>{if(e.key===SAVE&&panel.classList.contains('open'))render();});
window.__NEXUS_CROSS__={version:'1.0.0',dossiers:dossiers.length,open};
})();