(()=>{'use strict';
const API=window.__AINCRAD3D__,T=API&&API.THREE,G=API&&API.G;
if(!API||!T||!G)return;
const mat=(color,metalness=.78,roughness=.27,emissive=0)=>new T.MeshStandardMaterial({color,metalness,roughness,emissive,emissiveIntensity:.42});
const M={gold:mat(0xd9b36d,.88,.22,0x39220b),silver:mat(0xa8c2d8,.9,.2,0x1a3448),dark:mat(0x17283b,.72,.32),cyan:mat(0x55dfff,.55,.2,0x168dbb),leather:mat(0x382b2b,.22,.72)};
const geo={sphere:new T.SphereGeometry(1,20,14),box:new T.BoxGeometry(1,1,1),cone:new T.ConeGeometry(1,1,8),torus:new T.TorusGeometry(1,.08,8,28)};
let lastPlayer=null,lastFloor=-1,decor=null,bladeOwner=null;
function mesh(parent,g,m,p,s,r){const o=new T.Mesh(g,m);o.position.set(...p);o.scale.set(...s);if(r)o.rotation.set(...r);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function plate(parent,p,s,rot){return mesh(parent,geo.box,M.silver,p,s,rot);}
function upgradeCharacter(){
 const p=G.player&&G.player.mesh;if(!p||p===lastPlayer)return;lastPlayer=p;
 const d=p.userData||{},torso=d.torso,head=d.head,arms=d.arms||{},legs=d.legs||{};
 if(torso){
  // 胸甲：分层胸板、锁骨护片、发光核心与腰封
  mesh(torso,geo.sphere,M.dark,[0,.29,.145],[.205,.25,.075]);
  mesh(torso,geo.box,M.gold,[0,.39,.19],[.28,.16,.045]);
  mesh(torso,geo.box,M.silver,[0,.27,.207],[.23,.19,.04]);
  mesh(torso,geo.sphere,M.cyan,[0,.31,.238],[.045,.055,.018]);
  mesh(torso,geo.box,M.dark,[0,.08,.16],[.34,.09,.12]);
  mesh(torso,geo.box,M.gold,[0,.07,.222],[.27,.025,.018]);
  for(let side of [-1,1]){
   mesh(torso,geo.sphere,M.gold,[side*.245,.49,.015],[.16,.105,.16],[0,0,side*.15]);
   mesh(torso,geo.cone,M.silver,[side*.32,.43,.02],[.075,.19,.075],[0,0,side*.42]);
   mesh(torso,geo.box,M.gold,[side*.16,.17,.185],[.12,.025,.035],[0,0,side*.12]);
   // 胸甲肋线与肩部发光嵌片
   for(let k=0;k<2;k++)mesh(torso,geo.box,M.silver,[side*(.09+k*.07),.28-k*.045,.23],[.018,.075,.012],[0,0,side*.2]);
   mesh(torso,geo.sphere,M.cyan,[side*.27,.51,.13],[.035,.025,.018]);
  }
 }
 for(const side of [-1,1]){
  const arm=arms[side<0?'L':'R'];
  if(arm&&arm.el){
   mesh(arm.el,geo.sphere,M.silver,[0,-.12,.01],[.105,.16,.105]);
   mesh(arm.el,geo.torus,M.gold,[0,-.2,0],[.1,.1,.1],[Math.PI/2,0,0]);
   mesh(arm.el,geo.box,M.dark,[0,-.28,.015],[.14,.1,.13]);
   mesh(arm.el,geo.box,M.gold,[0,-.29,.09],[.1,.025,.018]);
  }
  const leg=legs[side<0?'L':'R'];
  if(leg&&leg.kn){
   mesh(leg.kn,geo.sphere,M.silver,[0,-.16,.025],[.115,.17,.12]);
   mesh(leg.kn,geo.cone,M.gold,[0,-.24,.04],[.07,.12,.07],[Math.PI,0,0]);
   mesh(leg.kn,geo.box,M.dark,[0,-.37,.025],[.16,.08,.17]);
  }
 }
 if(head){
  mesh(head,geo.cone,M.gold,[0,.27,-.015],[.06,.2,.06]);
  mesh(head,geo.box,M.cyan,[0,.1,.158],[.14,.024,.018]);
  mesh(head,geo.sphere,M.gold,[0,.03,-.1],[.16,.045,.06]);
 }
 const weapon=d.weaponObj;
 if(weapon&&weapon.isObject3D&&bladeOwner!==weapon){
  bladeOwner=weapon;
  weapon.traverse(o=>{if(o.isMesh&&o.material){o.material=o.material.clone();o.material.metalness=.94;o.material.roughness=.16;o.material.envMapIntensity=1.25;}});
  const edge=mesh(weapon,geo.box,M.cyan,[0,0,.018],[.018,.78,.012],[0,0,0]);
  edge.position.x=.035;
 }
 p.userData.__mobileArmorV2=true;
}
function buildSkyline(){
 const w=G.world&&G.world.worldGroup;if(!w)return;
 if(decor&&decor.parent)decor.parent.remove(decor);
 decor=new T.Group();decor.name='aincrad-floating-capital-v2';
 const stone=mat(0x435b75,.68,.36),roof=mat(0x253e59,.72,.28),warm=mat(0xf1c879,.48,.26,0x75501b),crystal=mat(0x69dfff,.55,.18,0x1c9ec8);
 const add=(g,m,x,y,z,sx,sy,sz)=>{const o=mesh(decor,g,m,[x,y,z],[sx,sy,sz]);o.castShadow=false;o.receiveShadow=false;return o;};
 // 远景浮空城：塔楼、尖顶、环形连廊、悬浮晶柱
 for(let i=0;i<12;i++){
  const a=i*Math.PI/6,r=29+(i%3)*2.8,x=Math.cos(a)*r,z=Math.sin(a)*r,h=7+(i%4)*2.4;
  add(new T.CylinderGeometry(.8,1.35,h,10),stone,x,h/2-1,z,1,1,1);
  add(new T.ConeGeometry(1.65,3.4,8),roof,x,h+.6,z,1,1,1);
  add(new T.TorusGeometry(1.52,.065,8,28),warm,x,h*.58,z,1,1,1).rotation.x=Math.PI/2;
  add(new T.BoxGeometry(4.2,.48,4.2),stone,x,-.9,z,1,1,1);
  if(i%2===0)add(new T.OctahedronGeometry(.8,0),crystal,x*.82,3+(i%3),z*.82,1,2.3,1);
 }
 // 高空环廊与主塔，给远景增加体量层次
 const ring=add(new T.TorusGeometry(21,.18,10,120),warm,0,14,0,1,1,1);ring.rotation.x=Math.PI/2;
 const ring2=add(new T.TorusGeometry(12,.12,8,100),crystal,0,21,0,1,1,1);ring2.rotation.x=Math.PI/2;
 add(new T.CylinderGeometry(1.4,2.4,13,12),roof,0,6.5,-34,1,1,1);
 add(new T.ConeGeometry(3,7,10),warm,0,16,-34,1,1,1);
 // 浮空平台与连接桥
 for(let i=0;i<6;i++){
  const a=i*Math.PI/3,x=Math.cos(a)*18,z=Math.sin(a)*18;
  add(new T.BoxGeometry(9,.38,2.2),stone,x,1,z,1,1,1).rotation.y=-a;
  add(new T.OctahedronGeometry(1.1,0),crystal,x,-2,z,1,1.8,1);
 }
 w.add(decor);
}
function tick(){if(!G.world)return;upgradeCharacter();if(G.floor!==lastFloor){lastFloor=G.floor;buildSkyline();}}
let frames=0;function loop(){if(++frames%14===0)try{tick()}catch(e){console.warn('[AINCRAD armor]',e)}requestAnimationFrame(loop)}requestAnimationFrame(loop);
window.__AINCRAD_CHARACTER_UPGRADE__={version:'2.0.0',refresh:upgradeCharacter,rebuild:buildSkyline};
})();