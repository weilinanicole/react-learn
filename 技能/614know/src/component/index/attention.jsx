import React from 'react'

import axios from 'axios'

import Detail from '../detail.jsx'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

export default class Attention extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            pass:'',
            endData:null
        }
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5b0be9c51725f034fca4cc0f/example/knows')
        .then((res)=>{
            this.setState({
                list:res.data.data
            })
        })
        .catch((err)=>{
            console.log(err)

        })
    }
    scrollBar(e){
        let Body=e.target
        // if(Body.scrollTop/Body.clientHeight>0.8){
        //     this.setState({
        //         list:this.state.list.concat(this.state.list)
        //     })
        // }    
        if(Body.scrollTop+Body.clientHeight+40>Body.scrollHeight){
            this.setState({
                        list:this.state.list.concat(this.state.list)
            })
        }
    }
    render(){
        return  (
                    <div className='body' onScroll={(e)=>{this.scrollBar(e)}}>
                    {
                        this.state.list.map((item,index)=>{
                            return <Link to={{
                                pathname:'/detail',
                                params:{
                                    id:index,
                                    data:this.state.list[index]
                                }
                            }} key={index} className='box'>
                    
                               <li>
                                   {/* <img src={item.actors[0].avatar_url}/> */}
                                   <span>{item.action_text}</span>
                               </li>
                               <h2>{item.target.question.title}</h2>
                               <p className='article' style={{'WebkitBoxOrient':'vertical'}}><span>{item.target.author.name}:</span>{item.target.excerpt}</p>
                               <li className='line'></li>
                            
                            </Link>
                        })
                    }  
                </div>
            )
    }
}