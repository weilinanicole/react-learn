import React from 'react'

import Left from './left.jsx'
import Right from './right.jsx'
import Center from './center.jsx'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
            list:['故宫','天安门','天坛','颐和园','长城'],
            showCenter:false
        }
    }
    leftClick(){
        alert('点击用户按钮')
    }
    rightClick(){
        alert('用户消息')
    }
    centerClick(){
        this.setState({
            showCenter:!this.state.showCenter
        })
    }
    render(){
        return <div className='header'>
            <Left leftClick={this.leftClick.bind(this)}/>
            <Center centerClick={this.centerClick.bind(this)} list={this.state.list} showCenter={this.state.showCenter}/>
            <Right rightClick={this.rightClick.bind(this)}/>
        </div>
    }
}