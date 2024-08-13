import { doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const FitCard = ({ pro, toggle, setToggle }) => {
  const { id, fitnessLevel, fitnessGoal, userId } = pro;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  const navigate = useNavigate();

  async function handleDelete() {
    const document = doc(db, "profile", id);
    await deleteDoc(document);
    toast.info("Boosting Immune System is never easy!", {
      theme: "dark",
    });

    setTimeout(() => {
      setToggle(!toggle);
      navigate("/profile");
    }, 3000);
  }

  return (
    <div className="fitcard-container">
      {isAuth && userId === auth.currentUser.uid && (
        <>
          <p>
            <strong>Fitness Level:</strong> {fitnessLevel}
          </p>
          <p className="goal">
            <strong>Fitness Goal:</strong> {fitnessGoal}
          </p>
          <span onClick={handleDelete} className="delete-icon">
            <i className="bi bi-x-circle"></i>
          </span>
        </>
      )}
    </div>
  );
};
