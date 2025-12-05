import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-simple">
      <div className="footer-simple-content">
        <div className='footer-rules'>
          <Link to="/privacy" className="footer-link">Privacy</Link>
          <Link to="/terms" className="footer-link">Terms</Link>
        </div>
        <p className="footer-copyright">© 2025 Bishnu Neupane. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;