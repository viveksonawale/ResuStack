"use client";

import { motion } from "framer-motion";
import { Upload, Star, CheckCircle2, Lock, FileText, AlertTriangle } from "lucide-react";
import { useAuth } from "./AuthContext";

// --- Sub-components ---

// 1. Scan Line Component
function ScanningLine() {
    return (
        <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent z-[5] shadow-[0_0_15px_rgba(249,115,22,0.6)]"
            animate={{
                top: ["0%", "100%", "0%"],
            }}
            transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
            }}
        >
            <div className="absolute inset-0 bg-orange-400/30 blur-sm" />
        </motion.div>
    );
}

// 2. Full A4 Resume Document
function ResumeDocument() {
    return (
        <div className="relative w-full aspect-[210/297] bg-white rounded-lg shadow-2xl overflow-hidden text-[#1a1a1a] p-[6%] sm:p-[8%] font-serif leading-relaxed select-none origin-top transition-transform duration-500 hover:scale-[1.02]">
            {/* Fine Paper Texture */}
            <div className="absolute inset-0 bg-neutral-50 mix-blend-multiply opacity-50 pointer-events-none" />

            {/* Header */}
            <div className="text-center border-b border-gray-300 pb-4 mb-4 relative z-10">
                <h1 className="text-[14px] sm:text-[16px] font-bold text-gray-900 tracking-wide uppercase">Alex Morgan</h1>
                <div className="text-[6px] sm:text-[7px] text-gray-600 mt-1 flex justify-center gap-2">
                    <span>alex.morgan@example.com</span>
                    <span>•</span>
                    <span>(555) 123-4567</span>
                    <span>•</span>
                    <span>San Francisco, CA</span>
                </div>
            </div>

            {/* Summary */}
            <div className="mb-4 relative z-10">
                <h2 className="text-[8px] sm:text-[9px] font-bold text-gray-800 uppercase border-b border-gray-200 mb-1">Professional Summary</h2>
                <div className="relative">
                    <p className="text-[6px] sm:text-[7px] text-gray-700 text-justify">
                        Results-driven Marketing Manager with 5+ years of experience in digital strategy and brand growth. Proven track record of increasing ROI by 30% through data-driven campaigns. Expert in
                        <span className="relative mx-0.5 inline-block">
                            <span className="bg-orange-100 text-orange-800 px-0.5 rounded border-b border-orange-300">SEO optimization</span>
                            {/* Annotation */}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2, duration: 0.5 }}
                                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-1 py-[1px] rounded-[2px] text-[4px] whitespace-nowrap z-20"
                            >
                                Keyword Match
                            </motion.span>
                        </span>
                        and cross-functional team leadership.
                    </p>
                </div>
            </div>

            {/* Experience */}
            <div className="mb-4 relative z-10">
                <h2 className="text-[8px] sm:text-[9px] font-bold text-gray-800 uppercase border-b border-gray-200 mb-2">Experience</h2>

                {/* Job 1 */}
                <div className="mb-3">
                    <div className="flex justify-between items-baseline mb-0.5">
                        <span className="text-[7px] sm:text-[8px] font-bold text-gray-900">Senior Marketing Specialist</span>
                        <span className="text-[6px] sm:text-[7px] text-gray-500 italic">2021 - Present</span>
                    </div>
                    <div className="text-[6px] sm:text-[7px] text-gray-700 italic mb-1">TechFlow Solutions</div>
                    <ul className="list-disc list-outside ml-3 space-y-1 text-[6px] sm:text-[7px] text-gray-700">
                        <li className="relative group">
                            <span className="relative">
                                Spearheaded a global campaign
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 3, duration: 0.8 }}
                                    className="absolute bottom-0 left-0 h-[1.5px] bg-orange-400/50"
                                />
                            </span>
                            t generated $2M in revenue Q3.
                        </li>
                        <li className="relative">
                            Managed a team of 5 designers to produce high-quality assets relative to...
                            <span className="relative inline-block ml-0.5 border-b-2 border-amber-300 bg-amber-50 px-0.5">
                                deliver items quickly
                                {/* Annotation */}
                                <motion.span
                                    initial={{ opacity: 0, y: 3 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 3.5, duration: 0.5 }}
                                    className="absolute -bottom-4 left-0 bg-amber-500 text-white px-1 py-[1px] rounded-[2px] text-[4px] whitespace-nowrap z-20 flex items-center gap-0.5"
                                >
                                    <AlertTriangle className="w-[4px] h-[4px]" /> Weak Action Verb
                                </motion.span>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Job 2 */}
                <div>
                    <div className="flex justify-between items-baseline mb-0.5">
                        <span className="text-[7px] sm:text-[8px] font-bold text-gray-900">Marketing Associate</span>
                        <span className="text-[6px] sm:text-[7px] text-gray-500 italic">2018 - 2021</span>
                    </div>
                    <div className="text-[6px] sm:text-[7px] text-gray-700 italic mb-1">Creative Pulse Agency</div>
                    <ul className="list-disc list-outside ml-3 space-y-1 text-[6px] sm:text-[7px] text-gray-700">
                        <li>
                            Assisted in development of social media strategies for...
                        </li>
                        <li className="relative border border-red-200 bg-red-50 p-0.5 rounded-sm">
                            Responsible for content creation and stuff like that.
                            {/* Annotation */}
                            <motion.div
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 4.5, duration: 0.5 }}
                                className="absolute top-0 -right-[4.5rem] bg-red-500 text-white px-1.5 py-0.5 rounded-[2px] text-[5px] whitespace-nowrap z-20 shadow-sm"
                            >
                                Avoid &quot;Responsible for&quot;
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Education */}
            <div className="mb-4 relative z-10">
                <h2 className="text-[8px] sm:text-[9px] font-bold text-gray-800 uppercase border-b border-gray-200 mb-1">Education</h2>
                <div className="flex justify-between items-baseline">
                    <span className="text-[7px] sm:text-[8px] font-bold text-gray-900">B.A. Communications</span>
                    <span className="text-[6px] sm:text-[7px] text-gray-500 italic">2018</span>
                </div>
                <div className="text-[6px] sm:text-[7px] text-gray-700">University of California, Berkeley</div>
            </div>

            <ScanningLine />
        </div>
    );
}

// 3. ATS Scan Visual Wrapper
function ATSScanVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none flex items-center justify-center p-4 sm:p-8">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

            <motion.div
                className="relative z-10 w-full max-w-[380px]"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            >
                <ResumeDocument />

                {/* ATS Indicators (Floating Cards) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-[10%] -left-4 sm:-left-12 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 p-3 rounded-lg shadow-xl flex items-center gap-3 max-w-[160px]"
                >
                    <div className="p-1.5 bg-orange-500/20 rounded-md">
                        <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-zinc-200">Keyword Match</div>
                        <div className="text-[9px] text-zinc-400">High Relevance</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-[20%] -right-4 sm:-right-8 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 p-3 rounded-lg shadow-xl flex items-center gap-3 max-w-[170px]"
                >
                    <div className="p-1.5 bg-orange-500/20 rounded-md">
                        <FileText className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-zinc-200">Formatting Check</div>
                        <div className="text-[9px] text-zinc-400">2 Issues Found</div>
                    </div>
                </motion.div>

                {/* Score Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4 min-w-[200px]"
                >
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <svg className="w-full h-full rotate-[-90deg]">
                            <circle cx="50%" cy="50%" r="20" stroke="#333" strokeWidth="4" fill="transparent" />
                            <motion.circle
                                cx="50%" cy="50%" r="20"
                                stroke="#f97316" strokeWidth="4" fill="transparent"
                                strokeDasharray="126"
                                initial={{ strokeDashoffset: 126 }}
                                whileInView={{ strokeDashoffset: 25 }} // ~80%
                                viewport={{ once: true }}
                                transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-sm font-bold text-white">82</span>
                    </div>
                    <div>
                        <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">ATS Compatibility</div>
                        <div className="text-orange-400 text-xs font-medium mt-0.5">Recruiter Ready</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}


// --- Main Layout ---

export default function ATSAnalysis() {
    const { openLogin } = useAuth();

    return (
        <section id="ats-analysis" className="relative pt-0 pb-8 bg-black overflow-hidden scroll-mt-20">
            {/* Background gradient effects matching the website theme */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(249,115,22,0.08),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. Centered Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                        How good is your resume?
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                        Upload your resume and get an instant ATS evaluation with clear scores, keyword insights, and actionable fixes recruiters actually care about.
                    </p>
                </div>

                {/* 2. Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* TEXT COLUMN (Desktop: Left, Mobile: Order 2) */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        {/* Upload Box */}
                        <div className="relative max-w-xl mx-auto lg:mx-0 mb-10">
                            <div
                                onClick={openLogin}
                                className="relative border-2 border-dashed border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 hover:border-orange-500/50 rounded-xl p-8 sm:p-12 cursor-pointer transition-all group text-center"
                            >
                                {/* Privacy Badge */}
                                <div className="absolute top-4 right-4 bg-zinc-800/80 border border-zinc-700/50 rounded-md px-3 py-1.5 flex items-center gap-1.5">
                                    <Lock className="w-3 h-3 text-zinc-400" />
                                    <span className="text-[11px] font-medium text-zinc-300">100% privacy</span>
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <div className="bg-orange-500 rounded-lg p-2.5">
                                        <Upload className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Main Text */}
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                    Drop your resume here or <span className="underline decoration-orange-500 underline-offset-4 decoration-2">choose a file</span>.
                                </h3>

                                {/* Subtext */}
                                <p className="text-sm text-zinc-500 font-medium">
                                    English resumes in PDF or DOCX only. Max 2MB file size.
                                </p>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-col items-center lg:items-start opacity-90 space-y-4">
                            <div className="text-base text-zinc-400 font-medium">
                                Trusted by over <span className="text-white font-bold">one million</span> professionals globally.
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-white">Excellent</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center rounded-[2px]">
                                                <Star className="w-4 h-4 text-white fill-current" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-400">
                                    <span>Rated 4.9 out of 5 based on 1000+ reviews on</span>
                                    <div className="flex items-center gap-1 font-bold text-white">
                                        <Star className="w-4 h-4 text-[#00b67a] fill-current" />
                                        <span>Trustpilot</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VISUAL COLUMN (Desktop: Right, Mobile: Order 1) */}
                    <div className="order-1 lg:order-2">
                        <ATSScanVisual />
                    </div>

                </div>
            </div>
        </section>
    );
}
