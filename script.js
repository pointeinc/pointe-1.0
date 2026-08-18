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

const categoryGrid=document.querySelector('[data-category-projects]');
const categoryKey=document.body.dataset.categoryKey;
const categoryData=categoryKey&&portfolioSource?.galleries?.[categoryKey];

if(categoryGrid&&categoryData){
  categoryGrid.innerHTML=categoryData.projects.map((project,index)=>{
    const configuredCover=typeof project.cover==='string'?{src:project.cover}:project.cover;
    const cover=configuredCover?.src?configuredCover:project.images?.find(image=>image.stage==='finished')||project.images?.[0];
    const visual=cover?.src?`<img src="${cover.src}" alt="${cover.alt||`Project view of ${project.title}`}" loading="lazy">`:`<span class="supporting-card-placeholder"><span class="placeholder-mark" aria-hidden="true">P</span><span>Project photography<br>awaiting selection</span></span>`;
    return `<a class="supporting-project-card" href="project.html?category=${encodeURIComponent(categoryKey)}&project=${encodeURIComponent(project.slug)}"><span class="supporting-project-cover">${visual}<span class="supporting-project-open">View project <span aria-hidden="true">&rarr;</span></span></span><span class="supporting-project-copy"><span class="project-number">${String(index+1).padStart(2,'0')}</span><span><strong>${project.title}</strong>${project.meta?`<small>${project.meta}</small>`:''}</span></span></a>`;
  }).join('');
}

const supportingRoot=document.querySelector('[data-supporting-project-root]');
if(supportingRoot&&portfolioSource){
  const params=new URLSearchParams(window.location.search);
  const key=params.get('category');
  const data=key?portfolioSource.galleries[key]:null;
  const project=data?.projects?.find(item=>item.slug===params.get('project'));
  if(!data||!project){
    document.title='Project Not Found | Pointe Construction';
    supportingRoot.innerHTML='<section class="project-hero supporting-error"><div class="container"><a class="back-link" href="work.html"><span aria-hidden="true">&larr;</span> Portfolio</a><p class="eyebrow">Project Gallery</p><h1>Project not found.</h1><p class="project-status">This project link is unavailable or incomplete.</p></div></section>';
  }else{
    document.title=`${project.title} | Pointe Construction`;
    document.querySelector('meta[name="description"]')?.setAttribute('content',`${project.title}, a ${data.title} project by Pointe Construction Inc.`);
    const stageOrder={before:0,progress:1,finished:2,detail:3};
    const allImages=[...(project.images||[])].sort((a,b)=>(stageOrder[a.stage]??4)-(stageOrder[b.stage]??4));
    const configuredCover=typeof project.cover==='string'?{src:project.cover}:project.cover;
    const cover=configuredCover?.src?configuredCover:allImages.find(image=>image.stage==='finished')||allImages[0]||null;
    const stageLabel=stage=>({before:'Before',progress:'In progress',finished:'Finished',detail:'Detail'}[stage]||'');
    const gallery=allImages.length?allImages.map((image,index)=>{const label=image.caption||stageLabel(image.stage);return `<button class="supporting-story-image" type="button" data-supporting-image="${index}" aria-label="Open ${project.title} photo ${index+1}"><img src="${image.src}" alt="${image.alt||`${project.title} project photo`}" loading="lazy">${label?`<span>${label}</span>`:''}</button>`}).join(''):'<div class="supporting-story-placeholder"><span class="placeholder-mark" aria-hidden="true">P</span><strong>Project photography awaiting selection</strong></div>';
    const heroStyle=cover?.src?` style="--supporting-hero-image:url('${cover.src}')"`:'';
    const heroClass=cover?.src?' has-project-image':' is-project-placeholder';
    supportingRoot.innerHTML=`<section class="supporting-project-hero${heroClass}"${heroStyle}><div class="container supporting-project-hero-copy"><a class="back-link" href="${data.href}"><span aria-hidden="true">&larr;</span> Back to ${data.title}</a><p class="eyebrow">${data.title}</p><h1>${project.title}</h1>${project.meta?`<p>${project.meta}</p>`:''}${cover?.src?'':'<span class="supporting-hero-placeholder">Project photography awaiting selection</span>'}</div></section><section class="section supporting-story-section"><div class="container"><div class="supporting-story-heading"><p class="eyebrow">Project Gallery</p><h2 class="section-title">The project, in pictures.</h2></div><div class="supporting-story-gallery" data-story-gallery>${gallery}</div></div></section><section class="cta"><div class="container cta-content"><h2>Let&rsquo;s build something worth coming home to.</h2><a class="btn btn-gold" href="contact.html">Start the Conversation <span aria-hidden="true">&rarr;</span></a></div></section>`;
    if(allImages.length){
      const root=document.querySelector('[data-lightbox-root]');let active=0,lastFocused=null,touchStart=0;
      root.innerHTML=`<div class="lightbox" role="dialog" aria-modal="true" aria-label="${project.title} image viewer" hidden><button class="lightbox-close" type="button" aria-label="Close image viewer">&times;</button><button class="lightbox-control lightbox-prev" type="button" aria-label="Previous image">&larr;</button><div class="lightbox-stage" aria-live="polite"></div><button class="lightbox-control lightbox-next" type="button" aria-label="Next image">&rarr;</button><p class="lightbox-count"></p></div>`;
      const box=root.querySelector('.lightbox'),stage=box.querySelector('.lightbox-stage'),count=box.querySelector('.lightbox-count'),closeButton=box.querySelector('.lightbox-close'),controls=[closeButton,box.querySelector('.lightbox-prev'),box.querySelector('.lightbox-next')];
      const render=()=>{const image=allImages[active],label=image.caption||stageLabel(image.stage);stage.innerHTML=`<figure><img src="${image.src}" alt="${image.alt||`${project.title} photo ${active+1}`}">${label?`<figcaption>${label}</figcaption>`:''}</figure>`;count.textContent=`${active+1} / ${allImages.length}`};
      const move=direction=>{active=(active+direction+allImages.length)%allImages.length;render()};
      const open=index=>{active=index;lastFocused=document.activeElement;render();box.hidden=false;document.body.classList.add('lightbox-open');closeButton.focus()};
      const close=()=>{box.hidden=true;document.body.classList.remove('lightbox-open');lastFocused?.focus()};
      supportingRoot.addEventListener('click',event=>{const button=event.target.closest('[data-supporting-image]');if(button)open(Number(button.dataset.supportingImage))});closeButton.addEventListener('click',close);controls[1].addEventListener('click',()=>move(-1));controls[2].addEventListener('click',()=>move(1));box.addEventListener('click',event=>{if(event.target===box)close()});box.addEventListener('touchstart',event=>touchStart=event.changedTouches[0].clientX,{passive:true});box.addEventListener('touchend',event=>{const distance=event.changedTouches[0].clientX-touchStart;if(Math.abs(distance)>50)move(distance>0?-1:1)},{passive:true});document.addEventListener('keydown',event=>{if(box.hidden)return;if(event.key==='Escape')close();if(event.key==='ArrowLeft')move(-1);if(event.key==='ArrowRight')move(1);if(event.key==='Tab'){const position=controls.indexOf(document.activeElement);if(event.shiftKey&&position===0){event.preventDefault();controls.at(-1).focus()}else if(!event.shiftKey&&position===controls.length-1){event.preventDefault();controls[0].focus()}}});
    }
  }
}

if(portfolio&&portfolioSource){
  const projectCard=(entry,index)=>`<a class="project-card" href="${entry.href}"><span class="project-card-visual project-cover-${(index%4)+1}" aria-hidden="true"><span>Project photography<br>coming soon</span></span><span class="project-card-content"><span class="project-number">${String(index+1).padStart(2,'0')}</span><span><strong>${entry.title}</strong><small>View project gallery <span aria-hidden="true">&rarr;</span></small></span></span></a>`;
  const featured=portfolioSource.sections.find(section=>section.entries);
  const categories=portfolioSource.sections.filter(section=>!section.entries);
  const categoryCard=section=>`<a class="category-card" href="${section.href}"><span class="category-card-copy"><span class="eyebrow">${section.eyebrow}</span><strong>${section.title}</strong><span class="category-description">${section.description}</span><span class="category-link">View category gallery <span aria-hidden="true">&rarr;</span></span></span><span class="category-services"><span>Includes</span>${section.services.map(service=>`<span>${service}</span>`).join('')}</span></a>`;
  portfolio.innerHTML=`<section class="section portfolio-section portfolio-featured"><div class="container"><div class="portfolio-section-head"><div><p class="eyebrow">${featured.eyebrow}</p><h2 class="section-title">${featured.title}</h2></div><p class="lead">${featured.description}</p></div><div class="project-cards">${featured.entries.map(projectCard).join('')}<article class="future-project-card"><span class="project-number">${String(featured.entries.length+1).padStart(2,'0')}</span><div><h3>${featured.futureLabel}</h3><p>${featured.futureDescription}</p><span class="future-label">Portfolio placeholder</span></div></article></div></div></section><section class="section portfolio-section portfolio-categories"><div class="container"><div class="portfolio-section-head"><div><p class="eyebrow">Project Collections</p><h2 class="section-title">Supporting Work</h2></div><p class="lead">Explore growing galleries of residential craftsmanship across four supporting categories.</p></div><div class="category-grid">${categories.map(categoryCard).join('')}</div></div></section>`;
}

const corningPage=document.querySelector('[data-corning-case-study]');
const corningData=portfolioSource?.galleries?.corning;

if(corningPage&&corningData){
  const hero=document.querySelector('[data-corning-hero]');
  const heroAsset=typeof corningData.hero==='string'?{src:corningData.hero}:corningData.hero;
  if(heroAsset?.src){
    hero.style.setProperty('--corning-hero-image',`url("${heroAsset.src}")`);
    hero.classList.add('has-project-image');
    hero.setAttribute('role','img');
    hero.setAttribute('aria-label',heroAsset.alt||'Finished exterior of the Corning Project');
  }else{
    hero.classList.add('is-project-placeholder');
    hero.insertAdjacentHTML('beforeend','<p class="corning-hero-placeholder">Finished exterior image awaiting local selection</p>');
  }

  document.querySelector('[data-corning-overview]').innerHTML=`<p class="lead">${corningData.introduction}</p><dl class="corning-project-facts"><div><dt>Location</dt><dd>${corningData.location}</dd></div><div><dt>Project</dt><dd>${corningData.projectType}</dd></div></dl>`;

  const lightboxItems=[];
  const imageButton=(image,layout='')=>{
    const index=lightboxItems.push(image)-1;
    const label=image.caption||image.stage||`Corning Project photo ${index+1}`;
    return `<button class="corning-image ${layout?`corning-image-${layout}`:''}" type="button" data-case-image-index="${index}" aria-label="Open ${label}"><img src="${image.src}" alt="${image.alt||label}" loading="lazy">${image.caption?`<span>${image.caption}</span>`:''}</button>`;
  };
  const placeholder=label=>`<div class="corning-section-placeholder"><span class="placeholder-mark" aria-hidden="true">P</span><strong>${label}</strong><p>Optimized local photography awaiting selection.</p></div>`;

  const before=document.querySelector('[data-corning-gallery="before"]');
  before.innerHTML=corningData.before.length?corningData.before.map(image=>imageButton(image)).join(''):placeholder('Before photography');

  const during=document.querySelector('[data-corning-during]');
  if(corningData.during.length){
    const stages=[];
    corningData.during.forEach(image=>{
      const stage=image.stage||'Construction Progress';
      let group=stages.find(item=>item.title===stage);
      if(!group){group={title:stage,images:[]};stages.push(group);}
      group.images.push(image);
    });
    during.innerHTML=stages.map((stage,index)=>`<article class="corning-build-stage reveal"><div class="corning-stage-label"><span>${String(index+1).padStart(2,'0')}</span><h3>${stage.title}</h3></div><div class="corning-stage-images">${stage.images.map(image=>imageButton(image)).join('')}</div></article>`).join('');
    during.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }else during.innerHTML=placeholder('Construction sequence');

  const finished=document.querySelector('[data-corning-gallery="finished"]');
  finished.innerHTML=corningData.finished.length?corningData.finished.map((image,index)=>imageButton(image,image.layout||(index%6===0?'feature':index%6===3||index%6===4?'third':'half'))).join(''):placeholder('Finished-home photography');

  const details=document.querySelector('[data-corning-gallery="details"]');
  details.innerHTML=corningData.details.length?corningData.details.map(image=>imageButton(image)).join(''):placeholder('Craftsmanship details');

  const videoWrap=document.querySelector('[data-corning-videos]');
  if(corningData.videos.length){
    videoWrap.hidden=false;
    videoWrap.innerHTML=`<div class="corning-video-heading"><p class="eyebrow">Project Film</p><h3>From the build.</h3></div><div class="corning-videos">${corningData.videos.map(video=>`<figure><video controls muted playsinline preload="metadata"${video.poster?` poster="${video.poster}"`:''}><source src="${video.src}"${video.type?` type="${video.type}"`:''}>Your browser does not support HTML5 video.</video>${video.caption?`<figcaption>${video.caption}</figcaption>`:''}</figure>`).join('')}</div>`;
  }

  const lightboxRoot=document.querySelector('[data-lightbox-root]');
  if(lightboxItems.length){
    let activeIndex=0;
    let lastFocused=null;
    lightboxRoot.innerHTML='<div class="lightbox" role="dialog" aria-modal="true" aria-label="Corning Project image viewer" hidden><button class="lightbox-close" type="button" aria-label="Close image viewer">&times;</button><button class="lightbox-control lightbox-prev" type="button" aria-label="Previous image">&larr;</button><div class="lightbox-stage" aria-live="polite"></div><button class="lightbox-control lightbox-next" type="button" aria-label="Next image">&rarr;</button><p class="lightbox-count"></p></div>';
    const lightbox=lightboxRoot.querySelector('.lightbox');
    const stage=lightbox.querySelector('.lightbox-stage');
    const count=lightbox.querySelector('.lightbox-count');
    const closeButton=lightbox.querySelector('.lightbox-close');
    const render=()=>{const image=lightboxItems[activeIndex];stage.innerHTML=`<figure><img src="${image.src}" alt="${image.alt||`Corning Project photo ${activeIndex+1}`}">${image.caption||image.stage?`<figcaption>${[image.stage,image.caption].filter(Boolean).join(' &mdash; ')}</figcaption>`:''}</figure>`;count.textContent=`${activeIndex+1} / ${lightboxItems.length}`;};
    const open=index=>{activeIndex=index;lastFocused=document.activeElement;render();lightbox.hidden=false;document.body.classList.add('lightbox-open');closeButton.focus();};
    const close=()=>{lightbox.hidden=true;document.body.classList.remove('lightbox-open');lastFocused?.focus();};
    const move=direction=>{activeIndex=(activeIndex+direction+lightboxItems.length)%lightboxItems.length;render();};
    corningPage.addEventListener('click',event=>{const item=event.target.closest('[data-case-image-index]');if(item)open(Number(item.dataset.caseImageIndex));});
    closeButton.addEventListener('click',close);
    lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>move(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click',()=>move(1));
    lightbox.addEventListener('click',event=>{if(event.target===lightbox)close();});
    document.addEventListener('keydown',event=>{if(lightbox.hidden)return;if(event.key==='Escape')close();if(event.key==='ArrowLeft')move(-1);if(event.key==='ArrowRight')move(1);if(event.key==='Tab'){const controls=[closeButton,lightbox.querySelector('.lightbox-prev'),lightbox.querySelector('.lightbox-next')];const position=controls.indexOf(document.activeElement);if(event.shiftKey&&position===0){event.preventDefault();controls.at(-1).focus();}else if(!event.shiftKey&&position===controls.length-1){event.preventDefault();controls[0].focus();}}});
  }
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

