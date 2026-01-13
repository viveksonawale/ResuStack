"use client";


import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import OnboardingProgress from "@/components/dashboard/OnboardingProgress";
import StatsGrid from "@/components/dashboard/StatsGrid";
import QuickActions from "@/components/dashboard/QuickActions";
import FeatureGrid from "@/components/dashboard/FeatureGrid";
import RecentDocuments from "@/components/dashboard/RecentDocuments";

export default function DashboardPage() {
    return (
        <>
            <WelcomeHeader />

            <OnboardingProgress />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area (2 cols) */}
                <div className="lg:col-span-3">
                    <StatsGrid />
                    <QuickActions />
                    <FeatureGrid />
                    <RecentDocuments />
                </div>
            </div>
        </>
    );
}
