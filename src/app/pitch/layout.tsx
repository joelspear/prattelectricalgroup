"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { fuelMySocial } from "@/data/siteData";

const pitchNavItems = [
  { label: "Overview", href: "/pitch" },
  { label: "Before vs After", href: "/pitch/before-after" },
  { label: "Why Design Matters", href: "/pitch/why-design-matters" },
  { label: "What We Built", href: "/pitch/new-features" },
  { label: "Investment", href: "/pitch/investment" },
  { label: "About Us", href: "/pitch/about-fms" },
  { label: "Next Steps", href: "/pitch/next-steps" },
];

export default function PitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Pitch Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/pitch">
              <Logo theme="light" className="h-8" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {pitchNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-primary-600 bg-primary-50"
                      : "text-gray-600 hover:text-charcoal hover:bg-gray-100"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Back to main site */}
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-primary-500 transition-colors"
            >
              ← View Main Site
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        <nav className="lg:hidden border-t border-gray-100 overflow-x-auto">
          <div className="flex items-center gap-1 px-4 py-2 min-w-max">
            {pitchNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors",
                  pathname === item.href
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-charcoal hover:bg-gray-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Pitch Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-gray-400">
                Demo site created by {fuelMySocial.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {fuelMySocial.contact.email} | {fuelMySocial.contact.phone}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                View Main Site
              </Link>
              <Link
                href="/pitch/next-steps"
                className="btn-primary text-sm px-4 py-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
