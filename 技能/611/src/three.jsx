import React from 'react'
export default class Three extends React.Component{
    constructor(){
        super()
        
    }
    componentDidMount(){
        console.log(this.props.location)
    }
    render(){
        return <div>
            <h1>这是Three页面</h1>
        </div>
    }
}