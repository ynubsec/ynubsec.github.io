import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from './components/hero.js';
import About from './components/about.js';
import Pro from './components/navs/project.js';
import Skills from './components/navs/skills.js';
import Footer from './components/footer.js';
import Nav from './components/navbar.js';
import QuickNav from './components/QuickNav.js';
import Contact from './components/Contact.js';
import { Privacy, Terms } from './pages';
import ProfileCard from './components/ProfileCard';
import './App.css';
import Photos from "./components/photos.js";
import Reviews from "./components/reviews.js";
import NotFound from "./page-not-found.js";

import bg from "./medias/bmw.jpg";


function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}


function HomePage() {
  return (
    <>
      <QuickNav />
      <Hero />
      <About />

      <Footer />
    </>
  );
}


function SkillsPage() {
  return (
    <>
      <Skills />
      <Footer />
    </>
  );
}



function GalleryPage() {
  return (
    <>
      <div className="gallery-layout" style={{ backgroundColor: '#000000', padding: '20px',marginLeft:"10px" }}>
        <Photos />

        <div className="gallery-profile-area" style={{ marginLeft: "6rem" }}>
          <h2 className="gallery-profile-title">Profile Card</h2>

          <section className="gallery-profile-stage">
            <div
              className="gallery-profile-stage-bg"
              style={{ backgroundImage: `url(${bg})` }}
            />

            <div className="gallery-profile-stage-content">
              <ProfileCard
                name="Bishnu Neupane"
                github="https://github.com/ynubsec"
                linkedin="https://linkedin.com/in/ynubsec"
                role="Frontend Developer | Cybersecurity Learner"
                bio="Building polished, responsive websites while learning security, systems, and modern frontend craft."
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}


function ContactPage() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToHash />

      <div className="root">
        <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Pro />} />
        <Route path="/skills" element={<SkillsPage />} />

        <Route path="/gallary" element={<GalleryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
          <Route path="/card" element={<ProfileCard />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;
