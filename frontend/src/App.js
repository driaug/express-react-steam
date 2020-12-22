import React, { useEffect, useState } from "react";
import "./index.css";
import { Profile } from "./components/Profile";
import { LogoutButton } from "./components/LogoutButton";
import { LoginButton } from "./components/LoginButton";

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:2000/", {
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((b) => {
        if (b.success) {
          setUser(b.user);
        }
      });
  }, []);

  return user ? (
    <div>
      <Profile user={user} />
      <LogoutButton />
    </div>
  ) : (
    <div>
      <LoginButton />
    </div>
  );
};
