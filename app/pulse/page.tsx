import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PulseContent from "./PulseContent";

export const metadata: Metadata = {
  title: "Pulse — the AI-native CRM by ARK Technologies",
  description:
    "Pulse captures leads from every channel your team uses, drafts replies and quotations from the email thread, and keeps deals moving with AI that never invents a number. Purpose-built for B2B sales teams.",
  openGraph: {
    title: "Pulse — the AI-native CRM by ARK Technologies",
    description:
      "An AI-native CRM for B2B sales teams. Lead capture, two-way email, AI document generation, audit-trailed forecasting — purpose-built, operated for you.",
    type: "website",
    url: "https://arktechnologies.ai/pulse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse — the AI-native CRM by ARK Technologies",
    description: "An AI-native CRM for B2B sales teams. Purpose-built, operated for you.",
  },
};

export default function PulsePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PulseContent />
      <Footer />
    </main>
  );
}
