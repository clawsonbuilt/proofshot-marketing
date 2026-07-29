import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Industries", href: "/industries/pressure-washing" },
    { name: "Compare", href: "/compare/companycam" },
  ],
  industries: [
    { name: "Owner Operators", href: "/industries/owner-operator", featured: true },
    { name: "Pressure Washing", href: "/industries/pressure-washing" },
    { name: "Pest Control", href: "/industries/pest-control" },
    { name: "Landscaping", href: "/industries/landscaping" },
    { name: "More Industries →", href: "/industries/painting" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="block mb-6">
              <Image
                src="/logos/logo-orange-light-horizontal.svg"
                alt="ProofShot Pro"
                width={92}
                height={18}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              The easiest way for contractors to document work and share proof.
            </p>
            <Link
              href="https://app.proofshotpro.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange hover:text-white font-medium text-sm transition-colors"
            >
              Claim My Free Account →
            </Link>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm hover:text-orange transition-colors ${
                      link.featured ? "text-orange" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} ProofShot Pro. All rights reserved.</p>
          <p className="text-gray-400">Made for contractors, by contractors.</p>
        </div>
      </div>
    </footer>
  );
}
