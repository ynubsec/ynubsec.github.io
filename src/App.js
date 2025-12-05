import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import './App.css';
import Photos from "./components/photos.js";
import NotFound from "./page-not-found.js";

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
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
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
      <div className="gallery-page">
        <h1 className="gallery-title">Photo Gallery</h1>
        <p className="gallery-desc">A collection of photos and memories from my journey.</p>
      </div>
      <Photos />
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
    <BrowserRouter>
      <ScrollToHash />

      <div className="root">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Pro />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;