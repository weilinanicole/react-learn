import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store.js'
import App from './components/index.jsx';

let render = ()=>{
    ReactDOM.render(<App />, document.getElementById('root'))
};
store.subscribe(render);
render();

