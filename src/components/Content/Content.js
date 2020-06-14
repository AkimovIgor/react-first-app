import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
// Импортируем маршрутизатор
import {BrowserRouter, Route} from 'react-router-dom';


const Content = () => {
  return (
      <BrowserRouter>
        <main className='main'>
          <div className="row">
            <Sidebar/>
            {/* Указываем маршруты */}
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
          </div>
        </main>
      </BrowserRouter>
  )
}

export default Content;