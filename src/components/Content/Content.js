import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

const Content = () => {
  return (
      <main className='main'>
        <div className="row">
          <Sidebar/>
          <Dialogs/>
        </div>
      </main>
  )
}

export default Content;