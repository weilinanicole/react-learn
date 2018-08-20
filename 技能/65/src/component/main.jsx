import React from 'react';
import ChildOne from './childOne.jsx';
import style from './style.css'
export default class One extends React.Component{
    constructor(){
        super()
        
    }

    state={
        isShow:false,
        list:[
            {name:'zs',age:10},
            {name:'ls',age:10},
            {name:'ww',age:10}
        ]
    }
    
    myclick=(newName)=>{
        this.setState({
            list:[
                {name:newName,age:10},
                {name:'eh',age:10},
                {name:'oh',age:10}
            ]
        })
    }

    changeValue=(event)=>{
        this.setState({
            list:[
                {name:event.target.value,age:10},
                {name:'eh',age:10},
                {name:'oh',age:10}
            ]
        })
    }

    render(){
        const style={
            color:'red'
        }
        let Btn=this.state.isShow? 
                <button style={style} onClick={this.myclick.bind(this,'wahahaha')}>点击</button>:
                null;//三元表达式 if语句
        return <div className='wrap'>
            {Btn}
            {   
                this.state.list.map((item,index)=>{
                return <ChildOne names={item.name} age={item.age} key={index} changeValue={this.changeValue} myclick={this.myclick.bind(this,'65')}/>
            })
        }
        </div>
    }
}