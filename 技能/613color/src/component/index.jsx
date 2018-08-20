import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Index extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {
                    id:0,
                    color:'red',
                    name:'Red'
                },
                {
                    id:1,
                    color:'orange',
                    name:'Orange'
                },{
                    id:2,
                    color:'yellow',
                    name:'Yellow'
                },{
                    id:3,
                    color:'green',
                    name:'Green'
                },{
                    id:4,
                    color:'limegreen',
                    name:'Limegreen'
                },{
                    id:5,
                    color:'skyblue',
                    name:'Skyblue'
                },{
                    id:6,
                    color:'purple',
                    name:'Purple'
                }
            ]
        }
    }
    render(){
        return <Router>
            <div>
                <ul>{
                    this.state.list.map((item,index)=>{
                        return <div key={index}>
                            <li style={{background:item.color,width:100,height:50}}></li>
                            <Link to={`/color/${index}`}>{item.name}</Link>
                        </div>
                    })
                }</ul>
                <Route path='/color/:id' render={({match})=>{
                    return <div className="mask">
                        <li style={{background:`${this.state.list[match.params.id].color}`}}></li>
                    </div>
                }}></Route>
            </div>
        </Router>
    }
}