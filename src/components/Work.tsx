import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { placeholder } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const myProjects = [
  {
    title: "My First Website",
    category: "Portfolio",
    tools: "HTML, CSS, JavaScript",
    image: "/images/project1.png",
    link: "https://bishnuneupane0.kesug.com"
  },
  {
    title: "Coming Soon",
    category: "TBA",
    tools: "TBA",
    image: "/images/coming-soon.png",
    link: "https://ynubsec.github.io"
  },
  {
    title: "Coming Soon",
    category: "TBA",
    tools: "TBA",
    image: "/images/coming-soon.png",
    link: "https://ynubsec.github.io"
  },
  {
    title: "Coming Soon",
    category: "TBA",
    tools: "TBA",
    image: "/images/coming-soon.png",
    link: "https://ynubsec.github.io"
  }
];

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {myProjects.map((project, index) => (
            <div className="work-box" key={index} onClick={() => window.open(project.link, "_blank")} style={{ cursor: "pointer" }}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
