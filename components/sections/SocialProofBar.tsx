import Link from "next/link";

const industries = [
  { name: "Owner Operators", href: "/industries/owner-operator", featured: true },
  { name: "Cleaning", href: "/industries/cleaning" },
  { name: "Handyman", href: "/industries/handyman" },
  { name: "Home Remodeling", href: "/industries/home-remodeling" },
  { name: "HVAC", href: "/industries/hvac" },
  { name: "Landscaping", href: "/industries/landscaping" },
  { name: "Painting", href: "/industries/painting" },
  { name: "Pest Control", href: "/industries/pest-control" },
  { name: "Pool Service", href: "/industries/pool-service" },
  { name: "Pressure Washing", href: "/industries/pressure-washing" },
  { name: "Roofing", href: "/industries/roofing" },
];

export function SocialProofBar() {
  return (
    <section className="bg-gray-50 py-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium mb-6">
          Built for every trade
        </p>

        {/* Desktop: Featured on own row, others in rows of 7 max */}
        <div className="hidden md:flex flex-col items-center gap-3">
          {/* Featured: Owner Operators on its own row */}
          {industries.filter(i => i.featured).map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="px-5 py-2 rounded-full text-sm font-medium bg-orange text-white hover:bg-orange-hover transition-colors"
            >
              {industry.name}
              <span className="ml-1.5 text-xs bg-white/20 px-1.5 py-0.5 rounded">
                Solo
              </span>
            </Link>
          ))}

          {/* Other industries in rows of 6 */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {industries.filter(i => !i.featured).map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-orange hover:text-orange transition-colors"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden relative">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  industry.featured
                    ? "bg-orange text-white hover:bg-orange-hover"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-orange hover:text-orange"
                }`}
              >
                {industry.name}
                {industry.featured && (
                  <span className="ml-1.5 text-xs bg-white/20 px-1.5 py-0.5 rounded">
                    Solo
                  </span>
                )}
              </Link>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
