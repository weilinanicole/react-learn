import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App/> , document.getElementById('root'));
//App就是整个文件的一个根组件
registerServiceWorker();