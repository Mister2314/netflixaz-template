// One preview at a time; removing its iframe stops playback and network activity.
const node=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;};
export function videoLabel(f){return f.trailer?.kind==='clip'?'Fraqment':f.trailer?.kind==='promo'?'Promo':'Treyler';}
export function videoId(f){try{const u=new URL(f.trailer?.url);const id=u.hostname==='youtu.be'?u.pathname.slice(1):u.searchParams.get('v');return /^[\w-]{11}$/.test(id)?id:null;}catch{return null;}}
let apiPromise;
function youtubeAPI(){
 if(window.YT?.Player)return Promise.resolve(window.YT);
 if(!apiPromise)apiPromise=new Promise((resolve,reject)=>{
 const previous=window.onYouTubeIframeAPIReady;
 window.onYouTubeIframeAPIReady=()=>{previous?.();resolve(window.YT);};
 const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.onerror=()=>{apiPromise=null;reject(new Error('Video xidməti yüklənmədi'));};document.head.append(script);
 });return apiPromise;
}
export function player(f,muted=true){
 const id=videoId(f);if(!id)return node('p','Bu film üçün uyğun qısa video hələ tapılmayıb.','video-unavailable');
 const shell=node('div',null,'cinematic-player');const mount=node('div');
 const status=node('button','Video yüklənir…','playback-status');status.type='button';status.disabled=true;
 const controls=node('div',null,'cinematic-controls');
 const pause=node('button','Dayandır','playback-control');pause.type='button';pause.disabled=true;
 const sound=node('button',muted?'Səsi aç':'Səsi bağla','playback-control');sound.type='button';sound.disabled=true;
 controls.append(pause,sound);shell.append(mount,status,controls);
 let instance,disposed=false,playing=false,isMuted=muted,timeout;
 const observer=new MutationObserver(()=>{if(!shell.isConnected){disposed=true;clearTimeout(timeout);instance?.destroy();observer.disconnect();}});
 queueMicrotask(()=>{if(shell.isConnected)observer.observe(document.body,{childList:true,subtree:true});});
 const show=(text,action)=>{status.textContent=text;status.disabled=!action;status.hidden=false;status.onclick=action||null;};
 const play=()=>{instance?.unMute();isMuted=false;sound.textContent='Səsi bağla';instance?.playVideo();show('Video başladılır…');};
 youtubeAPI().then(YT=>{
 if(disposed||!shell.isConnected)return;
 instance=new YT.Player(mount,{host:'https://www.youtube-nocookie.com',videoId:id,playerVars:{autoplay:1,controls:0,playsinline:1,rel:0,origin:location.origin},events:{
 onReady:()=>{if(disposed)return;instance.getIframe().tabIndex=-1;pause.disabled=false;sound.disabled=false;muted?instance.mute():instance.unMute();instance.playVideo();timeout=setTimeout(()=>{if(!playing)show('Videonu başlat',play);},5000);},
 onStateChange:event=>{playing=event.data===1;pause.textContent=playing?'Dayandır':'Davam et';pause.setAttribute('aria-label',playing?'Videonu dayandır':'Videonu davam et');if(playing){clearTimeout(timeout);status.hidden=true;shell.classList.add('is-playing');}if(event.data===0){shell.classList.remove('is-playing');show('Yenidən bax',play);}},
 onAutoplayBlocked:()=>show('Səslə başlat',play),
 onError:()=>{clearTimeout(timeout);shell.classList.remove('is-playing');show('Video burada açıla bilmir. Başqa film seç.');pause.disabled=sound.disabled=true;}
 }});
 }).catch(()=>show('Video xidməti yüklənmədi. Pəncərəni bağlayıb yenidən aç.'));
 pause.onclick=()=>{if(playing)instance?.pauseVideo();else instance?.playVideo();};
 sound.onclick=()=>{isMuted=!isMuted;if(isMuted)instance?.mute();else instance?.unMute();sound.textContent=isMuted?'Səsi aç':'Səsi bağla';sound.setAttribute('aria-pressed',String(!isMuted));};
 shell.addEventListener('keydown',event=>{if(event.target!==shell)return;if(event.key===' '){event.preventDefault();pause.click();}});
 return shell;
}

let popup=null,timer,hideTimer,anchor=null;
export function stopPreview(){clearTimeout(timer);clearTimeout(hideTimer);popup?.remove();popup=null;anchor=null;}
export function attachPreview(card,f,{details,save,watch}){
 const closeSoon=()=>{clearTimeout(timer);hideTimer=setTimeout(stopPreview,160);};
 card.addEventListener('pointerenter',e=>{if(e.pointerType==='touch'||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;stopPreview();anchor=card;timer=setTimeout(()=>{
 if(!card.isConnected||document.querySelector('dialog[open]'))return;
 popup=node('aside',null,'hover-preview');popup.setAttribute('aria-label',f.title+' önizləməsi');
 const media=node('div',null,'preview-media');
 if(videoId(f)&&!matchMedia('(prefers-reduced-motion:reduce)').matches)media.append(player(f,true));else media.append(node('p',videoId(f)?'Videonu açmaq üçün düyməyə bas.':'Bu film üçün uyğun qısa video hələ tapılmayıb.','video-unavailable'));
 const body=node('div',null,'preview-body');body.append(node('h3',f.title),node('p',f.year+' · '+f.genres.join(' / '),'film-meta'));
 const actions=node('div',null,'preview-actions');actions.append(watch(f),details(f),save(f));body.append(actions);popup.append(media,body);document.body.append(popup);
 const r=card.getBoundingClientRect(),w=Math.min(420,innerWidth-24);popup.style.width=w+'px';popup.style.left=Math.max(12,Math.min(innerWidth-w-12,r.left+(r.width-w)/2))+'px';popup.style.top=Math.max(12,Math.min(innerHeight-popup.offsetHeight-12,r.top))+'px';
 popup.addEventListener('pointerenter',()=>clearTimeout(hideTimer));popup.addEventListener('pointerleave',closeSoon);
 },650);});
 card.addEventListener('pointerleave',closeSoon);
}
window.addEventListener('scroll',stopPreview,{passive:true,capture:true});window.addEventListener('resize',stopPreview);document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPreview();});document.addEventListener('keydown',e=>{if(e.key==='Escape')stopPreview();});
