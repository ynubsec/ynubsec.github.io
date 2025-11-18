import "./notfound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="notfound-section">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you are looking for does not exist. It might have been
          removed or the URL is incorrect.
        </p>
        <button onClick={() => navigate("/")} className="home-btn">
          Go Back Home
        </button>
      </div>
    </section>
  );
}

export default NotFound;
