"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Plus, ArrowRight, Zap, Target, BookOpen, Upload, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { FileSelector } from "@/components/dashboard/FileSelector";
import { MetricCardSmall } from "@/components/dashboard/MetricCardSmall";
import { SpeedometerMini } from "@/components/dashboard/SpeedometerMini";

// Mock Data
const files = [
    { id: "1", name: "Resume_Senior_Dev_v2.pdf", date: "2 mins ago", ats: 85, grammar: 98, skills: 80, completeness: 90 },
    { id: "2", name: "Resume_PM_Apple.pdf", date: "2 days ago", ats: 72, grammar: 95, skills: 65, completeness: 100 },
    { id: "3", name: "Cover_Letter_Google.docx", date: "1 week ago", ats: 92, grammar: 88, skills: 45, completeness: 100 },
];

export default function DashboardPage() {
    const [selectedFileId, setSelectedFileId] = useState("1");
    const selectedFile = files.find((f) => f.id === selectedFileId) || files[0];

    return (
        <div className="relative min-h-screen space-y-8 animate-fade-in-up pb-20">

            {/* Ambient Background Elements */}
            <div className="fixed top-20 left-10 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-20 mix-blend-screen" />
            <div className="fixed bottom-20 right-10 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none opacity-20 mix-blend-screen" />

            {/* Floating Control Bar */}
            <div className="sticky top-4 z-40 bg-black/40 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)] gap-4">
                <FileSelector files={files} selectedFileId={selectedFileId} onSelect={setSelectedFileId} />

                <div className="flex items-center gap-3">
                    {/* Quick Actions */}
                    <div className="hidden md:flex items-center gap-2 border-r border-white/10 pr-4 mr-2">
                        <Link href="/dashboard/ats">
                            <Button variant="ghost" size="sm" className="hover:bg-white/5 text-muted-foreground hover:text-white">
                                <Upload className="mr-2 h-4 w-4" /> Upload Analysis
                            </Button>
                        </Link>
                    </div>

                    <Link href="/builder">
                        <Button size="sm" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] border-0">
                            <Plus className="mr-2 h-4 w-4" /> New Resume
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 px-2">
                {/* Left Column: Metrics & Score (8 cols) */}
                <div className="lg:col-span-8 space-y-6">

                    {/* Dense Metrics Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCardSmall
                            title="ATS Score"
                            value={selectedFile.ats}
                            icon={<Target className="h-5 w-5" />}
                            trend="neutral"
                            color="blue"
                        />
                        <MetricCardSmall
                            title="Grammar"
                            value={selectedFile.grammar}
                            subValue="/ 100"
                            icon={<BookOpen className="h-5 w-5" />}
                            color="green"
                        />
                        <MetricCardSmall
                            title="Skills Match"
                            value={`${selectedFile.skills}%`}
                            icon={<Zap className="h-5 w-5" />}
                            color="purple"
                        />
                        <MetricCardSmall
                            title="Completeness"
                            value={`${selectedFile.completeness}%`}
                            icon={<FileText className="h-5 w-5" />}
                        />
                    </div>

                    {/* Insight Deck */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Main Score Visualizer */}
                        <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group hover:border-white/20 transition-all shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-50" />

                            <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-105">
                                <SpeedometerMini score={selectedFile.ats} label="ATS Impact" size={200} />
                            </div>

                            <div className="mt-6 text-center z-10 space-y-2">
                                <div className="border inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                                    <Sparkles className="h-3 w-3" /> Strong Profile
                                </div>
                                <p className="text-sm text-muted-foreground max-w-[200px] mx-auto leading-relaxed">Your resume is optimized for parsing systems.</p>
                            </div>
                        </div>

                        {/* Analysis Breakdown List */}
                        <div className="p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md flex flex-col justify-between min-h-[300px] hover:border-white/20 transition-all shadow-xl">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                                        <TrendingUp className="h-4 w-4" /> Top Strengths
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-gray-300 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                                            <span>Strong action verbs used throughout ("Lead", "Built").</span>
                                        </li>
                                        <li className="flex gap-3 text-sm text-gray-300 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                                            <span>Contact info is parsable.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-rose-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                                        <Target className="h-4 w-4" /> Priority Fixes
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-gray-300 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
                                            <span className="opacity-80">Missing skills: <strong>Docker</strong>, <strong>Kubernetes</strong>.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/dashboard/ats">
                                <Button className="w-full mt-6 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all">
                                    View Full Report <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Quick Context / Actions (4 cols) */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Action List */}
                    <div className="p-6 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Zap className="h-3 w-3" /> Quick Actions
                        </h3>
                        <div className="space-y-3">
                            <Link href="/dashboard/cover-letter">
                                <Button variant="ghost" className="w-full mb-3 justify-between items-center h-14 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl px-4 group transition-all">
                                    <span className="flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                                            <FileText className="h-4 w-4" />
                                        </span>
                                        <span className="text-sm font-medium">Cover Letter</span>
                                    </span>
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-muted-foreground" />
                                </Button>
                            </Link>
                            <Link href="/dashboard/files">
                                <Button variant="ghost" className="w-full justify-between items-center h-14 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl px-4 group transition-all">
                                    <span className="flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform">
                                            <BookOpen className="h-4 w-4" />
                                        </span>
                                        <span className="text-sm font-medium">My Library</span>
                                    </span>
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-muted-foreground" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mock Ad / Premium Feature */}
                    <div className="p-6 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-black/40 backdrop-blur-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/30 blur-[50px] rounded-full pointer-events-none group-hover:bg-indigo-500/50 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
                                <Sparkles className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Pro Analysis</h3>
                            <p className="text-sm text-indigo-200/80 mb-6 leading-relaxed">Unlock deep insights for detailed resume scoring and AI suggestions.</p>
                            <Button className="w-full bg-white text-indigo-950 hover:bg-white/90 font-semibold border-0 shadow-xl">
                                Upgrade Plan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
