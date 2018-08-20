import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app.jsx';
import store from './store';
import './css/style.css'
let render=()=>{ReactDOM.render(<App />, document.getElementById('root'))}
render();
store.subscribe(render)
