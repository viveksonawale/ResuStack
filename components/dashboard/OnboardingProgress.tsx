"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function OnboardingProgress() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="mb-8 bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-sm font-bold text-white mb-1">Complete Your Profile</h3>
                    <p className="text-xs text-zinc-500">0% complete</p>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-zinc-500 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            <div className="w-full h-1 bg-zinc-800 rounded-full mb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 rounded-full" />
            </div>

            <div className="space-y-2">
                {/* Active Step */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/10 group cursor-pointer hover:border-vercel-orange-500/50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-vercel-orange-500/10 flex items-center justify-center text-vercel-orange-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-white">Create first resume</span>
                    </div>
                    <button className="px-3 py-1 rounded-md bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white text-xs font-bold transition-all shadow-md hover:shadow-vercel-orange-500/20">
                        Create
                    </button>
                </div>

                {/* Inactive Steps */}
                <div className="flex items-center p-3 rounded-lg hover:bg-white/[0.02] cursor-not-allowed opacity-50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-zinc-400">Create cover letter</span>
                    </div>
                </div>

                <div className="flex items-center p-3 rounded-lg hover:bg-white/[0.02] cursor-not-allowed opacity-50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-zinc-400">Get AI review</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
