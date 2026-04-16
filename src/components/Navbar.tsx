import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
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

const getCookieValue = (name: string) => {
  const key = `${name}=`;
  const row = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(key));
  return row ? decodeURIComponent(row.slice(key.length)) : "";
};

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
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectsPage = location.pathname === "/projects";
  const shouldRestoreHomeScroll =
    location.pathname === "/" && getCookieValue("restoreHomeScroll") === "1";

  useEffect(() => {
    if (!shouldRestoreHomeScroll) {
      smoother.scrollTop(0);
    }
    smoother.paused(true);

    const onResize = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [shouldRestoreHomeScroll]);

  // Check if hash exists on mount and scroll to it
  useEffect(() => {
    if (location.hash && !isProjectsPage) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Wait for render
    }
  }, [location.pathname, location.hash, isProjectsPage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (window.innerWidth <= 1024) return;
    
    e.preventDefault();
    const targetEl = document.querySelector(hash);
    
    if (targetEl) {
      // Element is on current page, smooth scroll directly
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Element is on different page, use client-side router navigation
      navigate(`/${hash}`);
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      {isProjectsPage ? (
        <div className="header header-projects">
          <button
            type="button"
            className="navbar-back navbar-back-button"
            data-cursor="disable"
            onClick={handleBackClick}
            aria-label="Back to home"
          >
            <span className="navbar-back-icon" aria-hidden="true">←</span>
            <span className="navbar-back-text">Back to Home</span>
          </button>
        </div>
      ) : (
        <>
          <div className="header">
            <Link to="/" className="navbar-title" data-cursor="disable">
              YNUBSEC
            </Link>
            <a
              href="mailto:contact.ynub@gmail.com"
              className="navbar-connect"
              data-cursor="disable"
            >
              contact.ynub@gmail.com
            </a>
            <ul>
              <li>
                <a href="/#about" onClick={(e) => handleNavClick(e, "#about")} data-cursor="disable">
                  <HoverLinks text="ABOUT" />
                </a>
              </li>
              <li>
                <Link to="/projects" data-cursor="disable">
                  <HoverLinks text="PROJECTS" />
                </Link>
              </li>
              <li>
                <a href="/#contact" onClick={(e) => handleNavClick(e, "#contact")} data-cursor="disable">
                  <HoverLinks text="CONTACT" />
                </a>
              </li>
            </ul>
          </div>

          <div className="landing-circle1"></div>
          <div className="landing-circle2"></div>
          <div className="nav-fade"></div>
        </>
      )}
    </>
  );
};

export default Navbar;
