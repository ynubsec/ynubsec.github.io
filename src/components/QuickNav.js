import { Link } from 'react-router-dom';

function QuickNav() {
    return (
        <div className="quick-nav">
            <a href="https://bishnuneupane13.github.io/blogs/" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-solid fa-newspaper"></i>
                <span>Blogs</span>
            </a>
            <a href="https://github.com/bishnuneupane13" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/bishnuneupane13" target="_blank" rel="noopener noreferrer" className="quick-nav-item">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
            </a>
            <Link to="/gallery" className="quick-nav-item">
                <i className="fa-solid fa-images"></i>
                <span>Gallery</span>
            </Link>
        </div>
    );
}

export default QuickNav;
