"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { products } from "@/data/products";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navDropdownRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
        setQuery("");
      }
    }
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  // Close nav dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        navDropdownRef.current &&
        !navDropdownRef.current.contains(e.target as Node)
      ) {
        setNavDropdownOpen(false);
      }
    }
    if (navDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navDropdownOpen]);

  // Close on Escape
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
        setNavDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  function handleResultClick(slug: string) {
    setSearchOpen(false);
    setQuery("");
    router.push(`/catalogo?buscar=${slug}`);
  }

  return (
    <header className="w-full z-50 relative">
      {/* Promo Top Bar */}
      <div className="bg-brand-gold-500 text-white text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-accent font-medium tracking-widest uppercase">
          Envío Gratis en Pedidos Seleccionados &nbsp;|&nbsp;
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-brand-gold-300 transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </p>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Navigation dropdown */}
            <div className="relative" ref={navDropdownRef}>
              {/* Mobile hamburger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  setNavDropdownOpen(false);
                }}
                className="lg:hidden p-2 -ml-2 text-brand-black hover:text-brand-gold-500 transition-colors"
                aria-label="Menú"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop dropdown trigger */}
              <button
                onClick={() => setNavDropdownOpen(!navDropdownOpen)}
                className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-body font-medium text-neutral-600 hover:text-brand-black hover:bg-neutral-50 transition-all duration-300"
              >
                <Menu size={18} />
                <span>Menú</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${navDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Desktop dropdown */}
              {navDropdownOpen && (
                <div className="hidden lg:block absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden z-50">
                  <div className="py-2">
                    {NAV_LINKS.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setNavDropdownOpen(false)}
                          className={`block px-5 py-3 text-sm font-body font-medium transition-all ${
                            isActive
                              ? "bg-brand-black text-white"
                              : "text-neutral-600 hover:bg-neutral-50 hover:text-brand-black"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="border-t border-neutral-100 p-3">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setNavDropdownOpen(false)}
                      className="block text-center text-xs font-accent font-bold uppercase tracking-wider text-brand-gold-500 hover:text-brand-gold-600 transition-colors py-1"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Center: Logo */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2"
            >
              <span className="font-heading text-2xl sm:text-3xl font-semibold tracking-wide text-brand-black">
                LUXELUSH
              </span>
            </Link>

            {/* Right: Search */}
            <div className="flex items-center gap-3" ref={searchContainerRef}>
              <div className="relative">
                <button
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                    if (searchOpen) setQuery("");
                  }}
                  className="p-2 text-neutral-600 hover:text-brand-black transition-colors"
                  aria-label="Buscar"
                >
                  {searchOpen ? <X size={20} /> : <Search size={20} />}
                </button>

                {/* Search Dropdown */}
                {searchOpen && (
                  <div className="fixed inset-x-0 top-[calc(var(--nav-top,0px))] sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-96 bg-white sm:rounded-2xl shadow-2xl border-b sm:border border-neutral-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-neutral-100">
                      <div className="flex items-center gap-3 bg-neutral-50 rounded-full px-4 py-2.5">
                        <Search size={16} className="text-neutral-400 shrink-0" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Buscar productos..."
                          className="bg-transparent w-full text-sm font-body text-brand-black placeholder:text-neutral-400 outline-none"
                        />
                        {query && (
                          <button
                            onClick={() => setQuery("")}
                            className="text-neutral-400 hover:text-neutral-600 shrink-0"
                          >
                            <X size={14} />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="max-h-[60vh] sm:max-h-80 overflow-y-auto">
                      {query.trim() && filtered.length === 0 && (
                        <div className="p-6 text-center">
                          <p className="font-body text-sm text-neutral-400">
                            No se encontraron productos para &quot;{query}&quot;
                          </p>
                        </div>
                      )}

                      {filtered.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleResultClick(product.slug)}
                          className="w-full flex items-center gap-4 p-4 hover:bg-neutral-50 active:bg-neutral-100 transition-colors text-left"
                        >
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-body text-sm font-semibold text-brand-black truncate">
                              {product.name}
                            </p>
                            <p className="font-body text-sm font-bold text-brand-gold-500">
                              RD${product.price.toLocaleString()}
                            </p>
                          </div>
                        </button>
                      ))}

                      {!query.trim() && (
                        <div className="p-6 text-center">
                          <p className="font-body text-sm text-neutral-400">
                            Escribe para buscar productos
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
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
