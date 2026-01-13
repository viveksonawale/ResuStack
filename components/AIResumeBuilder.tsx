"use client";


import { CheckCircle2, Lightbulb, ScanLine } from "lucide-react";
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
                        <li>Recognized by faculty audience as &quot;Best Presentation&quot; out of 15 teams</li>
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
                        <span>Kohl&apos;s, Gilbert, AZ: Sales Associate, Jewelry Department (16-24 hours/week)</span>
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
        <section id="ai-resume-builder" className="relative pt-12 pb-0 overflow-hidden bg-black scroll-mt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vercel-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vercel-amber-500/10 rounded-full blur-[120px] pointer-events-none" />


            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6 tracking-tight">
                        AI Resume Builder
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Our AI analyzes your resume just like an ATS system would, highlighting
                        strengths and areas for improvement to maximize your interview chances.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Resume Preview (7 cols) */}
                    <div className="xl:col-span-7 flex justify-center xl:justify-end order-2 xl:order-1">
                        <div className="relative scale-[0.4] xs:scale-[0.45] sm:scale-[0.6] md:scale-[0.7] lg:scale-[0.8] origin-top xl:origin-top-left transition-all duration-300 hover:scale-[0.42] xs:hover:scale-[0.47] sm:hover:scale-[0.62] md:hover:scale-[0.72] lg:hover:scale-[0.82] group mb-[-600px] xs:mb-[-550px] sm:mb-[-450px] md:mb-[-350px] lg:mb-[-250px] xl:mb-0">
                            <div className="absolute -inset-1 bg-gradient-to-r from-vercel-orange-500 to-vercel-amber-500 rounded-lg opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300" />
                            <div className="relative shadow-2xl">
                                <ResumeContent />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Analysis & Action (5 cols) */}
                    <div className="xl:col-span-5 space-y-6 order-1 xl:order-2 w-full max-w-lg mx-auto xl:max-w-none xl:sticky xl:top-24">

                        {/* 1. Overall Score Card */}
                        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl transform transition-all hover:border-emerald-500/30">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Resume Score</h3>
                                    <p className="text-zinc-400 text-sm">Your resume is optimized</p>
                                </div>
                                <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-bold text-emerald-400">Excellent</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 mb-8">
                                <ScoreRing score={93} label="" />
                                <div className="flex-1 space-y-3">
                                    <StatBar label="ATS Parsability" value={25} max={25} gradient="from-emerald-500 to-emerald-400" />
                                    <StatBar label="Impact & Content" value={32} max={35} gradient="from-emerald-500 to-emerald-400" />
                                    <StatBar label="Keywords" value={20} max={25} gradient="from-amber-500 to-orange-500" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Insights Card */}
                        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-4">AI Insights</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                                    <div className="bg-emerald-500/10 p-2 rounded-lg h-fit">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-emerald-400 mb-1">Strong Impact</h4>
                                        <p className="text-xs text-zinc-400 leading-relaxed">
                                            Excellent use of action verbs and quantified metrics to demonstrate business value.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                                    <div className="bg-orange-500/10 p-2 rounded-lg h-fit">
                                        <Lightbulb className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-orange-400 mb-1">Suggestion</h4>
                                        <p className="text-xs text-zinc-400 leading-relaxed">
                                            Consider adding a section for &quot;Projects&quot; to highlight hands-on experience with modern tools.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Action Card */}
                        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-6 rounded-2xl shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-vercel-orange-500/10 rounded-full blur-2xl group-hover:bg-vercel-orange-500/20 transition-all duration-500" />

                            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Optimize Your Resume</h3>
                            <p className="text-sm text-zinc-400 mb-6 relative z-10">
                                Use our AI-powered builder to fix these issues and increase your interview chances by 3x.
                            </p>

                            <button
                                onClick={openLogin}
                                className="w-full py-3.5 bg-gradient-to-r from-vercel-orange-500 to-vercel-amber-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 relative z-10"
                            >
                                <ScanLine className="w-4 h-4" />
                                Build Optimized Resume
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


