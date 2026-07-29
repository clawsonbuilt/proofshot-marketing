"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { AppBadges } from "./AppBadges";
import { Button } from "./ui";

const industries = [
  { href: "/industries", label: "All Industries", featured: false },
  { href: "/industries/owner-operator", label: "Owner Operators", featured: true },
  { href: "/industries/cleaning", label: "Cleaning" },
  { href: "/industries/handyman", label: "Handyman" },
  { href: "/industries/home-remodeling", label: "Home Remodeling" },
  { href: "/industries/hvac", label: "HVAC" },
  { href: "/industries/landscaping", label: "Landscaping" },
  { href: "/industries/painting", label: "Painting" },
  { href: "/industries/pest-control", label: "Pest Control" },
  { href: "/industries/pool-service", label: "Pool Service" },
  { href: "/industries/pressure-washing", label: "Pressure Washing" },
  { href: "/industries/roofing", label: "Roofing" },
];

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const industriesButtonRef = useRef<HTMLButtonElement>(null);
  // A ref, not state. As state it belonged in the effect's dependency array, which
  // tore down and re-attached the scroll listener on every single scroll frame.
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // Background change after 50px
      setIsScrolled(y > 50);

      // Hide on mobile when scrolling down past 100px
      setIsHidden(
        window.innerWidth < 768 ? y > lastScrollY.current && y > 100 : false
      );

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!isIndustriesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsIndustriesOpen(false);
        // Return focus to the trigger, or the user is stranded mid-page.
        industriesButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isIndustriesOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menus on route change. Adjusted during render rather than in an effect —
  // an effect here fires a second render pass after the new route has already
  // painted with the menu still open (react-hooks/set-state-in-effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMobileMenuOpen(false);
    setIsMobileIndustriesOpen(false);
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logos/logo-orange-horizontal.svg"
                alt="ProofShot Pro"
                width={200}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-orange"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Industries Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  ref={industriesButtonRef}
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  aria-expanded={isIndustriesOpen}
                  aria-haspopup="true"
                  aria-controls="industries-menu"
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    pathname.startsWith("/industries")
                      ? "text-orange"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Industries
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isIndustriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isIndustriesOpen && (
                  <div
                    id="industries-menu"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                  >
                    {industries.map((industry, index) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        onClick={() => setIsIndustriesOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === industry.href
                            ? "text-orange bg-orange-light"
                            : industry.featured
                            ? "text-orange font-medium hover:bg-orange-light"
                            : "text-gray-700 hover:bg-gray-50"
                        } ${index === 0 ? "border-b border-gray-100 mb-1 pb-3" : ""}`}
                      >
                        {industry.label}
                        {industry.featured && (
                          <span className="ml-2 text-xs bg-orange text-white px-1.5 py-0.5 rounded">
                            Solo
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                href="https://app.proofshotpro.com/signup"
                size="small"
                showArrow
              >
                Claim My Free Account
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2 text-gray-900"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/*
        The panel stays mounted so it can slide. Left as-is its links remained in the
        tab order while off-screen, so keyboard users tabbed into an invisible menu.
        `inert` handles that on current browsers; `invisible` covers the older ones in
        our browserslist range, and because visibility transitions discretely at the
        end of the duration it does not cut the slide-out short.
      */}
      <div
        id="mobile-menu"
        inert={!isMobileMenuOpen}
        className={`fixed inset-0 z-[60] bg-white transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0 visible"
            : "translate-x-full invisible"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between h-14 px-6 border-b border-gray-100">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-shrink-0"
            >
              <Image
                src="/logos/logo-orange-horizontal.svg"
                alt="ProofShot Pro"
                width={175}
                height={35}
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-gray-900"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 text-xl font-display font-bold transition-colors ${
                    isActive(link.href) ? "text-orange" : "text-gray-900 hover:text-orange"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Industries Accordion */}
              <div className="py-3">
                <button
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                  className={`flex items-center justify-between w-full text-xl font-display font-bold transition-colors ${
                    pathname.startsWith("/industries") ? "text-orange" : "text-gray-900"
                  }`}
                >
                  Industries
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isMobileIndustriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileIndustriesOpen && (
                  <div className="mt-3 ml-4 space-y-2">
                    {industries.map((industry, index) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        className={`block py-2 text-base transition-colors ${
                          pathname === industry.href
                            ? "text-orange"
                            : industry.featured
                            ? "text-orange font-medium"
                            : "text-gray-600 hover:text-orange"
                        } ${index === 0 ? "pb-3 mb-2 border-b border-gray-100" : ""}`}
                      >
                        {industry.label}
                        {industry.featured && (
                          <span className="ml-2 text-xs bg-orange text-white px-1.5 py-0.5 rounded">
                            Solo
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Additional Links */}
              <div className="pt-6 mt-6 border-t border-gray-100 space-y-1">
                <Link
                  href="/blog"
                  className={`block py-3 text-lg font-medium transition-colors ${
                    pathname.startsWith("/blog") ? "text-orange" : "text-gray-600 hover:text-orange"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`block py-3 text-lg font-medium transition-colors ${
                    pathname === "/contact" ? "text-orange" : "text-gray-600 hover:text-orange"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>

          {/* Mobile Menu CTA */}
          <div className="p-6 border-t border-gray-100">
            <Button
              href="https://app.proofshotpro.com/signup"
              className="w-full"
              showArrow
            >
              Claim My Free Account
            </Button>
            <AppBadges align="center" className="mt-6" />
          </div>
        </div>
      </div>
    </>
  );
}
