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
import Dreams from "./components/Dreams.js";
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


function DreamsPage() {
  return (
    <>
      <Dreams />
      <Footer />
    </>
  );
}


function GalleryPage() {
  return (
    <>
      <div className="gallery-layout" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        padding: '20px'
      }}>



        <Photos />

        <div style={{ width: '100%', marginTop: '40px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '30px',
            color: '#fff',
            fontFamily: "'Inter', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '2px',
            background: 'linear-gradient(to right, #fff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Profile Card
          </h2>

          {/* Profile Card Section with Background */}
          <section style={{
            width: '100%',
            maxWidth: '1200px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            padding: '60px 20px',
            overflow: 'hidden',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            margin: '0 auto'
          }}>
            {/* Background Image Layer */}
            <div style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6) contrast(1.2)',
              zIndex: 0
            }}></div>

            {/* Content Layer */}
            <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
              <ProfileCard
                name="Ynub"
                github="https://github.com/ynubsec"
                linkedin="https://linkedin.com/in/ynubsec"
              />
            </div>
          </section>
        </div>

      </div >
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
          <Route path="/dreams" element={<DreamsPage />} />
          <Route path="/gallary" element={<GalleryPage />} />
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