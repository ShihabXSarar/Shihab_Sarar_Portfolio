import "./styles/ResumeSection.css";

const ResumeSection = () => {
  const driveFileId = "1OKiGY2VqMk4RCGNh1f3jUb4s-hXaE6d-";
  const previewUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;
  const downloadUrl = `https://drive.google.com/file/d/${driveFileId}/view`;

  return (
    <div className="resume-section" id="resume">
      <div className="resume-left">
        <h2 className="title">
          M<span className="hat-h2">Y</span>
          <div>
            R<span className="do-h2">ESUME</span>
          </div>
        </h2>
      </div>
      <div className="resume-right">
        <div className="resume-viewer">
          <div className="resume-glow"></div>
          <div className="resume-frame">
            <div className="resume-corner resume-corner-tl"></div>
            <div className="resume-corner resume-corner-tr"></div>
            <div className="resume-corner resume-corner-bl"></div>
            <div className="resume-corner resume-corner-br"></div>
            <iframe
              src={previewUrl}
              title="Shihab Sarar Resume"
              className="resume-iframe"
              allow="autoplay"
            ></iframe>
          </div>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download-btn"
          >
            <span>View Full Resume</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
