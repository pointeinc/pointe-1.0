// Guide content is independent of portfolio data. See BUILDING-GUIDE.md.
const buildingGuideData = {
  categories: [
    { id: 'foundations', name: 'Site & Foundations' },
    { id: 'structure', name: 'Structure' },
    { id: 'roofing', name: 'Roofing' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'envelope', name: 'Insulation & Building Envelope' },
    { id: 'mechanical', name: 'Mechanical Systems' },
    { id: 'interior', name: 'Interior & Finish' }
  ],
  options: [
    { id: 'block', category: 'foundations', name: 'Block' },
    { id: 'icf', category: 'foundations', name: 'ICF' },
    { id: 'monolithic-slab', category: 'foundations', name: 'Monolithic Slab' },
    { id: 'superior-walls', category: 'foundations', name: 'Superior Walls' },
    { id: 'traditional-wood-framing', category: 'structure', name: 'Traditional Wood Framing' },
    { id: 'post-frame-construction', category: 'structure', name: 'Post-Frame Construction' },
    { id: 'engineered-lumber', category: 'structure', name: 'Engineered Lumber' },
    { id: 'roof-floor-trusses', category: 'structure', name: 'Roof & Floor Trusses' },
    { id: 'asphalt-shingles', category: 'roofing', name: 'Asphalt Shingles' },
    { id: 'standing-seam-metal', category: 'roofing', name: 'Standing-Seam Metal' },
    { id: 'exposed-fastener-metal', category: 'roofing', name: 'Exposed-Fastener Metal' },
    { id: 'vinyl-siding', category: 'exterior', name: 'Vinyl Siding' },
    { id: 'fiber-cement-siding', category: 'exterior', name: 'Fiber Cement Siding' },
    { id: 'metal-siding', category: 'exterior', name: 'Metal Siding' },
    { id: 'stone-masonry', category: 'exterior', name: 'Stone & Masonry' },
    { id: 'fiberglass-batt', category: 'envelope', name: 'Fiberglass Batt' },
    { id: 'blown-in-cellulose', category: 'envelope', name: 'Blown-In Cellulose' },
    { id: 'spray-foam', category: 'envelope', name: 'Spray Foam' },
    { id: 'rockwool-mineral-wool', category: 'envelope', name: 'Rockwool / Mineral Wool' },
    { id: 'rigid-foam-continuous-insulation', category: 'envelope', name: 'Rigid Foam / Continuous Insulation' },
    { id: 'heat-pumps', category: 'mechanical', name: 'Heat Pumps' },
    { id: 'gas-furnaces', category: 'mechanical', name: 'Gas Furnaces' },
    { id: 'geothermal', category: 'mechanical', name: 'Geothermal' },
    { id: 'ductless-mini-splits', category: 'mechanical', name: 'Ductless Mini-Splits' },
    { id: 'flooring', category: 'interior', name: 'Flooring' },
    { id: 'cabinetry-countertops', category: 'interior', name: 'Cabinetry & Countertops' },
    { id: 'tile-showers', category: 'interior', name: 'Tile & Showers' },
    { id: 'trim-finish-carpentry', category: 'interior', name: 'Trim & Finish Carpentry' }
  ].map(option => ({
    costLevel: null, // Set manually to 1, 2, or 3; null means not yet assigned.
    shortDescription: '',
    description: '',
    pros: [],
    considerations: [],
    applications: [],
    coverImage: '',
    coverAlt: '',
    images: [],
    ...option
  }))
};
