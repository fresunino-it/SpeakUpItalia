// script.js - SpeakUp Italia WhatsApp fix

// === CONFIGURAZIONE WHATSAPP ===
const COUNTRY_CODE = "591";   // prefisso internazionale (Bolivia)
const PHONE_NUMBER = "69064630"; // tuo numero WhatsApp senza + o spazi
const FULL_NUMBER = `${COUNTRY_CODE}${PHONE_NUMBER}`;

// === IMPOSTA LINK WHATSAPP SU TUTTI I BOTTONI ===
function updateWhatsAppLinks() {
  const whatsappUrl = `https://wa.me/${FULL_NUMBER}`;
  const btn1 = document.getElementById("whatsapp-link");
  const btn2 = document.getElementById("whatsapp-fab-link");

  if (btn1) btn1.href = whatsappUrl;
  if (btn2) btn2.href = whatsappUrl;
}

updateWhatsAppLinks();

// === CONTROLLO APERTURA CHAT ===
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener("click", (e) => {
    setTimeout(() => {
      alert("Se la chat non si è aperta, assicurati di avere WhatsApp Web o l’app installata 📱");
    }, 3000);
  });
});

// === BILINGUE IT/ES ===
const itBtn = document.getElementById("to-it");
const esBtn = document.getElementById("to-es");

function setLang(lang) {
  document.querySelectorAll("[data-lang-italian]").forEach(el => el.style.display = (lang === "it" ? "" : "none"));
  document.querySelectorAll("[data-lang-spanish]").forEach(el => el.style.display = (lang === "es" ? "" : "none"));
  itBtn?.setAttribute("aria-pressed", lang === "it");
  esBtn?.setAttribute("aria-pressed", lang === "es");
}

itBtn?.addEventListener("click", () => setLang("it"));
esBtn?.addEventListener("click", () => setLang("es"));

// === IMPOSTAZIONE AUTOMATICA LINGUA ===
(function initLang() {
  const preferred = navigator.language || navigator.userLanguage || "it";
  if (preferred.startsWith("es")) setLang("es");
  else setLang("it");
})();
