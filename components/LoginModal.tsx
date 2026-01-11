"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useAuth } from "./AuthContext";
import { COMPANY_LOGOS } from "./CompanyLogos";

export default function LoginModal() {
    const { isLoginOpen, closeLogin } = useAuth();

    // Find Microsoft logo for the button
    const microsoftLogo = COMPANY_LOGOS.find(c => c.name === "Microsoft");

    return (
        <AnimatePresence>
            {isLoginOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Blurred Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLogin}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLogin}
                            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 text-center">
                            {/* Brand Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vercel-orange-400 to-vercel-amber-500 inline-block">
                                    ResuStack
                                </h2>
                                <div className="h-1 w-16 bg-gradient-to-r from-vercel-orange-400 to-vercel-amber-500 rounded-full mx-auto mt-2" />
                            </div>

                            {/* Title & Subtitle */}
                            <h3 className="text-2xl font-bold text-white mb-4">Access Your Account</h3>
                            <p className="text-zinc-400 mb-6">
                                Continue building your professional future with AI-powered resume tools
                            </p>

                            {/* Feature Badge */}
                            <div className="flex items-center justify-center gap-2 mb-8">
                                <div className="p-0.5 rounded-full bg-gradient-to-r from-vercel-orange-500 to-vercel-amber-500">
                                    <div className="bg-black rounded-full p-0.5">
                                        <Check className="w-3 h-3 text-vercel-orange-500" />
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-vercel-orange-500">Always Free to Start</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-white/10 rounded-xl transition-all duration-200 group">
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

                                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-white/10 rounded-xl transition-all duration-200 group">
                                    {microsoftLogo && (
                                        <svg viewBox={microsoftLogo.viewBox} className="w-5 h-5">
                                            <path d={microsoftLogo.path} fill="currentColor" className="text-white" />
                                        </svg>
                                    )}
                                    <span className="font-semibold text-white group-hover:text-white/90">Continue with Microsoft</span>
                                </button>
                            </div>

                            {/* Footer Links */}
                            <div className="mt-8 text-xs text-zinc-500">
                                By continuing, you agree to our{" "}
                                <a href="#" className="text-vercel-pink-500 hover:underline">Terms of Service</a>
                                {" "}and{" "}
                                <a href="#" className="text-vercel-pink-500 hover:underline">Privacy Policy</a>
                            </div>

                            <div className="mt-6">
                                <button
                                    onClick={closeLogin}
                                    className="text-sm text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors mx-auto"
                                >
                                    ← Back to home
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
