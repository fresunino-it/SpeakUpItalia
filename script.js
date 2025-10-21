
// language toggle
document.getElementById('to-it').addEventListener('click', ()=> setLang('it'));
document.getElementById('to-es').addEventListener('click', ()=> setLang('es'));
function setLang(lang){
  document.querySelectorAll('[data-lang-italian]').forEach(el=> el.style.display = (lang==='it' ? '' : 'none'));
  document.querySelectorAll('[data-lang-spanish]').forEach(el=> el.style.display = (lang==='es' ? '' : 'none'));
  if(lang==='es'){
    document.getElementById('hero-title').textContent = 'Bienvenidos a SpekUp Italia';
    document.getElementById('hero-sub').textContent = 'Clases de italiano y español con el método KiSS — actividades, verbos y juegos interactivos.';
  } else {
    document.getElementById('hero-title').textContent = 'Benvenuti su SpekUp Italia';
    document.getElementById('hero-sub').textContent = 'Lezioni di italiano e spagnolo con il metodo KiSS — attività, verbi e giochi interattivi.';
  }
}

// small animation for hero elements
window.addEventListener('load', ()=>{
  const logo = document.querySelector('.logo-hero');
  const title = document.getElementById('hero-title');
  const sub = document.getElementById('hero-sub');
  if(logo) logo.style.transform = 'translateY(-8px)';
  setTimeout(()=>{ if(logo) logo.style.transform='none'; if(title) title.style.opacity=1; }, 200);
});
