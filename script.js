
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});


// Add yellow overlay labels from img alt
document.querySelectorAll('.whats-coming .card').forEach(card=>{
  const img = card.querySelector('img');
  if(img){
    card.setAttribute('data-label', img.alt || '');
  }
});
