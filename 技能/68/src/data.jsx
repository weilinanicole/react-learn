import React from 'react'
import axios from 'axios'
export default class Data extends React.Component{
    constructor(){
        super()
    }
    state={
        list:[]
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5b0be9c51725f034fca4cc0f/example/sixten')
        .then((res)=>{
            console.log(res.data.carList)
            this.setState({
                list:res.data.carList
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return <div>
            {
                this.state.list.map((item,index)=>{
                   return  <h6>{item.carName}</h6>
                })
            }
        </div>
    }
}