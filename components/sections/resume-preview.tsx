"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Wand2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useModal } from "@/components/providers/modal-provider";

// Resume Template 1 - Classic Professional (Serif, Clean)
const ResumeTemplate1 = () => (
    <div className="absolute inset-0 bg-white p-8 text-black font-serif leading-relaxed overflow-hidden">
        {/* Resume Header */}
        <div className="text-center mb-5">
            <h1 className="text-2xl font-bold mb-2 uppercase tracking-wide border-b-2 border-black pb-2">James Carter</h1>
            <div className="text-[9px] text-gray-800 flex flex-wrap justify-center gap-x-3 font-medium">
                <span>j.carter@finance-mail.com</span>
                <span>•</span>
                <span>(212) 555-0199</span>
                <span>•</span>
                <span>New York, NY</span>
                <span>•</span>
                <span className="underline">linkedin.com/in/jcarter-fin</span>
            </div>
        </div>

        {/* Experience */}
        <div className="mb-4">
            <h2 className="text-[10px] font-bold mb-1.5 text-black uppercase tracking-wider bg-gray-100 px-1 py-0.5">Professional Experience</h2>

            <div className="mb-3">
                <div className="flex justify-between items-baseline mb-0.5 text-[9px]">
                    <span className="font-bold">Senior Financial Analyst</span>
                    <span className="font-bold">2021 – Present</span>
                </div>
                <div className="flex justify-between items-baseline mb-1 text-[9px]">
                    <span className="italic">Goldman Sachs</span>
                    <span className="italic">New York, NY</span>
                </div>
                <ul className="list-disc list-outside ml-3 text-[8.5px] text-gray-900 leading-[1.35] marker:text-black">
                    <li>Spearheaded a quarterly revenue analysis project that identified $15M in cost-saving opportunities across 3 global divisions.</li>
                    <li>Managed financial modeling for M&A scenarios worth over $500M, providing critical data for executive decision-making.</li>
                    <li>Automated monthly reporting workflows using Python and SQL, reducing manual data entry time by 40%.</li>
                </ul>
            </div>

            <div className="mb-1">
                <div className="flex justify-between items-baseline mb-0.5 text-[9px]">
                    <span className="font-bold">Financial Analyst</span>
                    <span className="font-bold">2018 – 2021</span>
                </div>
                <div className="flex justify-between items-baseline mb-1 text-[9px]">
                    <span className="italic">JP Morgan Chase</span>
                    <span className="italic">New York, NY</span>
                </div>
                <ul className="list-disc list-outside ml-3 text-[8.5px] text-gray-900 leading-[1.35] marker:text-black">
                    <li>Collaborated with cross-functional teams to develop annual budgets and re-forecasts for the Consumer Banking division.</li>
                    <li>Performed variance analysis on monthly P&L statements, ensuring 99% accuracy in financial reporting.</li>
                </ul>
            </div>
        </div>

        {/* Education */}
        <div className="mb-4">
            <h2 className="text-[10px] font-bold mb-1.5 text-black uppercase tracking-wider bg-gray-100 px-1 py-0.5">Education</h2>
            <div className="text-[9px]">
                <div className="flex justify-between font-bold">
                    <span>Columbia University</span>
                    <span>2018</span>
                </div>
                <div className="flex justify-between italic text-gray-800">
                    <span>Bachelor of Science in Economics</span>
                    <span>GPA: 3.9/4.0</span>
                </div>
            </div>
        </div>

        {/* Skills */}
        <div>
            <h2 className="text-[10px] font-bold mb-1.5 text-black uppercase tracking-wider bg-gray-100 px-1 py-0.5">Skills & Certifications</h2>
            <div className="text-[9px] text-gray-900 leading-[1.4]">
                <p><span className="font-bold">Financial:</span> Financial Modeling, Forecasting, GAAP, Risk Analysis, Valuation</p>
                <p><span className="font-bold">Technical:</span> Excel (Advanced Macros), SQL, Python (Pandas), Tableau, Bloomberg Terminal</p>
                <p><span className="font-bold">Certifications:</span> Chartered Financial Analyst (CFA) Level II Candidate</p>
            </div>
        </div>
    </div>
);

// Resume Template 2 - Modern Tech (Two Column, Clean Sans)
const ResumeTemplate2 = () => (
    <div className="absolute inset-0 bg-white p-6 text-slate-800 font-sans text-xs leading-relaxed overflow-hidden grid grid-cols-[1fr_2fr] gap-6">

        {/* Left Column */}
        <div className="border-r border-slate-200 pr-4">
            <h1 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tighter mb-1">Priya<br />Patel</h1>
            <p className="text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">UX Engineer</p>

            <div className="space-y-4">
                <div>
                    <h3 className="text-[9px] font-bold uppercase text-slate-400 mb-2 tracking-wider">Contact</h3>
                    <div className="text-[9px] space-y-1 text-slate-600 font-medium">
                        <p>priya.p@design.io</p>
                        <p>+1 (415) 555-0922</p>
                        <p>San Francisco, CA</p>
                        <p>priyapatel.design</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-[9px] font-bold uppercase text-slate-400 mb-2 tracking-wider">Skills</h3>
                    <div className="flex flex-wrap gap-1">
                        {["Figma", "React", "TypeScript", "Tailwind", "Motion Design", "Storybook", "User Research"].map(skill => (
                            <span key={skill} className="px-1.5 py-0.5 bg-slate-100 text-slate-700 text-[8px] rounded-sm font-medium">{skill}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-[9px] font-bold uppercase text-slate-400 mb-2 tracking-wider">Education</h3>
                    <div className="text-[9px] text-slate-600">
                        <p className="font-bold text-slate-800">UC Berkeley</p>
                        <p>B.A. CogSci, 2020</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div>
            {/* Profile */}
            <div className="mb-5">
                <p className="text-[9px] text-slate-600 leading-relaxed">
                    Creative Technologist with a passion for bridging the gap between design and engineering. Expert in building design systems and performant, accessible web interfaces.
                </p>
            </div>

            {/* Experience */}
            <div>
                <h2 className="text-[10px] font-bold text-slate-900 uppercase border-b border-slate-200 pb-1 mb-3">Work Experience</h2>

                <div className="mb-4">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-[10px]">Stripe</span>
                        <span className="text-[9px] text-slate-500 font-medium">2022 - Present</span>
                    </div>
                    <p className="text-[9px] text-primary font-medium mb-1.5">Design Technologist</p>
                    <ul className="list-disc list-inside text-[9px] text-slate-600 space-y-1">
                        <li>Built and maintained "Sail", Stripe's internal design system, used by 400+ engineers daily.</li>
                        <li>Reduced UI bug reports by 35% by implementing automated visual regression testing with Percy.</li>
                    </ul>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-[10px]">Pinterest</span>
                        <span className="text-[9px] text-slate-500 font-medium">2020 - 2022</span>
                    </div>
                    <p className="text-[9px] text-primary font-medium mb-1.5">Frontend Engineer</p>
                    <ul className="list-disc list-inside text-[9px] text-slate-600 space-y-1">
                        <li>Optimized the mobile web onboarding flow, resulting in a 12% increase in new user sign-ups.</li>
                        <li>Collaborated with designers to prototype high-fidelity interactions in code.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

// Resume Template 3 - Executive (Bold, Header Focus)
const ResumeTemplate3 = () => (
    <div className="absolute inset-0 bg-white p-8 text-neutral-800 font-sans text-xs leading-relaxed overflow-hidden">
        {/* Header */}
        <div className="bg-neutral-900 text-white p-6 -mx-8 -mt-8 mb-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-1">Michael Ross</h1>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Director of Operations</p>
                </div>
                <div className="text-right text-[9px] text-neutral-400">
                    <p>m.ross@exec-mail.com</p>
                    <p>linkedin.com/in/mross-ops</p>
                </div>
            </div>
        </div>

        {/* Summary */}
        <div className="mb-5 border-l-2 border-neutral-900 pl-3">
            <p className="text-[9px] text-neutral-600 italic">
                Strategic Operations Leader with 10+ years of experience scaling logistics and supply chain networks. Proven track record of driving efficiency improvements, reducing costs, and leading high-performance teams in fast-paced environments.
            </p>
        </div>

        {/* Experience */}
        <div className="mb-5">
            <h2 className="text-[10px] font-bold uppercase text-neutral-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-1 bg-neutral-900 rounded-full"></span> Experience
            </h2>

            <div className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-[10px]">Uber</h3>
                    <span className="text-[9px] font-bold text-neutral-500">2019 - Present</span>
                </div>
                <p className="text-[9px] text-neutral-700 font-semibold mb-1">Regional Operations Manager</p>
                <ul className="list-disc list-outside ml-3 text-[9px] text-neutral-600 space-y-1">
                    <li>Oversaw operations for the Western Region, managing a P&L of $50M+ and a team of 120+ employees.</li>
                    <li>Implemented a new driver onboarding process that decreased activation time by 25% and improved retention.</li>
                    <li>Negotiated strategic partnerships with vehicle fleet providers, saving the company $2M annually.</li>
                </ul>
            </div>

            <div>
                <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-[10px]">Tesla</h3>
                    <span className="text-[9px] font-bold text-neutral-500">2016 - 2019</span>
                </div>
                <p className="text-[9px] text-neutral-700 font-semibold mb-1">Supply Chain Manager</p>
                <ul className="list-disc list-outside ml-3 text-[9px] text-neutral-600 space-y-1">
                    <li>Managed global component sourcing for the Model 3 production ramp, ensuring 100% parts availability.</li>
                    <li>Optimized warehouse inventory levels, reducing carrying costs by 15% through JIT implementation.</li>
                </ul>
            </div>
        </div>

        {/* Core Competencies */}
        <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4">
            <div>
                <h2 className="text-[10px] font-bold uppercase text-neutral-900 mb-2">Education</h2>
                <p className="text-[9px] font-bold">Stanford University</p>
                <p className="text-[9px] text-neutral-600">MBA, Business Administration</p>
            </div>
            <div>
                <h2 className="text-[10px] font-bold uppercase text-neutral-900 mb-2">Expertise</h2>
                <p className="text-[9px] text-neutral-600">Strategic Planning, P&L Management, Logistics, Team Leadership, Process Optimization</p>
            </div>
        </div>
    </div>
);

export function ResumePreview() {
    const { openModal } = useModal();
    const [currentTemplate, setCurrentTemplate] = useState(0);

    // Auto-swap templates every 4.5 seconds - slightly smoother timing
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTemplate((prev) => (prev + 1) % 3);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    const scores = [92, 88, 95];
    const currentScore = scores[currentTemplate];

    const categories = [
        { name: "Formatting", score: 90, max: 100 },
        { name: "Keywords", score: 85, max: 100 },
        { name: "Impact", score: 95, max: 100 },
        { name: "Conciseness", score: 88, max: 100 },
    ];

    return (
        <section id="resume-preview" className="relative w-full overflow-hidden bg-background py-20 md:py-32">
            {/* Background Effects - Optimized for performance */}


            <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        See Your Resume Through a Recruiter’s Eyes
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our AI evaluates your resume with ATS-level precision, revealing strengths and gaps so you can boost your interview success.
                    </p>
                </div>

                {/* Main Content Grid - Changed to 2 columns (Left + Center/Overlay) */}
                <div className="grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-12 items-start max-w-6xl mx-auto">

                    {/* Left Sidebar - AI Analysis Insights */}
                    <div className="space-y-4 lg:mt-6 order-2 lg:order-1">
                        {/* Analysis Header */}
                        <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 shadow-sm text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-cyan-500/10 rounded-lg">
                                    <Sparkles className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">AI Analysis</h3>
                                    <p className="text-xs text-slate-400">Real-time feedback</p>
                                </div>
                            </div>
                        </div>

                        {/* Insights Stream */}
                        <div className="relative space-y-3 pl-4 hidden md:block">
                            {/* Vertical Line */}
                            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent" />

                            {/* Strengths Insight 1 */}
                            <div className="relative pl-6">
                                <div className="absolute left-[-5px] top-3 w-3 h-3 rounded-full bg-green-500 ring-4 ring-background" />
                                <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl shadow-sm text-white">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-500 mb-1 block">Strength</span>
                                    <p className="text-sm font-medium mb-1">Quantified Impact</p>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Using concrete numbers like "$15M" and "40%" significantly improves credibility.
                                    </p>
                                </div>
                            </div>

                            {/* Strengths Insight 2 */}
                            <div className="relative pl-6">
                                <div className="absolute left-[-5px] top-3 w-3 h-3 rounded-full bg-green-500 ring-4 ring-background" />
                                <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl shadow-sm text-white">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-500 mb-1 block">Strength</span>
                                    <p className="text-sm font-medium mb-1">Clear Formatting</p>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Headers are distinct and hierarchy is consistent. Good use of whitespace.
                                    </p>
                                </div>
                            </div>

                            {/* Improvement Insight 1 */}
                            <div className="relative pl-6">
                                <div className="absolute left-[-5px] top-3 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-background animate-pulse" />
                                <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl shadow-sm text-white">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 mb-1 block">Improvement</span>
                                    <p className="text-sm font-medium mb-1">Skill Gap</p>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Consider adding "Cloud Infrastructure" keywords to match the job description better.
                                    </p>
                                </div>
                            </div>

                            {/* Improvement Insight 2 */}
                            <div className="relative pl-6">
                                <div className="absolute left-[-5px] top-3 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-background animate-pulse" />
                                <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl shadow-sm text-white">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 mb-1 block">Improvement</span>
                                    <p className="text-sm font-medium mb-1">Keyword Optimization</p>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Your summary lacks specific industry keywords often scanned by ATS bots.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Resume Preview with Overlay Cards */}
                    <div className="order-1 lg:order-2 relative">
                        {/* Resume Preview */}
                        <div
                            className="relative z-10 mx-auto w-full max-w-[600px] shadow-2xl shadow-primary/10 rounded-lg overflow-hidden border border-border/40 bg-white"
                            style={{ aspectRatio: "8.5/11", willChange: "transform" }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTemplate}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full bg-white"
                                >
                                    {currentTemplate === 0 && <ResumeTemplate1 />}
                                    {currentTemplate === 1 && <ResumeTemplate2 />}
                                    {currentTemplate === 2 && <ResumeTemplate3 />}
                                </motion.div>
                            </AnimatePresence>

                            {/* subtle sheen effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                        </div>

                        {/* OVERLAY CARD 1: Resume Score (Top Right - overlapping) */}
                        <div className="absolute -right-12 top-8 z-20 hidden lg:block w-[280px]">
                            <div className="bg-[#0f172a]/90 backdrop-blur-md text-white border border-slate-700/50 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                                <div className="text-center mb-4">
                                    <div className="relative w-24 h-24 mx-auto mb-2 flex items-center justify-center">
                                        {/* Circular Progress (Visual approximation) */}
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="48" cy="48" r="40" stroke="#1e293b" strokeWidth="6" fill="transparent" />
                                            <motion.circle
                                                cx="48" cy="48" r="40"
                                                stroke="#22d3ee" strokeWidth="6" fill="transparent"
                                                strokeDasharray="251.2"
                                                initial={{ strokeDashoffset: 251.2 }}
                                                animate={{ strokeDashoffset: 251.2 - (251.2 * currentScore) / 100 }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-3xl font-bold tracking-tighter text-white">{currentScore}</span>
                                            <span className="text-[10px] text-slate-400 font-medium">/ 100</span>
                                        </div>
                                    </div>
                                    <p className="text-cyan-400 font-bold text-sm">Excellent Resume!</p>
                                </div>

                                {/* Detailed Breakdown */}
                                <div className="space-y-3 pt-3 border-t border-slate-700/50">
                                    <div className="flex justify-between items-center text-sm text-slate-300 font-medium mb-1">
                                        <span>Category Breakdown</span>
                                    </div>
                                    {categories.map((cat) => (
                                        <div key={cat.name} className="space-y-1">
                                            <div className="flex justify-between text-xs text-slate-400">
                                                <span>{cat.name}</span>
                                                <span className="text-cyan-400">
                                                    {cat.score}/{cat.max}
                                                </span>
                                            </div>
                                            <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-cyan-500"
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: `${(cat.score / cat.max) * 100}%` }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* OVERLAY CARD 2: Bullet Improver (Bottom Right - overlapping) */}
                        <div className="absolute -right-12 bottom-12 z-20 hidden lg:block w-[320px]">
                            <div className="rounded-2xl border border-slate-700/50 bg-[#0f172a]/90 backdrop-blur-md shadow-2xl overflow-hidden text-white">
                                <div className="bg-slate-900/50 p-3 border-b border-slate-700/50 flex items-center justify-between">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">Bullet Improver</span>
                                    <Wand2 className="h-4 w-4 text-cyan-400" />
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Before</label>
                                        <div className="p-3 rounded-lg bg-slate-800/50 text-[13px] text-slate-400 border border-dashed border-slate-700 italic leading-relaxed">
                                            "Managed team and improved sales."
                                        </div>
                                    </div>

                                    <div className="flex justify-center -my-1">
                                        <ArrowRight className="h-4 w-4 text-slate-600 rotate-90" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">After (AI)</label>
                                        <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-[13px] text-slate-200 shadow-sm leading-relaxed relative overflow-hidden">
                                            <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay"></div>
                                            "Led a team of 15, driving a <span className="font-bold text-cyan-400 bg-cyan-400/10 px-0.5 rounded">20% increase</span> in regional sales revenue."
                                        </div>
                                    </div>

                                    <Button size="sm" onClick={openModal} className="w-full h-9 text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20 rounded-lg">
                                        Fix My Bullets
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile view fallback for cards (optional, or just stack them below) */}
                        <div className="lg:hidden mt-8 space-y-4">
                            {/* Mobile Score Card */}
                            <div className="bg-[#0f172a]/90 backdrop-blur-md text-white border border-slate-700/50 rounded-xl p-5 shadow-sm">
                                <h3 className="font-bold text-xs mb-3 text-slate-400 uppercase tracking-widest">Resume Score</h3>
                                <div className="flex items-end gap-2 mb-2">
                                    <span className="text-4xl font-bold tracking-tighter text-white">{currentScore}</span>
                                    <span className="text-sm text-slate-500 mb-1.5">/ 100</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-cyan-400"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${currentScore}%` }}
                                    />
                                </div>
                            </div>

                            {/* Mobile Bullet Improver Card */}
                            <div className="rounded-xl border border-slate-700/50 bg-[#0f172a]/90 backdrop-blur-md text-white overflow-hidden">
                                <div className="p-4 space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">After (AI)</label>
                                        <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-[13px] text-slate-200">
                                            "Led a team of 15, driving a <span className="font-bold text-cyan-400">20% increase</span> in regional sales revenue."
                                        </div>
                                    </div>
                                    <Button size="sm" onClick={openModal} className="w-full h-8 text-sm font-bold bg-cyan-500 text-black">
                                        Fix My Bullets
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
