"use client";

import { FileText, BookOpen, MessageSquare, Star, ChevronRight } from "lucide-react";

export default function StatsGrid() {
    const stats = [
        {
            label: "Resumes",
            value: "0",
            icon: FileText,
            color: "text-pink-500",
            bgColor: "bg-pink-500/10",
            href: "#"
        },
        {
            label: "Cover Letters",
            value: "0",
            icon: BookOpen,
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            href: "#"
        },
        {
            label: "Reviews",
            value: "0",
            icon: MessageSquare,
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            href: "#"
        },
        {
            label: "Avg Score",
            value: "0",
            icon: Star,
            color: "text-yellow-500",
            bgColor: "bg-yellow-500/10",
            href: "#"
        }
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {stats.map((stat, index) => (
                <a
                    key={index}
                    href={stat.href}
                    className="relative bg-vercel-gray-950 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1"
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-lg ${stat.bgColor} border border-white/10 flex items-center justify-center ${stat.color} shadow-inner`}>
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
                            {stat.label}
                        </span>
                    </div>
                    <div className="relative z-10 flex items-end justify-between">
                        <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                        <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors mb-1" />
                    </div>
                </a>
            ))}
        </div>
    );
}
