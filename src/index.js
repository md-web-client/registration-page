import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/style.css';

import { LunchLadyLogin, MaleNurseLogin, BaldGuyLogin } from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MaleNurseLogin />, document.getElementById('root'));
ReactDOM.render(<LunchLadyLogin />, document.getElementById('root2'));
ReactDOM.render(<BaldGuyLogin />, document.getElementById('root3'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
