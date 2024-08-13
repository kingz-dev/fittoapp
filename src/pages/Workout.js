import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import Exer1 from "../assets/images/exer1.png";
import Exer2 from "../assets/images/exer2.png";
import Exer3 from "../assets/images/exer3.png";
import { FitCard } from "../components";
import { WorkoutCard } from "../components/WorkoutCard";
import "./Workout.css";

export const Workout = () => {
  const [profile, setProfile] = useState([]);
  const [toggle, setToggle] = useState(false);
  useTitle("Workout");
  const profileRef = useRef(collection(db, "profile"));

  useEffect(() => {
    async function getProfile() {
      const data = await getDocs(profileRef.current);
      setProfile(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getProfile();
  }, [profileRef, toggle]);

  return (
    <div className="workout-container">
      <WorkoutCard />
      {profile.map((pro) => (
        <FitCard key={pro.id} pro={pro} toggle={toggle} setToggle={setToggle} />
      ))}
      <div className="workout-title">
        <h2>FITTO TRAINING EXERCISES</h2>
      </div>

      <div className="workout-exercises">
        <div className="exercise one">
          <img src={Exer1} alt="Exercise 1" />
        </div>
        <div className="exercise">
          <img src={Exer2} alt="Exercise 2" />
        </div>
        <div className="exercise">
          <img src={Exer3} alt="Exercise 3" />
        </div>
      </div>
    </div>
  );
};
