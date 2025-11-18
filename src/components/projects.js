import { Link, useNavigate, useLocation } from "react-router-dom";

function Project() {
    return (
        <>
        <div className='projects' id="projects">
        <p>
          Welcome to my project portfolio! Here you’ll find a curated selection
          of work that highlights my passion for coding, web development, and cybersecurity.
        </p>
        <button className="btn" ><Link to="/projects"> View Projects</Link></button>
      </div>

      </>
    );
}

export default Project;