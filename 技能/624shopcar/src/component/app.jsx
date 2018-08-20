import React from 'react'

import axios from 'axios'

import store from '../store'

import {getData,getNum} from '../action/index.jsx'

import Body from './body.jsx'

import Footer from './footer.jsx'

export default class App extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            store.dispatch(getData(res.data.list))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return <div>
            <Body/>
            <Footer/>
        </div>
    }
}