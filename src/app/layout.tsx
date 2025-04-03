import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import personalInfo from '../data/personal_info.json';
import additionalInfo from '../data/additional_info.json';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${personalInfo.name} | ${personalInfo.title} Portfolio`,
  description: `${personalInfo.bio} | Specializing in ${additionalInfo.technical_skills.join(', ')}`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
