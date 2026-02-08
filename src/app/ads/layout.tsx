import Image from "next/image";
import Link from "next/link";

const LOGO_DARK =
  "https://res.cloudinary.com/dhzl5ccct/image/upload/v1770464871/Pratt_Electrical_Group_Logo_dzfg0y.png";

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>

      {/* Footer with logo */}
      <footer className="bg-charcoal text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" aria-label="Pratt Electrical Group" className="inline-block mb-4">
            <Image
              src={LOGO_DARK}
              alt="Pratt Electrical Group"
              width={200}
              height={50}
              className="h-10 w-auto object-contain mx-auto"
            />
          </Link>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pratt Electrical Group Pty Ltd.
            All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Adelaide, SA &bull; Fully Licensed &amp; Insured &bull;{" "}
            <a href="tel:+61474320534" className="hover:text-primary-400 transition-colors">
              0474 320 534
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
