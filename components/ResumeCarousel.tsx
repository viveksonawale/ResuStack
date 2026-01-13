"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { useAuth } from "./AuthContext";

const resumes = [
    {
        src: "/resume-modern.png",
        name: "Modern",
        description: "Clean and minimalist design perfect for tech and startups."
    },
    {
        src: "/resume-simple.png",
        name: "Simple",
        description: "Traditional layout focusing on experience and clarity."
    },
    {
        src: "/resume-standard-1.png",
        name: "Professional I",
        description: "Balanced structure emphasizing skills and achievements."
    },
    {
        src: "/resume-standard-2.png",
        name: "Professional II",
        description: "Sophisticated editorial style for executive roles."
    },
];

export default function ResumeCarousel() {
    const { openLogin } = useAuth();

    return (
        <div className="w-full max-w-7xl mx-auto px-4">

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {resumes.map((resume, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative flex flex-col"
                    >
                        {/* Card Container */}
                        <div
                            className="relative aspect-[210/297] w-full rounded-xl overflow-hidden bg-white shadow-2xl border-4 border-white/5 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group-hover:border-vercel-orange-500/30 transition-all duration-300 transform group-hover:-translate-y-2"
                            onClick={openLogin}
                        >
                            {/* Image */}
                            <div className="relative w-full h-full bg-white cursor-pointer">
                                <Image
                                    src={resume.src}
                                    alt={`${resume.name} Resume Template`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="px-6 py-2 bg-white text-black font-semibold rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                        Use Template
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="mt-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-2">{resume.name}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4 min-h-[40px]">
                                {resume.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pb-12">
                <button
                    onClick={openLogin}
                    className="group flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-vercel-orange-500/40 hover:-translate-y-1"
                >
                    Build Your Resume
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
