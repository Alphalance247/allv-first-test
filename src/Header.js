import logos from "./assets/logoimage.svg";
import { Link } from "react-router-dom";
import react from "react";

const Header = () => {
  const [activeLink, setActiveLink] = react.useState("");
  const [showMenu, setShowMenu] = react.useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="nav--button">
        <img height={50} src={logos} alt="Alluvium" />
        <button className="mobile-menu-icon" onClick={handleMenu}>
          {showMenu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>

      <ul
        className={showMenu ? "nav--links-mobile" : "nav--links"}
        onClick={() => setShowMenu(false)}
      >
        <Link
          className={`Nav__link ${activeLink === "/" ? "Active__link" : ""}`}
          to="/"
          onClick={() => handleClick("/")}
        >
          <li>HOME</li>
        </Link>
        <Link
          className={`Nav__link ${
            activeLink === "/Blog" ? "Active__link" : ""
          }`}
          to="/Blog"
          onClick={() => handleClick("/Blog")}
        >
          <li>BLOG</li>
        </Link>
        <Link
          className={`Nav__link  ${
            activeLink === "/Contact" ? "Active__link" : ""
          }`}
          to="/Contact"
          onClick={() => handleClick("/Contact")}
        >
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
