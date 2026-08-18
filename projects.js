// Gallery images accept: { src, alt, projectLabel?, caption? }.
// Add as many images, featured-home entries, or category sections as needed.
const portfolioData = {
  sections: [
    {
      key: 'featured-homes',
      eyebrow: 'Signature Work',
      title: 'Featured Homes',
      description: 'Individual galleries for larger custom homes, whole-home renovations, and flagship projects.',
      entries: [
        { title: 'Corning Project', href: 'corning-project.html', galleryKey: 'corning' },
        { title: 'Greenhurst Project', href: 'greenhurst-project.html', galleryKey: 'greenhurst' }
      ],
      futureLabel: 'Future featured homes',
      futureDescription: 'Additional large custom homes, whole-home renovations, and flagship projects will be added here as verified work becomes available.'
    },
    {
      key: 'renovations-additions',
      eyebrow: 'Project Collection',
      title: 'Renovations & Additions',
      description: 'A growing gallery for additions, kitchens, bathrooms, whole-home renovations, structural remodels, and similar residential work.',
      href: 'renovations-additions.html',
      galleryKey: 'renovations',
      prominence: 'supporting',
      services: ['Additions', 'Kitchens and bathrooms', 'Whole-home renovations', 'Structural remodels']
    },
    {
      key: 'exterior-craftsmanship',
      eyebrow: 'Project Collection',
      title: 'Exterior Craftsmanship',
      description: 'A growing gallery for exterior work across multiple projects.',
      href: 'exterior-craftsmanship.html',
      galleryKey: 'exteriors',
      prominence: 'supporting',
      services: ['Siding', 'Decks and porches', 'Exterior renovations', 'Exterior detail work']
    },
    {
      key: 'sitework-excavation',
      eyebrow: 'Project Collection',
      title: 'Sitework & Excavation',
      description: 'Careful residential site preparation and earthwork that create a sound foundation for the work ahead.',
      href: 'sitework-excavation.html',
      galleryKey: 'sitework',
      prominence: 'supporting',
      services: ['Site preparation', 'Excavation and grading', 'Drainage', 'Driveway and foundation preparation']
    },
    {
      key: 'mechanical-systems',
      eyebrow: 'Supporting Expertise',
      title: 'Mechanical Systems',
      description: 'Supporting mechanical expertise for comfortable, efficient residential spaces.',
      href: 'mechanical-systems.html',
      galleryKey: 'mechanical',
      prominence: 'supporting',
      services: ['HVAC and furnaces', 'Heat pumps', 'Geothermal', 'Ductwork and mechanical installations']
    }
  ],
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
        { slug: 'kitchen-renovation-01', title: 'Kitchen Renovation 01', cover: null, images: [] },
        { slug: 'addition-01', title: 'Addition 01', cover: null, images: [] }
      ]
    },
    exteriors: {
      type: 'category', title: 'Exterior Craftsmanship', eyebrow: 'Project Collection', href: 'exterior-craftsmanship.html',
      status: 'Individual exterior projects with the finished result and the work behind it.',
      projects: [
        { slug: 'siding-project-01', title: 'Siding Project 01', cover: null, images: [] },
        { slug: 'deck-project-01', title: 'Deck Project 01', cover: null, images: [] },
        { slug: 'exterior-renovation-01', title: 'Exterior Renovation 01', cover: null, images: [] }
      ]
    },
    sitework: {
      type: 'category', title: 'Sitework & Excavation', eyebrow: 'Project Collection', href: 'sitework-excavation.html',
      status: 'Individual residential sitework and excavation projects presented in clear project sequences.',
      projects: [
        { slug: 'excavation-project-01', title: 'Excavation Project 01', cover: null, images: [] },
        { slug: 'site-preparation-01', title: 'Site Preparation 01', cover: null, images: [] }
      ]
    },
    mechanical: {
      type: 'category', title: 'Mechanical Systems', eyebrow: 'Supporting Expertise', href: 'mechanical-systems.html',
      status: 'Individual residential mechanical installations, organized project by project.',
      projects: [
        { slug: 'hvac-project-01', title: 'HVAC Project 01', cover: null, images: [] },
        { slug: 'heat-pump-project-01', title: 'Heat Pump Project 01', cover: null, images: [] }
      ]
    }
  }
};
