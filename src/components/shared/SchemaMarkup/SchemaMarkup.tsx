import { siteConfig } from '@/data/siteConfig';

interface SchemaMarkupProps {
  type?: 'LocalBusiness' | 'FAQPage' | 'Service' | 'AboutPage';
  data?: Record<string, any>;
}

export default function SchemaMarkup({ type = 'LocalBusiness', data = {} }: SchemaMarkupProps) {
  let schemaData: Record<string, any> = {};

  if (type === 'LocalBusiness') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: siteConfig.name,
      image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://idealelectricpros.com'}/images/hero/hero-home.jpg`,
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://idealelectricpros.com'}#localbusiness`,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://idealelectricpros.com',
      telephone: siteConfig.phone,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.7686, // Steinway St coordinates
        longitude: -73.9118,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '00:00',
          closes: '23:59',
          description: 'Emergency Services Only',
        },
      ],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Astoria',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Queens',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'New York City',
        },
      ],
      sameAs: [
        siteConfig.socialLinks.facebook,
        siteConfig.socialLinks.instagram,
        siteConfig.socialLinks.yelp,
      ],
      ...data,
    };
  } else {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
