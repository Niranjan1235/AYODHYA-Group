// ── NAV SCROLL ──
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('nav');
  if(nav) nav.classList.toggle('scrolled',scrollY>80);
  revealAll();
});

// ── HAMBURGER ──
function toggleMenu(){
  const h=document.getElementById('ham');
  const m=document.getElementById('mob-menu');
  if(h) h.classList.toggle('open');
  if(m) m.classList.toggle('open');
}

// ── SCROLL REVEAL ──
function revealAll(){
  document.querySelectorAll('.fade-up,.fade-left,.fade-right').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight*.88)
      el.classList.add('in');
  });
}

// ── PROGRESS BARS ──
function animateBars(){
  document.querySelectorAll('.prog-fill[data-w]').forEach(bar=>{
    const w=bar.dataset.w;
    bar.style.width='0';
    requestAnimationFrame(()=>requestAnimationFrame(()=>{ bar.style.width=w; }));
  });
}

// ── INIT ──
window.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{ revealAll(); animateBars(); },200);
});
