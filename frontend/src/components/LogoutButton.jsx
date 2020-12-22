import React from "react";

export const LogoutButton = () => {
  return (
    <button
      className={"btn"}
      onClick={() => (window.location.href = "http://localhost:2000/logout")}
    >
      Logout
    </button>
  );
};
