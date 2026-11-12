"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Star,
  ShieldCheck,
  Zap,
  Globe,
  Sparkles,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

export default function TwoDBusinessPrototype() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "Retail / Shop",
    package: "Growth Plan",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Floating Demo Bar linking back to VANSH STUDIOS */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs">
        <Link
          href="/#explore"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-mono font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit to VANSH STUDIOS</span>
        </Link>
        <div className="hidden sm:flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Viewing Prototype: <strong>2D Modern Business Tier (Low Cost / Fast Delivery)</strong></span>
        </div>
        <a
          href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20like%20the%202D%20Business%20Website%20Prototype%20and%20want%20to%20order%20one."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3 py-1 rounded font-bold uppercase tracking-wider text-[11px] transition-colors"
        >
          Order This Tier
        </a>
      </div>

      {/* Main Website Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-9 z-40 px-6 md:px-12 py-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-sm tracking-tighter">
            N
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 block leading-none">
              NEXUS ADVISORY
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
              Business Growth & Strategy
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-emerald-600 transition-colors">Client Reviews</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919999999999"
            className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            +91 98765 43210
          </a>
          <a
            href="#contact"
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-colors"
          >
            Book Free Audit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-16 pb-20 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Delivered in 3 to 5 Days · 100% Mobile Optimized
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] mb-6">
            Websites That Drive <br />
            <span className="text-emerald-600 underline decoration-emerald-200 decoration-4">
              Real Local Customers
            </span>{" "}
            To Your Business.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            No confusing buzzwords, no broken mobile layouts. We build fast, clean, and reliable websites with WhatsApp lead capture and Google Maps SEO ready out of the box.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all text-center flex items-center justify-center gap-2"
            >
              Start Your Website <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all text-center"
            >
              See Pricing Packages
            </a>
          </div>

          {/* Trust Metrics Bar */}
          <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full text-left">
            <div>
              <div className="text-2xl font-black text-slate-900">1.2 sec</div>
              <div className="text-xs text-slate-500">Average Mobile Load Time</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">500+</div>
              <div className="text-xs text-slate-500">Happy Business Clients</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">99.8%</div>
              <div className="text-xs text-slate-500">Guaranteed On-Time Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">4.9 / 5.0</div>
              <div className="text-xs text-slate-500">Google Review Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 px-6 md:px-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Everything Your Business Needs To Win Online
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-6 h-6 text-emerald-600" />,
                title: "Google SEO & Local Maps Ready",
                desc: "Configured with semantic schema so nearby customers looking for your services find you on Google Search and Maps.",
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
                title: "1-Click WhatsApp Direct Leads",
                desc: "Floating WhatsApp button and lead capture forms routed straight to your mobile phone for instant sales conversions.",
              },
              {
                icon: <Zap className="w-6 h-6 text-emerald-600" />,
                title: "Ultra-Fast Cloud Hosting",
                desc: "Powered by edge CDN architecture. Your pages load instantly without lagging or crashing on slow mobile networks.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
                title: "SSL Security & Lifetime Domain Setup",
                desc: "Full HTTPS encryption, free domain linkage, and professional email configuration for your venture.",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
                title: "Clear Call-to-Actions (CTAs)",
                desc: "Strategically placed booking, quote, and contact buttons that turn curious casual visitors into paying customers.",
              },
              {
                icon: <Clock className="w-6 h-6 text-emerald-600" />,
                title: "Turnaround In Just 3 to 5 Days",
                desc: "We don't make you wait months. Your ready-to-launch website is handed over fully tested within one workweek.",
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-xs">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Affordable Packages. No Hidden Charges.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Starter Plan */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase mb-2 inline-block">
                Introductory Founder Rate
              </span>
              <h3 className="font-bold text-xl text-slate-900 mb-1">Starter Business</h3>
              <p className="text-xs text-slate-500 mb-3">Single-page landing page for local services & shops</p>
              
              <div className="mb-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-0.5">
                  Actual Market Value:
                </span>
                <div className="text-2xl font-black text-slate-400 line-through decoration-red-500 decoration-[3px] mb-2">
                  ₹18,000
                </div>
                <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold block mb-0.5">
                  ↓ Direct Founder Price:
                </span>
                <div className="text-3xl font-black text-slate-900">
                  ₹4,999 <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">Save 72%</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> High-converting 1-page design</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 1-Click WhatsApp integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Mobile & Tablet responsive</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Delivered in 48–72 Hours</li>
              </ul>
            </div>
            <a href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20want%20to%20order%20the%20%E2%82%B94,999%20Starter%20Tier." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl border border-emerald-500 text-emerald-700 text-center font-bold text-xs uppercase hover:bg-emerald-50 transition-colors">
              Claim ₹4,999 Offer
            </a>
          </div>

          {/* Growth Plan (Popular) */}
          <div className="p-8 rounded-2xl border-2 border-emerald-500 bg-white flex flex-col justify-between shadow-xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
              Most Popular Choice · Best Value
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase mb-2 inline-block">
                Complete Business Suite
              </span>
              <h3 className="font-bold text-xl text-slate-900 mb-1">Growth Business Tier</h3>
              <p className="text-xs text-slate-500 mb-3">Full 5-page corporate website for growing companies</p>

              <div className="mb-4 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-0.5">
                  Actual Market Value:
                </span>
                <div className="text-2xl font-black text-slate-400 line-through decoration-red-500 decoration-[3px] mb-2">
                  ₹38,000
                </div>
                <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold block mb-0.5">
                  ↓ Direct Founder Price:
                </span>
                <div className="text-3xl font-black text-emerald-600">
                  ₹9,999 <span className="text-xs font-bold text-emerald-700 bg-emerald-200 px-2 py-0.5 rounded">Save 74%</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 5 Dedicated Pages (Home, About, Services, Reviews, Contact)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Google Search & Maps Local SEO setup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Lead capture form with instant alerts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Delivered in 3–5 Days</li>
              </ul>
            </div>
            <a href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20want%20to%20order%20the%20%E2%82%B99,999%20Growth%20Tier." target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-center font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all">
              Claim ₹9,999 Package
            </a>
          </div>

          {/* 3D / Custom Plan */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase mb-2 inline-block">
                3D Spatial & Custom Work
              </span>
              <h3 className="font-bold text-xl text-slate-900 mb-1">3D / Custom Flagship</h3>
              <p className="text-xs text-slate-500 mb-3">Living cinematic video storytelling or custom web portals</p>

              <div className="mb-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-0.5">
                  Actual Market Value:
                </span>
                <div className="text-2xl font-black text-slate-400 line-through decoration-red-500 decoration-[3px] mb-2">
                  ₹1,50,000+
                </div>
                <span className="text-[10px] font-mono text-amber-700 uppercase font-bold block mb-0.5">
                  ↓ Direct Work-Based Custom Rate:
                </span>
                <div className="text-2xl font-black text-slate-900">
                  Custom Fair Quote
                </div>
                <span className="text-[10px] text-slate-500 block mt-0.5">Aapke Kaam Ke Hisaab Se Set</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-600 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Continuous Cinematic Video Loop</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Spatial Chapter storytelling</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 10x Higher perceived client prestige</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Tailored to your vision</li>
              </ul>
            </div>
            <a href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20want%20to%20discuss%20a%20Custom%203D%20Website%20Quote." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl border border-slate-300 text-slate-800 text-center font-bold text-xs uppercase hover:bg-slate-50 transition-colors">
              Get Custom 3D Quote
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      <section id="contact" className="bg-slate-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              Start Your Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get Your Business Online In 3 Days
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Fill out this quick form or send us a WhatsApp message to book your slot.
            </p>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Inquiry Submitted!</h3>
                <p className="text-slate-300 text-sm">
                  Our team will contact you within 2 hours with a live quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                      Your Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                      Business Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dental Clinic, Restaurant, Coaching"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                      Preferred Plan
                    </label>
                    <select
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Starter Plan (₹8,999)">Starter Plan (₹8,999)</option>
                      <option value="Growth Plan (₹16,999)">Growth Plan (₹16,999)</option>
                      <option value="Custom Enterprise (₹29,999+)">Custom Enterprise (₹29,999+)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/25"
                >
                  Send Inquiry Now
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <span>Have immediate questions? Talk to our founder directly.</span>
              <a
                href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20am%20interested%20in%20the%202D%20Business%20Website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageCircle className="w-4 h-4" /> Chat On WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-6 text-center text-xs border-t border-slate-800">
        <p>Demonstration 2D Prototype · Built by VANSH STUDIOS</p>
      </footer>
    </div>
  );
}
