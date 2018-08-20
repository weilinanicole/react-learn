import React from 'react'

 //方法二：
import PropType from 'prop-types'

export default class One extends React.Component{
    constructor(router){
        super()
        //获取地址栏参数方法一：
        //console.log(router)
    }
    componentDidMount(){
        //方法三：
        //console.log(this.props.location)
    }
    render(){
        //方法二：
        console.log(this.context.router)

        return <div>
             <h1>这是One页面</h1>
        </div>
       
    }
}
 //方法二：
 //上下文类型验证
One.contextTypes={
    router:PropType.object.isRequired
}