import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import {getData} from '../../action'

import {
    NavLink
} from 'react-router-dom'

class Head extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.DATA()
    }
    render(){
        let list=this.props.getData.getData;
        return <div className='header'>
            <p>最快 送至 请选择。。。》</p>
            <ul>
                {
                    list&&list.map((item,index)=>{
                        return <NavLink key={index} to={`/home/main/${index}`}>{item.navName}</NavLink>
                    })
                }
            </ul>
        </div>
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
        ...state
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        DATA:()=>{
            axios.get('https://www.easy-mock.com/mock/5b07e9e47bebfe1c7e53d33e/example_copy/lechun')
            .then((res)=>{
                dispatch(getData(res.data))
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Head)