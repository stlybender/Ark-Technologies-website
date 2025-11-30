import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Our Steps – Ark Enterprise AI',
  description: 'From discovery to deployment, see how Ark delivers measurable impact in weeks, not months.',
};

export default function HowWeWorkPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-8 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Our Steps', href: '/how-we-work' }
          ]} />
        </div>
      </div>
      <HowWeWorkSection />
      <Footer />
    </main>
  );
}

