import React from "react";

const Navbar = () => {
  return(
      <div className="nav-scroller py-1 mb-2">
        <hr/>
        <nav className="nav d-flex justify-content">
          <a className="p-2 text-muted" href="#">Profile</a>
          <a className="p-2 text-muted" href="#">Messages</a>
          <a className="p-2 text-muted" href="#">Music</a>
          <a className="p-2 text-muted" href="#">News</a>
          <a className="p-2 text-muted" href="#">Settings</a>
        </nav>
      </div>
  )
}

export default Navbar;