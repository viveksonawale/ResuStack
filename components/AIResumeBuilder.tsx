"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight, Lightbulb } from "lucide-react";
import { useAuth } from "./AuthContext";

// Resume Content Component
function ResumeContent() {
    return (
        <div className="bg-white text-black p-8 sm:p-12 font-serif text-[10px] sm:text-[11px] leading-relaxed shadow-2xl rounded-sm w-[210mm] min-h-[297mm] mx-auto select-none pointer-events-none">
            {/* Resume Header */}
            <div className="text-center mb-6 border-b-2 border-black pb-2">
                <h1 className="text-2xl font-bold mb-1 tracking-wide uppercase">Vivek Sonawale</h1>
                <div className="flex justify-center gap-3 text-gray-700">
                    <span>123-456-7890</span>
                    <span>•</span>
                    <span>vivek.sonawale@example.com</span>
                    <span>•</span>
                    <span>linkedin.com/in/viveksonawale</span>
                    <span>•</span>
                    <span>github.com/viveksonawale</span>
                </div>
            </div>

            {/* Summary */}
            <div className="mb-4">
                <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Summary</h2>
                <p>
                    Senior mechanical engineering student with internship experience in medical device manufacturing and product development.
                    Project experience includes applications of software and hardware. Seeking full-time position May 2020 in medical device manufacturing,
                    pharmaceutical production, and other FDA-regulated industries.
                </p>
            </div>

            {/* Education */}
            <div className="mb-4">
                <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Education</h2>
                <div className="flex justify-between font-bold">
                    <span>B.S.E., Mechanical Engineering</span>
                    <span>Graduating May 2020</span>
                </div>
                <div className="flex justify-between">
                    <span>Arizona State University, Tempe, AZ</span>
                    <span>3.82 GPA</span>
                </div>
                <div>Barrett, The Honors College</div>
                <div className="mt-1">
                    <span className="font-bold">Relevant coursework:</span> Hardware Design Languages and Programmable Logic, Advanced Excel in Business
                </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-4">
                <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Technical Skills</h2>
                <div className="grid grid-cols-[160px_1fr] gap-y-1">
                    <span className="font-bold">Data Analysis:</span>
                    <span>JMP, Minitab</span>
                    <span className="font-bold">Design Tools:</span>
                    <span>SOLIDWORKS, LabVIEW, MATLAB, Microsoft Office</span>
                    <span className="font-bold">Programming:</span>
                    <span>Python, C, C++</span>
                    <span className="font-bold">Certifications:</span>
                    <span>National Instruments Certified LabVIEW Associate Developer (CLAD) – August 2019</span>
                </div>
            </div>

            {/* Experience */}
            <div className="mb-4">
                <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Professional Experience</h2>

                <div className="mb-3">
                    <div className="flex justify-between font-bold">
                        <span>Stryker Solutions, Phoenix, AZ: Research & Dev Development Intern</span>
                        <span>May 2019 – Aug 2019</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Applied measurement system analysis (MSA) to qualify relocated test equipment (JMP, Python)</li>
                        <li>Authored three technical reports for relocated packaging equipment, following IQOQPQ guides (JMP, Excel)</li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between font-bold">
                        <span>Med Apps, Scottsdale, AZ: Quality Engineering Intern</span>
                        <span>May 2018 – Aug 2018</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Assessed equivalency of proposed alternate plastic packaging material (Minitab, Excel)</li>
                        <li>Created and delivered presentations to train field sales representatives on new product features (PowerPoint)</li>
                    </ul>
                </div>
            </div>

            {/* Projects */}
            <div className="mb-4">
                <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Academic Projects</h2>

                <div className="mb-3">
                    <div className="flex justify-between font-bold">
                        <span>Hand Cycle for Polio Victims</span>
                        <span>Fall 2019 – Spring 2020</span>
                    </div>
                    <p className="mb-1">Collaborated in a team of three to design model of custom hand cycle for polio victims (SOLIDWORKS).</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Developed team schedule, including quality measurement for each major milestone (Microsoft Project)</li>
                        <li>Ensured team compliance to Design Control Procedures according to Code of Federal Regulations (CFR)</li>
                        <li>Recognized by faculty audience as "Best Presentation" out of 15 teams</li>
                    </ul>
                </div>

                <div className="mb-3">
                    <div className="flex justify-between font-bold">
                        <span>Sensor for Quadriplegic Patients</span>
                        <span>Spring 2019</span>
                    </div>
                    <p className="mb-1">Led team of three to design and develop a mouse-like device to allow quadriplegic patients to use websites.</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Assessed range-of-motion data to determine feasible solutions (Python)</li>
                        <li>Created device to detect muscle flexion in neck to control the mouse click (Arduino, FPGA)</li>
                    </ul>
                </div>
            </div>

            {/* Other Work Experience */}
            <div className="mb-4">
                <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Other Work Experience</h2>
                <div className="mb-2">
                    <div className="flex justify-between font-bold">
                        <span>Arizona State University, Tempe, AZ: Tutor (10 hours/week)</span>
                        <span>Aug 2018 – May 2019</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1">
                        <li>Tutored 10-15 undergraduate engineering students per week in MATLAB programming and math coursework</li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between font-bold">
                        <span>Kohl's, Gilbert, AZ: Sales Associate, Jewelry Department (16-24 hours/week)</span>
                        <span>Aug 2017 – Dec 2017</span>
                    </div>
                    <ul className="list-disc pl-5 mt-1">
                        <li>Achieved #2 highest selling associate within one month of hire date</li>
                    </ul>
                </div>
            </div>

            {/* Activities */}
            <div>
                <h2 className="text-sm font-bold uppercase border-b border-black mb-2">Activities</h2>
                <div className="flex justify-between font-bold">
                    <span>ASU Society of Women Engineers (SWE)</span>
                    <span>Aug 2017 – Present</span>
                </div>
                <p>Multiple leadership roles, including vice-president and industry relations chair (300 members, $75k annual budget)</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Tutored 10-15 undergraduate engineering students per week in MATLAB programming and math coursework</li>
                    <li>Organized 2018 annual conference participation, including 8 student poster submissions</li>
                </ul>
            </div>
        </div>
    );
}

// Stats Components
function ScoreRing({ score, label }: { score: number; label: string }) {
    const circumference = 2 * Math.PI * 40;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-3">
                {/* Background Ring */}
                <svg className="w-full h-full rotate-[-90deg]">
                    <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-white/10"
                    />
                    {/* Progress Ring */}
                    <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="text-emerald-500"
                        style={{ filter: "drop-shadow(0 0 4px rgba(16, 185, 129, 0.5))" }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">{score}</span>
                    <span className="text-[10px] text-zinc-400">/ 100</span>
                </div>
            </div>
            <span className="text-emerald-400 font-bold text-sm">{label}</span>
        </div>
    );
}

function StatBar({ label, value, max, gradient }: { label: string; value: number; max: number; gradient: string }) {
    return (
        <div className="w-full">
            <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-300 font-medium">{label}</span>
                <span className="font-bold text-white">{value}/{max}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                    style={{
                        width: `${(value / max) * 100}%`,
                        boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)"
                    }}
                />
            </div>
        </div>
    );
}

export default function AIResumeBuilder() {
    const { openLogin } = useAuth();
    return (
        <section id="ai-resume-builder" className="relative py-24 overflow-hidden bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-vercel-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-vercel-amber-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
                        AI Resume Builder
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Our AI analyzes your resume just like an ATS system would, highlighting
                        strengths and areas for improvement to maximize your interview chances.
                    </p>
                </div>

                <div className="relative mx-auto mt-12 max-w-[1200px] h-[600px] sm:h-[700px]">
                    {/* Resume Background */}
                    <div className="absolute inset-0 flex justify-center overflow-hidden bg-zinc-900/50 rounded-xl border border-white/5">
                        <div className="mt-8 scale-[0.55] sm:scale-[0.85] origin-top transition-all duration-500">
                            <ResumeContent />
                        </div>
                        {/* Gradient Overlay for Fade Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                    </div>

                    {/* Floating Cards Container */}
                    <div className="absolute inset-0 z-20 pointer-events-none">

                        {/* Left Side: Insights */}
                        <div
                            className="absolute top-10 left-4 sm:left-10 w-[280px] sm:w-[320px] space-y-4 pointer-events-auto"
                        >
                            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl">
                                <div className="flex items-start gap-3 mb-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-sm font-bold text-emerald-500 mb-1">Strengths Identified</h3>
                                        <p className="text-xs text-zinc-300 leading-relaxed">
                                            Strong technical skills and quantified experience bullets with business impact.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl">
                                <div className="flex items-start gap-3 mb-2">
                                    <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-sm font-bold text-amber-500 mb-1">Improvement Suggestions</h3>
                                        <p className="text-xs text-zinc-300 leading-relaxed">
                                            Emphasize technical leadership and add production-level projects.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                                    <h3 className="text-sm font-bold text-emerald-400">How to Improve</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-xs space-y-1">
                                        <span className="text-red-400 font-semibold block">Weak:</span>
                                        <p className="text-zinc-500 pl-2 border-l-2 border-red-900/50 italic">
                                            'Developed a Spring Boot app with Docker on AWS EC2...'
                                        </p>
                                    </div>
                                    <div className="text-xs space-y-1">
                                        <span className="text-emerald-400 font-semibold block">Better:</span>
                                        <p className="text-zinc-300 pl-2 border-l-2 border-emerald-500/50">
                                            'Reduced deployment overhead by 40% through containerizing Spring Boot apps...'
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Score */}
                        <div
                            className="absolute top-10 right-4 sm:right-10 w-[280px] sm:w-[320px] pointer-events-auto"
                        >
                            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-2xl">
                                <div className="mb-6 flex justify-center">
                                    <ScoreRing score={93} label="Excellent Resume!" />
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BarChart className="w-4 h-4 text-zinc-400" />
                                        <span className="text-sm font-bold text-white">Category Breakdown</span>
                                    </div>
                                    <StatBar label="ATS" value={25} max={25} gradient="from-emerald-500 to-emerald-400" />
                                    <StatBar label="Content" value={32} max={35} gradient="from-emerald-500 to-emerald-400" />
                                    <StatBar label="Writing" value={9} max={10} gradient="from-emerald-500 to-emerald-400" />
                                    <StatBar label="Job Match" value={20} max={25} gradient="from-amber-500 to-orange-500" />
                                    <StatBar label="Ready" value={5} max={5} gradient="from-emerald-500 to-emerald-400" />
                                </div>

                                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="mb-3">
                                        <h4 className="text-sm font-bold text-white mb-1">AI Content Writer</h4>
                                        <p className="text-[10px] text-zinc-400">
                                            Generate metrics-driven bullets focused on technical skills and impact.
                                        </p>
                                    </div>
                                    <button
                                        onClick={openLogin}
                                        className="w-full py-2 bg-gradient-to-r from-vercel-orange-500 to-vercel-amber-500 text-white text-xs font-bold rounded hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
                                    >
                                        Build Your Resume Now
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper icon
function BarChart(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
    )
}
