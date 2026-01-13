"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./AuthContext";

export default function Navigation() {
    const { openLogin } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "AI Resume Builder", href: "/#ai-resume-builder" },
        {
            name: "ATS Analysis",
            href: "/#ats-analysis",
            tooltip: "Check your resume against ATS systems"
        },
        { name: "Templates", href: "/#templates" },
        { name: "Pricing", href: "/#pricing" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Check if we are on the homepage
        if (pathname === "/") {
            e.preventDefault();
            // Extract the ID (remove '/#')
            const targetId = href.replace("/#", "");
            const element = document.getElementById(targetId);

            if (element) {
                // Close mobile menu first
                setMobileMenuOpen(false);

                // Wait for menu animation to complete before scrolling
                setTimeout(() => {
                    const navHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 300); // Match the animation duration
            } else {
                setMobileMenuOpen(false);
            }
        } else {
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={(e) => {
                            if (pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
                        <span className="text-2xl font-bold text-gradient">ResuStack</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-vercel-gray-300 hover:text-white transition-colors duration-200 text-base font-medium flex items-center gap-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                >
                                    {item.name}
                                </Link>
                                {item.tooltip && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none w-max z-50">
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-t border-l border-white/10 rotate-45" />
                                        <span className="text-[10px] sm:text-xs text-zinc-300 whitespace-nowrap font-medium relative z-10">
                                            {item.tooltip}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={openLogin}
                            className="relative px-6 py-2 bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white rounded-md text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-vercel-orange-500/50"
                        >
                            Get Started Free
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-vercel-gray-300 hover:text-vercel-orange-400 transition-colors"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="block text-vercel-gray-300 hover:text-vercel-orange-400 transition-colors text-sm font-medium py-2"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    openLogin();
                                }}
                                className="block w-full px-6 py-3 bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 text-white rounded-md text-sm font-semibold text-center"
                            >
                                Get Started Free
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
