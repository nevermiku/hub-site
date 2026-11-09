(()=>{'use strict';
const API=window.__AINCRAD3D__,T=API&&API.THREE,G=API&&API.G;
if(!API||!T||!G)return;
const mat=(color,metalness=.78,roughness=.27,emissive=0)=>new T.MeshStandardMaterial({color,metalness,roughness,emissive,emissiveIntensity:.42});
const M={gold:mat(0xd9b36d,.88,.22,0x39220b),silver:mat(0xa8c2d8,.9,.2,0x1a3448),dark:mat(0x17283b,.72,.32),cyan:mat(0x55dfff,.55,.2,0x168dbb),leather:mat(0x382b2b,.22,.72),blade:mat(0xd9e7f2,.96,.16,0x243e58),edge:mat(0x8ee8ff,.9,.18,0x176c8c)};
const geo={sphere:new T.SphereGeometry(1,20,14),box:new T.BoxGeometry(1,1,1),cone:new T.ConeGeometry(1,1,8),torus:new T.TorusGeometry(1,.08,8,28)};
let lastPlayer=null,lastClass=null,lastFloor=-1,decor=null,bladeOwner=null,classRig=null;
function mesh(parent,g,m,p,s,r){const o=new T.Mesh(g,m);o.position.set(...p);o.scale.set(...s);if(r)o.rotation.set(...r);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function plate(parent,p,s,rot){return mesh(parent,geo.box,M.silver,p,s,rot);}
function syncDualOffhand(p,cls){
 const host=p.userData&&p.userData.arms&&p.userData.arms.L&&p.userData.arms.L.el;
 if(!host)return false;
 const old=host.userData.__dualOffhand;
 if(old){host.remove(old);delete host.userData.__dualOffhand;}
 if(cls!=='dual')return true;
 const hand=new T.Group();hand.name='dual-offhand-blade';
 hand.position.set(0,-.34,.1);hand.rotation.set(-.22,0,-.3);host.add(hand);
 const steel=M.blade,edge=M.edge,gold=M.gold;
 mesh(hand,geo.box,M.dark,[0,-.12,0],[.055,.27,.055]);
 mesh(hand,geo.box,gold,[0,-.27,0],[.09,.055,.08]);
 mesh(hand,geo.box,gold,[0,.015,0],[.24,.045,.075]);
 mesh(hand,geo.box,steel,[0,.36,0],[.085,.68,.026]);
 mesh(hand,geo.box,edge,[-.044,.36,.016],[.012,.58,.008]);
 mesh(hand,geo.box,edge,[.044,.36,.016],[.012,.58,.008]);
 mesh(hand,geo.cone,steel,[0,.73,0],[.055,.13,.025]);
 host.userData.__dualOffhand=hand;
 return true;
}
function torsoRef(p){return p.userData&&p.userData.torso;}
function applyClassRig(p,cls,torso){if(!torso)return;const prior=torso.userData.__classRig;if(prior){torso.remove(prior);delete torso.userData.__classRig;}const g=new T.Group();g.name='class-silhouette-'+cls;const add=(geo0,ma,pos,scale,rot)=>mesh(g,geo0,ma,pos,scale,rot);const gold=M.gold,steel=M.silver,glow=M.cyan;
 if(cls==='lancer'){add(geo.box,steel,[0,.5,.02],[.12,.58,.08]);add(geo.cone,gold,[0,.83,.02],[.11,.2,.11]);}
 else if(cls==='knight'){add(geo.box,steel,[0,.15,.02],[.5,.24,.12]);add(geo.box,gold,[0,.3,.09],[.44,.05,.035]);}
 else if(cls==='berserker'){for(const s of [-1,1]){add(geo.cone,gold,[s*.28,.42,0],[.13,.38,.13],[0,0,s*.55]);add(geo.box,M.dark,[s*.23,.1,.04],[.18,.2,.16]);}}
 else if(cls==='katana'){add(geo.box,glow,[0,.47,.08],[.035,.64,.025]);add(geo.box,gold,[0,.13,.1],[.22,.035,.04]);}
 else if(cls==='rogue'){for(const s of [-1,1])add(geo.cone,M.dark,[s*.27,.48,0],[.11,.3,.12],[0,0,s*.45]);add(geo.sphere,glow,[0,.38,.1],[.08,.08,.035]);}
 else if(cls==='archer'){add(geo.torus,gold,[0,.32,.02],[.25,.38,.06],[0,0,.2]);add(geo.box,steel,[0,.32,.08],[.025,.72,.025]);}
 else if(cls==='mage'){add(geo.cone,M.dark,[0,.38,0],[.32,.43,.24]);add(geo.sphere,glow,[0,.43,.19],[.09,.09,.04]);}
 else if(cls==='cleric'){add(geo.torus,gold,[0,.3,.03],[.26,.26,.05],[Math.PI/2,0,0]);add(geo.box,glow,[0,.3,.07],[.06,.42,.035]);}
 else if(cls==='dual'){for(const s of [-1,1])add(geo.box,steel,[s*.22,.34,.02],[.045,.55,.035],[0,0,s*.15]);}
 else {add(geo.box,gold,[0,.48,.03],[.32,.055,.04]);}
 // 第二层职业专属结构：胸腹分片、腰甲、背部挂件，不再只靠肩甲区分职业。
 const waist=cls==='berserker'?M.gold:cls==='mage'?M.cyan:cls==='rogue'?M.dark:M.silver;
 add(geo.box,waist,[0,-.08,.115],[.34,.105,.13]);
 add(geo.box,M.dark,[0,-.17,.13],[.28,.055,.12]);
 for(let side of [-1,1]){
  add(geo.box,cls==='knight'?M.gold:steel,[side*.19,-.16,.12],[.13,.22,.065],[0,0,side*.22]);
  add(geo.box,M.dark,[side*.105,.05,.19],[.065,.13,.025],[0,0,side*.12]);
  add(geo.sphere,glow,[side*.12,.02,.22],[.018,.018,.012]);
 }
 if(cls==='archer'||cls==='rogue'||cls==='dual'){
  for(let side of [-1,1]){add(geo.box,M.leather,[side*.24,.05,-.17],[.12,.34,.055],[0,0,side*.18]);add(geo.cone,steel,[side*.27,-.13,-.19],[.045,.18,.045],[0,0,side*.35]);}
 }else if(cls==='knight'||cls==='lancer'||cls==='berserker'){
  for(let side of [-1,1])add(geo.box,cls==='berserker'?M.gold:M.silver,[side*.24,-.04,-.12],[.16,.27,.09],[0,0,side*.2]);
 }
 // 胸口铆钉与腹甲刻线，形成可读的实体分层。
 for(let side of [-1,1])for(let row=0;row<2;row++)add(geo.sphere,gold,[side*(.18-row*.045),.19-row*.055,.224],[.018,.018,.012]);
 // 职业肩甲与背部轮廓：强化不同职业的体块辨识度。
 const shoulderMat=cls==='berserker'?M.gold:cls==='mage'?M.cyan:M.silver;
 for(const side of [-1,1]){add(geo.sphere,shoulderMat,[side*.29,.52,-.015],[.17,cls==='knight'?.13:.09,.14],[0,0,side*.18]);if(['lancer','katana','rogue'].includes(cls))add(geo.cone,steel,[side*.34,.57,-.02],[.055,.2,.055],[0,0,side*.45]);}
 if(['mage','cleric'].includes(cls)){add(geo.cone,M.dark,[0,.04,-.16],[.29,.43,.08],[Math.PI,0,0]);add(geo.sphere,glow,[0,.14,-.24],[.07,.12,.035]);}
 if(cls==='berserker'||cls==='knight'){add(geo.box,M.dark,[0,-.02,-.14],[.42,.22,.12]);for(let k=0;k<3;k++)add(geo.box,gold,[0,-.03-k*.055,-.21],[.34-k*.04,.018,.025]);}
 // 职业背部结构：披风、箭袋、法器背架与重甲背板采用不同轮廓。
 const backMat=cls==='mage'||cls==='cleric'?M.cyan:cls==='berserker'?M.gold:cls==='rogue'?M.dark:M.silver;
 if(['knight','lancer','swordsman','katana','berserker'].includes(cls)){add(geo.box,M.dark,[0,.12,-.205],[.39,.43,.075],[.12,0,0]);add(geo.box,backMat,[0,.2,-.255],[.31,.34,.035],[.12,0,0]);for(let side of [-1,1])add(geo.box,M.gold,[side*.17,.16,-.275],[.035,.34,.025],[.12,0,side*.12]);}
 else if(cls==='archer'){add(geo.box,M.leather,[0,.18,-.2],[.3,.5,.075],[.08,0,0]);for(let k=0;k<5;k++)add(geo.cone,M.silver,[-.12+k*.06,.46,-.25],[.018,.2,.018],[0,0,(k-2)*.07]);}
 else if(cls==='mage'||cls==='cleric'){add(geo.torus,backMat,[0,.22,-.22],[.28,.38,.06],[Math.PI/2,0,0]);add(geo.sphere,glow,[0,.22,-.28],[.12,.16,.08]);for(let side of [-1,1])add(geo.box,M.dark,[side*.25,.06,-.2],[.09,.34,.07],[0,0,side*.16]);}
 else if(cls==='rogue'||cls==='dual'){for(let side of [-1,1]){add(geo.box,M.dark,[side*.18,.16,-.22],[.13,.42,.055],[0,0,side*.24]);add(geo.cone,M.silver,[side*.2,-.12,-.24],[.045,.2,.045],[0,0,side*.18]);}}
 for(let side of [-1,1]){add(geo.box,backMat,[side*.31,.46,.02],[.2,.09,.18],[0,0,side*.18]);add(geo.sphere,M.gold,[side*.31,.47,.115],[.035,.035,.025]);}
 torso.add(g);torso.userData.__classRig=g;}
function upgradeCharacter(){
 const p=G.player&&G.player.mesh;if(!p)return;
 const cls=API.SAVE&&API.SAVE.cls||'swordsman',newPlayer=p!==lastPlayer;
 if(!newPlayer&&cls===lastClass){
  if(cls==='dual'&&!(p.userData&&p.userData.arms&&p.userData.arms.L&&p.userData.arms.L.el&&p.userData.arms.L.el.userData.__dualOffhand))syncDualOffhand(p,cls);
  return;
 }
 if(!newPlayer){if(syncDualOffhand(p,cls)!==false){lastClass=cls;applyClassRig(p,cls,torsoRef(p));}return;}
 lastPlayer=p;lastClass=cls;
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
  if(!head.userData.__armorHelmetV3){mesh(head,geo.box,M.dark,[0,.19,.015],[.31,.12,.25]);mesh(head,geo.box,M.silver,[0,.145,.135],[.25,.045,.035]);mesh(head,geo.box,M.gold,[0,.105,.155],[.045,.13,.035]);for(const side of [-1,1]){mesh(head,geo.box,M.silver,[side*.145,.04,.04],[.055,.2,.16],[0,0,side*.12]);mesh(head,geo.cone,M.gold,[side*.17,.19,-.015],[.045,.17,.045],[0,0,side*.35]);}head.userData.__armorHelmetV3=true;}
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
 // 双刀副手随职业切换同步；切回其他职业时自动卸下副手。
 syncDualOffhand(p,cls);
 applyClassRig(p,cls,torso);
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
 // 中景城郭：分层屋顶、窗格与横向连桥，避免远景只有孤立塔柱。
 for(let i=0;i<18;i++){
  const a=i*Math.PI/9,r=23+(i%3)*2,x=Math.cos(a)*r,z=Math.sin(a)*r,h=2.8+(i%5)*.72;
  add(new T.BoxGeometry(3.8,h,3.2),stone,x,h/2-1.1,z,1,1,1);
  add(new T.ConeGeometry(2.55,1.65,4),roof,x,h+.05,z,1,1,1).rotation.y=Math.PI/4;
  for(let f=0;f<3;f++)for(let side of [-1,1]){
   const wx=x+side*.72,wy=.05+f*.72;
   add(new T.BoxGeometry(.22,.34,.055),warm,wx,wy,z-1.63,1,1,1);
  }
 }
 // 主入口：双层拱门、门楣浮雕与两侧悬挂晶灯。
 for(let side of [-1,1]){
  add(new T.BoxGeometry(.72,6.2,1.1),stone,side*4,2.1,9,1,1,1);
  add(new T.BoxGeometry(1.05,.42,1.35),warm,side*4,5.25,9,1,1,1);
  add(new T.OctahedronGeometry(.48,1),crystal,side*4,4.25,8.3,1,1.7,1);
 }
 add(new T.BoxGeometry(8.8,.8,1.2),stone,0,5.4,9,1,1,1);
 add(new T.TorusGeometry(2.45,.16,10,48),warm,0,3.2,9.1,1,1,1).rotation.y=Math.PI/2;
 // 浮岛间的高架连廊增加空间纵深。
 for(let i=0;i<4;i++){
  const a=i*Math.PI/2,x=Math.cos(a)*25,z=Math.sin(a)*25;
  const bridge=add(new T.BoxGeometry(13,.28,1.35),stone,x,2.4,z,1,1,1);bridge.rotation.y=-a;
  const rail=add(new T.BoxGeometry(13,.12,.12),warm,x,3.05,z,1,1,1);rail.rotation.y=-a;
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
window.__AINCRAD_CHARACTER_UPGRADE__={version:'3.0.0',refresh:upgradeCharacter,rebuild:buildSkyline};
})();