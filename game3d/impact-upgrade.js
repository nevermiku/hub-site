(()=>{'use strict';
const API=window.__AINCRAD3D__,T=API&&API.THREE,G=API&&API.G,FX=API&&API.FX;
if(!API||!T||!G||!FX)return;
const originalImpact=FX.impact.bind(FX);
FX.impact=function(x,y,z,color,critical){
 originalImpact(x,y,z,color,critical);
 try{
  const tint=critical?0xffcf5d:(typeof color==='number'?color:(color&&color.getHex?color.getHex():0x9edfff));
  this.shock(x,y-.8,z,tint,critical?3.1:2.1,critical?.34:.25);
  this.particles(x,y,z,new T.Color(tint),critical?30:18,{spread:critical?4.2:2.8,up:critical?4.2:2.7,life:.48,size:critical?.22:.16});
  if(critical)this.burst(x,y+.25,z,new T.Color(0xffd47c),1.25,.26);
 }catch(e){console.warn('[impact fx]',e);}
};
// 人物护甲只由 character-upgrade.js 构建，避免两个增强脚本重复叠甲。
window.__SWORD_IMPACT_V4__={version:'4.0.0',refresh:()=>!!(G.player&&G.player.mesh)};
})();