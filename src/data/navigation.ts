import { NavItem } from '../types';

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Residential Electrical', href: '/services/residential-electrical' },
      { label: 'Commercial Electrical', href: '/services/commercial-electrical' },
      { label: 'Panel Upgrades', href: '/services/panel-upgrades' },
      { label: 'Wiring & Rewiring', href: '/services/wiring-rewiring' },
      { label: 'Lighting Installation', href: '/services/lighting-installation' },
      { label: 'EV Charger Installation', href: '/services/ev-charger-installation' },
      { label: 'Smart Home Setup', href: '/services/smart-home-setup' },
      { label: 'Generator Installation', href: '/services/generator-installation' },
      { label: 'Surge Protection', href: '/services/surge-protection' },
      { label: 'Emergency Services', href: '/services/emergency-services' },
    ]
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Contact',
    href: '/contact',
  }
];
