import React from 'react'
import style from '../css/style.css'
import List from './list.jsx'
export default class Child extends React.Component{
    constructor(){
        super()
    }
    state={
        list:['豆瓣','电影','图书','广播','小组']
    }
    render(){
        return <List data={this.state.list}/>
    }

}