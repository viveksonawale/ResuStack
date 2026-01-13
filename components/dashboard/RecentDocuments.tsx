"use client";

import { FileText, Plus } from "lucide-react";
import Link from "next/link";

export default function RecentDocuments() {
    return (
        <div className="mt-8">
            <h2 className="text-sm font-bold text-white mb-4">Recent Documents</h2>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 text-zinc-600">
                    <FileText className="w-6 h-6" />
                </div>

                <p className="text-zinc-500 text-sm mb-6">No documents yet</p>

                <Link
                    href="/dashboard/resume/new"
                    className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-2xl hover:shadow-vercel-orange-500/50 transition-all hover:scale-105"
                >
                    <Plus className="w-4 h-4" />
                    Create Your First Resume
                </Link>
            </div>
        </div>
    );
}
