import React from "react";
import "../styles/profile.css";
import CustomSVGImage from "../image/Ellipse 59.svg";
export const Profile = () => {
  const user = {
    name: "ALEXA ELANGO",
    email: "alexa.elango@gmail.com",
    image: "/Pictures 2.png",
  };

  return (
    <div className="profile-container">
      <img src={CustomSVGImage} alt="Custom Image" className="custom-image" />
      <img src={user.image} alt="Profile" className="profile-image" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p>
    </div>
  );
};

export default Profile;
