"use client";

import { motion } from "framer-motion";
import { ScanSearch, FileCheck, BarChart3, Check, MousePointer2, Upload } from "lucide-react";
import { useAuth } from "./AuthContext";

const features = [
    {
        icon: ScanSearch,
        color: "emerald",
        title: "Keyword Optimization",
        description: "Our AI scans job descriptions to identify missing keywords and phrases that ATS algorithms prioritize.",
        stats: "98% Match Rate",
        visual: (
            <div className="space-y-2 font-mono text-[10px] text-zinc-400">
                <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/5">
                    <span>Required: "React.js"</span>
                    <Check className="w-3 h-3 text-emerald-500" />
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/5">
                    <span>Required: "TypeScript"</span>
                    <Check className="w-3 h-3 text-emerald-500" />
                </div>
                <div className="flex justify-between items-center p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
                    <span className="text-emerald-400">Found: "System Design"</span>
                    <span className="text-emerald-500 text-[9px] px-1 py-0.5 bg-emerald-500/20 rounded">+15 pts</span>
                </div>
            </div>
        )
    },
    {
        icon: FileCheck,
        color: "orange",
        title: "Smart Formatting Check",
        description: "Ensure your resume's structure is perfectly readable by machine parsers without losing human appeal.",
        stats: "Parser Friendly",
        visual: (
            <div className="relative h-20 bg-zinc-900 rounded border border-zinc-800 p-3 overflow-hidden">
                <div className="w-1/3 h-1.5 bg-zinc-700 rounded mb-2" />
                <div className="w-2/3 h-1.5 bg-zinc-800 rounded mb-1" />
                <div className="w-1/2 h-1.5 bg-zinc-800 rounded mb-3" />

                <div className="absolute top-2 right-2">
                    <div className="w-16 h-16 bg-gradient-to-tr from-vercel-orange-500/20 to-transparent blur-xl rounded-full" />
                </div>

                <motion.div
                    animate={{ y: [0, 40, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-vercel-orange-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                />
            </div>
        )
    },
    {
        icon: BarChart3,
        color: "blue",
        title: "Scoring & Benchmarks",
        description: "See how you stack up against other candidates applying for similar roles in your industry.",
        stats: "Top 10% Candidate",
        visual: (
            <div className="flex items-end justify-between h-20 px-2 pb-2">
                <div className="w-4 h-8 bg-zinc-800 rounded-t" />
                <div className="w-4 h-12 bg-zinc-800 rounded-t" />
                <div className="w-4 h-10 bg-zinc-800 rounded-t" />
                <div className="relative w-4 h-16 bg-blue-500 rounded-t shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-blue-400">You</div>
                </div>
                <div className="w-4 h-14 bg-zinc-800 rounded-t" />
            </div>
        )
    }
];

export default function ATSAnalysis() {
    const { openLogin } = useAuth();
    return (
        <section id="ats-analysis" className="relative py-24 bg-black overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-vercel-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vercel-cyan-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
                            Deep-Dive ATS Analysis
                        </h2>
                        <p className="text-lg text-zinc-400">
                            Go beyond a simple score. Our advanced algorithms deconstruct your resume layer by layer to ensure maximum compatibility with Applicant Tracking Systems.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-zinc-950 rounded-2xl m-[1px]" />

                            <div className="relative h-full bg-zinc-900/50 backdrop-blur-xl p-6 rounded-2xl overflow-hidden">
                                {/* Glow Effect on Hover */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${feature.color}-500/20 blur-3xl group-hover:bg-${feature.color}-500/30 transition-colors duration-500`} />

                                <div className="flex flex-col h-full">
                                    <div className="mb-6 flex justify-between items-start">
                                        <div className={`p-3 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-${feature.color}-500/50 transition-colors duration-300`}>
                                            <feature.icon className={`w-6 h-6 text-${feature.color}-400 group-hover:text-${feature.color}-300`} />
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full bg-${feature.color}-500/10 text-${feature.color}-400 border border-${feature.color}-500/20`}>
                                            {feature.stats}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        {feature.visual}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <button onClick={openLogin} className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vercel-orange-500 to-vercel-amber-500 hover:from-vercel-orange-600 hover:to-vercel-amber-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-vercel-orange-500/50 group">
                        <Upload className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                        Upload Resume
                    </button>
                </div>
            </div>
        </section>
    );
}
