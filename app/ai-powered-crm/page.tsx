import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PulseContent from "./PulseContent";

export const metadata: Metadata = {
  title: "AI-Powered CRM — built and operated by ARK Technologies",
  description:
    "An AI-native CRM that captures leads from every channel, drafts replies and quotations from the email thread, and keeps deals moving with AI that never invents a number. Purpose-built for B2B sales teams.",
  openGraph: {
    title: "AI-Powered CRM — built and operated by ARK Technologies",
    description:
      "An AI-native CRM for B2B sales teams. Lead capture, two-way email, AI document generation, audit-trailed forecasting — purpose-built, operated for you.",
    type: "website",
    url: "https://arktechnologies.ai/ai-powered-crm",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered CRM — built and operated by ARK Technologies",
    description: "An AI-native CRM for B2B sales teams. Purpose-built, operated for you.",
  },
};

export default function AIPoweredCRMPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PulseContent />
      <Footer />
    </main>
  );
}
