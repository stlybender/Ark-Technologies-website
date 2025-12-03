import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image 
                src="/ark-full-logo.png" 
                alt="ARK Technologies - Transforming Businesses, Preserving Values" 
                width={300} 
                height={150}
                className="w-full max-w-[200px] h-auto"
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Enterprise AI for operations-first industries.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">About ARK</a></li>
              <li><a href="/careers" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">Careers</a></li>
              <li><a href="/contact" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="/case-studies" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">Case Studies</a></li>
              <li><a href="/integrations" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">Integrations</a></li>
              <li><a href="/how-we-work" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">Our Process</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">Terms of Service</a></li>
              <li><a href="/security" className="text-text-secondary hover:text-ARK-blue transition-colors text-sm">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-tertiary text-sm">
              © 2025 ARK Technologies. Enterprise AI for operations-first industries.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

