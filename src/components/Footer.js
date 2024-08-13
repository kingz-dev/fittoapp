import { Link } from "react-router-dom";
import Fbicon from "../assets/fb-icon.svg";
import Lnicon from "../assets/icon-linkedin 2.svg";
import Yticon from "../assets/youtube-logo-2431 2.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="copyright">&copy; CareerX ElitePath</p>
      <p className="social">
        <Link to="/" className="logo">
          <img src={Fbicon} alt="Fitto Logo" />
        </Link>
        <Link to="/" className="logo">
          <img src={Lnicon} alt="Fitto Logo" />
        </Link>
        <Link to="/" className="logo">
          <img src={Yticon} alt="Fitto Logo" />
        </Link>
      </p>
      <p className="brand">{currentYear} Fitto - All Rights Reserved</p>
    </footer>
  );
};
