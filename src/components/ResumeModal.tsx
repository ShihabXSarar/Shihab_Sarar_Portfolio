import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    if (!isOpen) return null;

    const resumeUrl = "https://drive.google.com/file/d/17miD_0ucVKyNsNBpMAbIWG35gcS0Puli/preview";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=17miD_0ucVKyNsNBpMAbIWG35gcS0Puli";
    const viewUrl = "https://drive.google.com/file/d/17miD_0ucVKyNsNBpMAbIWG35gcS0Puli/view?usp=sharing";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div
                className="bg-card w-full max-w-5xl h-[90vh] rounded-xl shadow-2xl flex flex-col border border-border/50 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                    <h2 className="text-xl font-semibold text-foreground">My Resume</h2>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                            <a href={viewUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Open in Drive
                            </a>
                        </Button>
                        <Button variant="default" size="sm" asChild>
                            <a href={downloadUrl} download>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-muted/50">
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-muted/20 relative overflow-hidden rounded-b-xl">
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
