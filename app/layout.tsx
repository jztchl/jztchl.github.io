import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vishnukm.vercel.app'),
  title: 'Vishnu KM | Full Stack Developer | Backend & Frontend Expert',
  description:
    'Vishnu KM is a Full Stack Developer specializing in React, Next.js, Django & Node.js. Serving clients across Kerala, Bangalore, Pune, Hyderabad & beyond with scalable, clean, and innovative web apps.',
  keywords: [
    'Vishnu KM',
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Django Developer',
    'Node.js Developer',
    'Backend Developer',
    'Frontend Developer',
    'Kerala Developer',
    'Bangalore Developer',
    'Pune Developer',
    'Hyderabad Developer',
    'Portfolio Website',
  ].join(', '),
  authors: [{ name: 'Vishnu KM', url: 'https://github.com/jztchl' }],
  creator: 'Vishnu KM',
  publisher: 'Vishnu KM',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
  openGraph: {
    title: 'Vishnu KM | Full Stack Developer | Backend & Frontend Expert',
    description:
      'Discover modern web projects by Vishnu KM using React, Next.js, Django, and Node.js. Built for performance, scalability, and creativity.',
    url: 'https://vishnukm.vercel.app',
    siteName: 'Vishnu KM Portfolio',
    images: [
      {
        url: 'https://vishnukm.vercel.app/avatar.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vishnu KM | Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishnu KM | Full Stack Developer | Backend & Frontend Expert',
    description:
      'Browse the professional portfolio of Vishnu KM, featuring cutting-edge web solutions built with React, Django, and more.',
    creator: '@vishnukm',
    images: ['https://vishnukm.vercel.app/avatar.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Vishnu KM",
        url: "https://vishnukm.vercel.app",
        image: "https://vishnukm.vercel.app/avatar.jpeg",
        sameAs: [
          "https://github.com/jztchl",
          "https://linkedin.com/in/kmvishnu",
          "mailto:kmvishnu625@gmail.com"
        ],
        jobTitle: "Full Stack Developer & Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance / Open Source"
        },
        address: [
          { "@type": "PostalAddress", addressLocality: "Kannur", addressRegion: "Kerala", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Wayanad", addressRegion: "Kerala", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Kozhikode", addressRegion: "Kerala", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Trivandrum", addressRegion: "Kerala", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Kochi", addressRegion: "Kerala", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
          { "@type": "PostalAddress", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", addressCountry: "IN" }
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-1234567890",
          contactType: "technical support",
          areaServed: ["IN"],
          availableLanguage: ["English", "Malayalam"]
        },
        award: "AWS Certified Solutions Architect – Associate",
        description: "Full Stack Developer and Software Engineer specializing in scalable web apps, representing tech hubs from Kerala to major Indian cities. Passionate about clean code and innovation."
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://vishnukm.vercel.app"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: "https://vishnukm.vercel.app/portfolio"
          }
        ]
      },
      {
        "@type": "Organization",
        name: "Vishnu KM Freelance",
        url: "https://vishnukm.vercel.app",
        logo: "https://vishnukm.vercel.app/avatar.jpeg",
        sameAs: [
          "https://github.com/jztchl",
          "https://linkedin.com/in/kmvishnu"
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
