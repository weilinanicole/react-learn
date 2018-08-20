import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
    }

    render(){
      return <div>  
          {
              this.props.child.map((item,index)=>{
                 return this.props.isShow? 
                  <li key={index}>{item}</li>:null
              })
          }
      </div>
    }
}