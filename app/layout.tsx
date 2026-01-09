import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jordana Laporte | Career Transition Coach Toronto | Life Coach for Career Change",
  description: "Professional career transition coach in Toronto. Specializing in life coaching for career change, career change guidance for mid-career professionals, and life transitions. Gain clarity and build confidence with Jordana Laporte.",
  keywords: ["career transition coach Toronto", "life coach for career change", "career coaching services Toronto", "life coach for career transition", "career change guidance", "Toronto life coach"],
  openGraph: {
    title: "Jordana Laporte | Career Transition Coach Toronto",
    description: "Navigate your next career move with clarity. Professional career transition coaching and life coaching services in Toronto.",
    url: "https://jordanalaporte.com",
    siteName: "Jordana Laporte Coaching",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Jordana Laporte Career Transition Coaching Toronto",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordana Laporte | Career Transition Coach Toronto",
    description: "Professional career transition coaching and life coaching services in Toronto.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
