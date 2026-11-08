(()=>{'use strict';
const SAVE='nexus-casebook-v2',KEY='nexus-causality-lab-v1',$=s=>document.querySelector(s);
const puzzles=[
{id:'chain-time',title:'因果链 A · 九分钟假时间',level:'进阶',need:[2,8,14],prompt:'从不同卷宗中选出三条能够共同说明“九分钟延迟是人为统一制造，而不是多台设备同时自然故障”的证据。',cards:[
['卷宗02','港区授时系统在02:17保持准确，机械钟被人为拨慢九分钟。',1],
['卷宗06','录音静音段仍保留50Hz电流底噪。',0],
['卷宗08','灯塔信号中断早于汽笛记录43秒，设备延迟不足以解释顺序差。',1],
['卷宗14','三台不同型号播放器都经过同一台中继器，且固件在事故前48小时被修改。',1],
['卷宗03','楼梯脚印含有淡水清洁剂。',0],
['卷宗11','北岸发电机运行记录与燃油差额吻合。',0]
],why:'港区授时提供外部时间基准，卷宗08证明事件顺序不能靠机械钟解释，卷宗14则把统一延迟定位到共同中继器。三条证据构成“基准—异常—技术实施点”的链条。',boundary:'它能证明时间伪装的技术路径，不足以单独识别固件修改者。'},
{id:'chain-transfer',title:'因果链 B · 旧船坞转运路线',level:'专家',need:[12,13,15],prompt:'选择三条能够共同证明“存在绕开常规监控的水路与地下通道”，但不直接证明具体乘员身份的证据。',cards:[
['卷宗12','潮线、吃水与红色矿粉共同支持备用拖船曾在旧船坞内侧靠岸。',1],
['卷宗13','地下空室通向北岸维修水道，入口门轴只能从室内开启。',1],
['卷宗15','观察窗夹层与维修水道相通，夹层外侧出现沈知微指纹。',1],
['卷宗10','07号是救援队给备用拖船使用的临时呼号。',0],
['卷宗05','许照账号在01:54离馆、02:26重新入馆。',0],
['卷宗08','周既白的证词把汽笛与灯塔信号顺序说反。',0]
],why:'卷宗12提供船只物理靠岸痕迹，卷宗13确认地下空室与维修水道的连接，卷宗15把水道与观察窗夹层连起来。三者共同建立一条可行路线。',boundary:'路线存在不等于某个特定人物乘船或走过通道；身份仍需独立证据。'},
{id:'chain-credential',title:'因果链 C · 凭据不等于本人',level:'专家',need:[14,21,22],prompt:'选出三条能证明“闻秋相关认证材料在官方死亡日期后仍被使用，但不能证明闻秋本人发报”的证据。',cards:[
['卷宗14','维护证书已注销，但证书副本仍保存在馆长办公室。',1],
['卷宗21','死亡证明日期、印章批次与遗体交接栏存在可核验矛盾。',1],
['卷宗22','短波信号使用闻秋私人测试格式，但对应私钥曾复制给两名维护员。',1],
['卷宗17','匿名委托信的纸张来自闻秋的无线电维修簿。',0],
['卷宗20','许照掌握档案封存、采购封条和维护证书副本。',0],
['卷宗23','一次性维护卡曾登记在无线电组名下。',0]
],why:'卷宗21动摇死亡证明可靠性，卷宗22证明相关凭据和格式在之后被使用，卷宗14则补足维护证书副本的流转背景。',boundary:'认证材料可能被复制或转交；缺少可验证声纹与现场身份信息，不能确认发送者就是闻秋。'},
{id:'chain-erasure',title:'因果链 D · 被持续清理的记录',level:'终局',need:[19,22,23],prompt:'找出三条能够支持“存在跨阶段的证据清理行为”，但尚不足以锁定同一名操作者的证据。',cards:[
['卷宗19','全案证据链显示，档案与设备权限集中在同一管理链，但没有个人生物识别。',1],
['卷宗22','第六号中继器原始授权表缺失，备份哈希仍然存在。',1],
['卷宗23','短波接收缓存被人工删除，终端账号属于许照的管理权限组。',1],
['卷宗04','事故名单第五个签名压痕可辨认出闻秋。',0],
['卷宗12','码头摄像头在关键时段被远程转向海面。',0],
['卷宗16','照片底片存在二次曝光的齿孔错位。',0]
],why:'卷宗19显示档案与设备权限链的组织关联，卷宗22揭示授权原表缺失但哈希留存，卷宗23则记录后续缓存被人工清理。三者构成持续干预证据留存的行为链。',boundary:'权限组账号、缺失原表和缓存删除不能证明同一人执行了全部操作，也不能证明被删除内容必然指向某个嫌疑人。'},
{id:'chain-erasure-2',title:'因果链 E · 被抹去的授权原表',level:'专家',need:[19,22,23],prompt:'选择三条能够共同说明“档案与短波缓存遭到持续清理，但现有记录仍不足以识别具体操作者”的证据。',cards:[
['卷宗19','档案权限组账号执行过记录清理操作，日志没有标明实际操作者。',1],
['卷宗22','短波授权原表缺失，但校验哈希仍留存，证明文件曾经存在。',1],
['卷宗23','接收缓存出现人工删除痕迹，终端账号属于档案管理权限组。',1],
['卷宗04','楼梯脚印含有淡水清洁剂，无法判断清理对象。',0],
['卷宗10','救援队曾为备用拖船设置临时呼号。',0],
['卷宗16','港区天气记录显示事故夜有短时强风。',0]
],why:'卷宗19建立档案权限组的清理记录，卷宗22说明授权原表缺失但哈希仍可证明文件存在，卷宗23进一步指出短波缓存存在人工删除痕迹。三者共同构成持续干预证据留存的行为链。',boundary:'权限组账号和删除痕迹不能证明同一人执行了全部操作；哈希也不能还原原文件内容。'}
];
let state={solved:[],attempts:{}};try{state=Object.assign(state,JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(e){}if(!Array.isArray(state.solved))state.solved=[];if(!state.attempts||typeof state.attempts!=='object')state.attempts={};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function progress(){try{const s=JSON.parse(localStorage.getItem(SAVE)||'{}');return new Set(Array.isArray(s.cleared)?s.cleared:[])}catch(e){return new Set()}}
const style=document.createElement('style');style.textContent=`
#nexus-causality-btn{margin:8px 0 0 8px;border:1px solid #a9a0ff77;border-radius:11px;padding:10px 13px;background:#292344;color:#e8e3ff;font-size:12px}
#nexus-causality{position:fixed;inset:0;z-index:10100;display:none;overflow:auto;background:#100f1bf9;padding:18px 14px max(24px,env(safe-area-inset-bottom))}
#nexus-causality.open{display:block}#nexus-causality .wrap{width:min(900px,100%);margin:auto}
#nexus-causality .top{display:flex;justify-content:space-between;align-items:center;gap:12px;position:sticky;top:0;background:#100f1bf5;padding:8px 0 14px;z-index:2}
#nexus-causality h2{margin:5px 0;color:#c8baff;letter-spacing:2px;font-size:22px}
#nexus-causality p{font-size:12px;color:#c1bbd4;line-height:1.8}
#nexus-causality button{border:1px solid #ffffff25;border-radius:9px;background:#29243a;color:#f2edff;padding:9px 12px}
#nexus-causality .puzzle{border:1px solid #ffffff20;border-radius:14px;background:#1b1828;padding:15px;margin:12px 0}
#nexus-causality .puzzle.locked{opacity:.45}
#nexus-causality h3{margin:0 0 8px;color:#d2c7ff;font-size:15px}
#nexus-causality .meta{font-size:10px;color:#a99fbe;margin-bottom:7px}
#nexus-causality .cards{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}
#nexus-causality label{display:flex;gap:9px;align-items:flex-start;padding:11px;border:1px solid #ffffff1c;border-radius:10px;background:#141322;color:#ddd8eb;font-size:12px;line-height:1.75}
#nexus-causality input{margin-top:3px;accent-color:#b7a6ff}
#nexus-causality .flow{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:12px 0;color:#b8abd9;font-size:10px}
#nexus-causality .flow span{padding:6px 9px;border:1px solid #b7a6ff44;border-radius:8px;background:#29243a}
#nexus-causality .result{margin-top:10px;padding:11px;border-radius:9px;background:#141c28;color:#dce5f2;font-size:12px;line-height:1.8}
#nexus-causality .good{border:1px solid #70d6a366}#nexus-causality .bad{border:1px solid #e58b8b66}
@media(max-width:620px){#nexus-causality h2{font-size:18px}#nexus-causality .top{align-items:flex-start}#nexus-causality .cards{grid-template-columns:1fr}}
`;document.head.appendChild(style);
const panel=document.createElement('section');panel.id='nexus-causality';panel.innerHTML='<div class="wrap"><div class="top"><div><small style="color:#aaa0c7">NEXUS · CAUSALITY RECONSTRUCTION</small><h2>因果链拼图室</h2><p>不是找出一条“看起来合理”的解释，而是从不同卷宗中选出能够互相支撑的证据，并明确结论的边界。每题选择三条证据。</p></div><button id="nclab-close">关闭 ×</button></div><div id="nclab-list"></div></div>';document.body.appendChild(panel);
function render(){const done=progress();$('#nclab-list').innerHTML=puzzles.map(p=>{const open=p.need.every(n=>done.has(n-1)),solved=state.solved.includes(p.id);if(!open)return '<article class="puzzle locked"><h3>🔒 '+esc(p.title)+'</h3><p>完成卷宗 '+p.need.map(n=>String(n).padStart(2,'0')).join('、')+' 后开放。当前进度 '+done.size+'/23。</p></article>';return '<article class="puzzle" data-puzzle="'+p.id+'"><div class="meta">'+esc(p.level)+' · 前置卷宗 '+p.need.map(n=>String(n).padStart(2,'0')).join(' / ')+' · 尝试 '+(state.attempts[p.id]||0)+' 次</div><h3>'+(solved?'✓ ':'◇ ')+esc(p.title)+'</h3><p>'+esc(p.prompt)+'</p><div class="cards">'+p.cards.map((c,i)=>'<label><input type="checkbox" value="'+i+'" '+(solved?'disabled':'')+'><span><b>'+esc(c[0])+'</b><br>'+esc(c[1])+'</span></label>').join('')+'</div><div class="flow"><span>现场记录</span>→<span>交叉证据</span>→<span>因果判断</span>→<span>证据边界</span></div><button data-submit-chain="'+p.id+'" '+(solved?'disabled':'')+'>'+(solved?'已完成复核':'提交三条证据')+'</button><div class="result '+(solved?'good':'')+'" '+(solved?'':'hidden')+'>'+(solved?'<b>因果链成立</b><br>'+esc(p.why)+'<br><b>结论边界：</b>'+esc(p.boundary):'')+'</div></article>';}).join('');}
function open(){render();panel.classList.add('open')}function close(){panel.classList.remove('open')}
$('#nclab-close').onclick=close;
panel.addEventListener('click',e=>{const b=e.target.closest('[data-submit-chain]');if(!b)return;const p=puzzles.find(x=>x.id===b.dataset.submitChain),card=b.closest('.puzzle'),chosen=[...card.querySelectorAll('input[type="checkbox"]:checked')].map(x=>Number(x.value)).sort((a,b)=>a-b),expected=p.cards.map((x,i)=>x[2]?i:-1).filter(i=>i>=0).sort((a,b)=>a-b),box=card.querySelector('.result');if(chosen.length!==3){box.hidden=false;box.className='result bad';box.textContent='需要恰好选择三条证据。过少无法闭合链条，过多则可能混入无关线索。';return;}state.attempts[p.id]=(state.attempts[p.id]||0)+1;if(chosen.join(',')!==expected.join(',')){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}box.hidden=false;box.className='result bad';box.textContent='证据组合尚未闭合。检查每条记录的证明对象：时间基准、技术路径、实际行动与操作者身份不能混为一谈。';return;}if(!state.solved.includes(p.id))state.solved.push(p.id);try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}box.hidden=false;box.className='result good';box.innerHTML='<b>因果链成立</b><br>'+esc(p.why)+'<br><b>结论边界：</b>'+esc(p.boundary);b.disabled=true;b.textContent='已完成复核';card.querySelector('h3').textContent='✓ '+p.title;card.querySelectorAll('input').forEach(x=>x.disabled=true);});
const attach=()=>{const target=$('#evidenceBtn');if(target&&!$('#nexus-causality-btn')){const b=document.createElement('button');b.id='nexus-causality-btn';b.textContent='因果链拼图室';b.onclick=open;target.after(b);}};
new MutationObserver(attach).observe(document.body,{childList:true,subtree:true});attach();
window.addEventListener('storage',e=>{if(e.key===SAVE&&panel.classList.contains('open'))render();});
window.__NEXUS_CAUSALITY__={version:'1.0.0',count:puzzles.length,get solved(){return [...state.solved]},open};
})();