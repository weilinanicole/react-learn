import React from 'react'

import Dialog from './dialog.jsx'

export default class Sum extends React.Component{
    constructor(){
        super()
    }
    state={
        type:'',
        list:[
                {
                    tit:'打开alert提示框',
                    type:'Alert'
                },{
                    tit:'打开confirm提示框',
                    type:'Confirm'
                },{
                    tit:'打开prompt提示框',
                    type:'Prompt'
                }]
    }
    getType(type,index){
       this.setState({
            type:type
       })
    }
    render(){
        return  <div>
           <Dialog data={this.state.list} getType={this.getType.bind(this)} type={this.state.type}/>
           
        </div>
    }
}