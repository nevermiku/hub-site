(()=>{'use strict';
const API=window.__AINCRAD3D__,G=API&&API.G,FX=API&&API.FX,T=API&&API.THREE;
if(!API||!G||!FX||!T)return;
const palette={swordsman:0x8fdcff,dual:0xff8fc8,lancer:0x8be7ff,knight:0xffd889,berserker:0xff684f,katana:0xc5a4ff,rogue:0x8ee5a8,archer:0xc6ed8d,mage:0x9a9cff,cleric:0xffe5a4};
const originalSlash=FX.slash.bind(FX);
let lastEffect=0;
FX.slash=function(x,y,z,dir,color){
 const p=G.player;if(!p||p.action!=='attack')return originalSlash(x,y,z,dir,color);
 const id=API.SAVE&&API.SAVE.cls||'swordsman',c=palette[id]||0x8fdcff;
 const blade=['swordsman','dual','katana','rogue'].includes(id),result=blade?originalSlash(x,y,z,dir,color):undefined;
 const now=performance.now();if(now-lastEffect<95)return result;lastEffect=now;
 try{
  if(id==='dual'){originalSlash(x,y+.12,z,dir+.36,0xffb6dc);FX.trail(x,y,z,dir,c,3.3);}
  else if(id==='lancer'){FX.lance(x,y+.85,z,dir,c,5.8);FX.particles(x,y+1,z,new T.Color(c),9,{spread:1.3,up:.6,life:.24,size:.12});}
  else if(id==='knight'){FX.ring(x,y+.08,z,c,.18,2.7,.32);FX.shock(x,y+.1,z,c,2.4,.25);}
  else if(id==='berserker'){FX.shock(x,y+.05,z,c,3.7,.38);FX.particles(x,y+.2,z,new T.Color(c),26,{spread:3.2,up:2.6,life:.48,size:.2});}
  else if(id==='katana'){FX.trail(x,y+.1,z,dir,c,5.2);FX.burst(x,y+1,z,new T.Color(c),.9,.2);}
  else if(id==='rogue'){originalSlash(x,y+.16,z,dir-.22,c);originalSlash(x,y+.16,z,dir+.22,0xb9ff9d);FX.particles(x,y+.6,z,new T.Color(0x79e69b),12,{spread:1.8,up:1.1,life:.42,size:.14});}
  else if(id==='archer'){FX.lance(x,y+1.25,z,dir,c,7.2);FX.trail(x,y+1.2,z,dir,c,4.8);}
  else if(id==='mage'){FX.cast('projectile',new T.Color(c),x,y+1.2,z,dir);FX.burst(x+Math.sin(dir)*.7,y+1.2,z+Math.cos(dir)*.7,new T.Color(c),.65,.2);}
  else if(id==='cleric'){FX.ring(x,y+.4,z,c,.12,2.2,.34);FX.particles(x,y+1,z,new T.Color(c),18,{spread:2.2,up:2.4,life:.55,size:.16});}
 }catch(e){console.warn('[class combat]',e)}
 return result;
};
window.__CLASS_COMBAT__={version:'1.1.0',classes:Object.keys(palette)};
})();