import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../../action'
class Main extends React.Component{
    constructor(){
        super()
        this.state={
            isShowCart:true,
            add:'+',
            del:'-'
        }
    }
    render(){
        //获取到的是传过来的值，点击的下标为几的
        let path=this.props.location.pathname.slice('/')[11];
        let list=this.props.list&&this.props.list[path].items||this.props.list&&this.props.list[0].items
        console.log(list)
        let isShowCart=this.state.isShowCart;

        return <div>
            {
                list&&list.map((item,index)=>{
                    return <div className="box" key={index}>
                        <img src={item.picSmall} alt=""/>
                        <h2>{item.proTitle}</h2>
                        <li >{item.proSummary}</li>
                        <ul>
                             <li><span>{item.salePrice}</span>/<span>{item.productUnit}</span></li>
                             <li className='cart'><span onClick={(e)=>{this.props.clickType(e,this.state.del,list,index)}}>-</span><span>0</span><span onClick={(e)=>{this.props.clickType(e,this.state.add,list,index)}}>+</span></li>
                             {/* {item.limitBuyCount} */}
                        </ul>
                    </div> 
                })
            }
        </div>
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
        list:state.getData.getData,
        currentPrice:state.getData
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        clickType:(e,type,list,index)=>{ 
            let curNum=curNum;
            if(type==='+'){
                list[index].limitBuyCount+=1;
            }else{
                if(curNum>0){
                    list[index].limitBuyCount+=1;
                }
            }
            dispatch(getData(list))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)