import React from 'react'

import {
    Link
} from 'react-router-dom'

export default class Fruit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listData:[]
        }
    }
    click(index){
        this.setState({
            listData:this.props.pass.secondNav&&this.props.pass.secondNav[index]
        })
    }
    render(){
        return <div> 
                <div className="box">{            
                    this.props.pass.secondNav&&this.props.pass.secondNav.map((item,index)=>{
                        return <li key={index} onClick={()=>{this.click(index)}}>{item.nav}</li>
                    })
                    }
                </div>
                <div className="theme">
                    {
                        this.state.listData.list&&this.state.listData.list.map((item,index)=>{
                            return <Link to={{
                                pathname:'/detail',
                                params:{
                                    id:index,
                                    data:this.state.listData.list[index]
                                }
                            }} className="every" key={index}>
                                <img src={item.img} alt=""/>
                                <li>
                                    <h2>{item.name}</h2>
                                    <h4>{item.description}</h4>
                                    <h5>{item.price}</h5>
                                </li>
                            </Link>
                        })
                        
                    }
                </div>
            </div>
        }
}