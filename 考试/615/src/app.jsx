import React from 'react'
export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
              {title:"真实姓名：",placeholder:"请填写本人的真实姓名"},
              {title:"身份证号：",placeholder:"请填写本人身份证号"},
              {title:"社保卡号：",placeholder:"社保卡条形码下方的12位编码"},
              {title:"手机号码：",placeholder:'请填写本人手机号'},
              {title:"最高学历：",placeholder:'请选择'},
              {title:"税后月薪：",placeholder:'请选择'},
              {title:"单位全称：",placeholder:'请填写'},
              {title:"单位座机：",placeholder:'请填写'}
            ],
        }
    }
    click(e,index){
        if(e.target.value.trim()==''){
           alert('请输内容')
           return
        }else{
            let list=this.state.list;
            list[index].placeholder=e.target.value;
            this.setState({
                list
            })
            console.log(this.state.list)
        }
        
    }
    render(){
        return <div className="wrap">
            <header>
                <li><i className="icon iconfont icon-angle-left"></i>微信</li>
                <li>申请0首付购车</li>
                <li><i className="icon iconfont icon-share"></i></li>
            </header>
            <section>
                <div className="bg"></div>
                <div className="item">
                    <li>
                        <i></i>
                        <span>申请条件</span>
                    </li>
                    <li>
                        <i></i>
                        <span>申请条件</span>
                    </li>
                    <li>
                        <i></i>
                        <span>申请条件</span>
                    </li>
                    <li>
                        <i></i>
                        <span>申请条件</span>
                    </li>
                </div>
                <div className='ipt'>{
                    this.state.list.map((item,index)=>{
                        return  <li key={index}>
                        <span>{item.title}</span><input onChange={(e)=>{this.click(e,index)}} type="text" value={item.placeholder} />
                    </li>
                    })
                }</div>
            </section>
            <footer>
                <li>申请0首付购车</li>
                <p><i className="icon iconfont icon-shouji1"></i></p>
            </footer>
        </div>
    }
}