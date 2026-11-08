(()=>{'use strict';
const api=window.__ECHO2D__;
const stages=[
 {id:1,name:'第一声折光',desc:'单目标与基础镜面：听见第一声回响。',mechanic:'单目标 · 镜面折射',startY:1,segs:[[1,4],[2,3],[1,4]],nodes:2,tuners:0},
 {id:2,name:'双门之间',desc:'三枚记忆依次点亮，门会锁住错误的顺序。',mechanic:'三节点 · 连锁门',startY:1,segs:[[1,3],[2,3],[1,3],[0,2],[1,2]],nodes:3,tuners:1},
 {id:3,name:'迟到半拍',desc:'调频器改变回声颜色；延迟阵列会让回声停留，必须把握抵达顺序。',mechanic:'频率切换 · 延迟回声',startY:1,segs:[[1,4],[2,2],[1,3],[2,3],[1,1]],nodes:3,tuners:1,delays:1,decoys:1},
 {id:4,name:'镜中双生',desc:'多面镜与多频调谐交错，虚假的记忆标记会诱导你偏离路线。',mechanic:'多镜联动 · 真假线索',startY:2,segs:[[1,3],[0,1],[1,3],[2,3],[1,2]],nodes:4,tuners:2,delays:1,decoys:2},
 {id:5,name:'潮汐回返',desc:'折返路线穿过两处延迟阵列，频率必须在正确节点前完成切换。',mechanic:'折返路径 · 双频校准',startY:1,segs:[[1,2],[2,4],[1,3],[0,3],[1,3],[2,1]],nodes:4,tuners:2,delays:2,decoys:2},
 {id:6,name:'时空错位',desc:'五枚记忆、延迟回声、三次调频与真假线索构成最终闭环。',mechanic:'综合试炼 · 延迟与多频',startY:2,segs:[[1,4],[2,4],[1,3],[0,2],[1,2],[2,1]],nodes:5,tuners:3,delays:2,decoys:3}
];
const key=(x,y,n)=>y*n+x,dirs=[[0,-1],[1,0],[0,1],[-1,0]];
const reflect=(dx,dy,s)=>s===0?[-dy,-dx]:[dy,dx];
function mirrorState(from,to){for(let s=0;s<2;s++){const r=reflect(dirs[from][0],dirs[from][1],s);if(r[0]===dirs[to][0]&&r[1]===dirs[to][1])return s;}return null;}
function build(spec){
 const n=10,path=[],turns=[],used=new Set();let x=0,y=spec.startY,prev=1;
 for(let si=0;si<spec.segs.length;si++){
  const [d,len]=spec.segs[si];
  if(si>0){const st=mirrorState(prev,d);if(st===null)throw Error('invalid turn');turns.push({index:path.length-1,state:st});}
  for(let k=0;k<len;k++){x+=dirs[d][0];y+=dirs[d][1];if(x<0||y<0||x>=n||y>=n)throw Error('route out of bounds '+spec.id);const kk=key(x,y,n);if(used.has(kk))throw Error('route overlaps '+spec.id);used.add(kk);path.push({x,y});}
  prev=d;
 }
 const turnSet=new Set(turns.map(t=>t.index));
 const straight=path.map((p,i)=>i).filter(i=>!turnSet.has(i)&&i>0&&i<path.length-1);
 if(straight.length<spec.nodes+Math.min(spec.tuners,2)) throw Error('route too short '+spec.id);
 const nodeIdx=[];let lastNode=-1;
 for(let q=0;q<spec.nodes;q++){
  const desired=Math.round((q+1)*(path.length-1)/(spec.nodes+1));
  const remaining=spec.nodes-q-1;
  const candidates=straight.filter(i=>i>lastNode&&straight.filter(j=>j>i).length>=remaining);
  if(!candidates.length)throw Error('not enough node slots '+spec.id);
  const pick=candidates.reduce((best,i)=>Math.abs(i-desired)<Math.abs(best-desired)?i:best,candidates[0]);
  nodeIdx.push(pick);lastNode=pick;
 }
 const occupied=new Set([...nodeIdx,...turnSet]);
 const tunerIdx=[];
 for(let q=0;q<spec.tuners;q++){
  const target=nodeIdx[Math.min(q+1,nodeIdx.length-1)],lower=nodeIdx[Math.min(q,nodeIdx.length-1)];
  const candidates=straight.filter(i=>i>lower&&i<target&&!occupied.has(i)&&!tunerIdx.includes(i));
  if(candidates.length)tunerIdx.push(candidates[Math.floor((candidates.length-1)/2)]);
 }
 if(tunerIdx.length<spec.tuners){
  const beforeFirst=path.map((p,i)=>i).filter(i=>i<nodeIdx[0]&&!turnSet.has(i)&&!occupied.has(i)&&!tunerIdx.includes(i));
  while(tunerIdx.length<spec.tuners&&beforeFirst.length)tunerIdx.push(beforeFirst.shift());
 }
 const gateIdx=[];
 for(let q=0;q<nodeIdx.length-1;q++){let g=nodeIdx[q]+1;while(g<nodeIdx[q+1]&&(occupied.has(g)||gateIdx.includes(g)||tunerIdx.includes(g)))g++;if(g<nodeIdx[q+1])gateIdx.push(g);}

 const solution={mirrors:{},tuners:{}},init={mirrors:{},tuners:{}};
 for(const t of turns){const k=key(path[t.index].x,path[t.index].y,n);solution.mirrors[k]=t.state;init.mirrors[k]=1-t.state;}
 const tunerAt=new Map();
 tunerIdx.forEach((i,q)=>{const k=key(path[i].x,path[i].y,n),v=(q+1)%3;solution.tuners[k]=v;init.tuners[k]=(v+1)%3;tunerAt.set(i,v);});
 const nodeFreq={};let freq=0;
 for(let i=0;i<path.length;i++){if(tunerAt.has(i))freq=tunerAt.get(i);if(nodeIdx.includes(i))nodeFreq[i]=freq;}
 const cells=[];
 for(const t of turns){const p=path[t.index];cells.push({type:'mirror',x:p.x,y:p.y,init:init.mirrors[key(p.x,p.y,n)]});}
 gateIdx.forEach((i,q)=>{const p=path[i];cells.push({type:'gate',x:p.x,y:p.y,id:q+1});});
 tunerIdx.forEach(i=>{const p=path[i],k=key(p.x,p.y,n);cells.push({type:'tuner',x:p.x,y:p.y,init:init.tuners[k]});});
 const delayIdx=[];
 const delayCandidates=straight.filter(i=>!occupied.has(i)&&!gateIdx.includes(i)&&!tunerIdx.includes(i));
 for(let q=0;q<(spec.delays||0)&&delayCandidates.length;q++){
  const pickAt=Math.min(delayCandidates.length-1,Math.floor((q+1)*delayCandidates.length/((spec.delays||0)+1)));
  delayIdx.push(delayCandidates.splice(pickAt,1)[0]);
 }
 delayIdx.forEach((i,q)=>{const p=path[i];cells.push({type:'delay',x:p.x,y:p.y,ticks:q%2?3:2});});
 nodeIdx.forEach((i,q)=>{const p=path[i];cells.push({type:'node',x:p.x,y:p.y,id:q+1,freq:nodeFreq[i]});});
 const decoyCandidates=[];
 for(const p of path){for(const [dx,dy] of [[0,-1],[0,1],[-1,0],[1,0]]){const xx=p.x+dx,yy=p.y+dy,k=key(xx,yy,n);if(xx>0&&yy>=0&&yy<n&&xx<n&&!used.has(k)&&!decoyCandidates.some(d=>d.x===xx&&d.y===yy))decoyCandidates.push({x:xx,y:yy});}}
 for(let q=0;q<(spec.decoys||0)&&decoyCandidates.length;q++){const p=decoyCandidates[(q*3+1)%decoyCandidates.length];cells.push({type:'decoy',x:p.x,y:p.y});}
 cells.push({type:'source',x:0,y:spec.startY},{type:'exit',x:path[path.length-1].x,y:path[path.length-1].y});
 return {idx:spec.id,n,chapter:4,nodeCount:spec.nodes,cells,path,solution,init,src:{x:0,y:spec.startY,dir:1,freq:0},name:spec.name,story:spec.desc,mechanic:spec.mechanic,themeId:spec.id};
}
function buildResonance(){
 const n=10, cells=[
  {type:'source',x:0,y:4,freq:0},{type:'source',x:4,y:9,freq:1},
  {type:'resonator',x:4,y:4,id:'dual-gate',window:2},
  {type:'splitter',x:5,y:4,branches:[1,0]},
  {type:'node',x:7,y:4,id:1,freq:0},{type:'exit',x:9,y:4}
 ];
 return {idx:7,n,chapter:4,nodeCount:1,cells,src:{x:0,y:4,dir:1,freq:0},
  sources:[{id:'cyan',x:0,y:4,dir:1,freq:0},{id:'amber',x:4,y:9,dir:0,freq:1}],
  solution:{mirrors:{},tuners:{}},init:{mirrors:{},tuners:{}},
  name:'双声部·共振门',story:'两道声音从不同方向抵达。只有不同频率在短暂的时间窗内相遇，门才会回应。',mechanic:'双声源 · 双频共振 · 分裂声波',themeId:7};
}
function buildSync(){
 const n=10,cells=[
  {type:'source',x:0,y:4,freq:0},{type:'source',x:2,y:4,freq:1},
  {type:'sync',x:3,y:4,group:'duet-lock',pad:'A',source:'first',window:1},
  {type:'sync',x:5,y:4,group:'duet-lock',pad:'B',source:'second',window:1},
  {type:'tuner',x:6,y:4,init:0},
  {type:'node',x:7,y:4,id:1,freq:0},{type:'exit',x:9,y:4}
 ];
 return {idx:8,n,chapter:4,nodeCount:1,cells,src:{x:0,y:4,dir:1,freq:0},
  sources:[{id:'first',x:0,y:4,dir:1,freq:0},{id:'second',x:2,y:4,dir:1,freq:1}],
  solution:{mirrors:{},tuners:{46:0}},init:{mirrors:{},tuners:{46:0}},
  name:'同刻抵达',story:'两道回声必须分别抵达不同的同步台。它们相差不能超过一拍，而且必须来自指定的不同声源。',mechanic:'双声源 · 双点同步 · 时间窗机关',themeId:8};
}
const levels=stages.map(build).concat(buildResonance(),buildSync());
function verify(level){
 const mk=Object.keys(level.solution.mirrors),tk=Object.keys(level.solution.tuners);
 const cfg={mirrors:{...level.init.mirrors},tuners:{...level.init.tuners}};
 let wins=0,states=0;
 for(let mask=0;mask<(1<<mk.length);mask++)for(let code=0;code<Math.pow(3,tk.length);code++){
  mk.forEach((k,i)=>cfg.mirrors[k]=(mask>>i)&1);
  let v=code;tk.forEach(k=>{cfg.tuners[k]=v%3;v=Math.floor(v/3);});
  if(api.simulate(level,cfg).win)wins++;states++;
 }
 return {id:level.themeId,states,wins,solutionWins:api.simulate(level,level.solution).win,optimal:api.optimalMoves(level)};
}
function start(id){const level=levels.find(x=>x.themeId===id);return level?api.loadCustomLevel(level):false;}
window.__ECHO_THEME__={version:'3.0.0',stages:stages.concat([{id:7,name:'双声部·共振门',desc:'两道不同频率的声音必须在时间窗内相遇，分裂器会把回声送往多个方向。',mechanic:'双声源 · 双频共振 · 分裂声波'},{id:8,name:'同刻抵达',desc:'两道回声必须来自不同声源，并在一拍内抵达不同的同步台。',mechanic:'双声源 · 双点同步 · 时间窗机关'}]).map(x=>({...x})),levels,verify,start};
})();