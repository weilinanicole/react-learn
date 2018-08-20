import React from 'react'
import Comp from './component.jsx'

export default class Sum extends React.Component{
    constructor(){
        super()
    }
    state={
        num:0,
        isRemove:true
    }
    componentWillMount(){
        console.log('渲染前')
    }
    componentDidMount(){
        console.log('渲染')
    }
    click(){
        let num=this.state.num;
        if(this.state.num<10){
            num++
        }else{
            this.setState({
                isRemove:false
            })
        }
        this.setState({
            num
        })
    }
    render(){
        let status=this.state.isRemove?<Comp num={this.state.num} click={this.click.bind(this)}/>:null
        return <div>{status}</div>
        }
}