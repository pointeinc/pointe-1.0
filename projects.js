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
    corning: {
      type: 'project',
      title: 'Corning Project',
      eyebrow: 'Featured Home',
      status: 'Project details and verified photography coming soon.',
      placeholderCount: 6,
      images: []
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
      type: 'category',
      title: 'Renovations & Additions',
      eyebrow: 'Project Collection',
      status: 'A gallery for verified photography from multiple renovation and addition projects.',
      placeholderCount: 6,
      images: []
    },
    exteriors: {
      type: 'category',
      title: 'Exterior Craftsmanship',
      eyebrow: 'Project Collection',
      status: 'A gallery for verified photography from multiple exterior projects.',
      placeholderCount: 6,
      images: []
    },
    sitework: {
      type: 'category',
      title: 'Sitework & Excavation',
      eyebrow: 'Project Collection',
      status: 'A gallery for verified photography from residential sitework and excavation projects.',
      placeholderCount: 6,
      images: []
    },
    mechanical: {
      type: 'category',
      title: 'Mechanical Systems',
      eyebrow: 'Supporting Expertise',
      status: 'A gallery for verified photography from multiple residential mechanical installations.',
      placeholderCount: 6,
      images: []
    }
  }
};
