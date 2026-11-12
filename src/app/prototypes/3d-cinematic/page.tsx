"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  Volume2,
  VolumeX,
  MessageCircle,
  Crown,
} from "lucide-react";

export default function ThreeDCinematicPrototype() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Ensure video autoplays smoothly on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.warn("Video autoplay prevented by browser policy", err);
      });
    }
  }, []);

  // Track scroll position to update active chapter indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;
      setScrollProgress(progress);

      if (progress < 0.28) setActiveChapter(0);
      else if (progress < 0.58) setActiveChapter(1);
      else if (progress < 0.82) setActiveChapter(2);
      else setActiveChapter(3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Web Audio API Ambient Luxury Space Drone
  const toggleAudio = () => {
    if (isMuted) {
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(55, ctx.currentTime);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(140, ctx.currentTime);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 1.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
        setIsMuted(false);
      } catch (err) {
        console.warn("Audio init failed", err);
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 0.4
        );
        setTimeout(() => {
          if (oscRef.current) oscRef.current.stop();
          if (audioCtxRef.current) audioCtxRef.current.close();
        }, 400);
      }
      setIsMuted(true);
    }
  };

  const scrollToChapter = (chapterIdx: number) => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const targets = [0, 0.35, 0.65, 1];
    window.scrollTo({
      top: maxScroll * targets[chapterIdx],
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-[360vh] bg-[#060709] text-[#F5E6BE] selection:bg-[#D4AF37] selection:text-[#060709]">
      {/* ======================================================== */}
      {/* PINNED BACKGROUND 1080P CONTINUOUS FLOW VIDEO LOOP       */}
      {/* ======================================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/flow-3d.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.02] filter contrast-[1.12] brightness-[0.80]"
        />

        {/* Ambient Luxury Gold & Obsidian Tonal Overlay */}
        <div className="absolute inset-0 bg-[#060709]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-[#060709]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(6,7,9,0.85)_100%)]" />

        {/* Luxury Gold Aesthetic HUD Corner Accents */}
        <div className="absolute top-16 left-6 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50" />
        <div className="absolute top-16 right-6 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50" />
        <div className="absolute bottom-16 left-6 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50" />
        <div className="absolute bottom-16 right-6 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50" />
      </div>

      {/* ======================================================== */}
      {/* TOP FLOATING DEMO STATUS BAR                             */}
      {/* ======================================================== */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#060709]/95 backdrop-blur-md border-b border-[#D4AF37]/20 px-6 py-3 flex items-center justify-between text-xs">
        <Link
          href="/#explore"
          className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:text-white font-mono font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit to VANSH STUDIOS Home</span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20saw%20your%203D%20Cinematic%20video%20website%20and%20want%20this%20for%20my%20brand!"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn text-[#060709] px-4 py-1.5 rounded-lg font-black uppercase tracking-wider text-[11px] shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Order 3D Website
          </a>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FLOATING LUXURY BRAND NAVIGATION                         */}
      {/* ======================================================== */}
      <header className="fixed top-12 left-0 right-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-[#D4AF37]/30 blur-sm" />
            <Image
              src="/images/vansh-studios-logo.jpg"
              alt="VANSH STUDIOS Official Emblem"
              width={42}
              height={42}
              className="relative z-10 rounded-xl border border-[#D4AF37]/70 shadow-[0_0_15px_rgba(212,175,55,0.4)] object-cover"
              priority
            />
          </div>
          <div>
            <span className="font-heading font-black text-lg tracking-wider text-white uppercase block leading-none">
              Vansh Studios
            </span>
            <span className="text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase font-semibold">
              Spatial Web Continuum
            </span>
          </div>
        </div>

        {/* Chapter Shortcuts */}
        <div className="pointer-events-auto hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-[#060709]/85 backdrop-blur-md border border-[#D4AF37]/30">
          {[
            { id: 0, label: "01 // The Threshold" },
            { id: 1, label: "02 // Liquid Chrome" },
            { id: 2, label: "03 // Spatial Depth" },
            { id: 3, label: "04 // Commission" },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => scrollToChapter(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeChapter === c.id
                  ? "bg-[#D4AF37] text-[#060709] font-black shadow-md shadow-[#D4AF37]/30"
                  : "text-[#F5E6BE]/70 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Controls: Sound */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={toggleAudio}
            className={`p-2.5 rounded-xl border text-xs font-mono backdrop-blur-md transition-all cursor-pointer ${
              !isMuted
                ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]"
                : "bg-[#060709]/80 border-[#D4AF37]/30 text-[#F5E6BE]/70 hover:text-white"
            }`}
            title="Toggle Ambient Soundscape"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 4 SCROLL STORYTELLING CHAPTERS (FLOATING ON LIVE VIDEO)  */}
      {/* ======================================================== */}

      {/* Chapter 1: The Threshold (Hero) */}
      <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-16 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase mb-6 w-fit backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          Flagship Spatial Experience
        </div>

        <h1 className="font-heading text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white leading-none mb-6">
          Beyond <br />
          <span className="gold-gradient-text drop-shadow-[0_10px_35px_rgba(212,175,55,0.3)]">
            Ordinary Digital.
          </span>
        </h1>

        <p className="text-lg sm:text-2xl text-slate-100 font-normal max-w-2xl leading-relaxed mb-8 drop-shadow-md">
          The background video is alive and continuously travelling through futuristic architectural chrome. Scroll down to discover our design architecture and bespoke services.
        </p>

        <div className="flex items-center gap-3 text-sm font-mono text-[#D4AF37] font-bold uppercase tracking-widest">
          <span className="animate-pulse">↓ Scroll to explore spatial chapters</span>
        </div>
      </section>

      {/* Chapter 2: Liquid Chrome Architecture */}
      <section className="relative z-10 h-screen flex flex-col justify-center items-end px-6 md:px-16 text-right">
        <div className="max-w-2xl p-8 sm:p-12 rounded-3xl bg-[#060709]/90 backdrop-blur-2xl border border-[#D4AF37]/30 shadow-2xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] block mb-2">
            02 // Fluid Geometry & Obsidian Glass
          </span>
          <h2 className="font-heading text-3xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
            Hypnotic Visual Immersion.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-6">
            While ordinary agency websites show flat boxes, your website welcomes clients into an infinite luxury universe. Notice the metallic reflections, sculpted ribbons, and deep atmospheric lighting.
          </p>

          {/* Interactive Feature Pills */}
          <div className="flex flex-wrap justify-end gap-2.5">
            {[
              { id: 1, label: "01. Flowing Chrome Ribbon" },
              { id: 2, label: "02. Golden & Obsidian Lighting" },
              { id: 3, label: "03. Infinite Tunnel Perspective" },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveHotspot(activeHotspot === p.id ? null : p.id)}
                className={`px-4 py-2 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeHotspot === p.id
                    ? "border-[#D4AF37] bg-[#D4AF37] text-[#060709] shadow-lg shadow-[#D4AF37]/30"
                    : "border-[#D4AF37]/20 bg-[#0e1118]/80 text-slate-200 hover:border-[#D4AF37] hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {activeHotspot && (
            <div className="mt-5 p-5 rounded-2xl bg-[#0e1118]/95 border border-[#D4AF37]/60 text-sm font-normal text-left text-slate-100 backdrop-blur-md shadow-xl">
              ✨{" "}
              {activeHotspot === 1 && "Continuous liquid chrome ribbons generated with photorealistic Fresnel and metallic reflection maps."}
              {activeHotspot === 2 && "Imperial gold and obsidian ray-traced accents designed to match the signature VANSH STUDIOS luxury identity."}
              {activeHotspot === 3 && "Infinite continuous camera push-in that creates a mesmerizing sense of entering a new world."}
            </div>
          )}
        </div>
      </section>

      {/* Chapter 3: Spatial Immersion & Proof */}
      <section className="relative z-10 h-screen flex flex-col justify-center px-6 md:px-16 max-w-2xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#060709]/90 backdrop-blur-2xl border border-[#D4AF37]/30 shadow-2xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] block mb-2">
            03 // The Competitive Moat
          </span>
          <h2 className="font-heading text-3xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
            Websites That Charge 10x Higher.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-6">
            When a client lands on a generic 2D template, they negotiate your prices down. When they land on a living, moving 3D cinematic world, they perceive you as the unquestioned market leader.
          </p>

          <div className="grid grid-cols-2 gap-6 border-t border-[#D4AF37]/20 pt-6 text-xs font-mono">
            <div>
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text mb-1">380%</div>
              <div className="text-slate-300 font-bold uppercase tracking-wider">Higher Dwell Time</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text mb-1">4.8x</div>
              <div className="text-slate-300 font-bold uppercase tracking-wider">More Social Shares</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Conversion & Commission */}
      <section className="relative z-10 h-screen flex flex-col justify-center items-center px-6 text-center">
        <div className="max-w-3xl mx-auto p-8 sm:p-16 rounded-3xl border border-[#D4AF37]/50 bg-[#060709]/95 backdrop-blur-2xl shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            VANSH STUDIOS · Flagship Production
          </div>

          <h2 className="font-heading text-4xl sm:text-7xl font-black uppercase tracking-tight text-white mb-4">
            Let&apos;s Build Something Extraordinary.
          </h2>

          <p className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
            We generate bespoke cinematic video assets, layer high-performance React architecture, and launch your live website in 10 to 14 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20saw%20your%203D%20Cinematic%20Website%20and%20want%20to%20build%20one%20for%20my%20business!"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn w-full sm:w-auto px-9 py-4 rounded-xl text-[#060709] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#060709]" /> Commission On WhatsApp
            </a>
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#D4AF37]/50 bg-[#0e1118] hover:border-[#D4AF37] text-[#F5E6BE] font-bold text-xs uppercase tracking-wider transition-all"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BOTTOM FLOATING REAL-TIME SCROLL PROGRESS BAR            */}
      {/* ======================================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 h-1 bg-[#121520]">
        <div
          className="h-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#F5E6BE] transition-all duration-75 shadow-[0_0_10px_#D4AF37]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
}
