import React,{Fragment} from 'react';

class Third extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            userpwd:'',
            user:'bjh',
            password:'0927'
         }
    }
    change(event,flag){
       if(flag){
        this.setState({
            username:event.target.value
        })
       }else{
        this.setState({
            userpwd:event.target.value
        })
       }
    }
    logined(){
        if(this.state.username===this.state.user&&this.state.userpwd===this.state.password){
             alert('登陆成功')
        }else{
            alert('登陆失败')
        }
      
    }
    render() { 
        return <div>
            <div className="login">
               <p>还没有注册?</p>
               <span><input type="text" placeholder='请输入用户名' value={this.state.username} onChange={e=>{this.change(e,true)}}/></span>
               <span><input type="password" placeholder='请输入密码' value={this.state.userpwd}onChange={e=>{this.change(e,false)}}/></span>
               <div className="dologin" onClick={e=>{this.logined()}}>点击登陆</div>
            </div>
        </div>
    }
}
 
export default Third;