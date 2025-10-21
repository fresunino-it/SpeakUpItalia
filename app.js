// app.js - SpeakUpItalia Pro v1.0
// WhatsApp configuration
const WA_COUNTRY = "591";
const WA_NUMBER = "69064630";
const WA_FULL = `${WA_COUNTRY}${WA_NUMBER}`;
function setWhatsAppLinks(){
  const url = `https://wa.me/${WA_FULL}`;
  document.querySelectorAll('a[href*="wa.me"], a.whatsapp-link').forEach(a=>{ a.href = url; a.target="_blank"; a.rel="noopener noreferrer"; });
}
setWhatsAppLinks();

// Language toggle simple
document.addEventListener('DOMContentLoaded', ()=>{
  const it = document.getElementById('to-it');
  const es = document.getElementById('to-es');
  function setLang(lang){
    document.querySelectorAll('[data-lang="it"]').forEach(el=>el.style.display = (lang==='it'?'':'none'));
    document.querySelectorAll('[data-lang="es"]').forEach(el=>el.style.display = (lang==='es'?'':'none'));
    if(it) it.setAttribute('aria-pressed', lang==='it');
    if(es) es.setAttribute('aria-pressed', lang==='es');
  }
  if(it) it.addEventListener('click', ()=> setLang('it'));
  if(es) es.addEventListener('click', ()=> setLang('es'));
  // auto detect
  const pref = navigator.language || navigator.userLanguage || 'it';
  setLang(pref.startsWith('es')? 'es' : 'it');

  // hero animation
  const logo = document.querySelector('.logo-hero');
  const title = document.querySelector('.hero h2');
  if(logo) setTimeout(()=>{ logo.style.opacity=1; logo.style.transform='none'; },160);
  if(title) setTimeout(()=> title.classList.add('animate-in'), 360);
});

// Play success sound utility (for games)
function playSuccess(){
  const a = document.getElementById('success-sound');
  if(a){ a.currentTime=0; a.play().catch(()=>{}); }
}

// Accessibility focus visible
(function(){ const style = document.createElement('style'); style.innerHTML = ':focus{outline:3px solid rgba(0,123,255,0.14);outline-offset:3px}'; document.head.appendChild(style); })();

// Analytics placeholder: add your GA measurement id in index.html where noted
