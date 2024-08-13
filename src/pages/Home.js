import { useTitle } from "../hooks/useTitle";
import Shoeguy from "../assets/images/tie-shoe.png";
import Gicon from "../assets/g-logo.png";
import "./Home.css";
import { SubCard } from "../components/SubCard";

export const Home = () => {
  useTitle("Home");
  const isAuth = JSON.parse(localStorage.getItem("isAuth") || false);
  return (
    <>
      <section className="home-section">
        <div className="fitto-main">
          <div className="fitto-welcome-text">
            <h1>FITTO</h1>
            <h2>Hey, user!</h2>
            <p>Welcome to the Next Generation</p>
            <p>
              Fitness with{" "}
              <span className="fitto-highlight">FITTO Web App</span>
            </p>
            {isAuth ? (
              <></>
            ) : (
              <>
                <button className="continue">
                  <img src={Gicon} alt="Google icon" />
                  Continue with Google
                </button>
              </>
            )}
          </div>
          <div className="fitto-image">
            <img src={Shoeguy} alt="Man tying shoes" />
          </div>
        </div>
        <div className="fitto-continue"></div>
      </section>
      <section className="fittoNs">
        <h2>Subscribe to get a customized plan immediately!</h2>
        <div className="newsletter-container">
          <SubCard />
        </div>
      </section>
    </>
  );
};
