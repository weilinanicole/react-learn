import React from 'react'

export default class Alert extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <li>提示</li>
            <li>操作成功！</li>
            <li>确定</li>
        </div>
    }
}