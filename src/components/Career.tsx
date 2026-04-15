import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer & Automation</h4>
                <h5>Self Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started with Python, focusing on scripting and automation.
              Built tools for data parsing, file automation, and wrote custom
              scripts for network recon and security testing workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Self Learning / Collage</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed clean, user-focused web applications using HTML, CSS,
              JavaScript and React. Focused on delivering fast, responsive
              interfaces — including the YNUBSEC platform and personal portfolio.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Specialist</h4>
                <h5>Self Learning</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Actively pursuing cybersecurity with hands-on practice in
              penetration testing, ethical hacking, and vulnerability assessment
              using tools like Kali Linux, Burp Suite, and Nmap. Building toward
              a professional career in offensive security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
