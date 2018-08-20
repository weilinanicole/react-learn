import React from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Right from './right.jsx'
export default class App extends React.Component{
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
                list:res.data.list
            })
            console.log(res.data.list)
        })
        .catch(()=>{

        })
    }
    render(){
        return <Router>
                <div className="wrap">
                    <nav><span>国内</span><span>国际/港澳台</span></nav>
                    <div className="body">
                        <div className="left">{
                            this.state.list.map((item,index)=>{
                                return <Link to={{pathname:'/right',data:this.state.list[index]}} key={index}>{item.title}</Link>
                            })
                        }
                        </div>
                        <div className="right">
                            <Route path='/right' component={Right}></Route>
                        </div>
                    </div>
                </div>
        </Router>
    }
}