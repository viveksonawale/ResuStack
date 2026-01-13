"use client";

import { Search, Plus, BookOpen } from "lucide-react";

export default function CoverLettersPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-white">Cover Letters</h1>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white text-sm font-bold shadow-lg hover:shadow-vercel-orange-500/50 transition-all">
                    <Plus className="w-4 h-4" />
                    Create Cover Letter
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search cover letters..."
                        className="w-full pl-10 pr-4 py-2 bg-[#0A0A0A] border border-white/10 rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-vercel-orange-500/50 transition-colors"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-2 bg-gradient-to-r from-vercel-orange-500/10 to-vercel-amber-500/10 text-vercel-orange-500 border border-vercel-orange-500/20 rounded-lg text-xs font-medium">Newest</button>
                    <button className="px-3 py-2 bg-[#0A0A0A] hover:bg-white/5 text-zinc-400 hover:text-white border border-white/5 rounded-lg text-xs font-medium transition-colors">Oldest</button>
                    <button className="px-3 py-2 bg-[#0A0A0A] hover:bg-white/5 text-zinc-400 hover:text-white border border-white/5 rounded-lg text-xs font-medium transition-colors">A-Z</button>
                </div>
            </div>

            {/* Empty State */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-zinc-600" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">No cover letters yet</h3>
                <p className="text-sm text-zinc-500 mb-8 max-w-sm">
                    Create your first AI-generated cover letter to get started.
                </p>

                <button className="flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white text-sm font-bold shadow-2xl hover:shadow-vercel-orange-500/50 transition-all hover:scale-105">
                    <Plus className="w-4 h-4" />
                    Create Cover Letter
                </button>
            </div>
        </div>
    );
}
