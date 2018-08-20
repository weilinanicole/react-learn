import React from 'react'
export default class List extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            {
                this.props.data.map((item,index)=>{
                   return <li key={index}>{item}</li>
                })
            }
        </div>
    }
}