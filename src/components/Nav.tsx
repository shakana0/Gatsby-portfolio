import React, { useState } from "react";
import { NavStyling } from "../assets/styles/NavStyling";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "gatsby";

export const Nav = () => {
  //using useState to toggle nav
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <NavStyling>
      <nav>
        <MenuIcon
          className="menu-icon"
          onClick={() => setIsShowMenu(!isShowMenu)}
        />
        <ul className={`${isShowMenu ? "" : "hide-menu"}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutPage">About</Link>
          </li>
          <li>
            <Link to="/projectsPage">Projects</Link>
          </li>
          <li>
            <Link to="/contactPage">Contact</Link>
          </li>
        </ul>
      </nav>
    </NavStyling>
  );
};
