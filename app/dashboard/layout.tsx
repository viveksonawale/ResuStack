import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { FileText, LayoutTemplate, Settings, LogOut, Plus, User } from "lucide-react";

const sidebarLinks = [
    { name: "My Resumes", href: "/dashboard", icon: FileText },
    { name: "Templates", href: "/dashboard/templates", icon: LayoutTemplate },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 border-r bg-muted/20 flex flex-col">
                <div className="h-16 flex items-center px-6 border-b">
                    <Logo />
                </div>
                <div className="flex-1 py-6 px-4 space-y-2">
                    <Link href="/builder">
                        <Button className="w-full justify-start mb-6" size="lg">
                            <Plus className="mr-2 h-4 w-4" /> New Resume
                        </Button>
                    </Link>
                    <nav className="space-y-1">
                        {sidebarLinks.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <Button variant="ghost" className="w-full justify-start">
                                    <link.icon className="mr-2 h-4 w-4" />
                                    {link.name}
                                </Button>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="p-4 border-t">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            JD
                        </div>
                        <div className="text-sm">
                            <p className="font-medium">John Doe</p>
                            <p className="text-xs text-muted-foreground">john@example.com</p>
                        </div>
                    </div>
                    <Button variant="outline" className="w-full justify-start text-muted-foreground">
                        <LogOut className="mr-2 h-4 w-4" /> Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 border-b flex items-center justify-between px-6 md:px-8">
                    <h1 className="font-semibold text-lg">Dashboard</h1>
                    <div className="md:hidden">
                        {/* Mobile menu trigger would go here */}
                    </div>
                </header>
                <div className="flex-1 p-6 md:p-8 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
