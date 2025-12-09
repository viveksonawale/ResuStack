import { Hero } from "@/components/sections/hero";
import { ResumePreview } from "@/components/sections/resume-preview";
import { ATSAnalysis } from "@/components/sections/ats-analysis";
import { ResumeTemplates } from "@/components/sections/resume-templates";
import { CompanyLogos } from "@/components/sections/company-logos";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <Hero />

            {/* See Your Resume Through a Recruiter's Eyes */}
            <ResumePreview />

            {/* Upload Your Resume to Start for Free */}
            <ATSAnalysis />

            {/* Resume Templates Section */}
            <ResumeTemplates />

            {/* Build Resumes That Land Interviews At */}
            <CompanyLogos />

            {/* Pricing Section */}
            <Pricing />
        </div>
    );
}
