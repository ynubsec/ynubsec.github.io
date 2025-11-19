
import image4 from '../image4.jpg';

function About() {
    return (
        <>
              {/* --- About Section --- */}
      <section className="about-us" id="about">
        <h2><u>About Me</u></h2>

        <div className="about-content" style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "20px" }}>
          
          <div className="hero-img2">
            <img src={image4} alt="Profile" />
          </div>

          
 
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
          </>
);
}

export default About;
