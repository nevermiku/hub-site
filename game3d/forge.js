(()=>{'use strict';
const api=window.__AINCRAD3D__;
if(!api||!api.SAVE||!api.DATA||!api.equipItem)return;
const $=s=>document.querySelector(s),S=api.SAVE;
const styles=[
{id:'katana',label:'流光太刀',visual:'katana',atk:1.06,crit:.045,speed:.04,desc:'轻快拔刀 · 暴击与攻速'},
{id:'greatsword',label:'断岳重剑',visual:'greatsword',atk:1.22,crit:.005,speed:-.035,desc:'厚重剑身 · 高额攻击'},
{id:'sword',label:'守誓长剑',visual:'sword',atk:1.12,crit:.02,speed:0,desc:'均衡配装 · 稳定输出'},
{id:'dagger',label:'影袭短刃',visual:'dagger',atk:1.02,crit:.065,speed:.07,desc:'短刃连击 · 高暴击高攻速'}
];
let selected='sword';
const css=`
#blade-forge{position:fixed;left:max(10px,env(safe-area-inset-left));top:max(12px,env(safe-area-inset-top));z-index:10030;pointer-events:auto}
#blade-forge>button{border:1px solid #d8b56c88;border-radius:999px;padding:8px 13px;background:#211b14eF;color:#ffe4a4;font-size:11px;box-shadow:0 4px 18px #0006}
#blade-forge-panel{display:none;position:fixed;inset:0;z-index:10040;overflow:auto;padding:20px 14px max(24px,env(safe-area-inset-bottom));background:radial-gradient(ellipse at 50% 0%,#49351deF,#101722f7 58%,#080d14f7);color:#f4ead6;font:13px/1.65 system-ui,sans-serif}
#blade-forge-panel.open{display:block}
#blade-forge-panel .bf-wrap{width:min(760px,100%);margin:auto}
#blade-forge-panel .bf-head{display:flex;justify-content:space-between;align-items:center;gap:10px;position:sticky;top:0;padding:8px 0 14px;background:#111a24f2;z-index:2}
#blade-forge-panel h2{margin:0;color:#ffd58b;letter-spacing:3px;font-size:22px}
#blade-forge-panel .bf-sub{color:#b6a88f;font-size:11px}
#blade-forge-panel .bf-card{border:1px solid #d8b56c3d;border-radius:15px;background:#151e28eF;padding:14px;margin:12px 0}
#blade-forge-panel .bf-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
#blade-forge-panel .bf-style{border:1px solid #ffffff24;border-radius:12px;padding:12px;background:#101722;color:#eee;text-align:left}
#blade-forge-panel .bf-style.active{border-color:#ffd070;background:#382c1c}
#blade-forge-panel .bf-style b{display:block;color:#ffdfa0;font-size:13px}
#blade-forge-panel .bf-style small{display:block;color:#a9b5c4;font-size:10px;margin-top:4px}
#blade-forge-panel button{cursor:pointer}
#blade-forge-panel .bf-action{border:1px solid #ffd07088;border-radius:10px;padding:11px 16px;background:linear-gradient(120deg,#79552a,#3d3020);color:#fff0c9;font-weight:800}
#blade-forge-panel .bf-close{border:1px solid #ffffff25;border-radius:9px;padding:9px 12px;background:#1b2a38;color:#eef}
#blade-forge-panel .bf-stat{display:flex;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px solid #ffffff12;font-size:11px}
#blade-forge-panel .bf-stat:last-child{border:0}
#blade-forge-panel .bf-muted{color:#a9b5c4;font-size:10px;line-height:1.7}
#blade-forge-panel .bf-preview{display:flex;align-items:center;gap:14px}
#blade-forge-panel .bf-blade{width:76px;height:116px;position:relative;flex:none;filter:drop-shadow(0 0 10px #f7d28b66)}
#blade-forge-panel .bf-blade:before{content:"";position:absolute;left:34px;top:5px;width:10px;height:83px;background:linear-gradient(90deg,#677d8b,#f4f7f7 35%,#a6c2d2 65%,#435461);clip-path:polygon(0 0,100% 0,100% 82%,50% 100%,0 82%)}
#blade-forge-panel .bf-blade:after{content:"";position:absolute;left:19px;top:84px;width:40px;height:7px;border-radius:5px;background:#c69a4d;box-shadow:0 14px 0 -1px #7c4a2b}
@media(max-width:520px){#blade-forge-panel .bf-grid{grid-template-columns:1fr}#blade-forge-panel h2{font-size:18px}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const root=document.createElement('div');root.id='blade-forge';root.innerHTML='<button type="button">⚒ 铸剑工坊</button>';document.body.appendChild(root);
const panel=document.createElement('section');panel.id='blade-forge-panel';panel.innerHTML='<div class="bf-wrap"><div class="bf-head"><div><div class="bf-sub">AINCRAD · BLACKSMITH ARCHIVE</div><h2>百炼剑炉</h2></div><button class="bf-close" id="bf-close">收起 ×</button></div><div class="bf-card"><div class="bf-preview"><div class="bf-blade"></div><div><b id="bf-title">选择你的剑型</b><div class="bf-muted" id="bf-desc">每一种剑型都有独立的外观与属性倾向。锻造后会直接装备到角色手中，使用现有 3D 武器模型。</div><div class="bf-muted" id="bf-level"></div></div></div></div><div class="bf-card"><b>选择剑型 / BLADE FORM</b><div class="bf-grid" id="bf-styles" style="margin-top:10px"></div></div><div class="bf-card"><b>锻造预览</b><div id="bf-preview-stats"></div><p class="bf-muted">锻造会消耗金币，装备新武器时旧武器会自动放回背包。武器品质由当前探索层数与游戏原有掉落规则决定。</p><button class="bf-action" id="bf-craft">锻造并装备</button><span class="bf-muted" id="bf-cost" style="margin-left:10px"></span></div><div class="bf-card"><b>当前武器</b><div id="bf-current" class="bf-muted"></div></div><div class="bf-card"><b>背包中的武器</b><div id="bf-bag" class="bf-muted"></div></div></div>';
document.body.appendChild(panel);
function cost(){return 88+Math.max(1,S.floor||1)*12;}
function weaponName(w){return w?String(w.name||w.base||'未命名武器'):'未装备';}
function render(){
 const st=styles.find(x=>x.id===selected)||styles[2],floor=Math.max(1,S.floor||1),price=cost();
 $('#bf-title').textContent=st.label;$('#bf-desc').textContent=st.desc;
 $('#bf-level').textContent='当前探索层数：'+floor+' · 玩家等级：'+(S.lv||1)+' · 持有金币：'+(S.gold||0);
 $('#bf-styles').innerHTML=styles.map(x=>'<button class="bf-style '+(x.id===selected?'active':'')+'" data-style="'+x.id+'"><b>'+x.label+'</b><small>'+x.desc+'</small></button>').join('');
 $('#bf-preview-stats').innerHTML='<div class="bf-stat"><span>攻击倾向</span><b>×'+st.atk.toFixed(2)+'</b></div><div class="bf-stat"><span>暴击加成</span><b>+'+(st.crit*100).toFixed(1)+'%</b></div><div class="bf-stat"><span>攻速倾向</span><b>'+(st.speed>=0?'+':'')+(st.speed*100).toFixed(1)+'%</b></div><div class="bf-stat"><span>锻造费用</span><b>'+price+' 金币</b></div>';
 $('#bf-cost').textContent='余额 '+(S.gold||0)+' 金';
 const eq=S.equip&&S.equip.weapon;$('#bf-current').textContent=eq?weaponName(eq)+' · 攻击 '+(eq.stats?.atk||0)+' · 品质 '+(eq.q||'普通'):'当前没有装备武器';
 const bag=(S.bag||[]).filter(x=>x.slot==='weapon');$('#bf-bag').innerHTML=bag.length?bag.map(x=>'<div class="bf-stat"><span>'+weaponName(x)+'</span><b>攻击 '+(x.stats?.atk||0)+'</b></div>').join(''):'暂无待装备武器';
 $('#bf-craft').disabled=(S.gold||0)<price;
}
root.firstElementChild.onclick=()=>{render();panel.classList.add('open');};
$('#bf-close').onclick=()=>panel.classList.remove('open');
$('#bf-styles').addEventListener('click',e=>{const b=e.target.closest('[data-style]');if(!b)return;selected=b.dataset.style;render();});
$('#bf-craft').onclick=()=>{
 const st=styles.find(x=>x.id===selected),price=cost();
 if((S.gold||0)<price){alert('金币不足。继续探索、开启宝箱或出售装备后再来锻造。');return;}
 try{
  const item=api.DATA.makeItem(Math.max(1,S.floor||1),false,0,'weapon');
  if(!item||item.slot!=='weapon')throw new Error('weapon generation failed');
  item.visual=st.visual;item.base=st.label;item.name=st.label+' · '+(item.name||'新铸');item.forgeStyle=st.id;
  item.stats=item.stats||{};item.stats.atk=Math.round((item.stats.atk||0)*st.atk*10)/10;
  item.stats.crit=+((item.stats.crit||0)+st.crit).toFixed(3);
  item.stats.speed=+((item.stats.speed||0)+st.speed).toFixed(3);
  item.price=Math.round((item.price||price)*1.25);
  S.gold-=price;S.bag.push(item);api.equipItem(item.uid);
  render();
  const msg=document.createElement('div');msg.textContent='锻造完成：'+item.name+' · 已装备';msg.style.cssText='position:fixed;left:50%;top:18%;transform:translateX(-50%);z-index:10060;background:#2c2418;border:1px solid #ffd070;padding:12px 18px;border-radius:12px;color:#ffe7b0;box-shadow:0 8px 30px #0009';document.body.appendChild(msg);setTimeout(()=>msg.remove(),2200);
 }catch(err){console.error('[BLADE FORGE]',err);alert('锻造未完成，请稍后重试。');}
};
window.__BLADE_FORGE__={version:'1.0.0',styles:styles.map(x=>x.id),open:()=>{render();panel.classList.add('open');}};
})();