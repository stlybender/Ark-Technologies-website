import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Careers at Ark – Join Our Team | Ark Technologies',
  description: 'Join Ark Technologies and help build enterprise AI solutions for operations-first industries. Explore career opportunities in AI, engineering, and product.',
  openGraph: {
    title: 'Careers at Ark – Join Our Team',
    description: 'Join Ark Technologies and help build enterprise AI solutions for operations-first industries.',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ARK-blue-pale via-white to-ARK-cyan-pale">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Careers', href: '/careers' }
          ]} />
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
              Build the Future of Enterprise AI
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Join our team of engineers, designers, and operators building AI solutions that transform operations-first industries.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Ark */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Why Join Ark?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg-secondary rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ARK-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Move Fast</h3>
              <p className="text-text-secondary leading-relaxed">
                We ship in weeks, not quarters. Your work directly impacts enterprise customers across Real Estate, Banking, Healthcare, and Automotive.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ARK-cyan rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Learn & Grow</h3>
              <p className="text-text-secondary leading-relaxed">
                Work with cutting-edge AI models, integrate with enterprise systems, and solve complex operational challenges.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ARK-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Small Team, Big Impact</h3>
              <p className="text-text-secondary leading-relaxed">
                Work directly with founders and customers. Every team member shapes product, culture, and company direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">What We're Looking For</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-border-light">
              <h3 className="text-2xl font-bold text-ARK-blue mb-3">Engineers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Full-stack, backend, AI/ML, and infrastructure engineers who can build scalable, production-ready systems.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-blue mt-2 mr-3 flex-shrink-0"></span>
                  <span>Experience with Python, TypeScript, React, or Next.js</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-blue mt-2 mr-3 flex-shrink-0"></span>
                  <span>Passion for AI/LLMs and enterprise integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-blue mt-2 mr-3 flex-shrink-0"></span>
                  <span>Comfortable working in fast-paced, customer-facing environments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border-light">
              <h3 className="text-2xl font-bold text-ARK-cyan mb-3">Product & Design</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Product managers and designers who understand enterprise workflows and can build intuitive solutions.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-cyan mt-2 mr-3 flex-shrink-0"></span>
                  <span>Experience with enterprise B2B products</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-cyan mt-2 mr-3 flex-shrink-0"></span>
                  <span>Strong user research and data-driven decision-making skills</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-cyan mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ability to balance user needs with technical constraints</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border-light">
              <h3 className="text-2xl font-bold text-ARK-orange mb-3">Sales & Customer Success</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Customer-facing roles helping enterprises deploy and scale our AI solutions.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-orange mt-2 mr-3 flex-shrink-0"></span>
                  <span>Experience selling or implementing enterprise software</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-orange mt-2 mr-3 flex-shrink-0"></span>
                  <span>Understanding of operations-first industries (Real Estate, Banking, Healthcare, Automotive)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ARK-orange mt-2 mr-3 flex-shrink-0"></span>
                  <span>Technical aptitude and ability to learn complex systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-6 text-center">Open Positions</h2>
          <p className="text-xl text-text-secondary text-center mb-12">
            We're actively hiring for the following roles:
          </p>
          
          <div className="bg-ARK-blue-pale border border-ARK-blue/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">We're Growing!</h3>
            <p className="text-lg text-text-secondary mb-6">
              We're hiring across engineering, product, and customer-facing roles. Even if you don't see a specific opening, we'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-ARK-blue hover:bg-ARK-blue-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Our Values</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-ARK-blue rounded-full flex items-center justify-center mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Customer Obsession</h3>
                <p className="text-text-secondary leading-relaxed">
                  We measure success by customer outcomes, not feature lists. Every decision starts with "does this help our customers move faster?"
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-ARK-cyan rounded-full flex items-center justify-center mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Bias for Action</h3>
                <p className="text-text-secondary leading-relaxed">
                  We ship quickly, learn from real deployments, and iterate. Speed is a feature.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-ARK-orange rounded-full flex items-center justify-center mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Radical Transparency</h3>
                <p className="text-text-secondary leading-relaxed">
                  We share context openly, admit mistakes quickly, and trust each team member with company information.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-ARK-purple rounded-full flex items-center justify-center mt-1">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Technical Excellence</h3>
                <p className="text-text-secondary leading-relaxed">
                  We care about code quality, system design, and building products that scale. Good engineering is good business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Send your resume and a note about what you're excited to build.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-ARK-blue hover:bg-ARK-blue-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

