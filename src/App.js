import logo from './logo.png';
import profile from './profile.png';
import pic from './pic.png';
import './App.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';

function App() {
    const roles = [
    "Frontend Web Developer",
    "Python Developer",
    "Cybersecurity Learner",
    "Technology Explorer",
  ];

  setTimeout(() => {
    let index = 0;
    const element = document.querySelector(".rotating-text .text");

    function rotateText() {
      element.classList.remove("typing");
      setTimeout(() => {
        element.textContent = roles[index];
        element.classList.add("typing");
        index = (index + 1) % roles.length;
      }, 200);
    }

    rotateText();
    setInterval(rotateText, 2500);
  }, 100);

  return (
    <div className="Home">

      {/* --- Navbar --- */}
      <nav className="navbar">
        <div className="navbar-logo-container">
          <a href='#home' className='home-link'>
            <img src={logo} className="navbar-logo" alt="Logo" />
            <span className="navbar-title">Bishnu Neupane</span>
          </a>
        </div>

        <ul className="navbar-links">
          <li className="link"><a href="#home">Home</a></li>
          <li className="link"><a href="#about">About</a></li>
          <li className="link"><a href="#projects">Projects</a></li>
          <li className="link"><a href="#experience">Skills/Experience</a></li>
          <li className="link"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* --- Hero Section --- */}
<section className="hero" id="home">
  <div className="hero-text">
    <h1>
      <span className="highlight1">Hello, I’m </span>
      <span className="highlight">Bishnu Neupane</span>
    </h1>

    {/* --- ROTATING ROLE TEXT --- */}
    <h2 className="role rotating-text">
      <span className="text"></span>
    </h2>

    <p className="intro-text">
      I am a +2 student from Kathmandu, passionate about coding, Python,
      web development (HTML, CSS,  JS, React), and cybersecurity.
    </p>

    <div className="hero-buttons">
      <button className="btn"><a href='projects.js'>View Work</a></button>
      <button className="btn-outline"><a href='#contact'>Contact Me</a></button>
    </div>
  </div>

  <div className="hero-img">
    <img src={profile} alt="Profile" />
  </div>
</section>


      <div className='line'></div>

      {/* --- About Section --- */}
      <section className="about-us" id="about">
        <h2><u>About Me</u></h2>

        <div className="about-content" style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px" }}>
          
          <div className="hero-img2">
            <img src={image4} alt="Profile" />
          </div>

          {/* --- VS CODE STYLE BLOCK HERE --- */}
          <div className="code-block">
            <p>
➳ I am a +2 student from Kathmandu, passionate about coding, Python, web development (HTML, Tailwind CSS, React), and cybersecurity.
</p>
            <p>
➳ I am constantly learning new technologies, building interactive web projects, and exploring ways to grow my skills as a developer.
</p>

            <p>
➳ I also focus on maintaining a healthy lifestyle, balancing studies with hobbies, and managing social media and personal growth effectively.
 </p>
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <div className='projects' id="projects">
        <p>
          Welcome to my project portfolio! Here you’ll find a curated selection
          of work that highlights my passion for coding, web development, and cybersecurity.
        </p>
        <a href="#" className="btn">View Projects</a>
      </div>

      {/* --- Photo Gallery --- */}
      <div className="others">
        <h2 className="photo-title">Photo Gallery</h2>

        <div className="photo-wrapper">
          <button className="scroll-btn left" onClick={() => {
            document.querySelector(".photos").scrollBy({ left: -100, behavior: "smooth" });
          }}>‹</button>

          <div className="photos">
            <img src={image3} style={{ marginLeft: "300px" }} alt="img1" />
            <img src={logo} alt="img2" />
            <img src={image4} alt="img3" />
            <img src={pic} alt="img4" />
            <img src={image2} alt="img5" />
            <img src={image1} alt="img6" />
            <img src={profile} alt="img7" />
            <img src={image5} style={{ marginRight: "300px" }} alt="img8" />
          </div>

          <button className="scroll-btn right" onClick={() => {
            document.querySelector(".photos").scrollBy({ left: 100, behavior: "smooth" });
          }}>›</button>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <h2 className="footer-title">Contact Me</h2>

          <p className="footer-text">
            Feel free to reach out for collaborations, projects, opportunities, or just to say hello!
          </p>

          <div className="footer-contact">
            <p className="footer-contact-item">
              <input type="text" placeholder="Your Name" className="footer-input" />
            </p>
            <p className="footer-contact-item">
              <input type="email" placeholder="Your Email" className="footer-input" />
            </p>
            <p className="footer-contact-item">
              <textarea placeholder="Your Message" className="footer-textarea"></textarea>
            </p>
            <p>
              <button className="btn footer-btn">Send Message</button>
            </p>
          </div>

          <div className="footer-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gwbishnu10@gmail.com&su=Hello&body=I%20am%20interested%20in%20your%20work" className="footer-link">( Email )</a>
            <a href="https://instagram.com/bishnuneupane13" className="footer-link">( Instagram )</a>
            <a href="https://github.com/bishnuneupane13" className="footer-link">( GitHub )</a>
            <a href="https://linkedin.com/in/bishnuneupane13" className="footer-link">( LinkedIn )</a>
          </div>

          <p className="footer-bottom">© 2025 Bishnu Neupane • <u>All Rights Reserved</u></p>
        </div>
      </footer>

    </div>
  );
}

export default App;
