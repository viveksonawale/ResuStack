"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup logic here

    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-vercel-orange-500/20 to-vercel-amber-500/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-vercel-orange-500/10 to-vercel-amber-500/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Brand Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block group">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vercel-orange-400 to-vercel-amber-500 inline-block group-hover:from-vercel-orange-300 group-hover:to-vercel-amber-400 transition-all">
                            ResuStack
                        </h2>
                        <div className="h-1 w-full bg-gradient-to-r from-vercel-orange-400 to-vercel-amber-500 rounded-full mt-1 group-hover:scale-x-110 transition-transform" />
                    </Link>
                    <h3 className="text-2xl font-bold text-white mt-6">Create an Account</h3>
                    <p className="text-zinc-400 mt-2">Start building your professional resume today</p>
                </div>

                {/* Signup Form Card */}
                <div className="bg-zinc-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                    <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-white/10 rounded-xl transition-all duration-200 group mb-6">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="#EA4335"
                                d="M24 12.276c0-.854-.076-1.676-.217-2.476H12.273v4.685h6.58c-.283 1.527-1.141 2.82-2.43 3.682v3.06h3.935c2.302-2.119 3.629-5.239 3.629-8.913l-.013-.04z"
                            />
                            <path
                                fill="#34A853"
                                d="M12.273 24c3.302 0 6.075-1.092 8.096-2.955l-3.935-3.06c-1.094.733-2.494 1.166-4.161 1.166-3.185 0-5.882-2.152-6.845-5.044H1.363v3.167C3.39 21.147 7.55 24 12.273 24z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.428 14.111c-.246-.738-.387-1.528-.387-2.35s.138-1.597.382-2.316V6.278H1.363C.493 8.01 0 9.944 0 12c0 2.073.507 4.025 1.396 5.767l4.032-3.656z"
                            />
                            <path
                                fill="#4285F4"
                                d="M12.273 4.755c1.795 0 3.408.618 4.675 1.828l3.509-3.509C18.344 1.01 15.542 0 12.273 0 7.55 0 3.39 2.853 1.363 6.278l4.065 3.167c.963-2.892 3.66-5.044 6.845-5.044z"
                            />
                        </svg>
                        <span className="font-semibold text-white group-hover:text-white/90">Continue with Google</span>
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-white/10 flex-1" />
                        <span className="text-xs text-zinc-500 font-medium">OR SIGN UP WITH EMAIL</span>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-xl focus:border-vercel-orange-500 focus:ring-1 focus:ring-vercel-orange-500 text-white placeholder-zinc-600 transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-xl focus:border-vercel-orange-500 focus:ring-1 focus:ring-vercel-orange-500 text-white placeholder-zinc-600 transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-1.5">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-xl focus:border-vercel-orange-500 focus:ring-1 focus:ring-vercel-orange-500 text-white placeholder-zinc-600 transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-vercel-orange-400 to-vercel-orange-500 hover:from-vercel-orange-500 hover:to-vercel-orange-600 text-white font-bold rounded-xl shadow-lg shadow-vercel-orange-500/20 active:scale-95 transition-all mt-2"
                        >
                            Create Account
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-white/5 text-center">
                        <p className="text-zinc-400 text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="text-white font-bold hover:text-vercel-orange-500 transition-colors inline-flex items-center gap-1 group">
                                Sign In
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
