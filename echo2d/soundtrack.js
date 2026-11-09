(()=>{'use strict';
const $=s=>document.querySelector(s);
const style=document.createElement('style');style.textContent=`
#echo-soundtrack{position:fixed;left:max(10px,env(safe-area-inset-left));bottom:calc(14px + env(safe-area-inset-bottom));z-index:10012}
#echo-soundtrack>button{border:1px solid #a78bfa88;border-radius:999px;background:#18172eee;color:#eee9ff;padding:10px 14px;font-size:12px}
#echo-track-panel{display:none;position:absolute;left:0;bottom:48px;width:min(340px,88vw);padding:13px;border:1px solid #ffffff25;border-radius:14px;background:#11182af7;color:#edf0ff;box-shadow:0 12px 36px #0009}
#echo-track-panel.open{display:block}#echo-track-panel iframe,#lyricBox iframe{width:100%;aspect-ratio:16/9;border:0;border-radius:9px;margin-top:9px}#lyricBox .note{font-size:11px;line-height:1.7;color:#9eacc5}
#echo-track-panel .note{font-size:10px;line-height:1.7;color:#aab6ce}
#echo-track-panel button{border:1px solid #ffffff22;border-radius:8px;padding:7px 10px;background:#27304b;color:#fff;margin-top:8px}
`;document.head.appendChild(style);
const root=document.createElement('div');root.id='echo-soundtrack';root.innerHTML='<button id="echo-track-toggle">♫ 原唱主题曲</button><div id="echo-track-panel"><b>《错位时空》 · 艾辰原唱</b><p class="note">使用官方音乐人频道发布的原版录音。点击播放后可在游戏中听歌；播放由官方播放器提供，不使用翻唱、AI 仿唱或自制旋律替代。</p><div id="echo-track-player"><button id="echo-track-play">▶ 播放原唱</button></div><p class="note">若当前网络无法加载播放器，可直接前往官方音源收听。</p><a href="https://www.youtube.com/watch?v=EDLanl2PC_I" target="_blank" rel="noopener" style="color:#b9a7ff;font-size:11px">打开官方原唱音源 ↗</a></div>';document.body.appendChild(root);
const panel=$('#echo-track-panel');$('#echo-track-toggle').onclick=()=>panel.classList.toggle('open');
const ORIGINAL='EDLanl2PC_I';
function mountOriginal(autoplay){if(window.__ECHO2D__&&window.__ECHO2D__.stopSong)window.__ECHO2D__.stopSong();const box=$('#lyricBox');if(!box)return;box.innerHTML='<div class="lyricTag">♪ 通关原唱 · 艾辰《错位时空》</div><p class="note">本关通关后播放官方原唱录音，不再用程序生成旋律代替人声。</p><iframe title="艾辰《错位时空》原唱" src="https://www.youtube-nocookie.com/embed/'+ORIGINAL+'?'+(autoplay?'autoplay=1&':'')+'rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';}
const win=$('#win');if(win){new MutationObserver(()=>{if(!win.classList.contains('hidden'))mountOriginal(true);}).observe(win,{attributes:true,attributeFilter:['class']});}
const replay=$('#btnReplaySong');if(replay)replay.onclick=()=>mountOriginal(true);
$('#echo-track-play').onclick=()=>{$('#echo-track-player').innerHTML='<iframe title="艾辰《错位时空》官方原唱" src="https://www.youtube-nocookie.com/embed/EDLanl2PC_I?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';};
window.addEventListener('pagehide',()=>{const frame=$('#echo-track-player iframe');if(frame)frame.src='about:blank';});
window.__ECHO_SOUNDTRACK__={version:'3.0.0',source:'official-original-recording',stop(){const frame=$('#echo-track-player iframe');if(frame)frame.src='about:blank';}};
})();