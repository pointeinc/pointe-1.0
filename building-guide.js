(() => {
  const root = document.querySelector('[data-building-guide]');
  if (!root || typeof buildingGuideData === 'undefined') return;
  const { categories, options } = buildingGuideData;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const placeholder = '<span class="guide-photo-placeholder"><span aria-hidden="true">P</span><span>Project photography<br>awaiting selection</span></span>';
  const image = (src, alt) => `<img src="${escape(src)}" alt="${escape(alt)}" loading="lazy">`;
  const cost = option => [1, 2, 3].includes(option.costLevel)
    ? `<span class="guide-cost" aria-label="Relative cost: ${option.costLevel} of 3">Relative cost: ${'$'.repeat(option.costLevel)}</span>`
    : '<span class="guide-cost guide-cost-unset">Relative cost: not yet set</span>';
  const costNote = 'Compared with the other options shown. Actual project pricing varies.';
  const sectionLabels = { foundations: 'Foundations', structure: 'Structure', roofing: 'Roofing', exterior: 'Exterior', envelope: 'Envelope', mechanical: 'Mechanical', interior: 'Interior' };
  const sectionNav = document.querySelector('[data-guide-index]');
  sectionNav.innerHTML = categories.map(category =>
    `<button type="button" role="tab" id="tab-${escape(category.id)}" aria-controls="${escape(category.id)}" aria-selected="${category.id === 'foundations'}" tabindex="${category.id === 'foundations' ? 0 : -1}">${escape(sectionLabels[category.id] || category.name)}</button>`
  ).join('');
  root.innerHTML = categories.map((category, index) => {
    const entries = options.filter(option => option.category === category.id);
    return `<section class="guide-section" role="tabpanel" tabindex="0" id="${escape(category.id)}" aria-labelledby="tab-${escape(category.id)}"${category.id === 'foundations' ? '' : ' hidden'}>
      <div class="guide-section-heading"><p class="eyebrow">${String(index + 1).padStart(2, '0')}</p><h2 class="section-title" id="${escape(category.id)}-title">${escape(category.name)}</h2></div>
      ${entries.length ? `<ul class="guide-options">${entries.map(option => `<li class="guide-option">
        <button class="guide-row" type="button" data-guide-option="${escape(option.id)}" aria-expanded="false" aria-controls="preview-${escape(option.id)}"><span>${escape(option.name)}</span></button>
        <div class="guide-preview" id="preview-${escape(option.id)}" role="region" aria-label="${escape(option.name)} preview" hidden></div>
      </li>`).join('')}</ul>` : '<p class="guide-empty">Content placeholder — construction options and project photography to be added.</p>'}
    </section>`;
  }).join('');

  const dialog = document.querySelector('[data-guide-dialog]');
  const content = dialog.querySelector('[data-guide-detail]');
  const closeButton = dialog.querySelector('[data-guide-close]');
  const desktop = window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)');
  const hidePreview = row => {
    row.setAttribute('aria-expanded', 'false');
    row.nextElementSibling.hidden = true;
  };
  const tabs = [...sectionNav.querySelectorAll('[role="tab"]')];
  const selectCategory = tab => {
    root.querySelectorAll('.guide-row').forEach(hidePreview);
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    tab.focus({ preventScroll: true });
    // Reveal the tab horizontally without scrolling the document vertically.
    const bounds = tab.getBoundingClientRect();
    const viewport = sectionNav.getBoundingClientRect();
    if (bounds.left < viewport.left) sectionNav.scrollLeft += bounds.left - viewport.left;
    else if (bounds.right > viewport.right) sectionNav.scrollLeft += bounds.right - viewport.right;
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectCategory(tab));
    tab.addEventListener('keydown', event => {
      const next = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      selectCategory(tabs[next]);
    });
  });
  const showPreview = row => {
    root.querySelectorAll('.guide-row').forEach(other => { if (other !== row) hidePreview(other); });
    const panel = row.nextElementSibling;
    if (!panel.childElementCount) {
      const option = options.find(entry => entry.id === row.dataset.guideOption);
      panel.innerHTML = `<div class="guide-preview-image">${option.coverImage ? image(option.coverImage, option.coverAlt || option.name) : placeholder}</div><div class="guide-preview-copy"><p>${escape(option.shortDescription || 'Placeholder — short description to be written.')}</p><p>${cost(option)}</p><p class="guide-pricing-note">${costNote}</p><button class="guide-learn" type="button" data-guide-detail-option="${escape(option.id)}" aria-haspopup="dialog" aria-label="Learn more about ${escape(option.name)}">Learn more <span aria-hidden="true">&rarr;</span></button></div>`;
    }
    row.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
  };
  root.querySelectorAll('.guide-options').forEach(menu => {
    menu.querySelectorAll('.guide-row').forEach(row => {
      row.addEventListener('pointerenter', event => {
        if (desktop.matches && event.pointerType !== 'touch' && !menu.contains(document.activeElement)) showPreview(row);
      });
      row.addEventListener('focus', () => { if (desktop.matches) showPreview(row); });
      row.addEventListener('click', () => {
        if (!desktop.matches && row.getAttribute('aria-expanded') === 'true') hidePreview(row);
        else showPreview(row);
      });
    });
    menu.addEventListener('pointerleave', () => {
      if (desktop.matches && !menu.contains(document.activeElement) && !dialog.open) menu.querySelectorAll('.guide-row').forEach(hidePreview);
    });
    menu.addEventListener('focusout', () => queueMicrotask(() => {
      if (desktop.matches && !menu.contains(document.activeElement) && !dialog.open) menu.querySelectorAll('.guide-row').forEach(hidePreview);
    }));
    menu.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      const row = menu.querySelector('.guide-row[aria-expanded="true"]');
      if (row) { row.focus(); hidePreview(row); event.preventDefault(); }
    });
  });
  desktop.addEventListener('change', () => {
    if (dialog.open) return;
    const focused = document.activeElement.closest('.guide-option')?.querySelector('.guide-row');
    root.querySelectorAll('.guide-row').forEach(hidePreview);
    if (focused) { focused.focus(); showPreview(focused); }
  });
  let trigger;
  const list = (title, entries) => `<section><h3>${title}</h3>${entries?.length ? `<ul>${entries.map(entry => `<li>${escape(entry)}</li>`).join('')}</ul>` : '<p class="guide-pending">Placeholder — content to be written.</p>'}</section>`;
  root.addEventListener('click', event => {
    const button = event.target.closest('[data-guide-detail-option]');
    if (!button) return;
    const option = options.find(entry => entry.id === button.dataset.guideDetailOption);
    if (!option) return;
    trigger = button;
    const category = categories.find(entry => entry.id === option.category);
    const photos = option.images?.length ? option.images : option.coverImage ? [{ src: option.coverImage, alt: option.coverAlt || option.name }] : [];
    content.innerHTML = `<p class="eyebrow">${escape(category.name)}</p><h2 id="guide-detail-title">${escape(option.name)}</h2>
      <p>${cost(option)}</p><p class="guide-pending">${costNote}</p>
      <p>${escape(option.description || 'Placeholder — detailed description to be written.')}</p>
      <section class="guide-examples"><h3>Example photos</h3><div class="guide-photos">${photos.length ? photos.map(photo => `<figure>${image(photo.src, photo.alt || option.name)}${photo.caption ? `<figcaption>${escape(photo.caption)}</figcaption>` : ''}</figure>`).join('') : placeholder}</div></section>
      <div class="guide-detail-columns">${list('Pros', option.pros)}${list('Considerations', option.considerations)}${list('Common applications', option.applications)}</div>`;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('guide-dialog-open');
    closeButton.focus();
  });
  const close = () => {
    dialog.close();
    document.body.classList.remove('guide-dialog-open');
    trigger?.focus({ preventScroll: true });
  };
  closeButton.addEventListener('click', close);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    close();
  });
  // Native dialog supplies Escape, focus containment, and an inert background.
  // Failed future image paths retain an explicit placeholder instead of a broken image.
  document.querySelector('main').addEventListener('error', event => {
    if (event.target.tagName === 'IMG') event.target.outerHTML = placeholder;
  }, true);
})();
