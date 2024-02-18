import React from "react";
import "./style.scss";

export const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.avatar} alt="i" />
      <p>{user.username}</p>
    </div>
  );
};
