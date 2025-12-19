"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ResumePreview } from "@/components/builder/ResumePreview";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useUser } from "@/components/providers/user-provider";
import { useToast } from "@/components/ui/toast";
import { CoverLetterPreview } from "@/components/builder/CoverLetterPreview";
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  PDFDownloadLink 
} from '@react-pdf/renderer';

// --- PDF STYLES ---
const styles = StyleSheet.create({
  page: { padding: 30, backgroundColor: '#ffffff' },
  section: { marginBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#2563eb' },
  text: { fontSize: 12, marginBottom: 5 }
});

// --- PDF DOCUMENT COMPONENT ---
const MyResumePDF = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.name}>{data?.name || "Resume"}</Text>
        <Text style={styles.text}>{data?.email || ""}</Text>
        {/* You can map more data fields here later */}
      </View>
    </Page>
  </Document>
);

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
  const printRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Fix for Next.js Hydration: Ensure PDF only renders on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!file) return null;

  const isResume = file.type === "Resume";
  const isCoverLetter = file.type === "Cover Letter";
  const isATS = file.type === "ATS Report";

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

            {/* ✅ NEW PDF DOWNLOAD LOGIC */}
            {isClient && (isResume || isCoverLetter) ? (
              <PDFDownloadLink
                document={<MyResumePDF data={file.data} />}
                fileName={`${file.name || 'document'}.pdf`}
              >
                {({ loading }) => (
                  <Button size="sm" disabled={loading} className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 lg:mr-2" />
                    <span className="hidden lg:inline">
                      {loading ? "Generating..." : "Download PDF"}
                    </span>
                  </Button>
                )}
              </PDFDownloadLink>
            ) : (
                <Button size="sm" variant="outline" disabled>
                    <Download className="h-4 w-4 lg:mr-2" />
                    <span className="hidden lg:inline">Download PDF</span>
                </Button>
            )}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-8 bg-zinc-900/50">
          {(isResume || isCoverLetter) && file.data && (
            <div className="flex justify-center">
              <div
                ref={printRef}
                style={{
                  width: "210mm",
                  minHeight: "297mm",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
                className="pdf-safe shadow-2xl p-8"
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
            <div className="max-w-3xl mx-auto space-y-6 text-white">
               {/* ATS UI Content - Kept from your original code */}
               <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-400">{file.data.score}/100</div>
                    <div className="text-xs text-muted-foreground uppercase">Score</div>
                  </div>
                  {/* ... other ATS stats ... */}
               </div>
               {/* ... Strength/Weakness section ... */}
            </div>
          )}

          {!isResume && !isATS && !isCoverLetter && (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Preview not available for this file type.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}