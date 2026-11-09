(()=>{'use strict';
const API=window.__AINCRAD3D__,G=API&&API.G,FX=API&&API.FX,T=API&&API.THREE;
if(!API||!G||!FX||!T)return;
const C={swordsman:0x8fdcff,dual:0xff8fc8,lancer:0x8be7ff,knight:0xffd889,berserker:0xff684f,katana:0xc5a4ff,rogue:0x8ee5a8,archer:0xc6ed8d,mage:0x9a9cff,cleric:0xffe5a4};
const styles={
 swordsman:{kind:'melee',dmg:1.0,action:'attack',name:'剑士 · 标准斩击'},
 dual:{kind:'combo',dmg:1.35,action:'attack',name:'二刀流 · 交叉连斩'},
 lancer:{kind:'pierce',dmg:1.25,action:'attack',name:'枪兵 · 直线贯穿'},
 knight:{kind:'aoe',dmg:1.0,action:'attack',name:'骑士 · 盾击震荡'},
 berserker:{kind:'aoe',dmg:1.48,action:'attack',name:'狂战士 · 重型砸击'},
 katana:{kind:'pierce',dmg:1.38,action:'attack',name:'拔刀武士 · 居合贯斩'},
 rogue:{kind:'dash',dmg:1.18,action:'attack',name:'盗贼 · 突进毒刃'},
 archer:{kind:'bow',dmg:.56,action:'bow',name:'弓手 · 远程箭击'},
 mage:{kind:'projectile',dmg:.58,action:'cast',name:'法师 · 奥术弹'},
 cleric:{kind:'aoe',dmg:.82,action:'cast',name:'牧师 · 圣光脉冲'}
};
const baseSlash=FX.slash.bind(FX);
FX.slash=function(x,y,z,dir,color){
 const p=G.player;
 if(p&&['attack','bow','cast'].includes(p.action))return;
 return baseSlash(x,y,z,dir,color);
};
function effect(id,p){
 const c=C[id]||C.swordsman,x=p.x,y=p.y,z=p.z,d=p.dir;
 if(id==='swordsman'){baseSlash(x,y,z,d,c);FX.trail(x,y,z,d,c,3.1);}
 else if(id==='dual'){baseSlash(x,y+.12,z,d-.38,c);baseSlash(x,y+.12,z,d+.38,0xffc0df);FX.trail(x,y,z,d,c,3.4);}
 else if(id==='lancer'){FX.lance(x,y+.72,z,d,c,6.8);FX.particles(x,y+1,z,new T.Color(c),12,{spread:1.4,up:.7,life:.28,size:.13});}
 else if(id==='knight'){FX.ring(x,y+.08,z,c,.18,3.1,.36);FX.shock(x,y+.1,z,c,2.8,.3);FX.particles(x,y+.2,z,new T.Color(c),12,{spread:2.1,up:1.2,life:.32});}
 else if(id==='berserker'){FX.shock(x,y+.05,z,c,4.2,.46);FX.ring(x,y+.08,z,0xffc08a,.25,4.5,.42);FX.particles(x,y+.2,z,new T.Color(c),32,{spread:3.8,up:2.8,life:.55,size:.22});}
 else if(id==='katana'){FX.trail(x,y+.1,z,d,c,5.8);FX.burst(x,y+1.1,z,new T.Color(c),1.1,.26);FX.particles(x,y+1,z,new T.Color(0xffffff),14,{spread:2,up:1.2,life:.25,size:.13});}
 else if(id==='rogue'){baseSlash(x,y+.16,z,d-.24,c);baseSlash(x,y+.16,z,d+.24,0xb9ff9d);FX.particles(x,y+.65,z,new T.Color(0x79e69b),18,{spread:2,up:1.3,life:.5,size:.15});}
 else if(id==='archer'){FX.burst(x,y+1.15,z,new T.Color(0xdfffb0),.52,.16);FX.particles(x,y+1.2,z,new T.Color(0xd8f4a0),20,{spread:1.15,up:.55,life:.32,size:.075});}
 else if(id==='mage'){FX.cast('projectile',new T.Color(c),x,y+1.2,z,d);FX.rune(x+Math.sin(d)*.4,y+1,z+Math.cos(d)*.4,c,.48,1.4);}
 else if(id==='cleric'){FX.rune(x,y+.05,z,c,.85,2.2);FX.ring(x,y+.35,z,c,.12,3,.48);FX.particles(x,y+1,z,new T.Color(c),22,{spread:2.3,up:2.6,life:.6,size:.17});}
}
let attackSerial=0,comboChain=0,lastAttackAt=0,comboClass='';
const timing={swordsman:.48,dual:.82,lancer:.62,knight:.72,berserker:.96,katana:.76,rogue:.58,archer:.68,mage:.72,cleric:.78};
function fireArrow(p){try{const world=G.world&&G.world.worldGroup;if(!world||!p)return;const group=new T.Group(),wood=new T.MeshStandardMaterial({color:0x9a7046,roughness:.62}),steel=new T.MeshStandardMaterial({color:0xcfe8e8,metalness:.82,roughness:.22,emissive:0x24434a}),feather=new T.MeshStandardMaterial({color:0xd8edb5,roughness:.8});const shaft=new T.Mesh(new T.CylinderGeometry(.025,.035,1.18,7),wood);shaft.rotation.x=Math.PI/2;shaft.position.z=.02;group.add(shaft);const tip=new T.Mesh(new T.ConeGeometry(.075,.24,6),steel);tip.rotation.x=Math.PI/2;tip.position.z=.72;group.add(tip);for(const side of [-1,1]){const fin=new T.Mesh(new T.BoxGeometry(.035,.16,.22),feather);fin.position.set(side*.045,0,-.47);fin.rotation.z=side*.3;group.add(fin);}const d=Number(p.dir)||0;group.position.set(p.x+Math.sin(d)*.7,p.y+1.2,p.z+Math.cos(d)*.7);group.rotation.y=d;world.add(group);const born=performance.now(),start=group.position.clone(),duration=300;function fly(now){const k=Math.min(1,(now-born)/duration);group.position.copy(start).add(new T.Vector3(Math.sin(d),.02,Math.cos(d)).multiplyScalar(k*10));group.position.y+=Math.sin(k*Math.PI)*.22;if(k<1)requestAnimationFrame(fly);else{world.remove(group);group.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material)o.material.dispose()});}}requestAnimationFrame(fly);}catch(e){console.warn('[archer arrow]',e)}}
const originalAttack=API.attack.bind(API);
API.attack=function(...args){
 const ok=originalAttack(...args);if(!ok)return ok;
 const p=G.player;if(!p)return ok;
 const id=API.SAVE&&API.SAVE.cls||'swordsman',s=styles[id]||styles.swordsman;if(id==='archer')fireArrow(p);
 const now=performance.now(),gap=now-lastAttackAt;
 if(comboClass!==id||gap>=1450)comboChain=0;
 comboClass=id;comboChain=Math.min(5,comboChain+1);lastAttackAt=now;
 const chainStep=comboChain-1;
 const chainBonus=id==='dual'?1+Math.min(.3,chainStep*.075):
  id==='rogue'?1+Math.min(.28,chainStep*.07):
  id==='katana'?1+Math.min(.32,chainStep*.08):
  id==='lancer'?1+Math.min(.2,chainStep*.05):
  id==='mage'?1+Math.min(.18,chainStep*.045):1;
 const heavyBonus=id==='berserker'&&comboChain>=3?1.12:
  id==='swordsman'&&comboChain===3?1.1:
  id==='knight'&&comboChain===5?1.16:
  id==='cleric'&&comboChain===5?1.1:1;
 p.pendingSkill={id:'class-basic-'+id,kind:s.kind,dmg:s.dmg*chainBonus*heavyBonus,desc:s.name,serial:++attackSerial,chain:comboChain,chainBonus,heavyBonus};
 p.comboChain=comboChain;
 p.action=s.action;p.actT=0;
 // 职业动作窗口按招式类型区分；命中时由核心伤害结算统一触发专属特效，避免起手和命中各播一次。
 const rate=API.CLS&&API.CLS.CLS_BY_ID&&API.CLS.CLS_BY_ID[id]?.stats?.rate||.55;
 p.actDur=Math.max(.32,(timing[id]||.58)*Math.max(.82,rate/.55));p.actDone=false;
 try{if(G.emit)G.emit('toast',{text:comboChain>1?s.name+' · 连击 '+comboChain:s.name,kind:'info',dur:520});}catch(e){console.warn('[class combat]',e);}
 return ok;
};
window.__CLASS_COMBAT__={version:'2.3.0',styles,effect,timing,get combo(){return comboChain},resetCombo(){comboChain=0;lastAttackAt=0;comboClass=''}};
})();