import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Historic Astoria Home Rewiring',
    category: 'residential',
    description: 'Complete removal of knob-and-tube wiring and installation of a modern 200A service panel in a historic 1920s Astoria property.',
    image: '/images/services/residential.jpg',
    location: 'Astoria, NY'
  },
  {
    id: 'p2',
    title: 'Boutique Cafe Build-out',
    category: 'commercial',
    description: 'Custom lighting design, dedicated equipment circuits, and comprehensive wiring for a new coffee shop on Steinway Street.',
    image: '/images/services/commercial.jpg',
    location: 'Astoria, NY'
  },
  {
    id: 'p3',
    title: 'Emergency Storm Repair',
    category: 'emergency',
    description: 'Rapid response to restore power and replace a damaged exterior service mast after severe weather.',
    image: '/images/services/commercial.jpg',
    location: 'Queens, NY'
  },
  {
    id: 'p4',
    title: 'Multi-Family EV Charging Hub',
    category: 'residential',
    description: 'Installation of six Level 2 EV charging stations with dynamic load management for a residential cooperative.',
    image: '/images/services/ev-charger.jpg',
    location: 'Long Island City, NY'
  },
  {
    id: 'p5',
    title: 'Office Space Lighting Retrofit',
    category: 'commercial',
    description: 'Conversion of outdated fluorescent office lighting to energy-efficient LED panels with smart occupancy sensors.',
    image: '/images/services/lighting.jpg',
    location: 'Sunnyside, NY'
  },
  {
    id: 'p6',
    title: 'Smart Home Integration Project',
    category: 'residential',
    description: 'Whole-home automation featuring smart lighting, motorized shades, and integrated security camera wiring.',
    image: '/images/services/smart-home.jpg',
    location: 'Astoria, NY'
  }
];
