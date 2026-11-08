(()=>{'use strict';
const api=window.__AINCRAD3D__,T=api&&api.THREE,G=api&&api.G;if(!G||!T||!G.on||!G.world)return;
let old=null;
const mat=(color,rough=.82,metal=0,emissive=0)=>new T.MeshStandardMaterial({color,roughness:rough,metalness:metal,emissive,flatShading:true});
const M={bark:mat(0x55402d),leaf:mat(0x345b43),leaf2:mat(0x52714b),stone:mat(0x777c80),dark:mat(0x3b414b),gold:mat(0xb08a52,.5,.65),ice:mat(0x78c9e8,.24,.35,0x164e70),crystal:mat(0x7a74d6,.22,.42,0x28205b),lava:mat(0x8b3c2b,.48,.2,0x5d1608),snow:mat(0xcbd8e1,.94),sand:mat(0xb08a59),ruin:mat(0x66645c)};
const box=(g,m,x,y,z,sx,sy,sz)=>{const o=new T.Mesh(g,m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.castShadow=true;o.receiveShadow=true;gGroup.add(o);return o;};
let gGroup;
function build(floor,biome){
const world=G.world;if(!world||!world.worldGroup)return;
if(old){world.worldGroup.remove(old);old.traverse(o=>{if(o.geometry)o.geometry.dispose();});old=null;}
gGroup=old=new T.Group();old.name='aincrad-biome-landmarks';
const id=String(world.biome&&world.biome.id||'meadow'),seed=((floor*2654435761)^(id.length*2246822519))>>>0;
let state=seed||1;const rnd=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
const height=(x,z)=>world.h?world.h(x,z):0;
function tree(x,z){const y=height(x,z),h=3+rnd()*3;box(new T.CylinderGeometry(.12,.2,h*.42,6),M.bark,x,y+h*.21,z,1,1,1);for(let k=0;k<3;k++){const c=new T.Mesh(new T.ConeGeometry(1.05-k*.18,1.8,7),k%2?M.leaf:M.leaf2);c.position.set(x,y+h*.35+k*.72,z);c.scale.set(1,1+rnd()*.2,1);c.castShadow=true;gGroup.add(c);}}
function pillar(x,z){const y=height(x,z),h=3+rnd()*4;box(new T.CylinderGeometry(.62,.78,.35,8),M.dark,x,y+.17,z,1,1,1);box(new T.CylinderGeometry(.38,.48,h,8),M.ruin,x,y+.35+h/2,z,1,1,1);box(new T.CylinderGeometry(.66,.66,.28,8),M.gold,x,y+h+.5,z,1,1,1);}
function crystal(x,z){const y=height(x,z),h=2.5+rnd()*4;const c=new T.Mesh(new T.OctahedronGeometry(.8,0),M.crystal);c.position.set(x,y+h*.45,z);c.scale.set(.65,h,.65);c.rotation.z=(rnd()-.5)*.28;c.castShadow=true;gGroup.add(c);const c2=new T.Mesh(new T.OctahedronGeometry(.42,0),M.ice);c2.position.set(x+.65,y+h*.28,z+.25);c2.scale.set(.55,h*.58,.55);c2.castShadow=true;gGroup.add(c2);}
function rock(x,z){const y=height(x,z),m=id==='snow'||id==='ice'?M.snow:M.stone;const o=new T.Mesh(new T.DodecahedronGeometry(1,0),m);o.position.set(x,y+.65,z);o.scale.set(.8+rnd()*1.5,.55+rnd()*.7,.8+rnd()*1.3);o.rotation.set(rnd(),rnd(),rnd());o.castShadow=true;gGroup.add(o);}
function arch(x,z){const y=height(x,z);for(const side of [-1,1]){box(new T.BoxGeometry(.72,4.2,.82),M.ruin,x+side*2,y+2.1,z,1,1,1);box(new T.BoxGeometry(1.05,.45,1.1),M.gold,x+side*2,y+4.35,z,1,1,1);}box(new T.BoxGeometry(4.7,.75,1),M.ruin,x,y+4.45,z,1,1,1);}
for(let i=0;i<30;i++){const a=(i/30)*Math.PI*2+(rnd()-.5)*.18,r=101+rnd()*25,x=Math.cos(a)*r,z=Math.sin(a)*r;
if(id==='forest'||id==='meadow'||id==='bamboo'){tree(x,z);if(i%3===0)rock(x+2,z-1);}
else if(id==='crystal'||id==='cave'){crystal(x,z);if(i%4===0)rock(x+2,z+2);}
else if(id==='ruins'||id==='grave'||id==='sky'){if(i%3===0)arch(x,z);else pillar(x,z);}
else if(id==='lava'||id==='ash'){const y=height(x,z),c=new T.Mesh(new T.ConeGeometry(1.2+rnd(),4+rnd()*4,6),M.lava);c.position.set(x,y+2,z);c.castShadow=true;gGroup.add(c);if(i%2===0)rock(x+2,z-1);}
else if(id==='ocean'){rock(x,z);const c=new T.Mesh(new T.ConeGeometry(.5,3.5,6),M.ice);c.position.set(x,height(x,z)+1.6,z);gGroup.add(c);}
else if(id==='snow'||id==='ice'){rock(x,z);if(i%2===0)crystal(x+2,z-1);}
else{pillar(x,z);}
}
world.worldGroup.add(old);
}
G.on('floor',e=>{const f=Number(e&&e.f||G.floor||1),b=e&&e.biome||'';setTimeout(()=>build(f,b),0);});
if(G.world.biome)build(Number(G.floor||1),G.world.biome.id);
window.__AINCRAD_LANDSCAPE__={version:'1.0.0',refresh:()=>build(Number(G.floor||1),G.world.biome&&G.world.biome.id)};
})();