import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from './components/hero.js';
import About from './components/about.js';
import Project from './components/projects.js';
import Pro from './components/navs/project.js';
import Skills from './components/navs/skills.js'; 
import Footer from './components/footer.js';
import Nav from './components/navbar.js';

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
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <Project />
      <Photos />
      <section id="contact"><Footer /></section>
      
    
    </>
  );
}

function SkillsPage() {
  return (
    <>
      <Skills />
      <Project />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;