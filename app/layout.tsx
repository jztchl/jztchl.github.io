import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vishnu KM - Software Engineer & Full Stack Developer',
  description: 'Professional portfolio showcasing modern web development projects, technical expertise, and innovative solutions.',
  keywords: 'software engineer, full stack developer, web development, React, Next.js, TypeScript',
  authors: [{ name: 'Vishnu KM' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}