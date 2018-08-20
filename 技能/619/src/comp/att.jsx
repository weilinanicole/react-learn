import React from 'react'
import axios from 'axios'
export default class Att extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        axios.get('/data')
        .then((res)=>{
            this.setState({
                list:res.data.hot
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
                 return   <div className="hotBox">
                            <li>{item.title}</li>
                            <li>{item.img}</li>
                            <li>{item.author}</li>
                            <li>{item.pri}</li>
                          </div>
              })
          }
        </div>
    }
}