const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>20);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#projectForm');
form?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(`Website inquiry from ${data.get('name')||'a prospective client'}`);const body=encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nLocation: ${data.get('location')}\nProject: ${data.get('project')}\nBudget: ${data.get('budget')}\nTimeline: ${data.get('timeline')}\n\nMessage:\n${data.get('message')}`);window.location.href=`mailto:pointeconstructioninc@gmail.com?subject=${subject}&body=${body}`;});
const portfolio=document.querySelector('[data-portfolio]');
const portfolioSource=typeof portfolioData!=='undefined'?portfolioData:null;

if(portfolio&&portfolioSource){
  const projectCard=(entry,index)=>`<a class="project-card" href="${entry.href}"><span class="project-card-visual project-cover-${(index%4)+1}" aria-hidden="true"><span>Project photography<br>coming soon</span></span><span class="project-card-content"><span class="project-number">${String(index+1).padStart(2,'0')}</span><span><strong>${entry.title}</strong><small>View project gallery <span aria-hidden="true">&rarr;</span></small></span></span></a>`;
  const featured=portfolioSource.sections.find(section=>section.entries);
  const categories=portfolioSource.sections.filter(section=>!section.entries);
  const categoryCard=section=>`<a class="category-card" href="${section.href}"><span class="category-card-copy"><span class="eyebrow">${section.eyebrow}</span><strong>${section.title}</strong><span class="category-description">${section.description}</span><span class="category-link">View category gallery <span aria-hidden="true">&rarr;</span></span></span><span class="category-services"><span>Includes</span>${section.services.map(service=>`<span>${service}</span>`).join('')}</span></a>`;
  portfolio.innerHTML=`<section class="section portfolio-section portfolio-featured"><div class="container"><div class="portfolio-section-head"><div><p class="eyebrow">${featured.eyebrow}</p><h2 class="section-title">${featured.title}</h2></div><p class="lead">${featured.description}</p></div><div class="project-cards">${featured.entries.map(projectCard).join('')}<article class="future-project-card"><span class="project-number">${String(featured.entries.length+1).padStart(2,'0')}</span><div><h3>${featured.futureLabel}</h3><p>${featured.futureDescription}</p><span class="future-label">Portfolio placeholder</span></div></article></div></div></section><section class="section portfolio-section portfolio-categories"><div class="container"><div class="portfolio-section-head"><div><p class="eyebrow">Project Collections</p><h2 class="section-title">Supporting Work</h2></div><p class="lead">Explore growing galleries of residential craftsmanship across four supporting categories.</p></div><div class="category-grid">${categories.map(categoryCard).join('')}</div></div></section>`;
}

const gallery=document.querySelector('[data-gallery]');
const galleryKey=document.body.dataset.galleryKey||document.body.dataset.project;
const galleryData=portfolioSource&&galleryKey?portfolioSource.galleries[galleryKey]:null;

if(gallery&&galleryData){
  const items=galleryData.images.length?galleryData.images:Array.from({length:galleryData.placeholderCount||1},()=>null);
  let activeIndex=0;
  let lastFocused=null;
  const lightboxRoot=document.querySelector('[data-lightbox-root]');

  gallery.innerHTML=items.map((image,index)=>{
    const number=String(index+1).padStart(2,'0');
    if(image)return `<button class="gallery-item" type="button" data-gallery-index="${index}" aria-label="Open ${galleryData.title} photo ${index+1} of ${items.length}"><img src="${image.src}" alt="${image.alt||`${galleryData.title} photo ${index+1}`}" loading="lazy">${image.projectLabel?`<span class="gallery-item-label">${image.projectLabel}</span>`:''}<span class="gallery-item-count">${number}</span></button>`;
    return `<button class="gallery-item gallery-placeholder" type="button" data-gallery-index="${index}" aria-label="Open photography placeholder ${index+1} of ${items.length}"><span class="placeholder-mark" aria-hidden="true">P</span><span><strong>Photo ${number}</strong><small>Photography placeholder</small></span></button>`;
  }).join('');

  lightboxRoot.innerHTML=`<div class="lightbox" role="dialog" aria-modal="true" aria-label="${galleryData.title} image viewer" hidden><button class="lightbox-close" type="button" aria-label="Close image viewer">×</button><button class="lightbox-control lightbox-prev" type="button" aria-label="Previous image">←</button><div class="lightbox-stage" aria-live="polite"></div><button class="lightbox-control lightbox-next" type="button" aria-label="Next image">→</button><p class="lightbox-count"></p></div>`;
  const lightbox=lightboxRoot.querySelector('.lightbox');
  const stage=lightbox.querySelector('.lightbox-stage');
  const count=lightbox.querySelector('.lightbox-count');
  const closeButton=lightbox.querySelector('.lightbox-close');

  const renderLightbox=()=>{
    const image=items[activeIndex];
    const number=String(activeIndex+1).padStart(2,'0');
    stage.innerHTML=image?`<figure><img src="${image.src}" alt="${image.alt||`${galleryData.title} photo ${activeIndex+1}`}" />${image.projectLabel||image.caption?`<figcaption>${[image.projectLabel,image.caption].filter(Boolean).join(' &mdash; ')}</figcaption>`:''}</figure>`:`<div class="lightbox-placeholder"><span class="placeholder-mark" aria-hidden="true">P</span><strong>Photo ${number}</strong><span>Photography placeholder &mdash; replace with a verified project image.</span></div>`;
    count.textContent=`${activeIndex+1} / ${items.length}`;
  };
  const openLightbox=index=>{activeIndex=index;lastFocused=document.activeElement;renderLightbox();lightbox.hidden=false;document.body.classList.add('lightbox-open');closeButton.focus();};
  const closeLightbox=()=>{lightbox.hidden=true;document.body.classList.remove('lightbox-open');lastFocused?.focus();};
  const move=direction=>{activeIndex=(activeIndex+direction+items.length)%items.length;renderLightbox();};

  gallery.addEventListener('click',event=>{const item=event.target.closest('[data-gallery-index]');if(item)openLightbox(Number(item.dataset.galleryIndex));});
  closeButton.addEventListener('click',closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>move(-1));
  lightbox.querySelector('.lightbox-next').addEventListener('click',()=>move(1));
  lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox();});
  document.addEventListener('keydown',event=>{if(lightbox.hidden)return;if(event.key==='Escape')closeLightbox();if(event.key==='ArrowLeft')move(-1);if(event.key==='ArrowRight')move(1);if(event.key==='Tab'){const controls=[closeButton,lightbox.querySelector('.lightbox-prev'),lightbox.querySelector('.lightbox-next')];const position=controls.indexOf(document.activeElement);if(event.shiftKey&&position===0){event.preventDefault();controls.at(-1).focus();}else if(!event.shiftKey&&position===controls.length-1){event.preventDefault();controls[0].focus();}}});
}

