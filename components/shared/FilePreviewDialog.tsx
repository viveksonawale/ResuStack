"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ResumePreview } from "@/components/builder/ResumePreview";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";+6


// import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
// import html2pdf from "html2pdf.js";

import { useUser } from "@/components/providers/user-provider";
import { useToast } from "@/components/ui/toast";
import { CoverLetterPreview } from "@/components/builder/CoverLetterPreview";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';


interface FilePreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  file: any | null;
}

export function FilePreviewDialog({
  open,
  onOpenChange,
  file,
}: FilePreviewDialogProps) {
  const { user } = useUser();
  const { displayToast } = useToast();
  const printRef = useRef<HTMLDivElement>(null);

  // const handlePrint = useReactToPrint({
  //     contentRef: printRef,
  //     documentTitle: file?.name || "document",
  //     onAfterPrint: () => displayToast("File downloaded successfully", "success"),
  // });

  if (!file) return null;

  const isResume = file.type === "Resume";
  const isCoverLetter = file.type === "Cover Letter";
  const isATS = file.type === "ATS Report";

  // import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// 1. Define the shape of your resume data
interface ResumeData {
  name: string;
  email?: string;
  // Add other fields you are using...
}

// 2. Apply the type to the MyResume component
const MyResume = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.name}>{data.name}</Text>
      </View>
    </Page>
  </Document>
);

// 3. Inside your Dialog/Component, fix the PDFDownloadLink
// Make sure to type 'loading' which is a boolean
<PDFDownloadLink 
  document={<MyResume data={data} />} 
  fileName={`${file.name}.pdf`}
>
  {({ loading }: { loading: boolean }) => 
    loading ? 'Preparing PDF...' : 'Download Now'
  }
</PDFDownloadLink>
  const handleDownload = async () => {
  if (!printRef.current) return;

  try {
    // ✅ CLIENT-ONLY import
    const html2pdf = (await import("html2pdf.js")).default;

    const options = {
  margin: 0,
  image: { type: "jpeg" as const, quality: 1 },
  html2canvas: { 
    scale: 3, 
    useCORS: true,
    // This is the magic fix 
    onclone: (clonedDoc: Document) => {
      const elements = clonedDoc.getElementsByTagName("*");
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i] as HTMLElement;
        const style = window.getComputedStyle(el);

        // If the element has a color using oklch or lab, force it to a safe value
        if (style.color.includes("oklch") || style.color.includes("lab")) {
          el.style.color = "inherit"; 
        }
        if (style.backgroundColor.includes("oklch") || style.backgroundColor.includes("lab")) {
          // You can set this to 'transparent' or a specific hex like '#ffffff'
          el.style.backgroundColor = "white"; 
        }
      }
    }
  },
  jsPDF: {
    unit: "mm" as const,
    format: "a4" as const,
    orientation: "portrait" as const,
  },
};
    const pdfBlob = await html2pdf()
      .from(printRef.current)
      .set(options)
      .outputPdf("blob");

    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${file.name}.pdf`;
    a.click();
    URL.revokeObjectURL(url);

  } catch (err) {
    console.error(err);
  }
};


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col bg-[#0f111a] border-white/10 text-white p-0 mt-13 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-white/10 flex flex-row items-center justify-between shrink-0">
          <DialogTitle>{file.name}</DialogTitle>
          <div className="ml-auto mr-8 flex items-center gap-2">
            {isCoverLetter && user.accountType !== "premium" && (
              <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                Premium Only
              </span>
            )}
            <Button size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 lg:mr-2" />
              <span className="hidden lg:inline">Download PDF</span>
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-8 bg-zinc-900/50">
          {(isResume || isCoverLetter) && file.data && (
            <div className="flex justify-center">
              {/* Wrapper for print ref to ensure we capture the whole node with styles */}
             <div
  ref={printRef}
  style={{
    width: "210mm",
    minHeight: "297mm",
    backgroundColor: "#ffffff",
    color: "#000000",
  }}
  className="pdf-safe"
>
  <div className="w-full">
    {isResume ? (
                    <ResumePreview
                      data={file.data}
                      template={file.template || "clean"}
                    />
                  ) : (
                    <CoverLetterPreview
                      data={file.data}
                      template={file.template || "clean"}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {isATS && file.data && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {file.data.score}/100
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">
                    Score
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {file.data.match}%
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">
                    Match
                  </div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {file.data.grammar}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">
                    Grammar
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Analysis Results</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-emerald-400 text-sm font-medium mb-2">
                      Strengths
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                      {file.data.goodPoints?.map((p: string, i: number) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-rose-400 text-sm font-medium mb-2">
                      Weaknesses
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                      {file.data.badPoints?.map((p: string, i: number) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isResume && !isATS && (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Preview not available for this file type.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
