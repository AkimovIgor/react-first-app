import React from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";

const Content = () => {
  return (
      <main className='main'>
        <div className="row">
          <Sidebar/>
          <Profile/>
        </div>
      </main>
  )
}

export default Content;