import "./project.css";
import project1 from './project1.png';
import comingsoon from './coming-soon.png';
import notfound from '../../page-not-found.js';

function Projects() {
 


  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <p>
        Welcome to my project portfolio! Here you’ll find a curated selection
        of work that highlights my passion for coding, web development, and cybersecurity.
      </p>
      


      <div className="projects-container">
        <div className="project-item">
          <img src={project1} alt="Project 1" />
          <h3>My first Website</h3>

          <p>
            A responsive website built with HTML, CSS , JavaScript to showcase my skills,
            projects, and contact information.
          </p>
          <button className="btn"><a href="https://bishnuneupane0.kesug.com" target="_blank" rel="noopener noreferrer">View Project</a></button>
        </div>
          <div className="project-item">
             <img src={comingsoon} alt="Project 2" />
          <h3>Coming Soon.....</h3>
          <p>
            I am working on more exciting projects! Stay tuned for updates.
          </p>
          <button className="btn"><a href="notfound" target="_blank" rel="noopener noreferrer">View Project</a></button>
        </div>
          <div className="project-item">
             <img src={comingsoon} alt="Project 3" />
          <h3>Coming Soon.....</h3>
          <p>
            I am working on more exciting projects! Stay tuned for updates.
          </p>
          <button className="btn"><a href="notfound" target="_blank" rel="noopener noreferrer">View Project</a></button>
        </div>
          <div className="project-item">
             <img src={comingsoon} alt="Project 4" />
          <h3>Coming Soon.....</h3>
          <p>
            I am working on more exciting projects! Stay tuned for updates.
          </p>
          <button className="btn"><a href="notfound" target="_blank" rel="noopener noreferrer">View Project</a></button>
        </div>
      </div>
    </section>
  );
}

export default Projects;