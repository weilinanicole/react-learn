import { connect } from 'react-redux'
import {getData} from '../action/action.js';
import {Link} from 'react-router-dom';
import React,{Fragment} from 'react';
import Route from '../router/router';

class Index extends React.Component{
    constructor() {
        super();
    }
    componentDidMount(){
        this.props.getDate();
    }
    render(){
        return <Fragment>
        <ul>
        {
            this.props.getData&&this.props.getData.map((item,index)=>{
                return <Link key={index} to={`/home/index/${item.path}`}>{item.name}</Link>
            })
        }
        </ul>
        <Route router={this.props.childrenRouter}></Route>
        </Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getDate:()=>{
            fetch('/data.json').then(req=>{
                req.json().then(data=>{
                    dispatch(getData(data.main))
                })
            });
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);