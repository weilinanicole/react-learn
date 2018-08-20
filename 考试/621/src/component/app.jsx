import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            list:[{
                "title":"【请示流程】",
                "time":"2016.08.01",
                "thing":"拟排教师外出培训",
                "status":"业务科审核",
                "tips":"超时提醒"
            },{
                "title":"【发文】",
                "time":"2016.08.01",
                "thing":"发文于2015年7月21日009号",
                "status":"局长签审",
                "tips":"超时提醒"
            },{
                "title":"【请示流程】",
                "time":"2016.08.01",
                "thing":"拟排教师外出培训",
                "status":"待办",
                "tips":"删除"
            },{
                "title":"【请示流程】",
                "time":"2016.08.01",
                "thing":"拟排教师外出培训",
                "status":"归档",
                
            },{
                "title":"【请示流程】",
                "time":"2016.08.01",
                "thing":"拟排教师外出培训",
                "status":"科室撤稿",
                "tips":"撤回"
            }]
        }
    }
    render(){
        return <div className='wrap'>
            <header>
                <li>返回</li>
                <li>我发起的</li>
                <li></li>
            </header>
            <nav>
                <li>全部状态</li>
                <li>全部类型</li>
            </nav>
            <div className="body">{
                  this.state.list.map((item,index)=>{
                    return <div className="box" key={index}>
                        <div className="left">
                            <h2>{item.title}</h2>
                            <li>{item.time}</li>
                            <p>{item.thing}</p>
                        </div>
                        <div className="right">
                            <li>{item.status}</li>
                            <li>{item.tips}</li>
                        </div>
                    </div>
                  })
            }
            </div>
        </div>
    }
}