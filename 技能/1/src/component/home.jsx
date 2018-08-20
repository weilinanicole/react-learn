import {Link} from 'react-router-dom';
import React from 'react';
import Route from '../router/router';
import Car from './index/carjs.jsx';
export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            isShow:false
        }
    }
    show(type){
        this.setState({
            isShow:type
        })
    }
    render(){
        return <div className="wrap">
        <main>
            <Route router={this.props.childrenRouter}/>
        </main>
        <footer>
            <Link to='/home/index'>
                <span>主页</span>
            </Link>
            <span onClick={()=>{this.show(true)}}>购物车</span>
            {
                this.state.isShow&&<Car show={this.show.bind(this)}/>
            }
            <Link to='/home/mine'>
                <span>我的</span>
            </Link>
        </footer>
        </div>
    }
}