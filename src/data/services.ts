import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'residential-electrical',
    title: 'Residential Electrical',
    slug: 'residential-electrical',
    shortDescription: 'Complete residential electrical services for your home in Astoria and Queens.',
    description: 'Our residential electrical services cover everything from minor repairs to complete home rewiring. We prioritize the safety and efficiency of your home\'s electrical system, providing reliable solutions tailored to your needs.',
    icon: 'home',
    image: '/images/services/residential.jpg',
    features: ['Electrical Troubleshooting', 'Outlet & Switch Installation', 'Ceiling Fan Installation', 'Code Compliance Corrections']
  },
  {
    id: 'commercial-electrical',
    title: 'Commercial Electrical',
    slug: 'commercial-electrical',
    shortDescription: 'Expert electrical solutions for businesses and commercial properties.',
    description: 'We provide comprehensive commercial electrical services to keep your business running smoothly. From build-outs and lighting retrofits to routine maintenance, our team minimizes downtime and maximizes efficiency.',
    icon: 'building-2',
    image: '/images/services/commercial.jpg',
    features: ['Office Build-outs', 'Retail Lighting Design', 'Dedicated Circuit Installation', 'Maintenance Contracts']
  },
  {
    id: 'panel-upgrades',
    title: 'Panel Upgrades',
    slug: 'panel-upgrades',
    shortDescription: 'Modernize your electrical panel to handle today\'s power demands safely.',
    description: 'Older homes often struggle with modern power requirements. We upgrade outdated electrical panels (including replacing dangerous Federal Pacific or Zinsco panels) to ensure safe, reliable power distribution throughout your property.',
    icon: 'zap',
    image: '/images/services/panel-upgrade.jpg',
    features: ['100A to 200A Upgrades', 'Sub-panel Installation', 'Circuit Breaker Replacement', 'Surge Protection Integration']
  },
  {
    id: 'wiring-rewiring',
    title: 'Wiring & Rewiring',
    slug: 'wiring-rewiring',
    shortDescription: 'Safe and code-compliant wiring solutions for new construction and renovations.',
    description: 'Whether you are renovating an older Astoria home with knob-and-tube wiring or building from scratch, our expert rewiring services ensure your property meets all current NEC codes and local NYC regulations.',
    icon: 'cable',
    image: '/images/services/residential.jpg',
    features: ['Whole-Home Rewiring', 'Knob & Tube Replacement', 'Aluminum Wiring Mitigation', 'Appliance Wiring']
  },
  {
    id: 'lighting-installation',
    title: 'Lighting Installation',
    slug: 'lighting-installation',
    shortDescription: 'Custom interior and exterior lighting design and installation.',
    description: 'Transform your space with our professional lighting installation services. We specialize in recessed lighting, elegant fixtures, landscape lighting, and energy-efficient LED retrofits to enhance aesthetics and reduce utility bills.',
    icon: 'lightbulb',
    image: '/images/services/lighting.jpg',
    features: ['Recessed Lighting', 'Chandelier Installation', 'Outdoor & Landscape Lighting', 'Security Lighting']
  },
  {
    id: 'ev-charger-installation',
    title: 'EV Charger Installation',
    slug: 'ev-charger-installation',
    shortDescription: 'Level 2 EV charging stations installed at your home or business.',
    description: 'Get ready for the future of transportation. We install dedicated circuits and Level 2 electric vehicle charging stations from top brands like Tesla, ChargePoint, and JuiceBox, ensuring fast and safe charging at home.',
    icon: 'car',
    image: '/images/services/ev-charger.jpg',
    features: ['Tesla Wall Connector Installation', 'Universal Level 2 Chargers', 'Load Calculation', 'Permitting Assistance']
  },
  {
    id: 'smart-home-setup',
    title: 'Smart Home Setup',
    slug: 'smart-home-setup',
    shortDescription: 'Integrate smart technology for a more convenient and efficient home.',
    description: 'Upgrade to a smart home with automated lighting, smart thermostats, and integrated security systems. We install and configure devices from Lutron, Nest, Ring, and more, giving you control from anywhere.',
    icon: 'smartphone',
    image: '/images/services/smart-home.jpg',
    features: ['Smart Switches & Dimmers', 'Video Doorbell Installation', 'Smart Thermostats', 'Automated Blinds Wiring']
  },
  {
    id: 'generator-installation',
    title: 'Generator Installation',
    slug: 'generator-installation',
    shortDescription: 'Reliable backup power solutions to keep the lights on during outages.',
    description: 'Never be left in the dark again. We install whole-home standby generators and portable generator transfer switches, providing peace of mind and continuous power during NYC grid outages.',
    icon: 'battery-charging',
    image: '/images/services/panel-upgrade.jpg',
    features: ['Standby Generator Installation', 'Transfer Switch Setup', 'Portable Generator Connections', 'Maintenance Services']
  },
  {
    id: 'surge-protection',
    title: 'Surge Protection',
    slug: 'surge-protection',
    shortDescription: 'Whole-home surge protection to safeguard your valuable electronics.',
    description: 'Protect your expensive appliances, computers, and home entertainment systems from damaging power spikes. Our whole-house surge protectors are installed directly at the electrical panel to intercept surges before they enter your home wiring.',
    icon: 'shield',
    image: '/images/services/panel-upgrade.jpg',
    features: ['Whole-House Surge Protectors', 'Panel-Mounted Devices', 'Equipment Protection Guarantees', 'Lightning Protection']
  },
  {
    id: 'emergency-services',
    title: 'Emergency Services',
    slug: 'emergency-services',
    shortDescription: '24/7 rapid response for critical electrical emergencies.',
    description: 'Electrical emergencies don\'t wait for business hours. Whether it\'s a sparking outlet, a complete power loss, or storm damage, our emergency response team is available 24/7 in Astoria and surrounding areas to restore safety quickly.',
    icon: 'alert-triangle',
    image: '/images/services/commercial.jpg',
    features: ['24/7 Availability', 'Rapid Response Time', 'Fault Locating', 'Temporary Power Solutions']
  }
];
