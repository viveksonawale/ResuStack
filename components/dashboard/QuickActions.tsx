"use client";

import { FileText, BookOpen, Search } from "lucide-react";

export default function QuickActions() {
    return (
        <div className="grid grid-cols-1 gap-4 mb-8">
            {/* Create First Resume - Primary Action */}
            <button className="group relative w-full flex items-center justify-between p-4 rounded-md bg-[#0A0A0A] border border-white/10 hover:border-vercel-orange-500/50 transition-all overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-vercel-orange-500/10 to-vercel-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-vercel-orange-500/10 flex items-center justify-center text-vercel-orange-500">
                        <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-white font-medium">Create first resume</span>
                </div>

                <span className="relative z-10 px-4 py-1.5 rounded-md bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white text-xs font-bold transition-all shadow-lg hover:shadow-vercel-orange-500/50">
                    Create
                </span>
            </button>

            {/* Secondary Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center gap-4 p-4 rounded-xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all text-left">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-zinc-400 font-medium group-hover:text-zinc-300">Create cover letter</span>
                </button>

                <button className="flex items-center gap-4 p-4 rounded-xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all text-left">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500">
                        <Search className="w-5 h-5" />
                    </div>
                    <span className="text-zinc-400 font-medium group-hover:text-zinc-300">Get AI review</span>
                </button>
            </div>
        </div>
    );
}
