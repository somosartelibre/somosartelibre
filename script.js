const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu?.addEventListener('click',()=>nav.classList.toggle('mobile-open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));const modal=document.querySelector('.modal'),modalImg=document.querySelector('.modal img');document.querySelectorAll('[data-gallery]').forEach(img=>img.addEventListener('click',()=>{modalImg.src=img.src;modal.classList.add('open')}));document.querySelector('.close')?.addEventListener('click',()=>modal.classList.remove('open'));modal?.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});document.querySelector('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target),body=encodeURIComponent(`Nombre: ${d.get('nombre')}
Organización: ${d.get('organizacion')}
Interés: ${d.get('interes')}

Mensaje:
${d.get('mensaje')}`);location.href=`mailto:hola@somosartelibre.pe?subject=Consulta%20%E2%80%94%20Somos%20Arte%20Libre&body=${body}`});
(async()=>{try{const r=await fetch('content/site.json',{cache:'no-store'});if(!r.ok)return;const data=await r.json();const imgs=data.images||{};document.querySelectorAll('[data-image-key]').forEach(img=>{const key=img.dataset.imageKey;if(imgs[key]){img.src=imgs[key];}});}catch(e){}})();
