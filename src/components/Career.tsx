import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science</h4>
                <h5>Presidency University Bangladesh</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Computer Science and Engineering. CGPA: 3.55. Relevant coursework: DSA, Operating Systems, DBMS, ML, Network Security.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ICPC Asia Dhaka Regionalist</h4>
                <h5>ACM ICPC</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Participated as a regionalist in the prestigious ACM ICPC Asia Dhaka Regional contest, demonstrating expert problem-solving skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain Olympiad Bangladesh</h4>
                <h5>Honorable Mention</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Awarded Honorable Mention in the AI category at Blockchain Olympiad Bangladesh 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
