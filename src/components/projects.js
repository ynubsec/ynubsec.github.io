import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <div className='projects' id="projects">
        <p>
          Check out my projects showcasing web development and coding skills.
        </p>
        <button className="btn"><Link to="/projects">View Projects</Link></button>
      </div>
    </>
  );
}

export default Project;