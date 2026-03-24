import "./skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <p>
        Below are the technologies, tools, and disciplines I work with. I
        focus on writing clean, maintainable, and scalable code while blending
        design, logic, security, and performance into complete digital
        experiences.
      </p>

      <div className="skills-list">
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h1>HTML</h1>
            <p>
              Semantic HTML is the foundation of everything I build. I use it
              to create accessible, SEO-friendly, and well-organized pages.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h1>CSS</h1>
            <p>
              I use CSS to build responsive layouts, layered visuals, motion,
              and polished interactions with Flexbox, Grid, and animations.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h1>JavaScript</h1>
            <p>
              JavaScript powers the interactivity in my projects. I write
              modular ES6+ code, work with APIs, and build dynamic interfaces.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h1>React</h1>
            <p>
              React is my primary framework for building modern web
              applications with reusable components, hooks, and routing.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h1>Python</h1>
            <p>
              Python helps me with automation, backend development, and
              cybersecurity workflows.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="Cybersecurity"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h1>Cybersecurity</h1>
            <p>
              I explore ethical hacking, Linux tools, network security, and
              secure coding practices to build safer digital experiences.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h1>Git & GitHub</h1>
            <p>
              I use Git for version control, branching, merging, and keeping a
              clean workflow across projects.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h1>VS Code</h1>
            <p>
              VS Code is my main development environment for building, testing,
              and iterating quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
