import "./skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <p>
        Below are the technologies, tools, and disciplines I work with. I focus
        on writing clean, maintainable, and scalable code while blending design,
        logic, security, and performance together to build complete digital
        experiences.
      </p>

      <div className="skills-list">
        {/* HTML */}
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            width="50"
            height="50"
          />
          <h1>HTML</h1>
          <p>
            HTML is the structural foundation of everything I build. I follow
            semantic HTML practices to ensure accessibility, SEO optimization,
            and well-organized content. From forms to multimedia layouts, I
            craft pages that are clean, meaningful, and optimized for all
            devices.
          </p>
        </div>

        {/* CSS */}
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            width="50"
            height="50"
          />
          <h1>CSS</h1>
          <p>
            CSS is my tool for bringing ideas to life visually. I create modern,
            responsive designs using Flexbox, Grid, animations, transitions, and
            advanced selectors. I write clean, scalable code using BEM
            conventions and also work with preprocessors like SCSS to maintain
            large designs efficiently.
          </p>
        </div>

        {/* JavaScript */}
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            width="50"
            height="50"
          />
          <h1>JavaScript</h1>
          <p>
            JavaScript powers interactivity in my projects. I write modular
            ES6+ code, use async/await for asynchronous operations, work with
            APIs, and build dynamic user interfaces. From DOM manipulation to
            building complex logic systems, JavaScript is the core of my
            front-end development.
          </p>
        </div>

        {/* React */}
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            width="50"
            height="50"
          />
          <h1>React</h1>
          <p>
            React is my primary framework for building modern web applications.
            I develop reusable components, manage state using hooks and context,
            and implement routing with React Router. I also optimize performance
            using memoization, lazy loading, and dynamic imports while
            integrating APIs and third-party libraries.
          </p>
        </div>

        {/* Python */}
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            width="50"
            height="50"
          />
          <h1>Python</h1>
          <p>
            Python is my tool for automation, data processing, backend
            development, and cybersecurity workflows. I use libraries like NumPy
            and Pandas, build REST APIs with Flask, and create automation scripts
            to simplify complex tasks. It's also the core of my exploration in
            ethical hacking and problem-solving.
          </p>
        </div>

        {/* Cybersecurity */}
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="Cybersecurity"
            width="50"
            height="50"
          />
          <h1>Cybersecurity</h1>
          <p>
            I follow secure coding practices, understand encryption protocols,
            and stay updated with vulnerabilities like SQL Injection, XSS, CSRF,
            and brute-force attacks. I explore ethical hacking, penetration
            testing, Linux tools, and network security to build safe and
            protected digital environments.
          </p>
        </div>

        {/* Git & GitHub */}
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
            width="50"
            height="50"
          />
          <h1>Git & GitHub</h1>
          <p>
            I use Git for version control, branching, merging, and collaborative
            development. GitHub helps me manage projects, track issues, and
            publish live demos. I follow clean commit messages and maintain an
            organized workflow for every project.
          </p>
        </div>

        {/* VS Code */}
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code"
            width="50"
            height="50"
          />
          <h1>VS Code</h1>
          <p>
            VS Code is my main development environment. I use extensions for
            productivity, debugging tools, integrated terminal, linting systems,
            and version control to write efficient and error-free code across
            various languages and frameworks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
