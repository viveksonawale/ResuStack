"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import AIResumeBuilder from "@/components/AIResumeBuilder";
import ATSAnalysis from "@/components/ATSAnalysis";
import Navigation from "@/components/Navigation";
import HowItWorks from "@/components/HowItWorks";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import { COMPANY_LOGOS } from "@/components/CompanyLogos";

import { AuthProvider, useAuth } from "@/components/AuthContext";
import LoginModal from "@/components/LoginModal";

// Animation wrapper component
function AnimateOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

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
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-vercel-orange-500/30 to-vercel-amber-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-vercel-orange-500/10 to-vercel-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-vercel-amber-500/20 to-vercel-orange-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8">
                <span className="block text-white mb-2">The All-in-One</span>
                <span className="relative inline-block">
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-vercel-orange-400 via-yellow-500 to-vercel-orange-400 animate-gradient bg-300%">
                    AI Resume Builder
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-vercel-orange-400 via-yellow-500 to-vercel-orange-400 animate-gradient bg-300%"></span>
                </span>{" "}
                <span className="block text-white mt-4">You'll Ever Need</span>
              </h1>
            </AnimateOnScroll>

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

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center space-x-12"
            >
              {COMPANY_LOGOS.map((company, index) => (
                <div key={index} className="flex items-center justify-center min-w-[120px] h-16 flex-shrink-0 group">
                  <svg
                    viewBox={company.viewBox}
                    className="h-8 w-auto fill-current text-vercel-gray-600 group-hover:text-white transition-colors duration-300"
                  >
                    <title>{company.name}</title>
                    <path d={company.path} />
                  </svg>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {COMPANY_LOGOS.map((company, index) => (
                <div key={`dup-${index}`} className="flex items-center justify-center min-w-[120px] h-16 flex-shrink-0 group">
                  <svg
                    viewBox={company.viewBox}
                    className="h-8 w-auto fill-current text-vercel-gray-600 group-hover:text-white transition-colors duration-300"
                  >
                    <title>{company.name}</title>
                    <path d={company.path} />
                  </svg>
                </div>
              ))}
            </motion.div>
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
      <section id="templates" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
                Professional Resume Templates
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
                ATS-optimized templates designed by industry professionals to help you land your dream job.
              </p>
            </div>

            <div className="glass-strong rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { title: "Industry Tested", icon: "✓", desc: "Every template is designed by industry professionals to ensure maximum impact" },
                  { title: "AI-Powered Bullets", icon: "⚡", desc: "Generate compelling, metrics-driven bullets trained specifically for what recruiters look for" },
                  { title: "Instant Download", icon: "⬇", desc: "Export your ATS friendly resume as PDF with one click so you actually get hired" }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-vercel-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-sm text-vercel-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={openLogin}
                  className="inline-block w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white rounded-md text-sm font-semibold transition-all duration-200"
                >
                  Start Building Your Resume
                </button>
                <p className="text-sm text-vercel-gray-400 mt-4">
                  All templates are ATS-friendly and fully customizable
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-vercel-gray-950/50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
                Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
                Start free and upgrade when you're ready to accelerate your job search
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
                <div className={`relative glass-strong rounded-xl p-6 ${plan.popular ? 'ring-2 ring-vercel-orange-500 scale-100 sm:scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {plan.badge && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-gradient-to-r from-vercel-orange-500 to-vercel-amber-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center pb-8 border-b border-white/5">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-vercel-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-vercel-gray-300">{plan.desc}</p>
                  </div>

                  <ul className="space-y-3 my-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 ${feature.included ? 'text-green-400' : 'text-red-400'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {feature.included ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          )}
                        </svg>
                        <span className={`text-sm ${feature.included ? 'text-white' : 'text-vercel-gray-500 line-through'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={openLogin}
                    className={`block w-full px-6 py-3 rounded-md text-sm font-semibold text-center transition-all duration-200 ${plan.popular
                      ? 'bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white'
                      : 'glass hover:glass-strong text-white border border-white/5'
                      }`}
                  >
                    {plan.cta}
                  </button>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-strong border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
                  Your career is your most valuable asset.
                </h2>
                <p className="text-lg text-zinc-400 mb-8">Start building it today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <button
                    onClick={openLogin}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white rounded-md text-sm font-semibold transition-all duration-200 shadow-lg text-center"
                  >
                    Create Your Resume Now
                  </button>
                  <a
                    href="/dashboard"
                    className="px-6 py-3 glass hover:glass-strong text-white rounded-md text-sm font-semibold border border-white/5 transition-all duration-200"
                  >
                    View Dashboard
                  </a>
                </div>
              </div>

            <div className="border-t border-white/5 pt-12">
              <div className="text-center">
                <p className="text-vercel-gray-300 mb-6">
                  Built by a software engineer who understands the job search struggle.
                </p>
                <p className="text-sm text-vercel-gray-400 mb-6">Follow the journey on social media!</p>
                <div className="flex justify-center space-x-6 mb-8">
                  {[
                    { name: "YouTube", href: "https://youtube.com/@swerikcodes" },
                    { name: "Instagram", href: "https://instagram.com/swerikcodes" },
                    { name: "TikTok", href: "https://tiktok.com/@swerikcodes" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-vercel-gray-400 hover:text-vercel-orange-400 transition-colors"
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="w-6 h-6 bg-vercel-gray-700 rounded-full" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-vercel-gray-500">
                  © 2024 ResuStack. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
