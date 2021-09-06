import React from "react";
import { useHistory } from "react-router-dom";
import { userService } from "../../../../../services/userService";

export default function Profile() {
  const history = useHistory();

  const handleLogout = () => {
    userService.logout();
    history.push("/");
  };

  return (
    <ul className="sidebar__items">
      {/* <li className="sidebar__item profile__item">About</li> */}
      <li className="sidebar__item profile__item" onClick={handleLogout}>
        Log out
      </li>
    </ul>
  );
}
