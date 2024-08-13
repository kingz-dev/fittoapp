import { useState } from "react";
import UserDp from "../assets/user.png";
import { auth, db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProfileCard = () => {
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const navigate = useNavigate();
  console.log(auth);

  const capitalizeName = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  const displayName = capitalizeName(auth.currentUser.displayName);
  const userDP = auth.currentUser.photoURL || UserDp;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = auth.currentUser.uid;

      await addDoc(collection(db, "profile"), {
        userId,
        fitnessLevel,
        fitnessGoal,
      });

      toast.success("Customizing Fitness Plan for your Workout!");

      setTimeout(() => {
        navigate("/workout");
      }, 3000);
    } catch (err) {
      console.log("Error adding document: ", err);
    }
    // navigate("/workout");
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-picture">
          <img src={userDP} alt="User Profile" />
        </div>
        <h2 className="profile-email">Welcome, {displayName} !</h2>
        <form className="profile-update" onSubmit={handleSubmit}>
          <select
            value={fitnessGoal}
            onChange={(e) => setFitnessGoal(e.target.value)}
          >
            <option value="">Fitness goal</option>
            <option value="General health & wellness">
              General health & wellness
            </option>
            <option value="Increase flexibility">Increase flexibility</option>
            <option value="Improve endurance & build muscle">
              Improve endurance & build muscle
            </option>
          </select>
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
          >
            <option value="">Fitness level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button className="generate-plan-button" type="submit">
            Generate Customized Plan
          </button>
        </form>
      </div>
    </div>
  );
};
