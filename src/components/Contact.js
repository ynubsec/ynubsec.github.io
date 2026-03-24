import ContactForm from './ContactForm';
import Maps from './maps';

function Contact() {
    return (
        <section className="contact-page">
            <div className="contact-header">
                <h1>Get In Touch</h1>
                <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Info</h2>

                    <div className="contact-links">
                        <a href="mailto:contact.ynub@gmail.com" className="contact-link-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>contact.ynub@gmail.com</span>
                        </a>
                        <a href="https://github.com/ynubsec" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <i className="fa-brands fa-github"></i>
                            <span>ynubsec</span>
                        </a>
                        <a href="https://linkedin.com/in/ynubsec" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <i className="fa-brands fa-linkedin"></i>
                            <span>ynubsec</span>
                        </a>
                    </div>

                    <Maps />
                </div>

                <div className="contact-form-wrapper">
                    <h2>Send a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;
