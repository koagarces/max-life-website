import "../styles/header.css";
import Logo from "../assets/Bernies-Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logoBox">
        <Link className="homeLink" to={`/`}>
          <img className="logo" src={Logo} />
        </Link>
      </div>
      <div className="navbar">
        <Link className="links" to={`/`}>
          HOME
        </Link>
        <Link className="links" to={`/about`}>
          ABOUT
        </Link>
        <Link className="links" to={`/`}>
          CATALOG
        </Link>
        <Link className="links" to={`/`}>
          CONTACTS
        </Link>
      </div>
    </div>
  );
};

export default Header;
