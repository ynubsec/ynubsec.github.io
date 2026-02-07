import { NavLink, Link } from 'react-router-dom';

function QuickNav() {
    return (
        <div className="quick-nav">
            <a href="https://ynubsec.github.io/blogs/" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-solid fa-newspaper"></i>
                <span>Blogs</span>
            </a>
            <a href="https://github.com/ynubsec" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/ynubsec" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
            </a>
            <Link to="/dreams" className="quick-nav-item">
                <i className="fa-solid fa-rocket"></i>
                <span>Dreams</span>
            </Link>
            <Link to="/gallary" className="quick-nav-item">
                <i className="fa-solid fa-images"></i>
                <span>Gallery</span>
            </Link>
            <NavLink exact to="/reviews" className="quick-nav-item" activeClassName="active">
                <i className="fa-solid fa-star"></i>
                <span>Reviews</span>
            </NavLink>
        </div >
    );
}

export default QuickNav;
