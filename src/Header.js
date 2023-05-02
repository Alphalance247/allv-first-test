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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="menu--button"
          onClick={handleMenu}
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg> */}
      </div>

      <ul
        className={showMenu ? "nav--links-mobile" : "nav--links"}
        onClick={() => setShowMenu(false)}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="back--button"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg> */}
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
