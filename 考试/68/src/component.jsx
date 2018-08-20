import React from 'react'
export default class Comp extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='box'>
                <li>赞</li>
                <li onClick={this.props.click}>{this.props.num}</li>
                </div>
        }
    }
