(()=>{'use strict';
const KEY='echo-local-soundtrack-v1';let audio=null,url='',fileName='';const $=s=>document.querySelector(s);
const style=document.createElement('style');style.textContent=`
#echo-soundtrack{position:fixed;left:max(10px,env(safe-area-inset-left));bottom:calc(14px + env(safe-area-inset-bottom));z-index:10012}
#echo-soundtrack>button{border:1px solid #a78bfa88;border-radius:999px;background:#18172eea;color:#eee9ff;padding:9px 12px;font-size:11px}
#echo-track-panel{display:none;position:absolute;left:0;bottom:45px;width:min(300px,86vw);padding:13px;border:1px solid #ffffff25;border-radius:14px;background:#11182af7;color:#edf0ff;box-shadow:0 12px 36px #0009}
#echo-track-panel.open{display:block}#echo-track-panel label{display:block;font-size:11px;color:#c8c1e8;margin:8px 0}
#echo-track-panel input[type=file]{width:100%;font-size:10px}#echo-track-panel input[type=range]{width:100%}
#echo-track-panel .note{font-size:10px;line-height:1.7;color:#9eacc5}#echo-track-panel button{border:1px solid #ffffff22;border-radius:8px;padding:7px 10px;background:#27304b;color:#fff;margin:5px 4px 0 0}
`;document.head.appendChild(style);
const root=document.createElement('div');root.id='echo-soundtrack';root.innerHTML='<button id="echo-track-toggle">♫ 主题曲 / 本地音乐</button><div id="echo-track-panel"><b>错位时空 · 主题回廊</b><p class="note">可导入自己拥有播放权的音频文件，在解谜时循环播放。音频仅在当前设备本地读取，不会上传。游戏原有原创旋律仍可正常使用。</p><label>选择本地音频<input id="echo-track-file" type="file" accept="audio/*"></label><div id="echo-track-name" class="note">尚未选择音频</div><label>音量 <input id="echo-track-volume" type="range" min="0" max="100" value="35"></label><button id="echo-track-play">▶ 播放</button><button id="echo-track-stop">■ 停止</button><button id="echo-track-clear">清除选择</button></div>';document.body.appendChild(root);
const panel=$('#echo-track-panel'),toggle=$('#echo-track-toggle');toggle.onclick=()=>panel.classList.toggle('open');
function stop(){if(audio){audio.pause();audio.currentTime=0;}}
$('#echo-track-file').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(f);fileName=f.name;audio=new Audio(url);audio.loop=true;audio.volume=Number($('#echo-track-volume').value)/100;$('#echo-track-name').textContent='已载入：'+fileName;};
$('#echo-track-volume').oninput=e=>{if(audio)audio.volume=Number(e.target.value)/100;};
$('#echo-track-play').onclick=async()=>{if(!audio){$('#echo-track-name').textContent='请先选择本地音频文件。';return;}try{await audio.play();}catch(e){$('#echo-track-name').textContent='浏览器未能播放该文件，请重新选择音频。';}};
$('#echo-track-stop').onclick=stop;
$('#echo-track-clear').onclick=()=>{stop();if(url)URL.revokeObjectURL(url);url='';audio=null;fileName='';$('#echo-track-file').value='';$('#echo-track-name').textContent='尚未选择音频';};
// pagehide 也会在浏览器进入 BFCache 时触发；暂停即可，避免撤销仍被播放器引用的 blob URL。
window.addEventListener('pagehide',stop);
window.addEventListener('pageshow',()=>{if(audio&&audio.ended)audio.currentTime=0;});
window.__ECHO_SOUNDTRACK__={version:'1.0.0',get loaded(){return !!audio;},stop};
})();