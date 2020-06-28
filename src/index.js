import React from 'react';
import * as serviceWorker from './serviceWorker';
// Импортируем state извне
import state from './redux/state';
// Импортируем функцию
import {renderEntireTree} from "./render";


renderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
