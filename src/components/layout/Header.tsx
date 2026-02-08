"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, DollarSign, HelpCircle } from "lucide-react";
import { Logo, LogoMobile } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { navItems, contactInfo } from "@/data/siteData";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll for sticky header and progress bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <motion.div
          className="h-full bg-primary-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-300",
          isMobileMenuOpen ? "z-[60]" : "z-50",
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="hidden md:block">
              <Logo theme={isScrolled || isMobileMenuOpen ? "light" : "dark"} className="h-10" />
            </span>
            <span className="md:hidden">
              <LogoMobile theme={isScrolled || isMobileMenuOpen ? "light" : "dark"} className="h-8" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        isScrolled
                          ? "text-charcoal hover:bg-gray-100"
                          : "text-white hover:bg-white/10"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block px-4 py-2.5 text-sm transition-colors",
                                isActive(child.href)
                                  ? "bg-primary-50 text-primary-600 font-medium"
                                  : "text-charcoal hover:bg-gray-50"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive(item.href)
                        ? isScrolled
                          ? "text-primary-600 bg-primary-50"
                          : "text-white bg-white/20"
                        : isScrolled
                        ? "text-charcoal hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/dhzl5ccct/image/upload/f_auto,q_auto,h_40/SAA-Logo-Blue-White_wqwe6l.png"
              alt="SAA Accredited Installer"
              className="h-10 w-auto"
            />
            <a
              href={contactInfo.phoneTel}
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              <Phone className="h-4 w-4" />
              {contactInfo.phoneFormatted}
            </a>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile: Phone + Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={contactInfo.phoneTel}
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled || isMobileMenuOpen
                  ? "bg-primary-500 text-white"
                  : "bg-white/20 text-white"
              )}
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors relative z-50",
                isScrolled || isMobileMenuOpen
                  ? "text-charcoal hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

    </header>

      {/* Mobile Menu Overlay - Outside header for proper full-screen positioning */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-white z-[55] lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              {/* Quick Access Links */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Link
                  href="/finance"
                  className="flex items-center gap-2 p-3 bg-primary-50 text-primary-700 rounded-lg font-medium hover:bg-primary-100 transition-colors"
                >
                  <DollarSign className="h-5 w-5" />
                  Finance Options
                </Link>
                <Link
                  href="/faq"
                  className="flex items-center gap-2 p-3 bg-gray-100 text-charcoal rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  <HelpCircle className="h-5 w-5" />
                  FAQ
                </Link>
              </div>

              <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-charcoal rounded-lg hover:bg-gray-50"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform",
                              openDropdown === item.label && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1 mt-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={cn(
                                      "block px-4 py-2.5 text-base rounded-lg transition-colors",
                                      isActive(child.href)
                                        ? "bg-primary-50 text-primary-600 font-medium"
                                        : "text-gray-600 hover:bg-gray-50"
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                          isActive(item.href)
                            ? "bg-primary-50 text-primary-600"
                            : "text-charcoal hover:bg-gray-50"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <a
                  href={contactInfo.phoneTel}
                  className="flex items-center justify-center gap-2 w-full py-3 text-lg font-semibold text-charcoal"
                >
                  <Phone className="h-5 w-5 text-primary-500" />
                  {contactInfo.phoneFormatted}
                </a>
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-lg"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
