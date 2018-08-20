import React from 'react';
import { connect } from 'react-redux'
let car= (props)=>{
    console.log(props.data);
    return <mark onClick={()=>{props.show(false)}}>
    <div className="content">
    {
        props.data&&props.data.map((item)=>{
            return item.data.map((one,index)=>{
                return one.num>1&&<li key={index}>
                    <h6>{one.name}</h6>
                    <input type='button' value='-' />
                    <span>{one.num}</span>
                    <input type='button' value='+' />价格
                    <span>{one.pic / 100}</span>
                </li>
            })
        })
    }
    </div>
    </mark>
}
const mapStateToProps = (state) => {
    return {
        data:state.getData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add:()=>{},
        sub:()=>{}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(car)