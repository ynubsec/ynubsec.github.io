import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cv from './bishnu-neupane-cv.pdf';
import profile from '../medias/profile.png';


function Hero() {
  const roles = [
    "Frontend Web Developer",
    "Python Developer",
    "Cybersecurity Learner",
  ];

  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);
  const [views, setViews] = useState('...');

  useEffect(() => {
    // Using counterapi.dev as countapi.xyz is unstable
    fetch('https://api.counterapi.dev/v1/ynubsec/portfolio/up')
      .then(res => res.json())
      .then(data => {
        console.log('View count response:', data);
        setViews(data.count);
      })
      .catch(err => {
        console.error('Error fetching view count:', err);
        setViews('999');
      });
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = roleIndex % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1500);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
      setDelta(200);
    } else {
      setDelta(prevDelta => (isDeleting ? 50 : 150));
    }
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-profile-wrapper">
            <div className="hero-img">
              <div className="view-count">
                <i className="fa-solid fa-eye" style={{ fontSize: '12px', color: 'white' }}></i>
                <span style={{ fontSize: '12px', color: 'white' }}>{views}</span>
              </div>
              <img src={profile} alt="Bishnu Neupane - Frontend Developer & Cybersecurity Enthusiast" />

            </div>

          </div>

          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name"><span style={{ textDecoration: 'underline', fontStyle: 'oblique' }}>Bishnu</span> <span style={{ textDecoration: 'underline', fontStyle: 'oblique' }}>Neupane</span></h1>

            <h2 className="role rotating-text">
              <span className="text">{text}</span>
            </h2>

            <p className="intro-text">
              A passionate +2 student from Kathmandu, dedicated to crafting
              beautiful web experiences and exploring the world of cybersecurity.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn primary-btn">
                <i className="fa-solid fa-code"></i>
                View Projects
              </Link>

              <Link to="/contact" className="btn secondary-btn">
                <i className="fa-solid fa-envelope"></i>
                Get in Touch
              </Link>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/bishnuneupane13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/in/bishnuneupane13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://bishnuneupane13.github.io/blogs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-blog"></i>
              </a>

            </div>

            {/* CV Download Button - Moved outside hero-social */}
            <a href={cv} download="bishnu-neupane-cv.pdf" className="cv-link">
              <div className="cv-download">
                <i className="fa-solid fa-download"></i>
                <span>Download CV</span>
              </div>
            </a>
          </div>
        </div>
      </section >
    </>
  );
}

export default Hero;
