(()=>{'use strict';
const API=window.__AINCRAD3D__,G=API&&API.G,FX=API&&API.FX,T=API&&API.THREE;
if(!API||!G||!FX||!T)return;
const palette={swordsman:0x8fdcff,dual:0xff8fc8,lancer:0x8be7ff,knight:0xffd889,berserker:0xff684f,katana:0xc5a4ff,rogue:0x8ee5a8,archer:0xc6ed8d,mage:0x9a9cff,cleric:0xffe5a4};
const label={swordsman:'剑士 · 斜向剑弧',dual:'二刀流 · 双刃交叉',lancer:'枪兵 · 直线贯穿',knight:'重装骑士 · 盾击震荡',berserker:'狂战士 · 重击冲击波',katana:'拔刀武士 · 居合弧光',rogue:'盗贼 · 毒刃残影',archer:'弓手 · 远程箭矢',mage:'法师 · 奥术弹',cleric:'牧师 · 圣光脉冲'};
const original=API.attack.bind(API);let last=-1;
function attack(...args){
 const ok=original(...args);if(!ok)return ok;
 const p=G.player;if(!p||!G.world)return ok;
 const id=API.SAVE&&API.SAVE.cls||'swordsman',c=palette[id]||0x8fdcff;
 try{
  if(id==='dual'){FX.slash(p.x,p.y+.15,p.z,p.dir-.34,c);FX.slash(p.x,p.y+.15,p.z,p.dir+.34,0xffb6dc);FX.trail(p.x,p.y,p.z,p.dir,c,3.3);}
  else if(id==='lancer'){FX.lance(p.x,p.y+.85,p.z,p.dir,c,5.8);FX.particles(p.x,p.y+1,p.z,new T.Color(c),9,{spread:1.3,up:.6,life:.24,size:.12});}
  else if(id==='knight'){FX.ring(p.x,p.y+.08,p.z,c,.18,2.7,.32);FX.shock(p.x,p.y+.1,p.z,c,2.4,.25);}
  else if(id==='berserker'){FX.shock(p.x,p.y+.05,p.z,c,3.7,.38);FX.particles(p.x,p.y+.2,p.z,new T.Color(c),26,{spread:3.2,up:2.6,life:.48,size:.2});}
  else if(id==='katana'){FX.slash(p.x,p.y+.2,p.z,p.dir,c);FX.trail(p.x,p.y+.1,p.z,p.dir,c,5.2);FX.burst(p.x,p.y+1,p.z,new T.Color(c),.9,.2);}
  else if(id==='rogue'){FX.slash(p.x,p.y+.2,p.z,p.dir-.18,c);FX.slash(p.x,p.y+.2,p.z,p.dir+.18,0xb9ff9d);FX.particles(p.x,p.y+.6,p.z,new T.Color(0x79e69b),12,{spread:1.8,up:1.1,life:.42,size:.14});}
  else if(id==='archer'){FX.lance(p.x,p.y+1.25,p.z,p.dir,c,7.2);FX.trail(p.x,p.y+1.2,p.z,p.dir,c,4.8);}
  else if(id==='mage'){FX.cast('projectile',new T.Color(c),p.x,p.y+1.2,p.z,p.dir);FX.burst(p.x+Math.sin(p.dir)*.7,p.y+1.2,p.z+Math.cos(p.dir)*.7,new T.Color(c),.65,.2);}
  else if(id==='cleric'){FX.ring(p.x,p.y+.4,p.z,c,.12,2.2,.34);FX.particles(p.x,p.y+1,p.z,new T.Color(c),18,{spread:2.2,up:2.4,life:.55,size:.16});}
  else{FX.slash(p.x,p.y,p.z,p.dir,c);FX.trail(p.x,p.y,p.z,p.dir,c,3.1);}
  const now=performance.now();if(now-last>1200){last=now;G.emit&&G.emit('toast',{text:label[id]||'职业专属攻击',kind:'info',dur:850});}
 }catch(e){console.warn('[class combat]',e)}
 return ok;
}
API.attack=attack;
window.__CLASS_COMBAT__={version:'1.0.0',attack};
})();