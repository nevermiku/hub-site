(()=>{'use strict';
const API=window.__AINCRAD3D__,T=API&&API.THREE,G=API&&API.G;
if(!API||!T||!G)return;
const mat=(color,metalness=.72,roughness=.3,emissive=0)=>new T.MeshStandardMaterial({color,metalness,roughness,emissive,emissiveIntensity:.32});
const gold=mat(0xd8ad63,.82,.24,0x3a2108),steel=mat(0x9db9d0,.86,.25,0x142a3c),dark=mat(0x182838,.7,.36),glow=mat(0x55d9ff,.45,.2,0x1689bb);
const sphere=new T.SphereGeometry(1,16,12),box=new T.BoxGeometry(1,1,1),cone=new T.ConeGeometry(1,1,8);
let lastPlayer=null,lastFloor=-1,decor=null;
function addMesh(parent,geo,material,pos,scale,rot){const m=new T.Mesh(geo,material);m.position.set(...pos);m.scale.set(...scale);if(rot)m.rotation.set(...rot);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function upgradeCharacter(){
 const p=G.player&&G.player.mesh;if(!p||p===lastPlayer)return;lastPlayer=p;
 const torso=p.userData&&p.userData.torso,head=p.userData&&p.userData.head;
 if(torso){
  const crest=addMesh(torso,cone,gold,[0,.62,.01],[.055,.23,.055],[0,0,0]);
  crest.rotation.z=Math.PI;
  for(const side of [-1,1]){
   const shoulder=addMesh(torso,sphere,steel,[side*.255,.48,.005],[.145,.105,.15],[0,0,side*.12]);
   addMesh(torso,cone,gold,[side*.31,.43,.01],[.07,.17,.07],[0,0,side*.45]);
   addMesh(torso,box,dark,[side*.19,.19,.145],[.115,.09,.035],[0,0,side*.08]);
   addMesh(torso,box,gold,[side*.19,.19,.17],[.055,.018,.014],[0,0,side*.08]);
  }
  addMesh(torso,sphere,gold,[0,.31,.17],[.09,.11,.045]);
  addMesh(torso,sphere,glow,[0,.31,.207],[.035,.045,.018]);
  for(let y=0;y<3;y++)addMesh(torso,box,steel,[0,.12-y*.075,.145],[.19,.018,.022]);
 }
 if(head){
  addMesh(head,cone,gold,[0,.31,-.01],[.055,.2,.055],[0,0,0]);
  addMesh(head,box,glow,[0,.1,.15],[.13,.025,.018]);
 }
 p.userData.__mobileArmorV1=true;
}
function buildSkyline(){
 const w=G.world&&G.world.worldGroup;if(!w)return;
 if(decor&&decor.parent)decor.parent.remove(decor);
 decor=new T.Group();decor.name='aincrad-cinematic-skyline';
 const towerMat=mat(0x536b82,.66,.38),lit=mat(0xf0c77c,.55,.3,0x65400e);
 const add=(geo,m,x,y,z,sx,sy,sz)=>{const o=new T.Mesh(geo,m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.castShadow=false;o.receiveShadow=false;decor.add(o);return o;};
 for(let i=0;i<8;i++){
  const a=i*Math.PI/4,r=27+(i%3)*3,x=Math.cos(a)*r,z=Math.sin(a)*r,h=7+(i%4)*2;
  add(new T.CylinderGeometry(.75,1.25,h,8),towerMat,x,h/2-1,z,1,1,1);
  add(new T.ConeGeometry(1.45,3.6,8),lit,x,h+0.7,z,1,1,1);
  add(new T.TorusGeometry(1.55,.07,8,24),lit,x,h*.62,z,1,1,1).rotation.x=Math.PI/2;
  add(new T.BoxGeometry(3.8,.42,3.8),towerMat,x,-.8,z,1,1,1);
 }
 const ring=add(new T.TorusGeometry(15,.09,8,96),lit,0,19,0,1,1,1);ring.rotation.x=Math.PI/2;
 w.add(decor);
}
function tick(){
 if(!G.world)return;
 upgradeCharacter();
 if(G.floor!==lastFloor){lastFloor=G.floor;buildSkyline();}
}
let frames=0;function loop(){if(++frames%18===0)tick();requestAnimationFrame(loop)}requestAnimationFrame(loop);
window.__AINCRAD_CHARACTER_UPGRADE__={version:'1.0.0',refresh:upgradeCharacter};
})();