import React from 'react'

export default class Confirm extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <li>提示</li>
            <li>去定执行此操作</li>
            <li><span>取消</span><span>确定</span></li>
        </div>
    }
}