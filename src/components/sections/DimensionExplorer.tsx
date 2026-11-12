"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Layout,
  Film,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Monitor,
  ExternalLink,
  MessageCircle,
  Eye,
  Crown,
  Volume2,
  VolumeX,
  Phone,
  Star,
  Zap,
  TrendingUp,
  Layers,
  ArrowUpRight,
  Sliders,
  Check,
} from "lucide-react";

type DimensionMode = "3d" | "2d" | "compare";
type DeviceView = "desktop" | "mobile";

export default function DimensionExplorer() {
  const [mode, setMode] = useState<DimensionMode>("3d"); // default to 3D for maximum wow factor
  const [deviceView, setDeviceView] = useState<DeviceView>("desktop");
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [scrubProgress, setScrubProgress] = useState(30);
  const [isMuted, setIsMuted] = useState(true);

  // 2D Prototype interactive state
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Ambient Luxury Sound Generator for 3D Prototype
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
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
        setIsMuted(false);
      } catch (e) {
        console.warn("Audio Context init error", e);
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 0.3
        );
        setTimeout(() => {
          if (oscRef.current) oscRef.current.stop();
          if (audioCtxRef.current) audioCtxRef.current.close();
        }, 300);
      }
      setIsMuted(true);
    }
  };

  const handleVideoScrub = (val: number) => {
    setScrubProgress(val);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (val / 100) * videoRef.current.duration;
    }
  };

  const chapterData = [
    {
      title: "The Spatial Continuum",
      tagline: "01 // Hypnotic Visual Immersion",
      desc: "Camera travels continuously through futuristic architectural chrome and obsidian glass. A living 3D website that commands immediate authority.",
    },
    {
      title: "Liquid Geometry Architecture",
      tagline: "02 // Photorealistic Reflections",
      desc: "Sculpted metallic ribbons, ray-traced lighting, and smooth hardware-accelerated 60 FPS playback that mesmerizes every visitor.",
    },
    {
      title: "The High-Ticket Competitive Moat",
      tagline: "03 // 10x Higher Client Perception",
      desc: "Standard flat templates force you to negotiate prices down. A living 3D world establishes you as the unquestioned market leader.",
    },
    {
      title: "Direct WhatsApp Conversion",
      tagline: "04 // Bespoke Studio Commission",
      desc: "Every element is crafted to drive conversions. Direct 1-tap WhatsApp consultation, mobile responsive, and edge CDN deployed.",
    },
  ];

  return (
    <section
      id="explore"
      className="relative z-10 py-24 px-4 sm:px-6 md:px-12 border-t border-[#D4AF37]/20 bg-[#060709] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            Live Client Prototypes · Touch & Explore Directly
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            Experience The Websites <br />
            <span className="gold-gradient-text drop-shadow-[0_10px_35px_rgba(212,175,55,0.3)]">
              We Build For You.
            </span>
          </h2>

          <p className="mt-4 text-slate-200 text-base sm:text-xl font-normal max-w-2xl mx-auto">
            Both prototypes below are fully live and interactive. Click the tabs to switch between our high-ticket 3D Cinematic video experience and our lightning-fast 2D business website.
          </p>
        </div>

        {/* ======================================================== */}
        {/* PRIMARY PROTOTYPE SELECTOR TABS                          */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3.5 max-w-4xl mx-auto mb-8">
          {/* Tab 1: 3D Cinematic Prototype */}
          <button
            onClick={() => setMode("3d")}
            className={`flex-1 p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative ${
              mode === "3d"
                ? "border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/25 via-[#060709] to-[#060709] shadow-[0_0_30px_rgba(212,175,55,0.35)] ring-1 ring-[#D4AF37]"
                : "border-[#D4AF37]/20 bg-[#0e1118]/80 hover:border-[#D4AF37]/50 hover:bg-[#0e1118]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Prototype A · High-Ticket Flagship
              </span>
              {mode === "3d" && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-[#D4AF37] text-[#060709] uppercase">
                  Active
                </span>
              )}
            </div>
            <div className="font-heading text-lg sm:text-xl font-black text-white">
              3D Cinematic Luxury Website
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Continuous cinematic depth, spatial elegance & Apple-grade prestige.
            </p>
          </button>

          {/* Tab 2: 2D Modern Business Prototype */}
          <button
            onClick={() => setMode("2d")}
            className={`flex-1 p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative ${
              mode === "2d"
                ? "border-emerald-500 bg-gradient-to-r from-emerald-500/25 via-[#060709] to-[#060709] shadow-[0_0_30px_rgba(16,185,129,0.35)] ring-1 ring-emerald-500"
                : "border-white/15 bg-[#0e1118]/80 hover:border-emerald-500/50 hover:bg-[#0e1118]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <Layout className="w-3.5 h-3.5 text-emerald-400" />
                Prototype B · Fast Local Conversions
              </span>
              {mode === "2d" && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-emerald-500 text-[#060709] uppercase">
                  Active
                </span>
              )}
            </div>
            <div className="font-heading text-lg sm:text-xl font-black text-white">
              2D Modern Business Website
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Sub-second speed, Google SEO, pricing calculator & WhatsApp leads.
            </p>
          </button>

          {/* Tab 3: Compare Side-by-Side */}
          <button
            onClick={() => setMode("compare")}
            className={`sm:w-44 p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-center ${
              mode === "compare"
                ? "border-[#D4AF37] bg-[#D4AF37]/20 shadow-[0_0_30px_rgba(212,175,55,0.3)] ring-1 ring-[#D4AF37]"
                : "border-[#D4AF37]/20 bg-[#0e1118]/80 hover:border-[#D4AF37]/50 hover:bg-[#0e1118]"
            }`}
          >
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider mb-1 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5" /> Compare
            </span>
            <div className="font-heading text-base font-extrabold text-white">
              Decision Guide
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              2D vs 3D Matrix
            </p>
          </button>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE PROTOTYPE VIEWPORT                           */}
        {/* ======================================================== */}
        {mode !== "compare" && (
          <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#060709] overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.9)]">
            {/* Browser Window Header Chrome Bar */}
            <div className="px-5 py-3.5 bg-[#0e1118] border-b border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* Simulated Browser URL bar */}
              <div className="bg-[#060709] border border-[#D4AF37]/30 rounded-xl px-4 py-1.5 text-xs font-mono text-[#F5E6BE] flex items-center gap-2.5 w-full sm:w-auto sm:min-w-[340px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">
                  {mode === "3d"
                    ? "https://vansh-studios.com/prototypes/3d-cinematic-continuum"
                    : "https://vansh-studios.com/prototypes/2d-business-growth"}
                </span>
                <span className="ml-auto text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded">
                  Live
                </span>
              </div>

              {/* Device View Toggle (for 2D) & Fullscreen Link */}
              <div className="flex items-center gap-2 text-xs">
                {mode === "2d" && (
                  <div className="flex items-center bg-[#060709] border border-white/10 rounded-lg p-0.5">
                    <button
                      onClick={() => setDeviceView("desktop")}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                        deviceView === "desktop"
                          ? "bg-emerald-500 text-slate-950 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Monitor className="w-3 h-3" /> Desktop
                    </button>
                    <button
                      onClick={() => setDeviceView("mobile")}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                        deviceView === "mobile"
                          ? "bg-emerald-500 text-slate-950 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Smartphone className="w-3 h-3" /> iPhone
                    </button>
                  </div>
                )}

                <Link
                  href={mode === "3d" ? "/prototypes/3d-cinematic" : "/prototypes/2d-business"}
                  className="gold-btn px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 text-[#060709] shadow-md shadow-[#D4AF37]/20"
                >
                  <span>Open Full Page</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#060709]" />
                </Link>
              </div>
            </div>

            {/* ==================================================== */}
            {/* PROTOTYPE VIEWPORT CONTENT: 3D CINEMATIC             */}
            {/* ==================================================== */}
            {mode === "3d" && (
              <div className="relative min-h-[620px] sm:min-h-[700px] flex flex-col justify-between overflow-hidden bg-black text-[#F5E6BE]">
                {/* 1080p Continuous Google Flow Video Loop */}
                <video
                  ref={videoRef}
                  src="/videos/flow-3d.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-85 filter contrast-[1.12] brightness-[0.82]"
                />

                {/* Ambient Gold & Obsidian Gradient Layers */}
                <div className="absolute inset-0 bg-[#060709]/50 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-[#060709]/80 z-10 pointer-events-none" />

                {/* Top Prototype In-Frame Navigation */}
                <header className="relative z-20 px-6 sm:px-10 py-5 flex items-center justify-between border-b border-[#D4AF37]/20 backdrop-blur-md bg-[#060709]/60">
                  <div className="flex items-center gap-3">
                    <div className="relative group">
                      <Image
                        src="/images/vansh-studios-logo.jpg"
                        alt="VANSH STUDIOS Official Logo"
                        width={36}
                        height={36}
                        className="rounded-xl border border-[#D4AF37]/80 shadow-[0_0_15px_rgba(212,175,55,0.4)] object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <span className="font-heading text-sm sm:text-base font-extrabold tracking-widest uppercase text-white block leading-none">
                        VANSH // SPATIAL CONTINUUM
                      </span>
                      <span className="text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase font-semibold">
                        Living 3D Web Experience
                      </span>
                    </div>
                  </div>

                  {/* Chapter Selector Navigation */}
                  <div className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-[#060709]/80 border border-[#D4AF37]/30">
                    {chapterData.map((chap, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveChapter(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                          activeChapter === idx
                            ? "bg-[#D4AF37] text-[#060709] font-black shadow-md shadow-[#D4AF37]/30"
                            : "text-[#F5E6BE]/70 hover:text-white"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  {/* Audio Drone & Fullscreen Button */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleAudio}
                      className={`p-2 rounded-xl border text-xs font-mono backdrop-blur-md transition-all cursor-pointer ${
                        !isMuted
                          ? "bg-[#D4AF37]/25 border-[#D4AF37] text-[#D4AF37]"
                          : "bg-[#060709]/80 border-[#D4AF37]/30 text-[#F5E6BE]/70 hover:text-white"
                      }`}
                      title="Toggle Ambient Audio Drone"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
                    </button>
                  </div>
                </header>

                {/* 3D Dynamic Story Overlay Based on Active Chapter */}
                <div className="relative z-20 px-6 sm:px-12 py-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-mono font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {chapterData[activeChapter].tagline}
                  </div>

                  <h3 className="font-heading text-3xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none mb-4 drop-shadow-lg">
                    {chapterData[activeChapter].title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed mb-6 max-w-lg drop-shadow-md">
                    {chapterData[activeChapter].desc}
                  </p>

                  {/* Interactive Hotspot Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    {[
                      { id: 1, label: "01. Flowing Chrome Ribbon" },
                      { id: 2, label: "02. Golden & Obsidian Depth" },
                      { id: 3, label: "03. Infinite Tunnel Perspective" },
                    ].map((hotspot) => (
                      <button
                        key={hotspot.id}
                        onClick={() =>
                          setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)
                        }
                        className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                          activeHotspot === hotspot.id
                            ? "border-[#D4AF37] bg-[#D4AF37] text-[#060709] shadow-lg shadow-[#D4AF37]/30"
                            : "border-[#D4AF37]/30 bg-[#060709]/80 text-[#F5E6BE] hover:border-[#D4AF37]"
                        }`}
                      >
                        {hotspot.label}
                      </button>
                    ))}
                  </div>

                  {activeHotspot && (
                    <div className="p-4 rounded-xl bg-[#0e1118]/95 border border-[#D4AF37]/60 text-xs sm:text-sm text-slate-100 font-normal backdrop-blur-md shadow-2xl">
                      ✨{" "}
                      {activeHotspot === 1 && "Continuous liquid chrome ribbons generated with photorealistic Fresnel and metallic reflection maps."}
                      {activeHotspot === 2 && "Imperial gold and obsidian ray-traced accents designed to match the signature VANSH STUDIOS luxury identity."}
                      {activeHotspot === 3 && "Infinite continuous camera push-in that creates a mesmerizing sense of entering a new world."}
                    </div>
                  )}
                </div>

                {/* Bottom Living Status & Actions */}
                <div className="relative z-20 px-6 sm:px-12 pb-8 pt-4 bg-gradient-to-t from-[#060709] via-[#060709]/80 to-transparent">
                  <div className="p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/30 bg-[#0e1118]/90 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div>
                        <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider block">
                          Living 3D Environment · Infinite Continuum
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          Hardware Accelerated 60 FPS · Smooth Responsive Loop
                        </span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20saw%20your%203D%20Cinematic%20Website%20Prototype%20and%20want%20to%20order%20one!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gold-btn flex-1 sm:flex-initial px-6 py-3 rounded-xl text-[#060709] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/30 cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 text-[#060709]" /> Order 3D Website
                      </a>
                      <Link
                        href="/prototypes/3d-cinematic"
                        className="flex-1 sm:flex-initial px-5 py-3 rounded-xl border border-[#D4AF37]/50 bg-[#060709] hover:border-[#D4AF37] text-[#F5E6BE] font-bold text-xs uppercase tracking-wider text-center transition-all"
                      >
                        Launch Fullscreen ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================================================== */}
            {/* PROTOTYPE VIEWPORT CONTENT: 2D BUSINESS              */}
            {/* ==================================================== */}
            {mode === "2d" && (
              <div className="p-4 sm:p-8 bg-slate-100 min-h-[620px] flex items-center justify-center">
                {deviceView === "desktop" ? (
                  /* Desktop View of 2D Website */
                  <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-slate-900">
                    {/* 2D Brand Navbar */}
                    <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white">
                      <div className="flex items-center gap-2.5 font-black text-base text-slate-950">
                        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">
                          N
                        </div>
                        Nexus Advisory Group
                      </div>
                      <div className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-600">
                        <span>Services</span>
                        <span>Pricing</span>
                        <span>Case Studies</span>
                      </div>
                      <a
                        href="tel:+919876543210"
                        className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                      >
                        Call: +91 98765 43210
                      </a>
                    </div>

                    {/* 2D Hero */}
                    <div className="p-6 sm:p-10 bg-gradient-to-b from-slate-50 to-white">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                        <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                        Rated 4.9/5 by 250+ Business Owners
                      </div>
                      <h3 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
                        High-Converting Business Websites. Built For Growth.
                      </h3>
                      <p className="text-base text-slate-600 max-w-2xl leading-relaxed mb-6 font-normal">
                        Fast, modern, and clean business websites designed to turn local visitors into paying customers. No complex code, sub-second mobile loading, and direct WhatsApp lead capture.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="font-extrabold text-sm text-slate-900 mb-1 flex items-center gap-1.5">
                            <Zap className="w-4 h-4 text-emerald-600" /> 1.2s Fast Load Speed
                          </div>
                          <p className="text-xs text-slate-600">
                            99/100 Google PageSpeed score for maximum SEO ranking.
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="font-extrabold text-sm text-slate-900 mb-1 flex items-center gap-1.5">
                            <Smartphone className="w-4 h-4 text-emerald-600" /> 100% Mobile Ready
                          </div>
                          <p className="text-xs text-slate-600">
                            Flawless experience on iPhones, Android phones, and tablets.
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="font-extrabold text-sm text-slate-900 mb-1 flex items-center gap-1.5">
                            <MessageCircle className="w-4 h-4 text-emerald-600" /> WhatsApp Leads
                          </div>
                          <p className="text-xs text-slate-600">
                            Visitors can send an inquiry directly to your WhatsApp in 1 tap.
                          </p>
                        </div>
                      </div>

                      {/* Transparent Pricing Cards inside 2D Prototype */}
                      <div className="border-t border-slate-200 pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                            Transparent Packages & Direct Pricing:
                          </h4>
                          <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                            ★ Direct Studio Rates (No Middlemen)
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {[
                            {
                              name: "Starter Business",
                              market: "₹18,000",
                              price: "₹4,999",
                              days: "48–72h Delivery",
                              highlight: false,
                              note: "Save 72%",
                              cta: "Order ₹4,999 Tier",
                            },
                            {
                              name: "Growth Complete",
                              market: "₹38,000",
                              price: "₹9,999",
                              days: "3–5 Days Delivery",
                              highlight: true,
                              note: "Most Popular · Save 74%",
                              cta: "Order ₹9,999 Tier",
                            },
                            {
                              name: "3D Cinematic",
                              market: "₹1,50,000+",
                              price: "Work-Based",
                              days: "Custom Scope",
                              highlight: false,
                              note: "Aapke Kaam Ke Hisaab Se",
                              cta: "Get Custom Quote",
                            },
                          ].map((pkg, idx) => (
                            <div
                              key={idx}
                              className={`p-4 rounded-xl border text-left flex flex-col justify-between ${
                                pkg.highlight
                                  ? "border-emerald-500 bg-emerald-50/60 shadow-md ring-1 ring-emerald-500"
                                  : "border-slate-200 bg-white"
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-bold text-sm text-slate-900">{pkg.name}</span>
                                  <span
                                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                      pkg.highlight
                                        ? "text-emerald-800 bg-emerald-200"
                                        : "text-slate-600 bg-slate-100"
                                    }`}
                                  >
                                    {pkg.note}
                                  </span>
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                                  Actual Market Rate:
                                </div>
                                <div className="text-xl font-black text-slate-400 line-through decoration-red-500 decoration-2 mb-1">
                                  {pkg.market}
                                </div>
                                <div className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
                                  ↓ Direct Studio Rate:
                                </div>
                                <div className="text-2xl sm:text-3xl font-black text-slate-950 mb-1">{pkg.price}</div>
                                <div className="text-xs text-slate-500 mb-3">{pkg.days}</div>
                              </div>
                              <a
                                href={`https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20want%20to%20order%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-2 rounded-lg text-xs font-bold text-center block transition-colors ${
                                  pkg.highlight
                                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                                    : "bg-slate-900 hover:bg-slate-800 text-white"
                                }`}
                              >
                                {pkg.cta}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Lead Submission Test */}
                      <div className="mt-8 p-5 rounded-2xl bg-slate-900 text-white">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div>
                            <div className="text-sm font-extrabold text-emerald-400 mb-0.5">
                              Test The Live Lead Capture Form:
                            </div>
                            <p className="text-xs text-slate-300">
                              Type sample details below to see how customer inquiries work on this website.
                            </p>
                          </div>
                          {leadSubmitted ? (
                            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs bg-emerald-950 border border-emerald-500/50 px-4 py-2 rounded-xl">
                              <Check className="w-4 h-4" /> Inquiry Received! Notification sent to owner WhatsApp.
                            </div>
                          ) : (
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                setLeadSubmitted(true);
                              }}
                              className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto"
                            >
                              <input
                                type="text"
                                placeholder="Your Name"
                                value={leadName}
                                onChange={(e) => setLeadName(e.target.value)}
                                required
                                className="px-3 py-2 rounded-lg bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:border-emerald-500 w-full sm:w-36"
                              />
                              <input
                                type="tel"
                                placeholder="Phone Number"
                                value={leadPhone}
                                onChange={(e) => setLeadPhone(e.target.value)}
                                required
                                className="px-3 py-2 rounded-lg bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:border-emerald-500 w-full sm:w-36"
                              />
                              <button
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
                              >
                                Test Form
                              </button>
                            </form>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Mobile iPhone Mockup View of 2D Website */
                  <div className="w-[340px] max-w-full bg-slate-950 p-3 rounded-[44px] shadow-2xl border-4 border-slate-800 relative">
                    {/* iPhone Speaker & Camera Notch */}
                    <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

                    <div className="bg-white rounded-[32px] overflow-hidden text-slate-900 h-[560px] overflow-y-auto p-5 text-left">
                      {/* Mobile Brand Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                        <div className="flex items-center gap-2 font-black text-xs text-slate-950">
                          <div className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                            N
                          </div>
                          Nexus Advisory
                        </div>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                          Mobile View
                        </span>
                      </div>

                      {/* Mobile Hero */}
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold mb-2">
                        Trusted by 250+ Clients
                      </span>
                      <h4 className="text-xl font-black text-slate-950 tracking-tight leading-tight mb-2">
                        Grow Your Local Business Fast.
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Clean layouts, Google ranking, and 1-tap WhatsApp consultation.
                      </p>

                      {/* Mobile WhatsApp Button */}
                      <a
                        href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20like%20this%202D%20Mobile%20Prototype!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg mb-4"
                      >
                        <MessageCircle className="w-4 h-4" /> Chat On WhatsApp
                      </a>

                      {/* Mobile Service List */}
                      <div className="space-y-2 mb-4">
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                          <strong className="block text-slate-900 font-bold">⚡ 1.2s Fast Mobile Speed</strong>
                          <span className="text-slate-500 text-[11px]">Instant loading on 4G/5G phones</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                          <strong className="block text-slate-900 font-bold">📍 Google Maps Ranking</strong>
                          <span className="text-slate-500 text-[11px]">Customers find you immediately</span>
                        </div>
                      </div>

                      {/* Mobile Pricing Snippet */}
                      <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs text-center">
                        <span className="text-emerald-400 font-bold block text-[11px]">Direct Founder Rates</span>
                        <span className="text-lg font-black text-white block my-0.5">₹4,999 – ₹9,999</span>
                        <span className="text-slate-400 text-[10px]">3D Websites: Work-Based Custom Quote</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* SIDE-BY-SIDE COMPARISON TABLE (Shown in compare mode)     */}
        {/* ======================================================== */}
        <div className={`mt-10 p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/30 bg-[#0e1118]/95 backdrop-blur-2xl shadow-2xl ${mode !== "compare" ? "hidden" : "block"}`}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] block mb-2">
              ✦ Decision Matrix ✦
            </span>
            <h3 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Which Website Tier Fits Your Brand?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2D Business Tier Card */}
            <div className="p-8 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                    Tier 1 · High Speed
                  </span>
                  <span className="text-xs font-mono text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-md font-bold">
                    3–5 Workdays
                  </span>
                </div>
                <h4 className="font-heading text-2xl sm:text-3xl font-black text-white mb-2">
                  2D Modern Business Website
                </h4>
                <div className="mb-4 p-4 rounded-xl bg-[#060709] border border-emerald-500/30">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Actual Market Value:
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-400 line-through decoration-red-500 decoration-[3.5px] tracking-tight mb-2">
                    ₹25,000 – ₹45,000
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                    ↓ Direct Founder Rate:
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400">₹4,999 – ₹9,999</div>
                  <span className="text-[11px] font-mono text-emerald-300 font-bold mt-1.5 block">
                    ★ Save 70%+ With Zero Agency Bloat
                  </span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  Ye actual agency market prices se 70% economical hai. Local businesses aur startups ke liye hum complete professional 2D websites sirf <strong>₹5,000 se ₹10,000</strong> me deliver karte hain.
                </p>

                <ul className="space-y-3 text-sm text-slate-200 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Sub-second loading speed on iPhones and Android</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Integrated Google Business profile & SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Instant 1-click WhatsApp lead button & inquiry form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Free .com / .in domain and 1 year high-speed cloud hosting</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-emerald-500/20 flex flex-col gap-2.5">
                <button
                  onClick={() => setMode("2d")}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider text-center transition-colors cursor-pointer"
                >
                  Inspect 2D Live Prototype
                </button>
                <Link
                  href="/prototypes/2d-business"
                  className="text-xs text-center font-mono text-emerald-400 hover:text-white transition-colors"
                >
                  Open Dedicated Fullscreen 2D Page ↗
                </Link>
              </div>
            </div>

            {/* 3D Cinematic Tier Card */}
            <div className="p-8 rounded-2xl border border-[#D4AF37]/60 bg-gradient-to-b from-[#D4AF37]/20 via-[#060709] to-[#060709] flex flex-col justify-between shadow-[0_0_35px_rgba(212,175,55,0.25)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Tier 2 · High Ticket Flagship
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/20 px-3 py-1 rounded-md font-bold">
                    10–14 Workdays
                  </span>
                </div>
                <h4 className="font-heading text-2xl sm:text-3xl font-black text-white mb-2">
                  3D Cinematic Luxury Experience
                </h4>
                <div className="mb-4 p-4 rounded-xl bg-[#060709] border border-[#D4AF37]/40">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Actual Market Value:
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-400 line-through decoration-red-500 decoration-[3.5px] tracking-tight mb-2">
                    ₹1,50,000+
                  </div>
                  <span className="text-[11px] font-mono text-[#D4AF37] font-bold uppercase tracking-wider block mb-1">
                    ↓ Direct Work-Based Custom Rate:
                  </span>
                  <div className="text-2xl sm:text-3xl font-black gold-gradient-text">Aapke Kaam Ke Hisaab Se Set</div>
                  <span className="text-[11px] font-mono text-[#D4AF37] font-bold mt-1.5 block">
                    ★ Fair Dynamic Quote · Pay Only For What You Need
                  </span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  3D websites ke liye koi rigid package nahi hai. Hum aapke exact video duration, visual scenes aur interaction requirements ke hisaab se sabse fair aur transparent custom rate set karte hain.
                </p>

                <ul className="space-y-3 text-sm text-slate-200 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Living continuous cinematic video background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Spatial chapter storytelling & interactive 3D hotspot inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Timeless golden & obsidian luxury aesthetics (Apple & Awwwards caliber)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Viral social shareability for Instagram Reels, YouTube & LinkedIn</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col gap-2.5">
                <button
                  onClick={() => setMode("3d")}
                  className="gold-btn w-full py-3 rounded-xl text-[#060709] font-black text-xs uppercase tracking-wider text-center transition-colors cursor-pointer"
                >
                  Inspect 3D Live Prototype
                </button>
                <Link
                  href="/prototypes/3d-cinematic"
                  className="text-xs text-center font-mono text-[#D4AF37] hover:text-white transition-colors"
                >
                  Open Dedicated Fullscreen 3D Page ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
