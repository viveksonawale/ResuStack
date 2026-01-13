"use client";

import { Target, TrendingUp, BarChart3, Star, Upload, ArrowRight } from "lucide-react";

export default function ReviewPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">AI Resume Review</h1>
                    <p className="text-zinc-400 text-sm">Get instant AI-powered feedback across 5 key categories</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white text-sm font-bold shadow-lg hover:shadow-vercel-orange-500/50 transition-all">
                    <Plus className="w-4 h-4" />
                    Create New
                </button>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-vercel-gray-950 border border-white/5 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                            <Target className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-zinc-400">Target Score</span>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-white">92+</span>
                        <span className="text-xs font-medium text-green-500 mb-1.5">Hire Zone</span>
                    </div>
                </div>

                <div className="p-4 bg-vercel-gray-950 border border-white/5 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-zinc-400">Your Best</span>
                    </div>
                    <span className="text-3xl font-bold text-white">--</span>
                </div>

                <div className="p-4 bg-vercel-gray-950 border border-white/5 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <BarChart3 className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-zinc-400">Reviews</span>
                    </div>
                    <span className="text-3xl font-bold text-white">0</span>
                </div>

                <div className="p-4 bg-vercel-gray-950 border border-white/5 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                            <Star className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-zinc-400">Avg Score</span>
                    </div>
                    <span className="text-3xl font-bold text-white">--</span>
                </div>
            </div>

            {/* Main Action Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Upload New Resume */}
                <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-vercel-orange-500/10 border border-white/5 flex items-center justify-center text-vercel-orange-500">
                            <Upload className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-white">Upload New Resume</span>
                    </div>

                    <div className="border border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-black/20 hover:bg-black/40 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 text-zinc-500 group-hover:text-white transition-colors">
                            <Upload className="w-6 h-6" />
                        </div>
                        <h3 className="text-sm font-bold text-white mb-1">Drag & drop or click to browse</h3>
                        <p className="text-xs text-zinc-500">PDF or DOCX - Max 10MB</p>
                    </div>

                    <div className="mt-6 space-y-3">
                        <p className="text-sm font-medium text-white mb-4">What you&apos;ll get:</p>
                        <div className="space-y-2">
                            {[
                                "Overall score out of 100",
                                "ATS compatibility analysis",
                                "Keyword optimization tips",
                                "Section-by-section feedback"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-xs text-zinc-400">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Benchmark and Review List */}
                <div className="space-y-6">
                    {/* Industry Benchmark */}
                    <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
                        <div className="flex items-center gap-3 mb-8 w-full">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-white/5 flex items-center justify-center text-blue-500">
                                <TrendingUp className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-bold text-white">Industry Benchmark</span>
                        </div>

                        <div className="w-16 h-16 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center mb-6">
                            <TrendingUp className="w-6 h-6 text-zinc-700" />
                        </div>

                        <p className="text-sm text-zinc-500 mb-6">Complete an AI review to see how you compare</p>

                        <button className="text-vercel-orange-500 hover:text-vercel-orange-400 text-sm font-medium flex items-center gap-1 transition-colors">
                            Get your first review <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Existing Resumes & Reviews */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center mb-4 text-zinc-600">
                    <FileText className="w-6 h-6" />
                </div>

                <h3 className="text-sm font-bold text-white mb-2">No Resumes Yet</h3>
                <p className="text-xs text-zinc-500 mb-6">Upload a PDF above or create a resume first</p>

                <button className="px-6 py-2 rounded-md bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white text-sm font-bold shadow-lg hover:shadow-vercel-orange-500/50 transition-all">
                    Create Resume
                </button>

                <p className="mt-4 text-[10px] text-zinc-600">Tip: Resumes scoring 92+ get 3x more interview callbacks</p>
            </div>
        </div>
    );
}

// Helper icons
import { FileText, Plus } from "lucide-react";
