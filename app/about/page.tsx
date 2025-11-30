import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Ark – Enterprise AI for Operations | Ark Technologies',
  description: 'Learn about Ark Technologies, our mission to bring enterprise AI to operations-first industries, and how we help businesses transform with AI automation.',
  openGraph: {
    title: 'About Ark – Enterprise AI for Operations',
    description: 'Learn about Ark Technologies and our mission to transform operations-first industries with enterprise AI.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ark-blue-pale via-white to-ark-cyan-pale">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' }
          ]} />
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
              About Ark
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Enterprise AI that moves at the speed of your operations
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-6">Our Mission</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            At Ark, we believe that enterprise AI should accelerate operations, not slow them down. We're building AI solutions that work with your existing systems—automating workflows, cleaning data, and accelerating decisions across operations-first industries.
          </p>
          <p className="text-xl text-text-secondary leading-relaxed">
            We focus on Real Estate, Banking & Wealth, Healthcare, and Automotive—industries where operational excellence drives competitive advantage.
          </p>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Why We Exist</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ark-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Speed Matters</h3>
              <p className="text-text-secondary leading-relaxed">
                Traditional enterprise AI takes months or years to deploy. We deliver in weeks because your business can't wait.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ark-cyan rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">No Rip & Replace</h3>
              <p className="text-text-secondary leading-relaxed">
                We integrate with your existing CRMs, ERPs, and databases—no need to rebuild your tech stack from scratch.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ark-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Measurable Impact</h3>
              <p className="text-text-secondary leading-relaxed">
                We're obsessed with outcomes, not features. Every deployment is measured by the business results it delivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-12">What We Do</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-ark-blue mb-3">Automate Workflows</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                From lead qualification to document processing, we automate the repetitive tasks that slow down your team.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-ark-cyan mb-3">Clean & Enrich Data</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Turn unstructured data into actionable insights. Extract, structure, and sync data across your systems automatically.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-ark-orange mb-3">Accelerate Decisions</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Get real-time visibility into your operations with AI-powered dashboards and intelligent alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-6 text-center">Industries We Serve</h2>
          <p className="text-lg text-text-secondary text-center mb-12">
            We specialize in operations-first industries where speed and accuracy drive competitive advantage.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <a href="/case-studies#real-estate" className="bg-white rounded-xl p-6 border border-border-light hover:border-ark-blue hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-ark-blue transition-colors">
                Real Estate
              </h3>
              <p className="text-text-secondary">
                Automate lead response, qualification, and site visit booking. Respond to leads in under 60 seconds.
              </p>
            </a>

            <a href="/case-studies#banking-wealth" className="bg-white rounded-xl p-6 border border-border-light hover:border-ark-orange hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-ark-orange transition-colors">
                Banking & Wealth
              </h3>
              <p className="text-text-secondary">
                Pre-fill KYC forms, automate compliance, and generate personalized portfolio insights.
              </p>
            </a>

            <a href="/case-studies#healthcare" className="bg-white rounded-xl p-6 border border-border-light hover:border-ark-purple hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-ark-purple transition-colors">
                Healthcare
              </h3>
              <p className="text-text-secondary">
                Reduce documentation time, extract insights from radiology reports, and improve EMR data quality.
              </p>
            </a>

            <a href="/case-studies#automotive" className="bg-white rounded-xl p-6 border border-border-light hover:border-ark-cyan hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-ark-cyan transition-colors">
                Automotive
              </h3>
              <p className="text-text-secondary">
                Handle inbound queries, schedule test drives and service appointments, reduce missed calls.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Ready to see Ark in action?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Book a demo to learn how we can help transform your operations with enterprise AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-ark-blue hover:bg-ark-blue-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Book a Demo
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-ark-cyan text-ark-cyan hover:bg-ark-cyan-pale px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

