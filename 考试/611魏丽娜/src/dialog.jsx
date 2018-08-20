import React from 'react'

import Alert from './Alert.jsx'

import Prompt from './Prompt.jsx'

import Confirm from './Confirm.jsx'

export default class Dialog extends React.Component{
    constructor(){
        super()
    }
    render(){
       return <div>
                {this.props.data.map((item,index)=>{
                    let Alert=<div className='itm'>
                        <li>提示</li>
                        <li>操作成功！</li>
                        <li>确定</li>
                    </div>;

                    let Confirm=<div className='itm'>
                        <li>提示</li>
                        <li>去定执行此操作</li>
                        <li><span>取消</span><span>确定</span></li>
                    </div>;
                    
                    let Prompt=<div className='itm'>
                        <li>请输入姓名</li>
                        <li><input type="text"/></li>
                        <li><span>取消</span><span>确定</span></li>
                    </div>

                    let q1=this.props.type=='Alert'?Alert:null
                    let q2=this.props.type=='Confirm'?Confirm:null
                    let q3=this.props.type=='Prompt'?Prompt:null

                    return <ul key={index}>
                                <li key={index} onClick={()=>{this.props.getType(item.type)}}>{item.tit}</li>
                                {q1||q2||q3}
                            </ul>
                            })
                }
              </div>
       }
}