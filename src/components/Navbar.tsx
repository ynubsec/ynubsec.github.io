import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

type SmootherLike = {
  paused: (value?: boolean) => boolean;
  scrollTop: (value?: number) => number;
  scrollTo: (target: string | Element | null, smooth?: boolean) => void;
};

let isPaused = false;
export let smoother: SmootherLike = {
  paused(value?: boolean) {
    if (typeof value === "boolean") {
      isPaused = value;
    }
    return isPaused;
  },
  scrollTop(value?: number) {
    if (typeof value === "number") {
      window.scrollTo({ top: value, behavior: "auto" });
      return value;
    }
    return window.scrollY;
  },
  scrollTo(target: string | Element | null, smooth = true) {
    if (isPaused) return;
    if (!target) return;
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;
    if (!element) return;
    element.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  },
};

const Navbar = () => {
  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true);
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/" className="navbar-title" data-cursor="disable">
          YNUBSEC
        </a>
        <a
          href="mailto:contact.ynub@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          contact.ynub@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a href="/projects" data-cursor="disable">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
