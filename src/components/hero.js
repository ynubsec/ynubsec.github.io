import profile from '../profile.png';


function Hero() {
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
        <>
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
      <button className="btn"><a href='/projects'>View Work</a></button>
      <button className="btn-outline"><a href='#contact'>Contact Me</a></button>
    </div>
  </div>

  <div className="hero-img">
    <img src={profile} alt="Profile" />
  </div>
</section>


      <div className='line'></div>
        </>
    );
}

export default Hero;    