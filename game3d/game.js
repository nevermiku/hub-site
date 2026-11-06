(()=>{var Jd=Object.defineProperty;var lh=(i,t)=>{for(var e in t)Jd(i,e,{get:t[e],enumerable:!0})};var Fh=0,Vl=1,Oh=2;var Ki=1,Bh=2,Ns=3,Pi=0,Fe=1,Se=2,ji=0,Li=1,an=2,Wl=3,Xl=4,kh=5;var Qi=100,zh=101,Hh=102,Gh=103,Vh=104,Wh=200,Xh=201,qh=202,Yh=203,ql=204,Yl=205,$h=206,Zh=207,Jh=208,Kh=209,jh=210,Qh=211,tu=212,eu=213,nu=214,Aa=0,Ra=1,Ca=2,Ss=3,Ia=4,Pa=5,La=6,Da=7,no=0,iu=1,su=2,Xn=0,$l=1,Zl=2,Jl=3,Rr=4,Kl=5,jl=6,Ql=7;var tc=300,ts=301,Us=302,io=303,so=304,ws=1e3,zn=1001,Na=1002,we=1003,ru=1004;var Cr=1005;var en=1006,ro=1007;var ci=1008;var on=1009,ec=1010,nc=1011,Fs=1012,ao=1013,Nn=1014,Rn=1015,Un=1016,oo=1017,lo=1018,es=1020,ic=35902,sc=35899,rc=1021,ac=1022,Fn=1023,si=1026,hi=1027,Os=1028,co=1029,Di=1030,ho=1031;var uo=1033,Ir=33776,Pr=33777,Lr=33778,Dr=33779,fo=35840,po=35841,mo=35842,go=35843,xo=36196,_o=37492,yo=37496,vo=37488,Mo=37489,Nr=37490,bo=37491,So=37808,wo=37809,Eo=37810,To=37811,Ao=37812,Ro=37813,Co=37814,Io=37815,Po=37816,Lo=37817,Do=37818,No=37819,Uo=37820,Fo=37821,Oo=36492,Bo=36494,ko=36495,zo=36283,Ho=36284,Ur=36285,Go=36286;var ir=2300,Ua=2301,Ea=2302,Nl=2303,Ul=2400,Fl=2401,Ol=2402;var au=3200;var Fr=0,ou=1,ui="",Ze="srgb",sr="srgb-linear",rr="linear",re="srgb";var Ta=7680;var lu=519,cu=512,hu=513,uu=514,oc=515,du=516,fu=517,lc=518,cc=519,pu=35044;var hc="300 es",En=2e3,Es=2001;function Kd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mu(){let i=ar("canvas");return i.style.display="block",i}var ch={},Ts=null;function uc(...i){let t="THREE."+i.shift();Ts?Ts("log",t,...i):console.log(t,...i)}function gu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=gu(i);let t="THREE."+i.shift();if(Ts)Ts("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=gu(i);let t="THREE."+i.shift();if(Ts)Ts("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function nr(...i){let t=i.join(" ");t in ch||(ch[t]=!0,Ot(...i))}function xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _u={[Aa]:Aa,[Ca]:La,[Ia]:Ia,[Ss]:Pa,[Ra]:Ra,[La]:Ca,[Da]:Da,[Pa]:Ss},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dl=Math.PI/180,Fa=180/Math.PI;function Or(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function Qd(i,t){return(i%t+t)%t}function fl(i,t,e){return(1-e)*i+e*t}function yu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tf(i,t){if(t.constructor===Float32Array)return i;let e=dc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ef(i,t){if(t.constructor===Float32Array)return i;let e=dc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var xc=class xc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xc.prototype.isVector2=!0;var qt=xc,Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],x=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==x){let m=l*u+c*f+h*x+d*y;m<0&&(u=-u,f=-f,x=-x,y=-y,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);p=Math.sin(p*v)/T,o=Math.sin(o*v)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+x*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+x*o,d=d*p+y*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*d+l*f-c*u,t[e+1]=l*x+h*u+c*d-o*f,t[e+2]=c*x+h*f+o*u-l*d,t[e+3]=h*x-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_c=class _c{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_c.prototype.isVector3=!0;var F=_c,pl=new F,hh=new Gn,yc=class yc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],y=s[0],m=s[3],p=s[6],v=s[1],T=s[4],w=s[7],R=s[2],E=s[5],_=s[8];return r[0]=a*y+o*v+l*R,r[3]=a*m+o*T+l*E,r[6]=a*p+o*w+l*_,r[1]=c*y+h*v+d*R,r[4]=c*m+h*T+d*E,r[7]=c*p+h*w+d*_,r[2]=u*y+f*v+x*R,r[5]=u*m+f*T+x*E,r[8]=u*p+f*w+x*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,x=e*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ml.makeScale(t,e)),this}rotate(t){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ml.makeRotation(-t)),this}translate(t,e){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yc.prototype.isMatrix3=!0;var kt=yc,ml=new kt,uh=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){let i={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sr]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:re,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}var te=nf();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,Oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ls===void 0&&(ls=ar("canvas")),ls.width=t.width,ls.height=t.height;let s=ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sf=0,As=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var rf=0,xl=new F,nn=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zn,s=zn,r=en,a=ci,o=Fn,l=on,c=i.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Or(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=tc;nn.DEFAULT_ANISOTROPY=1;var vc=class vc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,w=(f+1)/2,R=(p+1)/2,E=(h+u)/4,_=(d+y)/4,S=(x+m)/4;return T>w&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=_/n):w>R?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=E/s,r=S/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=S/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-x)*(m-x)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vc.prototype.isVector4=!0;var xe=vc,Ba=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new As(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},or=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var eo=class eo{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,x,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,x,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,x=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+x*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,x=c*h,y=c*d;e[0]=u+y*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,x=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,x=o*h,y=o*d;e[0]=l*h,e[4]=x*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=x*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+x,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,x=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(af,t,of)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),xi.crossVectors(n,dn),xi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),xi.crossVectors(n,dn)),xi.normalize(),na.crossVectors(dn,xi),s[0]=xi.x,s[4]=na.x,s[8]=dn.x,s[1]=xi.y,s[5]=na.y,s[9]=dn.y,s[2]=xi.z,s[6]=na.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],y=n[6],m=n[10],p=n[14],v=n[3],T=n[7],w=n[11],R=n[15],E=s[0],_=s[4],S=s[8],L=s[12],I=s[1],N=s[5],O=s[9],W=s[13],C=s[2],H=s[6],q=s[10],X=s[14],st=s[3],Y=s[7],et=s[11],nt=s[15];return r[0]=a*E+o*I+l*C+c*st,r[4]=a*_+o*N+l*H+c*Y,r[8]=a*S+o*O+l*q+c*et,r[12]=a*L+o*W+l*X+c*nt,r[1]=h*E+d*I+u*C+f*st,r[5]=h*_+d*N+u*H+f*Y,r[9]=h*S+d*O+u*q+f*et,r[13]=h*L+d*W+u*X+f*nt,r[2]=x*E+y*I+m*C+p*st,r[6]=x*_+y*N+m*H+p*Y,r[10]=x*S+y*O+m*q+p*et,r[14]=x*L+y*W+m*X+p*nt,r[3]=v*E+T*I+w*C+R*st,r[7]=v*_+T*N+w*H+R*Y,r[11]=v*S+T*O+w*q+R*et,r[15]=v*L+T*W+w*X+R*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],y=t[7],m=t[11],p=t[15],v=l*f-c*u,T=o*f-c*d,w=o*u-l*d,R=a*f-c*h,E=a*u-l*h,_=a*d-o*h;return e*(y*v-m*T+p*w)-n*(x*v-m*R+p*E)+s*(x*T-y*R+p*_)-r*(x*w-y*E+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],y=t[13],m=t[14],p=t[15],v=e*o-n*a,T=e*l-s*a,w=e*c-r*a,R=n*l-s*o,E=n*c-r*o,_=s*c-r*l,S=h*y-d*x,L=h*m-u*x,I=h*p-f*x,N=d*m-u*y,O=d*p-f*y,W=u*p-f*m,C=v*W-T*O+w*N+R*I-E*L+_*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/C;return t[0]=(o*W-l*O+c*N)*H,t[1]=(s*O-n*W-r*N)*H,t[2]=(y*_-m*E+p*R)*H,t[3]=(u*E-d*_-f*R)*H,t[4]=(l*I-a*W-c*L)*H,t[5]=(e*W-s*I+r*L)*H,t[6]=(m*w-x*_-p*T)*H,t[7]=(h*_-u*w+f*T)*H,t[8]=(a*O-o*I+c*S)*H,t[9]=(n*I-e*O-r*S)*H,t[10]=(x*E-y*w+p*v)*H,t[11]=(d*w-h*E-f*v)*H,t[12]=(o*L-a*N-l*S)*H,t[13]=(e*N-n*L+s*S)*H,t[14]=(y*T-x*R-m*v)*H,t[15]=(h*R-d*T+u*v)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,x=r*d,y=a*h,m=a*d,p=o*d,v=l*c,T=l*h,w=l*d,R=n.x,E=n.y,_=n.z;return s[0]=(1-(y+p))*R,s[1]=(f+w)*R,s[2]=(x-T)*R,s[3]=0,s[4]=(f-w)*E,s[5]=(1-(u+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(x+T)*_,s[9]=(m-v)*_,s[10]=(1-(u+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Pn.copy(this);let c=1/a,h=1/o,d=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=En,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===En)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Es)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=En,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===En)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Es)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};eo.prototype.isMatrix4=!0;var le=eo,cs=new F,Pn=new le,af=new F(0,0,0),of=new F(1,1,1),xi=new F,na=new F,dn=new F,fh=new le,ph=new Gn,ri=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},lf=0,mh=new F,hs=new Gn,jn=new le,ia=new F,Js=new F,cf=new F,hf=new Gn,gh=new F(1,0,0),xh=new F(0,1,0),_h=new F(0,0,1),yh={type:"added"},uf={type:"removed"},us={type:"childadded",child:null},_l={type:"childremoved",child:null},De=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new ri,n=new Gn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(gh,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(_h,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gh,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(_h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Js,ia,this.up):jn.lookAt(ia,Js,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(jn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yh),us.child=t,this.dispatchEvent(us),us.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uf),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yh),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new F(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},df={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(df)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},sa={h:0,s:0,l:0};function yl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Qd(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yl(a,r,t+1/3),this.g=yl(a,r,t),this.b=yl(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return te.workingToColorSpace($e.copy(this),t),Math.round(ee($e.r*255,0,255))*65536+Math.round(ee($e.g*255,0,255))*256+Math.round(ee($e.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ze){te.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(sa);let n=fl(_i.h,sa.h,e),s=fl(_i.s,sa.s,e),r=fl(_i.l,sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new ct;ct.NAMES=vu;var cr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hr=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new F,Qn=new F,vl=new F,ti=new F,ds=new F,fs=new F,vh=new F,Ml=new F,bl=new F,Sl=new F,wl=new xe,El=new xe,Tl=new xe,bi=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),Qn.subVectors(n,e),vl.subVectors(t,e);let a=Ln.dot(Ln),o=Ln.dot(Qn),l=Ln.dot(vl),c=Qn.dot(Qn),h=Qn.dot(vl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return wl.setScalar(0),El.setScalar(0),Tl.setScalar(0),wl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,n),Tl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(wl,r.x),a.addScaledVector(El,r.y),a.addScaledVector(Tl,r.z),a}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),Qn.subVectors(t,e),Ln.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Ln.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ds.subVectors(s,n),fs.subVectors(r,n),Ml.subVectors(t,n);let l=ds.dot(Ml),c=fs.dot(Ml);if(l<=0&&c<=0)return e.copy(n);bl.subVectors(t,s);let h=ds.dot(bl),d=fs.dot(bl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(ds,a);Sl.subVectors(t,r);let f=ds.dot(Sl),x=fs.dot(Sl);if(x>=0&&f<=x)return e.copy(r);let y=f*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(fs,o);let m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return vh.subVectors(r,s),o=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(vh,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),aa.subVectors(this.max,Ks),ps.subVectors(t.a,Ks),ms.subVectors(t.b,Ks),gs.subVectors(t.c,Ks),yi.subVectors(ms,ps),vi.subVectors(gs,ms),Gi.subVectors(ps,gs);let e=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-Gi.z,Gi.y,yi.z,0,-yi.x,vi.z,0,-vi.x,Gi.z,0,-Gi.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-Gi.y,Gi.x,0];return!Al(e,ps,ms,gs,aa)||(e=[1,0,0,0,1,0,0,0,1],!Al(e,ps,ms,gs,aa))?!1:(oa.crossVectors(yi,vi),e=[oa.x,oa.y,oa.z],Al(e,ps,ms,gs,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new F,new F,new F,new F,new F,new F,new F,new F],Dn=new F,ra=new Vn,ps=new F,ms=new F,gs=new F,yi=new F,vi=new F,Gi=new F,Ks=new F,aa=new F,oa=new F,Vi=new F;function Al(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ae=new F,la=new qt,ff=0,tn=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ff++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pu,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=t!==void 0?dc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):tf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ef(t,this.array)}};var ur=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var dr=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},pf=new Vn,js=new F,Rl=new F,ai=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Rl)),this.expandByPoint(js.copy(t.center).sub(Rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mf=0,Sn=new le,Cl=new De,xs=new F,fn=new Vn,Qs=new Vn,Ge=new F,Ne=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kd(t)?dr:ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Cl.lookAt(t),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(fn.min,Qs.min),fn.expandByPoint(Ge),Ge.addVectors(fn.max,Qs.max),fn.expandByPoint(Ge)):(fn.expandByPoint(Qs.min),fn.expandByPoint(Qs.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),Ge.add(xs)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new F,l[L]=new F;let h=new F,d=new F,u=new F,f=new qt,x=new qt,y=new qt,m=new F,p=new F;function v(L,I,N){c[L]=c[I]=c[N]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,I),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,L),x.fromBufferAttribute(r,I),y.fromBufferAttribute(r,N),d.sub(h),u.sub(h),x.sub(f),y.sub(f);let O=1/(x.x*y.y-y.x*x.y);isFinite(O)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(u,-x.y).multiplyScalar(O),p.copy(u).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(O),o[L].add(m),o[I].add(m),o[N].add(m),l[L].add(p),l[I].add(p),l[N].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,I=T.length;L<I;++L){let N=T[L],O=N.start,W=N.count;for(let C=O,H=O+W;C<H;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let w=new F,R=new F,E=new F,_=new F;function S(L){E.fromBufferAttribute(s,L),_.copy(E);let I=o[L];w.copy(I),w.sub(E.multiplyScalar(E.dot(I))).normalize(),R.crossVectors(_,I);let O=R.dot(l[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,O)}for(let L=0,I=n.count;L<I;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let x=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[x++]=c[f++]}return new tn(u,h,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Il=new F,gf=new F,xf=new kt,wn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Il.subVectors(n,e).cross(gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xf.getNormalMatrix(t),s=this.coplanarPoint(Il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_f=0,Wn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Li,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ni=new F,Pl=new F,ca=new F,ha=new F,fr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pl.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(Pl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),h=Math.abs(1-a*a),d,u,f,x;if(h>0)if(d=a*l-o,u=a*o-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pl).addScaledVector(ca,u),f}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,x=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=n.x-a.x,v=n.y-a.y,T=n.z-a.z,w=Math.abs(l),R=Math.abs(c),E=Math.abs(h),_,S,L,I,N,O,W,C,H,q,X,st;if(w>=R&&w>=E?(L=l,O=d,H=x,st=p,l>=0?(_=c,S=h,I=u,N=f,W=y,C=m,q=v,X=T):(_=h,S=c,I=f,N=u,W=m,C=y,q=T,X=v)):R>=E?(L=c,O=u,H=y,st=v,c>=0?(_=h,S=l,I=f,N=d,W=m,C=x,q=T,X=p):(_=l,S=h,I=d,N=f,W=x,C=m,q=p,X=T)):(L=h,O=f,H=m,st=T,h>=0?(_=l,S=c,I=d,N=u,W=x,C=y,q=p,X=v):(_=c,S=l,I=u,N=d,W=y,C=x,q=v,X=p)),L===0)return null;let Y=_/L,et=S/L,nt=1/L,It=I-Y*O,Vt=N-et*O,j=W-Y*H,Mt=C-et*H,Tt=q-Y*st,Nt=X-et*st,bt=Tt*Mt-Nt*j,Xt=It*Nt-Vt*Tt,Ee=j*Vt-Mt*It;if(s){if(bt<0||Xt<0||Ee<0)return null}else if((bt<0||Xt<0||Ee<0)&&(bt>0||Xt>0||Ee>0))return null;let Ft=bt+Xt+Ee;if(Ft===0)return null;let ae=nt*(bt*O+Xt*H+Ee*st);return(Ft>0?ae<0:ae>0)?null:this.at(ae/Ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mh=new le,Wi=new fr,ua=new ai,bh=new F,da=new F,fa=new F,pa=new F,Ll=new F,ma=new F,Sh=new F,ga=new F,$t=class extends De{constructor(t=new Ne,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ll.fromBufferAttribute(d,t),a?ma.addScaledVector(Ll,h):ma.addScaledVector(Ll.sub(e),h))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(ua.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ua,bh)===null||Wi.origin.distanceToSquared(bh)>(t.far-t.near)**2))&&(Mh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Mh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let m=u[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=v,R=T;w<R;w+=3){let E=o.getX(w),_=o.getX(w+1),S=o.getX(w+2);s=xa(this,p,t,n,c,h,d,E,_,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let v=o.getX(m),T=o.getX(m+1),w=o.getX(m+2);s=xa(this,a,t,n,c,h,d,v,T,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let m=u[x],p=a[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=v,R=T;w<R;w+=3){let E=w,_=w+1,S=w+2;s=xa(this,p,t,n,c,h,d,E,_,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=x,p=y;m<p;m+=3){let v=m,T=m+1,w=m+2;s=xa(this,a,t,n,c,h,d,v,T,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function yf(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Pi,o),l===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:i}}function xa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,da),i.getVertexPosition(l,fa),i.getVertexPosition(c,pa);let h=yf(i,t,e,n,da,fa,pa,Sh);if(h){let d=new F;bi.getBarycoord(Sh,da,fa,pa,d),s&&(h.uv=bi.getInterpolatedAttribute(s,o,l,c,d,new qt)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,l,c,d,new qt)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};bi.getNormal(da,fa,pa,u.normal),h.face=u,h.barycoord=d}return h}var qi=class extends nn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=we,h=we,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new le,wh=new le,_a=[],Eh=new Vn,vf=new le,tr=new $t,er=new ai,mr=class extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Eh.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(Eh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),er.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),wh.multiplyMatrices(n,_s),tr.matrixWorld=wh,tr.raycast(t,_a);for(let a=0,o=_a.length;a<o;a++){let l=_a[a];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qi(new Float32Array(s*this.count),s,this.count,Os,Rn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new ai,Mf=new qt(.5,.5),ya=new F,Si=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],y=r[9],m=r[10],p=r[11],v=r[12],T=r[13],w=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,p-x,R-v).normalize(),s[1].setComponents(c+a,f+h,p+x,R+v).normalize(),s[2].setComponents(c+o,f+d,p+y,R+T).normalize(),s[3].setComponents(c-o,f-d,p-y,R-T).normalize(),n)s[4].setComponents(l,u,m,w).normalize(),s[5].setComponents(c-l,f-u,p-m,R-w).normalize();else if(s[4].setComponents(c-l,f-u,p-m,R-w).normalize(),e===En)s[5].setComponents(c+l,f+u,p+m,R+w).normalize();else if(e===Es)s[5].setComponents(l,u,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=Mf.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Th=new le,za=class i{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Th.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(Th,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Si),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var wi=class extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ah=new le,Bl=new fr,va=new ai,Ma=new F,Yi=class extends De{constructor(t=new Ne,e=new wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;Ah.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(Ah);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=u,y=f;x<y;x++){let m=c.getX(x);Ma.fromBufferAttribute(d,m),Rh(Ma,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=u,y=f;x<y;x++)Ma.fromBufferAttribute(d,x),Rh(Ma,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rh(i,t,e,n,s,r,a){let o=Bl.distanceSqToPoint(i);if(o<e){let l=new F;Bl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var gr=class extends nn{constructor(t=[],e=ts,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xr=class extends nn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends nn{constructor(t,e,n=Nn,s,r,a,o=we,l=we,c,h=si,d=1){if(h!==si&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_r=class extends oi{constructor(t,e=Nn,n=ts,s,r,a=we,o=we,l,c=si){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yr=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ei=class i extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function x(y,m,p,v,T,w,R,E,_,S,L){let I=w/_,N=R/S,O=w/2,W=R/2,C=E/2,H=_+1,q=S+1,X=0,st=0,Y=new F;for(let et=0;et<q;et++){let nt=et*N-W;for(let It=0;It<H;It++){let Vt=It*I-O;Y[y]=Vt*v,Y[m]=nt*T,Y[p]=C,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(It/_),d.push(1-et/S),X+=1}}for(let et=0;et<S;et++)for(let nt=0;nt<_;nt++){let It=u+nt+H*et,Vt=u+nt+H*(et+1),j=u+(nt+1)+H*(et+1),Mt=u+(nt+1)+H*et;l.push(It,Vt,Mt),l.push(Vt,j,Mt),st+=6}o.addGroup(f,st,L),f+=st,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Cs=class i extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,h=new qt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Tn=class i extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],x=0,y=[],m=n/2,p=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function v(){let w=new F,R=new F,E=0,_=(e-t)/n;for(let S=0;S<=r;S++){let L=[],I=S/r,N=I*(e-t)+t;for(let O=0;O<=s;O++){let W=O/s,C=W*l+o,H=Math.sin(C),q=Math.cos(C);R.x=N*H,R.y=-I*n+m,R.z=N*q,d.push(R.x,R.y,R.z),w.set(H,_,q).normalize(),u.push(w.x,w.y,w.z),f.push(W,1-I),L.push(x++)}y.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let I=y[L][S],N=y[L+1][S],O=y[L+1][S+1],W=y[L][S+1];(t>0||L!==0)&&(h.push(I,N,W),E+=3),(e>0||L!==r-1)&&(h.push(N,O,W),E+=3)}c.addGroup(p,E,0),p+=E}function T(w){let R=x,E=new qt,_=new F,S=0,L=w===!0?t:e,I=w===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),x++;let N=x;for(let O=0;O<=s;O++){let C=O/s*l+o,H=Math.cos(C),q=Math.sin(C);_.x=L*q,_.y=m*I,_.z=L*H,d.push(_.x,_.y,_.z),u.push(0,I,0),E.x=H*.5+.5,E.y=q*.5*I+.5,f.push(E.x,E.y),x++}for(let O=0;O<s;O++){let W=R+O,C=N+O;w===!0?h.push(C,C+1,W):h.push(C+1,C,W),S+=3}c.addGroup(p,S,w===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ti=class i extends Tn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vr=class i extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new F,w=new F,R=new F;for(let E=0;E<e.length;E+=3)f(e[E+0],T),f(e[E+1],w),f(e[E+2],R),l(T,w,R,v)}function l(v,T,w,R){let E=R+1,_=[];for(let S=0;S<=E;S++){_[S]=[];let L=v.clone().lerp(w,S/E),I=T.clone().lerp(w,S/E),N=E-S;for(let O=0;O<=N;O++)O===0&&S===E?_[S][O]=L:_[S][O]=L.clone().lerp(I,O/N)}for(let S=0;S<E;S++)for(let L=0;L<2*(E-S)-1;L++){let I=Math.floor(L/2);L%2===0?(u(_[S][I+1]),u(_[S+1][I]),u(_[S][I])):(u(_[S][I+1]),u(_[S+1][I+1]),u(_[S+1][I]))}}function c(v){let T=new F;for(let w=0;w<r.length;w+=3)T.x=r[w+0],T.y=r[w+1],T.z=r[w+2],T.normalize().multiplyScalar(v),r[w+0]=T.x,r[w+1]=T.y,r[w+2]=T.z}function h(){let v=new F;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let w=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;a.push(w,1-R)}x(),d()}function d(){for(let v=0;v<a.length;v+=6){let T=a[v+0],w=a[v+2],R=a[v+4],E=Math.max(T,w,R),_=Math.min(T,w,R);E>.9&&_<.1&&(T<.2&&(a[v+0]+=1),w<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,T){let w=v*3;T.x=t[w+0],T.y=t[w+1],T.z=t[w+2]}function x(){let v=new F,T=new F,w=new F,R=new F,E=new qt,_=new qt,S=new qt;for(let L=0,I=0;L<r.length;L+=9,I+=6){v.set(r[L+0],r[L+1],r[L+2]),T.set(r[L+3],r[L+4],r[L+5]),w.set(r[L+6],r[L+7],r[L+8]),E.set(a[I+0],a[I+1]),_.set(a[I+2],a[I+3]),S.set(a[I+4],a[I+5]),R.copy(v).add(T).add(w).divideScalar(3);let N=m(R);y(E,I+0,v,N),y(_,I+2,T,N),y(S,I+4,w,N)}}function y(v,T,w,R){R<0&&v.x===1&&(a[T]=v.x-1),w.x===0&&w.z===0&&(a[T]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Mr=class i extends vr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var li=class i extends vr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var mn=class i extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],x=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let T=0;T<c;T++){let w=T*d-r;x.push(w,-v,0),y.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let T=v+c*p,w=v+c*(p+1),R=v+1+c*(p+1),E=v+1+c*p;f.push(T,w,E),f.push(w,R,E)}this.setIndex(f),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$i=class i extends Ne{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new F,x=new qt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let v=p+m,T=v,w=v+n+1,R=v+n+2,E=v+1;o.push(T,w,E),o.push(w,R,E)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ai=class i extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,f=[],x=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],T=p/n,w=a+T*o,R=t*Math.cos(w),E=Math.sqrt(t*t-R*R),_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let L=S/e,I=s+L*r;d.x=-E*Math.cos(I),d.y=R,d.z=E*Math.sin(I),x.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(L+_,1-T),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let T=h[p][v+1],w=h[p][v],R=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(T,w,E),(p!==n-1||l<Math.PI)&&f.push(w,R,E)}this.setIndex(f),this.setAttribute("position",new ie(x,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zi=class i extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new F,f=new F,x=new F;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),x.subVectors(f,u).normalize(),h.push(x.x,x.y,x.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,v=(s+1)*(y-1)+m-1,T=(s+1)*(y-1)+m,w=(s+1)*y+m;l.push(p,v,w),l.push(v,T,w)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ch(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Mu={clone:ns,merge:Ke},Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ha=class extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var br=class extends Wn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Is=class extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=no,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ga=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ys(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ba(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ri=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wa=class extends Ri{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fl:r=t,o=2*e-n;break;case Ol:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fl:a=t,l=2*n-e;break;case Ol:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-e)/(s-e),y=x*x,m=y*x,p=-u*m+2*u*y-u*x,v=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*x+1,T=(-1-f)*m+(1.5+f)*y+.5*x,w=f*m-f*y;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+v*a[c+R]+T*a[l+R]+w*a[d+R];return r}},Xa=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},qa=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ya=class extends Ri{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(s-e),y=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*x;return r}let u=o*2,f=t-1;for(let x=0;x!==o;++x){let y=a[c+x],m=a[l+x],p=f*u+x*2,v=d[p],T=d[p+1],w=t*u+x*2,R=h[w],E=h[w+1],_=Tf(n,e,v,R,s);r[x]=bu(_,y,T,E,m)}return r}};function bu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ef(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Tf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=bu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ef(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ys(e,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ys(t.times,Array),values:ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ba(t.settings)&&(n.settings={inTangents:ys(t.settings.inTangents,Array),outTangents:ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ya(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case Nl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ba(this.settings)&&(Ih(this.settings.inTangents,t),Ih(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ba(this.settings)&&(Ph(this.settings.inTangents,t),Ph(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&jd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let x=0;x!==n;++x){let y=e[d+x];if(y!==e[u+x]||y!==e[f+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ba(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ih(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Ph(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ua;var Ci=class extends gn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ir;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="color";var Za=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="number";var Ja=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sr=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends gn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=ir;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="vector";var ja=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Su=new ja,Qa=class{constructor(t){this.manager=t!==void 0?t:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wr=class extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dl=new le,Lh=new F,Dh=new F,Er=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lh),Dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Es||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sa=new F,wa=new Gn,kn=new F,Tr=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sa,wa,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,wa,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sa,wa,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,wa,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new F,Nh=new qt,Uh=new qt,Je=class extends Tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Uh),e.subVectors(Uh,Nh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kl=class extends Er{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},Ji=class extends Ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ar=class extends Tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zl=class extends Er{constructor(){super(new Ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new zl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vs=-90,Ms=1,Ds=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(vs,Ms,t,e);s.layers=this.layers,this.add(s);let r=new Je(vs,Ms,t,e);r.layers=this.layers,this.add(r);let a=new Je(vs,Ms,t,e);a.layers=this.layers,this.add(a);let o=new Je(vs,Ms,t,e);o.layers=this.layers,this.add(o);let l=new Je(vs,Ms,t,e);l.layers=this.layers,this.add(l);let c=new Je(vs,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},to=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var pc="\\[\\]\\.:\\/",Af=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",Rf="[^"+pc.replace("\\.","")+"]",Cf=/((?:WC+[\/:])*)/.source.replace("WC",mc),If=/(WCOD+)?/.source.replace("WCOD",Rf),Pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),Lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),Df=new RegExp("^"+Cf+If+Pf+Lf+"$"),Nf=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Af,"")}static parseTrackName(t){let e=Df.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Hl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V_=new Float32Array(1);var Mc=class Mc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Mc.prototype.isMatrix2=!0;var Gl=Mc;function gc(i,t,e,n){let s=Uf(n);switch(e){case rc:return i*t;case Os:return i*t/s.components*s.byteLength;case co:return i*t/s.components*s.byteLength;case Di:return i*t*2/s.components*s.byteLength;case ho:return i*t*2/s.components*s.byteLength;case ac:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case uo:return i*t*4/s.components*s.byteLength;case Ir:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(t,8)/4;case fo:case mo:return Math.max(i,8)*Math.max(t,8)/2;case xo:case _o:case vo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:case Nr:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oo:case Bo:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ur:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uf(i){switch(i){case on:case ec:return{byteLength:1,components:1};case Fs:case nc:case Un:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case Nn:case ao:case Rn:return{byteLength:4,components:1};case ic:case sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ep=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ip=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$p=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:kf,alphahash_pars_fragment:zf,alphamap_fragment:Hf,alphamap_pars_fragment:Gf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:$f,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:Kf,iridescence_fragment:jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:op,common:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:xp,envmap_pars_fragment:_p,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Ip,envmap_vertex:vp,fog_vertex:Mp,fog_pars_vertex:bp,fog_fragment:Sp,fog_pars_fragment:wp,gradientmap_pars_fragment:Ep,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Dp,lights_phong_pars_fragment:Np,lights_physical_fragment:Up,lights_physical_pars_fragment:Fp,lights_fragment_begin:Op,lights_fragment_maps:Bp,lights_fragment_end:kp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:$p,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:Kp,morphcolor_vertex:jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:xm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:Mm,shadowmap_vertex:bm,shadowmask_pars_fragment:Sm,skinbase_vertex:wm,skinning_pars_vertex:Em,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Im,tonemapping_pars_fragment:Pm,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Nm,uv_pars_vertex:Um,uv_vertex:Fm,worldpos_vertex:Om,background_vert:Bm,background_frag:km,backgroundCube_vert:zm,backgroundCube_frag:Hm,cube_vert:Gm,cube_frag:Vm,depth_vert:Wm,depth_frag:Xm,distance_vert:qm,distance_frag:Ym,equirect_vert:$m,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:Km,meshbasic_vert:jm,meshbasic_frag:Qm,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:a0,meshphong_frag:o0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:x0},vt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Yn={basic:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ke([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ke([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ct(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ke([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ke([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ke([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ke([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Ke([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Ke([vt.lights,vt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Yn.physical={uniforms:Ke([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Vo={r:0,b:0,g:0},_0=new le,qu=new kt;qu.set(-1,0,0,0,1,0,0,0,1);function y0(i,t,e,n,s,r){let a=new ct(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let w=v.backgroundBlurriness>0;T=t.get(T,w)}return T}function x(v){let T=!1,w=f(v);w===null?m(a,o):w&&w.isColor&&(m(w,1),T=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(v,T){let w=f(T);w&&w.isCubeTexture?(c===void 0&&(c=new $t(new Ei(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ns(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(T.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qu),c.material.toneMapped=te.getTransfer(w.colorSpace)!==re,(h!==w||d!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new $t(new mn(2,2),new An({name:"BackgroundMaterial",uniforms:ns(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=te.getTransfer(w.colorSpace)!==re,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(Vo,fc(i)),e.buffers.color.setClear(Vo.r,Vo.g,Vo.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:x,addToRenderList:y,dispose:p}}function v0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,W,C,H){let q=!1,X=d(N,C,W,O);r!==X&&(r=X,c(r.object)),q=f(N,C,W,H),q&&x(N,C,W,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,w(N,O,W,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,O,W,C){let H=C.wireframe===!0,q=n[O.id];q===void 0&&(q={},n[O.id]=q);let X=N.isInstancedMesh===!0?N.id:0,st=q[X];st===void 0&&(st={},q[X]=st);let Y=st[W.id];Y===void 0&&(Y={},st[W.id]=Y);let et=Y[H];return et===void 0&&(et=u(l()),Y[H]=et),et}function u(N){let O=[],W=[],C=[];for(let H=0;H<e;H++)O[H]=0,W[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:C,object:N,attributes:{},index:null}}function f(N,O,W,C){let H=r.attributes,q=O.attributes,X=0,st=W.getAttributes();for(let Y in st)if(st[Y].location>=0){let nt=H[Y],It=q[Y];if(It===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(It=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(It=N.instanceColor)),nt===void 0||nt.attribute!==It||It&&nt.data!==It.data)return!0;X++}return r.attributesNum!==X||r.index!==C}function x(N,O,W,C){let H={},q=O.attributes,X=0,st=W.getAttributes();for(let Y in st)if(st[Y].location>=0){let nt=q[Y];nt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor));let It={};It.attribute=nt,nt&&nt.data&&(It.data=nt.data),H[Y]=It,X++}r.attributes=H,r.attributesNum=X,r.index=C}function y(){let N=r.newAttributes;for(let O=0,W=N.length;O<W;O++)N[O]=0}function m(N){p(N,0)}function p(N,O){let W=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;W[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),H[N]!==O&&(i.vertexAttribDivisor(N,O),H[N]=O)}function v(){let N=r.newAttributes,O=r.enabledAttributes;for(let W=0,C=O.length;W<C;W++)O[W]!==N[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function T(N,O,W,C,H,q,X){X===!0?i.vertexAttribIPointer(N,O,W,H,q):i.vertexAttribPointer(N,O,W,C,H,q)}function w(N,O,W,C){y();let H=C.attributes,q=W.getAttributes(),X=O.defaultAttributeValues;for(let st in q){let Y=q[st];if(Y.location>=0){let et=H[st];if(et===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(et=N.instanceColor)),et!==void 0){let nt=et.normalized,It=et.itemSize,Vt=t.get(et);if(Vt===void 0)continue;let j=Vt.buffer,Mt=Vt.type,Tt=Vt.bytesPerElement,Nt=Mt===i.INT||Mt===i.UNSIGNED_INT||et.gpuType===ao;if(et.isInterleavedBufferAttribute){let bt=et.data,Xt=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,Ee=et.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let Ft=0;Ft<Y.locationSize;Ft++)p(Y.location+Ft,bt.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ft=0;Ft<Y.locationSize;Ft++)m(Y.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Ft=0;Ft<Y.locationSize;Ft++)T(Y.location+Ft,It/Y.locationSize,Mt,nt,Xt*Tt,(Ee+It/Y.locationSize*Ft)*Tt,Nt)}else{if(et.isInstancedBufferAttribute){for(let bt=0;bt<Y.locationSize;bt++)p(Y.location+bt,et.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let bt=0;bt<Y.locationSize;bt++)m(Y.location+bt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let bt=0;bt<Y.locationSize;bt++)T(Y.location+bt,It/Y.locationSize,Mt,nt,It*Tt,It/Y.locationSize*bt*Tt,Nt)}}else if(X!==void 0){let nt=X[st];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Y.location,nt);break;case 3:i.vertexAttrib3fv(Y.location,nt);break;case 4:i.vertexAttrib4fv(Y.location,nt);break;default:i.vertexAttrib1fv(Y.location,nt)}}}}v()}function R(){L();for(let N in n){let O=n[N];for(let W in O){let C=O[W];for(let H in C){let q=C[H];for(let X in q)h(q[X].object),delete q[X];delete C[H]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let W in O){let C=O[W];for(let H in C){let q=C[H];for(let X in q)h(q[X].object),delete q[X];delete C[H]}}delete n[N.id]}function _(N){for(let O in n){let W=n[O];for(let C in W){let H=W[C];if(H[N.id]===void 0)continue;let q=H[N.id];for(let X in q)h(q[X].object),delete q[X];delete H[N.id]}}}function S(N){for(let O in n){let W=n[O],C=N.isInstancedMesh===!0?N.id:0,H=W[C];if(H!==void 0){for(let q in H){let X=H[q];for(let st in X)h(X[st].object),delete X[st];delete H[q]}delete W[C],Object.keys(W).length===0&&delete n[O]}}}function L(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function M0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function b0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Fn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==on&&_!==Rn&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:w,maxSamples:R,samples:E}}function S0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new wn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,T=v*4,w=p.clippingState||null;l.value=w,w=h(x,u,T,f);for(let R=0;R!==T;++R)w[R]=e[R];p.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,x){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let p=f+y*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,w=f;T!==y;++T,w+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var zr=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ei(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ji});r.uniforms.tEquirect.value=e;let a=new $t(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=en),new Ds(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},wu=256,w0=3,E0=20,Yu=256,$u=16,T0=3,A0=new F,R0=new ct,Xo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ds(1,10,null),this._boxMesh=new $t(new Ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=A0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,x=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(R0));let m=new Ds(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=x,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(wu,yu(t))}_fromTexture(t,e){t.mapping===ts||t.mapping===Us?this._setSize(t.image.length===0?wu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Eu(t,!1,!1),n=Math.log2(t)-w0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Eu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ts||t.mapping===Us?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=C0(),this._integrationMaterial=I0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/$u);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-T0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Yu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=P0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Eu(i,t,e){return new zr(i,{minFilter:ci,generateMipmaps:t,type:Un,colorSpace:sr,depthBuffer:e})}function Hr(i,t,e){return new An({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:Fe,blending:ji,depthTest:!1,depthWrite:!1})}function C0(){return Hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function I0(){return Hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$u}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function P0(){return Hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${E0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Tu(){return Hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Au(){return Hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function L0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===io||f===so)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new zr(x.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,x=f===io||f===so,y=f===ts||f===Us;if(x||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Xo(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return x&&v&&v.height>0||y&&v&&l(v)?(n===null&&(n=new Xo(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===io?u.mapping=ts:f===so&&(u.mapping=Us),u}function l(u){let f=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&f++;return f===x}function c(u){let f=u.target;f.removeEventListener("dispose",c);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function D0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function N0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(let m in x.attributes)t.remove(x.attributes[m]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let y=r.get(x);y&&(t.remove(y),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(x){let y=x.attributes;for(let m in y)t.update(y[m],i.ARRAY_BUFFER)}function d(x){let y=x.index,m=x.attributes.position,p=0;if(m===void 0)return;let v=y!==null?y.array.length:m.array.length/3-1,T=m.count>=65535?dr:ur,w=new T(Math.ceil(v/3)*6,1),R=w.array;if(y!==null){let _=y.array;p=y.version;for(let S=0,L=0;S<v;S+=3){let I=_[S+0],N=_[S+1],O=_[S+2];R[L++]=I,R[L++]=N,R[L++]=N,R[L++]=O,R[L++]=O,R[L++]=I}}else{p=m.version;for(let _=0,S=0;_<v;_+=3){let L=_+0,I=_+1,N=_+2;R[S++]=L,R[S++]=I,R[S++]=I,R[S++]=N,R[S++]=N,R[S++]=L}}w.version=p;let E=r.get(x);E&&t.remove(E),r.set(x,w)}function u(x){let y=r.get(x);if(y){let m=x.index;m!==null&&y.version<m.version&&d(x)}else d(x);return r.get(x)}function f(){for(let x in s){let y=s[x].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function U0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function F0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function O0(i,t,e){let n=new WeakMap,s=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;f===!0&&(T=1),x===!0&&(T=2),y===!0&&(T=3);let w=o.attributes.position.count*T,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let E=new Float32Array(w*R*4*d),_=new or(E,w,R,d);_.type=Rn,_.needsUpdate=!0;let S=T*4;for(let I=0;I<d;I++){let N=m[I],O=p[I],W=v[I],C=w*R*4*I;for(let H=0;H<N.count;H++){let q=H*S;f===!0&&(s.fromBufferAttribute(N,H),E[C+q+0]=s.x,E[C+q+1]=s.y,E[C+q+2]=s.z,E[C+q+3]=0),x===!0&&(s.fromBufferAttribute(O,H),E[C+q+4]=s.x,E[C+q+5]=s.y,E[C+q+6]=s.z,E[C+q+7]=0),y===!0&&(s.fromBufferAttribute(W,H),E[C+q+8]=s.x,E[C+q+9]=s.y,E[C+q+10]=s.z,E[C+q+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new qt(w,R)},n.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function B0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var k0={[$l]:"LINEAR_TONE_MAPPING",[Zl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[Rr]:"ACES_FILMIC_TONE_MAPPING",[jl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[Kl]:"CUSTOM_TONE_MAPPING"};function z0(i,t,e,n,s,r){let a=new pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ne;h.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ie([0,2,0,0,2,0],2));let d=new Ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $t(h,d),f=new Ar(-1,1,1,-1,0,1),x=null,y=null,m=!1,p,v=null,T=[],w=!1;this.setSize=function(R,E){a.setSize(R,E),o!==null&&o.setSize(R,E),l!==null&&l.setSize(R,E);for(let _=0;_<T.length;_++){let S=T[_];S.setSize&&S.setSize(R,E)}},this.setEffects=function(R){T=R,w=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new pn(E,_,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new pn(E,_,{type:Un,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&T.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new oi(E,_),r===!0&&(c.format=hi,c.type=es)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<T.length;L++){let I=T[L];I.setSize&&I.setSize(E,_),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,E){if(m||R.toneMapping===Xn&&T.length===0)return!1;if(v=E,E!==null){let _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return w===!1&&R.setRenderTarget(a),p=R.toneMapping,R.toneMapping=Xn,!0},this.hasRenderPass=function(){return w},this.end=function(R,E){R.toneMapping=p,m=!0;let _=a,S=o;for(let L=0;L<T.length;L++){let I=T[L];I.enabled!==!1&&(I.render(R,S,_,E),I.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(x!==R.outputColorSpace||y!==R.toneMapping){x=R.outputColorSpace,y=R.toneMapping,d.defines={},te.getTransfer(x)===re&&(d.defines.SRGB_TRANSFER="");let L=k0[y];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(v),R.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Zu=new nn,Ju=new oi(1,1),Ku=new _r(1),ju=new or,Qu=new ka,td=new gr,Ru=[],Cu=[],Iu=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=Cu[t];e===void 0&&(e=new Int32Array(t),Cu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function H0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Lu.set(n),i.uniformMatrix2fv(this.addr,!1,Lu),Be(e,n)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Pu.set(n),i.uniformMatrix3fv(this.addr,!1,Pu),Be(e,n)}}function Y0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Iu.set(n),i.uniformMatrix4fv(this.addr,!1,Iu),Be(e,n)}}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function $o(i){return i.version===0&&(i.compareFunction=cc,i.needsUpdate=!0),i}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=$o(Ju):r=Zu,e.setTexture2D(t||r,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qu,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=$o(Ku):r=td,e.setTextureCube(t||r,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ju,s)}function ag(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return $0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return j0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function cg(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function ug(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dg(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fg(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pg(i,t){i.uniform1iv(this.addr,t)}function mg(i,t){i.uniform2iv(this.addr,t)}function gg(i,t){i.uniform3iv(this.addr,t)}function xg(i,t){i.uniform4iv(this.addr,t)}function _g(i,t){i.uniform1uiv(this.addr,t)}function yg(i,t){i.uniform2uiv(this.addr,t)}function vg(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$o(Ju):a=Zu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Sg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qu,r[a])}function wg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=$o(Ku):a=td;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Eg(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ju,r[a])}function Tg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return yg;case 36295:return vg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Eg}}var wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}},Ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},Tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function Du(i,t){i.seq.push(t),i.map[t.id]=t}function Ag(i,t,e){let n=i.name,s=n.length;for(bc.lastIndex=0;;){let r=bc.exec(n),a=bc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Du(e,c===void 0?new wc(o,i,t):new Ec(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Tc(o),Du(e,d)),e=d}}}var Bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ag(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Nu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rg=37297,Cg=0;function Ig(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Uu=new kt;function Pg(i){te._getMatrix(Uu,te.workingColorSpace,i);let t=`mat3( ${Uu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ig(i.getShaderSource(t),o)}else return r}function Lg(i,t){let e=Pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Dg={[$l]:"Linear",[Zl]:"Reinhard",[Jl]:"Cineon",[Rr]:"ACESFilmic",[jl]:"AgX",[Ql]:"Neutral",[Kl]:"Custom"};function Ng(i,t){let e=Dg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wo=new F;function Ug(){te.getLuminanceCoefficients(Wo);let i=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Og(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function kr(i){return i!==""}function Ou(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(kg,zg)}function zg(i,t){let e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ac(e)}var Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(i){return i.replace(Hg,Gg)}function Gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Vg={[Ki]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function Wg(i){return Vg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xg={[Us]:"ENVMAP_MODE_REFRACTION"};function qg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yg={[no]:"ENVMAP_BLENDING_MULTIPLY",[iu]:"ENVMAP_BLENDING_MIX",[su]:"ENVMAP_BLENDING_ADD"};function $g(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yg[i.combine]||"ENVMAP_BLENDING_NONE"}function Zg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Wg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qg(e),d=$g(e),u=Fg(e),f=Og(r),x=s.createProgram(),y,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(kr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(kr).join(`
`),m.length>0&&(m+=`
`)):(y=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),m=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),Ug(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=Ac(a),a=Ou(a,e),a=Bu(a,e),o=Ac(o),o=Ou(o,e),o=Bu(o,e),a=ku(a),o=ku(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=p+y+a,T=p+m+o,w=Nu(s,s.VERTEX_SHADER,v),R=Nu(s,s.FRAGMENT_SHADER,T);s.attachShader(x,w),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(w)||"",W=s.getShaderInfoLog(R)||"",C=N.trim(),H=O.trim(),q=W.trim(),X=!0,st=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,R);else{let Y=Fu(s,w,"vertex"),et=Fu(s,R,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+Y+`
`+et)}else C!==""?Ot("WebGLProgram: Program Info Log:",C):(H===""||q==="")&&(st=!1);st&&(I.diagnostics={runnable:X,programLog:C,vertexShader:{log:H,prefix:y},fragmentShader:{log:q,prefix:m}})}s.deleteShader(w),s.deleteShader(R),_=new Bs(s,x),S=Bg(s,x)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,Rg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=R,this}var Jg=0,Rc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cc(t),e.set(t,n)),n}},Cc=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function Kg(i){return i===Di||i===Nr||i===Ur}function jg(i,t,e,n,s,r){let a=new lr,o=new Rc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,S,L,I,N,O){let W=I.fog,C=N.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||H,q),st=u[_.type],Y=n.precision;_.precision!==null&&(Y=n.getMaxPrecision(_.precision),Y!==_.precision&&Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let et=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,nt=et!==void 0?et.length:0,It=0;C.morphAttributes.position!==void 0&&(It=1),C.morphAttributes.normal!==void 0&&(It=2),C.morphAttributes.color!==void 0&&(It=3);let Vt,j,Mt,Tt;if(st){let yt=Yn[st];Vt=yt.vertexShader,j=yt.fragmentShader}else{Vt=_.vertexShader,j=_.fragmentShader;let yt=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,yt,oe),Mt=yt.id,Tt=oe.id}let Nt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Xt=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,Ft=!!_.map,ae=!!_.matcap,he=!!X,Kt=he&&X.isPMREMTexture===!0,Ve=!!_.aoMap,Pe=!!_.lightMap,rn=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,Bn=!!_.displacementMap,ke=!!_.emissiveMap,yn=!!_.metalnessMap,vn=!!_.roughnessMap,Mn=_.anisotropy>0,U=_.clearcoat>0,bn=_.diffuseRoughness>0,me=_.dispersion>0,ge=_.retroreflectivity>0,xt=_.iridescence>0,Le=_.sheen>0,Ut=_.transmission>0,Ht=Mn&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,M=U&&!!_.clearcoatNormalMap,k=U&&!!_.clearcoatRoughnessMap,rt=bn&&!!_.diffuseRoughnessMap,tt=xt&&!!_.iridescenceMap,ht=xt&&!!_.iridescenceThicknessMap,mt=Le&&!!_.sheenColorMap,Z=Le&&!!_.sheenRoughnessMap,J=!!_.specularMap,dt=!!_.specularColorMap,P=!!_.specularIntensityMap,Q=Ut&&!!_.transmissionMap,$=Ut&&!!_.thicknessMap,ft=!!_.gradientMap,lt=!!_.alphaMap,ut=_.alphaTest>0,Lt=!!_.alphaHash,Zt=!!_.extensions,at=Xn;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(at=i.toneMapping);let Dt=Kt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Yt={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:Vt,fragmentShader:j,defines:_.defines,customVertexShaderID:Mt,customFragmentShaderID:Tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&N.instanceColor!==null,instancingMorph:Xt&&N.morphTexture!==null,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:ae,envMap:he,envMapMode:he&&X.mapping,envMapPMREM:Kt,envMapMaxLod:Kt?Dt.length-1:null,envMapSize:Kt?Dt[0].width:null,aoMap:Ve,lightMap:Pe,bumpMap:rn,normalMap:Me,displacementMap:Bn,emissiveMap:ke,normalMapObjectSpace:Me&&_.normalMapType===ou,normalMapTangentSpace:Me&&_.normalMapType===Fr,packedNormalMap:Me&&_.normalMapType===Fr&&Kg(_.normalMap.format),metalnessMap:yn,roughnessMap:vn,anisotropy:Mn,anisotropyMap:Ht,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:k,diffuseRoughness:bn,diffuseRoughnessMap:rt,dispersion:me,retroreflection:ge,iridescence:xt,iridescenceMap:tt,iridescenceThicknessMap:ht,sheen:Le,sheenColorMap:mt,sheenRoughnessMap:Z,specularMap:J,specularColorMap:dt,specularIntensityMap:P,transmission:Ut,transmissionMap:Q,thicknessMap:$,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Li&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:Lt,combine:_.combine,mapUv:Ft&&f(_.map.channel),aoMapUv:Ve&&f(_.aoMap.channel),lightMapUv:Pe&&f(_.lightMap.channel),bumpMapUv:rn&&f(_.bumpMap.channel),normalMapUv:Me&&f(_.normalMap.channel),displacementMapUv:Bn&&f(_.displacementMap.channel),emissiveMapUv:ke&&f(_.emissiveMap.channel),metalnessMapUv:yn&&f(_.metalnessMap.channel),roughnessMapUv:vn&&f(_.roughnessMap.channel),anisotropyMapUv:Ht&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:dt&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Me||Mn),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ft||lt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:It,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===re,decodeVideoTextureEmissive:ke&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Se,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||Ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function y(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(S,_),p(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let S=u[_.type],L;if(S){let I=Yn[S];L=Mu.clone(I.uniforms)}else L=_.uniforms;return L}function T(_,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new Zg(i,S,_,s),c.push(L),h.set(S,L)),L}function w(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:E}}function Qg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,y,m,p){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:x,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=x,v.materialVariant=a(u),v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function l(u,f,x,y,m,p,v){v.reversedDepth===!0&&(m=-m);let T=o(u,f,x,y,m,p);x.transmission>0?n.push(T):x.transparent===!0?s.push(T):e.push(T)}function c(u,f,x,y,m,p){let v=o(u,f,x,y,m,p);x.transmission>0?n.unshift(v):x.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||tx),n.length>1&&n.sort(f||Hu),s.length>1&&s.sort(f||Hu)}function d(){for(let u=t,f=i.length;u<f;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ex(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Gu,i.set(n,[a])):s>=r.length?(a=new Gu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function nx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new ct};break;case"SpotLight":e={position:new F,direction:new F,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function ix(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sx=0;function rx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ax(i){let t=new nx,e=ix(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new le,a=new le;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,x=0,y=0,m=0,p=0,v=0,T=0,w=0,R=0,E=0,_=0,S=0,L=0,I=0;c.sort(rx);for(let O=0,W=c.length;O<W;O++){let C=c[O],H=C.color,q=C.intensity,X=C.distance,st=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Di?st=C.shadow.map.texture:st=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=H.r*q,d+=H.g*q,u+=H.b*q;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],q);I++}else if(C.isSunLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let et=C.shadow,nt=e.get(C);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[x]=nt,n.sunShadowMap[x]=st;let It=et.getViewportCount();for(let Vt=0;Vt<It;Vt++)n.sunShadowMatrix[y+Vt]=et.getMatrix(Vt),n.sunShadowCascade[y+Vt]=et._cascadeData[Vt];y+=It,x++}n.sun[f]=Y,f++}else if(C.isDirectionalLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let et=C.shadow,nt=e.get(C);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=C.shadow.matrix,R++}n.directional[m]=Y,m++}else if(C.isSpotLight){let Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(H).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[v]=Y;let et=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,et.updateMatrices(C),C.castShadow&&L++),n.spotLightMatrix[v]=et.matrix,C.castShadow){let nt=e.get(C);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.spotShadow[v]=nt,n.spotShadowMap[v]=st,_++}v++}else if(C.isRectAreaLight){let Y=t.get(C);Y.color.copy(H).multiplyScalar(q),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=Y,T++}else if(C.isPointLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let et=C.shadow,nt=e.get(C);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,n.pointShadow[p]=nt,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=C.shadow.matrix,E++}n.point[p]=Y,p++}else if(C.isHemisphereLight){let Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(q),Y.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[w]=Y,w++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==v||N.rectAreaLength!==T||N.hemiLength!==w||N.numSunShadows!==x||N.numDirectionalShadows!==R||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=p,n.hemi.length=w,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=v,N.rectAreaLength=T,N.hemiLength=w,N.numSunShadows=x,N.numDirectionalShadows=R,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=I,n.version=sx++)}function l(c,h){let d=0,u=0,f=0,x=0,y=0,m=0,p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let w=c[v];if(w.isSunLight){let R=n.sun[d];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(p),d++}else if(w.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(w.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),x++}else if(w.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Vu(i){let t=new ax(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ox(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vu(i),t.set(s,[o])):r>=a.length?(o=new Vu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ux=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Wu=new le,Br=new F,Sc=new F;function dx(i,t,e){let n=new Si,s=new qt,r=new qt,a=new xe,o=new Ga,l=new Va,c={},h=e.maxTextureSize,d={[Pi]:Fe,[Fe]:Pi,[Se]:Se},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:lx,fragmentShader:cx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new Ne;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new $t(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let p=this.type;this.render=function(E,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Bh&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ji),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=p!==this.type;W&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=E.length;C<H;C++){let q=E[C],X=q.shadow;if(X===void 0){Ot("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let st=X.getFrameExtents();s.multiply(st),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,X.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||W===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ns){if(q.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new pn(s.x,s.y,{format:Di,type:Un,minFilter:en,magFilter:en,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new oi(s.x,s.y,Rn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=si,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=we,X.map.depthTexture.magFilter=we}else q.isPointLight?(X.map=new zr(s.x),X.map.depthTexture=new _r(s.x,Nn)):(X.map=new pn(s.x,s.y),X.map.depthTexture=new oi(s.x,s.y,Nn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=si,this.type===Ki?(X.map.depthTexture.compareFunction=Y?lc:oc,X.map.depthTexture.minFilter=en,X.map.depthTexture.magFilter=en):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=we,X.map.depthTexture.magFilter=we);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let et=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,S);let nt=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:S.layers;for(let It=0;It<et;It++){let Vt=X.getCamera(It);if(q.isPointLight){let j=X.camera,Mt=X.matrix,Tt=q.distance||j.far;Tt!==j.far&&(j.far=Tt,j.updateProjectionMatrix()),Br.setFromMatrixPosition(q.matrixWorld),j.position.copy(Br),Sc.copy(j.position),Sc.add(hx[It]),j.up.copy(ux[It]),j.lookAt(Sc),j.updateMatrixWorld(),Mt.makeTranslation(-Br.x,-Br.y,-Br.z),Wu.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Wu,j.coordinateSystem,j.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,It),i.clear();else{It===0&&(i.setRenderTarget(X.map),i.clear());let j=X.getViewport(It);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),O.viewport(a)}n=X.getFrustum(It),w(_,S,Vt,q,nt,this.type)}X.isPointLightShadow!==!0&&this.type===Ns&&v(X,S),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,I,N)};function v(E,_){let S=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new pn(s.x,s.y,{format:Di,type:Un}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,S,f,y,null)}function T(E,_,S,L){let I=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=I.uuid,W=_.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let H=C[W];H===void 0&&(H=I.clone(),C[W]=H,_.addEventListener("dispose",R)),I=H}if(I.visible=_.visible,I.wireframe=_.wireframe,L===Ns?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:d[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=S}return I}function w(E,_,S,L,I,N){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Ns)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let C=t.update(E),H=E.material;if(Array.isArray(H)){let q=C.groups;for(let X=0,st=q.length;X<st;X++){let Y=q[X],et=H[Y.materialIndex];if(et&&et.visible){let nt=T(E,et,L,N);E.onBeforeShadow(i,E,_,S,C,nt,Y),i.renderBufferDirect(S,null,C,nt,E,Y),E.onAfterShadow(i,E,_,S,C,nt,Y)}}}else if(H.visible){let q=T(E,H,L,N);E.onBeforeShadow(i,E,_,S,C,q,null),i.renderBufferDirect(S,null,C,q,E,null),E.onAfterShadow(i,E,_,S,C,q,null)}}let W=E.children;for(let C=0,H=W.length;C<H;C++)w(W[C],_,S,L,I,N)}function R(E){E.target.removeEventListener("dispose",R);for(let S in c){let L=c[S],I=E.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}}function fx(i,t){function e(){let P=!1,Q=new xe,$=null,ft=new xe(0,0,0,0);return{setMask:function(lt){$!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){P=lt},setClear:function(lt,ut,Lt,Zt,at){at===!0&&(lt*=Zt,ut*=Zt,Lt*=Zt),Q.set(lt,ut,Lt,Zt),ft.equals(Q)===!1&&(i.clearColor(lt,ut,Lt,Zt),ft.copy(Q))},reset:function(){P=!1,$=null,ft.set(-1,0,0,0)}}}function n(){let P=!1,Q=!1,$=null,ft=null,lt=null;return{setReversed:function(ut){if(Q!==ut){let Lt=t.get("EXT_clip_control");ut?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Q=ut;let Zt=lt;lt=null,this.setClear(Zt)}},getReversed:function(){return Q},setTest:function(ut){ut?bt(i.DEPTH_TEST):Xt(i.DEPTH_TEST)},setMask:function(ut){$!==ut&&!P&&(i.depthMask(ut),$=ut)},setFunc:function(ut){if(Q&&(ut=_u[ut]),ft!==ut){switch(ut){case Aa:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ut}},setLocked:function(ut){P=ut},setClear:function(ut){lt!==ut&&(lt=ut,Q&&(ut=1-ut),i.clearDepth(ut))},reset:function(){P=!1,$=null,ft=null,lt=null,Q=!1}}}function s(){let P=!1,Q=null,$=null,ft=null,lt=null,ut=null,Lt=null,Zt=null,at=null;return{setTest:function(Dt){P||(Dt?bt(i.STENCIL_TEST):Xt(i.STENCIL_TEST))},setMask:function(Dt){Q!==Dt&&!P&&(i.stencilMask(Dt),Q=Dt)},setFunc:function(Dt,Yt,yt){($!==Dt||ft!==Yt||lt!==yt)&&(i.stencilFunc(Dt,Yt,yt),$=Dt,ft=Yt,lt=yt)},setOp:function(Dt,Yt,yt){(ut!==Dt||Lt!==Yt||Zt!==yt)&&(i.stencilOp(Dt,Yt,yt),ut=Dt,Lt=Yt,Zt=yt)},setLocked:function(Dt){P=Dt},setClear:function(Dt){at!==Dt&&(i.clearStencil(Dt),at=Dt)},reset:function(){P=!1,Q=null,$=null,ft=null,lt=null,ut=null,Lt=null,Zt=null,at=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,x=[],y=null,m=!1,p=null,v=null,T=null,w=null,R=null,E=null,_=null,S=new ct(0,0,0),L=0,I=!1,N=null,O=null,W=null,C=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,st=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=st>=2);let et=null,nt={},It=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),j=new xe().fromArray(It),Mt=new xe().fromArray(Vt);function Tt(P,Q,$,ft){let lt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(P,ut),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<$;Lt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(Q+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ut}let Nt={};Nt[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),a.setFunc(Ss),rn(!1),Me(Vl),bt(i.CULL_FACE),Ve(ji);function bt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Xt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ee(P,Q){return u[P]!==Q?(i.bindFramebuffer(P,Q),u[P]=Q,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ft(P,Q){let $=x,ft=!1;if(P){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let lt=P.textures;if($.length!==lt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Lt=lt.length;ut<Lt;ut++)$[ut]=i.COLOR_ATTACHMENT0+ut;$.length=lt.length,ft=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ft=!0);ft&&i.drawBuffers($)}function ae(P){return y!==P?(i.useProgram(P),y=P,!0):!1}let he={[Qi]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};he[Gh]=i.MIN,he[Vh]=i.MAX;let Kt={[Wh]:i.ZERO,[Xh]:i.ONE,[qh]:i.SRC_COLOR,[ql]:i.SRC_ALPHA,[jh]:i.SRC_ALPHA_SATURATE,[Jh]:i.DST_COLOR,[$h]:i.DST_ALPHA,[Yh]:i.ONE_MINUS_SRC_COLOR,[Yl]:i.ONE_MINUS_SRC_ALPHA,[Kh]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[Qh]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[eu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(P,Q,$,ft,lt,ut,Lt,Zt,at,Dt){if(P===ji){m===!0&&(Xt(i.BLEND),m=!1);return}if(m===!1&&(bt(i.BLEND),m=!0),P!==kh){if(P!==p||Dt!==I){if((v!==Qi||R!==Qi)&&(i.blendEquation(i.FUNC_ADD),v=Qi,R=Qi),Dt)switch(P){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",P);break}else switch(P){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wl:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",P);break}T=null,w=null,E=null,_=null,S.set(0,0,0),L=0,p=P,I=Dt}return}lt=lt||Q,ut=ut||$,Lt=Lt||ft,(Q!==v||lt!==R)&&(i.blendEquationSeparate(he[Q],he[lt]),v=Q,R=lt),($!==T||ft!==w||ut!==E||Lt!==_)&&(i.blendFuncSeparate(Kt[$],Kt[ft],Kt[ut],Kt[Lt]),T=$,w=ft,E=ut,_=Lt),(Zt.equals(S)===!1||at!==L)&&(i.blendColor(Zt.r,Zt.g,Zt.b,at),S.copy(Zt),L=at),p=P,I=!1}function Pe(P,Q){P.side===Se?Xt(i.CULL_FACE):bt(i.CULL_FACE);let $=P.side===Fe;Q&&($=!$),rn($),P.blending===Li&&P.transparent===!1?Ve(ji):Ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ft=P.stencilWrite;o.setTest(ft),ft&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rn(P){N!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),N=P)}function Me(P){P!==Fh?(bt(i.CULL_FACE),P!==O&&(P===Vl?i.cullFace(i.BACK):P===Oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xt(i.CULL_FACE),O=P}function Bn(P){P!==W&&(X&&i.lineWidth(P),W=P)}function ke(P,Q,$){P?(bt(i.POLYGON_OFFSET_FILL),(C!==Q||H!==$)&&(C=Q,H=$,a.getReversed()&&(Q=-Q,$=-$),i.polygonOffset(Q,$))):Xt(i.POLYGON_OFFSET_FILL)}function yn(P){P?bt(i.SCISSOR_TEST):Xt(i.SCISSOR_TEST)}function vn(P){P===void 0&&(P=i.TEXTURE0+q-1),et!==P&&(i.activeTexture(P),et=P)}function Mn(P,Q,$){$===void 0&&(et===null?$=i.TEXTURE0+q-1:$=et);let ft=nt[$];ft===void 0&&(ft={type:void 0,texture:void 0},nt[$]=ft),(ft.type!==P||ft.texture!==Q)&&(et!==$&&(i.activeTexture($),et=$),i.bindTexture(P,Q||Nt[P]),ft.type=P,ft.texture=Q)}function U(){let P=nt[et];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function bn(){try{i.compressedTexImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function me(){try{i.compressedTexImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function ge(){try{i.texSubImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function xt(){try{i.texSubImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function Le(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function Ht(){try{i.texStorage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function M(){try{i.texImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function k(){try{i.texImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function rt(P){return d[P]!==void 0?d[P]:i.getParameter(P)}function tt(P,Q){d[P]!==Q&&(i.pixelStorei(P,Q),d[P]=Q)}function ht(P){j.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),j.copy(P))}function mt(P){Mt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Mt.copy(P))}function Z(P,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let ft=$.get(P);ft===void 0&&(ft=i.getUniformBlockIndex(Q,P.name),i.uniformBlockBinding(Q,ft,ft),$.set(P,ft))}function J(P,Q,$){let lt=c.get(Q).get(P);l[lt]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,$),l[lt]=$)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,nt={},u={},l={},f=new WeakMap,x=[],y=null,m=!1,p=null,v=null,T=null,w=null,R=null,E=null,_=null,S=new ct(0,0,0),L=0,I=!1,N=null,O=null,W=null,C=null,H=null,j.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:Xt,bindFramebuffer:Ee,drawBuffers:Ft,useProgram:ae,setBlending:Ve,setMaterial:Pe,setFlipSided:rn,setCullFace:Me,setLineWidth:Bn,setPolygonOffset:ke,setScissorTest:yn,activeTexture:vn,bindTexture:Mn,unbindTexture:U,compressedTexImage2D:bn,compressedTexImage3D:me,texImage2D:M,texImage3D:k,pixelStorei:tt,getParameter:rt,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Ht,texStorage3D:A,texSubImage2D:ge,texSubImage3D:xt,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ut,scissor:ht,viewport:mt,reset:dt}}function px(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap,d=new Set,u,f=new WeakMap,x=new Set,y=new FinalizationRegistry(A=>x.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return m?new OffscreenCanvas(A,M):ar("canvas")}function v(A,M,k){let rt=1,tt=Ht(A);if((tt.width>k||tt.height>k)&&(rt=k/Math.max(tt.width,tt.height)),rt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(rt*tt.width),mt=Math.floor(rt*tt.height);u===void 0&&(u=p(ht,mt));let Z=M?p(ht,mt):u;return Z.width=ht,Z.height=mt,Z.getContext("2d").drawImage(A,0,0,ht,mt),Ot("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ht+"x"+mt+")."),Z}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function T(A){return A.generateMipmaps}function w(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,M,k,rt,tt,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;rt&&(mt=t.get("EXT_texture_norm16"),mt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8),k===i.UNSIGNED_SHORT&&mt&&(Z=mt.R16_EXT),k===i.SHORT&&mt&&(Z=mt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),M===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8),k===i.UNSIGNED_SHORT&&mt&&(Z=mt.RG16_EXT),k===i.SHORT&&mt&&(Z=mt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_SHORT&&mt&&(Z=mt.RGB16_EXT),k===i.SHORT&&mt&&(Z=mt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),M===i.RGBA){let J=ht?rr:te.getTransfer(tt);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=J===re?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&mt&&(Z=mt.RGBA16_EXT),k===i.SHORT&&mt&&(Z=mt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(A,M){let k;return A?M===null||M===Nn||M===es?k=i.DEPTH24_STENCIL8:M===Rn?k=i.DEPTH32F_STENCIL8:M===Fs&&(k=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Nn||M===es?k=i.DEPTH_COMPONENT24:M===Rn?k=i.DEPTH_COMPONENT32F:M===Fs&&(k=i.DEPTH_COMPONENT16),k}function S(A,M){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==we&&A.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function L(A){let M=new WeakRef(A);n.get(A).__ref=M,x.add(M),y.register(A,M,M)}function I(A){let M=n.get(A).__ref;M!==void 0&&(x.delete(M),y.unregister(M))}function N(A){W(A.target)}function O(A){C(A.target)}function W(A){A.removeEventListener("dispose",N),I(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function C(A){A.removeEventListener("dispose",O),I(A),st(A)}function H(){for(let A of x){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?C(M):W(M))}x.clear(),d.clear()}function q(A){let M=n.get(A);if(M.__webglInit===void 0)return;let k=A.source,rt=f.get(k);if(rt){let tt=rt[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&X(A),Object.keys(rt).length===0&&f.delete(k)}n.remove(A)}function X(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let k=A.source,rt=f.get(k);delete rt[M.__cacheKey],a.memory.textures--}function st(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&W(k),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let ht=0;ht<M.__webglFramebuffer[tt].length;ht++)i.deleteFramebuffer(M.__webglFramebuffer[tt][ht]);else i.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[tt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let rt=A.textures;for(let tt=0,ht=rt.length;tt<ht;tt++){let mt=n.get(rt[tt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(rt[tt])}n.remove(A)}let Y=0;function et(){Y=0}function nt(){return Y}function It(A){Y=A}function Vt(){let A=Y;return A>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,A}function j(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Mt(A,M){let k=n.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let rt=A.image;if(rt===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(k,A,M);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function Tt(A,M){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Pe(k,A,M);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function Nt(A,M){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Pe(k,A,M);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function bt(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){rn(k,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}let Xt={[ws]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},Ee={[we]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Ft={[cu]:i.NEVER,[cc]:i.ALWAYS,[hu]:i.LESS,[oc]:i.LEQUAL,[uu]:i.EQUAL,[lc]:i.GEQUAL,[du]:i.GREATER,[fu]:i.NOTEQUAL};function ae(A,M){if(M.type===Rn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===ro||M.magFilter===Cr||M.magFilter===ci||M.minFilter===en||M.minFilter===ro||M.minFilter===Cr||M.minFilter===ci)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Xt[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Xt[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Xt[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ee[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ee[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ft[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===we||M.minFilter!==Cr&&M.minFilter!==ci||M.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function he(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),L(M));let rt=M.source,tt=f.get(rt);tt===void 0&&(tt={},f.set(rt,tt));let ht=j(M);if(ht!==A.__cacheKey){tt[ht]===void 0&&(tt[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),tt[ht].usedTimes++;let mt=tt[A.__cacheKey];mt!==void 0&&(tt[A.__cacheKey].usedTimes--,mt.usedTimes===0&&X(M)),A.__cacheKey=ht,A.__webglTexture=tt[ht].texture}return k}function Kt(A,M,k){return Math.floor(Math.floor(A/k)/M)}function Ve(A,M,k,rt){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,rt,M.data);else{ht.sort((P,Q)=>P.start-Q.start);let mt=0;for(let P=1;P<ht.length;P++){let Q=ht[mt],$=ht[P],ft=Q.start+Q.count,lt=Kt($.start,M.width,4),ut=Kt(Q.start,M.width,4);$.start<=ft+1&&lt===ut&&Kt($.start+$.count-1,M.width,4)===lt?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++mt,ht[mt]=$)}ht.length=mt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let P=0,Q=ht.length;P<Q;P++){let $=ht[P],ft=Math.floor($.start/4),lt=Math.ceil($.count/4),ut=ft%M.width,Lt=Math.floor(ft/M.width),Zt=lt,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(i.TEXTURE_2D,0,ut,Lt,Zt,at,k,rt,M.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function Pe(A,M,k){let rt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(rt=i.TEXTURE_3D);let tt=he(A,M),ht=M.source;e.bindTexture(rt,A.__webglTexture,i.TEXTURE0+k);let mt=n.get(ht);if(ht.version!==mt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let at=te.getPrimaries(te.workingColorSpace),Dt=M.colorSpace===ui?null:te.getPrimaries(M.colorSpace),Yt=M.colorSpace===ui||at===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let J=v(M.image,!1,s.maxTextureSize);J=Ut(M,J);let dt=r.convert(M.format,M.colorSpace),P=r.convert(M.type),Q=E(M.internalFormat,dt,P,M.normalized,M.colorSpace,M.isVideoTexture);ae(rt,M);let $,ft=M.mipmaps,lt=M.isVideoTexture!==!0,ut=mt.__version===void 0||tt===!0,Lt=ht.dataReady,Zt=S(M,J);if(M.isDepthTexture)Q=_(M.format===hi,M.type),ut&&(lt?e.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,dt,P,null));else if(M.isDataTexture)if(ft.length>0){lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Zt,Q,ft[0].width,ft[0].height);for(let at=0,Dt=ft.length;at<Dt;at++)$=ft[at],lt?Lt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,$.width,$.height,dt,P,$.data):e.texImage2D(i.TEXTURE_2D,at,Q,$.width,$.height,0,dt,P,$.data);M.generateMipmaps=!1}else lt?(ut&&e.texStorage2D(i.TEXTURE_2D,Zt,Q,J.width,J.height),Lt&&Ve(M,J,dt,P)):e.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,dt,P,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){lt&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Q,ft[0].width,ft[0].height,J.depth);for(let at=0,Dt=ft.length;at<Dt;at++)if($=ft[at],M.format!==Fn)if(dt!==null)if(lt){if(Lt)if(M.layerUpdates.size>0){let Yt=gc($.width,$.height,M.format,M.type);for(let yt of M.layerUpdates){let oe=$.data.subarray(yt*Yt/$.data.BYTES_PER_ELEMENT,(yt+1)*Yt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,yt,$.width,$.height,1,dt,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,$.width,$.height,J.depth,dt,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Q,$.width,$.height,J.depth,0,$.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,$.width,$.height,J.depth,dt,P,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Q,$.width,$.height,J.depth,0,dt,P,$.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Zt,Q,ft[0].width,ft[0].height);for(let at=0,Dt=ft.length;at<Dt;at++)$=ft[at],M.format!==Fn?dt!==null?lt?Lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,$.width,$.height,dt,$.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Q,$.width,$.height,0,$.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Lt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,$.width,$.height,dt,P,$.data):e.texImage2D(i.TEXTURE_2D,at,Q,$.width,$.height,0,dt,P,$.data)}else if(M.isDataArrayTexture)if(lt){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Q,J.width,J.height,J.depth),Lt)if(M.layerUpdates.size>0){let at=gc(J.width,J.height,M.format,M.type);for(let Dt of M.layerUpdates){let Yt=J.data.subarray(Dt*at/J.data.BYTES_PER_ELEMENT,(Dt+1)*at/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,J.width,J.height,1,dt,P,Yt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,P,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,dt,P,J.data);else if(M.isData3DTexture)lt?(ut&&e.texStorage3D(i.TEXTURE_3D,Zt,Q,J.width,J.height,J.depth),Lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,P,J.data)):e.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,dt,P,J.data);else if(M.isFramebufferTexture){if(ut)if(lt)e.texStorage2D(i.TEXTURE_2D,Zt,Q,J.width,J.height);else{let at=J.width,Dt=J.height;for(let Yt=0;Yt<Zt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,Q,at,Dt,0,dt,P,null),at>>=1,Dt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),J.parentNode!==at){at.appendChild(J),d.add(M),at.onpaint=Dt=>{let Yt=Dt.changedElements;for(let yt of d)Yt.includes(yt.image)&&(yt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Yt=i.RGBA,yt=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,yt,oe,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&ut){let at=Ht(ft[0]);e.texStorage2D(i.TEXTURE_2D,Zt,Q,at.width,at.height)}for(let at=0,Dt=ft.length;at<Dt;at++)$=ft[at],lt?Lt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,dt,P,$):e.texImage2D(i.TEXTURE_2D,at,Q,dt,P,$);M.generateMipmaps=!1}else if(lt){if(ut){let at=Ht(J);e.texStorage2D(i.TEXTURE_2D,Zt,Q,at.width,at.height)}Lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,P,J)}else e.texImage2D(i.TEXTURE_2D,0,Q,dt,P,J);T(M)&&M.mipmapsAutoUpdate===!0&&w(rt),mt.__version=ht.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function rn(A,M,k){if(M.image.length!==6)return;let rt=he(A,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let ht=n.get(tt);if(tt.version!==ht.__version||rt===!0){e.activeTexture(i.TEXTURE0+k);let mt=te.getPrimaries(te.workingColorSpace),Z=M.colorSpace===ui?null:te.getPrimaries(M.colorSpace),J=M.colorSpace===ui||mt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let dt=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let yt=0;yt<6;yt++)!dt&&!P?Q[yt]=v(M.image[yt],!0,s.maxCubemapSize):Q[yt]=P?M.image[yt].image:M.image[yt],Q[yt]=Ut(M,Q[yt]);let $=Q[0],ft=r.convert(M.format,M.colorSpace),lt=r.convert(M.type),ut=E(M.internalFormat,ft,lt,M.normalized,M.colorSpace),Lt=M.isVideoTexture!==!0,Zt=ht.__version===void 0||rt===!0,at=tt.dataReady,Dt=S(M,$);ae(i.TEXTURE_CUBE_MAP,M);let Yt;if(M.isDepthTexture){if(ut=_(M.format===hi,M.type),Zt)if(Lt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ut,$.width,$.height);else for(let yt=0;yt<6;yt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,$.width,$.height,0,ft,lt,null)}else if(dt){Lt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ut,$.width,$.height);for(let yt=0;yt<6;yt++){Yt=Q[yt].mipmaps;for(let oe=0;oe<Yt.length;oe++){let ze=Yt[oe];M.format!==Fn?ft!==null?Lt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe,0,0,ze.width,ze.height,ft,ze.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe,ut,ze.width,ze.height,0,ze.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe,0,0,ze.width,ze.height,ft,lt,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe,ut,ze.width,ze.height,0,ft,lt,ze.data)}}}else{if(Yt=M.mipmaps,Lt&&Zt){Yt.length>0&&Dt++;let yt=Ht(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ut,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(P){Lt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Q[yt].width,Q[yt].height,ft,lt,Q[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,Q[yt].width,Q[yt].height,0,ft,lt,Q[yt].data);for(let oe=0;oe<Yt.length;oe++){let mi=Yt[oe].image[yt].image;Lt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe+1,0,0,mi.width,mi.height,ft,lt,mi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe+1,ut,mi.width,mi.height,0,ft,lt,mi.data)}}else{Lt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ft,lt,Q[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,ft,lt,Q[yt]);for(let oe=0;oe<Yt.length;oe++){let ze=Yt[oe];Lt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe+1,0,0,ft,lt,ze.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,oe+1,ut,ft,lt,ze.image[yt])}}}T(M)&&M.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),ht.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Me(A,M,k,rt,tt,ht){let mt=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),J=E(k.internalFormat,mt,Z,k.normalized,k.colorSpace),dt=n.get(M),P=n.get(k);if(P.__renderTarget=M,!dt.__hasExternalTextures){let Q=Math.max(1,M.width>>ht),$=Math.max(1,M.height>>ht);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ht,J,Q,$,M.depth,0,mt,Z,null):e.texImage2D(tt,ht,J,Q,$,0,mt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,tt,P.__webglTexture,0,ge(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,tt,P.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bn(A,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let rt=M.depthTexture,tt=rt&&rt.isDepthTexture?rt.type:null,ht=_(M.stencilBuffer,tt),mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(M),ht,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(M),ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ht,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let rt=M.textures;for(let tt=0;tt<rt.length;tt++){let ht=rt[tt],mt=r.convert(ht.format,ht.colorSpace),Z=r.convert(ht.type),J=E(ht.internalFormat,mt,Z,ht.normalized,ht.colorSpace);xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(M),J,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(M),J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(A,M,k){let rt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(M.depthTexture);tt.__renderTarget=M;let ht=rt?M.depthTexture.image[0]:M.depthTexture.image;(!tt.__webglTexture||ht.width!==M.width||ht.height!==M.height)&&(ht.width=M.width,ht.height=M.height,M.depthTexture.needsUpdate=!0),rt?bt(M.depthTexture,0):Mt(M.depthTexture,0);let mt=tt.__webglTexture,Z=ge(M),J=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,dt=M.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===si)xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,J,mt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,dt,J,mt,0);else if(M.depthTexture.format===hi)xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,J,mt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,dt,J,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yn(A){let M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let rt=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),rt){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,rt.removeEventListener("dispose",tt)};rt.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=rt}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let rt=0;rt<6;rt++)ke(M.__webglFramebuffer[rt],A,rt);else A.texture.mipmaps.length>0?ke(M.__webglFramebuffer[0],A,0):ke(M.__webglFramebuffer,A,0);else if(k){M.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[rt]),M.__webglDepthbuffer[rt]===void 0)M.__webglDepthbuffer[rt]=i.createRenderbuffer(),Bn(M.__webglDepthbuffer[rt],A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ht)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Bn(M.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vn(A,M,k){let rt=n.get(A);M!==void 0&&Me(rt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&yn(A)}function Mn(A){let M=A.texture,k=n.get(A),rt=n.get(M);A.addEventListener("dispose",O),L(A);let tt=A.textures,ht=A.isWebGLCubeRenderTarget===!0,mt=tt.length>1;if(mt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=M.version,a.memory.textures++),ht){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let J=0;J<M.mipmaps.length;J++)k.__webglFramebuffer[Z][J]=i.createFramebuffer()}else k.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)k.__webglFramebuffer[Z]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(mt)for(let Z=0,J=tt.length;Z<J;Z++){let dt=n.get(tt[Z]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&xt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<tt.length;Z++){let J=tt[Z];k.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let dt=r.convert(J.format,J.colorSpace),P=r.convert(J.type),Q=E(J.internalFormat,dt,P,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),$=ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Bn(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ae(i.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Me(k.__webglFramebuffer[Z][J],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Me(k.__webglFramebuffer[Z],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(M)?w(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let Z=0,J=tt.length;Z<J;Z++){let dt=tt[Z],P=n.get(dt),Q=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,P.__webglTexture),ae(Q,dt),Me(k.__webglFramebuffer,A,dt,i.COLOR_ATTACHMENT0+Z,Q,0),T(dt)&&w(Q)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,rt.__webglTexture),ae(Z,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)Me(k.__webglFramebuffer[J],A,M,i.COLOR_ATTACHMENT0,Z,J);else Me(k.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,Z,0);T(M)?w(Z):M.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&yn(A)}function U(A){let M=A.textures;for(let k=0,rt=M.length;k<rt;k++){let tt=M[k];if(T(tt)&&tt.mipmapsAutoUpdate===!0){let ht=R(A),mt=n.get(tt).__webglTexture;e.bindTexture(ht,mt),w(ht),e.unbindTexture()}}}let bn=[];function me(A){if(A.samples>0){if(xt(A)===!1){let M=A.textures,k=A.width,rt=A.height,tt=i.COLOR_BUFFER_BIT,ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),Z=M.length>1;if(Z)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let P=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,k,rt,0,0,k,rt,tt,i.NEAREST),l===!0&&(bn.length=0,bn.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&bn.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let P=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ge(A){return Math.min(s.maxSamples,A.samples)}function xt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ut(A,M){let k=A.colorSpace,rt=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==sr&&k!==ui&&(te.getTransfer(k)===re?(rt!==Fn||tt!==on)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",k)),M}function Ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Vt,this.resetTextureUnits=et,this.getTextureUnits=nt,this.setTextureUnits=It,this.setTexture2D=Mt,this.setTexture2DArray=Tt,this.setTexture3D=Nt,this.setTextureCube=bt,this.rebindTextures=vn,this.setupRenderTarget=Mn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=yn,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=xt,this.dispose=H}function mx(i,t){function e(n,s=ui){let r,a=te.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ec)return i.BYTE;if(n===nc)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===ao)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===ac)return i.RGB;if(n===Fn)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Os)return i.RED;if(n===co)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===uo)return i.RGBA_INTEGER;if(n===Ir||n===Pr||n===Lr||n===Dr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===_o||n===yo||n===vo||n===Mo||n===Nr||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===_o)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vo)return r.COMPRESSED_R11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Nr)return r.COMPRESSED_RG11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===So||n===wo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===Bo||n===ko)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===Ho||n===Ur||n===Go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:gx,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null,y=typeof XRWebGLBinding<"u",m=new Ic,p={},v=e.getContextAttributes(),T=null,w=null,R=[],E=[],_=new qt,S=null,L=null,I=new Je;I.viewport=new xe;let N=new Je;N.viewport=new xe;let O=[I,N],W=new to,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Mt=R[j];return Mt===void 0&&(Mt=new Rs,R[j]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(j){let Mt=R[j];return Mt===void 0&&(Mt=new Rs,R[j]=Mt),Mt.getGripSpace()},this.getHand=function(j){let Mt=R[j];return Mt===void 0&&(Mt=new Rs,R[j]=Mt),Mt.getHandSpace()};function q(j){let Mt=E.indexOf(j.inputSource);if(Mt===-1)return;let Tt=R[Mt];Tt!==void 0&&(Tt.update(j.inputSource,j.frame,c||a),Tt.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",st);for(let j=0;j<R.length;j++){let Mt=E[j];Mt!==null&&(E[j]=null,R[j].disconnect(Mt))}C=null,H=null,m.reset();for(let j in p)delete p[j];if(t.setRenderTarget(T),f=null,u=null,d=null,s=null,w=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),L!==null){let j=L.camera;j.fov=L.fov,j.zoom=L.zoom,j.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Nt=null,bt=null;v.depth&&(bt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=v.stencil?hi:si,Nt=v.stencil?es:Nn);let Xt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new pn(u.textureWidth,u.textureHeight,{format:Fn,type:on,depthTexture:new oi(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new pn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(j){for(let Mt=0;Mt<j.removed.length;Mt++){let Tt=j.removed[Mt],Nt=E.indexOf(Tt);Nt>=0&&(E[Nt]=null,R[Nt].disconnect(Tt))}for(let Mt=0;Mt<j.added.length;Mt++){let Tt=j.added[Mt],Nt=E.indexOf(Tt);if(Nt===-1){for(let Xt=0;Xt<R.length;Xt++)if(Xt>=E.length){E.push(Tt),Nt=Xt;break}else if(E[Xt]===null){E[Xt]=Tt,Nt=Xt;break}if(Nt===-1)break}let bt=R[Nt];bt&&bt.connect(Tt)}}function Y(j,Mt){Mt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Mt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Mt=j.near,Tt=j.far;m.texture!==null&&(m.depthNear>0&&(Mt=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),W.near=N.near=I.near=Mt,W.far=N.far=I.far=Tt,(C!==W.near||H!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),C=W.near,H=W.far),W.layers.mask=j.layers.mask|6,I.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Nt=j.parent,bt=W.cameras;Y(W,Nt);for(let Xt=0;Xt<bt.length;Xt++)Y(bt[Xt],Nt);W.projectionMatrix.copy(I.projectionMatrix),W.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&j.isPerspectiveCamera&&(L={camera:j,fov:j.fov,zoom:j.zoom}),et(j,W,Nt)};function et(j,Mt,Tt){Tt===null?j.matrix.copy(Mt.matrixWorld):(j.matrix.copy(Tt.matrixWorld),j.matrix.invert(),j.matrix.multiply(Mt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Mt.projectionMatrix),j.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(j){return p[j]};let nt=null;function It(j,Mt){if(h=Mt.getViewerPose(c||a),x=Mt,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let Nt=!1;Tt.length!==W.cameras.length&&(W.cameras.length=0,Nt=!0);for(let Ft=0;Ft<Tt.length;Ft++){let ae=Tt[Ft],he=null;if(f!==null)he=f.getViewport(ae);else{let Ve=d.getViewSubImage(u,ae);he=Ve.viewport,Ft===0&&(t.setRenderTargetTextures(w,Ve.colorTexture,Ve.depthStencilTexture),t.setRenderTarget(w))}let Kt=O[Ft];Kt===void 0&&(Kt=new Je,Kt.layers.enable(Ft),Kt.viewport=new xe,O[Ft]=Kt),Kt.matrix.fromArray(ae.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(ae.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(he.x,he.y,he.width,he.height),Ft===0&&(W.matrix.copy(Kt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Nt===!0&&W.cameras.push(Kt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Ft=d.getDepthInformation(Tt[0]);Ft&&Ft.isValid&&Ft.texture&&m.init(Ft,s.renderState)}if(bt&&bt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Ft=0;Ft<Tt.length;Ft++){let ae=Tt[Ft].camera;if(ae){let he=p[ae];he||(he=new yr,p[ae]=he);let Kt=d.getCameraImage(ae);he.sourceTexture=Kt}}}}for(let Tt=0;Tt<R.length;Tt++){let Nt=E[Tt],bt=R[Tt];Nt!==null&&bt!==void 0&&bt.update(Nt,Mt,c||a)}nt&&nt(j,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),x=null}let Vt=new Xu;Vt.setAnimationLoop(It),this.setAnimationLoop=function(j){nt=j},this.dispose=function(){}}},_x=new le,ed=new kt;ed.set(-1,0,0,0,1,0,0,0,1);function yx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,T,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),T=v.envMap,w=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(w)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ed),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vx(i,t,e,n){let s={},r={};function a(v,T){let w=T.program;n.uniformBlockBinding(v,w,s[v.id])}function o(v,T){let w=s[v.id];w===void 0&&(x(v),w=l(v),s[v.id]=w,v.addEventListener("dispose",m));let R=T.program;n.updateUBOMapping(v,R);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let T=i.createBuffer(),w=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(v){let T=s[v.id],w=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,_=w.length;E<_;E++){let S=w[E];if(Array.isArray(S))for(let L=0,I=S.length;L<I;L++)h(S[L],E,L,R);else h(S,E,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,T,w,R){if(u(v,T,w,R)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let I=_[L],N=y(I,!0);d(I,v.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function d(v,T,w){typeof v=="number"||typeof v=="boolean"?T[w]=v:v.isMatrix3?(T[w]=v.elements[0],T[w+1]=v.elements[1],T[w+2]=v.elements[2],T[w+3]=0,T[w+4]=v.elements[3],T[w+5]=v.elements[4],T[w+6]=v.elements[5],T[w+7]=0,T[w+8]=v.elements[6],T[w+9]=v.elements[7],T[w+10]=v.elements[8],T[w+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-w),w):v.toArray(T,w)}function u(v,T,w,R){let E=v.value,_=T+"_"+w;if(Array.isArray(E)){R[_]===void 0&&(R[_]=[]);let S=R[_],L=!1;for(let I=0;I<E.length;I++)f(E[I],S,I)===!0&&(L=!0);return L}return f(E,R,_)}function f(v,T,w){if(T[w]===void 0)return typeof v=="number"||typeof v=="boolean"?T[w]=v:ArrayBuffer.isView(v)?T[w]=v.slice():T[w]=v.clone(),!0;{let R=T[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return T[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function x(v){let T=v.uniforms,w=0,R=16;for(let _=0,S=T.length;_<S;_++){let L=Array.isArray(T[_])?T[_]:[T[_]];for(let I=0,N=L.length;I<N;I++){let O=L[I],W=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(T[_])||Array.isArray(O.value),H=w;for(let X=0,st=W.length;X<st;X++){let Y=W[X],et=y(Y,C),nt=w%R,It=nt%et.boundary,Vt=nt+It;w+=It,Vt!==0&&R-Vt<et.storage&&(w+=R-Vt),X===0&&(H=w),w+=et.storage}let q=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new q((w-H)/Float32Array.BYTES_PER_ELEMENT),O.__offset=H}}let E=w%R;return E>0&&(w+=R-E),v.__size=w,v.__cache={},this}function y(v,T){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=16,w.storage=48):v.isMatrix4?(w.boundary=16,w.storage=64):v.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(v){let T=v.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}var Mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qn=null;function bx(){return qn===null&&(qn=new qi(Mx,16,16,Di,Un),qn.name="DFG_LUT",qn.minFilter=en,qn.magFilter=en,qn.wrapS=zn,qn.wrapT=zn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var qo=class{constructor(t={}){let{canvas:e=mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=on}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let y=f,m=new Set([uo,ho,co]),p=new Set([on,Nn,Fs,es,oo,lo]),v=new Uint32Array(4),T=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},R=null,E=null,_=[],S=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,O=null,W=null,C=null,H=null;this._outputColorSpace=Ze;let q=0,X=0,st=null,Y=-1,et=null,nt=new xe,It=new xe,Vt=null,j=new ct(0),Mt=0,Tt=e.width,Nt=e.height,bt=1,Xt=null,Ee=null,Ft=new xe(0,0,Tt,Nt),ae=new xe(0,0,Tt,Nt),he=!1,Kt=new Si,Ve=new za,Pe=!1,rn=!1,Me=new le,Bn=new F,ke=new xe,yn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vn=!1;function Mn(){return st===null?bt:1}let U=n;function bn(b,D){return e.getContext(b,D)}let me,ge,xt,Le,Ut,Ht,A,M,k,rt,tt,ht,mt,Z,J,dt,P,Q,$,ft,lt,ut,Lt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),U===null){let D="webgl2";if(U=bn(D,b),U===null)throw bn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(b){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Bt("WebGLRenderer: "+b.message),b}function Zt(){me=new D0(U),me.init(),lt=new mx(U,me),ge=new b0(U,me,t,lt),xt=new fx(U,me),ge.reversedDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),W=U.createFramebuffer(),C=U.createFramebuffer(),H=U.createFramebuffer(),Le=new F0(U),Ut=new Qg,Ht=new px(U,me,xt,Ut,ge,lt,Le),A=new L0(I),M=new Bf(U),ut=new v0(U,M),k=new N0(U,M,Le,ut),rt=new B0(U,k,M,ut,Le),Q=new O0(U,ge,Ht),J=new S0(Ut),tt=new jg(I,A,me,ge,ut,J),ht=new yx(I,Ut),mt=new ex,Z=new ox(me),P=new y0(I,A,xt,rt,x,l),dt=new dx(I,rt,ge),Lt=new vx(U,Le,ge,xt),$=new M0(U,me,Le),ft=new U0(U,me,Le),Le.programs=tt.programs,I.capabilities=ge,I.extensions=me,I.properties=Ut,I.renderLists=mt,I.shadowMap=dt,I.state=xt,I.info=Le}y!==on&&(L=new z0(y,e.width,e.height,o,s,r));let at=new Pc(I,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(b){b!==void 0&&(bt=b,this.setSize(Tt,Nt,!1))},this.getSize=function(b){return b.set(Tt,Nt)},this.setSize=function(b,D,V=!0){if(at.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=b,Nt=D,e.width=Math.floor(b*bt),e.height=Math.floor(D*bt),V===!0&&(e.style.width=b+"px",e.style.height=D+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Tt*bt,Nt*bt).floor()},this.setDrawingBufferSize=function(b,D,V){Tt=b,Nt=D,bt=V,e.width=Math.floor(b*V),e.height=Math.floor(D*V),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(y===on){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(Ft)},this.setViewport=function(b,D,V,B){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,D,V,B),xt.viewport(nt.copy(Ft).multiplyScalar(Mn()).round())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,D,V,B){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,D,V,B),xt.scissor(It.copy(ae).multiplyScalar(Mn()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){xt.setScissorTest(he=b)},this.setOpaqueSort=function(b){Xt=b},this.setTransparentSort=function(b){Ee=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,V=!0){let B=0;if(b){let z=!1;if(st!==null){let gt=st.texture.format;z=m.has(gt)}if(z){let gt=st.texture.type,Et=p.has(gt),pt=P.getClearColor(),St=P.getClearAlpha(),Pt=pt.r,Wt=pt.g,jt=pt.b;Et?(v[0]=Pt,v[1]=Wt,v[2]=jt,v[3]=St,U.clearBufferuiv(U.COLOR,0,v)):(T[0]=Pt,T[1]=Wt,T[2]=jt,T[3]=St,U.clearBufferiv(U.COLOR,0,T))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),P.dispose(),mt.dispose(),Z.dispose(),Ht.dispose(),Ut.dispose(),A.dispose(),rt.dispose(),k.dispose(),ut.dispose(),Lt.dispose(),tt.dispose(),at.dispose(),at.removeEventListener("sessionstart",jc),at.removeEventListener("sessionend",Qc),ki.stop()};function Dt(b){b.preventDefault(),uc("WebGLRenderer: Context Lost."),N=!0}function Yt(){uc("WebGLRenderer: Context Restored."),N=!1;let b=Le.autoReset,D=dt.enabled,V=dt.autoUpdate,B=dt.needsUpdate,z=dt.type;Zt(),Le.autoReset=b,dt.enabled=D,dt.autoUpdate=V,dt.needsUpdate=B,dt.type=z}function yt(b){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){let D=b.target;D.removeEventListener("dispose",oe),ze(D)}function ze(b){mi(b),Ut.remove(b)}function mi(b){let D=Ut.get(b).programs;D!==void 0&&(D.forEach(function(V){tt.releaseProgram(V)}),b.isShaderMaterial&&tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,V,B,z,gt){D===null&&(D=yn);let Et=z.isMesh&&z.matrixWorld.determinantAffine()<0,pt=Yd(b,D,V,B,z);xt.setMaterial(B,Et);let St=V.index,Pt=1;if(B.wireframe===!0){if(St=k.getWireframeAttribute(V),St===void 0)return;Pt=2}let Wt=V.drawRange,jt=V.attributes.position,At=Wt.start*Pt,Qt=(Wt.start+Wt.count)*Pt;gt!==null&&(At=Math.max(At,gt.start*Pt),Qt=Math.min(Qt,(gt.start+gt.count)*Pt)),St!==null?(At=Math.max(At,0),Qt=Math.min(Qt,St.count)):jt!=null&&(At=Math.max(At,0),Qt=Math.min(Qt,jt.count));let Te=Qt-At;if(Te<0||Te===1/0)return;ut.setup(z,B,pt,V,St);let de,ue=$;if(St!==null&&(de=M.get(St),ue=ft,ue.setIndex(de)),z.isMesh)B.wireframe===!0?(xt.setLineWidth(B.wireframeLinewidth*Mn()),ue.setMode(U.LINES)):ue.setMode(U.TRIANGLES);else if(z.isLine){let Xe=B.linewidth;Xe===void 0&&(Xe=1),xt.setLineWidth(Xe*Mn()),z.isLineSegments?ue.setMode(U.LINES):z.isLineLoop?ue.setMode(U.LINE_LOOP):ue.setMode(U.LINE_STRIP)}else z.isPoints?ue.setMode(U.POINTS):z.isSprite&&ue.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(me.get("WEBGL_multi_draw"))ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Xe=z._multiDrawStarts,Rt=z._multiDrawCounts,Qe=z._multiDrawCount,se=St?M.get(St).bytesPerElement:1,zi=Ut.get(B).currentProgram.getUniforms();for(let qe=0;qe<Qe;qe++)zi.setValue(U,"_gl_DrawID",qe),ue.render(Xe[qe]/se,Rt[qe])}else if(z.isInstancedMesh)ue.renderInstances(At,Te,z.count);else if(V.isInstancedBufferGeometry){let Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Rt=Math.min(V.instanceCount,Xe);ue.renderInstances(At,Te,Rt)}else ue.render(At,Te)};function Kc(b,D,V,B){O!==null&&b.isNodeMaterial&&O.setObject(B,b),Pe===!0&&J.setState(b,V,!1),b.transparent===!0&&b.side===Se&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,Zs(b,D,B),b.side=Pi,b.needsUpdate=!0,Zs(b,D,B),b.side=Se):Zs(b,D,B)}this.compile=function(b,D,V=null){V===null&&(V=b),O!==null&&O.renderStart(b,D,V),E=Z.get(V),E.init(D),S.push(E),V.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),b!==V&&b.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),rn=this.localClippingEnabled,Pe=J.init(this.clippingPlanes,rn),Pe===!0&&J.setGlobalState(this.clippingPlanes,D),O!==null&&dt.render(E.state.shadowsArray,V,D);let B=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let gt=z.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){let pt=gt[Et];Kc(pt,V,D,z),B.add(pt)}else Kc(gt,V,D,z),B.add(gt)}),E=S.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(b,D,V=null){let B=this.compile(b,D,V);return new Promise(z=>{function gt(){if(B.forEach(function(Et){let St=Ut.get(Et).currentProgram;(St===void 0||St.isReady())&&B.delete(Et)}),B.size===0){z(b);return}setTimeout(gt,10)}me.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let hl=null;function Xd(b){hl&&hl(b)}function jc(){ki.stop()}function Qc(){ki.start()}let ki=new Xu;ki.setAnimationLoop(Xd),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){hl=b,at.setAnimationLoop(b),b===null?ki.stop():ki.start()},at.addEventListener("sessionstart",jc),at.addEventListener("sessionend",Qc),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(b,D);let V=at.enabled===!0&&at.isPresenting===!0,B=L!==null&&(st===null||V)&&L.begin(I,st);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(D),D=at.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,D,st),E=Z.get(b,S.length),E.init(D),E.state.textureUnits=Ht.getTextureUnits(),S.push(E),Me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ve.setFromArrayCamera(D):Kt.setFromProjectionMatrix(Me,En,D.reversedDepth),rn=this.localClippingEnabled,Pe=J.init(this.clippingPlanes,rn),R=mt.get(b,_.length),R.init(),_.push(R),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let Et=I.xr.getDepthSensingMesh();Et!==null&&ul(Et,D,-1/0,I.sortObjects)}ul(b,D,0,I.sortObjects),R.finish(),O!==null&&O.updateLights(E.state.lightsArray),I.sortObjects===!0&&R.sort(Xt,Ee),vn=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,vn&&P.addToRenderList(R,b),this.info.autoReset===!0&&this.info.reset(),Pe===!0&&J.beginShadows();let z=E.state.shadowsArray;if(dt.render(z,b,D),Pe===!0&&J.endShadows(),(B&&L.hasRenderPass())===!1){let Et=R.opaque,pt=R.transmissive;if(E.setupLights(),D.isArrayCamera){let St=D.cameras;if(pt.length>0)for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){let jt=St[Pt];eh(Et,pt,b,jt)}vn&&P.render(b);for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){let jt=St[Pt];th(R,b,jt,jt.viewport)}}else pt.length>0&&eh(Et,pt,b,D),vn&&P.render(b),th(R,b,D)}st!==null&&X===0&&(Ht.updateMultisampleRenderTarget(st),Ht.updateRenderTargetMipmap(st)),B&&L.end(I),b.isScene===!0&&b.onAfterRender(I,b,D),ut.resetDefaultState(),Y=-1,et=null,S.pop(),S.length>0?(E=S[S.length-1],Ht.setTextureUnits(E.state.textureUnits),Pe===!0&&J.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,O!==null&&O.renderEnd()};function ul(b,D,V,B){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let Et=D.isArrayCamera?Ve:Kt;if(!b.frustumCulled||b.intersectsFrustum(Et)){B&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);let pt=rt.update(b),St=b.material;St.visible&&R.push(b,pt,St,V,ke.z,null,D)}}else if(b.isMesh||b.isLine||b.isPoints){let Et=D.isArrayCamera?Ve:Kt;if(!b.frustumCulled||b.intersectsFrustum(Et)){let pt=rt.update(b),St=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),ke.copy(pt.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(St)){let Pt=pt.groups;for(let Wt=0,jt=Pt.length;Wt<jt;Wt++){let At=Pt[Wt],Qt=St[At.materialIndex];Qt&&Qt.visible&&R.push(b,pt,Qt,V,ke.z,At,D)}}else St.visible&&R.push(b,pt,St,V,ke.z,null,D)}}}let gt=b.children;for(let Et=0,pt=gt.length;Et<pt;Et++)ul(gt[Et],D,V,B)}function th(b,D,V,B){let{opaque:z,transmissive:gt,transparent:Et}=b;E.setupLightsView(V),Pe===!0&&J.setGlobalState(I.clippingPlanes,V),B&&xt.viewport(nt.copy(B)),z.length>0&&ta(z,D,V),gt.length>0&&ta(gt,D,V),Et.length>0&&ta(Et,D,V),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function eh(b,D,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let At=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new pn(1,1,{generateMipmaps:!0,type:At?Un:on,minFilter:ci,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let gt=E.state.transmissionRenderTarget[B.id],Et=B.viewport||nt;gt.setSize(Et.z*I.transmissionResolutionScale,Et.w*I.transmissionResolutionScale);let pt=I.getRenderTarget(),St=I.getActiveCubeFace(),Pt=I.getActiveMipmapLevel();I.setRenderTarget(gt),I.getClearColor(j),Mt=I.getClearAlpha(),Mt<1&&I.setClearColor(16777215,.5),I.clear(),vn&&P.render(V);let Wt=I.toneMapping;I.toneMapping=Xn;let jt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Pe===!0&&J.setGlobalState(I.clippingPlanes,B),ta(b,V,B),Ht.updateMultisampleRenderTarget(gt),Ht.updateRenderTargetMipmap(gt),me.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Qt=0,Te=D.length;Qt<Te;Qt++){let de=D[Qt],{object:ue,geometry:Xe,material:Rt,group:Qe}=de;if(Rt.side===Se&&ue.layers.test(B.layers)){let se=Rt.side;Rt.side=Fe,Rt.needsUpdate=!0,nh(ue,V,B,Xe,Rt,Qe),Rt.side=se,Rt.needsUpdate=!0,At=!0}}At===!0&&(Ht.updateMultisampleRenderTarget(gt),Ht.updateRenderTargetMipmap(gt))}I.setRenderTarget(pt,St,Pt),I.setClearColor(j,Mt),jt!==void 0&&(B.viewport=jt),I.toneMapping=Wt}function ta(b,D,V){let B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,gt=b.length;z<gt;z++){let Et=b[z],{object:pt,geometry:St,group:Pt}=Et,Wt=Et.material;Wt.allowOverride===!0&&B!==null&&(Wt=B),pt.layers.test(V.layers)&&nh(pt,D,V,St,Wt,Pt)}}function nh(b,D,V,B,z,gt){O!==null&&z.isNodeMaterial&&O.setObject(b,z),b.onBeforeRender(I,D,V,B,z,gt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(I,D,V,B,b,gt),z.transparent===!0&&z.side===Se&&z.forceSinglePass===!1?(z.side=Fe,z.needsUpdate=!0,I.renderBufferDirect(V,D,B,z,b,gt),z.side=Pi,z.needsUpdate=!0,I.renderBufferDirect(V,D,B,z,b,gt),z.side=Se):I.renderBufferDirect(V,D,B,z,b,gt),b.onAfterRender(I,D,V,B,z,gt)}function ih(b){let D=0;for(let V of b)V.texture!==null&&D++;return D}function Zs(b,D,V){D.isScene!==!0&&(D=yn);let B=Ut.get(b),z=E.state.lights,gt=E.state.shadowsArray,Et=z.state.version,pt=tt.getParameters(b,z.state,gt,D,V,E.state.lightProbeGridArray),St=tt.getProgramCacheKey(pt),Pt=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Wt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=A.get(b.envMap||B.environment,Wt),B.envMapRotation=B.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",oe),Pt=new Map,B.programs=Pt,B.programVariants=new Map);let jt=Pt.get(St);if(jt!==void 0){if(B.currentProgram===jt&&B.lightsStateVersion===Et)return rh(b,pt),jt}else pt.uniforms=tt.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,V,pt),b.onBeforeCompile(pt,I),jt=tt.acquireProgram(pt,St),Pt.set(St,jt),B.uniforms=pt.uniforms;let At=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(At.clippingPlanes=J.uniform),rh(b,pt),B.needsLights=Zd(b),B.lightsStateVersion=Et,B.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.sunLights.value=z.state.sun,At.sunLightShadows.value=z.state.sunShadow,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.sunShadowMatrix.value=z.state.sunShadowMatrix,At.sunShadowCascade.value=z.state.sunShadowCascade,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=ih(E.state.lightProbeGridArray),B.currentProgram=jt,B.uniformsList=null,jt}function qd(b,D,V,B,z){let gt=Ut.get(b),Et=gt.currentProgram.id+","+B+","+z,pt=gt.programVariants.get(Et);return pt===void 0?(pt=Zs(b,D,V),gt.programVariants.set(Et,pt)):(gt.currentProgram=pt,gt.uniformsList=null,gt.outputColorSpace=B,gt.toneMapping=z),pt}function sh(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Bs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function rh(b,D){let V=Ut.get(b);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Yd(b,D,V,B,z){D.isScene!==!0&&(D=yn),Ht.resetTextureUnits();let gt=D.fog,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,pt=st===null?I.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:te.workingColorSpace,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pt=A.get(B.envMap||Et,St),Wt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,jt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),At=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,Te=!!V.morphAttributes.color,de=Xn;B.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(de=I.toneMapping);let ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xe=ue!==void 0?ue.length:0,Rt=Ut.get(B),Qe=E.state.lights;if(Pe===!0&&(rn===!0||b!==et)){let be=b===et&&B.id===Y;J.setState(B,b,be)}let se=!1,zi=!1;B.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==Qe.state.version||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==Pt||B.fog===!0&&Rt.fog!==gt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==J.numPlanes||Rt.numIntersection!==J.numIntersection)||Rt.vertexAlphas!==Wt||Rt.vertexTangents!==jt||Rt.morphTargets!==At||Rt.morphNormals!==Qt||Rt.morphColors!==Te||Rt.morphTargetsCount!==Xe||Rt.numLightProbeGrids!==ih(E.state.lightProbeGridArray)?se=!0:(Rt.outputColorSpace!==pt||Rt.toneMapping!==de)&&(zi=!0):(se=!0,Rt.__version=B.version);let qe=Rt.currentProgram;(se===!0||zi===!0)&&(qe=zi===!0?qd(B,D,z,pt,de):Zs(B,D,z),O&&B.isNodeMaterial&&O.onUpdateProgram(B,qe,Rt));let ea=!1,gi=!1,Hi=!1,ne=qe.getUniforms(),We=Rt.uniforms;if(xt.useProgram(qe.program)&&(ea=!0,gi=!0,Hi=!0),B.id!==Y&&(Y=B.id,gi=!0),ea||et!==b){xt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ne.setValue(U,"projectionMatrix",b.projectionMatrix),ne.setValue(U,"viewMatrix",b.matrixWorldInverse);let He=ne.map.cameraPosition;He!==void 0&&He.setValue(U,Bn.setFromMatrixPosition(b.matrixWorld)),ge.logarithmicDepthBuffer&&ne.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ne.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),et!==b&&(et=b,gi=!0,Hi=!0)}if(Rt.needsLights&&(Qe.state.sunShadowMap.length>0&&ne.setValue(U,"sunShadowMap",Qe.state.sunShadowMap,Ht),Qe.state.directionalShadowMap.length>0&&ne.setValue(U,"directionalShadowMap",Qe.state.directionalShadowMap,Ht),Qe.state.spotShadowMap.length>0&&ne.setValue(U,"spotShadowMap",Qe.state.spotShadowMap,Ht),Qe.state.pointShadowMap.length>0&&ne.setValue(U,"pointShadowMap",Qe.state.pointShadowMap,Ht)),z.isSkinnedMesh){ne.setOptional(U,z,"bindMatrix"),ne.setOptional(U,z,"bindMatrixInverse");let be=z.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ne.setValue(U,"boneTexture",be.boneTexture,Ht))}z.isBatchedMesh&&(ne.setOptional(U,z,"batchingTexture"),ne.setValue(U,"batchingTexture",z._matricesTexture,Ht),ne.setOptional(U,z,"batchingIdTexture"),ne.setValue(U,"batchingIdTexture",z._indirectTexture,Ht),ne.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ne.setValue(U,"batchingColorTexture",z._colorsTexture,Ht));let In=V.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Q.update(z,V,qe),(gi||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,ne.setValue(U,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(We.envMapIntensity.value=D.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=bx()),gi){if(ne.setValue(U,"toneMappingExposure",I.toneMappingExposure),Rt.needsLights&&$d(We,Hi),gt&&B.fog===!0&&ht.refreshFogUniforms(We,gt),ht.refreshMaterialUniforms(We,B,bt,Nt,E.state.transmissionRenderTarget[b.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let be=w,He=0;for(let Kn of E.state.lightProbeGridArray)Kn.texture!==null&&(be.textures[He]=Kn.texture,be.min[He]=Kn.boundingBox.min,be.max[He]=Kn.boundingBox.max,be.resolution[He]=Kn.resolution,He++);for(let Kn in be)be[Kn].length=He;We.probesSH.value=be.textures,We.probesMin.value=be.min,We.probesMax.value=be.max,We.probesResolution.value=be.resolution}Bs.upload(U,sh(Rt),We,Ht)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Bs.upload(U,sh(Rt),We,Ht),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ne.setValue(U,"center",z.center),ne.setValue(U,"modelViewMatrix",z.modelViewMatrix),ne.setValue(U,"normalMatrix",z.normalMatrix),ne.setValue(U,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let be=B.uniformsGroups;for(let He=0,Kn=be.length;He<Kn;He++){let oh=be[He];Lt.update(oh,qe),Lt.bind(oh,qe)}}return qe}function $d(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Zd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(b,D,V){let B=Ut.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ut.get(b.texture).__webglTexture=D,Ut.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let V=Ut.get(b);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,V=0){st=b,q=D,X=V;let B=null,z=!1,gt=!1;if(b){let pt=Ut.get(b);if(pt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(U.FRAMEBUFFER,pt.__webglFramebuffer),nt.copy(b.viewport),It.copy(b.scissor),Vt=b.scissorTest,xt.viewport(nt),xt.scissor(It),xt.setScissorTest(Vt),Y=-1;return}else if(pt.__webglFramebuffer===void 0)Ht.setupRenderTarget(b);else if(pt.__hasExternalTextures)Ht.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Wt=b.depthTexture;if(pt.__boundDepthTexture!==Wt){if(Wt!==null&&Ut.has(Wt)&&(b.width!==Wt.image.width||b.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(b)}}let St=b.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(gt=!0);let Pt=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?B=Pt[D][V]:B=Pt[D],z=!0):b.samples>0&&Ht.useMultisampledRTT(b)===!1?B=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[V]:B=Pt,nt.copy(b.viewport),It.copy(b.scissor),Vt=b.scissorTest}else nt.copy(Ft).multiplyScalar(bt).floor(),It.copy(ae).multiplyScalar(bt).floor(),Vt=he;if(V!==0&&(B=W),xt.bindFramebuffer(U.FRAMEBUFFER,B)&&xt.drawBuffers(b,B),xt.viewport(nt),xt.scissor(It),xt.setScissorTest(Vt),z){let pt=Ut.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,V)}else if(gt){let pt=D;for(let St=0;St<b.textures.length;St++){let Pt=Ut.get(b.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,Pt.__webglTexture,V,pt)}}else if(b!==null&&V!==0){let pt=Ut.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,V)}Y=-1};function ah(b){let D=Ut.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=ge.textureFormatReadable(b.format),D.__typeReadable=ge.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,V,B,z,gt,Et,pt=0){if(!(b&&b.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(St=St[Et],Array.isArray(St)&&(St=St[0])),St){xt.bindFramebuffer(U.FRAMEBUFFER,St);try{let Pt=b.textures[pt],Wt=Pt.format,jt=Pt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);let At=ah(Pt);if(At.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-B&&V>=0&&V<=b.height-z&&U.readPixels(D,V,B,z,lt.convert(Wt),lt.convert(jt),gt)}finally{let Pt=st!==null?Ut.get(st).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(b,D,V,B,z,gt,Et,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(St=St[Et],Array.isArray(St)&&(St=St[0])),St)if(D>=0&&D<=b.width-B&&V>=0&&V<=b.height-z){xt.bindFramebuffer(U.FRAMEBUFFER,St);let Pt=b.textures[pt],Wt=Pt.format,jt=Pt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);let At=ah(Pt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Qt),U.bufferData(U.PIXEL_PACK_BUFFER,gt.byteLength,U.STREAM_READ),U.readPixels(D,V,B,z,lt.convert(Wt),lt.convert(jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Te=st!==null?Ut.get(st).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,Te);let de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await xu(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Qt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,gt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Qt),U.deleteSync(de),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,V=0){let B=Math.pow(2,-V),z=Math.floor(b.image.width*B),gt=Math.floor(b.image.height*B),Et=D!==null?D.x:0,pt=D!==null?D.y:0;Ht.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Et,pt,z,gt),xt.unbindTexture()},this.copyTextureToTexture=function(b,D,V=null,B=null,z=0,gt=0){let Et,pt,St,Pt,Wt,jt,At,Qt,Te,de=b.isCompressedTexture?b.mipmaps[gt]:b.image;if(V!==null)Et=V.max.x-V.min.x,pt=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Wt=V.min.y,jt=V.isBox3?V.min.z:0;else{let ne=Math.pow(2,-z);Et=Math.floor(de.width*ne),pt=Math.floor(de.height*ne),b.isDataArrayTexture?St=de.depth:b.isData3DTexture?St=Math.floor(de.depth*ne):St=1,Pt=0,Wt=0,jt=0}B!==null?(At=B.x,Qt=B.y,Te=B.z):(At=0,Qt=0,Te=0);let ue=lt.convert(D.format),Xe=lt.convert(D.type),Rt;D.isData3DTexture?(Ht.setTexture3D(D,0),Rt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ht.setTexture2DArray(D,0),Rt=U.TEXTURE_2D_ARRAY):(Ht.setTexture2D(D,0),Rt=U.TEXTURE_2D),xt.activeTexture(U.TEXTURE0),xt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),xt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),xt.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Qe=xt.getParameter(U.UNPACK_ROW_LENGTH),se=xt.getParameter(U.UNPACK_IMAGE_HEIGHT),zi=xt.getParameter(U.UNPACK_SKIP_PIXELS),qe=xt.getParameter(U.UNPACK_SKIP_ROWS),ea=xt.getParameter(U.UNPACK_SKIP_IMAGES);xt.pixelStorei(U.UNPACK_ROW_LENGTH,de.width),xt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de.height),xt.pixelStorei(U.UNPACK_SKIP_PIXELS,Pt),xt.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),xt.pixelStorei(U.UNPACK_SKIP_IMAGES,jt);let gi=b.isDataArrayTexture||b.isData3DTexture,Hi=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let ne=Ut.get(b),We=Ut.get(D),In=Ut.get(ne.__renderTarget),be=Ut.get(We.__renderTarget);xt.bindFramebuffer(U.READ_FRAMEBUFFER,In.__webglFramebuffer),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let He=0;He<St;He++)gi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.get(b).__webglTexture,z,jt+He),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.get(D).__webglTexture,gt,Te+He)),U.blitFramebuffer(Pt,Wt,Pt+Et,Wt+pt,At,Qt,At+Et,Qt+pt,U.DEPTH_BUFFER_BIT,U.NEAREST);xt.bindFramebuffer(U.READ_FRAMEBUFFER,null),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Ut.has(b)){let ne=Ut.get(b),We=Ut.get(D);xt.bindFramebuffer(U.READ_FRAMEBUFFER,C),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let In=0;In<St;In++)gi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ne.__webglTexture,z,jt+In):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ne.__webglTexture,z),Hi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,gt,Te+In):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,We.__webglTexture,gt),z!==0?U.blitFramebuffer(Pt,Wt,Pt+Et,Wt+pt,At,Qt,At+Et,Qt+pt,U.COLOR_BUFFER_BIT,U.NEAREST):Hi?U.copyTexSubImage3D(Rt,gt,At,Qt,Te+In,Pt,Wt,Et,pt):U.copyTexSubImage2D(Rt,gt,At,Qt,Pt,Wt,Et,pt);xt.bindFramebuffer(U.READ_FRAMEBUFFER,null),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Hi?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Rt,gt,At,Qt,Te,Et,pt,St,ue,Xe,de.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,gt,At,Qt,Te,Et,pt,St,ue,de.data):U.texSubImage3D(Rt,gt,At,Qt,Te,Et,pt,St,ue,Xe,de):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,gt,At,Qt,Et,pt,ue,Xe,de.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,gt,At,Qt,de.width,de.height,ue,de.data):U.texSubImage2D(U.TEXTURE_2D,gt,At,Qt,Et,pt,ue,Xe,de);xt.pixelStorei(U.UNPACK_ROW_LENGTH,Qe),xt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se),xt.pixelStorei(U.UNPACK_SKIP_PIXELS,zi),xt.pixelStorei(U.UNPACK_SKIP_ROWS,qe),xt.pixelStorei(U.UNPACK_SKIP_IMAGES,ea),gt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(Rt),xt.unbindTexture()},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&Ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ht.setTextureCube(b,0):b.isData3DTexture?Ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ht.setTexture2DArray(b,0):Ht.setTexture2D(b,0),xt.unbindTexture()},this.resetState=function(){q=0,X=0,st=null,xt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Lc={};lh(Lc,{BASE_SKILLS:()=>$n,CLASSES:()=>nd,CLS_BY_ID:()=>ye,COMBAT_CLASSES:()=>On,COMBAT_IDS:()=>wx,LIFE_CLASSES:()=>is,LIFE_IDS:()=>Ex,SKILL_BY_ID:()=>Sx,isLife:()=>Vr,skillsFor:()=>Tx});var ln=(i,t,e,n,s,r,a,o,l)=>({id:i,n:t,en:e,desc:n,c:s,w:r,stats:a,skills:o,look:l,kind:"combat"}),On=[ln("swordsman","\u5251\u58EB","Swordsman","\u5747\u8861\u7684\u5355\u624B\u5251\u4F7F\uFF0C\u653B\u5B88\u517C\u5907\uFF0C\u6700\u5BB9\u6613\u4E0A\u624B\u3002","#7fb8ff","sword",{atk:1.15,def:1.1,hp:1.1,spd:1,crit:.06,range:2.6,rate:.52},[{n:"\u659C\u65A9",icon:"\u2694",cd:2.4,kind:"melee",dmg:1.7,desc:"\u524D\u65B9\u6247\u5F62\u65A9\u51FB\uFF0C\u9644\u5E26\u5C0F\u6BB5\u7A81\u8FDB"},{n:"\u97F3\u901F\u51B2\u51FB",icon:"\u{1F4A8}",cd:7,kind:"dash",dmg:2.5,desc:"\u9AD8\u901F\u7A81\u8FDB\u65A9\uFF0C\u8DEF\u5F84\u4E0A\u5168\u90E8\u547D\u4E2D"},{n:"\u661F\u7206\u6C14\u6D41\u65A9",icon:"\u2726",cd:16,kind:"combo",dmg:5.2,desc:"\u591A\u6BB5\u8FDE\u51FB\uFF0C\u6700\u540E\u4E00\u51FB\u8303\u56F4\u7206\u53D1"}],{cape:0,helm:0,scale:1,weapon:"sword"}),ln("dual","\u4E8C\u5200\u6D41","Dual Blader","\u53CC\u6301\u9AD8\u901F\u8FDE\u51FB\uFF0C\u66B4\u51FB\u6700\u9AD8\u4F46\u8EAB\u677F\u6700\u8584\u3002","#ff9ad0","dual",{atk:1.05,def:.8,hp:.88,spd:1.24,crit:.2,range:2.2,rate:.32},[{n:"\u53CC\u5203\u4E71\u821E",icon:"\u2694",cd:3,kind:"combo",dmg:2.1,desc:"\u5DE6\u53F3\u4EA4\u66FF\u7684\u9AD8\u901F\u8FDE\u65A9"},{n:"\u65E5\u8680",icon:"\u{1F311}",cd:9,kind:"aoe",dmg:3,desc:"\u65CB\u8EAB\u6A2A\u626B\u5468\u56F4\u5168\u90E8\u654C\u4EBA"},{n:"\u5341\u516D\u8FDE\u51FB",icon:"\u2726",cd:18,kind:"combo",dmg:6,desc:"\u7EC8\u6781\u8FDE\u6BB5\uFF0C\u9010\u6BB5\u63D0\u5347\u4F24\u5BB3"}],{cape:1,helm:0,scale:.96,weapon:"dual"}),ln("lancer","\u67AA\u5175","Lancer","\u957F\u67AA\u7A81\u523A\uFF0C\u653B\u51FB\u8DDD\u79BB\u6700\u8FDC\u7684\u8FD1\u6218\u3002","#a8d8ff","spear",{atk:1.2,def:1,hp:1.05,spd:.96,crit:.09,range:3.8,rate:.66},[{n:"\u8D2F\u523A",icon:"\u{1F531}",cd:2.6,kind:"pierce",dmg:1.9,desc:"\u76F4\u7EBF\u8D2F\u7A7F\uFF0C\u547D\u4E2D\u8DEF\u5F84\u4E0A\u6240\u6709\u654C\u4EBA"},{n:"\u87BA\u65CB\u7A81\u8FDB",icon:"\u{1F300}",cd:8,kind:"dash",dmg:2.9,desc:"\u5E26\u94BB\u5934\u7A81\u8FDB\u5E76\u51FB\u9000"},{n:"\u6D41\u661F\u67AA",icon:"\u2604",cd:17,kind:"aoe",dmg:4.6,desc:"\u8DC3\u8D77\u540E\u7838\u5730\uFF0C\u5927\u8303\u56F4\u51B2\u51FB\u6CE2"}],{cape:0,helm:1,scale:1.04,weapon:"spear"}),ln("knight","\u91CD\u88C5\u9A91\u58EB","Knight","\u5927\u76FE\u4E0E\u91CD\u7532\uFF0C\u683C\u6321\u6210\u529F\u53EF\u5F39\u53CD\u3002","#ffd98a","shield",{atk:.92,def:1.65,hp:1.45,spd:.82,crit:.03,range:2.4,rate:.78},[{n:"\u76FE\u51FB",icon:"\u{1F6E1}",cd:2.8,kind:"melee",dmg:1.5,stun:.7,desc:"\u76FE\u724C\u731B\u51FB\u5E76\u7729\u6655"},{n:"\u5723\u58C1",icon:"\u26E8",cd:11,kind:"buff",dmg:0,desc:"\u77ED\u65F6\u95F4\u51CF\u4F24 70% \u5E76\u5632\u8BBD\u5468\u56F4\u654C\u4EBA"},{n:"\u88C1\u51B3\u4E4B\u9524",icon:"\u{1F528}",cd:16,kind:"aoe",dmg:3.8,desc:"\u539F\u5730\u91CD\u9524\uFF0C\u73AF\u5F62\u51B2\u51FB"}],{cape:1,helm:1,scale:1.12,weapon:"shield"}),ln("berserker","\u72C2\u6218\u58EB","Berserker","\u8840\u91CF\u8D8A\u4F4E\u4F24\u5BB3\u8D8A\u9AD8\uFF0C\u9AD8\u98CE\u9669\u9AD8\u56DE\u62A5\u3002","#ff7a6a","greatsword",{atk:1.42,def:.85,hp:1.25,spd:.94,crit:.12,range:2.9,rate:.86},[{n:"\u788E\u5730\u65A9",icon:"\u{1FA93}",cd:3,kind:"aoe",dmg:2,desc:"\u5927\u5251\u7838\u5730\uFF0C\u524D\u65B9\u8303\u56F4\u4F24\u5BB3"},{n:"\u8840\u6012",icon:"\u{1FA78}",cd:10,kind:"buff",dmg:0,desc:"\u6D88\u8017\u751F\u547D\u6362\u53D6\u653B\u51FB\u529B\u5927\u5E45\u63D0\u5347"},{n:"\u706D\u4E16\u4E00\u51FB",icon:"\u{1F4A5}",cd:18,kind:"melee",dmg:6.4,desc:"\u84C4\u529B\u91CD\u65A9\uFF0C\u4F24\u5BB3\u968F\u5DF2\u635F\u751F\u547D\u63D0\u5347"}],{cape:0,helm:0,scale:1.16,weapon:"greatsword"}),ln("katana","\u62D4\u5200\u6B66\u58EB","Katana","\u6536\u5200\u84C4\u52BF\uFF0C\u5C45\u5408\u62D4\u5200\u4E00\u51FB\u5FC5\u6740\u3002","#c8b0ff","katana",{atk:1.3,def:.95,hp:1,spd:1.1,crit:.16,range:2.7,rate:.7},[{n:"\u5C45\u5408",icon:"\u26A1",cd:4,kind:"dash",dmg:2.8,desc:"\u77AC\u6B65\u62D4\u5200\uFF0C\u547D\u4E2D\u5FC5\u5B9A\u66B4\u51FB"},{n:"\u6B8B\u6708",icon:"\u{1F319}",cd:8,kind:"melee",dmg:2.6,desc:"\u534A\u6708\u5F62\u65A9\u51FB\uFF0C\u9644\u5E26\u6D41\u8840"},{n:"\u5929\u7FD4\u4E00\u5200",icon:"\u2726",cd:19,kind:"combo",dmg:5.8,desc:"\u4E09\u8FDE\u62D4\u5200\uFF0C\u6700\u540E\u4E00\u51FB\u5168\u5C4F\u5251\u6C14"}],{cape:1,helm:0,scale:1,weapon:"katana"}),ln("rogue","\u76D7\u8D3C","Rogue","\u80CC\u523A\u4E0E\u6BD2\uFF0C\u9760\u95EA\u907F\u548C\u6389\u7387\u52A0\u6210\u5403\u996D\u3002","#9ae0a8","dagger",{atk:1.05,def:.85,hp:.92,spd:1.3,crit:.24,range:2,rate:.34},[{n:"\u80CC\u523A",icon:"\u{1F5E1}",cd:3,kind:"melee",dmg:2.2,desc:"\u4ECE\u80CC\u540E\u547D\u4E2D\u65F6\u4F24\u5BB3\u7FFB\u500D"},{n:"\u6BD2\u96FE",icon:"\u2620",cd:9,kind:"aoe",dmg:1.4,dot:6,desc:"\u91CA\u653E\u6301\u7EED\u4F24\u5BB3\u7684\u6BD2\u4E91"},{n:"\u5F71\u5206\u8EAB",icon:"\u{1F465}",cd:15,kind:"buff",dmg:0,desc:"\u5206\u8EAB\u534F\u540C\u653B\u51FB\uFF0C\u95EA\u907F\u5927\u5E45\u63D0\u5347"}],{cape:1,helm:1,scale:.94,weapon:"dagger"}),ln("archer","\u5F13\u624B","Archer","\u8FDC\u7A0B\u5B89\u5168\u8F93\u51FA\uFF0C\u84C4\u529B\u7BAD\u53EF\u7A7F\u900F\u3002","#b6e08a","bow",{atk:1.12,def:.88,hp:.95,spd:1.04,crit:.14,range:11,rate:.62},[{n:"\u8FDE\u73E0\u7BAD",icon:"\u{1F3F9}",cd:2.6,kind:"projectile",dmg:1.6,desc:"\u5FEB\u901F\u5C04\u51FA\u4E09\u652F\u7BAD"},{n:"\u8D2F\u7A7F\u77E2",icon:"\u27B6",cd:8,kind:"pierce",dmg:2.8,desc:"\u84C4\u529B\u8D2F\u7A7F\u76F4\u7EBF\u5168\u90E8\u654C\u4EBA"},{n:"\u7BAD\u96E8",icon:"\u{1F327}",cd:16,kind:"aoe",dmg:4,desc:"\u8303\u56F4\u5185\u843D\u4E0B\u5BC6\u96C6\u7BAD\u77E2"}],{cape:1,helm:0,scale:.98,weapon:"bow"}),ln("mage","\u7B26\u6587\u6CD5\u5E08","Rune Mage","\u5143\u7D20\u4E0E\u5143\u6C14\u5F39\uFF0C\u7206\u53D1\u6700\u9AD8\u4F46\u6700\u8106\u3002","#a88cff","staff",{atk:1.38,def:.72,hp:.85,spd:.94,crit:.1,range:10,rate:.82},[{n:"\u7B26\u6587\u5F39",icon:"\u2727",cd:1.8,kind:"projectile",dmg:1.5,desc:"\u8FFD\u8E2A\u654C\u4EBA\u7684\u9B54\u6CD5\u5F39"},{n:"\u5143\u6C14\u5F39",icon:"\u{1F52E}",cd:9,kind:"aoe",dmg:3.4,desc:"\u84C4\u529B\u540E\u5927\u8303\u56F4\u80FD\u91CF\u7206\u88C2"},{n:"\u9668\u661F\u672F",icon:"\u2604",cd:19,kind:"aoe",dmg:6.2,desc:"\u53EC\u5524\u9668\u77F3\u7838\u5411\u76EE\u6807\u533A\u57DF"}],{cape:1,helm:1,scale:.98,weapon:"staff"}),ln("cleric","\u5723\u804C\u8005","Cleric","\u6CBB\u7597\u4E0E\u589E\u76CA\uFF0C\u7EC4\u961F\u65F6\u4E0D\u53EF\u6216\u7F3A\u3002","#ffe6a0","mace",{atk:.95,def:1.18,hp:1.2,spd:.96,crit:.05,range:7,rate:.68},[{n:"\u5723\u5149\u5F39",icon:"\u2728",cd:2.2,kind:"projectile",dmg:1.5,desc:"\u5149\u5C5E\u6027\u8FDC\u7A0B\u5F39"},{n:"\u6CBB\u6108\u672F",icon:"\u{1F49A}",cd:8,kind:"heal",dmg:0,desc:"\u56DE\u590D\u5927\u91CF\u751F\u547D\u5E76\u77ED\u6682\u6301\u7EED\u56DE\u8840"},{n:"\u795E\u5723\u9886\u57DF",icon:"\u26EA",cd:17,kind:"aoe",dmg:3,heal:.4,desc:"\u5149\u67F1\u7206\u53D1\uFF0C\u4F24\u654C\u540C\u65F6\u6CBB\u7597\u81EA\u5DF1"}],{cape:1,helm:1,scale:1,weapon:"mace"}),ln("summoner","\u53EC\u5524\u5E08","Summoner","\u53EC\u5524\u4F7F\u9B54\u534F\u540C\u4F5C\u6218\uFF0C\u4EE5\u591A\u6253\u5C11\u3002","#8ce0d0","tome",{atk:.98,def:.9,hp:.95,spd:.98,crit:.08,range:9,rate:.74},[{n:"\u5524\u7075",icon:"\u{1F47E}",cd:5,kind:"summon",dmg:0,desc:"\u53EC\u5524\u4E00\u53EA\u4F7F\u9B54\u81EA\u52A8\u653B\u51FB"},{n:"\u7CBE\u7075\u7206\u7834",icon:"\u{1F4AB}",cd:8,kind:"aoe",dmg:2.6,desc:"\u4F7F\u9B54\u9F50\u805A\u5F15\u7206"},{n:"\u5951\u7EA6\xB7\u6DF1\u6E0A",icon:"\u2726",cd:20,kind:"summon",dmg:4.2,desc:"\u53EC\u5524\u5DE8\u578B\u4F7F\u9B54\uFF0C\u6301\u7EED\u8303\u56F4\u653B\u51FB"}],{cape:1,helm:1,scale:.96,weapon:"tome"}),ln("dragoon","\u9F99\u9A91\u58EB","Dragoon","\u8DF3\u8DC3\u7A81\u8FDB\u4E0E\u9F99\u7130\uFF0C\u7A7A\u4E2D\u538B\u5236\u3002","#ff9f6a","lance",{atk:1.28,def:1.12,hp:1.15,spd:.92,crit:.1,range:3.2,rate:.72},[{n:"\u9F99\u67AA\u7A81",icon:"\u{1F531}",cd:3,kind:"pierce",dmg:1.9,desc:"\u5E26\u9F99\u7130\u7684\u76F4\u7EBF\u7A81\u523A"},{n:"\u8DC3\u7A7A",icon:"\u{1FABD}",cd:9,kind:"dash",dmg:2.6,desc:"\u8DC3\u8D77\u540E\u843D\u5730\u51B2\u51FB"},{n:"\u9F99\u7130\u5410\u606F",icon:"\u{1F525}",cd:18,kind:"aoe",dmg:5,desc:"\u524D\u65B9\u9525\u5F62\u9F99\u7130\u626B\u5C04"}],{cape:1,helm:1,scale:1.08,weapon:"lance"}),ln("gunner","\u94F3\u58EB","Gunner","\u73B0\u4EE3\u706B\u5668\uFF0C\u8D85\u8FDC\u7A0B\u70B9\u5C04\u4E0E\u6563\u5C04\u3002","#b0c8e0","gun",{atk:1.18,def:.88,hp:.95,spd:1.02,crit:.15,range:13,rate:.44},[{n:"\u901F\u5C04",icon:"\u{1F52B}",cd:2,kind:"projectile",dmg:1.3,desc:"\u9AD8\u901F\u8FDE\u53D1\u5B50\u5F39"},{n:"\u69B4\u5F39",icon:"\u{1F4A3}",cd:9,kind:"aoe",dmg:3,desc:"\u629B\u5C04\u69B4\u5F39\u9020\u6210\u8303\u56F4\u7206\u70B8"},{n:"\u9971\u548C\u8F70\u70B8",icon:"\u{1F680}",cd:18,kind:"aoe",dmg:5.2,desc:"\u9501\u5B9A\u533A\u57DF\u8FDE\u7EED\u8F70\u70B8"}],{cape:1,helm:0,scale:1,weapon:"gun"}),ln("ninja","\u5FCD\u8005","Ninja","\u77AC\u8EAB\u4E0E\u624B\u91CC\u5251\uFF0C\u673A\u52A8\u6027\u6700\u5F3A\u3002","#8a9cc8","shuriken",{atk:1.1,def:.86,hp:.92,spd:1.34,crit:.18,range:8,rate:.38},[{n:"\u624B\u91CC\u5251",icon:"\u2734",cd:1.8,kind:"projectile",dmg:1.3,desc:"\u6295\u63B7\u4E09\u679A\u56DE\u65CB\u624B\u91CC\u5251"},{n:"\u77AC\u8EAB\u672F",icon:"\u{1F4A8}",cd:6,kind:"dash",dmg:2,desc:"\u77AC\u79FB\u5230\u76EE\u6807\u8EAB\u540E\u5E76\u7559\u4E0B\u6B8B\u5F71"},{n:"\u5F71\u7F1A\u9635",icon:"\u{1F578}",cd:15,kind:"aoe",dmg:4.2,desc:"\u7ED3\u754C\u5185\u654C\u4EBA\u6301\u7EED\u53D7\u521B\u4E14\u51CF\u901F"}],{cape:0,helm:1,scale:.96,weapon:"shuriken"})],$n=[{id:"roll",n:"\u7FFB\u6EDA",icon:"\u{1F300}",cd:2.2,kind:"roll",dmg:0,desc:"\u77ED\u8DDD\u65E0\u654C\u4F4D\u79FB\uFF0C\u6D88\u8017\u5C11\u91CF\u8010\u529B"},{id:"guard",n:"\u683C\u6321",icon:"\u{1F6E1}",cd:.6,kind:"guard",dmg:0,desc:"\u6309\u4F4F\u51CF\u4F24\uFF0C\u7CBE\u51C6\u65F6\u673A\u89E6\u53D1\u5F39\u53CD"},{id:"bandage",n:"\u5305\u624E",icon:"\u{1FA79}",cd:12,kind:"heal",dmg:0,desc:"\u7F13\u6162\u56DE\u590D\u751F\u547D\uFF0C\u6218\u6597\u5916\u6062\u590D\u66F4\u5FEB"},{id:"warcry",n:"\u6218\u543C",icon:"\u{1F4E3}",cd:16,kind:"buff",dmg:0,desc:"\u77ED\u65F6\u95F4\u63D0\u5347\u653B\u51FB\u4E0E\u79FB\u901F"}];On.forEach(i=>{i.skills=i.skills.map((t,e)=>({...t,id:i.id+"_"+e,cls:i.id}))});var Sx=Object.fromEntries([...On.flatMap(i=>i.skills),...$n].map(i=>[i.id,i])),_e=(i,t,e,n,s,r,a,o,l)=>({id:i,n:t,en:e,desc:n,c:s,icon:r,mats:a,play:o,out:l,kind:"life"}),is=[_e("blacksmith","\u94C1\u5320","Blacksmith","\u63A7\u7089\u6E29\u3001\u5361\u8282\u594F\u9524\u51FB\uFF0C\u628A\u77FF\u77F3\u953B\u6210\u6C38\u4E45\u88C5\u5907\u5F3A\u5316\u3002","#e0a060","\u{1F528}",["ore","ash"],{kind:"timing",title:"\u63A7\u6E29 \u2192 \u8282\u594F\u9524\u51FB",unit:"\u7089\u6E29",target:[62,78],hits:5,speed:1.15,hint:"\u5148\u9F13\u98CE\u628A\u7089\u6E29\u63A8\u8FDB\u91D1\u8272\u533A\u95F4\uFF0C\u518D\u8FDE\u7EED 5 \u6B21\u5728\u6307\u9488\u7ECF\u8FC7\u4E2D\u5FC3\u65F6\u843D\u9524\u3002",cost:{ore:2,ash:1}},{n:"\u5F3A\u5316\u952D",icon:"\u{1F529}",buff:{stat:"atk",v:.06},use:"\u6C38\u4E45\u63D0\u5347\u653B\u51FB",price:90}),_e("alchemist","\u70BC\u91D1\u672F\u5E08","Alchemist","\u4E09\u79CD\u6750\u6599\u914D\u6BD4\u8C03\u5408\uFF0C\u5931\u8D25\u4E5F\u4F1A\u7559\u4E0B\u5B9E\u9A8C\u8BB0\u5F55\u3002","#a88cff","\u2697",["herb","crystal","dew"],{kind:"ratio",title:"\u6750\u6599\u914D\u6BD4\u8C03\u5408",sliders:3,tol:9,target:[40,35,25],hint:"\u62D6\u52A8\u4E09\u6761\u914D\u6BD4\u6ED1\u5757\uFF0C\u51D1\u8FD1\u9690\u85CF\u914D\u65B9\u3002\u504F\u5DEE\u8D8A\u5C0F\u54C1\u8D28\u8D8A\u9AD8\uFF0C\u914D\u65B9\u9700\u81EA\u5DF1\u8BD5\u51FA\u6765\u3002",cost:{herb:1,crystal:1,dew:1}},{n:"\u70BC\u91D1\u836F\u5242",icon:"\u{1F9EA}",buff:{stat:"all",v:.1},use:"\u77ED\u65F6\u5168\u5C5E\u6027\u63D0\u5347",price:70}),_e("merchant","\u884C\u5546\u4EBA","Merchant","\u76EF\u4F4F\u6BCF\u5C42\u7269\u4EF7\u6CE2\u52A8\uFF0C\u4F4E\u4E70\u9AD8\u5356\u8D5A\u5DEE\u4EF7\u3002","#ffd070","\u{1F4B0}",["grain","spice"],{kind:"market",title:"\u884C\u5546\u884C\u60C5",goods:["grain","spice","ore","crystal","fish"],volatility:.35,hint:"\u6BCF\u5C42\u7269\u4EF7\u4F1A\u6DA8\u8DCC\u3002\u5728\u4F4E\u4F4D\u4E70\u5165\uFF0C\u6DA8\u4E0A\u53BB\u518D\u5356\u51FA\uFF0C\u8D5A\u53D6\u91D1\u5E01\u4E0E\u5546\u8A89\u3002",cost:{}},{n:"\u5546\u8A89\u51ED\u636E",icon:"\u{1F4DC}",buff:{stat:"luck",v:.08},use:"\u63D0\u5347\u6389\u843D\u7387",price:0}),_e("brewer","\u917F\u9152\u5E08","Brewer","\u8C37\u7269\u3001\u679C\u5B9E\u4E0E\u6C34\u7684\u6BD4\u4F8B + \u53D1\u9175\u65F6\u957F\u51B3\u5B9A\u9152\u7684\u54C1\u8D28\u3002","#e8b060","\u{1F376}",["grain","fruit","dew"],{kind:"ratio",title:"\u6295\u6599\u4E0E\u53D1\u9175",sliders:3,tol:7,target:[50,30,20],hint:"\u8C37 : \u679C : \u6C34 \u7684\u6BD4\u4F8B\u51B3\u5B9A\u9152\u4F53\uFF0C\u8D8A\u63A5\u8FD1\u79D8\u65B9\u8D8A\u5BB9\u6613\u51FA\u9648\u917F\u3002",cost:{grain:2,fruit:1,dew:1}},{n:"\u9648\u917F",icon:"\u{1F377}",buff:{stat:"crit",v:.1},use:"\u63D0\u5347\u66B4\u51FB\u7387",price:85}),_e("chef","\u53A8\u5E08","Chef","\u6309\u6B63\u786E\u987A\u5E8F\u6295\u6599 + \u628A\u63E1\u706B\u5019\uFF0C\u505A\u51FA\u589E\u76CA\u6599\u7406\u3002","#ff9a70","\u{1F373}",["fish","grain","spice"],{kind:"sequence",title:"\u706B\u5019\u4E0E\u6295\u6599\u987A\u5E8F",steps:6,speed:1,hint:"\u8BB0\u4F4F\u672C\u8F6E\u7ED9\u51FA\u7684\u6295\u6599\u987A\u5E8F\uFF0C\u4F9D\u6B21\u70B9\u51FB\u3002\u987A\u5E8F\u9519\u4F1A\u7CCA\u9505\uFF0C\u8FDE\u5BF9\u51FA\u6781\u54C1\u6599\u7406\u3002",cost:{fish:1,grain:1,spice:1}},{n:"\u730E\u4EBA\u6599\u7406",icon:"\u{1F371}",buff:{stat:"hp",v:.18},use:"\u5927\u5E45\u56DE\u8840\u5E76\u63D0\u5347\u751F\u547D\u4E0A\u9650",price:75}),_e("herbalist","\u836F\u5E08","Herbalist","\u8FA8\u8BC6\u8349\u836F\u3001\u7814\u78E8\u914D\u6BD4\uFF0C\u505A\u51FA\u6301\u7EED\u6062\u590D\u7684\u836F\u5242\u3002","#8fdc8a","\u{1F33F}",["herb","mush","dew"],{kind:"ratio",title:"\u8349\u836F\u7814\u78E8\u914D\u6BD4",sliders:3,tol:6,target:[55,25,20],hint:"\u4E3B\u836F : \u8F85\u836F : \u6EB6\u5A92\u3002\u6BD4\u4F8B\u8D8A\u51C6\uFF0C\u6062\u590D\u91CF\u8D8A\u9AD8\u3002",cost:{herb:2,mush:1,dew:1}},{n:"\u56DE\u590D\u836F",icon:"\u{1F49A}",buff:{stat:"regen",v:.9},use:"\u6301\u7EED\u56DE\u590D\u751F\u547D",price:60}),_e("tailor","\u88C1\u7F1D","Tailor","\u91CF\u4F53\u3001\u88C1\u526A\u3001\u8D70\u7EBF\uFF0C\u6309\u5DE5\u5E8F\u505A\u51FA\u8F7B\u91CF\u9632\u5177\u3002","#d8a0c0","\u{1F9F5}",["hide","flower"],{kind:"sequence",title:"\u88C1\u526A\u8D70\u7EBF\u5DE5\u5E8F",steps:5,speed:.9,hint:"\u4F9D\u6B21\u5B8C\u6210\u91CF\u4F53\u2192\u88C1\u526A\u2192\u9501\u8FB9\u2192\u7F1D\u5408\u2192\u6574\u70EB\uFF0C\u9519\u5E8F\u4F1A\u6D6A\u8D39\u5E03\u6599\u3002",cost:{hide:2,flower:1}},{n:"\u8F7B\u7532",icon:"\u{1F9E5}",buff:{stat:"def",v:.12},use:"\u63D0\u5347\u9632\u5FA1",price:80}),_e("carpenter","\u6728\u5DE5","Carpenter","\u62FC\u63A5\u6728\u6784\u4EF6\uFF0C\u642D\u51FA\u7ED3\u6784\u7A33\u56FA\u7684\u5BB6\u5177\u4E0E\u636E\u70B9\u8BBE\u65BD\u3002","#c8a068","\u{1FA9A}",["wood","sand"],{kind:"assemble",title:"\u6784\u4EF6\u62FC\u88C5",grid:4,target:7,speed:1,hint:"\u70B9\u51FB\u683C\u5B50\u653E\u7F6E\u6728\u6784\u4EF6\uFF0C\u8BA9\u8FDE\u901A\u5757\u8FBE\u5230\u76EE\u6807\u6570\u91CF\u3002\u8FDE\u901A\u8D8A\u591A\u7ED3\u6784\u8D8A\u7A33\u3002",cost:{wood:3,sand:1}},{n:"\u636E\u70B9\u5BB6\u5177",icon:"\u{1FA91}",buff:{stat:"hp",v:.1},use:"\u8425\u5730\u589E\u76CA",price:95}),_e("miner","\u77FF\u5DE5","Miner","\u52D8\u63A2\u77FF\u8109\uFF0C\u9010\u5C42\u6572\u51FB\uFF0C\u6DF1\u5EA6\u8D8A\u6DF1\u4EA7\u51FA\u8D8A\u597D\u3002","#b0b8c8","\u26CF",["ore","crystal"],{kind:"timing",title:"\u77FF\u8109\u6572\u51FB",unit:"\u529B\u5EA6",target:[55,74],hits:6,speed:1.35,hint:"\u63A7\u5236\u6BCF\u6B21\u6572\u51FB\u529B\u5EA6\u843D\u5728\u77FF\u8109\u5C42\u5185\uFF0C\u8FDE\u7EED\u547D\u4E2D\u53EF\u6316\u5230\u6DF1\u5C42\u6676\u7C07\u3002",cost:{ore:1}},{n:"\u539F\u77FF",icon:"\u26CF",buff:{stat:"luck",v:.06},use:"\u51FA\u552E\u6216\u4F9B\u94C1\u5320\u4F7F\u7528",price:55}),_e("fisher","\u6E14\u592B","Fisher","\u629B\u7AFF\u540E\u770B\u6D6E\u6807\uFF0C\u5361\u51C6\u6536\u7EBF\u65F6\u673A\u9493\u8D77\u4E0D\u540C\u9C7C\u3002","#8fd0e8","\u{1F3A3}",["fish","dew"],{kind:"timing",title:"\u6536\u7EBF\u65F6\u673A",unit:"\u5F20\u529B",target:[45,62],hits:4,speed:1.5,hint:"\u9C7C\u54AC\u94A9\u65F6\u5F20\u529B\u4F1A\u5267\u70C8\u6446\u52A8\uFF0C\u5728\u5B89\u5168\u533A\u6536\u7EBF\uFF0C\u592A\u731B\u4F1A\u65AD\u7EBF\u3002",cost:{dew:1}},{n:"\u7A00\u6709\u6E14\u83B7",icon:"\u{1F41F}",buff:{stat:"speed",v:.1},use:"\u63D0\u5347\u79FB\u901F",price:65}),_e("farmer","\u519C\u592B","Farmer","\u64AD\u79CD\u3001\u6D47\u6C34\u3001\u6309\u5468\u671F\u6536\u83B7\uFF0C\u4F5C\u7269\u4F1A\u968F\u5C42\u6570\u53D8\u5F02\u3002","#f0d070","\u{1F33E}",["grain","dew","fruit"],{kind:"collect",title:"\u7530\u95F4\u91C7\u6536",targets:9,time:14,speed:1,hint:"\u5728\u65F6\u9650\u5185\u70B9\u6389\u6210\u719F\u7684\u4F5C\u7269\uFF0C\u6F0F\u6389\u4F1A\u67AF\u840E\u3002\u8FDE\u51FB\u6536\u83B7\u5F97\u989D\u5916\u4EA7\u91CF\u3002",cost:{grain:1,dew:1}},{n:"\u65B0\u7C73",icon:"\u{1F33E}",buff:{stat:"hp",v:.08},use:"\u6062\u590D\u4E0E\u589E\u76CA",price:40}),_e("jeweler","\u73E0\u5B9D\u5320","Jeweler","\u6309\u89D2\u5EA6\u5207\u5272\u539F\u77F3\uFF0C\u5207\u9762\u8D8A\u63A5\u8FD1\u5BF9\u79F0\u8D8A\u503C\u94B1\u3002","#8ce0ff","\u{1F48E}",["crystal","pearl"],{kind:"ratio",title:"\u5207\u5272\u89D2\u5EA6",sliders:3,tol:5,target:[33,34,33],hint:"\u4E09\u4E2A\u5207\u9762\u7684\u89D2\u5EA6\u914D\u6BD4\uFF0C\u8D8A\u63A5\u8FD1\u5BF9\u79F0\u8D8A\u80FD\u51FA\u5B8C\u7F8E\u5207\u5272\u3002",cost:{crystal:2,pearl:1}},{n:"\u5B9D\u77F3",icon:"\u{1F48D}",buff:{stat:"crit",v:.08},use:"\u53EF\u9576\u5D4C\u63D0\u5347\u66B4\u51FB",price:130}),_e("engraver","\u96D5\u523B\u5E08","Engraver","\u63A7\u5236\u523B\u5200\u529B\u5EA6\uFF0C\u6CBF\u7EB9\u8DEF\u4E00\u5200\u4E0D\u65AD\u5B8C\u6210\u96D5\u7EB9\u3002","#d8c0a0","\u{1F5FF}",["bone","wood"],{kind:"timing",title:"\u8FD0\u5200\u529B\u5EA6",unit:"\u529B\u5EA6",target:[48,60],hits:7,speed:1.6,hint:"\u529B\u5EA6\u8FC7\u6D45\u523B\u4E0D\u4E0A\u3001\u8FC7\u6DF1\u4F1A\u5D29\u6599\u3002\u8FDE\u7EED 7 \u5200\u90FD\u843D\u5728\u7A84\u533A\u95F4\u5185\u3002",cost:{bone:1,wood:1}},{n:"\u7EB9\u7AE0",icon:"\u{1F5FF}",buff:{stat:"atk",v:.09},use:"\u63D0\u5347\u653B\u51FB",price:100}),_e("scribe","\u6284\u4E66\u5458","Scribe","\u8BB0\u5FC6\u7B26\u6587\u5E8F\u5217\u5E76\u4F9D\u6837\u590D\u5199\uFF0C\u4EA7\u51FA\u53EF\u4EA4\u6613\u7684\u6280\u80FD\u5377\u8F74\u3002","#c0b0e0","\u{1F4D6}",["feather","soul"],{kind:"sequence",title:"\u7B26\u6587\u590D\u5199",steps:7,speed:1.25,hint:"\u5148\u8BB0\u4F4F\u95EA\u73B0\u7684\u7B26\u6587\u987A\u5E8F\uFF0C\u518D\u6309\u540C\u6837\u987A\u5E8F\u70B9\u56DE\u53BB\u3002\u6BB5\u6570\u8D8A\u957F\u5377\u8F74\u8D8A\u7A00\u6709\u3002",cost:{feather:1,soul:1}},{n:"\u6280\u80FD\u5377\u8F74",icon:"\u{1F4DC}",buff:{stat:"elem",v:.12},use:"\u63D0\u5347\u5143\u7D20\u4F24\u5BB3",price:110}),_e("beastmaster","\u9A6F\u517D\u5E08","Beastmaster","\u5582\u98DF\u4E0E\u4E92\u52A8\u63D0\u5347\u4EB2\u5BC6\u5EA6\uFF0C\u8BA9\u91CE\u517D\u6210\u4E3A\u6218\u6597\u4F19\u4F34\u3002","#a8d888","\u{1F43E}",["hide","fruit","bone"],{kind:"collect",title:"\u9A6F\u517B\u4E92\u52A8",targets:11,time:13,speed:1.15,hint:"\u70B9\u4E2D\u98D8\u52A8\u7684\u5B89\u629A\u6807\u8BB0\uFF0C\u6F0F\u6389\u4F1A\u964D\u4F4E\u4EB2\u5BC6\u5EA6\u3002\u8FDE\u51FB\u53EF\u89E3\u9501\u65B0\u6307\u4EE4\u3002",cost:{fruit:1,hide:1}},{n:"\u5951\u7EA6\u517D",icon:"\u{1F43A}",buff:{stat:"atk",v:.1},use:"\u53EC\u5524\u534F\u540C\u4F5C\u6218",price:120}),_e("diviner","\u5360\u535C\u5E08","Diviner","\u6392\u5217\u661F\u8C61\u5366\u4F4D\uFF0C\u4E0D\u540C\u7684\u7EC4\u5408\u7ED9\u51FA\u4E0D\u540C\u7684\u5C42\u5185\u9884\u5146\u3002","#b79cf0","\u{1F52E}",["soul","crystal","ash"],{kind:"assemble",title:"\u661F\u8C61\u6392\u76D8",grid:3,target:5,speed:.85,hint:"\u70B9\u4EAE\u661F\u4F4D\u7EC4\u6210\u8FDE\u901A\u5366\u8C61\uFF0C\u5F62\u72B6\u4E0D\u540C\u4F1A\u7ED9\u51FA\u4E0D\u540C\u9884\u5146\uFF08\u6389\u7387 / \u5B9D\u7BB1 / \u5C42\u4E3B\u4F4D\u7F6E\uFF09\u3002",cost:{soul:1,crystal:1}},{n:"\u9884\u5146",icon:"\u{1F31F}",buff:{stat:"luck",v:.14},use:"\u63ED\u793A\u672C\u5C42\u79D8\u5BC6",price:0}),_e("architect","\u5EFA\u7B51\u5E08","Architect","\u6309\u7ED3\u6784\u56FE\u642D\u5EFA\u7ACB\u4F53\u6A21\u5757\uFF0C\u5B8C\u6210\u5EA6\u51B3\u5B9A\u8425\u5730\u52A0\u6210\u3002","#e0c890","\u{1F3DB}",["wood","ore","sand"],{kind:"assemble",title:"\u697C\u5C42\u642D\u5EFA",grid:5,target:11,speed:.9,hint:"\u653E\u7F6E\u5EFA\u7B51\u6A21\u5757\u4F7F\u8FDE\u901A\u9762\u79EF\u8FBE\u6807\uFF0C\u8FB9\u7F18\u5BF9\u9F50\u4F1A\u6709\u989D\u5916\u52A0\u6210\u3002",cost:{wood:2,ore:1,sand:1}},{n:"\u5EFA\u7B51\u84DD\u56FE",icon:"\u{1F4D0}",buff:{stat:"def",v:.14},use:"\u8425\u5730\u6C38\u4E45\u9632\u5FA1",price:140}),_e("musician","\u4E50\u5E08","Musician","\u8DDF\u7740\u8282\u62CD\u6F14\u594F\uFF0C\u8FDE\u51FB\u6570\u51B3\u5B9A\u66F2\u5B50\u7684\u589E\u76CA\u5F3A\u5EA6\u3002","#ffb8d8","\u{1F3BC}",["wood","feather"],{kind:"timing",title:"\u8282\u62CD\u6F14\u594F",unit:"\u8282\u62CD",target:[44,58],hits:8,speed:1.8,hint:"\u8DDF\u7740\u79FB\u52A8\u7684\u8282\u62CD\u6307\u9488\u6309\u952E\uFF0C\u8FDE\u7EED\u7CBE\u51C6\u4F1A\u53E0\u52A0\u8FDE\u51FB\uFF0C\u65AD\u62CD\u91CD\u6765\u3002",cost:{wood:1,feather:1}},{n:"\u6218\u6B4C",icon:"\u{1F3B5}",buff:{stat:"speed",v:.14},use:"\u5168\u961F\u589E\u76CA",price:90}),_e("painter","\u753B\u5E08","Painter","\u4E09\u539F\u8272\u8C03\u51FA\u76EE\u6807\u8272\uFF0C\u8272\u5DEE\u8D8A\u5C0F\u753B\u4F5C\u8D8A\u597D\u3002","#ff9ab0","\u{1F3A8}",["flower","dew","ash"],{kind:"ratio",title:"\u8C03\u8272",sliders:3,tol:4,target:[30,45,25],hint:"\u8C03\u51FA\u76EE\u6807\u8272\u3002\u4E09\u8272\u6BD4\u4F8B\u8BEF\u5DEE\u8D8A\u5C0F\uFF0C\u753B\u4F5C\u8BC4\u7EA7\u8D8A\u9AD8\u3002",cost:{flower:1,dew:1,ash:1}},{n:"\u98CE\u666F\u753B",icon:"\u{1F5BC}",buff:{stat:"luck",v:.1},use:"\u63D0\u5347\u6389\u7387",price:105}),_e("potter","\u9676\u5320","Potter","\u63A7\u5236\u62C9\u576F\u8F6C\u901F\u4E0E\u624B\u529B\uFF0C\u505A\u51FA\u4E0D\u584C\u4E0D\u88C2\u7684\u5668\u578B\u3002","#d0a880","\u{1F3FA}",["sand","dew"],{kind:"timing",title:"\u62C9\u576F",unit:"\u8F6C\u901F",target:[50,66],hits:6,speed:1.3,hint:"\u8F6C\u901F\u8FC7\u5FEB\u4F1A\u584C\u3001\u8FC7\u6162\u4F1A\u6B6A\uFF0C\u8FDE\u7EED 6 \u6B21\u7A33\u5728\u4E2D\u95F4\u533A\u3002",cost:{sand:2,dew:1}},{n:"\u9676\u5668",icon:"\u{1F3FA}",buff:{stat:"hp",v:.12},use:"\u63D0\u5347\u751F\u547D",price:70}),_e("tanner","\u76AE\u5320","Tanner","\u97A3\u5236\u5DE5\u5E8F\u6709\u4E25\u683C\u5148\u540E\uFF0C\u9519\u4E00\u6B65\u6574\u5F20\u76AE\u5C31\u5E9F\u4E86\u3002","#c89060","\u{1F7EB}",["hide","ash","spice"],{kind:"sequence",title:"\u97A3\u5236\u5DE5\u5E8F",steps:6,speed:1.1,hint:"\u6D78\u6C34\u2192\u53BB\u6BDB\u2192\u8F6F\u5316\u2192\u97A3\u5236\u2192\u667E\u6652\u2192\u4E0A\u6CB9\uFF0C\u987A\u5E8F\u4E0D\u80FD\u4E71\u3002",cost:{hide:2,ash:1,spice:1}},{n:"\u76AE\u9769",icon:"\u{1F7EB}",buff:{stat:"def",v:.1},use:"\u63D0\u5347\u9632\u5FA1",price:75}),_e("perfumer","\u9999\u6599\u5E08","Perfumer","\u524D\u4E2D\u540E\u8C03\u4E09\u5C42\u914D\u6BD4\uFF0C\u914D\u51FA\u72EC\u4E00\u65E0\u4E8C\u7684\u9999\u578B\u3002","#e8a8c0","\u{1F338}",["flower","spice","herb"],{kind:"ratio",title:"\u9999\u8C03\u914D\u6BD4",sliders:3,tol:6,target:[25,35,40],hint:"\u524D\u8C03 : \u4E2D\u8C03 : \u540E\u8C03\u3002\u504F\u79BB\u79D8\u65B9\u4F1A\u53D8\u6210\u5947\u602A\u7684\u6C14\u5473\uFF0C\u4F46\u4E5F\u53EF\u80FD\u53D1\u73B0\u65B0\u9999\u578B\u3002",cost:{flower:1,spice:1,herb:1}},{n:"\u9999\u6C34",icon:"\u{1F9F4}",buff:{stat:"luck",v:.12},use:"\u63D0\u5347\u7A00\u6709\u6389\u843D",price:115}),_e("artificer","\u673A\u5173\u5E08","Artificer","\u628A\u9F7F\u8F6E\u4E0E\u7B26\u6587\u6309\u7ED3\u6784\u88C5\u914D\uFF0C\u505A\u51FA\u81EA\u52A8\u70AE\u53F0\u4E0E\u9677\u9631\u3002","#9ac0d8","\u2699",["ore","crystal","wood"],{kind:"assemble",title:"\u673A\u5173\u88C5\u914D",grid:4,target:8,speed:1.2,hint:"\u628A\u9F7F\u8F6E\u6A21\u5757\u8FDE\u6210\u52A8\u529B\u56DE\u8DEF\uFF0C\u8FDE\u901A\u8D8A\u591A\u673A\u5173\u8F6C\u901F\u8D8A\u5FEB\u3002",cost:{ore:2,crystal:1,wood:1}},{n:"\u81EA\u52A8\u70AE\u53F0",icon:"\u2699",buff:{stat:"atk",v:.12},use:"\u53EC\u5524\u70AE\u53F0",price:135}),_e("glassblower","\u73BB\u7483\u5320","Glassblower","\u5439\u5236\u6C14\u538B\u4E0E\u65CB\u8F6C\uFF0C\u505A\u51FA\u900F\u660E\u7684\u9B54\u6CD5\u5668\u76BF\u3002","#a8e8f0","\u{1F52E}",["sand","crystal","ash"],{kind:"timing",title:"\u5439\u5236\u6C14\u538B",unit:"\u6C14\u538B",target:[40,58],hits:5,speed:1.45,hint:"\u6C14\u538B\u592A\u5927\u5439\u7834\u3001\u592A\u5C0F\u4E0D\u6210\u5F62\uFF0C\u8FDE\u7EED 5 \u6B21\u7A33\u4F4F\u3002",cost:{sand:2,crystal:1,ash:1}},{n:"\u9B54\u6676\u74F6",icon:"\u{1FAD9}",buff:{stat:"elem",v:.14},use:"\u63D0\u5347\u5143\u7D20\u4F24\u5BB3",price:125})],nd=[...On,...is],ye=Object.fromEntries(nd.map(i=>[i.id,i])),wx=On.map(i=>i.id),Ex=is.map(i=>i.id),Vr=i=>!!ye[i]&&ye[i].kind==="life",Tx=i=>{let t=ye[i];return t&&t.kind==="combat"?[...t.skills,...$n]:$n.slice()};var Bc={};lh(Bc,{AFFIXES:()=>cd,BIOMES:()=>Hs,BIOME_BY_ID:()=>Fi,BIOME_MATS:()=>Uc,BOSS_NAMES:()=>ld,BOSS_TITLES:()=>Nc,FLOORS:()=>Zo,MATERIALS:()=>ud,MAT_BY_ID:()=>Ce,MOB_FORMS:()=>Ix,MOB_FORM_BY_KEY:()=>Dc,QUALITIES:()=>zs,Q_BY_ID:()=>di,SLOTS:()=>Wr,STAT_N:()=>Xr,TAU:()=>ce,bossOf:()=>Oc,chance:()=>cn,clamp:()=>Gt,dist2:()=>hn,floorOf:()=>Zn,lerp:()=>Ni,makeItem:()=>fi,matsFor:()=>qr,mobFormOf:()=>Fc,mobNamesFor:()=>Jo,pick:()=>xn,rand:()=>ot,rnd:()=>Ui,rollQuality:()=>hd,smooth:()=>Ax});var ce=Math.PI*2,Gt=(i,t,e)=>i<t?t:i>e?e:i,Ni=(i,t,e)=>i+(t-i)*e,ot=(i,t)=>i+Math.random()*(t-i),Ui=i=>Math.floor(Math.random()*i),xn=i=>i[Ui(i.length)],cn=i=>Math.random()<i,Ax=i=>i*i*(3-2*i),hn=(i,t,e,n)=>Math.hypot(i-e,t-n),Hs=[{id:"meadow",n:"\u8D77\u59CB\u8349\u539F",col:7317066,col2:9290340,sky:5218272,horizon:14216693,fog:12376552,fogD:.0075,sun:16773840,sunI:2,amb:12375792,ambI:.85,flora:"grass",tree:"oak",rock:"stone",particle:"petal",step:"grass",accent:"#9be36b",ambience:"wind"},{id:"forest",n:"\u82CD\u7FE0\u5BC6\u6797",col:4026432,col2:5671752,sky:3107413,horizon:10470560,fog:9022355,fogD:.013,sun:15266496,sunI:1.45,amb:9021836,ambI:.72,flora:"fern",tree:"pine",rock:"moss",particle:"spore",step:"grass",accent:"#7fd8a0",ambience:"forest"},{id:"snow",n:"\u971C\u96EA\u9AD8\u539F",col:14477810,col2:15923452,sky:7183817,horizon:14675704,fog:14478069,fogD:.011,sun:15923455,sunI:1.8,amb:12113134,ambI:.95,flora:"snowgrass",tree:"fir",rock:"ice",particle:"snow",step:"snow",accent:"#a9dcff",ambience:"blizzard"},{id:"desert",n:"\u6D41\u7802\u5927\u6F20",col:14201966,col2:15520920,sky:6269146,horizon:16179118,fog:15718830,fogD:.009,sun:16773312,sunI:2.2,amb:14993824,ambI:.9,flora:"cactus",tree:"palm",rock:"sandstone",particle:"sand",step:"stone",accent:"#ffd583",ambience:"desert"},{id:"lava",n:"\u7194\u706B\u6DF1\u6E0A",col:4860712,col2:7617068,sky:3807004,horizon:11025186,fog:8008486,fogD:.017,sun:16756838,sunI:1.8,amb:10111024,ambI:.8,flora:"ashplant",tree:"dead",rock:"basalt",particle:"ember",step:"stone",accent:"#ff8b52",ambience:"volcano"},{id:"swamp",n:"\u5E7D\u6BD2\u6CBC\u6CFD",col:4874306,col2:6518346,sky:4873296,horizon:10136452,fog:9347194,fogD:.019,sun:13951660,sunI:1.15,amb:8556654,ambI:.7,flora:"reed",tree:"dead",rock:"moss",particle:"spore",step:"grass",accent:"#b6e06a",ambience:"swamp"},{id:"cave",n:"\u5E7D\u6676\u6D1E\u7A9F",col:3880272,col2:5589616,sky:1512486,horizon:4865894,fog:3813714,fogD:.022,sun:12560639,sunI:1,amb:8088496,ambI:.85,flora:"mushroom",tree:"crystal",rock:"crystal",particle:"crystal",step:"stone",accent:"#c09bff",ambience:"cave"},{id:"sakura",n:"\u7EEF\u6A31\u4E4B\u5EAD",col:9416300,col2:14198968,sky:8827872,horizon:16243942,fog:15783648,fogD:.009,sun:16773348,sunI:1.9,amb:15780056,ambI:.9,flora:"petalgrass",tree:"sakura",rock:"stone",particle:"petal",step:"grass",accent:"#ffa8c8",ambience:"wind"},{id:"ruins",n:"\u53E4\u738B\u9057\u8FF9",col:9078904,col2:11578002,sky:7308960,horizon:14275258,fog:12828072,fogD:.01,sun:16771517,sunI:1.75,amb:11054260,ambI:.85,flora:"weed",tree:"dead",rock:"marble",particle:"dust",step:"stone",accent:"#e8d39a",ambience:"ruins"},{id:"crystal",n:"\u68F1\u955C\u6676\u539F",col:4942982,col2:7973053,sky:4026012,horizon:11067632,fog:10474214,fogD:.011,sun:14218495,sunI:1.9,amb:9422048,ambI:.95,flora:"crystalgrass",tree:"crystal",rock:"crystal",particle:"crystal",step:"stone",accent:"#8ceaff",ambience:"crystal"},{id:"ocean",n:"\u6F6E\u6C50\u6D77\u5CB8",col:14272928,col2:9422024,sky:5220056,horizon:14086388,fog:12181480,fogD:.009,sun:16774360,sunI:2.1,amb:11065576,ambI:.9,flora:"coral",tree:"palm",rock:"coral",particle:"bubble",step:"grass",accent:"#7fe0e8",ambience:"ocean"},{id:"sky",n:"\u6D6E\u7A7A\u5929\u57CE",col:13227236,col2:15397112,sky:4032221,horizon:14478591,fog:13952250,fogD:.006,sun:16777215,sunI:2.3,amb:12900600,ambI:1,flora:"cloudgrass",tree:"crystal",rock:"marble",particle:"wisp",step:"stone",accent:"#bcd8ff",ambience:"sky"},{id:"grave",n:"\u4EA1\u8005\u5893\u539F",col:4868690,col2:6513002,sky:3816018,horizon:9076888,fog:7827590,fogD:.016,sun:12167384,sunI:1.1,amb:8222102,ambI:.75,flora:"deadgrass",tree:"dead",rock:"marble",particle:"wisp",step:"stone",accent:"#b79ce8",ambience:"grave"},{id:"garden",n:"\u7A7A\u4E2D\u82B1\u56ED",col:7843946,col2:11064456,sky:6532832,horizon:15267544,fog:14085330,fogD:.007,sun:16774864,sunI:2.15,amb:13166784,ambI:.95,flora:"flower",tree:"sakura",rock:"marble",particle:"petal",step:"grass",accent:"#ffd6e8",ambience:"garden"},{id:"bamboo",n:"\u7AF9\u9690\u4E4B\u91CC",col:6195788,col2:9418848,sky:8369608,horizon:14478544,fog:12639424,fogD:.01,sun:15923408,sunI:1.7,amb:11061408,ambI:.85,flora:"fern",tree:"bamboo",rock:"moss",particle:"leaf",step:"grass",accent:"#a8e08a",ambience:"bamboo"},{id:"ash",n:"\u7070\u70EC\u8352\u539F",col:4999236,col2:7037530,sky:5525594,horizon:11050128,fog:9603714,fogD:.015,sun:15255976,sunI:1.3,amb:10129544,ambI:.78,flora:"deadgrass",tree:"dead",rock:"basalt",particle:"ash",step:"stone",accent:"#d8b89a",ambience:"ash"}],Fi=Object.fromEntries(Hs.map(i=>[i.id,i])),Rx={meadow:["\u8D77\u59CB","\u5FAE\u98CE","\u9752\u91CE","\u8FDC\u7267","\u6674\u5149","\u9732\u539F","\u98CE\u6B4C"],forest:["\u82CD\u7FE0","\u6DF1\u6797","\u82D4\u5F71","\u53E4\u6728","\u7EFF\u7A97","\u5E7D\u679D","\u53F6\u9690"],snow:["\u767D\u971C","\u51BB\u5CAD","\u96EA\u51A0","\u94F6\u539F","\u51B0\u8F6E","\u5BD2\u7A79","\u9759\u767D"],desert:["\u8D64\u7802","\u6D41\u91D1","\u9A7C\u94C3","\u65F1\u6D77","\u783E\u4E18","\u707C\u663C","\u6C99\u7720"],lava:["\u7194\u5FC3","\u708E\u72F1","\u9ED1\u66DC","\u706B\u8109","\u7126\u5CA9","\u8D64\u7089","\u70EC\u6CB3"],swamp:["\u5E7D\u6CFD","\u6BD2\u96FE","\u8150\u6CBC","\u82C7\u8361","\u7634\u8C37","\u6D6E\u82D4","\u6697\u6F66"],cave:["\u77F3\u9AD3","\u5E7D\u6676","\u5730\u8109","\u949F\u4E73","\u6697\u7A9F","\u56DE\u97F3","\u6DF1\u96A7"],sakura:["\u7EEF\u6A31","\u82B1\u5439","\u8584\u7EA2","\u6625\u5EAD","\u6563\u534E","\u6A31\u96E8","\u971E\u679D"],ruins:["\u53E4\u738B","\u65AD\u7891","\u6B8B\u67F1","\u65E7\u90FD","\u77F3\u9636","\u8352\u6BBF","\u94ED\u6587"],crystal:["\u68F1\u6676","\u68F1\u955C","\u955C\u6D77","\u8679\u539F","\u6676\u5195","\u6298\u5149","\u78A7\u785D"],ocean:["\u6F6E\u6C50","\u78A7\u6E7E","\u73CA\u745A","\u6D6A\u75D5","\u76D0\u98CE","\u6CAB\u5CB8","\u6DF1\u84DD"],sky:["\u7A79\u9876","\u6D6E\u7A7A","\u4E91\u5BAB","\u5929\u68AF","\u98CE\u9636","\u661F\u6865","\u767D\u7A79"],grave:["\u5BC2\u706D","\u4EA1\u8005","\u7891\u6797","\u9B42\u706B","\u591C\u8314","\u7070\u51A0","\u957F\u7720"],garden:["\u82AC\u82B3","\u7A7A\u4E2D","\u82B1\u82D1","\u85E4\u5ECA","\u9999\u5EAD","\u7EFF\u7A79","\u6CC9\u56ED"],bamboo:["\u9752\u7AF9","\u7AF9\u9690","\u53F6\u96E8","\u7BC1\u91CC","\u6E05\u8282","\u7FE0\u5F84","\u98CE\u7BC1"],ash:["\u7070\u70EC","\u6B8B\u706B","\u7126\u571F","\u4F59\u70EC","\u5C18\u539F","\u51B7\u7070","\u8352\u70DF"]},id=["\u4E4B\u91CE","\u4E4B\u4E18","\u4E4B\u5F84","\u4E4B\u53F0","\u4E4B\u7554","\u4E4B\u5EAD","\u4E4B\u5D16","\u4E4B\u95E8","\u4E4B\u6E0A","\u4E4B\u5EA7","\u4E4B\u5ECA","\u4E4B\u5CB8"],Cx=["\u521D\u9192","\u56DE\u5ECA","\u65AD\u5C42","\u56DE\u58F0","\u6B67\u8DEF","\u6DF1\u6F5C","\u6B8B\u54CD","\u7EC8\u5E55","\u8FB9\u754C","\u5929\u68AF"],sd={},rd=["\u6D6E\u6E38\u57CE\u7684\u7B2C\u4E00\u7F15\u98CE\u4ECE\u8FD9\u91CC\u5439\u8D77\uFF0C\u5251\u4E0E\u547D\u8FD0\u4E00\u5E76\u5C55\u5F00\u3002","\u6797\u95F4\u6709\u4F4E\u8BED\uFF0C\u636E\u8BF4\u8FF7\u8DEF\u7684\u4EBA\u4F1A\u6210\u4E3A\u6811\u7684\u4E00\u90E8\u5206\u3002","\u8D8A\u5F80\u4E0A\uFF0C\u7A7A\u6C14\u8D8A\u8584\uFF0C\u63E1\u5251\u7684\u624B\u4E5F\u8D8A\u6C89\u3002","\u7802\u783E\u63A9\u57CB\u8FC7\u65E0\u6570\u672A\u53CA\u8BF4\u51FA\u53E3\u7684\u540D\u5B57\u3002","\u811A\u4E0B\u7684\u5CA9\u77F3\u4ECD\u5728\u53D1\u70EB\uFF0C\u50CF\u6709\u4EC0\u4E48\u5728\u6DF1\u5904\u547C\u5438\u3002","\u6C34\u9762\u6D6E\u7740\u6C14\u6CE1\uFF0C\u522B\u53BB\u6570\u5B83\u4EEC\u4ECE\u54EA\u513F\u6765\u3002","\u6676\u7C07\u91CC\u6620\u51FA\u7684\u662F\u4F60\uFF0C\u4F46\u52A8\u4F5C\u6162\u4E86\u534A\u62CD\u3002","\u82B1\u74E3\u843D\u4E0B\u7684\u901F\u5EA6\uFF0C\u521A\u597D\u591F\u4F60\u6325\u4E00\u6B21\u5251\u3002","\u77F3\u9636\u4E0A\u7559\u7740\u4E0A\u4E00\u4EFB\u653B\u7565\u961F\u7684\u523B\u75D5\u3002","\u949F\u58F0\u6CA1\u6709\u6765\u6E90\uFF0C\u5374\u6BCF\u4E00\u5C42\u90FD\u542C\u5F97\u89C1\u3002"],od=[];for(let i=0;i<100;i++)od.push((i*7+Math.floor(i/16)*3)%16);var Zo=Array.from({length:100},(i,t)=>{let e=Hs[od[t]],n=sd[e.id]=(sd[e.id]||0)+1,s=Rx[e.id][(n-1)%7]+id[(n-1+t)%id.length]+"\xB7"+Cx[Math.floor(t/10)];return{f:t+1,biome:e.id,name:s,story:rd[t%rd.length],lv:1+t*1.35,landmark:(t+1)%10===0,mobCount:6+Math.min(9,Math.floor(t/11)),chestCount:2+t%3,nodeCount:5+t%4,gateCount:3+Math.min(2,Math.floor(t/30))}}),Zn=i=>Zo[Gt(i-1,0,99)],Ix=["beast","humanoid","flyer","bug","undead","elemental","dragon","slime","plant","golem"],ad={meadow:["\u8349\u539F\u91CE\u732A","\u98CE\u5154","\u9752\u9B03\u72FC"],forest:["\u82D4\u7532\u718A","\u85E4\u8513\u733F","\u6BD2\u8548\u7CBE"],snow:["\u971C\u7259\u72FC","\u51B0\u539F\u731E\u7301","\u96EA\u5080\u5121"],desert:["\u7802\u874E","\u6D41\u6C99\u8725","\u79C3\u9E6B"],lava:["\u7194\u5CA9\u72AC","\u708E\u7532\u866B","\u7070\u70EC\u9B54"],swamp:["\u6CBC\u86D9","\u8150\u85E4\u602A","\u6BD2\u868A\u7FA4"],cave:["\u6D1E\u7A74\u8760","\u6676\u7C07\u87F9","\u5CA9\u5C45\u8815\u866B"],sakura:["\u6A31\u7075","\u7EB8\u4F1E\u5996","\u82B1\u8776"],ruins:["\u77F3\u536B\u5175","\u6B8B\u7532\u9A91\u58EB","\u5C18\u5C01\u5B88\u536B"],crystal:["\u68F1\u5149\u517D","\u6676\u8776","\u955C\u9762\u9B54"],ocean:["\u6F6E\u87F9","\u6D77\u5996","\u7535\u6C34\u6BCD"],sky:["\u6D6E\u7A7A\u9CD0","\u98CE\u7CBE\u7075","\u4E91\u517D"],grave:["\u9AB8\u9AA8\u5175","\u5E7D\u9B42","\u5893\u7A74\u86DB"],garden:["\u82B1\u7CBE","\u56ED\u4E01\u5080\u5121","\u85E4\u517D"],bamboo:["\u7AF9\u53F6\u9752","\u718A\u732B\u517D","\u7B0B\u5996"],ash:["\u7070\u70EC\u884C\u8005","\u7126\u70AD\u517D","\u6B8B\u706B\u7075"]},Jo=i=>ad[i]||ad.meadow,Dc={\u91CE\u732A:"beast",\u72FC:"beast",\u718A:"beast",\u5154:"beast",\u731E\u7301:"beast",\u72AC:"beast",\u8725:"beast",\u517D:"beast",\u718A\u732B:"beast",\u87F9:"beast",\u9CD0:"beast",\u86DB:"bug",\u8760:"flyer",\u8776:"flyer",\u868A:"flyer",\u79C3\u9E6B:"flyer",\u7CBE\u7075:"elemental",\u5996:"elemental",\u7075:"elemental",\u9B42:"undead",\u6C34\u6BCD:"elemental",\u9B54:"elemental",\u9A91\u58EB:"humanoid",\u5175:"humanoid",\u536B\u5175:"humanoid",\u5B88\u536B:"humanoid",\u884C\u8005:"undead",\u5080\u5121:"golem",\u8815\u866B:"bug",\u866B:"bug",\u874E:"bug",\u86D9:"beast",\u733F:"beast",\u7CBE:"plant",\u602A:"plant",\u85E4:"plant",\u8548:"plant",\u82B1:"plant",\u5080:"golem",\u83C7:"plant"};function Fc(i){for(let t in Dc)if(i.includes(t))return Dc[t];return"beast"}var Px=["\u82CD\u7259","\u8D64\u9CDE","\u971C\u89D2","\u9AB8\u9762","\u96F7\u9B03","\u5E7D\u77B3","\u94C1\u8E44","\u7130\u7FFC","\u6DF1\u6E0A","\u91D1\u51A0","\u77F3\u5FC3","\u5F71\u722A","\u8352\u795E","\u78A7\u773C","\u7070\u70EC","\u661F\u9AB8","\u8840\u6708","\u9ED1\u66DC","\u767D\u591C","\u8150\u679D"],Lx=["\u4F0A\u5C14\u51E1","\u683C\u91CC\u5FB7","\u5948\u843D","\u5DF4\u6D1B\u5C14","\u65AF\u5361\u8482"],ld=Array.from({length:100},(i,t)=>Px[t%20]+"\xB7"+Lx[Math.floor(t/20)]),Nc=["\u5B88\u95E8\u8005","\u5C42\u4E3B","\u6DF1\u6E0A\u4EE3\u884C\u8005","\u8FF7\u5BAB\u4E4B\u4E3B","\u6D6E\u6E38\u57CE\u536B\u58EB","\u7981\u5FCC\u4E4B\u5F71","\u8BD5\u70BC\u88C1\u5B9A\u8005","\u661F\u754C\u5B88\u671B"],Oc=i=>({f:i,name:ld[i-1],title:Nc[(i-1)%Nc.length],elem:["fire","ice","dark","light","wind","thunder"][(i-1)%6],hp:420+i*78,atk:12+i*2.6,def:4+i*.9}),Wr=[{id:"weapon",n:"\u6B66\u5668",icon:"\u2694"},{id:"head",n:"\u5934\u90E8",icon:"\u26D1"},{id:"body",n:"\u80F8\u7532",icon:"\u{1F6E1}"},{id:"legs",n:"\u62A4\u817F",icon:"\u{1F462}"},{id:"acc",n:"\u9970\u54C1",icon:"\u{1F48D}"}],zs=[{id:"common",n:"\u7C97\u52A3",c:"#c8d0da",mul:1,w:52},{id:"uncommon",n:"\u7CBE\u826F",c:"#69dc84",mul:1.3,w:27},{id:"rare",n:"\u7A00\u6709",c:"#5aa8ff",mul:1.7,w:13},{id:"epic",n:"\u53F2\u8BD7",c:"#b478ff",mul:2.25,w:6},{id:"legendary",n:"\u4F20\u8BF4",c:"#ffab3d",mul:3.1,w:1.8},{id:"mythic",n:"\u795E\u8BDD",c:"#ff5470",mul:4.4,w:.2}],di=Object.fromEntries(zs.map(i=>[i.id,i])),Dx={weapon:["\u7EC3\u4E60\u5251","\u94C1\u5251","\u957F\u5203","\u5927\u5251","\u53CC\u5203","\u9A91\u67AA","\u6CD5\u6756","\u77ED\u5F13","\u6218\u9524","\u5315\u9996","\u7B26\u6587\u5251","\u5149\u5203"],head:["\u5E03\u5E3D","\u76AE\u76D4","\u94C1\u76D4","\u7FBD\u9970\u76D4","\u89D2\u76D4","\u6CD5\u51A0","\u9762\u7F69"],body:["\u5E03\u8863","\u76AE\u7532","\u9501\u5B50\u7532","\u677F\u7532","\u6CD5\u888D","\u8F7B\u94E0","\u6597\u7BF7"],legs:["\u5E03\u88E4","\u76AE\u9774","\u94C1\u80EB\u7532","\u957F\u9774","\u62A4\u80EB","\u6CD5\u88E4"],acc:["\u6728\u6212","\u94DC\u6212","\u62A4\u7B26","\u5FBD\u7AE0","\u9879\u94FE","\u6307\u73AF","\u62A4\u8EAB\u7B26"]},cd=[{id:"sharp",n:"\u950B\u5229",stat:"atk",v:.14},{id:"solid",n:"\u575A\u56FA",stat:"def",v:.16},{id:"swift",n:"\u8FC5\u6377",stat:"speed",v:.1},{id:"deadly",n:"\u81F4\u547D",stat:"crit",v:.05},{id:"vital",n:"\u575A\u97E7",stat:"hp",v:.13},{id:"lucky",n:"\u5E78\u8FD0",stat:"luck",v:.1},{id:"burn",n:"\u707C\u70E7",stat:"elem",v:.12},{id:"frost",n:"\u5BD2\u971C",stat:"elem",v:.12},{id:"shock",n:"\u96F7\u51FB",stat:"elem",v:.12},{id:"leech",n:"\u5438\u8840",stat:"leech",v:.06}],Xr={atk:"\u653B\u51FB",def:"\u9632\u5FA1",hp:"\u751F\u547D",speed:"\u79FB\u901F",crit:"\u66B4\u51FB",luck:"\u6389\u7387",elem:"\u5143\u7D20",leech:"\u5438\u8840"};function hd(i,t,e=0){let n=i*.16+(t?12:0)+e*14,s=zs.map((o,l)=>l===0?Math.max(6,o.w-n*1.5):o.w*(1+n*.075*l/2)),r=s.reduce((o,l)=>o+l,0),a=Math.random()*r;for(let o=0;o<zs.length;o++)if(a-=s[o],a<=0)return zs[o];return zs[0]}function fi(i,t=!1,e=0,n=null){let s=hd(i,t,e),r=n||xn(Wr).id,a=xn(Dx[r]),o=Math.max(1,i),l=[],c=1+(s.mul>1.6?1:0)+(s.mul>3?1:0)+(cn(.25)?1:0);for(let f=0;f<c;f++){let x=xn(cd);l.find(y=>y.id===x.id)||l.push(x)}let h={atk:0,def:0,hp:0,speed:0,crit:0,luck:0,elem:0,leech:0},d=r==="weapon"?9+o*2.4:1+o*.32,u=r==="body"?6+o*1.7:r==="head"||r==="legs"?3+o*1:.5+o*.2;return h.atk=+(d*s.mul*ot(.85,1.18)).toFixed(1),h.def=+(u*s.mul*ot(.85,1.18)).toFixed(1),h.hp=Math.round((4+o*2.6)*s.mul*ot(.85,1.2)),l.forEach(f=>{h[f.stat]+=+(f.v*(1+o*.06)*s.mul).toFixed(3)}),{uid:"it"+Date.now().toString(36)+Ui(1e6).toString(36),slot:r,q:s.id,name:s.n+"\u7684"+a,base:a,aff:l,stats:h,lv:o,price:Math.round((14+o*9)*s.mul)}}var ud=[{id:"herb",n:"\u836F\u8349",c:"#7fdc7a",icon:"\u{1F33F}"},{id:"ore",n:"\u77FF\u77F3",c:"#b9bcc8",icon:"\u26CF"},{id:"wood",n:"\u6728\u6750",c:"#c89a5c",icon:"\u{1FAB5}"},{id:"crystal",n:"\u6676\u7C07",c:"#8ce0ff",icon:"\u{1F48E}"},{id:"dew",n:"\u6668\u9732",c:"#9fd8f0",icon:"\u{1F4A7}"},{id:"hide",n:"\u517D\u76AE",c:"#d8a878",icon:"\u{1F7EB}"},{id:"fish",n:"\u9C9C\u9C7C",c:"#8fd0e8",icon:"\u{1F41F}"},{id:"grain",n:"\u9EA6\u7A57",c:"#f0d070",icon:"\u{1F33E}"},{id:"fruit",n:"\u679C\u5B9E",c:"#ff9a7a",icon:"\u{1F34E}"},{id:"mush",n:"\u83CC\u83C7",c:"#d8b0e0",icon:"\u{1F344}"},{id:"spice",n:"\u9999\u6599",c:"#e8b050",icon:"\u{1F336}"},{id:"bone",n:"\u517D\u9AA8",c:"#e0dcc8",icon:"\u{1F9B4}"},{id:"feather",n:"\u7FBD\u7FCE",c:"#cfe4f0",icon:"\u{1FAB6}"},{id:"pearl",n:"\u73CD\u73E0",c:"#f0e8f8",icon:"\u26AA"},{id:"soul",n:"\u9B42\u5C18",c:"#b79cf0",icon:"\u2726"},{id:"flower",n:"\u82B1\u74E3",c:"#ffb0cc",icon:"\u{1F338}"},{id:"ash",n:"\u7070\u70EC",c:"#a8a098",icon:"\u{1F32B}"},{id:"sand",n:"\u7EC6\u7802",c:"#e8d098",icon:"\u231B"}],Ce=Object.fromEntries(ud.map(i=>[i.id,i])),Uc={meadow:["herb","grain","flower","dew"],forest:["wood","mush","herb","hide"],snow:["crystal","dew","bone","feather"],desert:["sand","bone","ore","spice"],lava:["ore","ash","crystal","soul"],swamp:["mush","herb","hide","dew"],cave:["ore","crystal","mush","bone"],sakura:["flower","wood","herb","dew"],ruins:["ore","bone","crystal","soul"],crystal:["crystal","ore","dew","soul"],ocean:["fish","pearl","sand","dew"],sky:["feather","crystal","dew","soul"],grave:["bone","soul","ash","mush"],garden:["flower","fruit","herb","grain"],bamboo:["wood","grain","herb","feather"],ash:["ash","ore","bone","soul"]},qr=i=>Uc[i]||Uc.meadow;var G={sph:new Ai(1,12,9),sph8:new Ai(1,8,6),box:new Ei(1,1,1),cyl:new Tn(1,1,1,10),cyl6:new Tn(1,1,1,6),cone:new Ti(1,1,10),cone5:new Ti(1,1,5),torus:new Zi(1,.16,6,18),ico:new li(1,0),plane:new mn(1,1,4,6)},kc=new Map,zc=null;function Nx(){if(zc)return zc;let i=new Uint8Array([96,176,255]),t=new qi(i,3,1,Os);return t.minFilter=we,t.magFilter=we,t.generateMipmaps=!1,t.needsUpdate=!0,zc=t,t}function wt(i,t={}){let e=i&&typeof i=="object"?"#"+i.getHexString():String(i),n={...t};delete n.flatShading;let s=JSON.stringify(n,(o,l)=>l&&l.isColor?"#"+l.getHexString():l),r=e+"|"+s;if(kc.has(r))return kc.get(r);let a=new br({color:i,gradientMap:Nx(),...n});return kc.set(r,a),a}var Ux=new Ue({color:2760760,side:Fe,fog:!0});function dd(i,t=1.055){let e=[];i.traverse(n=>{!n.isMesh||n.userData.noOutline||n.geometry===G.plane||n.geometry===G.torus||Math.max(n.scale.x,n.scale.y,n.scale.z)<.1||e.push(n)});for(let n of e){let s=new $t(n.geometry,Ux);s.scale.setScalar(t),s.userData.noOutline=!0,s.castShadow=!1,s.receiveShadow=!1,n.add(s)}return i}function Ct(i,t,e,n,s,r,a,o,l={}){let{cast:c,...h}=l,d=new $t(i,typeof t=="number"?wt(t,h):t);return d.position.set(e,n,s),d.scale.set(r,a,o),d.castShadow=c!==!1,d.receiveShadow=!1,d}function fe(i=0,t=0,e=0){let n=new Re;return n.position.set(i,t,e),n}function _n(i,t){let e=new ct(i);return e.multiplyScalar(t),e}function Fx(i,t=14674162){let e=fe(),n=wt(t,{emissive:_n(t,.3)}),s=wt(3817292),r=wt(15253873),a=wt(9068348),o=(l,c,h,d,u,f,x,y,m=0)=>{let p=Ct(l,c,h,d,u,f,x,y);return p.rotation.z=m,e.add(p),p};switch(i){case"sword":case"katana":{let l=i==="katana"?1.18:1;o(G.box,s,0,-.1,0,.07,.34,.07),o(G.box,r,0,.08,0,.3,.055,.09),o(G.box,n,0,.08+l*.48,0,.105,l*.92,.028),o(G.cone,n,0,.08+l*.98,0,.075,.2,.028);break}case"dual":{for(let l of[-1,1])o(G.box,s,l*.13,-.06,0,.045,.24,.045),o(G.box,n,l*.13,.55,0,.075,1.02,.022,l*.08);break}case"greatsword":{o(G.box,s,0,-.14,0,.09,.46,.09),o(G.box,r,0,.1,0,.44,.07,.12),o(G.box,n,0,.82,0,.2,1.34,.04),o(G.cone,n,0,1.58,0,.13,.3,.04);break}case"spear":case"lance":{o(G.cyl6,a,0,.62,0,.038,2.5,.038),o(G.cone,r,0,1.92,0,.1,.26,.1),o(G.cone,n,0,2.12,0,.075,.42,.075);break}case"dagger":case"shuriken":{if(i==="shuriken")for(let l=0;l<4;l++){let c=o(G.cone,n,0,.1,0,.1,.3,.03);c.rotation.z=l*Math.PI/2,c.rotation.x=Math.PI/2}else o(G.box,s,0,-.06,0,.055,.22,.055),o(G.box,n,0,.28,0,.085,.56,.022),o(G.cone,n,0,.6,0,.06,.16,.022);break}case"shield":{o(G.box,n,0,.18,.06,.52,.72,.1),o(G.box,r,0,.18,.12,.12,.52,.03),o(G.box,r,0,.18,.12,.4,.1,.03),o(G.box,s,0,-.12,0,.07,.28,.07);break}case"staff":case"mace":{if(o(G.cyl6,a,0,.7,0,.045,2.5,.045),i==="staff"){let l=o(G.ico,wt(10124543,{emissive:4861082}),0,2.02,0,.19,.19,.19);e.userData.orb=l,o(G.torus,r,0,2.02,0,.26,.26,.26).rotation.x=Math.PI/2}else o(G.sph8,r,0,1.98,0,.17,.17,.17);break}case"bow":{for(let l of[-1,1]){let c=o(G.box,a,l*.1,.55,0,.045,.62,.045);c.rotation.z=l*.3}o(G.box,wt(15263968),0,.55,0,.012,1.18,.012);break}case"tome":{o(G.box,wt(6965914),0,.1,0,.42,.54,.1),o(G.box,r,0,.1,.056,.36,.46,.012),o(G.ico,wt(9232592,{emissive:2787962}),0,.1,.09,.1,.1,.1);break}case"gun":{o(G.box,s,0,.12,0,.13,.22,.13),o(G.cyl6,n,0,.3,.42,.045,.95,.045).rotation.x=Math.PI/2,o(G.box,a,0,-.06,-.16,.11,.34,.18);break}default:o(G.box,n,0,.45,0,.1,.82,.03)}return e}function Ko(i={}){let{color:t=4882384,skin:e=15913136,hair:n=2761780,cloth:s=null,cape:r=!1,helm:a=!1,weapon:o="sword",scale:l=1,enemy:c=!1,slim:h=!1,glow:d=0}=i,u=s||t,f=fe();f.scale.setScalar(l);let x=fe(0,0,0);f.add(x);let y=wt(u,d?{emissive:_n(d,.35)}:{}),m=wt(_n(u,.62)),p=wt(_n(u,1.25)),v=wt(e),T=wt(n),w=wt(3814208),R=wt(14213098),E=h?.82:1,_=fe(0,.92,0);x.add(_),_.add(Ct(G.box,m,0,-.03,0,.4*E,.2,.24));let S=fe(0,.22,0);_.add(S),S.add(Ct(G.cyl,y,0,.18,0,.28*E,.6,.2*E)),S.add(Ct(G.box,p,0,.34,0,.3*E,.1,.21*E)),S.add(Ct(G.box,m,0,-.1,0,.4*E,.09,.25*E)),S.add(Ct(G.box,wt(15253873),0,-.1,.13*E,.1,.1,.04));for(let C of[-1,1])S.add(Ct(G.sph8,R,C*.3*E,.34,0,.13,.1,.14));let L=fe(0,.62,0);S.add(L),L.add(Ct(G.sph,v,0,.12,0,.215,.235,.205)),L.add(Ct(G.sph,T,0,.235,-.015,.225,.175,.215)),L.add(Ct(G.box,T,0,.245,.17,.4,.095,.1));for(let C of[-1,1])L.add(Ct(G.box,T,C*.205,.1,0,.075,.26,.2));if(c){let C=wt(16734810,{emissive:10035746});for(let H of[-1,1])L.add(Ct(G.sph8,C,H*.082,.125,.196,.038,.032,.018))}else{let C=wt(16316159),H=wt(4875208),q=wt(1841206),X=wt(16777215);for(let Y of[-1,1])L.add(Ct(G.sph8,C,Y*.09,.132,.188,.052,.062,.022)),L.add(Ct(G.sph8,H,Y*.09,.127,.205,.036,.05,.016)),L.add(Ct(G.sph8,q,Y*.09,.125,.217,.02,.032,.01)),L.add(Ct(G.sph8,X,Y*.078,.148,.226,.014,.017,.008)),L.add(Ct(G.box,T,Y*.09,.206,.193,.088,.016,.018)),L.add(Ct(G.sph8,wt(16756920),Y*.155,.072,.178,.036,.019,.012));L.add(Ct(G.sph8,wt(13923210),0,.058,.204,.022,.01,.01)),L.add(Ct(G.box,wt(_n(n,1.6)),-.055,.318,.168,.17,.026,.028));let st=Ct(G.cone,T,.02,.43,-.02,.035,.2,.035);st.rotation.z=.5,L.add(st)}a&&(L.add(Ct(G.sph,R,0,.22,-.01,.235,.19,.225)),L.add(Ct(G.box,R,0,.1,.2,.4,.07,.08)),L.add(Ct(G.cone,y,0,.44,0,.1,.3,.1)));let I={};for(let C of[-1,1]){let H=fe(C*.32*E,.34,0);S.add(H),H.add(Ct(G.cyl,y,0,-.18,0,.095*E,.38,.095*E));let q=fe(0,-.36,0);H.add(q),q.add(Ct(G.cyl,v,0,-.16,0,.078*E,.34,.078*E)),q.add(Ct(G.sph8,v,0,-.34,0,.085,.085,.085)),q.add(Ct(G.box,m,0,-.06,0,.18*E,.1,.18*E)),I[C<0?"L":"R"]={sh:H,el:q}}let N={};for(let C of[-1,1]){let H=fe(C*.14*E,-.1,0);_.add(H),H.add(Ct(G.cyl,m,0,-.24,0,.115*E,.5,.115*E));let q=fe(0,-.48,0);H.add(q),q.add(Ct(G.cyl,v,0,-.21,0,.1*E,.44,.1*E)),q.add(Ct(G.box,w,0,-.44,.045,.19*E,.16,.27)),N[C<0?"L":"R"]={hp:H,kn:q}}let O=null;if(r){let C=new $t(G.plane,wt(_n(u,.72),{side:Se}));C.scale.set(.62,1.05,1),C.position.set(0,-.16,-.16),C.castShadow=!0,S.add(C),O=C,S.add(Ct(G.box,p,0,.4,-.1,.34*E,.08,.12))}let W=null;if(o&&o!=="none"&&(W=Fx(o,c?12634324:15134456),W.position.set(.1,-.34,.1),W.rotation.set(-.22,0,.3),I.R.el.add(W),!c)){let C=new $t(G.box,wt(3485764));C.position.set(-.16,.1,-.21),C.scale.set(.13,1.02,.1),C.rotation.z=-.38,C.castShadow=!0,S.add(C);let H=new $t(G.box,wt(15253873));H.position.set(-.35,.6,-.21),H.scale.set(.1,.22,.1),H.rotation.z=-.38,S.add(H)}return f.userData={body:x,hip:_,torso:S,head:L,arms:I,legs:N,capeMesh:O,weaponObj:W,phase:ot(0,ce),baseY:0},dd(f,1.05),f}function jo(i,t){let e=i&&i.userData;if(!e||!e.arms)return;let n=t.t||0,s=t.dt||0,r=Gt(t.move||0,0,1),a=t.run?1.35:1,o=e.phase+=s*(3.2+r*6.5*a),l=Math.sin(o),c=Math.sin(o*2),h=e.arms,d=e.legs;if(d.L.hp.rotation.x=l*.62*r,d.R.hp.rotation.x=-l*.62*r,d.L.kn.rotation.x=Math.max(0,-l)*.72*r,d.R.kn.rotation.x=Math.max(0,l)*.72*r,h.L.sh.rotation.x=-l*.52*r,h.R.sh.rotation.x=l*.52*r,h.L.sh.rotation.z=.1,h.R.sh.rotation.z=-.1,h.L.el.rotation.x=-.18-Math.max(0,l)*.28*r,h.R.el.rotation.x=-.18-Math.max(0,-l)*.28*r,e.hip.position.y=.92+Math.abs(c)*.045*r+Math.sin(n*1.8+e.phase)*.012,e.torso.rotation.z=l*.035*r,e.torso.rotation.y=l*.05*r,e.head.rotation.y=Math.sin(n*.7+e.phase)*.08,e.capeMesh){e.capeMesh.rotation.x=-.12-r*.28-Math.sin(n*2.4+e.phase)*.07;let x=e.capeMesh.geometry.attributes.position;for(let y=0;y<x.count;y++){let m=x.getY(y);x.setZ(y,Math.sin(n*3+m*4+e.phase)*.07*(1-m))}x.needsUpdate=!0}let u=t.action,f=t.at||0;if(e.hip.rotation.x=0,e.body.rotation.x=0,u==="roll"){let x=Gt(f,0,1);e.hip.rotation.x=-ce*x,e.hip.position.y=.92+Math.sin(x*Math.PI)*.62,d.L.hp.rotation.x=-1.45,d.R.hp.rotation.x=-1.45,d.L.kn.rotation.x=1.85,d.R.kn.rotation.x=1.85,h.L.sh.rotation.x=-1.9,h.R.sh.rotation.x=-1.9,h.L.el.rotation.x=-1,h.R.el.rotation.x=-1,e.torso.rotation.x=-.45,e.head.rotation.x=.3}else if(u==="attack"||u==="skill"||u==="combo"){let x=Gt(f,0,1),y=x<.3?x/.3:1-(x-.3)/.7;h.R.sh.rotation.x=-2+y*.7,h.R.sh.rotation.z=-.75+y*.5,h.R.el.rotation.x=-.9+y*.8,h.L.sh.rotation.x=-.7,h.L.sh.rotation.z=.45,e.torso.rotation.y=-.55+y*.9,e.hip.rotation.y=-.22+y*.4,d.L.hp.rotation.x=.4,d.R.hp.rotation.x=-.3}else if(u==="cast"){let x=Gt(f,0,1);h.R.sh.rotation.x=-1.45+Math.sin(x*Math.PI)*.35,h.R.el.rotation.x=-.75,h.L.sh.rotation.x=-1.15,h.L.sh.rotation.z=.35,e.torso.rotation.x=-.12,e.weaponObj&&e.weaponObj.userData.orb&&e.weaponObj.userData.orb.scale.setScalar(.19+Math.sin(x*12)*.05)}else if(u==="guard"||t.guard)h.L.sh.rotation.x=-1.5,h.L.sh.rotation.z=.62,h.L.el.rotation.x=-1.05,h.R.sh.rotation.x=-.6,h.R.sh.rotation.z=-.3,h.R.el.rotation.x=-.6,e.torso.rotation.y=.3,e.torso.rotation.x=-.14,e.hip.position.y=.85,e.hip.rotation.y=0,e.head.rotation.x=0,d.L.hp.rotation.x=.24,d.R.hp.rotation.x=-.24;else if(u==="bow")h.R.sh.rotation.x=-1.5,h.R.el.rotation.x=-.2,h.L.sh.rotation.x=-1.5,h.L.sh.rotation.z=.3,e.torso.rotation.y=-.3;else if(u==="hurt"){let x=Gt(f,0,1);e.torso.rotation.x=-.42*(1-x),e.head.rotation.x=-.3*(1-x),h.L.sh.rotation.x=.8,h.R.sh.rotation.x=.8}else u==="jump"?(d.L.hp.rotation.x=-.7,d.R.hp.rotation.x=-.5,d.L.kn.rotation.x=.8,d.R.kn.rotation.x=.6,h.L.sh.rotation.x=-1.1,h.R.sh.rotation.x=-1.1):(e.hip.rotation.y=0,e.torso.rotation.x=0,e.head.rotation.x=0);t.hurt>0&&(e.torso.rotation.x-=t.hurt*.3)}function Qo(i,t,e=1,n={}){let s=fe();s.scale.setScalar(e);let r=wt(t),a=wt(_n(t,.62)),o=wt(_n(t,1.3)),l=wt(16769126,{emissive:8939008}),c=wt(15263968),h={wings:[],tails:[],bits:[],legs:[]},d=(u,f,x,y,m,p,v,T)=>{let w=Ct(u,f,x,y,m,p,v,T);return s.add(w),w};if(i==="beast"){d(G.sph,r,0,.62,0,.52,.38,.78),d(G.sph,a,0,.78,.62,.32,.3,.34),d(G.box,r,0,.92,.86,.3,.13,.26);for(let f of[-1,1])d(G.cone,o,f*.22,1.06,.52,.1,.3,.1),d(G.sph8,l,f*.15,.84,.92,.055,.055,.04);for(let f of[-1,1])for(let x of[-1,1]){let y=fe(f*.34,.42,x*.48);s.add(y),y.add(Ct(G.cyl,a,0,-.22,0,.1,.44,.1)),y.add(Ct(G.box,r,0,-.44,.04,.17,.12,.22)),h.legs.push(y)}let u=fe(0,.72,-.72);s.add(u),u.add(Ct(G.cone,a,0,.1,-.28,.11,.56,.11)).rotation.x=-Math.PI/2.4,h.tails.push(u)}else if(i==="humanoid"){let u=Ko({color:t,skin:_n(t,.8),hair:2104360,enemy:!0,weapon:Ox(),cape:!0,scale:1});s.add(u),h.humanoid=u}else if(i==="flyer"){d(G.sph,r,0,.72,0,.32,.3,.44),d(G.sph,o,0,.8,.36,.2,.2,.2);for(let u of[-1,1]){d(G.sph8,l,u*.11,.84,.52,.05,.05,.04);let f=fe(u*.26,.8,0);s.add(f);let x=Ct(G.plane,wt(_n(t,1.15),{side:Se}),u*.46,0,0,.92,.58,1);x.rotation.x=Math.PI/2,f.add(x),h.wings.push(f)}d(G.cone,a,0,.72,-.46,.12,.4,.12).rotation.x=Math.PI/2}else if(i==="bug"){for(let u=0;u<3;u++)d(G.sph,u===0?o:r,0,.38,.34-u*.36,.36-u*.05,.28-u*.03,.34-u*.04);for(let u of[-1,1]){d(G.sph8,l,u*.12,.46,.6,.07,.07,.06),d(G.cone,a,u*.17,.66,.52,.07,.34,.07).rotation.z=u*.5;for(let f=0;f<3;f++){let x=fe(u*.3,.3,.3-f*.32);s.add(x),x.add(Ct(G.cyl6,a,u*.16,-.1,0,.045,.34,.045)).rotation.z=u*.7,h.legs.push(x)}}}else if(i==="undead"){let u=Ko({color:14210244,skin:13617851,hair:3814976,enemy:!0,weapon:"sword",slim:!0,scale:.96});s.add(u),h.humanoid=u,d(G.torus,wt(10124543,{emissive:4465322}),0,1.92,0,.26,.26,.26).rotation.x=Math.PI/2}else if(i==="elemental"){let u=d(G.ico,wt(t,{emissive:_n(t,.5)}),0,.82,0,.4,.4,.4);h.core=u;for(let f=0;f<6;f++){let x=f/6*ce,y=d(G.ico,o,Math.cos(x)*.62,.82+Math.sin(f*2)*.2,Math.sin(x)*.62,.13,.13,.13);h.bits.push({o:y,a:x})}d(G.sph8,c,-.12,.88,.36,.07,.09,.05),d(G.sph8,c,.12,.88,.36,.07,.09,.05)}else if(i==="dragon"){d(G.sph,r,0,.9,0,.55,.48,.92),d(G.sph,a,0,1.14,.76,.32,.28,.4),d(G.box,r,0,1.02,1.08,.34,.16,.36);for(let f of[-1,1]){d(G.cone,o,f*.2,1.46,.64,.1,.42,.1).rotation.z=f*.3,d(G.sph8,wt(16764746,{emissive:8939008}),f*.16,1.2,1.06,.065,.065,.05);let x=fe(f*.44,1.12,-.1);s.add(x);let y=Ct(G.plane,wt(_n(t,1.2),{side:Se}),f*.82,.1,-.18,1.7,1.15,1);y.rotation.set(Math.PI/2.3,0,f*.18),x.add(y),h.wings.push(x);let m=fe(f*.34,.62,.42);s.add(m),m.add(Ct(G.cyl,a,0,-.3,0,.14,.6,.14)),h.legs.push(m)}let u=fe(0,.84,-.84);s.add(u),u.add(Ct(G.cone,a,0,.06,-.62,.18,1.35,.18)).rotation.x=Math.PI/2,h.tails.push(u)}else if(i==="slime"){let u=d(G.sph,wt(t,{transparent:!0,opacity:.86,emissive:_n(t,.2)}),0,.42,0,.58,.46,.58);h.core=u,d(G.sph8,c,-.17,.52,.48,.09,.12,.05),d(G.sph8,c,.17,.52,.48,.09,.12,.05),d(G.sph8,wt(3354682),-.17,.52,.53,.045,.06,.03),d(G.sph8,wt(3354682),.17,.52,.53,.045,.06,.03),d(G.cone,o,0,.88,0,.12,.26,.12)}else if(i==="plant"){d(G.cyl,wt(5933638),0,.42,0,.13,.84,.13);let u=fe(0,.92,0);s.add(u);for(let f=0;f<6;f++){let x=f/6*ce,y=Ct(G.cone,wt(t),Math.cos(x)*.3,.06,Math.sin(x)*.3,.17,.46,.17);y.rotation.set(Math.sin(x)*.8,0,-Math.cos(x)*.8),u.add(y)}d(G.sph,o,0,1.02,0,.22,.16,.22),d(G.sph8,c,-.1,.86,.2,.05,.06,.04),d(G.sph8,c,.1,.86,.2,.05,.06,.04),h.core=u;for(let f of[-1,1]){let x=Ct(G.plane,wt(6990418,{side:Se}),f*.3,.46,0,.48,.26,1);x.rotation.set(Math.PI/2.4,0,f*.5),s.add(x)}}else{d(G.box,r,0,1,0,.82,.92,.6),d(G.box,a,0,1.64,0,.52,.44,.48),d(G.box,o,0,1.02,.32,.3,.3,.06);for(let u of[-1,1]){d(G.sph8,wt(9232639,{emissive:2258858}),u*.13,1.68,.25,.065,.065,.04);let f=fe(u*.58,1.3,0);s.add(f),f.add(Ct(G.box,r,0,-.34,0,.3,.72,.32)),f.add(Ct(G.box,a,0,-.72,0,.38,.26,.38)),h.legs.push(f);let x=fe(u*.24,.56,0);s.add(x),x.add(Ct(G.box,r,0,-.28,0,.3,.58,.34)),h.legs.push(x)}}if(n.boss){let u=Ct(G.torus,wt(16764778,{emissive:8939042}),0,.06,0,.95,.95,.95);u.rotation.x=Math.PI/2,s.add(u),h.ring=u}return s.userData={...h,phase:ot(0,ce),form:i},dd(s,n.boss?1.035:1.055),s}function Ox(){return["sword","spear","greatsword","dagger","mace"][Math.floor(Math.random()*5)]}function tl(i,t){let e=i&&i.userData;if(!e)return;let n=t.t||0,s=t.dt||0;e.phase+=s*(2.4+(t.move||0)*5);let r=Math.sin(e.phase);e.humanoid&&jo(e.humanoid,t),e.wings&&e.wings.forEach((o,l)=>{o.rotation.z=(l===0?1:-1)*(Math.sin(n*9+e.phase)*.5)}),e.legs&&!e.humanoid&&e.legs.forEach((o,l)=>{o.rotation.x=r*.45*(l%2?-1:1)*(.3+(t.move||0))}),e.tails&&e.tails.forEach(o=>{o.rotation.y=Math.sin(n*2.2+e.phase)*.35}),e.bits&&e.bits.forEach((o,l)=>{o.o.position.y=.82+Math.sin(n*2.6+o.a*2)*.24,o.o.rotation.y+=s*2}),e.core&&(e.core.scale.y=1+Math.sin(n*3+e.phase)*.08),e.ring&&(e.ring.rotation.z+=s*.8);let a=e.form==="flyer"||e.form==="elemental"?.2+Math.sin(n*1.7)*.06:0;t.keepY||(i.position.y=(t.baseY||0)+Math.sin(n*2+e.phase)*.018+a),t.hurt>0?i.rotation.z=t.hurt*.22*Math.sin(n*40):i.rotation.z=0}function fd(i){let t=fe(),e=new ct(i),n=Ct(G.ico,wt(e,{emissive:e.clone().multiplyScalar(.55)}),0,.55,0,.22,.3,.22);t.add(n);let s=Ct(G.torus,wt(e,{emissive:e.clone().multiplyScalar(.4)}),0,.1,0,.32,.32,.32);s.rotation.x=Math.PI/2,t.add(s);let r=new Ji(e,1.5,4.5);return r.position.set(0,.6,0),t.add(r),t.userData={core:n,ring:s,phase:ot(0,ce)},t}function pd(i,t){let e=i.userData;e.core.rotation.y=t*1.6+e.phase,e.core.position.y=.55+Math.sin(t*2.4+e.phase)*.12,e.ring.rotation.z=t*.9,e.ring.scale.setScalar(1+Math.sin(t*3+e.phase)*.1)}function md(){let i=fe(),t=wt(9067060),e=wt(15253873,{emissive:4862992});i.add(Ct(G.box,t,0,.3,0,.8,.52,.56)),i.add(Ct(G.box,t,0,.62,-.04,.84,.24,.6)),i.add(Ct(G.box,e,0,.38,.3,.14,.2,.05));for(let n of[-1,1])i.add(Ct(G.box,e,n*.32,.56,0,.07,.26,.62));return i.userData.lid=i.children[1],i}function gd(i,t){let e=fe(),n=new ct(i),s=Ct(G.cyl6,wt(4868690),0,.08,0,.38,.16,.38);e.add(s);let r=Ct(G.ico,wt(n,{emissive:n.clone().multiplyScalar(.45)}),0,.46,0,.24,.38,.24);e.add(r);for(let o=0;o<3;o++){let l=o/3*ce;e.add(Ct(G.cone,wt(n,{emissive:n.clone().multiplyScalar(.3)}),Math.cos(l)*.22,.28,Math.sin(l)*.22,.09,.28,.09))}let a=new Ji(n,.8,3.4);return a.position.y=.5,e.add(a),e.userData={crystal:r,phase:ot(0,ce)},e}function Hc(i,t){let e=fe(),n=wt(10132142),s=wt(3355722),r=wt(15781250);for(let l of[-1,1])e.add(Ct(G.box,n,l*1.2,1.65,0,.34,3.3,.44));e.add(Ct(G.box,n,0,3.36,0,2.8,.36,.52)),e.add(Ct(G.box,s,0,1.62,-.14,2.1,3.12,.18));for(let l of[-1,1]){let c=fe(l*.52,1.6,.04);c.add(Ct(G.box,n,0,0,0,1,3.05,.22)),c.add(Ct(G.box,r,-l*.3,0,.13,.07,2.6,.05)),c.add(Ct(G.torus,r,-l*.18,.05,.16,.13,.13,.13)),e.add(c),e.userData["d"+(l<0?"L":"R")]=c}let a=Ct(G.ico,wt(i,{emissive:new ct(i).multiplyScalar(.6)}),0,3.36,.3,.22,.22,.22);e.add(a);let o=new Ji(t?16765040:8956671,t?2.2:1,7);return o.position.set(0,2.2,1),e.add(o),e.userData.rune=a,e.userData.light=o,e.userData.isReal=t,e}function Gc(i,t,e){let n=i.userData;n.rune.rotation.y=t*1.1,n.rune.position.y=3.36+Math.sin(t*2)*.06,n.light.intensity=(n.isReal?2:.9)+Math.sin(t*3)*.35;let s=e?1.15:0;n.dL&&(n.dL.rotation.y=Ni(n.dL.rotation.y,s,.06)),n.dR&&(n.dR.rotation.y=Ni(n.dR.rotation.y,-s,.06))}var Jn=62,je=Jn;function Bx(){let i=new Ai(300,24,16),t=new An({side:Fe,depthWrite:!1,uniforms:{uTop:{value:new ct(5218272)},uBot:{value:new ct(14216693)}},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 uTop; uniform vec3 uBot;
      void main(){ float h=clamp(normalize(vP).y*1.5+.35,0.0,1.0);
        vec3 c=mix(uBot,uTop,pow(h,0.85));
        c=pow(c,vec3(0.4545));
        gl_FragColor=vec4(c,1.0); }`});return new $t(i,t)}function Vc(i,t,e){let n=e,s=Math.sin(i*.075+n)*1.5+Math.cos(t*.068-n*.7)*1.35+Math.sin((i+t)*.13+n*1.7)*.55+Math.cos((i-t)*.21-n)*.28,r=Math.hypot(i,t);return r>Jn-9&&(s+=Math.pow((r-(Jn-9))/10,2)*2.6),s}var Oi=null;function kx(){if(Oi)return Oi;let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d"),e=t.createImageData(256,256),n=e.data;for(let s=0;s<n.length;s+=4){let r=224+Math.random()*31;n[s]=n[s+1]=n[s+2]=r,n[s+3]=255}t.putImageData(e,0,0);for(let s=0;s<90;s++)t.fillStyle=`rgba(${Math.random()<.5?"120,140,110":"255,255,240"},${ot(.02,.1)})`,t.beginPath(),t.ellipse(ot(0,256),ot(0,256),ot(2,12),ot(1,5),ot(0,ce),0,ce),t.fill();return Oi=new xr(i),Oi.wrapS=Oi.wrapT=ws,Oi.repeat.set(26,26),Oi.colorSpace=Ze,Oi}function zx(i,t){let n=Jn*2+24,s=new mn(n,n,72,72);s.rotateX(-Math.PI/2);let r=s.attributes.position,a=new ct(i.col),o=new ct(i.col2),l=[];for(let d=0;d<r.count;d++){let u=r.getX(d),f=r.getZ(d),x=Vc(u,f,t);r.setY(d,x);let y=Gt((x+2.2)/6,0,1),m=a.clone().lerp(o,y*.75+Math.sin(u*.5+f*.4)*.06);l.push(m.r,m.g,m.b)}s.setAttribute("color",new ie(l,3)),s.computeVertexNormals();let c=new Is({vertexColors:!0,map:kx(),flatShading:!1}),h=new $t(s,c);return h.receiveShadow=!0,h}function Bi(i,t,e,n={}){if(!e.length)return null;let s=new mr(i,t,e.length);s.castShadow=!!n.cast,s.receiveShadow=!1;let r=new De;return e.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(a.rx||0,a.ry||0,a.rz||0),r.scale.set(a.sx||1,a.sy||1,a.sz||1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s}function Yr(i,t=4,e=Jn-3,n=0){let s=[];for(let r=0;r<i;r++){let a=ot(0,ce),o=Math.sqrt(ot(0,1))*(e-t)+t,l=Math.cos(a)*o,c=Math.sin(a)*o;s.push({x:l,z:c,y:Vc(l,c,n),a,r:o})}return s}function Hx(i,t,e){let n=Math.round((i.flora==="cactus"||i.flora==="deadgrass"?600:1900)*e),s=Yr(n,2.4,Jn-4,t),r=new mn(.13,.36,1,2);r.translate(0,.18,0);let a=new ct(i.col2).lerp(new ct(16777215),.55),o=new Is({color:a,side:Se,transparent:!0,opacity:.95});o.onBeforeCompile=f=>{f.uniforms.uTime={value:0},o.userData.sh=f,f.vertexShader=`uniform float uTime;
`+f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       #ifdef USE_INSTANCING
       float sway = sin(uTime*1.7 + instanceMatrix[3].x*0.28 + instanceMatrix[3].z*0.22)*0.19;
       transformed.x += sway * max(position.y,0.0);
       transformed.z += cos(uTime*1.3 + instanceMatrix[3].z*0.3)*0.08*max(position.y,0.0);
       #endif`)};let l=s.map(f=>({x:f.x,y:f.y-.02,z:f.z,ry:ot(0,ce),sx:ot(.7,1.4),sy:ot(.6,1.3),sz:1})),c=l.map(f=>({...f,ry:f.ry+Math.PI/2})),h=new Re,d=Bi(r,o,l),u=Bi(r,o,c);return d&&h.add(d),u&&h.add(u),h.userData.grassMat=o,h}function Gx(i,t,e){let n=Math.round(240*e),s=Yr(n,3,Jn-6,t),a={sakura:16756940,garden:16765152,meadow:16773280,snow:15267071,grave:12033256,crystal:9235199}[i.id]||16769184,o=Bi(new Tn(.012,.012,.34,4),wt(4882496),s.map(h=>({x:h.x,y:h.y+.17,z:h.z}))),l=Bi(new li(.075,0),wt(a,{emissive:new ct(a).multiplyScalar(.2)}),s.map(h=>({x:h.x,y:h.y+.36,z:h.z,sy:.7}))),c=new Re;return o&&c.add(o),l&&c.add(l),c}function Vx(i,t,e){let n=new Re,s=Math.round((i.tree==="none"?0:54)*e),r=Yr(s,9,Jn-6,t),a=[],o=[],l=[],c={oak:7031344,pine:4864556,fir:4864556,palm:9071168,dead:4867136,sakura:7031368,bamboo:6986312,crystal:5929626,marble:10132114}[i.tree]||7031344,h={oak:5147718,pine:3107394,fir:2908224,palm:4889178,dead:5918792,sakura:15902912,bamboo:8040544,crystal:9226472,marble:11053216}[i.tree]||5147718;r.forEach(y=>{let m=ot(2.6,4.6),p=ot(.75,1.25);a.push({x:y.x,y:y.y+m*.5,z:y.z,sx:.22*p,sy:m,sz:.22*p}),i.tree==="pine"||i.tree==="fir"?(o.push({x:y.x,y:y.y+m*.78,z:y.z,sx:1.05*p,sy:1.9*p,sz:1.05*p}),l.push({x:y.x,y:y.y+m*1.12,z:y.z,sx:.72*p,sy:1.3*p,sz:.72*p})):i.tree==="crystal"?o.push({x:y.x,y:y.y+m*.85,z:y.z,sx:.55*p,sy:2.4*p,sz:.55*p,rz:ot(-.2,.2)}):i.tree==="bamboo"?o.push({x:y.x,y:y.y+m*.82,z:y.z,sx:.55*p,sy:.3,sz:.55*p}):i.tree==="dead"?(l.push({x:y.x+.5,y:y.y+m*.82,z:y.z,sx:.1,sy:1.5,sz:.1,rz:.9}),l.push({x:y.x-.45,y:y.y+m*.7,z:y.z+.2,sx:.1,sy:1.3,sz:.1,rz:-.9})):(o.push({x:y.x,y:y.y+m*1.02,z:y.z,sx:1.25*p,sy:1.05*p,sz:1.25*p}),l.push({x:y.x+.6*p,y:y.y+m*.88,z:y.z+.35*p,sx:.8*p,sy:.72*p,sz:.8*p}))});let d=Bi(new Tn(1,1.25,1,6),wt(c),a,{cast:!0});d&&n.add(d);let u=i.tree==="pine"||i.tree==="fir"||i.tree==="crystal"?G.cone:G.sph,f=Bi(u,wt(h,{flatShading:!0}),o,{cast:!0}),x=Bi(i.tree==="pine"||i.tree==="fir"?G.cone:i.tree==="dead"?G.cyl6:G.sph,wt(h,{flatShading:!0}),l,{cast:!0});return f&&n.add(f),x&&n.add(x),n}function Wx(i,t,e){let n=Math.round(70*e),s=Yr(n,6,Jn-4,t),r={ice:13165808,basalt:4078140,marble:12104872,crystal:8829144,sandstone:13150328,moss:6978138,coral:14721184,stone:9079430}[i.rock]||9079430,a=s.map(c=>({x:c.x,y:c.y+.22,z:c.z,sx:ot(.35,1.1),sy:ot(.3,.9),sz:ot(.35,1.1),ry:ot(0,ce),rz:ot(-.3,.3)})),o=Bi(new Mr(1,0),wt(r,{flatShading:!0}),a,{cast:!0}),l=new Re;return o&&l.add(o),l}var xd={petal:{c:16761048,n:220,vy:-.55,sway:1.5,size:.18},snow:{c:16777215,n:300,vy:-.85,sway:.7,size:.14},sand:{c:15784096,n:190,vy:-.15,sway:3.2,size:.1},ember:{c:16752704,n:200,vy:.85,sway:1,size:.13},spore:{c:12118152,n:170,vy:.16,sway:.9,size:.11},dust:{c:14735552,n:150,vy:.1,sway:.6,size:.1},crystal:{c:10152191,n:180,vy:.3,sway:.8,size:.14},bubble:{c:13169919,n:150,vy:.55,sway:.5,size:.13},wisp:{c:12626175,n:130,vy:.38,sway:1.1,size:.18},ash:{c:11577500,n:200,vy:-.2,sway:1.3,size:.11},leaf:{c:10143840,n:160,vy:-.45,sway:1.7,size:.18}};function Xx(i,t){let e=xd[i.particle]||xd.petal,n=Math.round(e.n*t),s=new Float32Array(n*3),r=new Float32Array(n);for(let c=0;c<n;c++)s[c*3]=ot(-40,40),s[c*3+1]=ot(.4,16),s[c*3+2]=ot(-40,40),r[c]=ot(.6,1.5);let a=new Ne;a.setAttribute("position",new tn(s,3));let o=new wi({color:e.c,size:e.size,transparent:!0,opacity:.78,sizeAttenuation:!0,depthWrite:!1,blending:e.particle==="ember"?an:Li}),l=new Yi(a,o);return l.frustumCulled=!1,l.userData={s:e,vel:r,n},l}function qx(i,t,e,n,s){let r=i.userData,a=i.geometry.attributes.position,o=r.s;for(let l=0;l<r.n;l++){let c=a.getY(l)+o.vy*r.vel[l]*t,h=a.getX(l)+Math.sin(e*1.4+l)*o.sway*t,d=a.getZ(l)+Math.cos(e*1.1+l*.7)*o.sway*.5*t;c>17&&(c=.3,h=n+ot(-22,22),d=s+ot(-22,22)),c<.2&&(c=15+ot(0,3),h=n+ot(-22,22),d=s+ot(-22,22)),Math.abs(h-n)>32&&(h=n+(h>n?-30:30)),Math.abs(d-s)>32&&(d=s+(d>s?-30:30)),a.setXYZ(l,h,c,d)}a.needsUpdate=!0}var el=class{constructor(t,e=1){this.quality=e,this.renderer=new qo({canvas:t,antialias:e>.6,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e>.8?1.8:1.2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ki,this.renderer.outputColorSpace=Ze,this.renderer.toneMapping=Rr,this.renderer.toneMappingExposure=1.18,this.scene=new hr,this.camera=new Je(56,1,.1,500),this.sky=Bx(),this.scene.add(this.sky),this.hemi=new wr(12375792,4870200,.85),this.scene.add(this.hemi),this.sun=new Ls(16773840,2),this.sun.position.set(28,48,20),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let n=this.sun.shadow.camera;n.left=-34,n.right=34,n.top=34,n.bottom=-34,n.near=1,n.far=130,this.sun.shadow.bias=-.0012,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Ls(11061503,.45),this.fill.position.set(-20,18,-22),this.scene.add(this.fill),this.worldGroup=new Re,this.scene.add(this.worldGroup),this.entityGroup=new Re,this.scene.add(this.entityGroup),this.fxGroup=new Re,this.scene.add(this.fxGroup),this.biome=null,this.seed=1,this.yaw=0,this.pitch=.42,this.camDist=11,this.camTarget=new F,this.shake=0,this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}clearGroup(t){for(let e=t.children.length-1;e>=0;e--){let n=t.children[e];t.remove(n),n.traverse?.(s=>{s.geometry&&!Object.values(G).includes(s.geometry)&&s.geometry.dispose?.()})}}load(t,e){let n=Fi[t]||Fi.meadow;this.biome=n,this.seed=e*1.37+2.1,this.clearGroup(this.worldGroup),this.clearGroup(this.entityGroup),this.clearGroup(this.fxGroup),this.sky.material.uniforms.uTop.value.set(n.sky),this.sky.material.uniforms.uBot.value.set(n.horizon);let s=new ct(n.fog).lerp(new ct(n.sky),.3);return this.scene.fog=new cr(s,n.fogD*2.2),this.scene.background=new ct(n.horizon),this.sun.color.set(n.sun),this.sun.intensity=n.sunI,this.hemi.color.set(n.amb),this.hemi.intensity=n.ambI,this.terrain=zx(n,this.seed),this.worldGroup.add(this.terrain),this.grass=Hx(n,this.seed,this.quality),this.worldGroup.add(this.grass),this.worldGroup.add(Gx(n,this.seed,this.quality)),this.worldGroup.add(Vx(n,this.seed,this.quality)),this.worldGroup.add(Wx(n,this.seed,this.quality)),this.particles=Xx(n,this.quality),this.worldGroup.add(this.particles),this.worldGroup.add(this.landmarks(n)),n}landmarks(t){let e=new Re,n=Yr(9,14,Jn-12,this.seed+5),s=new ct(t.accent);return n.forEach((r,a)=>{if(t.id==="ruins"||t.id==="grave"||t.id==="sky"){for(let l of[-1,1]){let c=new $t(G.cyl,wt(10132114,{flatShading:!0}));c.position.set(r.x+l*1.1,r.y+1.5,r.z),c.scale.set(.28,3,.28),c.castShadow=!0,e.add(c)}let o=new $t(G.box,wt(10132114,{flatShading:!0}));o.position.set(r.x,r.y+3.1,r.z),o.scale.set(2.8,.35,.6),o.castShadow=!0,e.add(o)}else if(t.id==="lava"||t.id==="ash"){let o=new $t(new Cs(ot(1.6,3.2),12),new Ue({color:16738856,transparent:!0,opacity:.75}));o.rotation.x=-Math.PI/2,o.position.set(r.x,r.y+.06,r.z),e.add(o)}else if(t.id==="crystal"||t.id==="cave")for(let o=0;o<4;o++){let l=new $t(G.cone,wt(s,{emissive:s.clone().multiplyScalar(.35),flatShading:!0}));l.position.set(r.x+ot(-1.2,1.2),r.y+.7,r.z+ot(-1.2,1.2)),l.scale.set(.3,ot(1.2,2.6),.3),l.rotation.z=ot(-.3,.3),l.castShadow=!0,e.add(l)}else if(t.id==="ocean"){let o=new $t(new Cs(ot(2,4),14),new Ue({color:5814488,transparent:!0,opacity:.55}));o.rotation.x=-Math.PI/2,o.position.set(r.x,r.y+.05,r.z),e.add(o)}else{let o=new $t(G.dodecahedron||G.ico,wt(Yx(t.col,.8),{flatShading:!0}));o.position.set(r.x,r.y+.3,r.z),o.scale.set(ot(.6,1.5),ot(.5,1.1),ot(.6,1.5)),o.castShadow=!0,e.add(o)}}),e}h(t,e){return Vc(t,e,this.seed)}update(t,e,n,s={}){let r=n.x,a=n.z;this.grass&&this.grass.userData.grassMat?.userData.sh&&(this.grass.userData.grassMat.userData.sh.uniforms.uTime.value=e),this.particles&&qx(this.particles,t,e,r,a);let o=this.shake,l=o?ot(-o,o):0,c=o?ot(-o,o):0;if(s.cinematic&&s.camPos&&s.camLook){let p=s.camPos,v=s.camLook;this.camera.position.lerp(new F(p.x+l,p.y+c,p.z),Math.min(1,t*5.5)),this.camTarget.lerp(new F(v.x,v.y,v.z),Math.min(1,t*7)),this.camera.lookAt(this.camTarget),this.sky.position.set(v.x,0,v.z),this.sun.position.set(v.x+28,48,v.z+20),this.sun.target.position.set(v.x,0,v.z),this.sun.target.updateMatrixWorld(),this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.4));return}let h=this.yaw+(s.yawExtra||0),d=Math.cos(this.pitch),u=Math.sin(this.pitch),f=this.camDist,x=r-Math.sin(h)*f*d,y=a-Math.cos(h)*f*d,m=n.y+2+f*u*.72;this.camera.position.lerp(new F(x+l,m+c,y),Math.min(1,t*7)),this.camTarget.lerp(new F(r,n.y+1.45,a),Math.min(1,t*9)),this.camera.lookAt(this.camTarget),this.sky.position.set(r,0,a),this.sun.position.set(r+28,48,a+20),this.sun.target.position.set(r,0,a),this.sun.target.updateMatrixWorld(),this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.4))}render(){this.renderer.render(this.scene,this.camera)}addEntity(t){return this.entityGroup.add(t),t}removeEntity(t){this.entityGroup.remove(t)}addFx(t){return this.fxGroup.add(t),t}removeFx(t){this.fxGroup.remove(t)}hitShake(t=.28){this.shake=Math.max(this.shake,t)}};function Yx(i,t){return new ct(i).multiplyScalar(t)}var _d=[{n:"\u81EA\u7136\u5C0F\u8C03",s:[0,2,3,5,7,8,10]},{n:"\u548C\u58F0\u5C0F\u8C03",s:[0,2,3,5,7,8,11]},{n:"\u591A\u5229\u4E9A",s:[0,2,3,5,7,9,10]},{n:"\u5F17\u91CC\u51E0\u4E9A",s:[0,1,3,5,7,8,10]},{n:"\u81EA\u7136\u5927\u8C03",s:[0,2,4,5,7,9,11]},{n:"\u4E94\u58F0\u5C0F\u8C03",s:[0,3,5,7,10]},{n:"\u90FD\u8282\u97F3\u9636",s:[0,1,5,7,8]},{n:"\u5229\u5E95\u4E9A",s:[0,2,4,6,7,9,11]},{n:"\u6D1B\u514B\u91CC\u4E9A",s:[0,1,3,5,6,8,10]},{n:"\u6DF7\u5408\u5229\u5E95\u4E9A",s:[0,2,4,5,7,9,10]}],yd=[[0,5,3,4],[0,3,4,0],[0,6,5,4],[0,4,5,3],[0,2,5,4],[0,5,6,4],[0,1,4,0],[0,3,6,5],[0,4,3,5],[0,6,3,4],[0,2,3,6],[0,5,1,4]],vd=["square","sawtooth","triangle","sine"],Md=[{k:[0,6,8,14],s:[4,12],h:[0,2,4,6,8,10,12,14]},{k:[0,4,8,12],s:[4,12],h:[2,6,10,14]},{k:[0,3,8,11],s:[4,12],h:[0,2,4,6,8,10,12,14]},{k:[0,8],s:[4,12],h:[0,3,6,9,12,15]},{k:[0,4,7,8,12],s:[4,12],h:[0,2,4,6,8,10,12,14]},{k:[0,6,10],s:[4,12,15],h:[1,3,5,7,9,11,13,15]}],Wc=["\u971C\u72F1","\u4E1A\u706B","\u6B8B\u54CD","\u82CD\u7A79","\u5E7D\u51A5","\u96F7\u9E23","\u5723\u8F89","\u6DF1\u6E0A","\u82B1\u6D77","\u7070\u70EC","\u661F\u6D77","\u94C1\u8840","\u9759\u9ED8","\u72C2\u6F9C","\u8584\u66AE","\u66D9\u5149","\u8346\u68D8","\u7409\u7483","\u6C38\u591C","\u6EAF\u5149"],bd=["\u9547\u9B42\u6B4C","\u8FDB\u884C\u66F2","\u633D\u6B4C","\u72C2\u60F3\u66F2","\u591C\u66F2","\u8D4B\u683C","\u5E8F\u66F2","\u7EC8\u7AE0","\u56DE\u65CB\u66F2","\u60B2\u6B4C","\u6218\u6B4C","\u6447\u7BEE\u66F2","\u5B89\u9B42\u66F2","\u53D8\u594F\u66F2","\u4EA4\u54CD\u8BD7","\u5706\u821E\u66F2"],$r=i=>440*Math.pow(2,(i-69)/12);function $x(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xc(i){let t=$x(i*2654435761+40503),e=_d[Math.floor(t()*_d.length)],n=40+Math.floor(t()*12),s=Math.round(94+t()*82),r=yd[Math.floor(t()*yd.length)],a=vd[Math.floor(t()*vd.length)],o=780+Math.floor(t()*3e3),l=Md[Math.floor(t()*Md.length)],c=Array.from({length:16},()=>t()<.2?-1:Math.floor(t()*e.s.length)),h=Array.from({length:16},()=>t()<.55?-1:Math.floor(t()*e.s.length)),d=t()<.5?12:24,u=t()<.62,f=(i-1)%Wc.length,x=Math.floor((i-1)/Wc.length)%bd.length,y=Wc[f]+"\u7684"+bd[x];return{floor:i,mode:e,root:n,bpm:s,prog:r,lead:a,cut:o,drums:l,mel:c,mel2:h,oct:d,arp:u,name:y,info:`${s} BPM \xB7 ${e.n}`}}var nl=class{constructor(t){this.audio=t,this.timer=null,this.gain=null,this.cfg=null,this.step=0,this.nextTime=0}get name(){return this.cfg?this.cfg.name:""}get info(){return this.cfg?this.cfg.info:""}get playing(){return!!this.timer}start(t){this.stop(!0);let e=this.audio,n=e.ctx;if(!n||!e.musicOn)return;this.cfg=Xc(t);let s=n.createGain();s.gain.setValueAtTime(1e-4,n.currentTime),s.gain.exponentialRampToValueAtTime(.85,n.currentTime+1.1),s.connect(e.musicGain),this.gain=s,this.step=0,this.nextTime=n.currentTime+.06,this.timer=setInterval(()=>this.schedule(),25),this.schedule()}stop(t=!1){this.timer&&(clearInterval(this.timer),this.timer=null);let e=this.gain,n=this.audio.ctx;if(e&&n){let s=n.currentTime,r=t?.08:.75;try{e.gain.cancelScheduledValues(s),e.gain.setValueAtTime(Math.max(1e-4,e.gain.value),s),e.gain.exponentialRampToValueAtTime(1e-4,s+r)}catch{}setTimeout(()=>{try{e.disconnect()}catch{}},(r+.1)*1e3)}this.gain=null,this.cfg=null}schedule(){let t=this.audio.ctx;if(!t||!this.timer||!this.cfg)return;let e=60/this.cfg.bpm/4,n=0;for(;this.nextTime<t.currentTime+.18&&n++<64;)this.playStep(this.step,this.nextTime,e),this.nextTime+=e,this.step++}note(t,e,n,s,r,a){let o=this.audio.ctx;if(!o||!this.gain)return;let l=o.createOscillator(),c=o.createGain();l.type=s,l.frequency.setValueAtTime(t,e),c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(Math.max(2e-4,r),e+.012),c.gain.exponentialRampToValueAtTime(1e-4,e+n);let h=l;if(a){let d=o.createBiquadFilter();d.type="lowpass",d.frequency.value=a,d.Q.value=.7,l.connect(d),h=d}h.connect(c),c.connect(this.gain),l.start(e),l.stop(e+n+.03)}noiseHit(t,e,n,s,r){let a=this.audio.ctx,o=this.audio.noiseBuf;if(!a||!o||!this.gain)return;let l=a.createBufferSource();l.buffer=o,l.loop=!0;let c=a.createBiquadFilter();c.type=s,c.frequency.value=r,c.Q.value=.8;let h=a.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(n,t+.004),h.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c),c.connect(h),h.connect(this.gain),l.start(t),l.stop(t+e+.02)}kick(t){let e=this.audio.ctx;if(!e||!this.gain)return;let n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(148,t),n.frequency.exponentialRampToValueAtTime(42,t+.13),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.17,t+.005),s.gain.exponentialRampToValueAtTime(1e-4,t+.22),n.connect(s),s.connect(this.gain),n.start(t),n.stop(t+.24)}playStep(t,e,n){let s=this.cfg;if(!s)return;let r=t%16,a=Math.floor(t/16),o=s.mode.s,l=s.prog[a%4]%o.length,c=s.root+o[l];if(r===0)for(let d=0;d<3;d++){let u=(l+d*2)%o.length;this.note($r(s.root+o[u]+12),e,n*15.2,"sine",.026,s.cut*.55)}r%4===0&&this.note($r(c-12),e,n*3.5,"triangle",.072,s.cut*.6);let h=s.mel[r];if(h>=0&&this.note($r(s.root+o[h%o.length]+s.oct),e,n*(r%2?.85:1.7),s.lead,.05,s.cut),a%2===1){let d=s.mel2[r];d>=0&&this.note($r(s.root+o[d%o.length]+s.oct+12),e,n*.8,"triangle",.022,s.cut*1.4)}if(s.arp&&r%2===0){let d=r/2%3;this.note($r(s.root+o[(l+d*2)%o.length]+24),e,n*1.3,"sine",.02,s.cut*1.7)}s.drums.k.includes(r)&&this.kick(e),s.drums.s.includes(r)&&this.noiseHit(e,.14,.075,"bandpass",1750),s.drums.h.includes(r)&&this.noiseHit(e,.045,.028,"highpass",7200)}};var Zx=["hit_metal_0","hit_metal_1","hit_medium","hit_heavy","hit_blunt","hit_soft","hit_shield","hit_wood","hit_ice","hit_glass","hit_bell","hit_crit","hit_tin","hit_plate","mine","mine2","step_grass_0","step_grass_1","step_stone_0","step_stone_1","step_snow_0","step_wood_0","land"],Sd={grass:["step_grass_0","step_grass_1"],stone:["step_stone_0","step_stone_1"],snow:["step_snow_0","step_stone_0"],wood:["step_wood_0","step_wood_0"],sand:["step_stone_1","step_grass_0"]},Jx={sword:"hit_metal_0",katana:"hit_metal_1",dual:"hit_metal_1",dagger:"hit_metal_1",greatsword:"hit_heavy",spear:"hit_medium",lance:"hit_medium",shield:"hit_shield",mace:"hit_blunt",staff:"hit_glass",tome:"hit_glass",bow:"hit_wood",gun:"hit_crit",shuriken:"hit_metal_0",none:"hit_soft"},Kx={sword:"blade",katana:"blade",dual:"blade",dagger:"blade",greatsword:"heavy",spear:"thrust",lance:"thrust",shield:"heavy",mace:"heavy",staff:"magic",tome:"magic",bow:"bow",gun:"gun",shuriken:"throw"},qc=class{constructor(){this.ctx=null,this.buf={},this.ready=!1,this.enabled=!0,this.master=null,this.sfxGain=null,this.ambGain=null,this.musicGain=null,this.ambNodes=[],this.musicTimer=null,this.musicOn=!0,this.noiseBuf=null,this.lastStep=0,this.bgm=null,this.bossFloor=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.72,this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.95,this.sfxGain.connect(this.master),this.ambGain=this.ctx.createGain(),this.ambGain.gain.value=.3,this.ambGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.3,this.musicGain.connect(this.master);let e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;this.noiseBuf=n,this.bgm=new nl(this),this.load()}async load(){let t=Zx.map(async e=>{try{let n=await fetch("./sfx/"+e+".ogg");if(!n.ok)return;let s=await n.arrayBuffer(),r=await this.ctx.decodeAudioData(s);this.buf[e]=r}catch{}});await Promise.all(t),this.ready=!0}get t(){return this.ctx?this.ctx.currentTime:0}sample(t,e=1,n=1,s=0,r=0){if(!this.ctx||!this.enabled||!this.buf[t])return!1;let a=this.ctx.createBufferSource();a.buffer=this.buf[t],a.playbackRate.value=n;let o=this.ctx.createGain();o.gain.value=Gt(e,0,1.4);let l=o;if(s&&this.ctx.createStereoPanner){let c=this.ctx.createStereoPanner();c.pan.value=Gt(s,-1,1),o.connect(c),l=c}return a.connect(o),l.connect(this.sfxGain),a.start(this.t+r),!0}tone(t={}){if(!this.ctx||!this.enabled)return;let{type:e="sine",f:n=440,to:s=null,dur:r=.2,vol:a=.2,a:o=.005,d:l=null,filter:c=null,fq:h=1200,q:d=1,delay:u=0,detune:f=0}=t,x=this.t+u,y=this.ctx.createOscillator();y.type=e,y.frequency.setValueAtTime(n,x),s&&y.frequency.exponentialRampToValueAtTime(Math.max(20,s),x+r),y.detune.value=f;let m=this.ctx.createGain();m.gain.setValueAtTime(1e-4,x),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,a),x+o),m.gain.exponentialRampToValueAtTime(1e-4,x+(l||r));let p=y;if(c){let v=this.ctx.createBiquadFilter();v.type=c,v.frequency.value=h,v.Q.value=d,y.connect(v),p=v}p.connect(m),m.connect(this.sfxGain),y.start(x),y.stop(x+(l||r)+.05)}noise(t={}){if(!this.ctx||!this.enabled||!this.noiseBuf)return;let{dur:e=.2,vol:n=.2,type:s="bandpass",fq:r=1200,to:a=null,q:o=1,delay:l=0,a:c=.004}=t,h=this.t+l,d=this.ctx.createBufferSource();d.buffer=this.noiseBuf,d.loop=!0;let u=this.ctx.createBiquadFilter();u.type=s,u.Q.value=o,u.frequency.setValueAtTime(r,h),a&&u.frequency.exponentialRampToValueAtTime(Math.max(40,a),h+e);let f=this.ctx.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(Math.max(2e-4,n),h+c),f.gain.exponentialRampToValueAtTime(1e-4,h+e),d.connect(u),u.connect(f),f.connect(this.sfxGain),d.start(h),d.stop(h+e+.05)}swing(t="sword",e=""){let n=Kx[t]||"blade";n==="blade"||n==="heavy"||n==="thrust"?(this.noise({dur:n==="heavy"?.3:.19,vol:n==="heavy"?.3:.2,fq:n==="thrust"?2600:900,to:n==="thrust"?380:260,q:1.1}),this.tone({type:"sawtooth",f:n==="heavy"?180:320,to:90,dur:.13,vol:.045,filter:"lowpass",fq:900})):n==="magic"?(this.tone({type:"sine",f:420,to:980,dur:.28,vol:.1}),this.tone({type:"triangle",f:630,to:1470,dur:.26,vol:.05,delay:.03})):n==="bow"?(this.tone({type:"triangle",f:620,to:200,dur:.12,vol:.13}),this.noise({dur:.14,vol:.11,fq:1800,to:500})):n==="gun"?(this.noise({dur:.11,vol:.32,type:"lowpass",fq:2600,to:400,q:.7}),this.tone({type:"square",f:160,to:48,dur:.12,vol:.13,filter:"lowpass",fq:700})):this.noise({dur:.13,vol:.13,fq:2200,to:700})}hit(t="sword",e=!1,n=""){let s=e?"hit_crit":Jx[t]||"hit_metal_0";this.sample(s,e?.95:.72,ot(.94,1.08)),e?(this.sample("hit_bell",.55,.82,0,.02),this.tone({type:"sine",f:90,to:38,dur:.32,vol:.3})):this.tone({type:"sine",f:110,to:55,dur:.13,vol:.13}),n==="ice"&&this.sample("hit_ice",.45,1.25,0,.01),n==="fire"&&this.noise({dur:.22,vol:.18,fq:700,to:180,q:.8}),n==="thunder"&&this.noise({dur:.16,vol:.18,type:"highpass",fq:2600,q:.6})}explosion(t=1){this.noise({dur:.55*t,vol:.34,type:"lowpass",fq:1800,to:120,q:.8}),this.tone({type:"sine",f:160,to:32,dur:.48*t,vol:.32}),this.tone({type:"sawtooth",f:240,to:60,dur:.22,vol:.07,filter:"lowpass",fq:800}),this.sample("hit_glass",.38,.8,0,.02)}charge(t=.7){this.tone({type:"sine",f:180,to:880,dur:t,vol:.1}),this.tone({type:"triangle",f:270,to:1320,dur:t,vol:.055,delay:.04}),this.noise({dur:t,vol:.07,fq:400,to:3e3,q:2})}cast(t){let e=ye[t],n=e&&e.kind==="combat"?e.w:"staff";["staff","tome","mace"].includes(n)?(this.charge(.34),this.sample("hit_bell",.22,1.5)):n==="bow"?this.tone({type:"triangle",f:500,to:180,dur:.16,vol:.12}):n==="gun"?this.noise({dur:.1,vol:.24,type:"lowpass",fq:2400,to:400}):this.swing(n)}skill(t,e=""){let n=ye[t],s=n&&n.kind==="combat"?n.w:"sword";if(["aoe","combo","dash","pierce"].includes(e)){if(this.swing(s),this.tone({type:"triangle",f:220,to:660,dur:.3,vol:.1,filter:"lowpass",fq:1600}),e==="combo")for(let r=0;r<3;r++)this.sample("hit_metal_1",.18,1.1+r*.12,0,.14+r*.12)}else e==="heal"?[523,659,784,1047].forEach((r,a)=>this.tone({type:"sine",f:r,dur:.5,vol:.09,delay:a*.09})):e==="buff"?(this.tone({type:"sawtooth",f:110,to:330,dur:.5,vol:.09,filter:"lowpass",fq:900}),this.sample("hit_bell",.3,.7)):e==="summon"?(this.tone({type:"sine",f:90,to:420,dur:.7,vol:.12}),this.noise({dur:.6,vol:.1,fq:300,to:2200})):this.cast(t)}hurt(){this.sample("hit_soft",.48,.85),this.tone({type:"sawtooth",f:180,to:70,dur:.18,vol:.1,filter:"lowpass",fq:600})}guard(t=!1){this.sample(t?"hit_bell":"hit_shield",t?.8:.55,t?1.3:1),t&&this.tone({type:"sine",f:1200,to:2400,dur:.24,vol:.13})}step(t="grass",e=0){if(e-this.lastStep<.22)return;this.lastStep=e;let n=Sd[t]||Sd.grass;this.sample(xn(n),.21,ot(.92,1.12))}jump(){this.noise({dur:.13,vol:.09,fq:500,to:1400})}land(){this.sample("land",.4,.95),this.tone({type:"sine",f:80,to:40,dur:.16,vol:.12})}pickup(t=!1){this.sample("hit_tin",.45,t?1.5:1.15),t&&[784,988,1319].forEach((e,n)=>this.tone({type:"sine",f:e,dur:.36,vol:.1,delay:n*.07}))}coin(t=1){this.sample("hit_tin",.3,1.25+Math.min(t,5)*.05)}levelup(){[523,659,784,1047,1319].forEach((t,e)=>this.tone({type:"triangle",f:t,dur:.6,vol:.1,delay:e*.1})),this.sample("hit_bell",.5,.9,0,.05)}gateOpen(){this.noise({dur:1.5,vol:.16,type:"lowpass",fq:260,to:900,q:.5}),this.tone({type:"sine",f:60,to:120,dur:1.6,vol:.16}),this.sample("hit_plate",.4,.55,0,.1)}bossRoar(){this.tone({type:"sawtooth",f:75,to:38,dur:1.35,vol:.26,filter:"lowpass",fq:420}),this.tone({type:"square",f:110,to:52,dur:1.1,vol:.1,filter:"lowpass",fq:300,delay:.05}),this.noise({dur:1.25,vol:.2,type:"bandpass",fq:280,to:90,q:.7}),this.sample("hit_blunt",.55,.55,0,.28)}ui(t="tap"){t==="ok"?(this.tone({type:"sine",f:660,to:990,dur:.16,vol:.07}),this.sample("hit_tin",.18,1.4)):t==="err"?this.tone({type:"square",f:180,to:120,dur:.14,vol:.05,filter:"lowpass",fq:600}):this.tone({type:"sine",f:520,dur:.06,vol:.045})}craft(t="hit"){t==="mine"?(this.sample(xn(["mine","mine2"]),.55,ot(.9,1.1)),this.tone({type:"sine",f:140,to:60,dur:.12,vol:.1})):t==="success"?(this.sample("hit_bell",.42,1.1),[523,784,1047].forEach((e,n)=>this.tone({type:"sine",f:e,dur:.4,vol:.08,delay:n*.08}))):t==="fail"?this.tone({type:"sawtooth",f:220,to:90,dur:.24,vol:.07,filter:"lowpass",fq:500}):this.sample("hit_wood",.35,1.1)}setAmbience(t){if(!this.ctx)return;this.stopAmbience();let e=this.ambGain,n=this.ctx.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=this.ctx.createBiquadFilter(),r={wind:["bandpass",420,.6],forest:["bandpass",780,.5],blizzard:["highpass",900,.5],desert:["bandpass",300,.5],volcano:["lowpass",220,.7],swamp:["lowpass",340,.6],cave:["lowpass",160,.8],ruins:["bandpass",500,.5],crystal:["highpass",700,.5],ocean:["lowpass",480,.5],sky:["highpass",800,.4],grave:["lowpass",180,.8],garden:["bandpass",650,.5],bamboo:["bandpass",560,.5],ash:["lowpass",240,.7]}[t]||["bandpass",420,.6];s.type=r[0],s.frequency.value=r[1],s.Q.value=.6;let a=this.ctx.createGain();a.gain.value=r[2];let o=this.ctx.createOscillator();o.frequency.value=.09;let l=this.ctx.createGain();l.gain.value=r[2]*.35,o.connect(l),l.connect(a.gain),n.connect(s),s.connect(a),a.connect(e),n.start(),o.start(),this.ambNodes=[n,o,a,s]}stopAmbience(){this.ambNodes.forEach(t=>{try{t.stop?.(),t.disconnect?.()}catch{}}),this.ambNodes=[]}startMusic(){if(!this.ctx||this.musicTimer||!this.musicOn)return;let t=[[220,261.6,329.6,392],[196,246.9,293.7,392],[174.6,220,261.6,349.2],[164.8,196,246.9,329.6]],e=0,n=()=>{if(!this.musicOn||!this.ctx)return;let s=t[Math.floor(e/8)%t.length];if(s.forEach((r,a)=>{let o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.value=r/2,o.detune.value=a*3,l.gain.setValueAtTime(1e-4,this.t),l.gain.exponentialRampToValueAtTime(.028,this.t+1.2),l.gain.exponentialRampToValueAtTime(1e-4,this.t+4),o.connect(l),l.connect(this.musicGain),o.start(),o.stop(this.t+4.1)}),e%2===0){let r=s[e/2%4]*(e%8===6?2:1),a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.value=r,o.gain.setValueAtTime(1e-4,this.t),o.gain.exponentialRampToValueAtTime(.032,this.t+.04),o.gain.exponentialRampToValueAtTime(1e-4,this.t+.9),a.connect(o),o.connect(this.musicGain),a.start(),a.stop(this.t+1)}e++};n(),this.musicTimer=setInterval(n,1e3)}stopMusic(){this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null}startBossBgm(t){this.stopMusic(),this.bossFloor=t,this.bgm&&this.bgm.start(t)}stopBossBgm(t=!1){t||(this.bossFloor=0),this.bgm&&this.bgm.stop()}get bossTrackName(){return this.bgm?this.bgm.name:""}get bossTrackInfo(){return this.bgm?this.bgm.info:""}get bossPlaying(){return!!(this.bgm&&this.bgm.playing)}toggleMusic(t){this.musicOn=t,t?this.bossFloor?this.startBossBgm(this.bossFloor):this.startMusic():(this.stopMusic(),this.stopBossBgm(!0))}},_t=new qc;var ve={world:null,list:[],bars:[],init(i){this.world=i,this.clear()},clear(){if(this.world)for(let i of this.list)try{this.world.removeFx(i.obj)}catch{}this.list.length=0;for(let i of this.bars)try{i.group.parent&&i.group.parent.remove(i.group)}catch{}this.bars.length=0},_add(i,t,e){if(!this.world)return null;this.world.addFx(i);let n={obj:i,life:t,max:t,updater:e};return this.list.push(n),n},particles(i,t,e,n,s=18,r={}){if(!this.world)return;let a=new Ne,o=new Float32Array(s*3),l=[],c=r.spread??5.5,h=r.up??4.5;for(let x=0;x<s;x++){o[x*3]=i,o[x*3+1]=t,o[x*3+2]=e;let y=ot(0,ce),m=ot(.3,1);l.push({x:Math.cos(y)*c*m,y:ot(-.4,1)*h*m,z:Math.sin(y)*c*m})}a.setAttribute("position",new tn(o,3));let d=new wi({color:n,size:r.size??.22,transparent:!0,opacity:1,blending:an,depthWrite:!1,sizeAttenuation:!0}),u=new Yi(a,d),f=r.grav??9;this._add(u,r.life??.7,(x,y)=>{let m=x.obj.geometry.attributes.position,p=m.array;for(let v=0;v<s;v++){let T=l[v];T.y-=f*y,p[v*3]+=T.x*y,p[v*3+1]+=T.y*y,p[v*3+2]+=T.z*y}m.needsUpdate=!0,x.obj.material.opacity=Math.max(0,x.life/x.max)})},ring(i,t,e,n,s,r,a=.6){let o=new Ue({color:n,transparent:!0,opacity:.9,side:Se,depthWrite:!1,blending:an}),l=new $t(new $i(.82,1,32),o);l.rotation.x=-Math.PI/2,l.position.set(i,t+.07,e),l.scale.setScalar(s),this._add(l,a,c=>{let h=1-c.life/c.max;c.obj.scale.setScalar(s+(r-s)*h),c.obj.material.opacity=Math.max(0,(1-h)*.9)})},pillar(i,t,e,n,s=.7,r=7,a=.55){let o=new Ue({color:n,transparent:!0,opacity:.55,depthWrite:!1,blending:an,side:Se}),l=new $t(new Tn(s,s*.45,r,16,1,!0),o);l.position.set(i,t+r/2,e),this._add(l,a,c=>{let h=1-c.life/c.max;c.obj.scale.set(1+h*.8,1,1+h*.8),c.obj.material.opacity=Math.max(0,(1-h)*.55)})},burst(i,t,e,n,s=1.2,r=.35){let a=new Ue({color:n,transparent:!0,opacity:.8,depthWrite:!1,blending:an}),o=new $t(new li(1,1),a);o.position.set(i,t,e),o.scale.setScalar(.2),this._add(o,r,l=>{let c=1-l.life/l.max;l.obj.scale.setScalar(.2+s*c*2),l.obj.rotation.y+=.09,l.obj.material.opacity=Math.max(0,(1-c)*.8)})},slash(i,t,e,n,s){for(let r=0;r<3;r++){let a=new Ue({color:r===0?16777215:s,transparent:!0,opacity:.85-r*.2,side:Se,depthWrite:!1,blending:an}),o=new $t(new $i(.9-r*.12,1.75+r*.16,26,1,-Math.PI*.46,Math.PI*.92),a);o.rotation.set(-Math.PI/2.6,n,0),o.position.set(i,t+1.25,e),this._add(o,.22+r*.04,l=>{let c=1-l.life/l.max;l.obj.scale.setScalar(1+c*.7),l.obj.material.opacity=Math.max(0,(1-c)*(.85-r*.2))})}this.particles(i+Math.sin(n)*1.4,t+1.2,e+Math.cos(n)*1.4,s,10,{spread:3,up:3,life:.4,size:.16})},lance(i,t,e,n,s,r=7){let a=new Ue({color:s,transparent:!0,opacity:.75,depthWrite:!1,blending:an,side:Se}),o=new $t(new Ti(.42,r,10,1,!0),a);o.rotation.x=Math.PI/2,o.rotation.z=-n,o.position.set(i+Math.sin(n)*r*.45,t+1.1,e+Math.cos(n)*r*.45),this._add(o,.32,l=>{let c=1-l.life/l.max;l.obj.material.opacity=Math.max(0,(1-c)*.75),l.obj.scale.set(1+c*.5,1,1+c*.5)}),this.ring(i,t,e,s,.3,2.4,.35)},cast(i,t,e,n,s,r){let a=new ct(t);switch(i){case"aoe":case"combo":case"burst":this.ring(e,n,s,a,.3,7.2,.65),this.ring(e,n,s,a,.1,4.6,.48),this.pillar(e,n,s,a,.55,8,.5),this.burst(e,n+1.1,s,a,1.8,.38),this.particles(e,n+.8,s,a,40,{spread:8,up:7,life:.8,size:.26});break;case"pierce":case"dash":this.lance(e,n,s,r,a,i==="dash"?5:8),this.particles(e,n+1,s,a,22,{spread:4,up:2.5,life:.5});break;case"projectile":case"bow":this.ring(e,n+1.25,s,a,.2,1.6,.3),this.particles(e+Math.sin(r)*.8,n+1.25,s+Math.cos(r)*.8,a,14,{spread:2.2,up:1.2,life:.38,size:.16});break;case"heal":this.ring(e,n,s,new ct(9234592),.3,3.2,.8),this.particles(e,n+.3,s,new ct(11075512),26,{spread:1.6,up:5,grav:-1.4,life:1.1,size:.2});break;case"buff":case"warcry":this.ring(e,n,s,new ct(16765040),.3,5.2,.7),this.pillar(e,n,s,new ct(16763226),.5,6,.55),this.particles(e,n,s,new ct(16771496),24,{spread:2,up:6,grav:1,life:.9});break;case"summon":this.ring(e,n,s,a,.4,4.4,.9),this.pillar(e,n,s,a,.8,9,.7),this.particles(e,n,s,a,34,{spread:3,up:6,life:.9});break;case"guard":this.ring(e,n,s,new ct(9230591),.8,2.1,.4),this.burst(e,n+1.2,s,new ct(12118271),.8,.3);break;case"roll":this.particles(e,n+.2,s,new ct(14214384),16,{spread:3.2,up:1.2,grav:5,life:.45,size:.18}),this.ring(e,n,s,new ct(12244200),.2,1.8,.32);break;default:this.slash(e,n,s,r,a)}},impact(i,t,e,n,s=!1){let r=new ct(n);this.burst(i,t,e,r,s?1.4:.8,.28),this.ring(i,t-.8,e,r,.2,s?2.6:1.5,.3),this.particles(i,t,e,r,s?24:12,{spread:s?6:3.5,up:s?5:3,life:.45,size:s?.24:.17})},healthBar(i,t,e,n,s=1.15){let r=new Re,a=new $t(new mn(s,.135),new Ue({color:1183260,transparent:!0,opacity:.85,depthTest:!1})),o=new $t(new mn(s,.09),new Ue({color:7002762,depthTest:!1}));o.position.z=.002,r.add(a),r.add(o),r.position.y=t,r.renderOrder=999,i.add(r);let l={group:r,fill:o,getRatio:e,isVisible:n,width:s};return this.bars.push(l),l},updateBars(i){for(let t of this.bars){if(!t.group.parent||(t.group.visible=t.isVisible?t.isVisible():!0,!t.group.visible))continue;t.group.quaternion.copy(i.quaternion);let e=Gt(t.getRatio(),0,1);t.fill.scale.x=Math.max(.001,e),t.fill.position.x=-(1-e)*t.width*.5,t.fill.material.color.setHex(e>.5?7002762:e>.22?16763226:16734826)}},update(i){let t=this.world;if(t)for(let e=this.list.length-1;e>=0;e--){let n=this.list[e];n.life-=i;try{n.updater&&n.updater(n,i)}catch{}if(n.life<=0){t.removeFx(n.obj);try{n.obj.geometry&&n.obj.geometry.dispose&&n.obj.geometry.dispose()}catch{}try{n.obj.material&&n.obj.material.dispose&&n.obj.material.dispose()}catch{}this.list.splice(e,1)}}}};var Td="aincrad3d_save_v1",g={world:null,state:"title",time:0,floor:1,arena:!1,player:null,mobs:[],drops:[],nodes:[],chests:[],gates:[],boss:null,projectiles:[],fx:[],hitstop:0,combo:0,comboT:0,gateAnim:0,intro:0,introDur:0,bossGate:null,buffs:{},killCount:0,listeners:{},paused:!1,quality:1,emit(i,t){(this.listeners[i]||[]).forEach(e=>{try{e(t)}catch(n){console.warn("emit",i,n)}})},on(i,t){(this.listeners[i]=this.listeners[i]||[]).push(t)}},Yc=()=>({cls:"swordsman",floor:1,best:1,gold:120,exp:0,lv:1,mats:{},bag:[],equip:{},consumables:[],discovered:{},recipes:{},lifeLv:{},lifeXp:{},arenaWins:0,kills:0,playtime:0,music:!0}),K=jx();function jx(){try{let i=JSON.parse(localStorage.getItem(Td));if(i&&i.cls)return{...Yc(),...i}}catch{}return Yc()}function Ie(){try{localStorage.setItem(Td,JSON.stringify(K))}catch{}}function Ad(){K=Yc(),Ie()}function sn(){let i=ye[K.cls]||On[0],t=i.kind==="combat"?i.stats:{atk:.9,def:1,hp:1,spd:1.05,crit:.05,range:2.4,rate:.6},e=K.lv,n={atk:(10+e*3.2)*t.atk,def:(5+e*1.9)*t.def,maxhp:(90+e*26)*t.hp,speed:6.2*t.spd,crit:t.crit,range:t.range,rate:t.rate,luck:0,elem:0,regen:0,leech:0};for(let s in K.equip){let r=K.equip[s];if(r)for(let a in r.stats)a==="hp"?n.maxhp+=r.stats.hp:a==="atk"||a==="def"?n[a]+=r.stats[a]*(a==="atk"?1.3:1):n[a]=(n[a]||0)+r.stats[a]}for(let s in g.buffs){let r=g.buffs[s];!r||r.until<g.time||(s==="all"?(n.atk*=1+r.v,n.def*=1+r.v,n.maxhp*=1+r.v):s==="hp"?n.maxhp*=1+r.v:s in n?n[s]*=1+r.v:n[s]=r.v)}return n.atk=Math.max(1,n.atk),n.def=Math.max(0,n.def),n.maxhp=Math.round(n.maxhp),n}function il(i,t,e=90,n=""){g.buffs[i]={v:(g.buffs[i]&&g.buffs[i].until>g.time?g.buffs[i].v:0)+t,until:g.time+e,label:n},g.emit("hud")}function Qx(){let i=ye[K.cls]||On[0],t=i.kind==="life",e=new ct(i.c).getHex(),n=t?"none":i.look.weapon,s=Ko({color:e,cloth:e,skin:16177336,hair:2892856,cape:!!i.look?.cape||t,helm:!!i.look?.helm,weapon:n,scale:i.look?.scale||1,slim:["dual","rogue","mage","archer"].includes(K.cls)});if(s.scale.multiplyScalar(1.22),t){let r=new $t(G.box,wt(14200944));r.position.set(0,-.36,.12),r.scale.set(.12,.48,.12),s.userData.arms.R.el.add(r)}return s}function Rd(){let i=g.player,t=Qx();g.world.addEntity(t);let e=sn(),n={mesh:t,x:0,z:0,y:0,dir:0,hp:i?Math.min(i.hp,e.maxhp):e.maxhp,maxhp:e.maxhp,move:0,run:!1,action:null,actT:0,actDur:.45,actDone:!1,hurt:0,guard:!1,perfectT:0,jumpY:0,jumpV:0,atkCd:0,skillCd:{},rollCd:0,interactCd:0,invuln:0,strafe:0,forward:0,lastHit:0};return i&&(t.position.copy(i.mesh.position),n.x=i.x,n.z=i.z,n.y=i.y,n.dir=i.dir),i&&g.world.removeEntity(i.mesh),g.player=n,n}function Kr(i){ye[i]&&(K.cls=i,Ie(),g.player&&(Rd(),t_()),_t.ui("ok"),g.emit("toast",{text:"\u5DF2\u8F6C\u804C\u4E3A\u300C"+ye[i].n+"\u300D",kind:"ok"}),g.emit("class"))}function t_(){g.emit("hud"),g.emit("skills")}function Cd(i){g.world=new el(i,g.quality),window.addEventListener("resize",()=>g.world.resize()),g.world.resize(),ve.init(g.world),p_(i),m_()}function ss(i,t={}){i=Gt(i,1,100),g.floor=i,g.arena=!!t.arena,K.floor=i,K.best=Math.max(K.best,i),Ie();let e=Zn(i),n=g.world.load(e.biome,i+(g.arena?500:0));_t.setAmbience(n.ambience),g.arena||_t.stopBossBgm(),e_(),ve.clear(),Rd(),g.player.x=0,g.player.z=0,g.player.y=g.world.h(0,0),g.player.mesh.position.set(0,g.player.y,0),g.world.yaw=0,g.world.pitch=.25,g.world.camDist=g.arena?13.5:8.9,g.arena?i_(e):(n_(e),g.state="explore"),g.killCount=0,g.emit("floor",{f:i,name:e.name,biome:n.n,story:e.story,arena:g.arena}),g.arena&&g.boss&&g.emit("bossIntro",{name:g.boss.name,title:g.boss.title,elem:g.boss.elem,dur:g.introDur,track:_t.bossTrackName,trackInfo:_t.bossTrackInfo}),g.emit("hud"),g.emit("skills"),g.emit("state")}function e_(){[...g.mobs,...g.drops,...g.nodes,...g.chests,...g.gates,...g.projectiles,...g.fx].forEach(i=>{i.mesh&&g.world.removeEntity(i.mesh),i.fx&&g.world.removeFx(i.fx)}),g.boss?.mesh&&g.world.removeEntity(g.boss.mesh),g.clearGate&&g.world.removeEntity(g.clearGate),g.breath&&g.world.removeFx(g.breath),g.clearGate=null,g.breath=null,g.mobs=[],g.drops=[],g.nodes=[],g.chests=[],g.gates=[],g.projectiles=[],g.fx=[],g.boss=null,g.bossGate=null}function Zr(i=8,t=je-8){let e=ot(0,ce),n=ot(i,t),s=Math.cos(e)*n,r=Math.sin(e)*n;return{x:s,z:r,y:g.world.h(s,r)}}function n_(i){let t=Fi[i.biome],e=Jo(i.biome);for(let a=0;a<i.mobCount;a++){let o=a<2?Zr(9,17):Zr(16);Id(xn(e),o,i)}let n=qr(i.biome);for(let a=0;a<i.nodeCount;a++){let o=Zr(9),l=Ce[xn(n)],c=gd(new ct(l.c).getHex(),l.id);c.position.set(o.x,o.y,o.z),g.world.addEntity(c),g.nodes.push({mesh:c,x:o.x,z:o.z,y:o.y,mat:l.id,taken:!1,respawn:0})}for(let a=0;a<i.chestCount;a++){let o=Zr(14),l=md();l.position.set(o.x,o.y,o.z),l.rotation.y=ot(0,ce),g.world.addEntity(l),g.chests.push({mesh:l,x:o.x,z:o.z,y:o.y,opened:!1})}let s=Ui(i.gateCount),r=new ct(t.accent).getHex();for(let a=0;a<i.gateCount;a++){let o=Zr(22,je-12),l=a===s,c=Hc(r,l);c.position.set(o.x,o.y,o.z),c.rotation.y=Math.atan2(-o.x,-o.z),g.world.addEntity(c),g.gates.push({mesh:c,x:o.x,z:o.z,y:o.y,real:l,idx:a,found:!1})}g.emit("toast",{text:"\u63A2\u7D22\u672C\u5C42\uFF0C\u5BFB\u627E\u901A\u5F80\u300C\u5C42\u4E3B\u4E4B\u95F4\u300D\u7684\u95E8",kind:"info",dur:4200}),g.emit("minimap")}function i_(i){let t=Fi[i.biome],e=new ct(t.accent);for(let h=0;h<10;h++){let d=h/10*ce,u=Math.cos(d)*19,f=Math.sin(d)*19,x=g.world.h(u,f),y=new $t(G.cyl,wt(6974072));y.position.set(u,x+2.4,f),y.scale.set(.55,4.8,.55),y.castShadow=!0,g.world.worldGroup.add(y);let m=new $t(G.ico,wt(e,{emissive:e.clone().multiplyScalar(.5)}));m.position.set(u,x+5,f),m.scale.setScalar(.35),g.world.worldGroup.add(m)}let n=Oc(i.f),s={fire:16738874,ice:9230591,dark:11041e3,light:16769162,wind:10152096,thunder:13150463}[n.elem],r=new ct(s),a=Qo(wd(i.f),r.getHex(),2.15,{boss:!0}),o=g.world.h(0,18);a.position.set(0,o+4.5,18),a.rotation.y=Math.PI,g.world.addEntity(a);let l=n.hp*(1+i.f*.012);g.boss={mesh:a,x:0,z:18,y:o,form:wd(i.f),name:n.name,title:n.title,elem:n.elem,elemColor:s,hp:l,maxhp:l,atk:n.atk,atkCd:2,phase:0,hurt:0,dead:!1,landing:!0,introLift:4.5,landed:!1},ve.healthBar(a,2.35,()=>g.boss?Math.max(0,g.boss.hp/g.boss.maxhp):0,()=>!!(g.boss&&!g.boss.dead&&g.state==="boss"),1.5);let c=new $t(new Zi(2.5,.16,8,36),new Ue({color:r,transparent:!0,opacity:0,depthWrite:!1,blending:an}));c.rotation.x=Math.PI/2,c.position.set(0,o+.4,18),c.visible=!1,g.world.addFx(c),g.breath=c,g.intro=0,g.introDur=4.6,g.introStart=performance.now(),g.state="intro",g.introCam={pos:{x:7.5,y:o+2.6,z:7.5},look:{x:0,y:o+3.4,z:18}},g.world.camera.position.set(g.introCam.pos.x,g.introCam.pos.y,g.introCam.pos.z),g.world.camTarget.set(g.introCam.look.x,g.introCam.look.y,g.introCam.look.z),_t.bossRoar(),_t.startBossBgm(i.f),g.emit("hud"),g.emit("state")}function wd(i){return["dragon","golem","beast","undead","humanoid","elemental","plant","dragon","golem","flyer"][i%10]}function Id(i,t,e){let n=Fc(i),s={beast:9071178,humanoid:9067114,flyer:8022682,bug:5929546,undead:13157556,elemental:6990040,dragon:10115658,slime:7000224,plant:8040544,golem:9079442}[n],r=new ct(s).offsetHSL(ot(-.05,.05),0,ot(-.08,.08)),a=.78+(n==="beast"?.12:0)+ot(-.08,.16),o=Qo(n,r.getHex(),a);o.position.set(t.x,t.y,t.z),g.world.addEntity(o);let l=(34+e.f*11)*(n==="dragon"?1.6:1);g.mobs.push({mesh:o,x:t.x,z:t.z,y:t.y,form:n,name:i,hp:l,maxhp:l,atk:5+e.f*1.55,def:1.5+e.f*.5,speed:2.2+ot(0,1.1),aggro:9+e.f*.05,atkCd:ot(.5,2),homeX:t.x,homeZ:t.z,wander:ot(0,ce),wanderT:ot(1,4),hurt:0,dead:!1,move:0,hitFlash:0,exp:6+e.f*2});let c=g.mobs[g.mobs.length-1];ve.healthBar(o,1.95,()=>Math.max(0,c.hp/c.maxhp),()=>!c.dead&&c.hp<c.maxhp,1)}function s_(i){if(i.dead)return;i.dead=!0,g.world.removeEntity(i.mesh),g.killCount++,K.kills=(K.kills||0)+1,r_(i.exp),_t.hit("sword",!1),g.emit("float",{x:i.x,y:i.y+1.6,z:i.z,text:"+"+i.exp+" EXP",c:"#9ae8ff"});let t=sn().luck||0;cn(.3+t)&&Jr(i.x,i.z,fi(g.floor,!1,t));let e=qr(Zn(g.floor).biome);if(cn(.55)){let s=xn(e);K.mats[s]=(K.mats[s]||0)+1,g.emit("float",{x:i.x,y:i.y+2.2,z:i.z,text:"+1 "+Ce[s].n,c:Ce[s].c})}let n=Math.round(ot(3,12)+g.floor*1.4);K.gold+=n,_t.coin(),Ie(),g.emit("hud")}function r_(i){K.exp+=i;let t=Pd(K.lv);if(K.exp>=t){K.exp-=t,K.lv++,_t.levelup(),g.emit("toast",{text:"\u2605 \u7B49\u7EA7\u63D0\u5347\uFF01 Lv."+K.lv,kind:"ok"});let e=sn();g.player.maxhp=e.maxhp,g.player.hp=Math.min(e.maxhp,g.player.hp+e.maxhp*.4)}Ie()}function Pd(i){return Math.round(80+i*i*34)}function Jr(i,t,e){let n=di[e.q],s=fd(n.c),r=g.world.h(i,t);s.position.set(i,r,t),g.world.addEntity(s),g.drops.push({mesh:s,x:i,z:t,y:r,item:e,t:0,rare:n.mul>=2.2})}function Ld(i){g.world.removeEntity(i.mesh),i.mesh.userData.picked=!0,K.bag.push(i.item),_t.pickup(i.rare),g.emit("toast",{text:"\u83B7\u5F97 "+i.item.name+"\uFF08"+di[i.item.q].n+"\uFF09",kind:i.rare?"ok":"info",dur:2600}),g.emit("float",{x:i.x,y:i.y+2,z:i.z,text:di[i.item.q].n+"!",c:di[i.item.q].c}),Ie(),g.emit("hud"),g.emit("bag")}function Dd(){let i=g.player;if(!i)return null;let t=null,e=3.2;for(let n of g.drops)if(!n.mesh.userData.picked){let s=hn(i.x,i.z,n.x,n.z);s<e&&(e=s,t={t:"drop",o:n})}for(let n of g.nodes)if(!n.taken){let s=hn(i.x,i.z,n.x,n.z);s<e&&(e=s,t={t:"node",o:n})}for(let n of g.chests)if(!n.opened){let s=hn(i.x,i.z,n.x,n.z);s<e&&(e=s,t={t:"chest",o:n})}for(let n of g.gates)if(!g.arena&&!n.used){let s=hn(i.x,i.z,n.x,n.z);s<e+1.3&&(e=s,t={t:"gate",o:n})}return t}function Gs(){if(g.state!=="explore"&&g.state!=="boss")return;let i=Dd();if(!i)return;let t=g.player;if(i.t==="drop")Ld(i.o);else if(i.t==="node"){let e=i.o;e.taken=!0,e.respawn=g.time+40,e.mesh.visible=!1;let n=Vr(K.cls)?2:1,s=(cn(.25)?2:1)*n;K.mats[e.mat]=(K.mats[e.mat]||0)+s,_t.craft("mine"),g.emit("float",{x:e.x,y:e.y+1.8,z:e.z,text:"+"+s+" "+Ce[e.mat].n,c:Ce[e.mat].c}),g.emit("toast",{text:"\u91C7\u96C6\u5230 "+Ce[e.mat].n+" \xD7"+s+(n>1?"\uFF08\u672C\u804C\u7FFB\u500D\uFF09":""),kind:"ok",dur:1900}),Ie(),g.emit("hud")}else if(i.t==="chest"){let e=i.o;e.opened=!0,e.mesh.userData.lid.rotation.x=-.9,_t.pickup(!0),_t.coin(3);let n=Math.round(ot(24,60)+g.floor*5);K.gold+=n;let s=sn().luck||0;Jr(e.x+ot(-1,1),e.z+ot(-1,1),fi(g.floor,cn(.35),s+.4)),cn(.5)&&Jr(e.x+ot(-1,1),e.z+ot(-1,1),fi(g.floor,!1,s+.2));let r=qr(Zn(g.floor).biome),a=xn(r);K.mats[a]=(K.mats[a]||0)+2,g.emit("toast",{text:"\u5B9D\u7BB1\uFF01+"+n+" \u91D1 \xB7 "+Ce[a].n+"\xD72 \xB7 \u88C5\u5907",kind:"ok",dur:2800}),g.emit("float",{x:e.x,y:e.y+2.4,z:e.z,text:"+"+n+" \u91D1",c:"#ffd070"}),Ie(),g.emit("hud")}else i.t==="gate"&&a_(i.o)}function a_(i){if(i.found=!0,i.used=!0,i.real)_t.gateOpen(),g.emit("toast",{text:"\u627E\u5230\u4E86\uFF01\u95E8\u540E\u662F\u300C\u5C42\u4E3B\u4E4B\u95F4\u300D",kind:"ok",dur:2600}),g.emit("gateFound",{}),setTimeout(()=>{g.state==="explore"&&ss(g.floor,{arena:!0})},900);else{_t.ui("err"),_t.gateOpen(),g.emit("toast",{text:"\u7A7A\u95E8\u2026\u2026\u4E0D\u8FC7\u60CA\u52A8\u4E86\u4EC0\u4E48\u4E1C\u897F",kind:"info",dur:2200});let t=Zn(g.floor);for(let e=0;e<2;e++){let n=ot(0,ce);Id(xn(Jo(t.biome)),{x:i.x+Math.cos(n)*4,z:i.z+Math.sin(n)*4,y:g.world.h(i.x,i.z)},t)}Jr(i.x+2,i.z+2,fi(g.floor,!1,.5)),i.used=!1,i.found=!0,i.cooldown=g.time+12}g.emit("minimap")}function jr(){if(!Od())return;let i=g.player,t=sn();if(i.atkCd>0)return;i.atkCd=t.rate,i.action="attack",i.actT=0,i.actDur=t.rate*.86,i.actDone=!1;let e=ye[K.cls],n=e.kind==="combat"?e.look.weapon:"none";_t.swing(n),ve.slash(i.x,i.y,i.z,i.dir,new ct(e.c))}function Vs(i){if(!Od())return;let t=g.player,e=ye[K.cls],r=[...e.kind==="combat"?e.skills:[],...$n][i]||(i<4&&e.kind==="combat"?e.skills[i]:null);if(!r)return;if((t.skillCd[r.id]||0)>g.time){_t.ui("err");return}t.skillCd[r.id]=g.time+r.cd;let a=e.kind==="combat"?e.look.weapon:"staff",o=new ct(e.c||"#9be36b");if(_t.skill(K.cls,r.kind),r.kind==="roll"){Nd(),g.emit("skills");return}if(ve.cast(r.kind,o,t.x,t.y,t.z,t.dir),r.kind==="guard"){t.guard=!0,t.perfectT=g.time+.35,t.guardUntil=g.time+1.5,g.emit("skills");return}if(r.kind==="heal"){let l=sn();t.hp=Math.min(l.maxhp,t.hp+l.maxhp*(r.id==="bandage"?.28:.48)),il("regen",r.id==="bandage"?.5:1.2,8),g.emit("float",{x:t.x,y:t.y+2.4,z:t.z,text:"+"+Math.round(l.maxhp*.4),c:"#8ce8a0"}),g.emit("skills");return}if(r.kind==="buff"||r.kind==="warcry"){il("atk",.28,12),il("speed",.18,12),g.emit("skills");return}if(r.kind==="summon"){o_(r),g.emit("skills");return}t.action=r.kind==="projectile"||r.kind==="bow"?"cast":a==="bow"?"bow":"attack",t.actT=0,t.actDur=r.kind==="combo"?.9:.55,t.actDone=!1,t.pendingSkill=r,g.emit("skills")}function Nd(){let i=g.player;i.invuln=g.time+.58,i.action="roll",i.actT=0,i.actDur=.58,i.actDone=!0,i.rollFromX=i.x,i.rollFromZ=i.z;let t=Math.sin(i.dir),e=Math.cos(i.dir);i.rollToX=Gt(i.x+t*4.6,-je+2,je-2),i.rollToZ=Gt(i.z+e*4.6,-je+2,je-2),_t.jump(),ve.cast("roll",16777215,i.x,i.y,i.z,i.dir)}function o_(i){let t=g.player;for(let e=0;e<(i.dmg>3?3:1);e++){let n=t.dir+e*ce/3,s=Qo("elemental",9232592,.55),r=t.x+Math.sin(n)*2,a=t.z+Math.cos(n)*2;s.position.set(r,g.world.h(r,a),a),g.world.addEntity(s),g.fx.push({fx:s,life:12,max:12,kind:"summon",x:r,z:a,cd:0,owner:!0,dmg:i.dmg*2+8})}g.emit("toast",{text:"\u4F7F\u9B54\u5DF2\u964D\u4E34",kind:"info",dur:1600})}function l_(i){let t=g.player,e=sn(),n=ye[K.cls],s=e.atk*(i&&i.dmg||1)*ot(.88,1.14),r=i?i.kind==="projectile"?12:i.kind==="aoe"?6.2:i.kind==="pierce"?7:i.kind==="dash"?5:e.range+2.4:e.range,a=Math.sin(t.dir),o=Math.cos(t.dir),l=i&&(i.kind==="aoe"||i.kind==="combo"&&i.dmg>4);i&&i.kind==="dash"&&(t.x=Gt(t.x+a*3.4,-je+2,je-2),t.z=Gt(t.z+o*3.4,-je+2,je-2));let h=0,d=[...g.mobs.filter(u=>!u.dead),...g.boss&&!g.boss.dead?[g.boss]:[]];for(let u of d){let f=u.x-t.x,x=u.z-t.z,y=Math.hypot(f,x);if(y>r||!l&&(f*a+x*o)/(y||1)<(i&&(i.kind==="pierce"||i.kind==="projectile")?.55:.05))continue;let m=cn(e.crit+(i&&i.kind==="combo"?.1:0)),p=Math.max(1,Math.round(s*(m?1.9:1)-u.def*.5));if(Ws(u,p,m,i),h++,i&&i.kind==="pierce"&&h>=5)break}h&&(g.hitstop=c_(i),g.world.hitShake(i?.3:.14),g.combo++,g.comboT=g.time+2.2,_t.hit(n.kind==="combat"?n.look.weapon:"sword",!1,n.kind==="combat"&&["mage","cleric"].includes(K.cls)?"ice":""),g.emit("combo",g.combo)),i&&(i.kind==="aoe"||i.kind==="combo")&&(_t.explosion(i.dmg>4?1.2:.8),ve.cast("aoe",new ct(n.c),t.x+a*2,t.y,t.z+o*2,t.dir)),i&&(i.kind==="projectile"||i.kind==="bow")&&h_(i,s)}function c_(i){return i?i.dmg>4?.12:.07:.045}function h_(i,t){let e=g.player,n=ye[K.cls],s=new $t(G.ico,wt(new ct(n.c),{emissive:new ct(n.c).multiplyScalar(.6)}));s.scale.setScalar(i.dmg>3?.42:.24),s.position.set(e.x,e.y+1.3,e.z),g.world.addEntity(s),g.projectiles.push({mesh:s,x:e.x,z:e.z,y:e.y+1.3,vx:Math.sin(e.dir)*17,vz:Math.cos(e.dir)*17,life:1.2,dmg:t,skill:i,hit:[]})}function Ws(i,t,e,n){i.hp-=t,i.hurt=.28,g.emit("float",{x:i.x+ot(-.4,.4),y:i.y+(i===g.boss?3.4:1.8),z:i.z,text:(e?"\u66B4\u51FB ":"")+t,c:e?"#ffd34a":"#ffffff",big:e}),ve.impact(i.x,i.y+(i===g.boss?2.4:1.1),i.z,e?16765770:16777215,e),i===g.boss?(g.emit("bosshp",{hp:Math.max(0,i.hp),max:i.maxhp}),g.emit("hud"),i.hp<=0&&d_()):i.hp<=0&&s_(i)}function Ud(i,t,e){let n=g.player;if(!n||g.state==="dead"||n.invuln>g.time)return;if(n.guard){let r=n.perfectT>g.time;if(_t.guard(r),r){g.emit("float",{x:n.x,y:n.y+2.2,z:n.z,text:"\u5F39\u53CD!",c:"#8ce8ff",big:!0});for(let a of g.mobs)!a.dead&&hn(n.x,n.z,a.x,a.z)<3.6&&Ws(a,sn().atk*1.5,!0,null);n.guard=!1}i*=r?0:.25}let s=sn();i=Math.max(1,Math.round(i-s.def*.55)),n.hp-=i,n.hurt=.3,n.invuln=g.time+.55,_t.hurt(),g.world.hitShake(.22),g.emit("float",{x:n.x,y:n.y+2.4,z:n.z,text:"-"+i,c:"#ff7a7a",big:!0}),g.emit("hud"),n.hp<=0&&u_()}function u_(){g.state="dead",_t.stopBossBgm(),_t.stopMusic(),g.emit("dead",{floor:g.floor}),g.emit("state")}function Fd(){let i=sn();g.player.hp=i.maxhp,g.player.invuln=g.time+2,ss(g.floor)}function d_(){let i=g.boss;if(!i||i.dead)return;i.dead=!0,g.state="gate",g.gateAnim=0,g.gateStart=performance.now(),g.gateZ0=g.player.z;let t=Zn(g.floor),e=g.player,n=new ct(Fi[t.biome].accent).getHex(),s=e.x,r=e.z+9,a=Hc(n,!0);a.position.set(s,g.world.h(s,r),r),a.rotation.y=Math.PI,g.world.addEntity(a),g.clearGate=a,_t.stopBossBgm(),_t.levelup(),_t.gateOpen(),_t.startMusic(),g.emit("toast",{text:"\u5C42\u4E3B "+i.name+" \u5DF2\u88AB\u8BA8\u4F10\uFF01",kind:"ok",dur:3200}),g.emit("bossDone",{});for(let o=0;o<3;o++)Jr(ot(-3,3),18+ot(-3,3),fi(g.floor,!0,.6));K.gold+=120+g.floor*18,K.arenaWins=(K.arenaWins||0)+1,Ie()}function f_(){if(g.floor>=100){g.emit("ending",{});return}ss(g.floor+1)}function Od(){return g.player&&(g.state==="explore"||g.state==="boss")&&!g.paused&&g.hitstop<=0}function sl(i,t,e){let n=ye[i];if(!n||n.kind!=="life")return;let s=Gt(t,0,1),r=1+(s>.85?2:s>.6?1:0);K.consumables=K.consumables||[];for(let o=0;o<r;o++)K.consumables.push({cls:i,n:n.out.n,icon:n.out.icon,q:s,buff:n.out.buff,price:n.out.price});K.lifeXp[i]=(K.lifeXp[i]||0)+Math.round(8+s*18),K.lifeLv[i]=1+Math.floor((K.lifeXp[i]||0)/90);let a=n.out.price?Math.round(n.out.price*(.4+s*.8)*.35):0;return K.gold+=a,_t.craft("success"),Ie(),g.emit("hud"),g.emit("bag"),{amount:r,gold:a,lv:K.lifeLv[i]}}function rl(i){let t=K.consumables?.[i];if(!t)return;K.consumables.splice(i,1);let e=t.buff||{stat:"hp",v:.1};if(il(e.stat,e.v*(.6+t.q*.8),120,t.n),e.stat==="hp"||e.stat==="regen"){let n=sn();g.player.hp=Math.min(n.maxhp,g.player.hp+n.maxhp*.35)}_t.ui("ok"),g.emit("float",{x:g.player.x,y:g.player.y+2.4,z:g.player.z,text:t.n,c:"#a8e8ff"}),Ie(),g.emit("hud"),g.emit("bag")}function al(i,t){let e=K.bag.findIndex(a=>a.uid===i);if(e<0)return;let n=K.bag[e],s=t||n.slot;K.bag.splice(e,1),K.equip[s]&&K.bag.push(K.equip[s]),K.equip[s]=n;let r=sn();if(g.player){let a=g.player.maxhp;g.player.maxhp=r.maxhp,g.player.hp=Math.min(r.maxhp,g.player.hp+Math.max(0,r.maxhp-a))}_t.ui("ok"),Ie(),g.emit("hud"),g.emit("bag"),g.emit("toast",{text:"\u88C5\u5907 "+n.name,kind:"ok",dur:1600})}function ol(i){let t=K.bag.findIndex(n=>n.uid===i);if(t<0)return;let e=K.bag[t];K.bag.splice(t,1),K.gold+=e.price,_t.coin(2),Ie(),g.emit("hud"),g.emit("bag"),g.emit("toast",{text:"\u552E\u51FA +"+e.price+" \u91D1",kind:"info",dur:1500})}var zt={mx:0,my:0,draggingCam:!1,camId:null,keys:{},joyId:null,joyOX:0,joyOY:0};function p_(i){let t=i;t.addEventListener("touchstart",n=>{for(let s of n.changedTouches)s.clientX<window.innerWidth*.46&&zt.joyId===null?(zt.joyId=s.identifier,zt.joyOX=s.clientX,zt.joyOY=s.clientY,g.emit("joy",{x:s.clientX,y:s.clientY,show:!0})):zt.camId===null&&(zt.camId=s.identifier,zt.lastCX=s.clientX,zt.lastCY=s.clientY,zt.draggingCam=!0);n.preventDefault()},{passive:!1}),t.addEventListener("touchmove",n=>{for(let s of n.changedTouches)if(s.identifier===zt.joyId){let r=s.clientX-zt.joyOX,a=s.clientY-zt.joyOY,o=Math.hypot(r,a),l=Math.min(1,o/62);zt.mx=o?r/o*l:0,zt.my=o?-a/o*l:0,g.emit("joy",{x:zt.joyOX+(o?r/o*Math.min(o,62):0),y:zt.joyOY+(o?a/o*Math.min(o,62):0),show:!0,knob:!0})}else if(s.identifier===zt.camId){let r=s.clientX-zt.lastCX,a=s.clientY-zt.lastCY;g.world.yaw-=r*.006,g.world.pitch=Gt(g.world.pitch+a*.004,.12,1.05),zt.lastCX=s.clientX,zt.lastCY=s.clientY}n.preventDefault()},{passive:!1});let e=n=>{for(let s of n.changedTouches)s.identifier===zt.joyId&&(zt.joyId=null,zt.mx=0,zt.my=0,g.emit("joy",{show:!1})),s.identifier===zt.camId&&(zt.camId=null,zt.draggingCam=!1);n.preventDefault()};t.addEventListener("touchend",e,{passive:!1}),t.addEventListener("touchcancel",e,{passive:!1}),t.addEventListener("mousedown",n=>{n.button===0&&(zt.mouseDown=!0,zt.lastCX=n.clientX,zt.lastCY=n.clientY)}),window.addEventListener("mousemove",n=>{if(!zt.mouseDown||!g.world)return;let s=n.clientX-zt.lastCX,r=n.clientY-zt.lastCY;g.world.yaw-=s*.005,g.world.pitch=Gt(g.world.pitch+r*.0035,.12,1.05),zt.lastCX=n.clientX,zt.lastCY=n.clientY}),window.addEventListener("mouseup",()=>{zt.mouseDown=!1}),t.addEventListener("wheel",n=>{g.world&&(g.world.camDist=Gt(g.world.camDist+n.deltaY*.012,6,20)),n.preventDefault()},{passive:!1})}function m_(){window.addEventListener("keydown",i=>{zt.keys[i.code]=!0,i.code==="Space"?(i.preventDefault(),jr()):i.code==="KeyE"||i.code==="KeyF"?Gs():/^Digit[1-9]$/.test(i.code)?Vs(+i.code.slice(5)-1):i.code==="ShiftLeft"||i.code==="ShiftRight"?g_():i.code==="KeyQ"?g.player&&(g.player.guard=!0,g.player.perfectT=g.time+.35):i.code==="KeyM"&&_t.toggleMusic(!_t.musicOn)}),window.addEventListener("keyup",i=>{zt.keys[i.code]=!1,i.code==="KeyQ"&&g.player&&(g.player.guard=!1)})}function g_(){let i=g.player;i&&(i.rollCd||0)<g.time&&(i.rollCd=g.time+2.2,Nd())}function x_(){let i=zt.keys,t=0,e=0;if((i.KeyW||i.ArrowUp)&&(e+=1),(i.KeyS||i.ArrowDown)&&(e-=1),(i.KeyA||i.ArrowLeft)&&(t-=1),(i.KeyD||i.ArrowRight)&&(t+=1),t||e){let n=Math.hypot(t,e);return{mx:t/n,my:e/n}}return{mx:zt.mx,my:zt.my}}var Ed=0;function Bd(i){let t=Gt((i-Ed)/1e3,0,.08);if(Ed=i,!g.world)return;g.time+=t,K.playtime=(K.playtime||0)+t,g.hitstop>0?g.hitstop-=t:__(t);let e=g.state==="intro"&&g.boss&&g.introCam?{cinematic:!0,camPos:g.introCam.pos,camLook:g.introCam.look}:{};g.world.update(t,g.time,g.player||{x:0,y:0,z:0},e),ve.update(t),ve.updateBars(g.world.camera),g.world.render()}function __(i){let t=g.player;if(!t)return;let e=g.state==="explore"||g.state==="boss",{mx:n,my:s}=x_(),r=e&&(Math.abs(n)>.05||Math.abs(s)>.05)&&!t.action,a=sn(),o=g.world.yaw,l=Math.sin(o),c=Math.cos(o),h=-Math.cos(o),d=Math.sin(o),u=h*n+l*s,f=d*n+c*s,x=Math.hypot(u,f);x>1&&(u/=x,f/=x);let y=a.speed*(t.guard?.45:1)*(x>.1?1:0);if(e&&x>.05&&!t.action){t.x=Gt(t.x+u*y*i,-je+2,je-2),t.z=Gt(t.z+f*y*i,-je+2,je-2);let v=Math.atan2(u,f)-t.dir;for(;v>Math.PI;)v-=ce;for(;v<-Math.PI;)v+=ce;if(t.dir+=v*Math.min(1,i*11),g.time-(t.lastStep||0)>.34){t.lastStep=g.time;let T=g.world.biome;_t.step(T.step==="snow"?"snow":T.step==="stone"?"stone":"grass",g.time)}}if(t.move=r?Math.min(1,x):0,t.action==="roll"){let p=Gt(t.actT,0,1);t.x=Ni(t.rollFromX,t.rollToX,p),t.z=Ni(t.rollFromZ,t.rollToZ,p),t.jumpY=Math.sin(p*Math.PI)*.42}else t.jumpY=0;t.guardUntil&&g.time>t.guardUntil&&!zt.keys.KeyQ&&(t.guard=!1,t.guardUntil=0),t.y=g.world.h(t.x,t.z)+t.jumpY,t.mesh.position.set(t.x,t.y,t.z),t.mesh.rotation.y=t.dir,t.atkCd=Math.max(0,t.atkCd-i),t.hurt=Math.max(0,t.hurt-i*2.2),t.action&&(t.actT+=i/t.actDur,t.actT>=.42&&!t.actDone&&(t.actDone=!0,l_(t.pendingSkill||null),t.pendingSkill=null),t.actT>=1&&(t.action=null,t.actT=0,t.actDone=!1,zt.keys.KeyQ||(t.guard=!1))),jo(t.mesh,{dt:i,t:g.time,move:t.move,run:!1,action:t.action,at:t.actT,hurt:t.hurt,guard:t.guard,jump:t.action==="jump"}),g.buffs.regen&&g.buffs.regen.until>g.time&&(t.hp=Math.min(a.maxhp,t.hp+a.maxhp*.012*i));for(let p in g.buffs)g.buffs[p].until<g.time&&delete g.buffs[p];y_(i),M_(i),b_(i),S_(i),w_(i),g.state==="intro"&&E_(i),g.state==="gate"&&T_(i),g.comboT<g.time&&g.combo&&(g.combo=0,g.emit("combo",0));let m=e?Dd():null;g.emit("interactHint",m?{t:m.t,label:{drop:"\u62FE\u53D6",node:"\u91C7\u96C6",chest:"\u5F00\u542F\u5B9D\u7BB1",gate:"\u63A8\u95E8\u63A2\u67E5"}[m.t]}:null),Math.floor(g.time*4)!==Math.floor((g.time-i)*4)&&g.emit("hud")}function y_(i){let t=g.player,e=sn();for(let s of g.mobs){if(s.dead)continue;s.hurt=Math.max(0,s.hurt-i*2.4);let r=hn(t.x,t.z,s.x,s.z),a=r<s.aggro||s.hp<s.maxhp,o=0;if(a&&g.state==="explore")if(r>2){let l=Math.atan2(t.x-s.x,t.z-s.z);s.x+=Math.sin(l)*s.speed*i,s.z+=Math.cos(l)*s.speed*i,s.mesh.rotation.y=l,o=1}else(s.atkCd-=i)<=0&&(s.atkCd=ot(1.5,2.6),Ud(s.atk,s.x,s.z),s.mesh.rotation.y=Math.atan2(t.x-s.x,t.z-s.z));else{s.wanderT-=i,s.wanderT<=0&&(s.wanderT=ot(2,5),s.wander=ot(0,ce));let l=s.wander,c=s.x+Math.sin(l)*s.speed*.28*i,h=s.z+Math.cos(l)*s.speed*.28*i;hn(c,h,s.homeX,s.homeZ)<8?(s.x=c,s.z=h,s.mesh.rotation.y=l,o=.4):s.wanderT=0}s.y=g.world.h(s.x,s.z),tl(s.mesh,{dt:i,t:g.time,move:o,hurt:s.hurt,baseY:s.y}),s.mesh.position.x=s.x,s.mesh.position.z=s.z}let n=g.boss;if(n&&!n.dead){if(n.hurt=Math.max(0,n.hurt-i*2.4),g.state==="boss"){if(hn(t.x,t.z,n.x,n.z)>3.4){let a=Math.atan2(t.x-n.x,t.z-n.z);n.x+=Math.sin(a)*2.2*i,n.z+=Math.cos(a)*2.2*i,n.mesh.rotation.y=a,n.phase=1}else(n.atkCd-=i)<=0&&(n.atkCd=ot(2,3.2),v_(n));n.hp<n.maxhp*.5&&!n.raged&&(n.raged=!0,g.emit("toast",{text:n.name+" \u8FDB\u5165\u72C2\u66B4\u9636\u6BB5\uFF01",kind:"warn",dur:2400}),_t.bossRoar())}n.y=g.world.h(n.x,n.z);let s=g.state==="intro"&&n.introLift||0;tl(n.mesh,{dt:i,t:g.time,move:n.phase,hurt:n.hurt,baseY:n.y+s}),n.mesh.position.x=n.x,n.mesh.position.z=n.z}}function v_(i){let t=g.player,e=hn(t.x,t.z,i.x,i.z);_t.skill("mage","aoe"),_t.explosion(1.3);let n=new ct({fire:16738874,ice:9230591,dark:11041e3,light:16769162,wind:10152096,thunder:13150463}[i.elem]),s=g.world.h(t.x,t.z);ve.ring(t.x,s,t.z,n,.4,6.5,.7),ve.burst(t.x,s+1,t.z,n,2,.4),ve.particles(t.x,s+.5,t.z,n,30,{spread:7,up:5,life:.7}),g.world.hitShake(.42),e<5.2&&Ud(i.atk*1.15,i.x,i.z),g.emit("bossSkill",{elem:i.elem,name:i.name})}function M_(i){for(let t=g.projectiles.length-1;t>=0;t--){let e=g.projectiles[t];e.life-=i,e.x+=e.vx*i,e.z+=e.vz*i,e.mesh.position.set(e.x,g.world.h(e.x,e.z)+1.3,e.z),e.mesh.rotation.y+=i*9;let n=!1;for(let s of[...g.mobs,...g.boss&&!g.boss.dead?[g.boss]:[]])if(!(s.dead||e.hit.includes(s))&&hn(e.x,e.z,s.x,s.z)<1.5){e.hit.push(s),Ws(s,Math.round(e.dmg),cn(.12),e.skill),_t.hit("staff",!1),n=!0;break}(n||e.life<=0||Math.hypot(e.x,e.z)>je)&&(g.world.removeEntity(e.mesh),g.projectiles.splice(t,1))}}function b_(i){let t=g.player;for(let e=g.drops.length-1;e>=0;e--){let n=g.drops[e];if(n.t+=i,pd(n.mesh,g.time),n.mesh.position.set(n.x,n.y,n.z),n.mesh.userData.picked){g.drops.splice(e,1);continue}hn(t.x,t.z,n.x,n.z)<1.4&&(Ld(n),g.drops.splice(e,1))}}function S_(i){for(let t=g.fx.length-1;t>=0;t--){let e=g.fx[t];if(e.life-=i,e.kind==="slash")e.fx.rotation.z+=i*6,e.fx.userData.m.opacity=Math.max(0,e.life/e.max)*.85,e.fx.userData.m2.opacity=Math.max(0,e.life/e.max)*.5,e.fx.scale.setScalar(1+(1-e.life/e.max)*.5);else if(e.kind==="impact"){let n=1-e.life/e.max;e.fx.scale.setScalar(.6+n*3.2),e.fx.userData.m.opacity=Math.max(0,1-n)*.9,e.fx.userData.spark.material.opacity=Math.max(0,1-n*2)}else if(e.kind==="summon"&&(e.cd-=i,e.fx.position.set(e.x+Math.sin(g.time*2+t)*.8,g.world.h(e.x,e.z)+.5,e.z+Math.cos(g.time*2+t)*.8),tl(e.fx,{dt:i,t:g.time,move:.5}),e.cd<=0)){e.cd=1.1;let n=null,s=12;for(let r of[...g.mobs,...g.boss&&!g.boss.dead?[g.boss]:[]]){let a=hn(e.x,e.z,r.x,r.z);!r.dead&&a<s&&(s=a,n=r)}n&&Ws(n,e.dmg,!1,null)}e.life<=0&&(g.world.removeFx(e.fx),e.kind==="summon"&&g.world.removeEntity(e.fx),g.fx.splice(t,1))}}function w_(i){for(let t of g.nodes)t.taken&&g.time>t.respawn&&(t.taken=!1,t.mesh.visible=!0),t.taken||(t.mesh.userData.crystal.rotation.y+=i*1.4,t.mesh.userData.crystal.position.y=.46+Math.sin(g.time*2+t.x)*.07);for(let t of g.gates)t.cooldown&&g.time<t.cooldown||Gc(t.mesh,g.time,!1)}function E_(){g.intro=(performance.now()-g.introStart)/1e3;let i=g.boss;if(!i)return;let t=Gt(g.intro/g.introDur,0,1),e=g.world.h(i.x,i.z),n=new ct(i.elemColor);if(t<.36){let s=t/.36;g.introCam={pos:{x:i.x+7.5-s*2,y:e+2.1+s*1.2,z:i.z-10.5},look:{x:i.x,y:e+3.4-s*.8,z:i.z}},i.introLift=Ni(4.8,0,s*s)}else{let s=(t-.36)/.5*2.1;g.introCam={pos:{x:i.x+Math.sin(s)*11,y:e+4.2+Math.sin(s*.7)*1.4,z:i.z-Math.cos(s)*11},look:{x:i.x,y:e+2.9,z:i.z}},i.introLift=0}if(!i.landed&&t>=.34&&(i.landed=!0,ve.ring(i.x,e,i.z,n,.5,12,.9),ve.ring(i.x,e,i.z,16777215,.2,7,.55),ve.particles(i.x,e+.4,i.z,n,46,{spread:11,up:7,life:1,size:.3}),ve.burst(i.x,e+1.5,i.z,n,2.4,.5),g.world.hitShake(.8),_t.explosion(1.4),_t.bossRoar()),t>.38&&t<.92&&(i.mesh.scale.setScalar(2.15*(1+Math.sin((t-.38)*34)*.018)),cn(.3)&&ve.ring(i.x,e+.2,i.z,n,1,6+Math.random()*4,.55),cn(.13)&&ve.particles(i.x+ot(-3,3),e+ot(.5,3),i.z+ot(-3,3),n,8,{spread:3,up:5,life:.7,size:.22}),cn(.06)&&ve.pillar(i.x+ot(-4,4),e,i.z+ot(-4,4),n,.5,8,.5),cn(.1)&&_t.explosion(.55),g.world.hitShake(.05)),g.breath){let s=t>.3&&t<.96;if(g.breath.visible=s,s){let r=Gt((t-.3)/.66,0,1);g.breath.material.opacity=.25+.45*Math.sin(r*Math.PI),g.breath.scale.setScalar(1+r*1.8),g.breath.rotation.z+=.035,g.breath.position.y=e+.4+r*3.2}}t>=1&&(g.breath&&(g.breath.visible=!1),g.introCam=null,g.world.camDist=11.5,g.state="boss",i.landing=!1,g.emit("state"),g.emit("hud"))}function T_(i){g.gateAnim=(performance.now()-g.gateStart)/1e3;let t=g.player,e=Gt(g.gateAnim/3.6,0,1);if(g.clearGate&&Gc(g.clearGate,g.time,e>.18),g.boss?.mesh){let n=Gt(1-e*1.5,0,1);g.boss.mesh.scale.setScalar(2.15*n),g.boss.mesh.rotation.z=e*.5,e>.68&&(g.boss.mesh.visible=!1)}t.z=g.gateZ0+e*6,t.move=1,t.dir=0,t.mesh.position.set(t.x,g.world.h(t.x,t.z),t.z),jo(t.mesh,{dt:i,t:g.time,move:1,action:null}),g.emit("gateFx",e),e>=1&&(g.gateAnim=0,f_())}function Xs(){let i=g.player,t=sn();return{state:g.state,floor:g.floor,cls:K.cls,clsN:ye[K.cls]?.n,hp:i?i.hp:t.maxhp,maxhp:t.maxhp,gold:K.gold,lv:K.lv,exp:K.exp,expNeed:Pd(K.lv),atk:Math.round(t?.atk||0),def:Math.round(t?.def||0),combo:g.combo,mats:K.mats,bag:K.bag,equip:K.equip,consumables:K.consumables||[],mobsLeft:g.mobs.filter(e=>!e.dead).length,bossHp:g.boss?Math.max(0,g.boss.hp):0,bossMax:g.boss?.maxhp||1,gates:g.gates.map(e=>({x:e.x,z:e.z,found:e.found,used:e.used,real:e.real})),player:{x:i?.x||0,z:i?.z||0},arena:g.arena}}function kd(){let i=ye[K.cls];return(i.kind==="combat"?[...i.skills,...$n]:$n).map(e=>({id:e.id,n:e.n,icon:e.icon,cd:e.cd,left:Math.max(0,(g.player?.skillCd[e.id]||0)-g.time),desc:e.desc}))}var it=i=>document.getElementById(i),ll="swordsman",Zc="combat",os="skills",pi=null,$s=null,A_=null,zd=null;function R_(i){let t=di[i];return`<span class="qBadge" style="background:${t.c}33;color:${t.c}">${t.n}</span>`}function rs(i,t="info",e=2400){let n=document.createElement("div");n.className="toast "+t,n.textContent=i,it("toasts").appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity .3s",setTimeout(()=>n.remove(),320)},e)}function C_(i,t,e){if(!g.world)return{x:0,y:0,vis:!1};let n=new F(i,t,e).project(g.world.camera);return{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight,vis:n.z<1&&n.z>-1}}function Hd(){it("panel").classList.add("hidden"),pi&&(pi(),pi=null),g.paused=!1}function Jc(){let i=Zc==="combat"?On:is;it("clsGrid").innerHTML=i.map(t=>`
    <div class="clsCard ${ll===t.id?"on":""}" data-cls="${t.id}">
      <div class="h"><span class="dot" style="background:${t.c}"></span>${t.n}</div>
      <div class="en">${t.en}</div><div class="d">${t.desc}</div>
      <span class="tag">${t.kind==="combat"?"\u2694 "+t.skills.length+" \u4E13\u5C5E\u6280\u80FD":"\u{1F6E0} "+t.play.title}</span>
    </div>`).join(""),it("clsGrid").querySelectorAll("[data-cls]").forEach(t=>t.onclick=()=>{ll=t.dataset.cls,_t.ui(),Jc();let e=ye[ll];rs(e.n+" \xB7 "+e.desc,"info",2600)}),document.querySelectorAll("[data-ctab]").forEach(t=>t.classList.toggle("on",t.dataset.ctab===Zc))}function Cn(){let i=Xs();it("floorNum").textContent="\u7B2C "+i.floor+" \u5C42",it("floorName").textContent=Zn(i.floor).name,it("floorStory").textContent=Zn(i.floor).story,it("hpBar").style.width=Gt(i.hp/i.maxhp*100,0,100)+"%",it("hpLb").textContent=Math.max(0,Math.round(i.hp))+" / "+i.maxhp,it("expBar").style.width=Gt(i.exp/i.expNeed*100,0,100)+"%",it("statLv").textContent="Lv."+i.lv,it("statAtk").textContent="\u2694 "+i.atk,it("statDef").textContent="\u{1F6E1} "+i.def,it("statCls").textContent=i.clsN,it("goldTxt").textContent=i.gold;let t=g.world?.biome?.accent||"#9be36b";document.documentElement.style.setProperty("--accent",t);let e=(i.state==="boss"||i.state==="intro"||i.state==="gate")&&g.boss&&!g.boss.dead;it("bossBar").classList.toggle("hidden",!e),e&&(it("bossName").textContent=g.boss.name,it("bossTitle").textContent=g.boss.title+" \xB7 \u7B2C "+i.floor+" \u5C42",it("bossHpBar").style.width=Gt(i.bossHp/i.bossMax*100,0,100)+"%"),it("btnMenu").style.display=i.state==="title"?"none":""}function as(){let i=kd();it("skillbar").innerHTML=i.map((t,e)=>`
    <div class="sk ${t.id.startsWith("roll")||t.id.startsWith("guard")||t.id.startsWith("bandage")||t.id.startsWith("warcry")?"base":""}"
         data-sk="${e}" title="${t.desc.replace(/"/g,"")}">
      <span class="num">${e+1}</span><span class="ico">${t.icon}</span><span class="nm">${t.n}</span>
      ${t.left>.05?`<span class="cd">${t.left.toFixed(1)}</span>`:""}
    </div>`).join(""),it("skillbar").querySelectorAll("[data-sk]").forEach(t=>t.onclick=()=>{_t.ui(),Vs(+t.dataset.sk)})}function I_(){it("actions").innerHTML=`
    <div class="ab small" data-act="interact"><span class="ico">\u270B</span><span class="nm">\u4EA4\u4E92</span></div>
    <div class="ab small" data-act="roll"><span class="ico">\u{1F300}</span><span class="nm">\u7FFB\u6EDA</span></div>
    <div class="ab small" data-act="guard"><span class="ico">\u{1F6E1}</span><span class="nm">\u683C\u6321</span></div>
    <div class="ab atk" data-act="attack"><span class="ico">\u2694</span><span class="nm">\u653B\u51FB</span></div>`,it("actions").querySelectorAll("[data-act]").forEach(i=>i.onclick=()=>{let t=i.dataset.act;_t.ui(),t==="attack"?jr():t==="interact"?Gs():t==="roll"?Vs(ye[K.cls]?.kind==="combat"?3:0):t==="guard"&&g.player&&(g.player.guard=!g.player.guard,g.player.guard&&(g.player.perfectT=g.time+.35))})}function cl(){let i=it("mapCanvas");if(!i)return;let t=i.getContext("2d"),e=i.width,n=i.height,s=66;t.clearRect(0,0,e,n),t.save(),t.translate(e/2,n/2),t.beginPath(),t.arc(0,0,s*2,0,Math.PI*2),t.fillStyle="rgba(20,38,54,.75)",t.fill(),t.strokeStyle="rgba(255,255,255,.18)",t.lineWidth=2,t.beginPath(),t.arc(0,0,s*2,0,Math.PI*2),t.stroke();let r=Xs(),a=s/62,o=(h,d)=>[h*a,d*a];t.fillStyle="rgba(140,220,160,.55)";for(let h of g.nodes)if(!h.taken){let[d,u]=o(h.x,h.z);t.fillRect(d-1.5,u-1.5,3,3)}t.fillStyle="#ffd070";for(let h of g.chests)if(!h.opened){let[d,u]=o(h.x,h.z);t.fillRect(d-3,u-3,6,6)}for(let h of g.gates){let[d,u]=o(h.x,h.z);t.fillStyle=h.found?h.real?"#ff7a5a":"#7f8fa4":"#8ce0ff",t.beginPath(),t.arc(d,u,h.found?5:4,0,Math.PI*2),t.fill()}t.fillStyle="rgba(255,110,110,.8)";for(let h of g.mobs)if(!h.dead){let[d,u]=o(h.x,h.z);t.beginPath(),t.arc(d,u,2.4,0,Math.PI*2),t.fill()}if(g.boss&&!g.boss.dead){let[h,d]=o(g.boss.x,g.boss.z);t.fillStyle="#ff4a5a",t.beginPath(),t.arc(h,d,7,0,Math.PI*2),t.fill()}let[l,c]=o(r.player.x,r.player.z);t.fillStyle="#fff",t.beginPath(),t.arc(l,c,5,0,Math.PI*2),t.fill(),t.strokeStyle="#7fd8ff",t.lineWidth=2,t.beginPath(),t.arc(l,c,8,0,Math.PI*2),t.stroke(),t.fillStyle="#7fd8ff",t.beginPath(),t.moveTo(l,c-12),t.lineTo(l-4,c-4),t.lineTo(l+4,c-4),t.fill(),t.restore(),t.fillStyle="rgba(220,235,250,.75)",t.font="11px sans-serif",t.textAlign="center",t.fillText("\u7B2C "+r.floor+" \u5C42 \xB7 "+(g.arena?"\u5C42\u4E3B\u4E4B\u95F4":"\u63A2\u7D22\u4E2D"),e/2,n-6)}var Vd=[["skills","\u2694 \u6280\u80FD"],["bag","\u{1F392} \u80CC\u5305"],["equip","\u{1F48D} \u88C5\u5907"],["classes","\u{1F504} \u8F6C\u804C"],["workshop","\u{1F6E0} \u5DE5\u574A"],["codex","\u{1F4D6} \u56FE\u9274"],["settings","\u2699 \u8BBE\u7F6E"]];function Qr(i){os=i||os,it("panel").classList.remove("hidden"),g.paused=!0,it("pTabs").innerHTML=Vd.map(t=>`<button class="pTab ${os===t[0]?"on":""}" data-tab="${t[0]}">${t[1]}</button>`).join(""),it("pTabs").querySelectorAll("[data-tab]").forEach(t=>t.onclick=()=>{_t.ui(),Qr(t.dataset.tab)}),un()}function un(){let i=Object.fromEntries(Vd);it("pTitle").textContent=i[os]||"\u9762\u677F",pi&&(pi(),pi=null);let t=it("pBody");({skills:P_,bag:N_,equip:U_,classes:F_,workshop:O_,codex:k_,settings:z_}[os]||(()=>{}))(t)}function P_(i){let t=ye[K.cls],e=t.kind==="life",n=`<div class="note">\u5F53\u524D\u804C\u4E1A\uFF1A<b>${t.n}</b>\u3002${e?"\u751F\u6D3B\u804C\u4E1A\u4EE5\u91C7\u96C6\u4E0E\u5236\u4F5C\u4E3A\u4E3B\uFF0C\u6218\u6597\u53EA\u4FDD\u7559 4 \u4E2A\u901A\u7528\u57FA\u7840\u6280\u3002":"\u4E0B\u65B9\u4E3A\u300C\u804C\u4E1A\u4E13\u5C5E\u6280\u300D+\u300C\u5168\u804C\u4E1A\u901A\u7528\u57FA\u7840\u6280\u300D\uFF0C\u8F6C\u804C\u540E\u4E13\u5C5E\u6280\u4F1A\u6574\u4F53\u66FF\u6362\u3002"}</div>`;e||(n+='<div style="font-size:12px;font-weight:800;margin:8px 0 6px">\u2605 \u804C\u4E1A\u4E13\u5C5E\u6280</div>',n+=t.skills.map((s,r)=>`<div class="item"><div class="hd"><span class="nm">${s.icon} ${s.n}</span><span class="cost">CD ${s.cd}s \xB7 ${s.kind}</span></div>
      <div class="sub">${s.desc} \xB7 \u4F24\u5BB3\u7CFB\u6570 ${s.dmg||"\u2014"}</div><span class="tag" style="font-size:9px;color:#9fb0c4">\u6309\u952E ${r+1}</span></div>`).join("")),n+='<div style="font-size:12px;font-weight:800;margin:12px 0 6px">\u25C6 \u5168\u804C\u4E1A\u901A\u7528\u57FA\u7840\u6280</div>',n+=$n.map((s,r)=>`<div class="item"><div class="hd"><span class="nm">${s.icon} ${s.n}</span><span class="cost">CD ${s.cd}s</span></div>
    <div class="sub">${s.desc}</div></div>`).join(""),i.innerHTML=n}function L_(){let i=Object.keys(K.mats).filter(t=>K.mats[t]>0);return i.length?'<div class="mats">'+i.map(t=>`<span class="mat">${Ce[t]?.icon||"\u2022"} ${Ce[t]?.n||t} <b style="color:var(--gold)">${K.mats[t]}</b></span>`).join("")+"</div>":'<div class="note">\u8FD8\u6CA1\u6709\u6750\u6599\u3002\u5230\u573A\u666F\u91CC\u627E\u53D1\u5149\u7684\u91C7\u96C6\u70B9\uFF0C\u6309\u4EA4\u4E92\u952E\u91C7\u96C6\uFF1B\u5F00\u5B9D\u7BB1\u548C\u6253\u602A\u4E5F\u4F1A\u7ED9\u3002</div>'}function D_(i,t,e){let n=Object.entries(i.stats).filter(([s,r])=>r>0&&s!=="elem"&&s!=="leech"&&s!=="luck").map(([s,r])=>`${Xr[s]||s} +${typeof r=="number"&&r<1?(r*100).toFixed(0)+"%":Math.round(r)}`).slice(0,3).join(" \xB7 ");return`<div class="item"><div class="hd"><span class="nm">${R_(i.q)}${i.name}</span><span class="cost">${i.price} \u91D1</span></div>
    <div class="sub">${Wr.find(s=>s.id===i.slot)?.n||i.slot} \xB7 Lv.${i.lv} \xB7 ${n||"\u57FA\u7840\u5C5E\u6027"}${i.aff.length?" \xB7 "+i.aff.map(s=>s.n).join("/"):""}</div>
    ${e==="bag"?`<button class="btn sm" data-eq="${i.uid}">\u88C5\u5907</button><button class="btn sec sm" data-sell="${i.uid}">\u51FA\u552E</button>`:""}
    ${e==="equip"?`<button class="btn sec sm" data-un="${i.slot}">\u5378\u4E0B</button>`:""}</div>`}function N_(i){let t=K.consumables||[],e=`<div class="note">\u{1F4B0} ${K.gold} \u91D1 \xB7 \u80CC\u5305 ${K.bag.length} \u4EF6 \xB7 \u6D88\u8017\u54C1 ${t.length} \u4EF6</div>`;e+='<div style="font-size:12px;font-weight:800;margin:8px 0">\u6750\u6599</div>'+L_(),e+='<div style="font-size:12px;font-weight:800;margin:12px 0 6px">\u{1F9EA} \u5236\u54C1 / \u6D88\u8017\u54C1</div>',e+=t.length?t.map((n,s)=>`<div class="item"><div class="hd"><span class="nm">${n.icon} ${n.n}</span><span class="cost">\u54C1\u8D28 ${(n.q*100).toFixed(0)}%</span></div>
      <div class="sub">${n.buff?Xr[n.buff.stat]||n.buff.stat:"\u589E\u76CA"} +${Math.round((n.buff?.v||0)*100)}% \xB7 \u4F7F\u7528\u540E 120 \u79D2\u751F\u6548</div>
      <button class="btn sm" data-use="${s}">\u4F7F\u7528</button></div>`).join(""):'<div class="sub" style="color:var(--sub)">\u6682\u65E0\u3002\u53BB\u300C\u5DE5\u574A\u300D\u7528\u751F\u6D3B\u804C\u4E1A\u73A9\u6CD5\u5236\u4F5C\u3002</div>',e+='<div style="font-size:12px;font-weight:800;margin:12px 0 6px">\u2694 \u88C5\u5907\u6389\u843D</div>',e+=K.bag.length?K.bag.map((n,s)=>D_(n,s,"bag")).join(""):'<div class="sub" style="color:var(--sub)">\u6682\u65E0\u88C5\u5907\u3002\u6253\u602A\u3001\u5F00\u5B9D\u7BB1\u3001\u8BA8\u4F10\u5C42\u4E3B\u90FD\u4F1A\u6389\u843D\u3002</div>',i.innerHTML=e,i.querySelectorAll("[data-eq]").forEach(n=>n.onclick=()=>{al(n.dataset.eq),un()}),i.querySelectorAll("[data-sell]").forEach(n=>n.onclick=()=>{ol(n.dataset.sell),un()}),i.querySelectorAll("[data-use]").forEach(n=>n.onclick=()=>{rl(+n.dataset.use),un()})}function U_(i){let t='<div class="note">\u88C5\u5907\u6309\u54C1\u8D28\uFF08\u7C97\u52A3\u2192\u795E\u8BDD\uFF09\u63D0\u5347\u5C5E\u6027\uFF0C\u8BCD\u7F00\u4F1A\u8FFD\u52A0\u66B4\u51FB\u3001\u6389\u7387\u3001\u5143\u7D20\u3001\u5438\u8840\u7B49\u3002\u70B9\u51FB\u80CC\u5305\u91CC\u7684\u88C5\u5907\u5373\u53EF\u7A7F\u6234\u3002</div>';t+='<div class="grid2">';for(let n of Wr){let s=K.equip[n.id];t+=`<div class="item"><div class="hd"><span class="nm">${n.icon} ${n.n}</span><span class="cost">${s?di[s.q].n:"\u7A7A"}</span></div>
      ${s?`<div class="sub">${s.name}</div><div class="sub">${Object.entries(s.stats).filter(([r,a])=>a>0).map(([r,a])=>`${Xr[r]||r} +${a<1?(a*100).toFixed(0)+"%":Math.round(a)}`).join(" \xB7 ")}</div>
      <button class="btn sec sm" data-un="${n.id}">\u5378\u4E0B</button>`:'<div class="sub" style="color:var(--sub)">\u672A\u88C5\u5907</div>'}</div>`}t+="</div>";let e=Xs();t+=`<div class="resultBox"><div class="r1">\u2694 ${e.atk} \xB7 \u{1F6E1} ${e.def} \xB7 \u2764 ${e.maxhp}</div>
    <div class="r2">\u5F53\u524D\u603B\u5C5E\u6027\uFF08\u542B\u804C\u4E1A\u7CFB\u6570\u3001\u88C5\u5907\u8BCD\u7F00\u4E0E\u5236\u54C1\u589E\u76CA\uFF09</div></div>`,i.innerHTML=t,i.querySelectorAll("[data-un]").forEach(n=>n.onclick=()=>{let s=n.dataset.un,r=K.equip[s];r&&(K.bag.push(r),delete K.equip[s],Ie(),_t.ui(),un(),Cn())})}function F_(i){let t=(e,n)=>`<div style="font-size:12px;font-weight:800;margin:12px 0 6px">${n}</div><div class="grid2">`+e.map(s=>`<div class="item" style="${K.cls===s.id?"border-color:var(--accent)":""}">
      <div class="hd"><span class="nm"><span class="dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${s.c};margin-right:5px"></span>${s.n}</span>
      <span class="cost">${K.cls===s.id?"\u5F53\u524D":""}</span></div>
      <div class="sub">${s.desc}</div>
      ${s.kind==="life"?`<div class="sub">\u{1F6E0} ${s.play.title} \xB7 ${s.out.n}</div>`:`<div class="sub">\u2694 ${s.skills.map(r=>r.n).join(" / ")}</div>`}
      <button class="btn sm ${K.cls===s.id?"sec":""}" data-set="${s.id}" ${K.cls===s.id?"disabled":""}>\u8F6C\u804C</button></div>`).join("")+"</div>";i.innerHTML='<div class="note">\u968F\u65F6\u514D\u8D39\u8F6C\u804C\uFF0C\u7B49\u7EA7\u3001\u88C5\u5907\u3001\u6750\u6599\u3001\u751F\u6D3B\u804C\u4E1A\u8FDB\u5EA6\u5168\u90E8\u4FDD\u7559\u3002\u751F\u6D3B\u804C\u4E1A\u4E5F\u80FD\u8FDB\u573A\u666F\uFF0C\u53EA\u662F\u6218\u6597\u53EA\u7528\u901A\u7528\u57FA\u7840\u6280\uFF0C\u4F46\u91C7\u96C6\u7FFB\u500D\u3002</div>'+t(On,"\u2694 \u6218\u6597\u804C\u4E1A \xB7 14")+t(is,"\u{1F6E0} \u751F\u6D3B\u804C\u4E1A \xB7 24"),i.querySelectorAll("[data-set]").forEach(e=>e.onclick=()=>{Kr(e.dataset.set),un(),Cn(),as()})}function O_(i){if(!$s){i.innerHTML=`<div class="note">\u6BCF\u4E2A\u751F\u6D3B\u804C\u4E1A\u90FD\u6709<b>\u4E0D\u540C\u7684\u4E00\u5957\u73A9\u6CD5</b>\uFF1A\u914D\u6BD4\u8C03\u5408 / \u8282\u594F\u65F6\u673A / \u5DE5\u5E8F\u8BB0\u5FC6 / \u884C\u60C5\u4EA4\u6613 / \u7ED3\u6784\u62FC\u88C5 / \u9650\u65F6\u91C7\u96C6\u3002\u9009\u4E00\u4E2A\u5F00\u59CB\uFF08\u4E0D\u5FC5\u5148\u8F6C\u804C\uFF1B\u672C\u804C\u8EAB\u4EFD\u4EA7\u51FA\u66F4\u9AD8\uFF09\u3002</div>
      <div class="mats">${Object.keys(K.mats).filter(n=>K.mats[n]>0).map(n=>`<span class="mat">${Ce[n]?.icon} ${Ce[n]?.n} <b style="color:var(--gold)">${K.mats[n]}</b></span>`).join("")||'<span class="mat">\u6682\u65E0\u6750\u6599\uFF0C\u4ECD\u53EF\u8BD5\u73A9\uFF08\u4EA7\u51FA\u51CF\u534A\uFF09</span>'}</div>
      <div class="grid2">`+is.map(n=>`<div class="item">
        <div class="hd"><span class="nm"><span class="dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${n.c};margin-right:5px"></span>${n.icon} ${n.n}</span>
        <span class="cost">Lv.${K.lifeLv?.[n.id]||1}</span></div>
        <div class="sub">${n.play.title} \xB7 \u4EA7\u51FA ${n.out.icon} ${n.out.n}</div>
        <div class="sub">\u6750\u6599\uFF1A${n.mats.map(s=>Ce[s]?.n||s).join(" / ")}</div>
        <button class="btn sm" data-life="${n.id}">\u5F00\u59CB\u73A9\u6CD5</button></div>`).join("")+"</div>",i.querySelectorAll("[data-life]").forEach(n=>n.onclick=()=>{_t.ui(),$s=n.dataset.life,un()});return}let t=ye[$s],e=t.play;i.innerHTML=`<button class="btn sec sm" id="lifeBack">\u2190 \u8FD4\u56DE\u804C\u4E1A\u5217\u8868</button>
    <div style="font-size:15px;font-weight:800;margin:10px 0 2px">${t.icon} ${t.n} \xB7 ${e.title}</div>
    <div class="note">${e.hint}</div>
    <div class="mats">${t.mats.map(n=>`<span class="mat">${Ce[n]?.icon} ${Ce[n]?.n} <b style="color:var(--gold)">${K.mats[n]||0}</b></span>`).join("")}</div>
    <div class="playStage" id="playStage"></div>
    <div id="lifeResult"></div>`,it("lifeBack").onclick=()=>{$s=null,un()},B_[e.kind]?.(t,e,it("playStage"),it("lifeResult"))}function qs(i,t,e){let n=Vr(K.cls)&&K.cls===i.id,s=n?1:.72,r=sl(i.id,t*s,i.out);it("lifeResult").innerHTML=`<div class="resultBox"><div class="r1">${t>.85?"\u2605 \u5B8C\u7F8E\uFF01":t>.6?"\u25C6 \u826F\u597D":t>.3?"\u25C7 \u5408\u683C":"\xB7 \u52C9\u5F3A\u5B8C\u6210"}</div>
    <div class="r2">${e}<br>\u83B7\u5F97 <b>${i.out.icon} ${i.out.n} \xD7${r.amount}</b> \xB7 +${r.gold} \u91D1 \xB7 ${i.n} Lv.${r.lv}${n?"":"<br>\uFF08\u975E\u672C\u804C\uFF0C\u4EA7\u51FA \xD70.72\uFF1B\u8F6C\u804C\u53EF\u62FF\u6EE1\uFF09"}</div>
    <button class="btn" id="lifeAgain" style="margin-top:10px">\u518D\u6765\u4E00\u6B21</button></div>`,it("lifeAgain").onclick=()=>un(),Cn()}function Ys(i,t){let e=i.play.cost||{};if(Object.entries(e).some(([s,r])=>(K.mats[s]||0)<r))return t.insertAdjacentHTML("afterbegin",'<div class="note" style="border-color:#ff9a7a">\u6750\u6599\u4E0D\u8DB3\uFF0C\u8FDB\u5165\u7EC3\u4E60\u6A21\u5F0F\uFF1A\u73A9\u6CD5\u7167\u5E38\uFF0C\u4F46\u672C\u6B21\u4E0D\u6D88\u8017\u6750\u6599\u3001\u4EA7\u51FA\u51CF\u534A\u3002\u5230\u573A\u666F\u91C7\u96C6\u6216\u5F00\u5B9D\u7BB1\u53EF\u8865\u5145\u3002</div>'),!1;for(let s in e)K.mats[s]-=e[s];return Ie(),!0}var $c=["\u{1F33F}","\u26CF","\u{1F4A7}","\u{1F525}","\u2699","\u{1F338}","\u{1FAB5}","\u{1F376}","\u2728","\u{1F529}","\u{1F9F5}","\u{1F4DC}"],B_={ratio(i,t,e){let n=t.sliders||3,s=t.target,r=i.mats.slice(0,n).map(l=>Ce[l]?.n||l),a=new Array(n).fill(Math.round(100/n));e.innerHTML=`<div class="playTitle">\u2697 \u6750\u6599\u914D\u6BD4</div><div class="playHint">\u62D6\u52A8\u6ED1\u5757\u8C03\u6574\u6BD4\u4F8B\uFF0C\u51D1\u8FD1\u9690\u85CF\u914D\u65B9\u3002\u5BB9\u5DEE ${t.tol}%\uFF0C\u504F\u5DEE\u8D8A\u5C0F\u54C1\u8D28\u8D8A\u9AD8\u3002</div>`+Array.from({length:n},(l,c)=>`<div class="sliderRow"><label>${r[c]||"\u6750\u6599"+(c+1)}</label>
        <input type="range" min="0" max="100" value="${a[c]}" data-sl="${c}"><span class="val" data-v="${c}">${a[c]}%</span></div>`).join("")+`<div style="font-size:11px;color:var(--sub);margin-top:6px">\u5408\u8BA1 <b id="sumV">100</b>%</div>
       <button class="btn" id="ratioGo">\u5F00\u59CB\u8C03\u5408</button>`;let o=()=>{e.querySelectorAll("[data-sl]").forEach(l=>{a[+l.dataset.sl]=+l.value,e.querySelector(`[data-v="${l.dataset.sl}"]`).textContent=l.value+"%"}),it("sumV").textContent=a.reduce((l,c)=>l+c,0)};e.querySelectorAll("[data-sl]").forEach(l=>l.oninput=o),it("ratioGo").onclick=()=>{let l=a.reduce((y,m)=>y+m,0)||1,c=a.map(y=>y/l*100),h=c.reduce((y,m,p)=>y+Math.abs(m-(s[p]||0)),0),d=Gt(1-h/(t.tol*4),0,1),u=Ys(i,e);_t.craft(d>.5?"success":"fail");let f=i.id+"_"+c.map(y=>Math.round(y/10)*10).join("-"),x=!K.recipes[f];K.recipes[f]=Math.max(K.recipes[f]||0,d),Ie(),qs(i,d*(u?1:.5),`\u914D\u6BD4 ${c.map(y=>y.toFixed(0)+"%").join(" : ")} \xB7 \u504F\u5DEE ${h.toFixed(1)}%${x?' \xB7 <b style="color:var(--gold)">\u53D1\u73B0\u65B0\u914D\u6BD4\u8BB0\u5F55</b>':""}`)}},timing(i,t,e){let n=t.hits,[s,r]=t.target,a=t.speed||1,o=0,l=1,c=0,h=0,d=!0;e.innerHTML=`<div class="playTitle">\u{1F528} ${t.unit}\u63A7\u5236 \xB7 \u8FDE\u7EED ${n} \u6B21</div>
      <div class="playHint">\u6307\u9488\u5F80\u590D\u79FB\u52A8\uFF0C\u5728\u5B83\u8FDB\u5165<span style="color:#7fe0a0">\u7EFF\u8272\u533A\u95F4</span>\u65F6\u6309\u4E0B\u6309\u94AE\u3002\u8FDE\u7EED\u547D\u4E2D\u8D8A\u591A\uFF0C\u54C1\u8D28\u8D8A\u9AD8\u3002</div>
      <div class="timingTrack" id="track"><div class="timingZone" id="zone"></div><div class="timingNeedle" id="needle"></div></div>
      <div style="display:flex;justify-content:space-between;font-size:11px"><span>\u8FDB\u5EA6 <b id="hitN">0</b> / ${n}</span><span>\u7CBE\u5EA6 <b id="accN">\u2014</b></span></div>
      <button class="btn" id="timeHit" style="margin-top:10px">${t.unit==="\u7089\u6E29"?"\u843D \u9524":t.unit==="\u8282\u62CD"?"\u6309 \u62CD":"\u6267 \u884C"}</button>`,it("zone").style.left=s+"%",it("zone").style.width=r-s+"%";let u,f=performance.now(),x=y=>{if(!d)return;let m=Math.min(.05,(y-f)/1e3);f=y,o+=l*62*a*m,o>=100&&(o=100,l=-1),o<=0&&(o=0,l=1);let p=it("needle");p&&(p.style.left=o+"%"),u=requestAnimationFrame(x)};u=requestAnimationFrame(x),pi=()=>{d=!1,cancelAnimationFrame(u)},it("timeHit").onclick=()=>{if(c>=n)return;let y=(s+r)/2,m=(r-s)/2,p=Math.abs(o-y),v=o>=s&&o<=r,T=Gt(1-p/(m*2.2),0,1);h+=v?T:0,c++,_t.craft(v?"mine":"fail"),it("hitN").textContent=c,it("accN").textContent=(h/c*100).toFixed(0)+"%";let w=document.createElement("div");if(w.className="timingMark",w.style.left=o+"%",w.style.background=v?"#7fe0a0":"#ff7a7a",it("track").appendChild(w),c>=n){d=!1,cancelAnimationFrame(u);let R=Gt(h/n,0,1),E=Ys(i,e);qs(i,R*(E?1:.5),`\u8FDE\u7EED ${n} \u6B21 \xB7 \u5E73\u5747\u7CBE\u5EA6 ${(R*100).toFixed(0)}%`)}}},sequence(i,t,e){let n=t.steps,s=Array.from({length:n},()=>Ui($c.length)),r="show",a=0,o=0;e.innerHTML=`<div class="playTitle">\u{1F4CB} \u5DE5\u5E8F\u987A\u5E8F\uFF08${n} \u6B65\uFF09</div>
      <div class="playHint">\u5148\u8BB0\u4F4F\u95EA\u73B0\u7684\u5DE5\u5E8F\u987A\u5E8F\uFF0C\u518D\u6309\u76F8\u540C\u987A\u5E8F\u70B9\u56DE\u53BB\u3002\u70B9\u9519\u4F1A\u8BB0\u4E00\u6B21\u5931\u8BEF\u3002</div>
      <div class="seqGrid" id="seqShow"></div>
      <div style="font-size:11px;color:var(--sub)" id="seqInfo">\u8BB0\u5FC6\u4E2D\u2026\u2026</div>
      <div class="seqGrid" id="seqBtns"></div>`;let l=it("seqShow");l.innerHTML=s.map(h=>`<div class="seqBtn flash">${$c[h]}</div>`).join(""),it("seqBtns").innerHTML=$c.map((h,d)=>`<div class="seqBtn" data-i="${d}">${h}</div>`).join("");let c=setTimeout(()=>{r="input",l.querySelectorAll(".seqBtn").forEach((h,d)=>{h.classList.remove("flash"),h.textContent=d===0?"\u2460":"?"}),it("seqInfo").textContent="\u6309\u987A\u5E8F\u70B9\u51FB\u4E0B\u65B9\u7684\u5DE5\u5E8F\u6309\u94AE",it("seqBtns").querySelectorAll("[data-i]").forEach(h=>h.onclick=()=>{if(r!=="input")return;let d=+h.dataset.i,u=s[a]===d;if(h.classList.add("on"),setTimeout(()=>h.classList.remove("on"),180),_t.ui(u?"tap":"err"),u||o++,a++,l.querySelectorAll(".seqBtn")[a-1].textContent=u?"\u2713":"\u2717",it("seqInfo").textContent=`\u8FDB\u5EA6 ${a} / ${n} \xB7 \u5931\u8BEF ${o}`,a>=n){r="done";let f=Gt((n-o)/n,0,1),x=Ys(i,e);qs(i,f*(x?1:.5),`\u5DE5\u5E8F ${n} \u6B65 \xB7 \u5931\u8BEF ${o} \u6B21`)}})},1800+n*120);pi=()=>clearTimeout(c)},market(i,t,e){let n=t.goods,s=t.volatility,r=Object.fromEntries(n.map(u=>[u,24+Ui(50)])),a={},o={};n.forEach(u=>{let f=Math.round(ot(-s,s)*r[u]);a[u]=Math.max(6,r[u]+f),o[u]=f});let l=0,c=0,h=0,d=()=>{e.innerHTML=`<div class="playTitle">\u{1F4B1} \u672C\u5C42\u884C\u60C5</div>
        <div class="playHint">\u4F4E\u4F4D\u4E70\u5165\u3001\u6DA8\u540E\u5356\u51FA\u3002\u6BCF\u5C42\u7269\u4EF7\u4F1A\u6CE2\u52A8\uFF0C\u7ED3\u7B97\u65F6\u6309\u5DF2\u5B9E\u73B0\u5229\u6DA6\u7ED9\u5546\u8A89\u4E0E\u91D1\u5E01\u3002</div>
        <div>\u{1F4B0} <b>${K.gold}</b> \u91D1 \xB7 \u5DF2\u6295\u5165 ${l} \xB7 \u5DF2\u56DE\u6536 ${c} \xB7 \u6210\u4EA4 ${h} \u7B14</div>`+n.map(u=>`<div class="marketRow"><div><b>${Ce[u]?.icon||"\u2022"} ${Ce[u]?.n||u}</b>
          <div class="sub" style="font-size:9px">\u6301\u6709 ${K.mats[u]||0} \xB7 \u5356\u4EF7 ${Math.floor(a[u]*.85)}</div></div>
          <div style="text-align:right"><div class="cost">${a[u]} \u91D1 ${o[u]>0?`<span class="up">\u25B2+${o[u]}</span>`:o[u]<0?`<span class="down">\u25BC${o[u]}</span>`:'<span class="dim">\u2014</span>'}</div>
          <button class="btn sec sm" data-buy="${u}">\u4E70</button><button class="btn sec sm" data-sell="${u}">\u5356</button></div></div>`).join("")+'<button class="btn" id="mkDone" style="margin-top:10px">\u7ED3\u7B97\u79BB\u573A</button>',e.querySelectorAll("[data-buy]").forEach(u=>u.onclick=()=>{let f=u.dataset.buy;if(K.gold<a[f]){_t.ui("err");return}K.gold-=a[f],K.mats[f]=(K.mats[f]||0)+1,l+=a[f],h++,_t.coin(),Ie(),d(),Cn()}),e.querySelectorAll("[data-sell]").forEach(u=>u.onclick=()=>{let f=u.dataset.sell;if((K.mats[f]||0)<1){_t.ui("err");return}K.mats[f]--;let x=Math.floor(a[f]*.85);K.gold+=x,c+=x,h++,_t.coin(2),Ie(),d(),Cn()}),it("mkDone").onclick=()=>{let u=c-l,f=Gt(.3+u/90+Math.min(h,10)*.035,0,1),x=Ys(i,e);_t.craft("success"),qs(i,f*(x?1:.5),`\u6210\u4EA4 ${h} \u7B14 \xB7 \u51C0\u76C8\u4E8F ${u>=0?"+":""}${u} \u91D1`)}};d()},assemble(i,t,e){let n=t.grid,s=t.target,r=new Array(n*n).fill(0);e.innerHTML=`<div class="playTitle">\u{1F9E9} \u7ED3\u6784\u62FC\u88C5</div>
      <div class="playHint">\u70B9\u51FB\u683C\u5B50\u653E\u7F6E\u6A21\u5757\uFF0C\u8BA9<b>\u8FDE\u901A\u5757</b>\u8FBE\u5230 ${s} \u683C\u3002\u8FDE\u901A\u8D8A\u5927\u7ED3\u6784\u8D8A\u7A33\u3002</div>
      <div class="aseGrid" id="ase" style="grid-template-columns:repeat(${n},1fr);width:${n*48}px"></div>
      <div style="font-size:11px">\u6700\u5927\u8FDE\u901A\u5757 <b id="aseN">0</b> / ${s}</div>
      <button class="btn" id="aseDone" style="margin-top:8px">\u5B8C\u6210\u7ED3\u6784</button>`;let a=it("ase"),o=()=>{let c=0,h=new Set;for(let d=0;d<r.length;d++){if(!r[d]||h.has(d))continue;let u=0,f=[d];for(h.add(d);f.length;){let x=f.pop();u++;let y=x%n,m=Math.floor(x/n);for(let[p,v]of[[1,0],[-1,0],[0,1],[0,-1]]){let T=y+p,w=m+v,R=w*n+T;T>=0&&T<n&&w>=0&&w<n&&r[R]&&!h.has(R)&&(h.add(R),f.push(R))}}c=Math.max(c,u)}return c},l=()=>{a.innerHTML=r.map((c,h)=>`<div class="aseCell ${c?"on":""}" data-i="${h}">${c?"\u25C6":""}</div>`).join(""),a.querySelectorAll("[data-i]").forEach(c=>c.onclick=()=>{let h=+c.dataset.i;r[h]=!r[h],_t.ui(),l()}),it("aseN").textContent=o()};l(),it("aseDone").onclick=()=>{let c=o(),h=Gt(c/s,0,1),d=Ys(i,e);_t.craft(h>=1?"success":"hit"),qs(i,h*(d?1:.5),`\u6700\u5927\u8FDE\u901A\u5757 ${c} / \u76EE\u6807 ${s}`)}},collect(i,t,e){let n=t.targets,s=t.time,r=0,a=s,o=!0;e.innerHTML=`<div class="playTitle">\u{1F33E} \u9650\u65F6\u91C7\u6536 / \u9A6F\u517B</div>
      <div class="playHint">${s} \u79D2\u5185\u70B9\u4E2D <b>${n}</b> \u4E2A\u76EE\u6807\uFF0C\u8D8A\u5FEB\u70B9\u5B8C\u54C1\u8D28\u8D8A\u9AD8\u3002</div>
      <div style="display:flex;justify-content:space-between;font-size:11px"><span>\u547D\u4E2D <b id="colN">0</b> / ${n}</span><span>\u5269\u4F59 <b id="colT">${s}</b>s</span></div>
      <div class="collectField" id="field"></div>`;let l=it("field"),c=()=>{if(!o)return;l.innerHTML=`<div class="collectDot" id="dot" style="left:${ot(10,90)}%;top:${ot(12,88)}%">${i.icon}</div>`;let u=it("dot");u&&(u.onclick=()=>{if(r++,_t.craft("mine"),it("colN").textContent=r,r>=n){d();return}c()})},h=setInterval(()=>{a-=.1,it("colT").textContent=Math.max(0,a).toFixed(1),a<=0&&d()},100),d=()=>{if(!o)return;o=!1,clearInterval(h);let u=Gt(r/n*.7+a/s*.3,0,1),f=Ys(i,e);_t.craft("success"),qs(i,u*(f?1:.5),`\u547D\u4E2D ${r} / ${n} \xB7 \u7528\u65F6 ${(s-a).toFixed(1)}s`)};pi=()=>{o=!1,clearInterval(h)},c()}};function k_(i){let t=K.best,e=`<div class="note">\u5DF2\u62B5\u8FBE <b>\u7B2C ${t} \u5C42</b> \xB7 \u5DF2\u8BA8\u4F10\u5C42\u4E3B <b>${K.arenaWins||0}</b> \u6B21 \xB7 \u7D2F\u8BA1\u51FB\u5012 <b>${K.kills||0}</b> \u53EA\u9B54\u7269\u3002100 \u5C42\u300116 \u79CD\u5730\u8C8C\u3001100 \u540D\u5C42\u4E3B\u3002</div>
    <div style="font-size:12px;font-weight:800;margin:8px 0">\u5730\u8C8C\u56FE\u9274</div><div class="grid2">`+Hs.map(n=>`<div class="item"><div class="hd"><span class="nm"><span class="dot" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${n.accent};margin-right:6px"></span>${n.n}</span></div>
      <div class="sub">${n.flora} / ${n.tree} / ${n.particle} \xB7 ${n.ambience}</div></div>`).join("")+"</div>";e+=`<div style="font-size:12px;font-weight:800;margin:14px 0 6px">\u697C\u5C42\u4E0E\u5C42\u4E3B\uFF08\u5DF2\u89E3\u9501 ${t}/100\uFF09</div><div class="grid2">`+Zo.slice(0,Math.max(10,t)).map(n=>`<div class="item" style="padding:7px 10px">
      <div class="hd"><span class="nm" style="font-size:11px">\u7B2C ${n.f} \u5C42 \xB7 ${n.name}</span></div>
      <div class="sub" style="font-size:9px">${Hs.find(s=>s.id===n.biome)?.n} \xB7 ${n.landmark?"\u2605 \u5C42\u4E3B":"\u63A2\u7D22"}</div></div>`).join("")+"</div>",i.innerHTML=e}function z_(i){i.innerHTML=`<div class="note">\u6E38\u620F\u8FDB\u5EA6\u81EA\u52A8\u4FDD\u5B58\u5728\u672C\u673A\u3002\u6A2A\u5C4F\u4F53\u9A8C\u6700\u4F73\uFF0C\u53EF\u628A\u672C\u9875\u300C\u6DFB\u52A0\u5230\u4E3B\u5C4F\u5E55\u300D\u5F53\u4F5C APP \u5168\u5C4F\u8FD0\u884C\u3002</div>
    <div class="item"><div class="hd"><span class="nm">\u{1F3B5} \u80CC\u666F\u97F3\u4E50</span><span class="cost">${_t.musicOn?"\u5F00":"\u5173"}</span></div>
      <div class="sub">\u6781\u7B80\u6C1B\u56F4\u66F2\uFF0C\u968F\u573A\u666F\u5207\u6362</div><button class="btn sm" id="setMusic">\u5207\u6362</button></div>
    <div class="item"><div class="hd"><span class="nm">\u{1F5A5} \u753B\u8D28</span><span class="cost">${g.quality>=1?"\u9AD8":"\u7701\u7535"}</span></div>
      <div class="sub">\u5F71\u54CD\u8349\u91CF\u3001\u7C92\u5B50\u6570\u4E0E\u9634\u5F71\u5206\u8FA8\u7387\uFF0C\u5207\u6362\u540E\u4E0B\u4E00\u5C42\u751F\u6548</div><button class="btn sm" id="setQ">\u5207\u6362</button></div>
    <div class="item"><div class="hd"><span class="nm">\u{1F3AE} \u64CD\u4F5C</span></div><div class="sub">
      <b>\u624B\u673A\uFF1A</b>\u5DE6\u534A\u5C4F\u4EFB\u610F\u4F4D\u7F6E\u6309\u4F4F\u51FA\u73B0\u6447\u6746\u79FB\u52A8\uFF1B\u53F3\u534A\u5C4F\u62D6\u52A8\u65CB\u8F6C\u89C6\u89D2\uFF1B\u53F3\u4E0B\u6309\u94AE\u653B\u51FB/\u6280\u80FD/\u4EA4\u4E92\uFF1B\u8D70\u8FD1\u53D1\u5149\u7269\u81EA\u52A8\u63D0\u793A\u4EA4\u4E92\u3002<br>
      <b>\u7535\u8111\uFF1A</b>WASD \u79FB\u52A8 \xB7 \u9F20\u6807\u62D6\u52A8\u8F6C\u89C6\u89D2 \xB7 \u6EDA\u8F6E\u62C9\u8FD1\u62C9\u8FDC \xB7 \u7A7A\u683C\u653B\u51FB \xB7 1~5 \u6280\u80FD \xB7 E \u4EA4\u4E92 \xB7 Shift \u7FFB\u6EDA \xB7 \u6309\u4F4F Q \u683C\u6321 \xB7 M \u97F3\u4E50\u3002</div></div>
    <div class="item"><div class="hd"><span class="nm">\u{1F504} \u91CD\u7F6E\u8FDB\u5EA6</span></div>
      <div class="sub">\u6E05\u7A7A\u7B49\u7EA7\u3001\u88C5\u5907\u3001\u6750\u6599\u4E0E\u5C42\u6570</div><button class="btn sec sm" id="setReset">\u91CD\u7F6E\u5B58\u6863</button></div>`,it("setMusic").onclick=()=>{_t.toggleMusic(!_t.musicOn),K.music=_t.musicOn,Ie(),un()},it("setQ").onclick=()=>{g.quality=g.quality>=1?.55:1,g.world&&(g.world.quality=g.quality),rs("\u753B\u8D28\u5DF2\u5207\u6362\uFF0C\u4E0B\u4E00\u5C42\u751F\u6548","info"),un()},it("setReset").onclick=()=>{confirm("\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u8FDB\u5EA6\uFF1F")&&(Ad(),location.reload())}}function H_(){g.on("hud",Cn),g.on("skills",as),g.on("bag",()=>{!it("panel").classList.contains("hidden")&&["bag","equip"].includes(os)&&un()}),g.on("class",()=>{Cn(),as()}),g.on("floor",i=>{Cn(),as(),cl(),it("gateFx").style.opacity="0",it("bossIntro").classList.add("hidden"),rs("\u7B2C "+i.f+" \u5C42 \xB7 "+i.name+"\uFF08"+i.biome+"\uFF09","info",3200)}),g.on("toast",i=>rs(i.text,i.kind||"info",i.dur||2400)),g.on("float",i=>{let t=C_(i.x,i.y,i.z);if(!t.vis)return;let e=document.createElement("div");e.className="flt"+(i.big?" big":""),e.textContent=i.text,e.style.left=t.x+"px",e.style.top=t.y+"px",i.c&&(e.style.color=i.c),it("floats").appendChild(e),setTimeout(()=>e.remove(),1e3)}),g.on("combo",i=>{let t=it("combo");i>=2?(t.textContent=i+" COMBO",t.classList.add("on")):t.classList.remove("on")}),g.on("joy",i=>{let t=it("joy"),e=it("joyKnob");if(!i.show){t.classList.remove("on"),e.style.transform="";return}t.classList.add("on"),t.style.left=i.x-58+"px",t.style.top=i.y-58+"px",i.knob}),g.on("interactHint",i=>{let t=it("interactHint"),e=JSON.stringify(i)===zd;if(zd=JSON.stringify(i),!e){if(!i){t.classList.add("hidden");return}t.classList.remove("hidden"),t.innerHTML=`<span class="k">E</span>${i.label}`,t.onclick=()=>{_t.ui(),Gs()}}}),g.on("minimap",cl),g.on("bossIntro",i=>{let t=it("bossIntro");t.classList.remove("hidden");let e={fire:"\u4E1A\u706B",ice:"\u971C\u5BD2",dark:"\u6697\u8680",light:"\u5723\u8F89",wind:"\u75BE\u98CE",thunder:"\u96F7\u9706"}[i.elem]||"";t.innerHTML=`<div class="bi1">BOSS \u964D\u4E34 \xB7 \u7B2C ${g.floor} \u5C42</div>
      <div class="bi2">${i.name}</div><div class="bi3">${i.title} \xB7 ${e}\u4E4B\u76F8</div>
      <div class="bi4"><i style="animation-duration:${i.dur}s"></i></div>
      ${i.track?`<div style="margin-top:18px;font-size:12px;letter-spacing:1px;color:#d5def0;opacity:.92">\u266B \u5C42\u4E3B\u4E13\u5C5E\u6218\u6597\u66F2 \xB7 ${i.track}<div style="font-size:10px;color:#8fa2bb;margin-top:5px;letter-spacing:2px">${i.trackInfo||""}</div></div>`:""}`,it("toasts").style.opacity="0",it("bossBar").style.opacity="0",setTimeout(()=>{t.classList.add("hidden"),it("toasts").style.opacity="1",it("bossBar").style.opacity="1"},i.dur*1e3),Cn()}),g.on("bosshp",()=>Cn()),g.on("bossSkill",()=>{let i=it("dmgFlash");i.style.opacity=".5",setTimeout(()=>i.style.opacity="0",220)}),g.on("bossDone",()=>{it("bossBar").classList.add("hidden"),rs("\u901A\u5F80\u4E0B\u4E00\u5C42\u7684\u95E8\u5DF2\u5F00\u542F\u2026\u2026","ok",3200)}),g.on("gateFx",i=>{it("gateFx").style.opacity=String(Gt((i-.55)/.45,0,1))}),g.on("gateFound",()=>{rs("\u95E8\u540E\u4F20\u6765\u6C89\u91CD\u7684\u547C\u5438\u58F0\u2026\u2026","warn",2600)}),g.on("dead",i=>{it("dead").classList.remove("hidden"),it("deadFloor").textContent=i.floor}),g.on("state",()=>{Cn(),cl(),g.state!=="intro"&&g.state!=="title"&&(it("toasts").style.opacity="1",it("bossBar").style.opacity="1")}),g.on("ending",()=>{rs("\u2605 \u4F60\u5DF2\u767B\u9876\u7B2C 100 \u5C42\uFF0C\u6D6E\u6E38\u57CE\u653B\u7565\u5B8C\u6210\uFF01","ok",8e3)}),g.on("skills",()=>{setTimeout(as,60)})}function Wd(){Cd(it("gl")),H_(),Jc(),as(),I_(),Cn(),it("contFloor").textContent=K.floor,document.querySelectorAll("[data-ctab]").forEach(i=>i.onclick=()=>{Zc=i.dataset.ctab,_t.ui(),Jc()}),it("btnStart").onclick=()=>Gd(ll,1),it("btnContinue").onclick=()=>Gd(K.cls,K.floor),it("btnHelp").onclick=()=>{it("title").classList.add("hidden"),Qr("settings")},it("btnMenu").onclick=()=>{_t.ui(),Qr("skills")},it("btnBag2").onclick=()=>{_t.ui(),Qr("bag")},it("pClose").onclick=()=>{Hd(),g.state==="title"&&it("title").classList.remove("hidden")},it("btnRevive").onclick=()=>{it("dead").classList.add("hidden"),Fd()},it("btnToTitle").onclick=()=>{it("dead").classList.add("hidden"),it("title").classList.remove("hidden")},A_=setInterval(cl,220),setInterval(()=>{g.state!=="title"&&it("panel").classList.contains("hidden")&&as()},220),_t.musicOn=K.music!==!1,window.__UI__={openPanel:Qr,closePanel:Hd,renderPanel:un,setLife(i){$s=i,un()},getLife(){return $s},getTab(){return os}}}function Gd(i,t){_t.init(),_t.startMusic(),Kr(i),it("title").classList.add("hidden"),ss(t),g.emit("hud"),g.emit("skills")}window.addEventListener("error",i=>{console.error("[AINCRAD3D]",i.message,i.filename,i.lineno)});"serviceWorker"in navigator&&location.protocol.startsWith("http")&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));try{Wd();let i=0,t=e=>{try{Bd(e)}catch(n){console.error("FRAME",n)}i=requestAnimationFrame(t)};i=requestAnimationFrame(t),window.__AINCRAD3D__={G:g,INPUT:zt,AUDIO:_t,SAVE:K,FX:ve,getState:Xs,version:"8.0.0-3d",makeBossTrack:Xc,enterFloor:ss,setClass:Kr,attack:jr,useSkill:Vs,interact:Gs,equipItem:al,sellItem:ol,useConsumable:rl,grantCraft:sl,damageMob:Ws,makeItem:fi,DATA:Bc,CLS:Lc}}catch(i){console.error("BOOT FAIL",i),document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#0d1622;color:#fff;font:14px sans-serif;text-align:center;padding:30px;z-index:999">
      <div><div style="font-size:22px;margin-bottom:12px">\u542F\u52A8\u5931\u8D25</div>
      <div style="color:#9fb0c4;line-height:1.8">${String(i&&i.message||i)}<br>\u8BF7\u786E\u8BA4\u6D4F\u89C8\u5668\u652F\u6301 WebGL\uFF0C\u6216\u5237\u65B0\u91CD\u8BD5\u3002</div></div></div>`)}})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
