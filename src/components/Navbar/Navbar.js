import React from "react";
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
  return(
      <div className="nav-scroller py-1 mb-2">
        <hr/>
        <nav className="nav d-flex justify-content">
          <NavLink className="p-2 text-muted" to="/profile" activeClassName={style.active}>Profile</NavLink>
          <NavLink className="p-2 text-muted" to="/dialogs" activeClassName={style.active}>Messages</NavLink>
          <NavLink className="p-2 text-muted" to="/music" activeClassName={style.active}>Music</NavLink>
          <NavLink className="p-2 text-muted" to="/news" activeClassName={style.active}>News</NavLink>
          <NavLink className="p-2 text-muted" to="/settings" activeClassName={style.active}>Settings</NavLink>
        </nav>
      </div>
  )
}

export default Navbar;