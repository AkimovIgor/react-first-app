import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
// Импортируем маршрутизатор
import {Route} from 'react-router-dom';


const Content = () => {
  return (
    <main className='main'>
      <div className="row">
        <Sidebar/>
        {/* Указываем маршруты */}
        <Route path='/profile' component={Profile}/>
        <Route exact path='/dialogs' component={Dialogs}/>
        <Route path='/music' component={Music}/>
        <Route path='/news' component={News}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </main>
  )
}

export default Content;