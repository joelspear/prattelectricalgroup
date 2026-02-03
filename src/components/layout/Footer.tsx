"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { contactInfo, socialLinks, footerLinks, fuelMySocial } from "@/data/siteData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo theme="dark" className="h-10 mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Adelaide&apos;s trusted electrical and solar experts. Quality workmanship,
              SAA accredited solar installation.
            </p>
            {/* SAA Badge Placeholder */}
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-lg px-3 py-2 text-xs font-medium">
                SAA Accredited Installer
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={contactInfo.phoneTel}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="h-5 w-5 text-primary-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-semibold">
                      {contactInfo.phoneFormatted}
                    </div>
                    <div className="text-xs">Mon-Fri 7am-5pm</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 text-primary-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <MapPin className="h-5 w-5 text-primary-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{contactInfo.address.full}</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {contactInfo.businessName}. All rights reserved.
            </p>
            <p>
              Site by{" "}
              <a
                href={fuelMySocial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                {fuelMySocial.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
