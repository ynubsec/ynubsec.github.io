import ContactForm from './ContactForm';

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

                    {/* Map */}
                    <div className="contact-map">
                        <iframe
                            title="Kathmandu map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.65322908587!2d85.24372937986102!3d27.708935956543698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1763564234519!5m2!1sen!2snp"
                            width="100%"
                            height="200"
                            style={{ border: 0, borderRadius: '10px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
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
