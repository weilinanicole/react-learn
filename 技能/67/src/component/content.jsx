import React from 'react'
export default class Sum extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='sign' style={{width:'100%',height:'auto',border:'1px solid #ccc'}}>
        {
            this.props.list.map((item,index)=>{
              return  <ul key={index}>
                        <li><span>{item.name}</span></li>
                        <li>{item.cont}</li>
                      </ul>    
            })
        }
            </div>
        
        }
}