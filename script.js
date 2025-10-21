// common script.js
const itBtn = document.getElementById('to-it');
const esBtn = document.getElementById('to-es');
function setLang(lang){
  document.querySelectorAll('[data-lang-italian]').forEach(el=> el.style.display = (lang==='it' ? '' : 'none'));
  document.querySelectorAll('[data-lang-spanish]').forEach(el=> el.style.display = (lang==='es' ? '' : 'none'));
  if(lang==='es'){
    document.querySelectorAll('[data-i18n-title]').forEach(el=> el.textContent = el.dataset.es);
  } else {
    document.querySelectorAll('[data-i18n-title]').forEach(el=> el.textContent = el.dataset.it);
  }
  itBtn.setAttribute('aria-pressed', lang==='it');
  esBtn.setAttribute('aria-pressed', lang==='es');
}
if(itBtn) itBtn.addEventListener('click', ()=> setLang('it'));
if(esBtn) esBtn.addEventListener('click', ()=> setLang('es'));

// hero animations
window.addEventListener('load', ()=>{
  const logo = document.querySelector('.logo-hero');
  const title = document.querySelector('.hero-title');
  const sub = document.querySelector('.hero-sub');
  if(logo) setTimeout(()=>{ logo.classList.add('animate-pop'); logo.style.opacity=1; }, 160);
  if(title) setTimeout(()=>{ title.classList.add('animate-in'); title.style.opacity=1; }, 360);
  if(sub) setTimeout(()=>{ sub.classList.add('animate-in'); sub.style.opacity=1; }, 520);
});

// audio control for games
function playSuccess(){
  try{
    const audio = document.getElementById('success-audio');
    if(audio && !audio.muted){ audio.currentTime=0; audio.play(); }
  }catch(e){}
}
