import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // const isAuth = true;
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/profile");
    });
  }

  function handleLogout() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
    navigate("/");
  }

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Fitto Logo" />
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/profile" className="link">
              Profile
            </NavLink>
            <NavLink to="/workout" className="link">
              Workout
            </NavLink>
            <button onClick={handleLogout} className="auth">
              <i className="bi bi-box-arrow-right"></i>
              Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i>
            Login
          </button>
        )}
      </nav>
    </header>
  );
};
