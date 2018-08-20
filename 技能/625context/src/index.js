import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/component/app.jsx';
import store from '../src/store'
import {Provider} from 'react-redux'


// let render=()=>{ReactDOM.render(<App />, document.getElementById('root'))}
// render()
// store.subscribe(render)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'))