import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SnowBackground from '@/components/SnowBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vishnukm.vercel.app'),
  title: 'Vishnu KM | Backend Engineer | Python - Django - FastAPI - PostgreSQL',
  description:
    'Vishnu KM is a Backend Engineer specializing in Python, Django, FastAPI, and PostgreSQL. Serving clients with scalable REST APIs, reliable notifications, and production-grade architectures.',
  keywords: [
    'Vishnu KM',
    'Backend Engineer',
    'Backend Developer',
    'Python Developer',
    'Django Developer',
    'FastAPI Developer',
    'Software Engineer',
    'PostgreSQL',
    'REST API',
    'Kerala Developer',
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
    title: 'Vishnu KM | Backend Engineer | Python - Django - FastAPI - PostgreSQL',
    description:
      'Backend Engineer specializing in Python, Django, FastAPI, and PostgreSQL. Crafting robust APIs and scalable backend architectures.',
    url: 'https://vishnukm.vercel.app',
    siteName: 'Vishnu KM Portfolio',
    images: [
      {
        url: 'https://vishnukm.vercel.app/avatar.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vishnu KM | Backend Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishnu KM | Backend Engineer | Python - Django - FastAPI - PostgreSQL',
    description:
      'Browse the backend portfolio of Vishnu KM, featuring modern systems built with Python, Django, FastAPI, and Postgres.',
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
        jobTitle: "Backend Engineer",
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
          telephone: "+91-8547685825",
          contactType: "technical support",
          areaServed: ["IN"],
          availableLanguage: ["English", "Malayalam", "Hindi"]
        },
        award: "AWS Certified Solutions Architect – Associate",
        description: "Backend Engineer specializing in Python, Django, FastAPI, and PostgreSQL. From Kannur, building scalable robust architectures and real-time APIs."
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
      <body className={`${inter.className} antialiased bg-slate-900 text-white min-h-screen relative`}>
        {/* The beautiful Sonmarg background image */}
        <div 
          className="fixed inset-0 z-[-2] bg-[url('/sonmarg.png')] bg-cover bg-center bg-fixed transition-all"
        />
        {/* A premium glacier-blue dark overlay to ensure maximum contrast for white ice panels */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/90 backdrop-blur-[3px] mix-blend-multiply" />
        
        {/* Cryotech Frame: Simulates frost freezing on the camera/screen edges */}
        <div className="fixed inset-0 z-[60] pointer-events-none animate-[frostBreathe_10s_ease-in-out_infinite] mix-blend-screen" />
        
        <SnowBackground />
        
        <div className="relative z-10 w-full overflow-hidden">
          {children}
        </div>
      </body>

    </html>
  );
}
