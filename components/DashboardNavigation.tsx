"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Plus, Menu, ChevronDown, LogOut, Sparkles, X, FileText, Mail, ArrowRight, Brain, BookOpen, LayoutGrid } from "lucide-react";
import TemplateModal from "@/components/dashboard/TemplateModal";

export default function DashboardNavigation() {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 h-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo & Links */}
                    <div className="flex items-center gap-8">
                        <Link href="/dashboard" className="flex items-center gap-2 group">
                            <span className="text-2xl font-bold bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 bg-clip-text text-transparent tracking-tight group-hover:from-vercel-orange-300 group-hover:to-vercel-orange-400 transition-all">ResuStack</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-2">
                            <Link
                                href="/dashboard"
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all active:scale-95 ${isActive('/dashboard')
                                    ? 'bg-vercel-orange-500/10 text-vercel-orange-500 border border-vercel-orange-500/20 shadow-[0_0_15px_rgba(255,153,0,0.1)]'
                                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/dashboard/resumes"
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all active:scale-95 ${isActive('/dashboard/resumes') ? 'bg-vercel-orange-500/10 text-vercel-orange-500 border border-vercel-orange-500/20 shadow-[0_0_15px_rgba(255,153,0,0.1)]' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Resumes
                            </Link>
                            <Link
                                href="/dashboard/cover-letters"
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all active:scale-95 ${isActive('/dashboard/cover-letters') ? 'bg-vercel-orange-500/10 text-vercel-orange-500 border border-vercel-orange-500/20 shadow-[0_0_15px_rgba(255,153,0,0.1)]' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                Cover Letters
                            </Link>
                            <Link
                                href="/dashboard/review"
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all active:scale-95 ${isActive('/dashboard/review') ? 'bg-vercel-orange-500/10 text-vercel-orange-500 border border-vercel-orange-500/20 shadow-[0_0_15px_rgba(255,153,0,0.1)]' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                AI Review
                            </Link>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsCreateOpen(!isCreateOpen)}
                                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white text-sm font-bold shadow-2xl hover:shadow-vercel-orange-500/50 transition-all hover:scale-105"
                            >
                                <Plus className="w-4 h-4" />
                                <span className="hidden sm:inline">Create New</span>
                            </button>

                            {/* Create Modal Popup */}
                            {isCreateOpen && (
                                <>
                                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsCreateOpen(false)} />
                                    <div className="absolute top-12 right-0 w-[400px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl shadow-black z-50 p-6 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-lg font-bold text-white">Create New</h3>
                                            <button onClick={() => setIsCreateOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <button
                                                onClick={() => {
                                                    setIsCreateOpen(false);
                                                    setIsTemplateModalOpen(true);
                                                }}
                                                className="w-full flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all group text-left"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vercel-orange-500 to-vercel-amber-500 flex items-center justify-center text-white shadow-lg shadow-vercel-orange-500/20 group-hover:scale-110 transition-transform">
                                                    <FileText className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-white">New Resume</span>
                                                        <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
                                                    </div>
                                                    <p className="text-xs text-zinc-400">Create an ATS-optimized resume with AI</p>
                                                </div>
                                            </button>

                                            <Link href="/dashboard/cover-letters" onClick={() => setIsCreateOpen(false)} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all group">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                                    <Mail className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-white">New Cover Letter</span>
                                                        <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
                                                    </div>
                                                    <p className="text-xs text-zinc-400">Generate a tailored cover letter with AI</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="hidden sm:flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-white/10 hover:bg-white/5 transition-colors focus:bg-white/5"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white border border-white/20 uppercase">
                                    JD
                                </div>
                                <span className="text-sm font-medium text-zinc-300 pr-2">John Doe</span>
                                <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl shadow-black overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100 origin-top-right">
                                    <div className="px-4 py-3 border-b border-white/5">
                                        <p className="text-sm font-medium text-white">John Doe</p>
                                        <p className="text-xs text-zinc-500 truncate">john.doe@example.com</p>
                                    </div>

                                    <div className="p-1">
                                        <button className="w-full text-left px-3 py-2 text-sm text-vercel-orange-500 hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2">
                                            <Sparkles className="w-4 h-4" />
                                            Upgrade to Pro
                                        </button>
                                    </div>

                                    <div className="h-px bg-white/5 my-1" />

                                    <div className="p-1">
                                        <button className="w-full text-left px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2">
                                            <LogOut className="w-4 h-4" />
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-zinc-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[60] bg-[#0A0A0A] animate-in slide-in-from-right duration-200 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#FF9900] flex items-center justify-center font-bold text-white text-xl">
                                R
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 bg-clip-text text-transparent tracking-tight">ResuStack</span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-zinc-400 hover:text-white p-2"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Profile Section */}
                    <div className="p-6 border-b border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white border-2 border-white/10 uppercase shadow-lg">
                                JD
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white">John Doe</span>
                                <span className="text-sm text-zinc-500">john.doe@example.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                        <Link
                            href="/dashboard"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-medium ${isActive('/dashboard')
                                ? 'bg-vercel-orange-500/10 text-vercel-orange-500'
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <LayoutGrid className="w-5 h-5" />
                            Dashboard
                        </Link>
                        <Link
                            href="/dashboard/resumes"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-medium ${isActive('/dashboard/resumes')
                                ? 'bg-vercel-orange-500/10 text-vercel-orange-500'
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <FileText className="w-5 h-5" />
                            Resumes
                        </Link>
                        <Link
                            href="/dashboard/cover-letters"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-medium ${isActive('/dashboard/cover-letters')
                                ? 'bg-vercel-orange-500/10 text-vercel-orange-500'
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <BookOpen className="w-5 h-5" />
                            Cover Letters
                        </Link>
                        <Link
                            href="/dashboard/review"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all font-medium ${isActive('/dashboard/review')
                                ? 'bg-vercel-orange-500/10 text-vercel-orange-500'
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Brain className="w-5 h-5" />
                            AI Review
                        </Link>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 border-t border-white/5 space-y-2 mb-safe">
                        <button className="w-full flex items-center gap-4 px-4 py-3.5 text-vercel-orange-500 font-medium hover:bg-vercel-orange-500/5 rounded-xl transition-colors">
                            <Sparkles className="w-5 h-5" />
                            Upgrade to Pro
                        </button>
                        <button className="w-full flex items-center gap-4 px-4 py-3.5 text-zinc-400 font-medium hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                            <LogOut className="w-5 h-5" />
                            Sign out
                        </button>
                    </div>
                </div>
            )}

            <TemplateModal isOpen={isTemplateModalOpen} onClose={() => setIsTemplateModalOpen(false)} />
        </nav>
    );
}
