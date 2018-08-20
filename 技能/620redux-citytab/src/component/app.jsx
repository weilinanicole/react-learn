import React from 'react'
import Province from './province'
import City from './city'
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
                type:'CHANGE_PROVINCE',
                text:res.data.list
            })
            store.dispatch({
                type:'CHANGE_CITY',
                text:res.data.list[0].item
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return <div className='wrap'>
            <Province/>
            <City/>
        </div>
    }
}