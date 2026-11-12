"use client";

import React, { useState } from "react";
import Image from "next/image";
import DimensionExplorer from "@/components/sections/DimensionExplorer";
import PricingSection from "@/components/sections/PricingSection";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Layout,
  Code2,
  Boxes,
  Cpu,
  ChevronDown,
  Mail,
  MessageSquare,
  Globe,
  Award,
  Crown,
} from "lucide-react";


export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "3D Cinematic Experience",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#060709] text-[#F5E6BE] selection:bg-[#D4AF37] selection:text-[#060709]">
      {/* ======================================================== */}
      {/* CONTINUOUS 1080P CINEMATIC BACKGROUND VIDEO LOOP         */}
      {/* ======================================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.03] opacity-35 filter contrast-[1.15] brightness-[0.72]"
          src="/videos/flow-3d.mp4"
        />
        {/* Luxury Gold & Obsidian Ambient Tonal Filter */}
        <div className="absolute inset-0 bg-[#060709]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060709]/95 via-transparent to-[#060709]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      </div>

      {/* ======================================================== */}
      {/* LUXURY GOLDEN & BLACK NAVIGATION                         */}
      {/* ======================================================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-2xl bg-[#060709]/85 border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3.5">
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-[#D4AF37]/30 blur-md group-hover:bg-[#D4AF37]/50 transition-all" />
            <Image
              src="/images/vansh-studios-logo.jpg"
              alt="VANSH STUDIOS Official Logo"
              width={44}
              height={44}
              className="relative z-10 rounded-xl border border-[#D4AF37]/70 shadow-[0_0_15px_rgba(212,175,55,0.35)] object-cover"
              priority
            />
          </div>
          <div>
            <span className="font-heading text-xl font-extrabold tracking-wider uppercase text-white block leading-none">
              Vansh Studios
            </span>
            <span className="text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase font-semibold">
              Atelier of Digital Experiences
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-slate-300">
          <a
            href="#explore"
            className="text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1.5 font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> 2D vs 3D Prototypes
          </a>
          <a href="#services" className="hover:text-[#D4AF37] transition-colors">
            Services
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-[#D4AF37] transition-colors font-bold"
          >
            Pricing
          </a>
          <a href="#work" className="hover:text-[#D4AF37] transition-colors">
            Portfolio
          </a>
          <a href="#process" className="hover:text-[#D4AF37] transition-colors">
            Process
          </a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="relative group overflow-hidden rounded-full border border-[#D4AF37] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#060709] bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#C5A059] shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Start Project{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </a>
      </nav>

      {/* ======================================================== */}
      {/* HERO SECTION                                             */}
      {/* ======================================================== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-32 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          {/* Official Emblem Spotlight Display */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 rounded-3xl bg-[#D4AF37]/25 blur-2xl group-hover:bg-[#D4AF37]/45 transition-all scale-110" />
            <Image
              src="/images/vansh-studios-logo.jpg"
              alt="VANSH STUDIOS Official Emblem"
              width={112}
              height={112}
              className="relative z-10 rounded-2xl border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.45)] object-cover"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            Beyond Ordinary Digital · Classic Luxury Web Studio
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-6 uppercase leading-[1.02]">
            We Create <br />
            <span className="gold-gradient-text drop-shadow-[0_10px_35px_rgba(212,175,55,0.3)]">
              What Comes Next.
            </span>
          </h1>

          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-200 font-normal mb-10 leading-relaxed drop-shadow-md">
            Digital experiences designed to move the world forward. We fuse
            cinematic video storytelling, gold-standard engineering, and timeless luxury aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#explore"
              className="gold-btn w-full sm:w-auto px-9 py-4 rounded-full text-sm font-black tracking-wider uppercase flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              Explore Live Prototypes
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full border border-[#D4AF37]/50 bg-[#060709]/80 backdrop-blur-md text-[#F5E6BE] font-bold text-sm tracking-wider uppercase hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition-all text-center shadow-lg"
            >
              Start A Project
            </a>
          </div>

          {/* Quick Prototype Indicator Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono">
            <span className="text-[#D4AF37]/80 font-bold uppercase tracking-wider">Live In Home:</span>
            <a
              href="#explore"
              className="px-3.5 py-1.5 rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/15 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#060709] transition-all font-bold flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> 3D Cinematic Website
            </a>
            <a
              href="#explore"
              className="px-3.5 py-1.5 rounded-full border border-emerald-500/60 bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all font-bold flex items-center gap-1.5"
            >
              <Layout className="w-3.5 h-3.5" /> 2D Modern Business Website (₹9,999)
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D4AF37]/80 text-xs font-semibold tracking-widest uppercase">
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2D VS 3D DIMENSION EXPLORER SECTION                      */}
      {/* ======================================================== */}
      <DimensionExplorer />

      {/* ======================================================== */}
      {/* PSYCHOLOGICAL PRICING & INVESTMENT SECTION               */}
      {/* ======================================================== */}
      <PricingSection />

      {/* ======================================================== */}
      {/* PHILOSOPHY STORYTELLING SECTION                          */}
      {/* ======================================================== */}
      <section className="relative z-10 py-32 px-6 md:px-12 border-t border-[#D4AF37]/20 bg-[#060709]/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-3 block">
            ✦ Studio Philosophy ✦
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
            “Ideas Deserve Extraordinary Execution.”
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-slate-200 text-lg sm:text-xl font-normal leading-relaxed">
            Standard websites blend into the noise. We craft bespoke visual
            narratives with living video loops, liquid gold and obsidian reflections, and
            uncompromising mobile responsiveness.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SERVICES SECTION                                         */}
      {/* ======================================================== */}
      <section
        id="services"
        className="relative z-10 py-32 px-6 md:px-12 border-t border-[#D4AF37]/20 bg-[#060709]/85 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-2 block">
                ✦ High-Ticket Capabilities ✦
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
                What We Create
              </h2>
            </div>
            <p className="text-slate-200 max-w-md text-base sm:text-lg font-normal">
              End-to-end digital craft tailored for pioneering brands, luxury ventures, and ambitious local leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Boxes className="w-7 h-7 text-[#D4AF37]" />,
                title: "3D & Cinematic Web Experiences",
                desc: "Full video-driven websites, Three.js shaders, and interactive product deconstruction that capture global attention.",
              },
              {
                icon: <Code2 className="w-7 h-7 text-[#D4AF37]" />,
                title: "High-Performance 2D Websites",
                desc: "Lightning-fast Next.js engineering with sub-second mobile loading, Google Maps SEO, and instant WhatsApp lead capture.",
              },
              {
                icon: <Layers className="w-7 h-7 text-[#D4AF37]" />,
                title: "Brand Identity & Systems",
                desc: "Futuristic visual identities, editorial typography, motion guidelines, and interactive design libraries.",
              },
              {
                icon: <Cpu className="w-7 h-7 text-[#D4AF37]" />,
                title: "AI-Powered Automation",
                desc: "Intelligent agent workflows, automated customer lead capture, and next-generation AI integrations.",
              },
              {
                icon: <Globe className="w-7 h-7 text-[#D4AF37]" />,
                title: "Global Cloud Production",
                desc: "Complete product delivery from initial 3D visualization and Flow storyboards to worldwide edge CDN deployment.",
              },
              {
                icon: <Award className="w-7 h-7 text-[#D4AF37]" />,
                title: "Creative Art Direction",
                desc: "Bespoke digital campaigns, experimental prototypes, and interactive exhibits that position your brand at the very top.",
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                className="gold-card p-8 rounded-2xl relative shadow-xl"
              >
                <div className="mb-6 p-3.5 w-fit rounded-xl bg-[#0e1118] border border-[#D4AF37]/30 shadow-md">
                  {srv.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SELECTED WORK SECTION                                    */}
      {/* ======================================================== */}
      <section
        id="work"
        className="relative z-10 py-32 px-6 md:px-12 border-t border-[#D4AF37]/20 bg-[#060709]/90 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-2 block">
                ✦ Portfolio Showcase ✦
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
                Selected Work
              </h2>
            </div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
              Experimental Concept Prototypes
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                tag: "Interactive 3D / Spatial UI",
                title: "Aetheria OS",
                desc: "A futuristic spatial computing interface concept featuring liquid gold window mechanics and real-time lighting.",
                accent: "from-[#D4AF37]/25 to-transparent",
              },
              {
                tag: "Luxury Horology / Video Scroll",
                title: "Chronos Labs",
                desc: "Frame-by-frame scroll-driven deconstruction of a luxury mechanical timepiece rendered in cinematic obsidian studio lighting.",
                accent: "from-[#F5E6BE]/25 to-transparent",
              },
              {
                tag: "Autonomous Systems / WebGL",
                title: "Vanguard Mobility",
                desc: "Real-time LiDAR point-cloud visualization and interactive telemetry dashboard built with Three.js shaders.",
                accent: "from-[#D4AF37]/25 to-transparent",
              },
              {
                tag: "Digital Commerce / Motion",
                title: "Monolith Architecture",
                desc: "Minimalist brutalist portfolio and virtual architectural gallery with smooth inertia scrolling and physics-based transitions.",
                accent: "from-[#F5E6BE]/25 to-transparent",
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="gold-card p-8 sm:p-10 rounded-2xl relative overflow-hidden shadow-2xl"
              >
                <div
                  className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${proj.accent} blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-3 block">
                  {proj.tag}
                </span>
                <h3 className="font-heading text-3xl font-bold text-white mb-3 flex items-center justify-between">
                  {proj.title}
                  <ArrowUpRight className="w-6 h-6 text-[#D4AF37] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-slate-300 text-base font-normal leading-relaxed mb-6">
                  {proj.desc}
                </p>
                <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="font-bold text-[#D4AF37]">Concept Prototype</span>
                  <span className="text-white font-bold group-hover:underline">
                    View Case Study &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PROCESS SECTION                                          */}
      {/* ======================================================== */}
      <section
        id="process"
        className="relative z-10 py-32 px-6 md:px-12 border-t border-[#D4AF37]/20 bg-[#060709]/85 backdrop-blur-xl"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-2 block">
              ✦ Methodology ✦
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Discover",
                desc: "Unearthing your core brand vision, competitive whitespace, and interaction benchmarks.",
              },
              {
                num: "02",
                title: "Design",
                desc: "Crafting editorial typography, 3D Flow video prompts, and interactive prototypes.",
              },
              {
                num: "03",
                title: "Develop",
                desc: "Engineering in Next.js, Three.js shaders, and GSAP scroll choreography.",
              },
              {
                num: "04",
                title: "Deliver",
                desc: "Auditing mobile performance, Google SEO, speed optimization, and edge CDN deployment.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="gold-card p-8 rounded-2xl relative shadow-lg"
              >
                <div className="font-mono text-4xl font-black text-[#D4AF37] mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2 uppercase">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CONTACT SECTION                                          */}
      {/* ======================================================== */}
      <section
        id="contact"
        className="relative z-10 py-32 px-6 md:px-12 border-t border-[#D4AF37]/20 bg-[#060709]/95 backdrop-blur-2xl"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-2 block">
              ✦ Commissions & Inquiries ✦
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight">
              Let&apos;s Build Something Extraordinary.
            </h2>
            <p className="mt-4 text-slate-200 text-base sm:text-lg font-normal">
              Ready to elevate your digital presence? Send us an inquiry or connect directly.
            </p>
          </div>

          <div className="bg-[#0a0c10]/95 border border-[#D4AF37]/35 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] mx-auto flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-slate-200 text-base font-normal">
                  Thank you for reaching out to VANSH STUDIOS. We will get back to you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#121520] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#121520] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Studio / Clinic"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-[#121520] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full bg-[#121520] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="3D Cinematic Experience">
                        3D Cinematic Web Experience (Premium Tier)
                      </option>
                      <option value="2D Modern Website">
                        2D Modern Business Website (Standard Tier)
                      </option>
                      <option value="Complete Agency Rebrand">
                        Complete Brand Identity & Rebrand
                      </option>
                      <option value="Custom Web Application">
                        Custom Web Application / Next.js
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
                    Project Vision & Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your brand, goals, target timeline, and what kind of website you envision..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#121520] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="gold-btn w-full py-4 rounded-xl text-black font-black text-base uppercase tracking-wider cursor-pointer"
                >
                  Send Inquiry Now
                </button>
              </form>
            )}

            {/* Direct Connect Buttons */}
            <div className="mt-8 pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: Available for direct discussion</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>Email: contact@vanshstudios.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FOOTER                                                   */}
      {/* ======================================================== */}
      <footer className="relative z-10 py-12 px-6 md:px-12 border-t border-[#D4AF37]/20 bg-[#060709] text-sm font-mono text-slate-400 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/vansh-studios-logo.jpg"
            alt="VANSH STUDIOS Logo"
            width={36}
            height={36}
            className="rounded-lg border border-[#D4AF37]/60 object-cover"
          />
          <span className="text-white font-extrabold text-base tracking-wider uppercase">
            VANSH STUDIOS
          </span>
        </div>
        <div>✦ Beyond Ordinary Digital ✦ All rights reserved © 2026</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">X / Twitter</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
