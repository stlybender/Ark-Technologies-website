import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ark Enterprise AI – Operations-First AI for Real Estate, Banking, Healthcare",
  description: "Cut lead response time, automate KYC, reduce EMR documentation time. Ark connects to your DMS, CRM, SIP, EMR/EHR, and PACS/RIS to automate workflows without ripping out your systems.",
  icons: {
    icon: "/ark-logo.svg",
  },
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
