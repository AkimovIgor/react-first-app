import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

// Компонент - это функция, которая возвращает JSX разметку
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;
