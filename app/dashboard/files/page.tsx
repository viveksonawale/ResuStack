"use client"
import { TableRowActions } from "@/components/dashboard/TableRowActions";
import { Button } from "@/components/ui/button";
import { FileText, Search, Layout, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { FilePreviewDialog } from "@/components/shared/FilePreviewDialog";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";

const initialFiles = [
    { id: 1, name: "Software_Engineer_Resume_vf.pdf", type: "Resume", template: "Modern Gradient", date: "Mar 10, 2024", status: "Ready", data: null },
    { id: 2, name: "Cover_Letter_Spotify.docx", type: "Cover Letter", template: "Clean Formal", date: "Mar 12, 2024", status: "Draft", data: null },
    { id: 3, name: "ATS_Report_March.pdf", type: "ATS Report", template: "-", date: "Mar 15, 2024", status: "Complete", data: null },
];

export default function MyFilesPage() {
    const [files, setFiles] = useState<any[]>(initialFiles);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<any | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const storedFiles = localStorage.getItem("my_files");
        if (storedFiles) {
            try {
                const parsed = JSON.parse(storedFiles);
                // Merge logic: prefer stored files for dynamic ones, keep initials as demo if needed?
                // Actually initialFiles are just demos, we can just show them or not.
                // Let's prepend stored files.
                setFiles([...parsed, ...initialFiles]);
            } catch (e) {
                console.error("Error loading files", e);
            }
        }
    }, []);

    const handleView = (file: any) => {
        setSelectedFile(file);
        setPreviewOpen(true);
    };

    const handleEdit = (file: any) => {
        if (file.type === "Resume") {
            // Load this resume data into local storage for the builder to pick up
            // WARNING: This overwrites current draft. In a real app we'd use IDs.
            if (file.data) {
                localStorage.setItem("resume_data", JSON.stringify(file.data));
            }
            router.push("/builder");
        } else if (file.type === "Cover Letter") {
            router.push("/dashboard/cover-letter");
        } else if (file.type === "ATS Report") {
            // ATS is not really editable in the same way, maybe just view?
            handleView(file);
        }
    };

    const handleDelete = (id: any) => {
        const newFiles = files.filter(f => f.id !== id);
        setFiles(newFiles);
        // Persist deletion
        // We only persist the ones that came from local storage (not initial IDs 1,2,3 ideally)
        // But for simplicity let's just save the new list excluding initial demos if we want to be strict,
        // or just re-save the non-initial ones.
        // A simpler way for this mock: just update localStorage with the subset of files that are NOT in initialFiles.
        const filesToPersist = newFiles.filter(f => !initialFiles.find(i => i.id === f.id));
        localStorage.setItem("my_files", JSON.stringify(filesToPersist));
    };

    const handleDownload = (file: any) => {
        // Trigger generic print/download logic
        // For now, just open preview which has download button
        handleView(file);
    };

    return (
        <div className="space-y-6 animate-fade-in-up pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">My Library</h1>
                    <p className="text-sm text-muted-foreground">Manage your generated documents.</p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            className="h-10 pl-9 pr-4 rounded-xl bg-white/5 border border-white/10 text-sm w-full md:w-64 focus:bg-white/10 transition-all outline-none focus:border-primary/50"
                            placeholder="Search files..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/20 backdrop-blur-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-muted-foreground font-medium text-xs uppercase tracking-wider border-b border-white/5">
                            <tr>
                                <th className="p-4 pl-6">File Name</th>
                                <th className="p-4">Type</th>
                                <th className="p-4">Template</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredFiles.map((file) => (
                                <tr key={file.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="p-4 pl-6 font-medium flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                            <FileText className="h-4 w-4" />
                                        </div>
                                        {file.name}
                                    </td>
                                    <td className="p-4 text-muted-foreground">{file.type}</td>
                                    <td className="p-4 text-muted-foreground flex items-center gap-2">
                                        {file.template !== "-" && <Layout className="h-3 w-3 opacity-50" />}
                                        {file.template}
                                    </td>
                                    <td className="p-4 text-muted-foreground">{file.date}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${file.status === "Ready" || file.status === "Complete" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                            }`}>
                                            {file.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <TableRowActions
                                            onView={() => handleView(file)}
                                            onEdit={() => handleEdit(file)}
                                            onDownload={() => handleDownload(file)}
                                            onDelete={() => handleDelete(file.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                            {filteredFiles.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-muted-foreground">
                                        No files found. Create your first resume!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <FilePreviewDialog
                open={previewOpen}
                onOpenChange={setPreviewOpen}
                file={selectedFile}
            />
        </div>
    );
}
