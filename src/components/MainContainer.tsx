import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TechStack = lazy(() => import("./TechStack"));
const HOME_SCROLL_COOKIE = "homeScrollY";
const HOME_RESTORE_COOKIE = "restoreHomeScroll";

const getCookieValue = (name: string) => {
  const key = `${name}=`;
  const row = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(key));
  return row ? decodeURIComponent(row.slice(key.length)) : "";
};

const setCookieValue = (name: string, value: string, maxAgeSeconds: number) => {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
};

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const shouldRestore = getCookieValue(HOME_RESTORE_COOKIE) === "1";
    if (shouldRestore) {
      const saved = Number(getCookieValue(HOME_SCROLL_COOKIE) || 0);
      const top = Number.isFinite(saved) ? saved : 0;
      requestAnimationFrame(() => {
        window.scrollTo({ top, behavior: "auto" });
        requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
        });
      });
      setCookieValue(HOME_RESTORE_COOKIE, "0", 60 * 60 * 24 * 7);
    }

    return () => {
      setCookieValue(HOME_SCROLL_COOKIE, String(window.scrollY), 60 * 60 * 24 * 7);
      setCookieValue(HOME_RESTORE_COOKIE, "1", 60 * 60 * 24 * 7);
    };
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setCookieValue(HOME_SCROLL_COOKIE, String(window.scrollY), 60 * 60 * 24 * 7);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
