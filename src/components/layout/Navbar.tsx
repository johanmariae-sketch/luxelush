"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full z-50 relative">
      {/* Promo Top Bar */}
      <div className="bg-brand-gold-500 text-white text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-accent font-medium tracking-widest uppercase">
          Envio Gratis en Pedidos Seleccionados &nbsp;|&nbsp;
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-brand-gold-300 transition-colors"
          >
            Escribenos por WhatsApp
          </a>
        </p>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-brand-black hover:text-brand-gold-500 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Center-left: Nav links (desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-brand-black text-white"
                        : "text-neutral-600 hover:text-brand-black hover:bg-neutral-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Center: Logo */}
            <Link href="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0">
              <span className="font-heading text-2xl sm:text-3xl font-semibold tracking-wide text-brand-black">
                LUXELUSH
              </span>
            </Link>

            {/* Right: Icons */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 text-neutral-600 hover:text-brand-black transition-colors"
                aria-label="Buscar"
              >
                <Search size={20} />
              </button>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-600 hover:text-brand-gold-500 transition-colors"
                aria-label="WhatsApp"
              >
                <ShoppingBag size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-100 bg-white animate-slide-up">
            <div className="py-4 section-padding space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-body font-medium transition-all ${
                      isActive
                        ? "bg-brand-black text-white"
                        : "text-neutral-600 hover:bg-neutral-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-neutral-100 mt-4">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-brand-gold-500 font-body font-semibold"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
