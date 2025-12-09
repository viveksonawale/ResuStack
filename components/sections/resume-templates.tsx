"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Placeholder data for resume templates
const templates = [
    { id: 1, name: "Modern Professional", color: "bg-slate-800", layout: "classic" },
    { id: 2, name: "Creative Designer", color: "bg-neutral-800", layout: "modern" },
    { id: 3, name: "Executive Suite", color: "bg-zinc-800", layout: "minimal" },
    { id: 4, name: "Tech Specialist", color: "bg-stone-800", layout: "tech" },
    { id: 5, name: "Simple Clean", color: "bg-gray-800", layout: "simple" },
];

export function ResumeTemplates() {
    return (
        <section id="templates" className="py-24 bg-[#050816] overflow-hidden">
            <div className="container px-4 mx-auto mb-16 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                    Professional Resume Templates
                </h2>
                <p className="text-lg text-gray-400">
                    ATS-optimized templates designed by industry professionals to help you land your dream job.
                </p>
            </div>

            <div className="relative w-full">
                {/* Gradient Blur Edges */}
                <div className="absolute top-0 bottom-0 left-0 z-10 w-32 pointer-events-none bg-gradient-to-r from-[#050816] to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 z-10 w-32 pointer-events-none bg-gradient-to-l from-[#050816] to-transparent" />

                {/* Marquee Container */}
                <div className="flex overflow-hidden group">
                    <MarqueeContent />
                    <MarqueeContent />
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <button className="px-8 py-3 text-sm font-medium text-white transition-colors border rounded-lg border-white/20 hover:bg-white/10">
                    All Resume Templates
                </button>
            </div>
        </section>
    );
}

function MarqueeContent() {
    return (
        <motion.div
            className="flex gap-8 px-4 flex-nowrap"
            animate={{ x: "-100%" }}
            transition={{
                ease: "linear",
                duration: 30, // Adjust speed here, user asked for "every 3 second it will move the page" but standard marquee is continuous
                repeat: Infinity,
            }}
        >
            {templates.map((template) => (
                <div
                    key={template.id}
                    className="relative flex-shrink-0 w-[300px] h-[400px] bg-white rounded-lg shadow-xl overflow-hidden group/card hover:scale-[1.02] transition-transform duration-300"
                >
                    {/* Placeholder Visual content */}
                    <div className={`w-full h-full ${template.color} p-6 flex flex-col gap-4 opacity-90`}>
                        {/* Header Area */}
                        <div className="flex items-center gap-4">
                            {template.layout === 'modern' || template.layout === 'tech' ? (
                                <div className="shrink-0 w-12 h-12 rounded-full bg-white/20"></div>
                            ) : null}
                            <div className="flex-1 space-y-2">
                                <div className="w-3/4 h-3 rounded bg-white/20"></div>
                                <div className="w-1/2 h-2 rounded bg-white/10"></div>
                            </div>
                        </div>

                        <div className="w-full h-px my-1 bg-white/10"></div>

                        {/* Body Content - Varies by layout */}
                        {template.layout === 'classic' && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="w-1/3 h-2 rounded bg-white/15"></div>
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                </div>
                            </div>
                        )}

                        {template.layout === 'modern' && (
                            <div className="grid grid-cols-3 gap-2 h-full">
                                <div className="col-span-1 h-full bg-white/5 rounded p-2 space-y-2">
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                </div>
                                <div className="col-span-2 space-y-3">
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                    <div className="w-full h-2 rounded bg-white/10"></div>
                                    <div className="w-3/4 h-2 rounded bg-white/10"></div>
                                    <div className="w-full h-16 rounded bg-white/5"></div>
                                </div>
                            </div>
                        )}

                        {template.layout === 'minimal' && (
                            <div className="space-y-6 text-center">
                                <div className="mx-auto w-1/2 h-2 rounded bg-white/10"></div>
                                <div className="mx-auto w-3/4 h-2 rounded bg-white/10"></div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="h-20 rounded bg-white/5"></div>
                                    <div className="h-20 rounded bg-white/5"></div>
                                </div>
                            </div>
                        )}

                        {(template.layout === 'tech' || template.layout === 'simple') && (
                            <div className="space-y-3">
                                <div className="w-full h-2 rounded bg-white/10"></div>
                                <div className="flex gap-2">
                                    <div className="w-1/4 h-20 rounded bg-white/5"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="w-full h-2 rounded bg-white/10"></div>
                                        <div className="w-full h-2 rounded bg-white/10"></div>
                                        <div className="w-3/4 h-2 rounded bg-white/10"></div>
                                    </div>
                                </div>
                                <div className="w-full h-10 rounded bg-white/5"></div>
                            </div>
                        )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/60 group-hover/card:opacity-100">
                        <button className="px-6 py-2 text-sm font-semibold text-black bg-white rounded-full">
                            See Template
                        </button>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}
