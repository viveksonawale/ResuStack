import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MoreVertical, Download, Edit, Trash } from "lucide-react";
import Link from "next/link";

const resumes = [
    { id: 1, name: "Software Engineer - Backend", updatedAt: "2 hours ago", score: 92 },
    { id: 2, name: "Full Stack Developer Application", updatedAt: "2 days ago", score: 85 },
    { id: 3, name: "General Resume 2024", updatedAt: "1 week ago", score: 78 },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">My Resumes</h2>
                    <p className="text-muted-foreground">Manage and edit your resumes.</p>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Create New Card */}
                <Link href="/builder" className="group">
                    <Card className="h-full border-dashed flex flex-col items-center justify-center p-8 hover:border-primary hover:bg-muted/10 transition-colors cursor-pointer">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Create New Resume</h3>
                        <p className="text-sm text-muted-foreground text-center mt-1">Start from scratch or use a template</p>
                    </Card>
                </Link>

                {resumes.map((resume) => (
                    <Card key={resume.id} className="flex flex-col">
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                            <div className="space-y-1">
                                <CardTitle className="text-base font-semibold line-clamp-1" title={resume.name}>
                                    {resume.name}
                                </CardTitle>
                                <CardDescription>Edited {resume.updatedAt}</CardDescription>
                            </div>
                            <Button variant="ghost" size="icon" className="-mr-2 -mt-2">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="flex-1 py-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">ResuStack Score</span>
                                <span className={`font-bold ${resume.score >= 90 ? 'text-green-600' : resume.score >= 80 ? 'text-primary' : 'text-yellow-600'}`}>
                                    {resume.score}
                                </span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted mt-2">
                                <div
                                    className={`h-2 rounded-full ${resume.score >= 90 ? 'bg-green-600' : resume.score >= 80 ? 'bg-primary' : 'bg-yellow-600'}`}
                                    style={{ width: `${resume.score}%` }}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="border-t p-4 gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                                <Edit className="mr-2 h-4 w-4" /> Edit
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
