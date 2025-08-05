import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vishnu KM | Full Stack Developer & Software Engineer',
  description: 'Professional portfolio of Vishnu KM, a results-driven Full Stack Developer with expertise in React, Next.js, Django, and Node.js. Showcasing innovative web solutions, real-world projects, and scalable software architecture.',
  keywords: [
    'Vishnu KM', 'Full Stack Developer', 'Software Engineer', 'Web Developer',
    'React Developer', 'Next.js Developer', 'TypeScript Developer',
    'Django Developer', 'Node.js Developer', 'Backend Developer',
    'Frontend Developer', 'Modern Web Apps', 'Portfolio Website',
    'Open Source Contributor', 'Freelance Software Engineer'
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
    title: 'Vishnu KM | Full Stack Developer & Software Engineer',
    description: 'Discover modern web projects by Vishnu KM using React, Next.js, Django, and Node.js. Built for performance, scalability, and creativity.',
    url: 'https://jztchl.vercel.app',
    siteName: 'Vishnu KM Portfolio',
    images: [
      {
        url: 'https://jztchl.vercel.app/avatar.jpeg',
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
    title: 'Vishnu KM | Full Stack Developer & Software Engineer',
    description: 'Browse the professional portfolio of Vishnu KM, featuring cutting-edge web solutions built with React, Django, and more.',
    creator: '@jztchl',
    images: ['https://jztchl.vercel.app/avatar.jpeg'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head><script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vishnu KM",
  "url": "https://jztchl.vercel.app",
  "image": "https://jztchl.vercel.app/avatar.jpeg",
  "sameAs": [
    "https://github.com/jztchl",
    "https://linkedin.com/in/jztchl",
    "mailto:jztchl@gmail.com"
  ],
  "jobTitle": "Full Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance / Open Source"
  }
})}
</script>
</head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}