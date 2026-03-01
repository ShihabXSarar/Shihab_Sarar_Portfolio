import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    if (!isOpen) return null;

    const resumeUrl = "https://drive.google.com/file/d/1OKiGY2VqMk4RCGNh1f3jUb4s-hXaE6d-/preview";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1OKiGY2VqMk4RCGNh1f3jUb4s-hXaE6d-";
    const viewUrl = "https://drive.google.com/file/d/1OKiGY2VqMk4RCGNh1f3jUb4s-hXaE6d-/view?usp=sharing";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
            <div
                className="bg-card w-full max-w-5xl h-[95vh] sm:h-[90vh] rounded-xl shadow-2xl flex flex-col border border-primary/20 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border/30 shrink-0">
                    <h2 className="text-base sm:text-xl font-semibold text-foreground">My Resume</h2>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <Button variant="outline" size="sm" asChild className="hidden sm:flex border-primary/30 text-primary hover:bg-primary/10 text-xs">
                            <a href={viewUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                                Open in Drive
                            </a>
                        </Button>
                        {/* Mobile: just show icon buttons */}
                        <Button variant="outline" size="icon" asChild className="sm:hidden border-primary/30 text-primary hover:bg-primary/10 h-8 w-8">
                            <a href={viewUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </Button>
                        <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90 text-xs hidden sm:flex">
                            <a href={downloadUrl} download>
                                <Download className="w-3.5 h-3.5 mr-1.5" />
                                Download
                            </a>
                        </Button>
                        <Button variant="default" size="icon" asChild className="sm:hidden bg-primary hover:bg-primary/90 h-8 w-8">
                            <a href={downloadUrl} download>
                                <Download className="w-3.5 h-3.5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-muted/50 h-8 w-8 touch-target">
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-muted/10 relative overflow-hidden rounded-b-xl">
                    <iframe
                        src={resumeUrl}
                        className="w-full h-full border-0"
                        title="Resume Preview"
                        allow="autoplay"
                    />
                </div>
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
};

export default ResumeModal;
