import React from 'react'
import axios from 'axios'
export default class Index extends React.Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            this.setState({
                list:res.data.body
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return <div className='bodyBox'>
        <ul>
            <li>热门文章</li>
            <li>查看更多</li>
        </ul>
        {
            this.state.list.map((item,index)=>{
                return <div className='box' key={index}>
                    <p>{item.title}</p>
                    <li><span>{item.type}</span><span>{item.author}</span></li>
                </div>
            })
        }</div>
    }
}