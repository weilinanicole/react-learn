import React from 'react'
export default class List extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
             {this.props.data.map((item,index)=>{
               return  <div className='every' key={index}>
                   <ul>
                        <input type="checkbox" checked={item.isChecked} onChange={(e)=>this.props.childCheck(item.id,e.target.checked)}/>
                        <li>{item.name}</li>
                        <li>单价：{item.price}</li>
                   </ul>
                   <p>
                      <span onClick={()=>this.props.addDel(item.id,'+')}>+</span>
                      <i>{item.num}</i>
                      <span onClick={()=>this.props.addDel(item.id,'-')}>-</span>
                   </p>
               </div>
            })} 
        </div>
    }

}