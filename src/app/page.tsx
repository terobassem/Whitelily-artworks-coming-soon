"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2,
  Instagram,
  Mail,
  MessageCircle,
  Sparkles,
  Heart,
  ChevronDown,
  Globe,
  Linkedin
} from "lucide-react";

/* ──────────────────────────────────────────────
   WHITELILY by Lydia Malak — Coming Soon Landing
   Hero (Video + Coming Soon + Transparent Logo)
   → About Lydia Malak
   → Studio Film (Community Jameel)
   → Footer
   ────────────────────────────────────────────── */

export default function ComingSoonPage() {
  /* ── Video Controls ── */
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVidPlaying, setIsVidPlaying] = useState(true);
  const [isVidMuted, setIsVidMuted] = useState(true);

  /* ── Hero video helpers ── */
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
    else { videoRef.current.play(); setIsPlaying(true); }
  };
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  /* ── Section video helpers ── */
  const toggleVidPlay = () => {
    if (!videoSectionRef.current) return;
    if (isVidPlaying) { videoSectionRef.current.pause(); setIsVidPlaying(false); }
    else { videoSectionRef.current.play(); setIsVidPlaying(true); }
  };
  const toggleVidMute = () => {
    if (!videoSectionRef.current) return;
    videoSectionRef.current.muted = !isVidMuted;
    setIsVidMuted(!isVidMuted);
  };
  const toggleVidFullScreen = () => {
    if (!videoSectionRef.current) return;
    if (videoSectionRef.current.requestFullscreen) videoSectionRef.current.requestFullscreen();
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">

      {/* ═══════════════════════════════════════════════
          SECTION 1 — CINEMATIC FULL-SCREEN VIDEO HERO
          ═══════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-teal text-white">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Artistic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3630]/95 via-[#244C43]/50 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-teal/15 to-black/55 pointer-events-none" />

        {/* Top controls */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/90 border border-white/20 text-xs font-medium transition-all shadow-lg hover:scale-105"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <><VolumeX className="w-3.5 h-3.5 text-brand-coral" /><span className="hidden sm:inline">Unmute</span></>
            ) : (
              <><Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /><span className="hidden sm:inline">Sound On</span></>
            )}
          </button>
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/90 border border-white/20 transition-all shadow-lg hover:scale-105"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Studio badge */}
        <div className="absolute top-6 left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/20 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wider uppercase text-[11px] font-semibold text-brand-ivory">
            WHITELILY Studio Film
          </span>
        </div>

        {/* Hero Content: Coming Soon on Left, Logo on Right */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Column: Coming Soon & Tagline */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start max-w-2xl">
            {/* Launch Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-6 shadow-glow-gold animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span>Official Website Launch</span>
            </div>

            {/* Main Coming Soon Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-[0.06em] uppercase leading-none animate-fade-in">
              Coming{" "}
              <span className="italic font-normal text-brand-coral relative inline-block">
                Soon
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#D6B75D" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Artist & Craft Line */}
            <p className="mt-4 text-xs sm:text-sm lg:text-base tracking-[0.25em] uppercase text-brand-coral font-semibold animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Heritage Gypsum Craftsmanship by Lydia Malak
            </p>

            {/* Tagline */}
            <p className="mt-6 text-base sm:text-lg text-brand-ivory/90 leading-relaxed font-normal animate-fade-up max-w-xl" style={{ animationDelay: "0.3s" }}>
              Where traditional artistry meets contemporary vision — architectural gypsum tiles, stained-glass gypsum windows, carved relief panels, gypsum mosaics, and fresco paintings.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <button
                onClick={scrollToAbout}
                className="px-6 py-3.5 rounded-full bg-brand-coral hover:bg-brand-coral-dark text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-art-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Discover the Artist</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <a
                href="https://www.instagram.com/whitelily.by.lydiamalak/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-xs sm:text-sm uppercase tracking-wider border border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/201149530508?text=Hello%20Lydia,%20I'm%20interested%20in%20your%20work%20at%20WHITELILY."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-xs sm:text-sm uppercase tracking-wider border border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Lydia</span>
              </a>
            </div>
          </div>

          {/* Right Column: Transparent Logo without any frame */}
          <div className="flex-shrink-0 flex items-center justify-center animate-fade-in">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              <Image
                src="/logo.png"
                alt="WHITELILY by Lydia Malak"
                fill
                className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>

        </div>

        {/* Floating bottom scroll cue */}
        <div className="absolute bottom-6 inset-x-0 z-20 hidden md:flex justify-center pointer-events-none">
          <button
            onClick={scrollToAbout}
            className="pointer-events-auto flex flex-col items-center gap-1.5 text-brand-gold/80 hover:text-brand-gold transition-colors text-[10px] uppercase tracking-[0.25em] font-medium"
          >
            <span>Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — ABOUT THE ARTIST
          ═══════════════════════════════════════════════ */}
      <section id="about-section" className="py-20 lg:py-28 bg-white border-t border-stone-200/70 relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-coral/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-sage/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-terracotta mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>The Artist</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-brand-teal tracking-tight leading-tight">
              Lydia Malak
            </h2>
            <div className="mt-3 w-20 h-[2px] bg-brand-gold mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed text-center">
              Lydia Malak is an interior designer and traditional arts specialist focusing on gypsum craftsmanship. 
              She graduated from the Faculty of Applied Arts (Decoration Department) at Capital University 
              (formerly Helwan University) in 2011.
            </p>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed text-center">
              She further honed her expertise by graduating in 2024 from{" "}
              <strong className="text-brand-teal font-semibold">The King&apos;s Foundation School of Traditional Arts</strong>{" "}
              in London, in collaboration with{" "}
              <strong className="text-brand-teal font-semibold">Bait Al-Jameel</strong> in Cairo.
            </p>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed text-center">
              Lydia is the founder of <strong className="text-brand-teal font-semibold">&ldquo;White Lily,&rdquo;</strong> a brand 
              dedicated to heritage-inspired gypsum creations, including architectural gypsum tiles, stained-glass gypsum windows, 
              carved relief panels, gypsum mosaics, and fresco paintings.
            </p>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed text-center">
              Her practice bridges historical authenticity with contemporary design; she actively conducts research on enhancing 
              gypsum material quality to align with sustainability principles while preserving the structural and aesthetic 
              foundations of traditional heritage arts.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="w-12 h-[1px] bg-brand-gold/50" />
            <Heart className="w-4 h-4 text-brand-coral fill-brand-coral" />
            <div className="w-12 h-[1px] bg-brand-gold/50" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — FILM / VIDEO SECTION
          ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-teal text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>The Film</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal tracking-tight leading-tight">
              Final Year Project at the Jameel House of Traditional Arts in Cairo
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              A film documenting the journey of heritage gypsum craftsmanship — from research and material exploration to the creation of original artworks rooted in traditional arts.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/40 bg-black aspect-video max-w-5xl mx-auto group">
            <video
              ref={videoSectionRef}
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Top bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white/90 z-20">
              <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium tracking-wide">WHITELILY — Lydia Malak</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleVidMute}
                  className="p-2.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 transition-all"
                  aria-label={isVidMuted ? "Unmute" : "Mute"}
                >
                  {isVidMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleVidFullScreen}
                  className="p-2.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 transition-all hidden sm:block"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center play / pause */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={toggleVidPlay}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-coral/90 hover:bg-brand-coral text-white backdrop-blur-md flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 border-2 border-white/40 opacity-0 group-hover:opacity-100"
                aria-label={isVidPlaying ? "Pause" : "Play"}
              >
                {isVidPlaying ? <Pause className="w-7 h-7 sm:w-8 sm:h-8" /> : <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />}
              </button>
            </div>

            {/* Bottom credit */}
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
              <p className="text-xs sm:text-sm text-brand-ivory/90">
                Produced by <strong className="text-white">Community Jameel</strong>. Copyright: Community Jameel.
              </p>
            </div>
          </div>

          {/* Credit + Instagram link */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-stone-600">
            <p className="text-center">
              Film produced by <strong className="text-brand-teal">Community Jameel</strong> · Copyright: Community Jameel
            </p>
            <a
              href="https://www.instagram.com/communityjameel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-teal/30 text-brand-teal hover:bg-brand-teal hover:text-white transition-all text-xs font-semibold uppercase tracking-wider"
            >
              <Instagram className="w-4 h-4" />
              <span>@communityjameel</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MINIMAL LUXURY FOOTER
          ═══════════════════════════════════════════════ */}
      <footer className="py-12 bg-brand-teal text-white border-t border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="font-serif-luxury text-xl font-bold tracking-wider text-white">WHITELILY</p>
              <p className="text-xs text-brand-ivory/70 tracking-widest uppercase mt-0.5">By Lydia Malak</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/whitelily.by.lydiamalak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-coral hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/201149530508"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:Whitelily.artworks@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-teal flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-brand-ivory/50">
              © {new Date().getFullYear()} WHITELILY by Lydia Malak. All rights reserved.
            </p>
          </div>

          {/* Developer Credit */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-[11px] text-brand-ivory/50">
            <span>Developed by</span>
            <span className="text-white font-medium">Phelobater B.Basha</span>
            <span className="text-white/30">·</span>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/201228646329"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-brand-ivory/80 transition-all"
                title="WhatsApp (01228646329)"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/phelobater-b-basha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#0077b5] hover:text-white flex items-center justify-center text-brand-ivory/80 transition-all"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://phelobaterbashaportfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-brand-coral hover:text-white flex items-center justify-center text-brand-ivory/80 transition-all"
                title="Portfolio"
                aria-label="Portfolio"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
