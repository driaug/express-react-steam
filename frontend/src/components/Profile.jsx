import React from "react";

export const Profile = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>{props.user.username}</p>
      <img src={props.user.avatar.large} alt="Avatar" />
    </div>
  );
};
