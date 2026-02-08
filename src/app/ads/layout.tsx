import { LogoMobile } from "@/components/ui/Logo";
import Link from "next/link";

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal header — logo + phone only */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link href="/" aria-label="Pratt Electrical Group">
            <LogoMobile className="h-8" />
          </Link>
          <a
            href="tel:+61474320534"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            0474 320 534
          </a>
        </div>
      </header>

      <main>{children}</main>

      {/* Minimal footer */}
      <footer className="bg-charcoal text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pratt Electrical Group Pty Ltd.
            All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Adelaide, SA &bull; Fully Licensed & Insured
          </p>
        </div>
      </footer>
    </>
  );
}
