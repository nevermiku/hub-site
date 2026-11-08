(()=>{'use strict';
const api=window.__ECHO2D__;
const stages=[
 {id:1,name:'第一声折光',desc:'单目标与基础镜面：听见第一声回响。',mechanic:'单目标 · 镜面折射',startY:1,segs:[[1,4],[2,3],[1,4]],nodes:2,tuners:0},
 {id:2,name:'双门之间',desc:'三枚记忆依次点亮，门会锁住错误的顺序。',mechanic:'三节点 · 连锁门',startY:1,segs:[[1,3],[2,3],[1,3],[0,2],[1,2]],nodes:3,tuners:1},
 {id:3,name:'迟到半拍',desc:'调频器改变回声颜色，节点只接受正确频率。',mechanic:'频率切换 · 三色记忆',startY:1,segs:[[1,4],[2,2],[1,3],[2,3],[1,1]],nodes:3,tuners:1},
 {id:4,name:'镜中双生',desc:'多面镜与两次调频交错，必须按路线逐段校准。',mechanic:'多镜联动 · 双调频',startY:2,segs:[[1,3],[0,1],[1,3],[2,3],[1,2]],nodes:4,tuners:2},
 {id:5,name:'潮汐回返',desc:'路线折返，频率变化藏在节点之间。',mechanic:'折返路径 · 多频率',startY:1,segs:[[1,2],[2,4],[1,3],[0,3],[1,3],[2,1]],nodes:4,tuners:2},
 {id:6,name:'时空错位',desc:'五枚记忆、三次调频与连续折射构成最终闭环。',mechanic:'综合试炼 · 五节点',startY:2,segs:[[1,4],[2,4],[1,3],[0,2],[1,2],[2,1]],nodes:5,tuners:3}
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
 const nodeIdx=[];
 for(let q=0;q<spec.nodes;q++){let target=Math.round((q+1)*(straight.length-1)/(spec.nodes+1));let pick=straight[target];while(nodeIdx.includes(pick))pick=straight.find(i=>!nodeIdx.includes(i)&&i>pick);nodeIdx.push(pick);}
 nodeIdx.sort((a,b)=>a-b);
 const occupied=new Set([...nodeIdx,...turnSet]);
 const gateIdx=[];
 for(let q=0;q<nodeIdx.length-1;q++){let g=nodeIdx[q]+1;while(g<nodeIdx[q+1]&&(occupied.has(g)||gateIdx.includes(g)))g++;if(g<nodeIdx[q+1])gateIdx.push(g);}
 const tunerIdx=[];
 for(let q=0;q<spec.tuners;q++){
  const target=nodeIdx[Math.min(q+1,nodeIdx.length-1)],lower=nodeIdx[Math.min(q,nodeIdx.length-1)];
  const candidates=straight.filter(i=>i>lower&&i<target&&!occupied.has(i)&&!gateIdx.includes(i)&&!tunerIdx.includes(i));
  if(candidates.length)tunerIdx.push(candidates[Math.floor((candidates.length-1)/2)]);
 }
 if(tunerIdx.length<spec.tuners){
  const fallback=straight.filter(i=>!occupied.has(i)&&!gateIdx.includes(i)&&!tunerIdx.includes(i)&&i<nodeIdx[nodeIdx.length-1]);
  while(tunerIdx.length<spec.tuners&&fallback.length)tunerIdx.push(fallback.shift());
 }
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
 nodeIdx.forEach((i,q)=>{const p=path[i];cells.push({type:'node',x:p.x,y:p.y,id:q+1,freq:nodeFreq[i]});});
 cells.push({type:'source',x:0,y:spec.startY},{type:'exit',x:path[path.length-1].x,y:path[path.length-1].y});
 return {idx:spec.id,n,chapter:4,nodeCount:spec.nodes,cells,path,solution,init,src:{x:0,y:spec.startY,dir:1,freq:0},name:spec.name,story:spec.desc,mechanic:spec.mechanic,themeId:spec.id};
}
const levels=stages.map(build);
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
window.__ECHO_THEME__={version:'1.0.0',stages:stages.map(x=>({...x})),levels,verify,start};
})();