import { NavLink, Link } from 'react-router-dom';

function QuickNav() {
    return (
        <div className="quick-nav">
            <a href="https://ynubsec.github.io/blogs/" target="_blank" rel="noopener noreferrer" className="quick-nav-item" aria-label="Blogs and Writeups" title="Blogs and Writeups">
                <i className="fa-solid fa-newspaper"></i>
                <span>Blogs and Writeups</span>
            </a>
            <a href="https://github.com/ynubsec" target="_blank" rel="noopener noreferrer" className="quick-nav-item" aria-label="GitHub" title="GitHub">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/ynubsec" target="_blank" rel="noopener noreferrer" className="quick-nav-item" aria-label="LinkedIn" title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
            </a>

            <Link to="/gallary" className="quick-nav-item" aria-label="Gallery" title="Gallery">
                <i className="fa-solid fa-images"></i>
                <span>Gallery</span>
            </Link>
            <NavLink
                to="/reviews"
                className={({ isActive }) =>
                    `quick-nav-item${isActive ? ' active' : ''}`
                }
                aria-label="Reviews"
                title="Reviews"
            >
                <i className="fa-solid fa-star"></i>
                <span>Reviews</span>
            </NavLink>
        </div >
    );
}

export default QuickNav;
