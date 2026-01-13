"use client";

import { X, Check } from "lucide-react";
import { useState } from "react";

interface TemplateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TemplateModal({ isOpen, onClose }: TemplateModalProps) {
    const [selectedTemplate, setSelectedTemplate] = useState(0);
    const [layoutStyle, setLayoutStyle] = useState<'standard' | 'compact'>('standard');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Column: Preview */}
                <div className="w-full md:w-3/5 bg-[#111] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative">
                    <div className="w-full max-w-[400px] aspect-[1/1.414] bg-white rounded-sm shadow-xl p-6 md:p-8 text-[8px] md:text-[10px] text-black overflow-hidden relative group">
                        {/* Resume Mockup */}
                        <div className="text-center mb-4">
                            <h1 className="text-xl font-serif font-bold mb-1">First Last</h1>
                            <p className="text-gray-500 mb-2">+1 123-456-7890 | first.last@email.com</p>
                            <div className="h-px bg-gray-300 w-full" />
                        </div>

                        <div className="space-y-3">
                            <section>
                                <h2 className="font-serif font-bold border-b border-black mb-1 uppercase tracking-wider">Education</h2>
                                <div className="flex justify-between font-bold">
                                    <span>University Name</span>
                                    <span>City, ST</span>
                                </div>
                                <div className="flex justify-between italic text-gray-700">
                                    <span>Bachelor of Science in Computer Science</span>
                                    <span>May 2026</span>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-serif font-bold border-b border-black mb-1 uppercase tracking-wider">Experience</h2>
                                <div className="space-y-2">
                                    <div>
                                        <div className="flex justify-between font-bold">
                                            <span>Software Engineer Intern</span>
                                            <span>May 2024 - Aug 2024</span>
                                        </div>
                                        <p className="italic text-gray-700 mb-0.5">Innovative Tech Co.</p>
                                        <ul className="list-disc list-inside text-gray-600 pl-1 space-y-0.5">
                                            <li>Built and deployed RESTful APIs using Spring Boot and AWS.</li>
                                            <li>Designed data pipelines integrating PostgreSQL and Redis.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex justify-between font-bold">
                                            <span>Backend Engineer Intern</span>
                                            <span>Jun 2023 - Sep 2023</span>
                                        </div>
                                        <p className="italic text-gray-700 mb-0.5">Global Analytics Inc.</p>
                                        <ul className="list-disc list-inside text-gray-600 pl-1 space-y-0.5">
                                            <li>Developed microservices for large-scale data analytics.</li>
                                            <li>Automated CI/CD pipelines using Docker and Jenkins.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-serif font-bold border-b border-black mb-1 uppercase tracking-wider">Projects</h2>
                                <div>
                                    <div className="font-bold">Smart Campus Scheduler</div>
                                    <ul className="list-disc list-inside text-gray-600 pl-1">
                                        <li>Built a full-stack scheduling app for university students.</li>
                                        <li>Integrated Supabase authentication and real-time updates.</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0 text-center">
                        <h3 className="text-lg font-bold text-white mb-1">Jake Ryan</h3>
                        <p className="text-zinc-500 text-sm max-w-sm mx-auto">The gold standard resume template. Clean, professional, and proven effective for tech roles.</p>
                    </div>
                </div>

                {/* Right Column: Options */}
                <div className="w-full md:w-2/5 p-8 flex flex-col">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Select Template</h2>
                        <p className="text-zinc-400 text-sm">Choose your preferred style</p>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-sm font-medium text-white mb-4">All Templates</h4>
                        <div className="grid grid-cols-5 gap-3">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedTemplate(i)}
                                    className={`aspect-[1/1.4] rounded bg-white border-2 overflow-hidden transition-all ${selectedTemplate === i
                                            ? 'border-vercel-orange-500 ring-2 ring-vercel-orange-500/20 shadow-lg shadow-vercel-orange-500/20 scale-105'
                                            : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/20'
                                        }`}
                                >
                                    <div className="w-full h-full bg-zinc-100 p-1 flex flex-col gap-1">
                                        <div className="h-1 w-full bg-zinc-300 rounded-[1px]" />
                                        <div className="h-full flex flex-col gap-1">
                                            <div className="h-px w-full bg-zinc-200" />
                                            <div className="h-px w-3/4 bg-zinc-200" />
                                            <div className="h-px w-full bg-zinc-200" />
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-auto">
                        <h4 className="text-sm font-medium text-white mb-4">Layout Style</h4>
                        <div className="grid grid-cols-2 bg-white/5 p-1 rounded-xl border border-white/5">
                            <button
                                onClick={() => setLayoutStyle('standard')}
                                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${layoutStyle === 'standard'
                                        ? 'bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 text-white shadow-lg'
                                        : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                Standard
                            </button>
                            <button
                                onClick={() => setLayoutStyle('compact')}
                                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${layoutStyle === 'compact'
                                        ? 'bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 text-white shadow-lg'
                                        : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                Compact
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
                        >
                            Cancel
                        </button>
                        <button className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2">
                            <Check className="w-5 h-5" />
                            Apply Template
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
