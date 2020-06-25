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

let dialogs = [
  { id: 1, name: 'Egor'},
  { id: 2, name: 'Igor'},
  { id: 3, name: 'Mariya'},
  { id: 4, name: 'Julia'},
  { id: 5, name: 'Danila'},
];

let messages = [
  { id: 1,  title: 'Egor', text: 'some text', image: 'https://dummyimage.com/50x50/ccc/000.png'},
  { id: 2,  title: 'Me', text: 'some text', image: 'https://dummyimage.com/50x50/0f0/000.png'},
  { id: 3,  title: 'Egor', text: 'some text', image: 'https://dummyimage.com/50x50/ccc/000.png'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}
         dialogs={dialogs}
         messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
