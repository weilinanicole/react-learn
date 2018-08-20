import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            list:['推荐','男装','女装','眼镜','配饰','婴童','鞋袜','箱包','电器','装潢','手机','耗材','宠物','植物','水产','虚拟业务','代办','果蔬'],
            isShow:false,
            title:'全部频道',
            allList:['推荐','男装','女装','运动','眼镜','配饰','婴童','鞋袜','箱包','电器','装潢','手机','耗材','宠物','植物','水产','虚拟业务','代办','果蔬']
        }
    }
    click(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render(){
        return <div className='wrap'>
           <nav>
               <ul>
               {
                   this.state.list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                   })
               }
               </ul>
               <ol onClick={()=>{this.click()}}>V</ol>
           </nav>


           <div>
               {
                   this.state.isShow?<div className="box">
                        <ul>{this.state.title}</ul>
                        <ol>{
                            this.state.allList.map((item,index)=>{
                                return <li>{item}</li>
                            })
                        }</ol>
                    </div>:null
               }
           </div>
           </div>
                    
    }
    }
