import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import styles from './privacy-policy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy of Ideal Electric Pros Inc. Learn how we collect, protect, and handle your contact information securely.',
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Privacy Policy</span>
        </div>

        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last Updated: {currentDate}</p>

        <div className={styles.content}>
          <p>
            At <strong>Ideal Electric Pros Inc</strong>, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ideal Electric Pros Inc and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>{siteConfig.email}</strong>.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly using our Contact Form, we may receive additional information about you such as:
          </p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>The type of electrical service requested</li>
            <li>The content of the message or files you may send us</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new services, features, and functionality</li>
            <li>Communicate with you to schedule electrical work or provide estimates</li>
            <li>Send you confirmation emails and service updates</li>
            <li>Find and prevent spam and fraud (including reCAPTCHA spam scores)</li>
          </ul>

          <h2>3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, Ideal Electric Pros Inc uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>
          <p>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
          </p>

          <h2>4. Security of Your Data</h2>
          <p>
            The security of your personal data is extremely important to us. We implement strict input validation, rate limiting, and secure environment configuration to ensure that data submitted through our forms cannot be read by unauthorized parties. We do not store credit card details or database passwords in our frontend code.
          </p>
          <p>
            Please note that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may use third-party Service Providers to monitor and analyze the use of our Service, or to verify submissions (such as Google reCAPTCHA v3 for spam prevention). These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
          </p>
          <p className={styles.addressBlock}>
            <strong>Ideal Electric Pros Inc</strong><br />
            25-78 Steinway St, Astoria, NY 11103, United States<br />
            Phone: {siteConfig.phone}<br />
            Email: {siteConfig.email}
          </p>
        </div>
      </div>
    </div>
  );
}
