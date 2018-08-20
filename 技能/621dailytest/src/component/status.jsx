import React from 'react'
import store from '../store'
export default class Status extends React.Component{
    constructor(){
        super()
    }
    render(){
        let status=store.getState().status;
        console.log(status)
        return <div>
            这个是Type页面
        </div>
    }
}