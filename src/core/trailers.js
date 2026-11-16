// One preview at a time; removing its iframe stops playback and network activity.
const node=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;};
export function videoLabel(f){return f.trailer?.kind==='clip'?'Fraqment':f.trailer?.kind==='promo'?'Promo':'Treyler';}
export function videoId(f){try{const u=new URL(f.trailer?.url);const id=u.hostname==='youtu.be'?u.pathname.slice(1):u.searchParams.get('v');return /^[\w-]{11}$/.test(id)?id:null;}catch{return null;}}
export function player(f){
 const id=videoId(f);if(!id)return node('p','Bu film üçün uyğun qısa video hələ tapılmayıb.','video-unavailable');
 const shell=node('div',null,'cinematic-player');
 const frame=document.createElement('iframe');
 const parameters=new URLSearchParams({autoplay:'1',controls:'1',playsinline:'1',rel:'0',mute:'0',origin:location.origin});
 frame.src='https://www.youtube-nocookie.com/embed/'+id+'?'+parameters;
 frame.title=f.title+' videosu';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.allowFullscreen=true;
 shell.append(frame);
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
 if(videoId(f)&&!matchMedia('(prefers-reduced-motion:reduce)').matches)media.append(player(f));else media.append(node('p',videoId(f)?'Videonu açmaq üçün düyməyə bas.':'Bu film üçün uyğun qısa video hələ tapılmayıb.','video-unavailable'));
 const body=node('div',null,'preview-body');body.append(node('h3',f.title),node('p',f.year+' · '+f.genres.join(' / '),'film-meta'));
 const actions=node('div',null,'preview-actions');actions.append(watch(f),details(f),save(f));body.append(actions);popup.append(media,body);document.body.append(popup);
 const r=card.getBoundingClientRect(),w=Math.min(420,innerWidth-24);popup.style.width=w+'px';popup.style.left=Math.max(12,Math.min(innerWidth-w-12,r.left+(r.width-w)/2))+'px';popup.style.top=Math.max(12,Math.min(innerHeight-popup.offsetHeight-12,r.top))+'px';
 popup.addEventListener('pointerenter',()=>clearTimeout(hideTimer));popup.addEventListener('pointerleave',closeSoon);
 },650);});
 card.addEventListener('pointerleave',closeSoon);
}
window.addEventListener('scroll',stopPreview,{passive:true,capture:true});window.addEventListener('resize',stopPreview);document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPreview();});document.addEventListener('keydown',e=>{if(e.key==='Escape')stopPreview();});
