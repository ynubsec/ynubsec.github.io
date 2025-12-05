function About() {
  return (
    <>
      <section className="about-us" id="about">
        <h2>About Me</h2>

        <div className="about-grid">
          {/* Education */}
          <div className="about-card">
            <div className="about-card-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>Education</h3>
            <p>
              +2 student from Kathmandu, Nepal. Passionate about technology and currently
              exploring the world of programming.
            </p>
          </div>

          {/* Skills */}
          <div className="about-card">
            <div className="about-card-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3>Skills</h3>
            <p>
              Frontend: React, JavaScript, HTML5, CSS3<br />
              Backend: Python<br />
              Tools: Git, VS Code
            </p>
          </div>

          {/* Interests */}
          <div className="about-card">
            <div className="about-card-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Interests</h3>
            <p>
              Cybersecurity enthusiast learning about network security and ethical hacking.
              Love experimenting with Linux systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
