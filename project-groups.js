// Shared index renderer. Group pages do not invoke the single-job gallery renderer.
const groupGrid=document.querySelector('[data-group-projects]');
const projectGroup=portfolioData.groups?.[document.body.dataset.projectGroup];
if(groupGrid&&projectGroup){
  const escapeGroupHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const projects=projectGroup.projects||[];
  const dateFormatter=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
  groupGrid.innerHTML=projects.length?projects.map(project=>{
    const cover=typeof project.cover==='string'?{src:project.cover}:project.cover;
    const date=project.date?new Date(`${project.date}T00:00:00Z`):null;
    const dateMarkup=date&&!Number.isNaN(date.getTime())?`<time datetime="${escapeGroupHtml(project.date)}">${dateFormatter.format(date)}</time>`:'';
    return `<a class="more-work-card" href="${escapeGroupHtml(project.href)}"><span class="more-work-cover"><img src="${escapeGroupHtml(cover?.src||'assets/mechanical-group-placeholder.svg')}" alt="${escapeGroupHtml(cover?.alt||project.title)}" width="800" height="600" loading="lazy"></span><span class="more-work-copy"><strong>${escapeGroupHtml(project.title)}</strong>${dateMarkup?`<small>${dateMarkup}</small>`:''}</span></a>`;
  }).join(''):Array.from({length:3},()=>`<div class="more-work-card group-development-placeholder"><span class="more-work-cover"><img src="assets/mechanical-group-placeholder.svg" alt="Development placeholder — project photography coming soon" width="800" height="600" loading="lazy"></span><span class="more-work-copy"><strong>Development placeholder</strong><small>Individual project to be added</small></span></div>`).join('');
  document.querySelector('[data-group-empty]').hidden=projects.length>0;
}
