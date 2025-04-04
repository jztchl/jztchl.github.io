import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import personalInfo from "../data/personal_info.json";
import additionalInfo from "../data/additional_info.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Centralized metadata in layout.tsx
export const metadata = {
  metadataBase: new URL("https://vishnukm.vercel.app"),
  title: `${personalInfo.name} | ${personalInfo.title} Portfolio`,
  description: `${personalInfo.bio} | Specializing in ${additionalInfo.technical_skills.join(", ")} jztchl`,
  keywords: [
    ...additionalInfo.technical_skills,
    personalInfo.title,
    personalInfo.location,
    "jztchl",
    "django",
    "python",
    "portfolio",
    "developer",
    "software engineer",
    "tiqr"
  ].join(", "),
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title} Portfolio`,
    description: `${personalInfo.bio} | Specializing in ${additionalInfo.technical_skills.join(", ")} jztchl`,
    url: "https://vishnukm.vercel.app",
    type: "website",
    images: ["/images/social-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title} Portfolio`,
    description: `${personalInfo.bio} | Specializing in ${additionalInfo.technical_skills.join(", ")} jztchl`,
    images: ["/images/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
