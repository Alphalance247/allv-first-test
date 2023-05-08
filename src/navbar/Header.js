import logos from "../assets/logoimage.svg";
import { Link } from "react-router-dom";
import react from "react";
import NavModule from "./navbar.module.scss";

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
    <div className={NavModule.navbar}>
      <div className={NavModule.navButton}>
        <img height={50} src={logos} alt="Alluvium" />
        <button className={NavModule.mobileMenuIcon} onClick={handleMenu}>
          {showMenu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>

      <ul
        className={showMenu ? NavModule.navLinksMobile : NavModule.navLinks}
        onClick={() => setShowMenu(false)}
      >
        <Link
          className={`${NavModule.Nav__link} ${
            activeLink === "/" ? NavModule.Active__link : ""
          }`}
          to="/"
          onClick={() => handleClick("/")}
        >
          <li>HOME</li>
        </Link>
        <Link
          className={`${NavModule.Nav__link} ${
            activeLink === "/Blog" ? NavModule.Active__link : ""
          }`}
          to="/Blog"
          onClick={() => handleClick("/Blog")}
        >
          <li>BLOG</li>
        </Link>
        <Link
          className={`${NavModule.Nav__link}  ${
            activeLink === "/Contact" ? NavModule.Active__link : ""
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
