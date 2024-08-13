import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";
import NotFound from "../assets/images/page-not-found.jpg";

export const PageNotFound = () => {
  useTitle("PageNotFound");

  return (
    <section className="pageNotFound">
      <img src={NotFound} alt="Page Not Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  );
};
