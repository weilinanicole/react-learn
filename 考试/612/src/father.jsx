import React from 'react'
import Child from './child.jsx'
export default class Father extends React.Component{
    constructor(){
        super()
        this.state={
            list:['第一条数据','第二条数据','第三条数据'],
            isShow:false,
            content:'选择你要的数据'

        }
    }
    click(getInd){
       this.setState({
           content:this.state.list[getInd]
       })
    }
    isShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render(){
        return <div className='wrapper'>
            <ul onClick={this.isShow.bind(this)}>{this.state.content}</ul>
            <Child data={this.state.list} click={this.click.bind(this)} isShow={this.state.isShow}/>
        </div>
    }
}