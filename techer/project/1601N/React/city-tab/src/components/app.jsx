import React from 'react';
import Province from './province';
import City from './city';
import '../scss/index.css';
import store from '../store';

export default class App extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        // 获取数据
        fetch('/data/data.json')
        .then((res)=>{
            res.json().then(body=>{
                console.log(body);
                store.dispatch({
                    type: 'CHANGE_PROVINCE',
                    text: body
                });

                store.dispatch({
                    type: 'CHANGE_CITY',
                    text: body[0].list
                });
                console.log(store.getState().province.province);
            })
        })
    }

    render(){
        return <div className="index">
            <Province />
            <City />
        </div>
    }
}