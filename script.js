const glow=document.getElementById('glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const menu=document.getElementById('menu');menu.addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.service-card,.project,.approach-steps div,.about-layout').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
