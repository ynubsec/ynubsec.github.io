function About() {
  return (
    <section className="about-us" id="about">
      {/* BIO TEXT (VERY IMPORTANT FOR GOOGLE) */}
      <header className="about-header">
        <h1>About Me</h1>
        <p>
          I am a frontend developer and cybersecurity enthusiast from
          Kathmandu, Nepal. I am passionate about building modern web applications,
          learning security concepts, and exploring new technologies and also web pentesting with red teaming.
        </p>
      </header>

      <div className="about-grid">
        {/* Education */}
        <div className="about-card">
          <div className="about-card-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <h2>Education</h2>
          <p>
            +2 student from Kathmandu, Nepal, actively learning computer science,
            programming fundamentals, and real-world development practices.
          </p>
        </div>

        {/* Skills */}
        <div className="about-card">
          <div className="about-card-icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <h2>Skills</h2>
          <p>
            <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3<br />
            <strong>Backend:</strong> Python<br />
            <strong>Tools:</strong> Git, VS Code
          </p>
        </div>

        {/* Interests */}
        <div className="about-card">
          <div className="about-card-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h2>Interests</h2>
          <p>
            Cybersecurity enthusiast exploring ethical hacking, Linux systems,
            networking basics, and secure web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
