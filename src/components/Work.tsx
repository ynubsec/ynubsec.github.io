import "./styles/Work.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Work = () => {
  return (
    <div className="work-section" id="work" style={{ height: "auto", padding: "60px 0 60px 0", textAlign: "center" }}>
      <div className="work-container section-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ marginTop: "20px", marginBottom: "15px", fontSize: "clamp(30px, 4vw, 50px)" }}>
          My <span>Work</span>
        </h2>
        <p style={{ color: "#aaa", marginBottom: "30px", fontSize: "14px", maxWidth: "500px", lineHeight: "1.6" }}>
          Explore my latest frontend applications, cybersecurity research, and platform projects in a dedicated gallery.
        </p>
        <Link to="/projects" className="contact-btn" data-cursor="disable" style={{ display: "inline-flex" }}>
          View All Projects <MdArrowOutward />
        </Link>
      </div>
    </div>
  );
};

export default Work;
