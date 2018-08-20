import React from 'react'
export default class Child extends React.Component{
    render(){
        return <div className='child'>
            {
                this.props.data.map((item,index)=>{
                    return  this.props.isShow?
                     <li key={index} onClick={()=>{this.props.click(index)}}>{item}</li>:null
                })
            }
        </div>
    }
}