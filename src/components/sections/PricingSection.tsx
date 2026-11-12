"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  MessageCircle,
  HelpCircle,
  Crown,
  ChevronDown,
  ArrowRight,
  Flame,
} from "lucide-react";

export default function PricingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section
      id="pricing"
      className="relative z-10 py-32 px-6 md:px-12 border-t border-[#D4AF37]/20 bg-[#060709] overflow-hidden"
    >
      {/* Ambient background gold glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* URGENCY SCARCITY BANNER                                  */}
        {/* ======================================================== */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/60 bg-amber-500/15 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-amber-500/10">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Limited Introductory Offer · Only 3 Founder Slots Remaining This Month</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION HEADER WITH PSYCHOLOGICAL ANCHOR                 */}
        {/* ======================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] block mb-2">
            ✦ Transparent Pricing Architecture ✦
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
            Market Value vs. <br />
            <span className="gold-gradient-text drop-shadow-[0_10px_35px_rgba(212,175,55,0.3)]">
              VANSH Direct Studio Rate.
            </span>
          </h2>
          <p className="mt-6 text-slate-200 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
            Traditional agencies charge ₹25,000 to ₹1,50,000+ to pay for account managers and fancy offices. We believe in direct creator collaboration: standard business websites for <strong>₹5,000 – ₹10,000</strong>, and 3D websites fairly quoted based on your exact vision.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 3 PSYCHOLOGICAL PRICING TIERS                            */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {/* TIER 1: 2D STARTER LAUNCHPAD */}
          <div className="p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 bg-[#0e1118]/90 backdrop-blur-xl flex flex-col justify-between shadow-xl relative group hover:border-[#D4AF37]/60 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full uppercase tracking-wider">
                  Tier 1 · Starter Launchpad
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 48–72 Hours
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
                2D Starter Website
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Perfect for local businesses, shops, doctors, coaching institutes, and freelancers needing fast online credibility.
              </p>

              {/* Massive Psychological Anchor Block */}
              <div className="mb-6 p-5 rounded-2xl bg-[#060709] border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Actual Market Value:
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/40 uppercase">
                    72% Off Markdown
                  </span>
                </div>
                
                {/* BIG BOLD ANCHOR (SLASHED) */}
                <div className="text-3xl sm:text-4xl font-black text-slate-400 line-through decoration-red-500 decoration-[3.5px] tracking-tight my-1.5">
                  ₹18,000
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mt-3 mb-1">
                  <span>↓ Direct Founder Price:</span>
                </div>

                <div className="flex items-baseline gap-2.5">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹4,999</span>
                  <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 rounded-md uppercase">
                    Save ₹13,000
                  </span>
                </div>

                <span className="text-[11px] font-mono text-[#D4AF37] block mt-2">
                  ★ All-inclusive single payment · Zero recurring fees
                </span>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>High-Converting Landing Page:</strong> Clean modern design designed to get direct calls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>1-Tap WhatsApp Lead Capture:</strong> Visitors message your WhatsApp instantly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Mobile Ready:</strong> Tested on iPhones and Android phones with sub-second speed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Google Maps & Search Setup:</strong> Local customers can find your address and phone.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Free Cloud Deployment:</strong> Live on your custom domain in 48 to 72 hours.</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20want%20to%20claim%20the%20%E2%82%B94,999%20Starter%20Website%20offer!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl border border-emerald-500/60 bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Claim ₹4,999 Offer
            </a>
          </div>

          {/* TIER 2: 2D COMPLETE BUSINESS GROWTH [MOST POPULAR / BEST VALUE] */}
          <div className="p-8 sm:p-10 rounded-3xl border-2 border-[#D4AF37] bg-gradient-to-b from-[#D4AF37]/20 via-[#0e1118] to-[#0e1118] backdrop-blur-2xl flex flex-col justify-between shadow-[0_0_50px_rgba(212,175,55,0.35)] relative transform lg:-translate-y-3">
            {/* Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F5E6BE] via-[#D4AF37] to-[#C5A059] text-[#060709] font-black text-xs uppercase tracking-widest shadow-lg flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 fill-[#060709]" />
              Most Popular · Best Value
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-3 py-1 rounded-full uppercase tracking-wider">
                  Tier 2 · Complete Growth Suite
                </span>
                <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> 3–5 Days
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
                2D Complete Business
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                The complete multi-page business system. Designed for established companies, clinics, agencies, and ventures looking to scale.
              </p>

              {/* Massive Psychological Anchor Block */}
              <div className="mb-6 p-5 rounded-2xl bg-[#060709] border border-[#D4AF37]/50 relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-bold">
                    Actual Market Value:
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-500/25 text-red-400 border border-red-500/50 uppercase">
                    74% Off Markdown
                  </span>
                </div>
                
                {/* BIG BOLD ANCHOR (SLASHED) */}
                <div className="text-3xl sm:text-4xl font-black text-slate-400 line-through decoration-red-500 decoration-[3.5px] tracking-tight my-1.5">
                  ₹38,000
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider mt-3 mb-1">
                  <span>↓ Direct Founder Price:</span>
                </div>

                <div className="flex items-baseline gap-2.5">
                  <span className="text-4xl sm:text-5xl font-black gold-gradient-text tracking-tight">₹9,999</span>
                  <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 rounded-md uppercase">
                    Save ₹28,000
                  </span>
                </div>

                <span className="text-[11px] font-mono text-[#D4AF37] font-semibold block mt-2">
                  ★ Everything included · No surprise agency fees
                </span>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Up to 5 Custom Pages:</strong> Home, Services, About, Portfolio, Contact & Booking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Advanced Google SEO & Metadata:</strong> Ranked for local keywords to beat your competitors.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Interactive Contact & Lead Form:</strong> Instant email and WhatsApp notifications on inquiry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Domain & Cloud Edge Setup:</strong> Free configuration of custom .com or .in domain.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Sub-Second Speed Guarantee:</strong> 99/100 Google PageSpeed score on Next.js.</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20want%20to%20order%20the%20%E2%82%B99,999%20Complete%20Business%20Website!"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn w-full py-4 px-4 rounded-xl text-[#060709] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/35 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#060709]" /> Order ₹9,999 Package
            </a>
          </div>

          {/* TIER 3: 3D CINEMATIC FLAGSHIP EXPERIENCE */}
          <div className="p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/40 bg-[#0e1118]/90 backdrop-blur-xl flex flex-col justify-between shadow-xl relative group hover:border-[#D4AF37]/70 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Tier 3 · 3D Flagship
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 10–14 Days
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
                3D Cinematic Experience
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                For luxury ventures, high-ticket agencies, and creators. A living 3D world that positions your brand as an untouchable market leader.
              </p>

              {/* Massive Psychological Anchor Block */}
              <div className="mb-6 p-5 rounded-2xl bg-[#060709] border border-[#D4AF37]/40 relative overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Actual Market Value:
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                    High-End Prestige
                  </span>
                </div>
                
                {/* BIG BOLD ANCHOR (SLASHED) */}
                <div className="text-3xl sm:text-4xl font-black text-slate-400 line-through decoration-red-500 decoration-[3.5px] tracking-tight my-1.5">
                  ₹1,50,000+
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider mt-3 mb-1">
                  <span>↓ Direct Work-Based Custom Rate:</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Aapke Kaam Ke Hisaab Se Set
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37] font-bold">
                    ★ Fair Dynamic Quote · Pay Only For What You Need
                  </span>
                </div>

                <span className="text-[11px] font-mono text-slate-400 block mt-2">
                  No inflated agency retainers · 100% customized to your scope
                </span>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Cinematic Video Environment:</strong> Photorealistic living background loop.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Spatial Storytelling Chapters:</strong> Dynamic scene transitions and interactive 3D hotspots.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Tailored to Your Scope:</strong> Pay only for the scenes, duration, and interactions you actually need.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>10x Higher Perceived Value:</strong> Clients never negotiate your rates when they see this.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Instagram Reels & Viral Prestige:</strong> Maximum social media shares and viral clout.</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20want%20to%20discuss%20a%20Custom%203D%20Cinematic%20Website%20Quote%20for%20my%20brand!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl border border-[#D4AF37] bg-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-[#060709] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Get Custom 3D Quote
            </a>
          </div>
        </div>

        {/* ======================================================== */}
        {/* RADICAL HONESTY & PRICING PSYCHOLOGY FAQ BOX             */}
        {/* ======================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/30 bg-[#0e1118]/80 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                ✦ Pricing Philosophy ✦
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                Why are our prices 70% lower than big agencies?
              </h3>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#060709] border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Transparent · No Hidden Fees
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-[#060709] border border-white/10">
              <div className="font-heading text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D4AF37]" /> Zero Agency Bloat
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Big agencies employ account managers, office staff, and sales reps — all paid out of your invoice. At VANSH STUDIOS, you work directly with senior creators.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060709] border border-white/10">
              <div className="font-heading text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" /> AI-Accelerated Delivery
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                By fusing Next.js engineering with Google Flow video generation, we compress 4 weeks of design labor into 3–5 days. All the cost savings go directly to you.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060709] border border-white/10">
              <div className="font-heading text-lg font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Milestone Risk Reversal
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                You review the live interactive prototype first. You only proceed when you are 100% happy with how your brand looks and performs.
              </p>
            </div>
          </div>

          {/* Interactive Pricing FAQs */}
          <div className="space-y-3">
            {[
              {
                q: "Ye actual prices hain ya koi hidden cost bhi hai?",
                a: "Ye complete final prices hain! 2D websites ke liye ₹4,999 aur ₹9,999 me sab kuch included hai (design, mobile speed, SEO, WhatsApp button). 3D websites ke liye hum aapke work scope aur video scenes ke hisaab se pehle hi 100% transparent quote fix karte hain — koi surprise bill nahi.",
              },
              {
                q: "3D Website ka price kaise decide hota hai?",
                a: "3D websites me har client ki requirement unique hoti hai: video duration (5s vs 15s), scenes ki sankhya, aur Three.js interactive features. Isliye hum aapke saath 10-minute WhatsApp discussion karke aapke budget aur kaam ke hisaab se sabse economical quote tailor karte hain.",
              },
              {
                q: "Mujhe website shuru karwane ke liye kya karna hoga?",
                a: "Bas niche diye WhatsApp button par click karke hume apna business name aur requirement batao. Hum 2 ghante ke andar aapke liye free consultation aur roadmap share karenge!",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#060709] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between text-sm font-bold text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp Action Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
              Need a custom package or have questions? Get an instant answer directly from the founder on WhatsApp.
            </div>
            <a
              href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20have%20a%20question%20about%20your%20website%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn px-6 py-3 rounded-xl text-[#060709] font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#D4AF37]/30 shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#060709]" /> Chat With Founder On WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
