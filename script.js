
// Optional: smooth scroll for CTA
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

// Simple live countdown to a target date (e.g., Cyber Monday)
const countdownEl = document.getElementById('countdown');
if(countdownEl){
  const endDate = new Date(new Date().getFullYear(), 10, 29, 23, 59, 59); // Nov 29 11:59pm
  const timer = setInterval(()=>{
    const diff = endDate - new Date();
    if(diff <= 0){ countdownEl.textContent = '00:00:00'; clearInterval(timer); return; }
    const s = Math.floor(diff/1000)%60;
    const m = Math.floor(diff/60000)%60;
    const h = Math.floor(diff/3600000)%24;
    const d = Math.floor(diff/86400000);
    countdownEl.textContent = (d>0? d+'d ':'') + String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  }, 1000);
}
