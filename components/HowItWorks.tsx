"use client";


import { User, Sparkles, BarChart, Download } from "lucide-react";

const steps = [
    {
        icon: User,
        title: "Add Your Details",
        description: "Enter your experience, skills, and job role in minutes.",
        iconColor: "text-vercel-orange-400",
        bgGradient: "from-vercel-orange-500/10 to-vercel-amber-500/10",
    },
    {
        icon: Sparkles,
        title: "AI Resume Optimization",
        description: "Our AI rewrites your resume using ATS-friendly language and keywords.",
        iconColor: "text-purple-400",
        bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
        icon: BarChart,
        title: "ATS Score & Fixes",
        description: "Get real-time ATS scoring with actionable improvement tips.",
        iconColor: "text-green-400",
        bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
        icon: Download,
        title: "Download & Apply",
        description: "Export a recruiter-ready PDF and start applying confidently.",
        iconColor: "text-blue-400",
        bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-vercel-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vercel-amber-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
                        How ResuStack Works
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Create a job-winning resume in four simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="relative p-8 rounded-2xl bg-vercel-gray-950 border border-white/5 hover:border-white/10 transition-all duration-300 h-full">
                                    {/* Subtle Gradient Background Effect on Hover */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10 flex flex-col items-start text-left">
                                        {/* Minimal Icon */}
                                        <div className={`mb-6 p-3 rounded-xl bg-white/5 border border-white/5 ${step.iconColor}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        {/* Step Number */}
                                        <div className="absolute top-8 right-8 text-xs font-mono text-vercel-gray-600 font-bold">
                                            0{index + 1}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>

                                        <p className="text-sm text-vercel-gray-400 leading-relaxed group-hover:text-vercel-gray-300 transition-colors duration-300">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
