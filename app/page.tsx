"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import AIResumeBuilder from "@/components/AIResumeBuilder";
import ATSAnalysis from "@/components/ATSAnalysis";
import Navigation from "@/components/Navigation";
import HowItWorks from "@/components/HowItWorks";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";

import ResumeCarousel from "@/components/ResumeCarousel";

import { AuthProvider, useAuth } from "@/components/AuthContext";
import LoginModal from "@/components/LoginModal";


export default function Home() {
  return (
    <AuthProvider>
      <HomeContent />
      <LoginModal />
    </AuthProvider>
  );
}

function HomeContent() {
  const { openLogin } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-vercel-gray-950 to-black">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full max-w-[100vw]">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-vercel-orange-500/30 to-vercel-amber-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-vercel-orange-500/10 to-vercel-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-vercel-amber-500/20 to-vercel-orange-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8"
            >
              <span className="block text-white mb-2">The All-in-One</span>
              <span className="relative inline-block">
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-vercel-orange-400 via-yellow-500 to-vercel-orange-400 animate-gradient bg-300%">
                  AI Resume Builder
                </span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-vercel-orange-400 via-yellow-500 to-vercel-orange-400 animate-gradient bg-300%"
                />
              </span>{" "}
              <span className="block text-white mt-4">You&apos;ll Ever Need</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-vercel-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto"
            >
              Build ATS-ready resumes that pass screening systems, with AI crafting compelling bullet points
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <button
                onClick={openLogin}
                className="relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white rounded-md text-lg font-semibold transition-all duration-200 shadow-2xl hover:shadow-vercel-orange-500/50 flex items-center justify-center gap-2 group"
              >
                Get Started Free
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-vercel-gray-400 mb-8"
            >
              {[
                "Easy to Use",
                "No credit card required",
                "Everything At One Place"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-green-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                  {index < 2 && <span className="hidden sm:inline text-vercel-gray-600">•</span>}
                </div>
              ))}
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16"
            >
              {[
                {
                  label: "AI Powered",
                  sublabel: "Smart Optimization",
                  icon: Lightbulb,
                  color: "text-vercel-orange-400",
                  bg: "bg-vercel-orange-400/10",
                  border: "border-vercel-orange-400/20",
                  gradient: "from-vercel-orange-500/10 to-vercel-amber-500/10"
                },
                {
                  label: "93%",
                  sublabel: "ATS Pass-Through",
                  icon: ShieldCheck,
                  color: "text-green-400",
                  bg: "bg-green-400/10",
                  border: "border-green-400/20",
                  gradient: "from-green-500/10 to-emerald-500/10"
                },
                {
                  label: "2x",
                  sublabel: "Interview Boost",
                  icon: TrendingUp,
                  color: "text-blue-400",
                  bg: "bg-blue-400/10",
                  border: "border-blue-400/20",
                  gradient: "from-blue-500/10 to-cyan-500/10"
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative group bg-vercel-gray-950 border border-white/5 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-white/10"
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.border} border flex items-center justify-center mb-4 text-vercel-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
                      <p className="text-vercel-gray-400 text-sm font-medium">{stat.sublabel}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* AI Resume Builder Section */}
      <AIResumeBuilder />

      {/* ATS Analysis Section */}
      <ATSAnalysis />

      {/* Company Logos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-vercel-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
              Build Resumes That Land Interviews At
            </h2>
            <p className="text-lg text-zinc-400">
              Create resumes optimized for roles at leading organizations
            </p>
          </div>

          <div className="relative overflow-hidden flex">
            <div className="flex animate-marquee">
              {[
                { src: "/uber-logo.png", alt: "Uber" },
                { src: "/google-logo.png", alt: "Google" },
                { src: "/spotify-logo.png", alt: "Spotify" },
                { src: "/microsoft-logo.png", alt: "Microsoft" },
                { src: "/amazon-logo.png", alt: "Amazon" },
                { src: "/apple-logo.png", alt: "Apple" },
                { src: "/meta-logo.png", alt: "Meta" },
                { src: "/ibm-logo.png", alt: "IBM" },
                { src: "/adobe-logo.png", alt: "Adobe" },
                { src: "/salesforce-logo.png", alt: "Salesforce" }
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center min-w-[120px] h-14 mx-4 flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    width={60}
                    height={60}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="flex animate-marquee">
              {[
                { src: "/uber-logo.png", alt: "Uber" },
                { src: "/google-logo.png", alt: "Google" },
                { src: "/spotify-logo.png", alt: "Spotify" },
                { src: "/microsoft-logo.png", alt: "Microsoft" },
                { src: "/amazon-logo.png", alt: "Amazon" },
                { src: "/apple-logo.png", alt: "Apple" },
                { src: "/meta-logo.png", alt: "Meta" },
                { src: "/ibm-logo.png", alt: "IBM" },
                { src: "/adobe-logo.png", alt: "Adobe" },
                { src: "/salesforce-logo.png", alt: "Salesforce" }
              ].map((logo, index) => (
                <div key={`dup-${index}`} className="flex items-center justify-center min-w-[120px] h-14 mx-4 flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    width={60}
                    height={60}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="flex animate-marquee">
              {[
                { src: "/uber-logo.png", alt: "Uber" },
                { src: "/google-logo.png", alt: "Google" },
                { src: "/spotify-logo.png", alt: "Spotify" },
                { src: "/microsoft-logo.png", alt: "Microsoft" },
                { src: "/amazon-logo.png", alt: "Amazon" },
                { src: "/apple-logo.png", alt: "Apple" },
                { src: "/meta-logo.png", alt: "Meta" },
                { src: "/ibm-logo.png", alt: "IBM" },
                { src: "/adobe-logo.png", alt: "Adobe" },
                { src: "/salesforce-logo.png", alt: "Salesforce" }
              ].map((logo, index) => (
                <div key={`dup2-${index}`} className="flex items-center justify-center min-w-[120px] h-14 mx-4 flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    width={60}
                    height={60}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 text-sm text-vercel-gray-400">
              {["ATS-optimized formats", "Industry-specific templates", "AI-powered optimization"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                  {index < 2 && <span className="mx-2">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-12 sm:pb-20 sm:pt-10 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-4">
              Professional Resume Templates
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
              ATS-optimized templates designed by industry professionals to help you land your dream job.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="mt-0">
            <ResumeCarousel />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-vercel-gray-950/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
              Start free and upgrade when you&apos;re ready to accelerate your job search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                period: "/forever",
                desc: "Build a great resume manually",
                features: [
                  { text: "Manual resume builder", included: true },
                  { text: "3 resumes with 1 Word download", included: true },
                  { text: "1 basic ATS-optimized template", included: true },
                  { text: "AI-powered content generation", included: false },
                  { text: "ATS keyword optimization", included: false },
                  { text: "Unlimited resumes & downloads", included: false }
                ],
                cta: "Create Free Resume",
                href: "/review",
                popular: false
              },
              {
                name: "Pro",
                price: "$15",
                period: "/month",
                desc: "Supercharge your resume with AI",
                features: [
                  { text: "Everything in Free, plus:", included: true },
                  { text: "AI bullet point generator", included: true },
                  { text: "AI summary & headline writer", included: true },
                  { text: "ATS keyword optimization & scoring", included: true },
                  { text: "Unlimited resumes & exports", included: true },
                  { text: "Full template library access", included: true },
                  { text: "Priority email support", included: true }
                ],
                cta: "Upgrade to Pro",
                href: "/dashboard",
                popular: false
              },
              {
                name: "Recruiting Plan",
                price: "$60",
                period: "/6 months",
                desc: "Perfect for your entire job search journey",
                features: [
                  { text: "Everything in Pro included", included: true },
                  { text: "AI bullet point generator", included: true },
                  { text: "ATS keyword optimization", included: true },
                  { text: "Unlimited resumes & exports", included: true },
                  { text: "Full template library access", included: true },
                  { text: "Priority email support", included: true }
                ],
                cta: "Get Recruiting Plan",
                href: "/dashboard",
                popular: true,
                badge: "SAVE 33%"
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-300 ${plan.popular
                  ? 'md:scale-105 md:-mt-4'
                  : 'hover:scale-102'
                  }`}
              >
                {/* Gradient glow effect */}
                <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${plan.popular
                  ? 'bg-gradient-to-r from-vercel-orange-500 to-vercel-amber-500 blur-sm'
                  : 'bg-gradient-to-r from-zinc-700 to-zinc-600 blur-sm'
                  }`} />

                <div className={`relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 h-full flex flex-col ${plan.popular
                  ? 'border-vercel-orange-500/50 shadow-2xl shadow-vercel-orange-500/20'
                  : 'border-white/10 hover:border-white/20'
                  }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {plan.badge && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg animate-pulse">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center pb-6 border-b border-white/10">
                    <h3 className="text-2xl font-bold mb-3 text-white">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">{plan.price}</span>
                      <span className="text-zinc-400 text-lg">{plan.period}</span>
                    </div>
                    <p className="text-zinc-400 text-sm">{plan.desc}</p>
                  </div>

                  <ul className="space-y-4 my-8 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.included ? 'text-emerald-400' : 'text-zinc-600'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          {feature.included ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          )}
                        </svg>
                        <span className={`text-sm leading-relaxed ${feature.included ? 'text-zinc-200' : 'text-zinc-600 line-through'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={openLogin}
                    className={`w-full py-4 rounded-xl text-sm font-bold text-center transition-all duration-300 transform hover:scale-105 active:scale-95 ${plan.popular
                      ? 'bg-gradient-to-r from-vercel-orange-500 to-vercel-amber-500 text-white shadow-lg shadow-vercel-orange-500/30 hover:shadow-vercel-orange-500/50'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                      }`}
                    aria-label={plan.cta}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Brand Column */}
              <div className="md:col-span-1">
                <Link href="/" className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gradient">ResuStack</span>
                </Link>
                <p className="text-sm text-zinc-400 mb-4">
                  The all-in-one AI resume builder that helps you land your dream job.
                </p>
                <div className="flex space-x-4">
                  {[
                    { name: "YouTube", href: "https://youtube.com/@swerikcodes", icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
                    { name: "Instagram", href: "https://instagram.com/swerikcodes", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                    { name: "TikTok", href: "https://tiktok.com/@swerikcodes", icon: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-vercel-orange-400 transition-colors"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Product Column */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Product</h3>
                <ul className="space-y-3">
                  {[
                    { name: "AI Resume Builder", href: "#ai-resume-builder" },
                    { name: "ATS Analysis", href: "#ats-analysis" },
                    { name: "Templates", href: "#templates" },
                    { name: "Pricing", href: "#pricing" }
                  ].map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Company</h3>
                <ul className="space-y-3">
                  {[
                    { name: "About", href: "#" },
                    { name: "Blog", href: "#" },
                    { name: "Careers", href: "#" },
                    { name: "Contact", href: "#" }
                  ].map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Privacy Policy", href: "#" },
                    { name: "Terms of Service", href: "#" },
                    { name: "Cookie Policy", href: "#" },
                    { name: "GDPR", href: "#" }
                  ].map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-zinc-500">
                  © {new Date().getFullYear()} ResuStack. All rights reserved.
                </p>
                <p className="text-sm text-zinc-500">
                  Built with ❤️ by developers, for job seekers
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
