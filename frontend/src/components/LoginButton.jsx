import React from "react";

export const LoginButton = () => {
  return (
    <button
      className={"btn"}
      onClick={() =>
        (window.location.href = "http://localhost:2000/authenticate")
      }
    >
      Log on using Steam
    </button>
  );
};
