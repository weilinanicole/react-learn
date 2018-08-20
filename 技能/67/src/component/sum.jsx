import React from 'react'
import Content from './content.jsx'
export default class Sum extends React.Component{
    constructor(){
        super()
        this.state={
            cont:'',
            name:'',
            list:[]
        }
    }
    componentDidMount(){
        if(window.localStorage.getItem('item')){
            this.setState({
                list:JSON.parse(window.localStorage.getItem('item'))
            })
        }
        // else{
        //     this.setState({
        //         list:[]
        //     })
        // }
    }
    submit(){
        //没有用户名的情况
        if(!this.state.name){
            alert('请输入姓名')
            this.setState({
                cont:'',
                name:''
            })
            return 
        }else if(this.state.cont.length<1){
            //没有内容的情况
            alert('请输入内容')
            this.setState({
                cont:'',
                name:''
            })
            return
        }else{
            let list=this.state.list;
            let obj={};
            obj.cont=this.state.cont;
            obj.name=this.state.name;
            //符合条件的情况下
            list.push(obj);
            window.localStorage.setItem('item',JSON.stringify(list))
            this.setState({
                list:list
            })
        }
    }
    render(){
        return  <div>
            <li>留言板</li>
            <Content list={this.state.list}/>
            <textarea value={this.state.cont} onChange={(e)=>this.setState({cont:e.target.value})}></textarea>
            <input type="text" placeholder='请输入姓名' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            <button type='button' onClick={this.submit.bind(this)}>点击提交</button>
        </div>
    }
}