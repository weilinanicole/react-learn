import React from 'react';
import ReactDOM from 'react-dom';
import Rou from './router/router.jsx';
import {Provider} from 'react-redux';
import store from './store/store.js';
import routerConfig from './router/router.config';
import {BrowserRouter as Router} from 'react-router-dom';
import './scss/index.min.css';
ReactDOM.render(
    <Provider store={store}>
        <Router><Rou router={routerConfig.router}/></Router>
    </Provider>
    , document.getElementById('root'));