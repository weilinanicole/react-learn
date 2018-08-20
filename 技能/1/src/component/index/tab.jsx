import React from 'react';
import { connect } from 'react-redux'

let tab = (props)=>{
    return <section className='section'>{
        props.getData&&props.getData.map((item,ind)=>{
           return  item.path == props[0].match.params.id&&item.data.map((one,index)=>{
               return <li key={index} onClick={(e) => { props.all(e, ind, index,props.getData) }}>
                        <h6>{one.name}</h6>
                        <input type='button' value='-' />
                        <span>{one.num}</span>
                        <input type='button' value='+' />价格
                        <span>{one.pic/100}</span>
                    </li>
            })
        })
    }</section>
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        all:(e,path,index,data)=>{
            let nData = data;
            switch (e.target.value) {
                case '-':
                    nData[path].data[index].num = nData[path].data[index].num-1;
                    if (nData[path].data[index].num<=1){
                        nData[path].data[index].num=1;
                    }
                    break;
                case '+':
                    nData[path].data[index].num = nData[path].data[index].num + 1;
                    break;
                default:
                window.location.href='/details';
                    break;
            };
            dispatch({
                type:"GET_DATA",
                text:nData
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(tab)