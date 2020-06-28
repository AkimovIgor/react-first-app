import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
// Импортируем маршрутизатор
import {Route} from 'react-router-dom';
import MyPosts from "../MyPosts/MyPosts";

let SomeComponent = () => <Dialogs/>;

const Content = (props) => {
  return (
    <main className='main'>
      <div className="row">
        <Sidebar/>
        {/* Указываем маршруты */}
        <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}/> }/>
        {/* render - фтрибот для отрисовки компонента */}
        <Route exact path='/dialogs' render={
          () => <Dialogs messagesPage={props.state.messagesPage} addMessage={props.addMessage}/>
        }/>
        <Route path='/music' component={Music}/>
        <Route path='/news' render={ () => <MyPosts posts={props.state.profilePage.posts}/> }/>
        <Route path='/settings' component={Settings}/>
      </div>
    </main>
  )
}

export default Content;