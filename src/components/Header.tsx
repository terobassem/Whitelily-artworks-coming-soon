"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Search, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop All Artworks", href: "/shop" },
    { label: "About Lydia Malak", href: "/about" },
    { label: "Contact & Bespoke", href: "/contact" },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-brand-teal text-brand-ivory text-xs py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="tracking-wide">Handmade Artistic Creations & Original Masterpieces</span>
          </div>
          <div className="mx-auto md:mx-0 text-center font-medium">
            <span>Free Insured Art Shipping on orders over $500 • Worldwide Delivery</span>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/admin" 
              className="text-brand-coral hover:text-brand-gold transition-colors text-[11px] uppercase tracking-wider font-semibold flex items-center gap-1"
            >
              <span>Demo Admin Portal</span>
              <span className="px-1.5 py-0.5 rounded bg-brand-teal-light text-[10px]">Studio View</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-art border-b border-brand-gold/20 py-3"
            : "bg-[#FAF7F2] border-b border-stone-200/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Mobile hamburger & Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-brand-teal hover:text-brand-terracotta transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-wider uppercase font-medium transition-colors relative py-1 ${
                      isActive
                        ? "text-brand-teal font-semibold"
                        : "text-stone-700 hover:text-brand-terracotta"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-coral rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Center: Brand Identity with Logo */}
          <Link href="/" className="flex items-center space-x-3 group text-center">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-brand-gold/60 shadow-sm group-hover:border-brand-coral transition-colors flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="WHITELILY by Lydia Malak"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-left">
              <span className="block font-serif-luxury text-xl sm:text-2xl font-bold tracking-widest text-brand-teal group-hover:text-brand-teal-light transition-colors uppercase">
                WHITELILY
              </span>
              <span className="block text-[10px] sm:text-[11px] tracking-[0.25em] text-brand-terracotta font-medium uppercase -mt-1">
                By Lydia Malak
              </span>
            </div>
          </Link>

          {/* Right: Actions (Search, Admin link, Cart) */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-brand-teal hover:text-brand-terracotta transition-colors rounded-full hover:bg-brand-ivory"
              aria-label="Search artworks"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href="https://wa.me/201149530508?text=Hello%20Lydia,%20I'm%20interested%20in%20your%20artworks%20at%20WHITELILY."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-teal bg-brand-sage/20 border border-brand-sage/40 hover:bg-brand-sage/30 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-teal" />
              <span>WhatsApp Studio</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-brand-teal text-brand-ivory hover:bg-brand-teal-light rounded-full transition-all duration-200 shadow-sm hover:shadow group flex items-center justify-center"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-105" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-coral text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF7F2] animate-fade-in shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Drawer */}
        {searchOpen && (
          <div className="border-t border-brand-gold/30 bg-white/95 px-4 py-4 animate-fade-in shadow-lg">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search by title, medium (plaster, resin, terracotta), or color..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-300 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none text-sm text-stone-800 placeholder-stone-400"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-brand-teal text-white rounded-lg text-sm font-medium hover:bg-brand-teal-light transition-colors"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#FAF7F2] px-6 py-6 animate-fade-in shadow-xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium uppercase tracking-wider py-2 flex items-center justify-between border-b border-stone-200/60 ${
                      isActive ? "text-brand-teal font-bold" : "text-stone-700"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-brand-coral" />
                  </Link>
                );
              })}
              
              <Link
                href="/admin"
                className="text-sm font-semibold uppercase tracking-wider py-2 text-brand-terracotta flex items-center justify-between border-b border-stone-200/60"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  Admin Prototype Dashboard
                </span>
                <span className="text-xs bg-brand-terracotta/10 px-2 py-0.5 rounded">View</span>
              </Link>
            </nav>

            <div className="mt-6 pt-4 border-t border-stone-200">
              <p className="text-xs text-stone-500 uppercase tracking-widest mb-3">Direct Artist Contact</p>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://wa.me/201149530508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-brand-teal font-medium hover:underline"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  WhatsApp: +20 114 953 0508
                </a>
                <a
                  href="mailto:Whitelily.artworks@gmail.com"
                  className="text-sm text-stone-600 hover:underline"
                >
                  Whitelily.artworks@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
