import { Link } from "react-router-dom";
import "../global.css";
import logo from "../images/mi-logo.png"; // ✅ FIX

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="MI Logo" className="logo" />
        <h2 className="team-name">Mumbai Indians</h2>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/players">Players</Link>
        <Link to="/matches">Matches</Link>
          <button
    className="fan-btn"
    onClick={() => {
      const section = document.querySelector(".fan-poll-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Fan Poll
  </button>
      </div>
    </nav>
  );
};

export default Navbar;