import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'residential-electrical',
    title: 'Residential Electrical',
    slug: 'residential-electrical',
    shortDescription: 'Full-service home electrical repairs, wiring, and code compliance in Astoria & Queens.',
    description: 'Complete home electrical solutions tailored for Astoria & Queens residents. From minor repairs to full-house rewiring, we ensure safety, efficiency, and full NEC code compliance.',
    icon: 'home',
    image: '/images/services/residential.jpg',
    features: ['Electrical Troubleshooting', 'Outlet & Switch Installation', 'Ceiling Fan Installation', 'Code Compliance Corrections']
  },
  {
    id: 'commercial-electrical',
    title: 'Commercial Electrical',
    slug: 'commercial-electrical',
    shortDescription: 'Reliable electrical build-outs, lighting design, and maintenance for NYC businesses.',
    description: 'Professional commercial electrical solutions for NYC businesses. Specialized build-outs, LED retrofits, and 24/7 maintenance designed to eliminate downtime.',
    icon: 'building-2',
    image: '/images/services/commercial.jpg',
    features: ['Office Build-outs', 'Retail Lighting Design', 'Dedicated Circuit Installation', 'Maintenance Contracts']
  },
  {
    id: 'panel-upgrades',
    title: 'Panel Upgrades',
    slug: 'panel-upgrades',
    shortDescription: 'Modernize outdated 100A panels to 200A for safe, heavy-demand power distribution.',
    description: 'Upgrade outdated or unsafe electrical panels to 200A service. Ensure safe, seamless power distribution for modern high-wattage home appliances.',
    icon: 'zap',
    image: '/images/services/panel-upgrade.jpg',
    features: ['100A to 200A Upgrades', 'Sub-panel Installation', 'Circuit Breaker Replacement', 'Surge Protection Integration']
  },
  {
    id: 'wiring-rewiring',
    title: 'Wiring & Rewiring',
    slug: 'wiring-rewiring',
    shortDescription: 'Safe removal of knob-and-tube wiring with modern NEC compliant installations.',
    description: 'Safe rewiring for older Astoria properties. We replace outdated knob-and-tube or aluminum wiring with high-grade, code-compliant copper systems.',
    icon: 'cable',
    image: '/images/services/residential.jpg',
    features: ['Whole-Home Rewiring', 'Knob & Tube Replacement', 'Aluminum Wiring Mitigation', 'Appliance Wiring']
  },
  {
    id: 'lighting-installation',
    title: 'Lighting Installation',
    slug: 'lighting-installation',
    shortDescription: 'Architectural interior, recessed LED, and landscape outdoor lighting designs.',
    description: 'Custom interior & exterior lighting design in Queens, NYC. High-efficiency LED recessed lights, elegant chandeliers, and landscape security fixtures.',
    icon: 'lightbulb',
    image: '/images/services/lighting.jpg',
    features: ['Recessed Lighting', 'Chandelier Installation', 'Outdoor & Landscape Lighting', 'Security Lighting']
  },
  {
    id: 'ev-charger-installation',
    title: 'EV Charger Installation',
    slug: 'ev-charger-installation',
    shortDescription: 'Level 2 EV charging stations installed for Tesla, ChargePoint, and all electric vehicles.',
    description: 'Certified Level 2 EV charger installation for Tesla and universal electric vehicles. Fast home charging setups with complete NYC DOB permitting support.',
    icon: 'car',
    image: '/images/services/ev-charger.jpg',
    features: ['Tesla Wall Connector Installation', 'Universal Level 2 Chargers', 'Load Calculation', 'Permitting Assistance']
  },
  {
    id: 'smart-home-setup',
    title: 'Smart Home Setup',
    slug: 'smart-home-setup',
    shortDescription: 'Seamless automation for smart dimmers, thermostats, doorbells, and shade controls.',
    description: 'Complete home automation solutions. Professional installation of smart switches, Lutron dimmers, Ring doorbells, and smart climate controls.',
    icon: 'smartphone',
    image: '/images/services/smart-home.jpg',
    features: ['Smart Switches & Dimmers', 'Video Doorbell Installation', 'Smart Thermostats', 'Automated Blinds Wiring']
  },
  {
    id: 'generator-installation',
    title: 'Generator Installation',
    slug: 'generator-installation',
    shortDescription: 'Whole-home standby generators & transfer switches for emergency blackout protection.',
    description: 'Automatic standby generator installation in Astoria, Queens. Ensure continuous uninterrupted power during NYC grid outages.',
    icon: 'battery-charging',
    image: '/images/services/panel-upgrade.jpg',
    features: ['Standby Generator Installation', 'Transfer Switch Setup', 'Portable Generator Connections', 'Maintenance Services']
  },
  {
    id: 'surge-protection',
    title: 'Surge Protection',
    slug: 'surge-protection',
    shortDescription: 'Whole-house panel surge protectors safeguarding electronics from voltage spikes.',
    description: 'Panel-mounted whole-home surge protection. Safeguard expensive electronics and appliances against power spikes and lightning strikes.',
    icon: 'shield',
    image: '/images/services/panel-upgrade.jpg',
    features: ['Whole-House Surge Protectors', 'Panel-Mounted Devices', 'Equipment Protection Guarantees', 'Lightning Protection']
  },
  {
    id: 'emergency-services',
    title: 'Emergency Services',
    slug: 'emergency-services',
    shortDescription: '24/7 immediate electrician dispatch for power outages, shorts, and sparking outlets.',
    description: 'Rapid 24/7 emergency electrical response across Astoria & Queens. Fast resolution for power loss, sparking outlets, and electrical hazards.',
    icon: 'alert-triangle',
    image: '/images/services/commercial.jpg',
    features: ['24/7 Availability', 'Rapid Response Time', 'Fault Locating', 'Temporary Power Solutions']
  }
];
