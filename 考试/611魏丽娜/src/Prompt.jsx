import React from 'react'

export default class Prompt extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <li>请输入姓名</li>
            <li><input type="text"/></li>
            <li><span>取消</span><span>确定</span></li>
        </div>
    }
}