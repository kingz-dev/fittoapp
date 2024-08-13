import { useTitle } from "../hooks/useTitle";
import { ProfileCard } from "../components/ProfileCard";
import "./Profile.css";

export const Profile = () => {
  useTitle("Profile");

  return (
    <div>
      {/* updatelater */}
      <ProfileCard />
    </div>
  );
};
