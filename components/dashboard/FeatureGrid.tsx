"use client";

import { Plus, BookOpen, Search, Target, Lightbulb, ArrowRight, RefreshCw, Star } from "lucide-react";

export default function FeatureGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Industry Benchmark */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
                <div className="w-full flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-vercel-orange-500/10 flex items-center justify-center text-vercel-orange-500">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <span className="text-sm font-bold text-white">Industry Benchmark</span>
                    </div>
                </div>

                <div className="w-16 h-16 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>

                <p className="text-sm text-zinc-500 mb-6">Complete an AI review to see how you compare</p>

                <button className="text-vercel-orange-500 hover:text-vercel-orange-400 text-sm font-medium flex items-center gap-1 transition-colors">
                    Get your first review <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Score Breakdown */}
            <div className="col-span-1 lg:col-span-2 bg-vercel-gray-950 border border-white/5 rounded-2xl p-6 min-h-[300px] flex flex-col justify-center items-center text-center">
                <div className="w-full flex justify-start mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-zinc-500">
                            <div className="w-3 h-3 border-2 border-zinc-500 border-t-transparent rounded-full" />
                        </div>
                        <span className="text-sm font-bold text-white">Score Breakdown</span>
                    </div>
                </div>

                <p className="text-sm text-zinc-500 mb-6">Complete a resume review to see your score breakdown</p>

                <button className="text-vercel-orange-500 hover:text-vercel-orange-400 text-sm font-medium flex items-center gap-1 transition-colors">
                    Get AI review <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* New Resume */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                        <Plus className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white mb-0.5">New Resume</h3>
                        <p className="text-xs text-zinc-500">Start from a template</p>
                    </div>
                </div>
            </div>

            {/* Cover Letter */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white mb-0.5">Cover Letter</h3>
                        <p className="text-xs text-zinc-500">AI-generated letter</p>
                    </div>
                </div>
            </div>

            {/* AI Review */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Search className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white mb-0.5">AI Review</h3>
                        <p className="text-xs text-zinc-500">Analyze your resume</p>
                    </div>
                </div>
            </div>

            {/* Your Score */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
                <div className="w-full flex justify-start mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-vercel-orange-500/10 flex items-center justify-center text-vercel-orange-500">
                            <Star className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-bold text-white">Your Score</span>
                    </div>
                </div>

                <div className="w-20 h-20 rounded-full border-4 border-zinc-800 flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-zinc-700" />
                </div>

                <p className="text-sm text-zinc-500 mb-6">Get your first AI review</p>

                <button className="text-vercel-orange-500 hover:text-vercel-orange-400 text-sm font-medium flex items-center gap-1 transition-colors">
                    Start now <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Weekly Goals */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-6 min-h-[300px]">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-orange-500/10 flex items-center justify-center text-orange-500">
                            <Target className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-bold text-white">Weekly Goals</span>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-800/50 text-xs text-zinc-400">
                        <span className="text-white font-bold">0</span> days
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-zinc-900/30 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border border-zinc-600" />
                            <span className="text-sm text-zinc-400">Tailor a resume</span>
                        </div>
                        <span className="text-xs text-zinc-600">0/2</span>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900/30 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border border-zinc-600" />
                            <span className="text-sm text-zinc-400">Get AI reviews</span>
                        </div>
                        <span className="text-xs text-zinc-600">0/2</span>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900/30 border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border border-zinc-600" />
                            <span className="text-sm text-zinc-400">Create cover letter</span>
                        </div>
                        <span className="text-xs text-zinc-600">0/1</span>
                    </div>
                </div>

                <div className="mt-6 flex justify-between items-center text-[10px] text-zinc-500">
                    <span>Weekly progress</span>
                    <span className="text-white font-bold">0/3 complete</span>
                </div>

                <div className="mt-2 w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-orange-500" />
                </div>

                <p className="mt-4 text-[10px] text-zinc-600">Start your streak today! Consistency is key in the job search.</p>
            </div>

            {/* Quick Tip */}
            <div className="bg-vercel-gray-950 border border-white/5 rounded-2xl p-6 min-h-[300px] flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                            <Lightbulb className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-bold text-white">Quick Tip</span>
                    </div>

                    <button className="text-zinc-600 hover:text-white transition-colors">
                        <RefreshCw className="w-3 h-3" />
                    </button>
                </div>

                <p className="text-sm text-zinc-400 mb-8 flex-grow">
                    Run an AI review to see exactly how to improve your resume
                </p>

                <button className="w-full py-3 rounded-md bg-[#1A1A1A] hover:bg-[#222] text-yellow-500 text-sm font-bold transition-colors flex items-center justify-center gap-2 group">
                    Get review <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        </div>
    );
}
