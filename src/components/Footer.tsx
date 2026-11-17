import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Instagram, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight,
  Heart,
  Globe,
  Linkedin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-teal text-brand-ivory border-t border-brand-gold/30">
      {/* Brand Value Highlights Bar */}
      <div className="border-b border-brand-teal-light/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 text-brand-gold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg font-semibold text-white">100% Handmade Originals</h4>
              <p className="text-xs text-brand-ivory/80 mt-1 leading-relaxed">
                Sculpted, poured, and gilded individually by Lydia Malak. No mass-reproduced prints.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-coral/20 flex items-center justify-center flex-shrink-0 text-brand-coral">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg font-semibold text-white">Certificate of Authenticity</h4>
              <p className="text-xs text-brand-ivory/80 mt-1 leading-relaxed">
                Each acquisition arrives with an embossed, artist-signed certificate and archival serial.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-sage/20 flex items-center justify-center flex-shrink-0 text-brand-sage">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg font-semibold text-white">Direct Artist WhatsApp</h4>
              <p className="text-xs text-brand-ivory/80 mt-1 leading-relaxed">
                Instant personal consultation with Lydia Malak regarding sizing, color notes, and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold">
                <Image
                  src="/logo.jpg"
                  alt="WHITELILY logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold tracking-widest text-white uppercase">WHITELILY</h3>
                <p className="text-[11px] tracking-[0.25em] text-brand-coral uppercase font-semibold">By Lydia Malak</p>
              </div>
            </div>

            <p className="text-sm text-brand-ivory/80 leading-relaxed max-w-md pt-2">
              An independent artistic luxury atelier celebrating tactile minerals, fluid resin depths, warm terracotta, and gold leaf craftsmanship. Where sculptural dimension meets serenity.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://www.instagram.com/whitelily.by.lydiamalak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-coral hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/201149530508"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="mailto:Whitelily.artworks@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-teal flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Atelier</h4>
            <ul className="space-y-2 text-sm text-brand-ivory/80">
              <li>
                <Link href="/" className="hover:text-brand-coral transition-colors">Home Showcase</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-brand-coral transition-colors">All Artworks</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-coral transition-colors">About Lydia Malak</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-coral transition-colors">Contact & Inquiries</Link>
              </li>
              <li>
                <Link href="/admin" className="text-brand-gold hover:text-white transition-colors flex items-center gap-1 font-medium">
                  <span>Admin Prototype</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Art Categories */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Collections</h4>
            <ul className="space-y-2 text-sm text-brand-ivory/80">
              <li>
                <Link href="/shop?category=Textured+Canvas" className="hover:text-brand-coral transition-colors">Textured Canvas</Link>
              </li>
              <li>
                <Link href="/shop?category=Resin+%26+Mixed+Media" className="hover:text-brand-coral transition-colors">Resin & Mixed Media</Link>
              </li>
              <li>
                <Link href="/shop?category=Fluid+Art" className="hover:text-brand-coral transition-colors">Fluid Art</Link>
              </li>
              <li>
                <Link href="/shop?category=Sculptural+Vessels" className="hover:text-brand-coral transition-colors">Sculptural Vessels</Link>
              </li>
              <li>
                <Link href="/shop?category=Botanical+Wall+Art" className="hover:text-brand-coral transition-colors">Botanical Wall Art</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Artist Studio</h4>
            <div className="space-y-2.5 text-xs text-brand-ivory/80 leading-relaxed">
              <p>
                <strong className="text-white block">WhatsApp (Direct Studio):</strong>
                <a 
                  href="https://wa.me/201149530508" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-coral hover:underline font-mono"
                >
                  +20 114 953 0508
                </a>
              </p>
              <p>
                <strong className="text-white block">Official Email:</strong>
                <a 
                  href="mailto:Whitelily.artworks@gmail.com" 
                  className="text-brand-coral hover:underline"
                >
                  Whitelily.artworks@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white block">Instagram:</strong>
                <a 
                  href="https://www.instagram.com/whitelily.by.lydiamalak/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-coral hover:underline"
                >
                  @whitelily.by.lydiamalak
                </a>
              </p>
              <p className="pt-2 text-[11px] text-brand-sage/80">
                Studio visits are not offered. All purchases, custom sizes, and commissions are handled exclusively online.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-brand-teal-light/40 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-ivory/60 gap-4">
          <p>© {new Date().getFullYear()} WHITELILY by Lydia Malak. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Handmade with artful passion & care</span>
            <Heart className="w-3.5 h-3.5 text-brand-coral fill-brand-coral" />
          </p>
        </div>

        {/* Developer Credit */}
        <div className="mt-4 pb-6 flex flex-wrap items-center justify-center gap-3 text-[10px] text-brand-ivory/40 border-t border-brand-teal-light/20 pt-4">
          <span>Developed by</span>
          <span className="text-brand-ivory/60 font-medium">Phelobater B.Basha</span>
          <span className="text-white/20">·</span>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/201228646329"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-brand-ivory/70 transition-all"
              title="WhatsApp (01228646329)"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/phelobater-b-basha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#0077b5] hover:text-white flex items-center justify-center text-brand-ivory/70 transition-all"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://phelobaterbashaportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-brand-coral hover:text-white flex items-center justify-center text-brand-ivory/70 transition-all"
              title="Portfolio"
              aria-label="Portfolio"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
