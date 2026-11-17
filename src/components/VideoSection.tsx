"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ArrowRight } from "lucide-react";

export default function VideoSection() {
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

  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-teal text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Behind The Craftsmanship</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-teal tracking-tight leading-tight">
            In the Studio with Lydia Malak
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Watch the patient, meditative ritual behind every handcrafted artwork — from raw mineral pigments and sculpted plaster relief to liquid resin stratification.
          </p>
        </div>

        {/* Video Canvas Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/40 bg-stone-900 aspect-video max-w-5xl mx-auto group">
          <video
            ref={videoRef}
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Luxury Video Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Top Bar on Video */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white/90 z-20">
            <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium tracking-wide">WHITELILY Atelier Film</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 transition-all"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleFullScreen}
                className="p-2.5 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 transition-all hidden sm:block"
                aria-label="Enter fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button
              onClick={togglePlay}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-coral/90 hover:bg-brand-coral text-white backdrop-blur-md flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 border-2 border-white/40"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Bar: Artist Quote */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="max-w-xl">
              <p className="font-serif-luxury text-base sm:text-xl italic text-brand-ivory leading-relaxed">
                &ldquo;Every brushstroke, sculpted ridge, and resin layer is a dialogue between raw earth and luminous emotion.&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest text-brand-gold mt-1 font-semibold">
                — Lydia Malak, Founder & Creative Artist
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-semibold text-white tracking-wider uppercase transition-colors self-start sm:self-auto"
            >
              <span>Read The Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Pillars Below Video */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border border-brand-teal/10 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl font-serif-luxury font-bold text-brand-terracotta">01</span>
            <h3 className="font-serif-luxury text-lg font-bold text-brand-teal mt-2">Sculptural Texture</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Archival marble dust, mineral plasters, and hand-molded reliefs creating dynamic shadow-play that breathes with changing natural light.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-teal/10 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl font-serif-luxury font-bold text-brand-teal">02</span>
            <h3 className="font-serif-luxury text-lg font-bold text-brand-teal mt-2">Liquid Resin Strata</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Optical-grade crystalline resin poured in multi-day strata, suspending deep teal pigments and liquid golds into timeless organic oceans.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-teal/10 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl font-serif-luxury font-bold text-brand-gold">03</span>
            <h3 className="font-serif-luxury text-lg font-bold text-brand-teal mt-2">24K Gilded Accents</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Genuine gold leaf delicately placed by hand with natural animal-free gilding size, imparting soft warm radiance and timeless luxury.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
