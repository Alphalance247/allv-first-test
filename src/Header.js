import logos from "./assets/logoimage.svg";
import { Link } from "react-router-dom";
import react from "react";

const Header = () => {
  const [activeLink, setActiveLink] = react.useState("");
  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="head">
      <img height={50} src={logos} alt="Alluvium" />

      <ul>
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
          className={`Nav__link ${
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
