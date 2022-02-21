import React from 'react';
import { NavLink } from "react-router-dom"
import "./Header.scss"
import {Profile} from "../pages/Profile/Profile"

export const Header = () => {
  return (
    <nav>

      <NavLink to="/" activeclassname={"active"} className="navbarAnchord">Characters</NavLink>
      <NavLink to="/planets" activeclassname={"active"} className="navbarAnchord">Planets</NavLink>
      <Profile />

    </nav>

    );
};
