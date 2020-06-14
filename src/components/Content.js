import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Profile/Profile";

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