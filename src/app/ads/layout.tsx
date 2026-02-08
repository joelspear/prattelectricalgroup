export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>

      {/* Minimal footer */}
      <footer className="bg-charcoal text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pratt Electrical Group Pty Ltd.
            All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Adelaide, SA &bull; Fully Licensed &amp; Insured
          </p>
        </div>
      </footer>
    </>
  );
}
