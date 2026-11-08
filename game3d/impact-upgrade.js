(()=>{'use strict';
const API=window.__AINCRAD3D__,T=API&&API.THREE,G=API&&API.G,FX=API&&API.FX;
if(!API||!T||!G||!FX)return;
const mat=(c,m=.82,r=.24,e=0)=>new T.MeshStandardMaterial({color:c,metalness:m,roughness:r,emissive:e,emissiveIntensity:.55});
const M={steel:mat(0xb8d0df,.94,.18,0x20384a),dark:mat(0x172638,.76,.3),gold:mat(0xe3b866,.88,.2,0x57330c),blue:mat(0x58dfff,.62,.17,0x147ba5)};
const geo={sphere:new T.SphereGeometry(1,24,16),box:new T.BoxGeometry(1,1,1),cone:new T.ConeGeometry(1,1,8)};
let owner=null;
function add(p,g,m,pos,scale,rot){const o=new T.Mesh(g,m);o.position.set(...pos);o.scale.set(...scale);if(rot)o.rotation.set(...rot);o.castShadow=true;o.receiveShadow=true;p.add(o);return o;}
function armor(){
 const p=G.player&&G.player.mesh;if(!p||p===owner)return;owner=p;
 const d=p.userData||{},torso=d.torso,head=d.head,arms=d.arms||{},legs=d.legs||{};
 if(torso){
  add(torso,geo.sphere,M.dark,[0,.29,.16],[.245,.275,.095]);
  add(torso,geo.box,M.steel,[0,.385,.205],[.36,.245,.075]);
  add(torso,geo.cone,M.gold,[0,.405,.254],[.16,.18,.035],[0,0,Math.PI]);
  add(torso,geo.sphere,M.blue,[0,.32,.298],[.057,.07,.022]);
  add(torso,geo.box,M.dark,[0,.16,.22],[.3,.105,.06]);
  for(let row=0;row<3;row++)add(torso,geo.box,row===1?M.gold:M.steel,[0,.105-row*.055,.252],[.26-row*.025,.027,.025]);
  for(const side of [-1,1]){
   add(torso,geo.sphere,M.gold,[side*.27,.49,.04],[.19,.135,.19],[0,0,side*.18]);
   add(torso,geo.box,M.steel,[side*.29,.48,.15],[.22,.13,.13],[0,0,side*.18]);
   add(torso,geo.cone,M.gold,[side*.36,.39,.14],[.085,.23,.085],[0,0,side*.48]);
   add(torso,geo.cone,M.steel,[side*.22,.59,.04],[.055,.19,.055],[0,0,side*.62]);
   add(torso,geo.sphere,M.blue,[side*.29,.49,.225],[.035,.035,.022]);
  }
  add(torso,geo.box,M.gold,[0,.015,.18],[.34,.075,.12]);
  add(torso,geo.box,M.dark,[0,-.045,.17],[.38,.065,.12]);
  add(torso,geo.sphere,M.gold,[0,.015,.25],[.075,.07,.035]);
 }
 if(head){
  add(head,geo.sphere,M.steel,[0,.105,-.005],[.17,.19,.16]);
  add(head,geo.box,M.dark,[0,.035,.135],[.245,.105,.065]);
  add(head,geo.box,M.steel,[0,.035,.174],[.22,.055,.035]);
  add(head,geo.box,M.blue,[0,.09,.195],[.17,.018,.012]);
  add(head,geo.cone,M.gold,[0,.29,-.015],[.065,.2,.065]);
  for(const side of [-1,1])add(head,geo.cone,M.gold,[side*.135,.14,.02],[.035,.13,.035],[0,0,side*.55]);
 }
 for(const side of [-1,1]){
  const arm=arms[side<0?'L':'R'];
  if(arm&&arm.sh){add(arm.sh,geo.sphere,M.steel,[0,.015,.015],[.135,.13,.14]);add(arm.sh,geo.cone,M.gold,[0,.11,-.005],[.065,.17,.065],[0,0,side*.15]);}
  if(arm&&arm.el){add(arm.el,geo.box,M.steel,[0,-.12,.045],[.17,.2,.14]);add(arm.el,geo.box,M.gold,[0,-.2,.105],[.18,.045,.035]);add(arm.el,geo.sphere,M.blue,[0,-.12,.12],[.03,.035,.02]);}
  const leg=legs[side<0?'L':'R'];
  if(leg&&leg.hp){add(leg.hp,geo.box,M.dark,[0,-.04,.04],[.25,.22,.16]);add(leg.hp,geo.box,M.steel,[0,-.11,.11],[.23,.13,.08]);add(leg.hp,geo.cone,M.gold,[side*.08,-.15,.12],[.045,.11,.045],[Math.PI,0,side*.2]);}
  if(leg&&leg.kn){add(leg.kn,geo.box,M.steel,[0,-.14,.045],[.19,.18,.16]);add(leg.kn,geo.box,M.gold,[0,-.22,.12],[.19,.035,.03]);}
 }
 const weapon=d.weaponObj;
 if(weapon&&weapon.isObject3D&&!weapon.userData.__impactBlade){
  weapon.userData.__impactBlade=true;
  const visual=API.SAVE?.equip?.weapon?.visual||'sword',width=visual==='greatsword'?.17:visual==='dagger'?.075:.115,len=visual==='greatsword'?1.48:visual==='dagger'?.56:1.13;
  const shape=new T.Shape();shape.moveTo(-width*.48,0);shape.lineTo(-width*.58,len*.66);shape.lineTo(-width*.28,len*.9);shape.lineTo(0,len);shape.lineTo(width*.28,len*.9);shape.lineTo(width*.58,len*.66);shape.lineTo(width*.48,0);shape.closePath();
  const blade=new T.Mesh(new T.ExtrudeGeometry(shape,{depth:.045,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.012}),M.steel);blade.position.set(0,.04,.045);blade.castShadow=true;weapon.add(blade);
  add(weapon,geo.box,M.gold,[0,.045,.07],[visual==='greatsword'?.43:.31,.07,.11]);
  add(weapon,geo.sphere,M.blue,[0,len*.52,.09],[.035,.07,.025]);
  for(let k=0;k<3;k++)add(weapon,geo.box,M.gold,[0,.16+k*.12,.075],[width*.9,.018,.014]);
 }
}
const originalImpact=FX.impact.bind(FX);
FX.impact=function(x,y,z,color,critical){
 originalImpact(x,y,z,color,critical);
 try{const tint=critical?0xffcf5d:(typeof color==='number'?color:(color&&color.getHex?color.getHex():0x9edfff));this.shock(x,y-.8,z,tint,critical?3.1:2.1,critical?.34:.25);this.particles(x,y,z,new T.Color(tint),critical?30:18,{spread:critical?4.2:2.8,up:critical?4.2:2.7,life:.48,size:critical?.22:.16});if(critical)this.burst(x,y+.25,z,new T.Color(0xffd47c),1.25,.26);}catch(e){console.warn('[impact fx]',e)}
};
const originalAttack=API.attack.bind(API);
API.attack=function(...args){const result=originalAttack(...args);if(!result)return result;const p=G.player;if(p&&G.world&&p.mesh){const v=API.SAVE?.equip?.weapon?.visual||'sword',color=v==='greatsword'?0xffb85c:v==='dagger'?0xff72c8:0x8feaff;try{FX.slash(p.x,p.y,p.z,p.dir,color);FX.trail(p.x,p.y,p.z,p.dir,color,v==='greatsword'?3.8:2.8)}catch(e){}}return result};
let prevFloor=-1,frames=0;function tick(){if(G.floor!==prevFloor){prevFloor=G.floor;owner=null;}armor();}
function loop(){if(++frames%10===0)try{tick()}catch(e){console.warn('[character impact]',e)}requestAnimationFrame(loop)}requestAnimationFrame(loop);
window.__SWORD_IMPACT_V3__={version:'3.0.0',refresh:armor};
})();