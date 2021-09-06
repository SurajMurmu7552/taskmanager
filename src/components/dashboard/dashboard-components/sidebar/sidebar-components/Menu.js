import React from "react";
import { Link } from "react-router-dom";
import {
  StarBorderOutlined,
  CheckBoxOutlined,
  DeleteOutlined,
} from "@material-ui/icons";

export default function Menu() {
  return (
    <ul className="sidebar__items">
      <li className="sidebar__item">
        <StarBorderOutlined fontSize="small" className="sidebar__icon" />
        <Link to="/dashboard" className="sidebar__link">
          Today
        </Link>
      </li>
      <li className="sidebar__item">
        <CheckBoxOutlined fontSize="small" className="sidebar__icon" />
        <Link to="/dashboard/important" className="sidebar__link">
          Important
        </Link>
      </li>
      <li className="sidebar__item">
        <DeleteOutlined fontSize="small" className="sidebar__icon" />
        <Link to="/dashboard/trash" className="sidebar__link">
          Trash
        </Link>
      </li>
    </ul>
  );
}
