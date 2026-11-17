"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Sparkles, 
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Palette
} from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const scrollToCollection = () => {
    const el = document.getElementById("featured-collection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-teal text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
      />

      {/* Multi-layered luxury artistic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3630]/95 via-[#244C43]/55 to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-teal/20 to-black/60 pointer-events-none" />

      {/* Video Interactive Control Badges (Top Right) */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/90 border border-white/20 text-xs font-medium transition-all shadow-lg hover:scale-105"
          aria-label={isMuted ? "Unmute studio sound" : "Mute sound"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-brand-coral" />
              <span className="hidden sm:inline">Unmute Sound</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Sound Active</span>
            </>
          )}
        </button>

        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white/90 border border-white/20 transition-all shadow-lg hover:scale-105"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Studio Live Badge (Top Left) */}
      <div className="absolute top-6 left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/20 text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="tracking-wider uppercase text-[11px] font-semibold text-brand-ivory">
          WHITELILY Studio Film • Lydia Malak
        </span>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 lg:py-28 flex flex-col items-center">
        
        {/* Brand Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-glow-gold animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 fill-brand-gold" />
          <span>Handmade Artistic Masterpieces</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] max-w-4xl text-shadow-lg">
          Where Raw Texture Meets{" "}
          <span className="italic font-normal text-brand-coral relative inline-block">
            Luminous
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8C50 2 150 2 198 8" stroke="#D6B75D" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{" "}
          Artistry.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-brand-ivory/90 max-w-2xl leading-relaxed font-normal">
          An artistic luxury atelier celebrating sculpted mineral plasters, multi-layered liquid resin depths, warm terracotta, and genuine 24K gold gilding by founder <strong className="text-white font-semibold">Lydia Malak</strong>.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-coral text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-coral-dark shadow-art-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>Shop Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-xs sm:text-sm uppercase tracking-wider border border-white/30 transition-all duration-300 text-center"
          >
            Bespoke Commission
          </Link>

          <a
            href="https://wa.me/201149530508?text=Hello%20Lydia,%20I'm%20inquiring%20about%20your%20artworks%20at%20WHITELILY."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-600/90 hover:bg-emerald-600 backdrop-blur-md text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-400/40"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Lydia</span>
          </a>
        </div>

        {/* Palette preview pill */}
        <div className="mt-10 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs">
          <Palette className="w-3.5 h-3.5 text-brand-gold" />
          <span className="text-[11px] uppercase tracking-wider text-brand-ivory/80 font-medium">Signature Tones:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#244C43] border border-white/60" title="Deep Teal" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#E6A18D] border border-white/60" title="Warm Coral" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#D6B75D] border border-white/60" title="Soft Gold" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#B87862] border border-white/60" title="Terracotta" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#A9B99D] border border-white/60" title="Sage Green" />
          </div>
        </div>

      </div>

      {/* Floating Bottom Trust Metrics Bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-6 pb-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-ivory/80 gap-3">
          
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>100% Handmade Originals</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-coral" />
              <span>Signed Certificate of Authenticity</span>
            </div>
            <div className="flex items-center gap-2 hidden md:flex">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Worldwide Insured Art Delivery</span>
            </div>
          </div>

          {/* Smooth Scroll Down Button */}
          <button
            onClick={scrollToCollection}
            className="flex items-center gap-1 text-[11px] uppercase tracking-widest text-brand-gold hover:text-white transition-colors cursor-pointer group"
          >
            <span>Explore Collection</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
