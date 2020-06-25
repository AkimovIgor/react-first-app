import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

// Компонент - это функция, которая возвращает JSX разметку
const App = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Navbar/>
        <Content posts={props.posts}
                 dialogs={props.dialogs}
                 messages={props.messages}
        />
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
