import { BookOpen, CheckCircle } from "lucide-react";

const Thesis = () => {
    const points = [
        "Designed a multimodal late-fusion framework combining voice biomarkers and hand-drawn motor skill images for early Parkinson's disease detection.",
        "Voice Modality: Implemented Support Vector Machine (SVM) on Benspark voice dataset with SHAP-based explainability (Accuracy: 95.77%, F1: 95.75%, AUC: 0.982).",
        "Image Modality: Utilized EfficientNet-B0 for motor-skill image classification with Grad-CAM visualization (Accuracy: 94.00%, F1: 93.99%, AUC: 0.990).",
        "Multimodal Fusion: Achieved 98.20% Accuracy, 98.25% F1-score, and 0.995 AUC using late fusion strategy.",
    ];

    return (
        <section id="thesis" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="section-heading">
                        <span className="text-gradient">Thesis</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Academic Research & Publications
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="tech-card group p-8 rounded-2xl animate-fade-in flex flex-col justify-between hover:border-primary/40 transition-all border-border/10 bg-card/30 backdrop-blur-sm">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                                        <BookOpen className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">A Multimodal and Explainable AI Framework for Early Parkinson's Disease Detection</h3>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-[hsl(196,100%,46%,0.15)] border border-[hsl(196,100%,46%,0.4)] text-[hsl(196,100%,46%)] text-xs font-black shadow-lg">
                                    2025
                                </div>
                            </div>

                            <div className="space-y-4 ml-2">
                                <p className="text-lg font-bold text-foreground/90">Using Bangladeshi Voice and Hand-Drawn Motor Skill Data</p>

                                <div className="pt-4 space-y-4">
                                    {points.map((point, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                            <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thesis;
