// Gallery images accept: { src, alt, projectLabel?, caption? }.
// Add as many images or featured-home entries as needed.
// MORE OF OUR WORK: add/edit a record in galleries.<category>.projects below.
// Keep its slug stable: existing project.html links use the category key + slug.
// Required for display: showInPortfolio: true and cover: { src, alt } (or a path).
// Assign category: interior, exterior, sitework, or mechanical, plus date (YYYY-MM-DD).
// Optional: sortOrder, href. Category is independent of the legacy gallery URL key.
// Newest dates appear first; undated projects follow. Higher sortOrder breaks
// date ties or orders undated projects; titles break remaining ties.
// href defaults to the existing individual project.html gallery URL.
// Example record (replace with verified job details and photography):
// { slug: 'job-name', title: 'Job Name', category: 'interior',
//   date: '2026-09-01', sortOrder: 0, showInPortfolio: true,
//   cover: { src: 'assets/job-cover.webp', alt: 'Finished job description' },
//   images: [{ src: 'assets/job-cover.webp', alt: 'Finished job description', stage: 'finished' }] }
// Existing unverified placeholders stay off the Work grid until populated.
const portfolioData = {
  featured: {
    key: 'featured-homes',
    eyebrow: 'Signature Work',
    title: 'Featured Homes',
    description: 'Individual galleries for larger custom homes, whole-home renovations, and flagship projects.',
    entries: [
      { title: 'Corning Project', href: 'corning-project.html', galleryKey: 'corning', cover: 'assets/projects/corning/finished/cover-photo.webp' },
      { title: 'Greenhurst Project', href: 'greenhurst-project.html', galleryKey: 'greenhurst' }
    ],
    futureLabel: 'Future featured homes',
    futureDescription: 'Additional large custom homes, whole-home renovations, and flagship projects will be added here as verified work becomes available.'
  },
  galleries: {
    // Corning stills: { src, alt, caption?, stage?, layout? }.
    // Corning videos: { src, type?, poster?, caption? }. Use optimized local web assets only.
    corning: {
      type: 'project',
      title: 'Corning Project',
      eyebrow: 'Featured Home',
      location: 'Corning, New York',
      projectType: 'Major residential transformation / whole-home renovation',
      introduction: 'The Corning Project is a major residential transformation in Corning, New York. The work is presented as a progression from the original home through construction and into the finished spaces, with an emphasis on the decisions and craftsmanship that bring a whole home together.',
      hero: null,
      before: [],
      during: [],
      finished: [],
      details: [],
      videos: []
    },
    greenhurst: {
      type: 'project',
      title: 'Greenhurst Project',
      eyebrow: 'Featured Home',
      status: 'Project details and verified photography coming soon.',
      placeholderCount: 6,
      images: []
    },
    renovations: {
      type: 'category', title: 'Renovations & Additions', eyebrow: 'Project Collection', href: 'renovations-additions.html',
      status: 'Individual renovation and addition projects, documented from the original space through completion.',
      projects: [
        { slug: 'kitchen-renovation-01', category: 'interior', date: null, title: 'Kitchen Renovation 01', cover: null, images: [] },
        // Scope unclear: confirm Interior or Exterior before assigning a filter category.
        { slug: 'addition-01', category: null, date: null, title: 'Addition 01', cover: null, images: [] }
      ]
    },
    exteriors: {
      type: 'category', title: 'Exterior Craftsmanship', eyebrow: 'Project Collection', href: 'exterior-craftsmanship.html',
      status: 'Individual exterior projects with the finished result and the work behind it.',
      projects: [
        { slug: 'siding-project-01', category: 'exterior', date: null, title: 'Siding Project 01', cover: null, images: [] },
        { slug: 'deck-project-01', category: 'exterior', date: null, title: 'Deck Project 01', cover: null, images: [] },
        { slug: 'exterior-renovation-01', category: 'exterior', date: null, title: 'Exterior Renovation 01', cover: null, images: [] }
      ]
    },
    sitework: {
      type: 'category', title: 'Sitework & Excavation', eyebrow: 'Project Collection', href: 'sitework-excavation.html',
      status: 'Individual residential sitework and excavation projects presented in clear project sequences.',
      projects: [
        { slug: 'excavation-project-01', category: 'sitework', date: null, title: 'Excavation Project 01', cover: null, images: [] },
        { slug: 'site-preparation-01', category: 'sitework', date: null, title: 'Site Preparation 01', cover: null, images: [] }
      ]
    },
    mechanical: {
      type: 'category', title: 'Mechanical Systems', eyebrow: 'Supporting Expertise', href: 'mechanical-systems.html',
      status: 'Individual residential mechanical installations, organized project by project.',
      projects: [
        { slug: 'hvac-project-01', category: 'mechanical', date: null, title: 'HVAC Project 01', cover: null, images: [] },
        { slug: 'heat-pump-project-01', category: 'mechanical', date: null, title: 'Heat Pump Project 01', cover: null, images: [] }
      ]
    }
  }
};
