import React, { useState } from "react";

import Profile from "./sidebar-components/Profile";
import Menu from "./sidebar-components/Menu";

import "./Sidebar.css";

export default function Sidebar({ user }) {
  const [profile, setProfile] = useState(false);

  const handleProfile = (e) => {
    //self
    e.target.classList.toggle("profile__toggle");
    //close
    e.target.nextSibling.classList.toggle("profile__toggle");
    //list

    //profile
    e.target.parentElement.parentElement.classList.add("profile__focus");

    setProfile(true);
  };

  const handleClose = (e) => {
    //self
    e.target.classList.toggle("profile__toggle");
    //profile__icon
    e.target.previousSibling.classList.toggle("profile__toggle");
    //list

    //profile
    e.target.parentElement.parentElement.classList.remove("profile__focus");
    setProfile(false);
  };

  return (
    <div className="sidebar">
      <div className="profile ">
        <div className="profile__icons">
          <div className="profile__icon" onClick={handleProfile}>
            {user.username[0]}
          </div>
          <div className="profile__close profile__toggle" onClick={handleClose}>
            X
          </div>
        </div>
      </div>
      {profile ? <Profile /> : <Menu />}
    </div>
  );
}
