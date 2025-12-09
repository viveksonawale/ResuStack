"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ShinyBadge } from "@/components/ui/shiny-badge";
import { DotBackground } from "@/components/ui/dot-background";
import { useModal } from "@/components/providers/modal-provider";
import { MovingGradient } from "@/components/ui/moving-gradient";

import { motion, Variants } from "framer-motion";

export function Hero() {
    const { openModal } = useModal();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 min-h-[80vh] flex items-center overflow-hidden">
            {/* Top Right Blur - Optimized with Radial Gradient */}
            <div
                className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-screen"
                style={{
                    background: "radial-gradient(circle at center, rgba(var(--primary-rgb, 6, 182, 212), 0.15) 0%, transparent 70%)"
                }}
            />
            {/* Bottom Left Blur - Optimized with Radial Gradient */}
            <div
                className="absolute bottom-0 left-0 w-[800px] h-[800px] pointer-events-none translate-y-1/2 -translate-x-1/2 mix-blend-screen"
                style={{
                    background: "radial-gradient(circle at center, rgba(var(--secondary-rgb, 59, 130, 246), 0.15) 0%, transparent 70%)"
                }}
            />

            <DotBackground />

            <div className="container px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="space-y-4 flex flex-col items-center" variants={itemVariants}>
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Free Online Resume Builder
                        </div>
                        <h1 className="text-[46px] leading-[0.9] font-bold tracking-tighter sm:text-[58px] md:text-[70px] xl:text-[82px] max-w-3xl mx-auto">
                            Build a standout resume with
                            <span className="block relative inline-block">
                                <MovingGradient asText className="font-bold tracking-tighter">
                                    zero cost
                                </MovingGradient>
                            </span>
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-2xl mx-auto">
                            Your first resume is completely free. <br></br>Unlimited downloads. No hidden costs.<br></br> Yes, really 🚀
                        </p>
                    </motion.div>

                    <motion.div className="flex flex-col gap-4 min-[400px]:flex-row justify-center" variants={itemVariants}>
                        <Button
                            onClick={openModal}
                            size="lg"
                            className="group relative w-full min-[400px]:w-auto h-16 rounded-xl px-8 text-xl font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:brightness-110 active:scale-95 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.5),0_4px_6px_-1px_rgba(6,182,212,0.1),inset_0_-4px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7),0_8px_12px_-1px_rgba(6,182,212,0.3),inset_0_-4px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.4)]"
                        >
                            <span className="flex items-center gap-2">
                                Get Started Free <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Button>
                        <ShinyBadge text="ATS Check" href="/#upload" className="h-16 text-lg rounded-xl" />
                    </motion.div>

                    <motion.div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base text-muted-foreground" variants={itemVariants}>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>Optimized for modern ATS systems</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>Free</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span>Setup in 1 minute</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
