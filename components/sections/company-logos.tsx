"use client";

import SlidingLogoMarquee from "@/components/ui/sliding-logo-marquee";

const companies = [
    {
        name: "Google",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
        ),
    },
    {
        name: "Meta",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#0866FF" />
            </svg>
        ),
    },
    {
        name: "Apple",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Amazon",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.406-3.045.61-4.516.61-2.265 0-4.463-.42-6.588-1.265-2.11-.84-3.937-1.99-5.43-3.43-.18-.16-.18-.31 0-.43l.002-.01.002.01-.002-.01zm17.005-3.347c-.99-1.27-1.96-2.38-2.91-3.34-.94-.94-1.59-1.58-1.96-1.91-.37-.33-.61-.59-.74-.77-.13-.18-.14-.37-.04-.58.1-.21.48-.34 1.16-.37.68-.03 1.57.1 2.67.38 1.1.28 2.07.73 2.91 1.34.84.61 1.56 1.41 2.17 2.4.6.99.9 2.09.9 3.3 0 1.21-.3 2.31-.9 3.3-.6.99-1.33 1.79-2.17 2.4-.84.61-1.81 1.06-2.91 1.34-1.1.28-1.99.41-2.67.38-.68-.03-1.06-.16-1.16-.37-.1-.21-.09-.4.04-.58.13-.18.37-.44.74-.77.37-.33 1.02-.97 1.96-1.91.94-.94 1.92-2.05 2.91-3.34zm-6.01-3.347c-.99 1.27-1.96 2.38-2.91 3.34-.94.94-1.59 1.58-1.96 1.91-.37.33-.61.59-.74.77-.13.18-.14.37-.04.58.1.21.48.34 1.16.37.68.03 1.57-.1 2.67-.38 1.1-.28 2.07-.73 2.91-1.34.84-.61 1.56-1.41 2.17-2.4.6-.99.9-2.09.9-3.3 0-1.21-.3-2.31-.9-3.3-.6-.99-1.33-1.79-2.17-2.4-.84-.61-1.81-1.06-2.91-1.34-1.1-.28-1.99-.41-2.67-.38-.68.03-1.06.16-1.16.37-.1.21-.09.4.04.58.13.18.37.44.74.77.37.33 1.02.97 1.96 1.91.94.94 1.92 2.05 2.91 3.34z" fill="#FF9900" />
            </svg>
        ),
    },
    {
        name: "Netflix",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z" fill="#E50914" />
            </svg>
        ),
    },
    {
        name: "Microsoft",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" fill="#00A4EF" />
            </svg>
        ),
    },
    {
        name: "Spotify",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="#1DB954" />
            </svg>
        ),
    },
    {
        name: "Uber",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.146 14.604H13.39v-5.28h3.756v5.28zM8.61 9.324H6.854v5.28H8.61V9.324z" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Airbnb",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.2c-5.6 0-10.2-4.6-10.2-10.2S6.4 1.8 12 1.8s10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2zm4.8-10.2c0 2.6-2.1 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-1.3.5-2.5 1.4-3.4L12 5.2l3.4 3.4c.9.9 1.4 2.1 1.4 3.4z" fill="#FF5A5F" />
            </svg>
        ),
    },
    {
        name: "Stripe",
        icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="#635BFF" />
            </svg>
        ),
    },
];

export function CompanyLogos() {
    return (
        <section className="relative w-full overflow-hidden bg-[#050816] py-16 md:py-32">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_#050816_100%)]" />

            <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
                {/* Heading Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                        Build Resumes That Land Interviews At
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Create resumes optimized for roles at leading organizations
                    </p>
                </div>


                {/* Lightswind Sliding Logo Marquee */}
                <SlidingLogoMarquee
                    items={companies.map((company) => ({
                        id: company.name,
                        content: company.icon,
                    }))}
                    speed={50}
                    pauseOnHover={true}
                    blurEdges={true}
                    blurWidth="150px"
                    itemClassName="mx-6"
                />

                {/* Feature List */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base">
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg
                            className="h-5 w-5 text-green-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>ATS-optimized formats</span>
                    </div>

                    <div className="hidden sm:block h-1 w-1 rounded-full bg-gray-600" aria-hidden="true" />

                    <div className="flex items-center gap-2 text-gray-300">
                        <svg
                            className="h-5 w-5 text-green-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Industry-specific templates</span>
                    </div>

                    <div className="hidden sm:block h-1 w-1 rounded-full bg-gray-600" aria-hidden="true" />

                    <div className="flex items-center gap-2 text-gray-300">
                        <svg
                            className="h-5 w-5 text-green-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>AI-powered optimization</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
