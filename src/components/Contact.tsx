import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        
        <div className="contact-hero">
          <p className="contact-eyebrow">— Interested in collaborating?</p>
          <h2 className="contact-title">
            Let's build something <br />
            <span>extraordinary</span>.
          </h2>
          <a href="mailto:contact.ynub@gmail.com" className="contact-btn" data-cursor="disable">
            Get in touch <MdArrowOutward />
          </a>
        </div>

        <div className="contact-grid">
          <div className="contact-box">
            <h4>Contact Details</h4>
            <div className="contact-details-wrap">
              <p>
                <a href="mailto:contact.ynub@gmail.com" data-cursor="disable">
                  contact.ynub@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+9779749797697" data-cursor="disable">
                  +977 9749797697
                </a>
              </p>
            </div>
          </div>
          
          <div className="contact-box">
            <h4>Socials</h4>
            <div className="contact-social-wrap">
              <a href="https://github.com/ynubsec" target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
                Github <MdArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/ynubsec" target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
                Linkedin <MdArrowOutward />
              </a>
              <a href="https://x.com/ynubsec" target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
                Twitter <MdArrowOutward />
              </a>
              <a href="https://www.instagram.com/bishnuneupane13/" target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
                Instagram <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <h5>
            <MdCopyright /> <span>{new Date().getFullYear()} YNUBSEC</span>. All rights reserved.
          </h5>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="back-to-top" data-cursor="disable">
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
