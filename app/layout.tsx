import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARK Enterprise AI – Operations-First AI for Real Estate, Banking, Healthcare",
  description: "Cut lead response time, automate KYC, reduce EMR documentation time. ARK connects to your DMS, CRM, SIP, EMR/EHR, and PACS/RIS to automate workflows without ripping out your systems.",
  metadataBase: new URL('https://ARKtechnologies.ai'),
  icons: {
    icon: "/ARK-logo.svg",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ARKtechnologies.ai',
    siteName: 'ARK Technologies',
    title: 'ARK Enterprise AI – Operations-First AI for Real Estate, Banking, Healthcare',
    description: 'Cut lead response time, automate KYC, reduce EMR documentation time. ARK automates workflows across Real Estate, Banking, Healthcare, and Automotive.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'ARK Technologies - Enterprise AI that moves at the speed of your operations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ARKtechnologies',
    creator: '@ARKtechnologies',
    title: 'ARK Enterprise AI – Operations-First AI',
    description: 'Enterprise AI that moves at the speed of your operations. Automate workflows across Real Estate, Banking, Healthcare, and Automotive.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'enterprise AI',
    'real estate AI',
    'banking automation',
    'healthcare AI',
    'automotive AI',
    'workflow automation',
    'CRM automation',
    'KYC automation',
    'EMR automation',
    'AI voice assistant',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
