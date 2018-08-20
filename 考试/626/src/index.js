import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app.jsx'
import '../src/css/style.css'
import store from './store';

let render=()=>{ReactDOM.render(<App />, document.getElementById('root'))}
render();
store.subscribe(render)

