

function Footer() { 
    return (
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
    );
}   

export default Footer;