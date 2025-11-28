import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectorHighlights from '@/components/SectorHighlights';
import CaseStudies from '@/components/CaseStudies';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectorHighlights />
      <CaseStudies />
      <Footer />
    </main>
  );
}
