import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../logo.png';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <button className="home-link" onClick={() => scrollToSection("home")}>
          <img src={logo} className="navbar-logo" alt="Logo" />
          <span className="navbar-title">Bishnu Neupane</span>
        </button>
      </div>
      <ul className="navbar-links">
        <li className="link"><button className="home-link" onClick={() => scrollToSection("home")}><a>Home</a></button></li>
        <li className="link"><button className="home-link" onClick={() => scrollToSection("about")}><a>About</a></button></li>
        <li className="link"><Link to="/projects">Projects</Link></li>
        <li className="link"><Link to="/skills">Skills</Link></li>
        <li className="link"><button className="home-link" onClick={() => scrollToSection("contact")}><a>Contact</a></button></li>
      </ul>
    </nav>
  );
}

export default Nav;