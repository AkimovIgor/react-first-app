import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {
    id: 1,
    title: 'Sample blog post 1',
    date: (new Date()).toLocaleString(),
    author: 'Mark',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 2,
    title: 'Sample blog post 2',
    date: (new Date()).toLocaleString(),
    author: 'Igor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 3,
    title: 'Sample blog post 3',
    date: (new Date()).toLocaleString(),
    author: 'Egor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
