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
      { title: 'Greenhurst Project', href: 'greenhurst-project.html', galleryKey: 'greenhurst', cover: 'assets/projects/greenhurst/cover-photo.webp' }
    ]
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
      hero: { src: 'assets/projects/corning/finished/cover-photo.webp', alt: 'Finished Corning home with blue siding, white trim, and a front porch' },
      before: [
        { src: 'assets/projects/corning/before/img_1556.webp', alt: 'Corning home viewed from the street, with weathered siding and a steep front gable', caption: 'Street view' },
        { src: 'assets/projects/corning/before/img_1288.webp', alt: 'Front of the Corning home with weathered siding and steps leading to the entrance', caption: 'Front exterior' },
        { src: 'assets/projects/corning/before/img_1059.webp', alt: 'Side of the Corning home showing weathered siding, windows, and a projecting bay', caption: 'Side exterior' },
        { src: 'assets/projects/corning/before/img_1058.webp', alt: 'Rear of the Corning home with open wall sections and debris in the yard', caption: 'Rear exterior' },
        { src: 'assets/projects/corning/before/img_0775.webp', alt: 'Stripped Corning interior with exposed ceiling joists, wall framing, and floorboards', caption: 'Interior framing' },
        { src: 'assets/projects/corning/before/img_1053.webp', alt: 'Corning interior with exposed ceiling joists, an arched opening, and debris on the floor', caption: 'Interior with arched opening' }
      ],
      during: [
        { src: 'assets/projects/corning/during/img_1711.webp', alt: 'Corning project: home supported on timber cribbing during foundation work', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_1739.webp', alt: 'Corning project: concrete block foundation wall beside timber supports', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_1754.webp', alt: 'Corning project: coated foundation wall beside timber cribbing', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_1803.webp', alt: 'Corning project: foundation work beneath the supported home', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_1804.webp', alt: 'Corning project: wrapped exterior above temporary timber supports', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_1967.webp', alt: 'Corning project: excavation equipment beneath the raised home', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_2079.webp', alt: 'Corning project: excavated lower level with support posts and exposed framing', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_2310.webp', alt: 'Corning project: lower-level floor reinforcement before concrete placement', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_2330.webp', alt: 'Corning project: new concrete floor beneath exposed ceiling joists', stage: 'Foundation & Lower Level' },
        { src: 'assets/projects/corning/during/img_3324.webp', alt: 'Corning project: blue siding along the side of the home', stage: 'Exterior Progress' },
        { src: 'assets/projects/corning/during/img_3366.webp', alt: 'Corning project: front porch framing beneath the front gable', stage: 'Exterior Progress' },
        { src: 'assets/projects/corning/during/img_3367.webp', alt: 'Corning project: side exterior with siding and remaining house wrap', stage: 'Exterior Progress' },
        { src: 'assets/projects/corning/during/img_3465.webp', alt: 'Corning project: lift beside the porch and unfinished upper exterior', stage: 'Exterior Progress' },
        { src: 'assets/projects/corning/during/img_3468.webp', alt: 'Corning project: front exterior with blue siding and porch framing', stage: 'Exterior Progress' },
        { src: 'assets/projects/corning/during/img_3498.webp', alt: 'Corning project: exterior siding and ongoing porch work', stage: 'Exterior Progress' },
        { src: 'assets/projects/corning/during/img_3743.webp', alt: 'Corning project: interior wall insulation beneath ceiling framing', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4034.webp', alt: 'Corning project: drywall with taped seams and construction tools', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4036.webp', alt: 'Corning project: interior drywall and ceiling work with ladders', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4058.webp', alt: 'Corning project: interior room during drywall finishing', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4106.webp', alt: 'Corning project: painted interior with ceiling openings and finish work', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4131.webp', alt: 'Corning project: interior flooring work and building materials', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4235.webp', alt: 'Corning project: tile floor installation in a narrow interior space', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4281.webp', alt: 'Corning project: floor preparation around plumbing connections', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4387.webp', alt: 'Corning project: kitchen cabinetry and countertops during finish work', stage: 'Interior Progress' },
        { src: 'assets/projects/corning/during/img_4395.webp', alt: 'Corning project: staircase with wood handrail and dark balusters during finish work', stage: 'Interior Progress' }
      ],
      finished: [
        { src: 'assets/projects/corning/finished/cover-photo.webp', alt: 'Finished Corning home with blue siding, white trim, and a front porch', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4936.webp', alt: 'Finished deck with gray boards, outdoor seating, and white railing', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4979.webp', alt: 'Corning kitchen with dark cabinetry, a light countertop island, and pendant lights', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4982.webp', alt: 'Corning living room with a fireplace surround, television, and adjacent staircase', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4983.webp', alt: 'Finished staircase with white trim, wood handrail, and dark balusters', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4984.webp', alt: 'Corning bathroom with a dark vanity, white sink, mirror, and toilet', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4985.webp', alt: 'Finished hallway with a white sliding barn door and wood-look flooring', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4986.webp', alt: 'Laundry area with stacked appliances, a window, and an adjoining vanity', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4987.webp', alt: 'Corning bathroom with a dark tiled shower, glass enclosure, and light floor tile', layout: 'portrait' },
        { src: 'assets/projects/corning/finished/img_4988.webp', alt: 'Finished bedroom with recessed lighting, gray walls, a window, and a crib', layout: 'portrait' }
      ],
      details: [],
      videos: []
    },
    greenhurst: {
      type: 'project',
      title: 'Greenhurst Project',
      eyebrow: 'Featured Home',
      sections: [
        { id: 'exterior', title: 'Exterior & Porch' },
        { id: 'living', title: 'Living Spaces' },
        { id: 'kitchen', title: 'Kitchen' },
        { id: 'bedrooms', title: 'Bedrooms & Hall' },
        { id: 'bathrooms', title: 'Bathrooms' }
      ],
      images: [
        { src: 'assets/projects/greenhurst/cover-photo.webp', alt: 'Aerial view of the Greenhurst home and surrounding lawn', section: 'exterior' },
        { src: 'assets/projects/greenhurst/photo-18.webp', alt: 'Greenhurst home viewed across the front lawn', section: 'exterior' },
        { src: 'assets/homepage-hero-finished-exterior.webp', alt: 'Timber-framed entrance porch with stone piers', section: 'exterior' },
        { src: 'assets/projects/greenhurst/photo-15.webp', alt: 'Covered porch with timber ceiling and wood entrance door', section: 'exterior' },
        { src: 'assets/projects/greenhurst/photo-16.webp', alt: 'Timber porch framing overlooking the lawn', section: 'exterior' },
        { src: 'assets/projects/greenhurst/photo-01.webp', alt: 'Aerial view of the neighborhood and nearby water', section: 'exterior' },
        { src: 'assets/projects/greenhurst/photo-06.webp', alt: 'Open living space with wood entrance door and stone fireplace', section: 'living' },
        { src: 'assets/projects/greenhurst/photo-05.webp', alt: 'Stone fireplace with wood mantel', section: 'living' },
        { src: 'assets/projects/greenhurst/photo-02.webp', alt: 'Living room with seating, ceiling fan, and sliding glass door', section: 'living' },
        { src: 'assets/projects/greenhurst/photo-14.webp', alt: 'Kitchen with dark cabinetry, wood island countertop, and stainless appliances', section: 'kitchen' },
        { src: 'assets/projects/greenhurst/photo-12.webp', alt: 'Kitchen sink beneath a window with dark cabinetry', section: 'kitchen' },
        { src: 'assets/projects/greenhurst/photo-13.webp', alt: 'Kitchen island looking toward the living space', section: 'kitchen' },
        { src: 'assets/projects/greenhurst/photo-04.webp', alt: 'Finished room with two windows and wood-look flooring', section: 'bedrooms' },
        { src: 'assets/projects/greenhurst/photo-08.webp', alt: 'Finished room with a window and recessed lights', section: 'bedrooms' },
        { src: 'assets/projects/greenhurst/photo-09.webp', alt: 'Bedroom with closet and wood-look flooring', section: 'bedrooms' },
        { src: 'assets/projects/greenhurst/photo-10.webp', alt: 'Bedroom viewed toward the doorway', section: 'bedrooms' },
        { src: 'assets/projects/greenhurst/photo-11.webp', alt: 'Hallway connecting the interior rooms', section: 'bedrooms' },
        { src: 'assets/projects/greenhurst/photo-03.webp', alt: 'Bathroom vanity and glass-enclosed tiled shower', section: 'bathrooms' },
        { src: 'assets/projects/greenhurst/photo-07.webp', alt: 'Bathroom vanity, toilet, and window', section: 'bathrooms' }
      ]
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
        {
          slug: 'jasper-siding', title: 'Jasper Siding', category: 'exterior',
          // Latest dated project photo; the cover has no capture-date metadata.
          date: '2025-07-11', sortOrder: 0, showInPortfolio: true,
          href: 'project.html?category=exteriors&project=jasper-siding',
          cover: { src: 'assets/projects/exterior/jasper-siding/cover.webp', alt: 'Jasper home with blue siding, white trim, and a covered porch' },
          images: [
            { src: 'assets/projects/exterior/jasper-siding/img-4923.webp', alt: 'Jasper front porch during siding work, with exposed house wrap on the upper exterior' },
            { src: 'assets/projects/exterior/jasper-siding/img-4924.webp', alt: 'Jasper side exterior during siding installation beside a covered entrance' },
            { src: 'assets/projects/exterior/jasper-siding/img-4997.webp', alt: 'Jasper porch with wood railing beneath upper walls wrapped for siding installation' },
            { src: 'assets/projects/exterior/jasper-siding/img-4999.webp', alt: 'Blue siding and white trim installed around the Jasper front porch' }
          ]
        },
        {
          slug: 'corning-poolhouse', title: 'Corning Poolhouse', category: 'exterior',
          // Latest dated project photo; the cover has no capture-date metadata.
          date: '2024-09-12', sortOrder: 0, showInPortfolio: true,
          href: 'project.html?category=exteriors&project=corning-poolhouse',
          cover: { src: 'assets/projects/exterior/corning-poolhouse/cover.webp', alt: 'Corning poolhouse with dark siding beside a fenced swimming pool' },
          images: [
            { src: 'assets/projects/exterior/corning-poolhouse/img-2837.webp', alt: 'Corning poolhouse with dark vertical siding, white-trimmed windows, and a shingled roof' },
            { src: 'assets/projects/exterior/corning-poolhouse/img-2838.webp', alt: 'Corning poolhouse entrance with glazed doors beside the concrete pool deck' },
            { src: 'assets/projects/exterior/corning-poolhouse/img-3003.webp', alt: 'Corning poolhouse gable and windows viewed beside the pool fence' }
          ]
        },
        {
          slug: 'canisteo', category: 'exterior', title: 'Canisteo Project',
          // Finished-photo capture date; category can be changed independently of this URL.
          date: '2023-10-23', sortOrder: 0,
          href: 'project.html?category=exteriors&project=canisteo',
          showInPortfolio: true,
          cover: { src: 'assets/projects/exterior/canisteo/cover.webp', alt: 'Canisteo home with blue siding, white trim, and a covered front porch' },
          images: [
            { src: 'assets/projects/exterior/canisteo/img-0126.webp', alt: 'Canisteo side entrance during siding installation' },
            { src: 'assets/projects/exterior/canisteo/img-0149.webp', alt: 'Canisteo exterior with blue siding and exposed house wrap during construction' },
            { src: 'assets/projects/exterior/canisteo/img-0553.webp', alt: 'Canisteo front porch and entrance with white railing and blue siding' },
            { src: 'assets/projects/exterior/canisteo/img-0555.webp', alt: 'Canisteo side gable and bay window with blue siding and white trim' },
            { src: 'assets/projects/exterior/canisteo/img-0556.webp', alt: 'Completed Canisteo side entrance and adjoining exterior' }
          ]
        },
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
