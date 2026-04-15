import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import Cursor from "../components/Cursor";
import Contact from "../components/Contact";
import WorkImage from "../components/WorkImage";
import "../components/styles/Work.css";
import "./Projects.css";

const myProjects = [
  {
    title: "My First Website",
    category: "Portfolio",
    tools: "HTML, CSS, JavaScript",
    image: "/images/project1.png",
    link: "https://bishnuneupane0.kesug.com",
    year: "2024",
    status: "Live",
  },
  {
    title: "Coming Soon",
    category: "NA",
    tools: "NA",
    image: "/images/coming-soon.png",
    link: "/projects",
    year: "NA",
    status: "In Progress",
  },
  {
    title: "Coming Soon",
    category: "NA",
    tools: "NA",
    image: "/images/coming-soon.png",
    link: "/projects",
    year: "NA",
    status: "In Progress",
  },
  {
    title: "Coming Soon",
    category: "NA",
    tools: "NA",
    image: "/images/coming-soon.png",
    link: "/projects",
    year: "NA",
    status: "In Progress",
  },
];

const categories = ["All", ...Array.from(new Set(myProjects.map((p) => p.category)))];

const Projects = () => {
  const [active, setActive] = useState("All");

  useEffect(() => {
    document.title = "Projects | YNUBSEC";
    // Override the global `body { overflow: hidden }` from index.css
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const filtered = active === "All"
    ? myProjects
    : myProjects.filter((p) => p.category === active);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />

      <div className="proj-page">
        {/* ── Header ── */}
        <div className="work-container section-container proj-header">
          <h2>My <span>Work</span></h2>
          <p className="proj-subtitle">A collection of projects I've built and shipped.</p>
        </div>

        {/* ── Filter Buttons ── */}
        <div className="proj-filters section-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`proj-filter-btn ${active === cat ? "proj-filter-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
              <span className="proj-filter-count">
                {cat === "All"
                  ? myProjects.length
                  : myProjects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Cards — exact work-box style ── */}
        <div className="work-section proj-work-section">
          <div className="work-container section-container">
            <div className="work-flex proj-work-flex">
              {filtered.map((project, index) => (
                <div
                  key={index}
                  className="work-box"
                  onClick={() => window.open(project.link, "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  <div className="work-info">
                    <div className="work-title">
                      <h3>0{index + 1}</h3>
                      <div>
                        <h4>{project.title}</h4>
                        <p>{project.category} · {project.year}</p>
                      </div>
                    </div>

                    <p>{project.tools}</p>
                  </div>
                  <WorkImage image={project.image} alt={project.title} />
                </div>
              ))}

              {filtered.length === 0 && (
                <p className="proj-empty">No projects in this category yet.</p>
              )}
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default Projects;
