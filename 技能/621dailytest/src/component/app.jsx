import React from 'react'
import Type from './type.jsx'
import Status from './status.jsx'
import store from '../store'

import axios from 'axios'

export default class App extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            store.dispatch({
                type:'CHANGE_TYPE',
                text:res.data.list
            })
            store.dispatch({
                type:'CHANGE_STATUS',
                text:res.data.list
            })
            console.log(res.data.list)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return <div className="wrap">
            <Type/>
        </div>
    }
}