import "./styles/WhatIDo.css";

const ThesisSection = () => {
  return (
    <div className="whatIDO thesis-section" id="thesis">
      <div className="what-box">
        <h2 className="title">
          M<span className="hat-h2">Y</span>
          <div>
            T<span className="do-h2">HESIS</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in thesis-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div className="what-content thesis-card">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in thesis-content-in">
              <h3>PARKINSON'S DISEASE DETECTION</h3>
              <h4>A Multimodal & Explainable AI Framework</h4>
              <p>
                Designed a multimodal late-fusion framework combining voice
                biomarkers and hand-drawn motor skill images for early
                detection. Achieved <strong style={{ color: "var(--accentColor)" }}>98.20% Accuracy</strong>,{" "}
                <strong style={{ color: "var(--accentColor)" }}>98.25% F1-score</strong>, and{" "}
                <strong style={{ color: "var(--accentColor)" }}>0.995 AUC</strong>.
              </p>
              <h5>Key Technologies</h5>
              <div className="what-content-flex">
                <div className="what-tags">SVM</div>
                <div className="what-tags">EfficientNet-B0</div>
                <div className="what-tags">SHAP</div>
                <div className="what-tags">Grad-CAM</div>
                <div className="what-tags">Late Fusion</div>
                <div className="what-tags">Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThesisSection;
