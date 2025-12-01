import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/ark-logo.png" 
                alt="Ark Technologies" 
                width={40} 
                height={40}
              />
              <span className="text-xl font-bold text-text-primary">Ark</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Enterprise AI for operations-first industries.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">About Ark</a></li>
              <li><a href="/careers" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">Careers</a></li>
              <li><a href="/contact" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="/case-studies" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">Case Studies</a></li>
              <li><a href="/integrations" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">Integrations</a></li>
              <li><a href="/how-we-work" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">Our Process</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">Terms of Service</a></li>
              <li><a href="/security" className="text-text-secondary hover:text-ark-blue transition-colors text-sm">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-tertiary text-sm">
              © 2025 Ark Technologies. Enterprise AI for operations-first industries.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/company/ark-technologies" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-ark-blue transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/arktechnologies" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-ark-blue transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

