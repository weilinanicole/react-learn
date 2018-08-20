import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            list:[{
                path:'/img/2.png',
                isShow:false
            },{
                path:'/img/2.png',
                isShow:false
            },{
                path:'/img/2.png',
                isShow:false
            },{
                path:'/img/2.png',
                isShow:false
            },{
                path:'/img/2.png',
                isShow:false
            }],
            num:0
        }
    }
    click(index){
        let list=this.state.list;
        let num=this.state.num;

        list[index].isShow=!list[index].isShow

        if(list[index].isShow){
            list[index].path='/img/1.png';
            num++;
        }else{
            list[index].path='/img/2.png';
            num--;
        }
      
        this.setState({
            list,
            num
        })
    }
    // hover(index){
    //     console.log(index)
    // }
    render(){
        return <div className='wrap'>
            {
                // onClick={()=>{this.click(index)}}
                //onMouseOver={()=>{this.hover(index)}}
                this.state.list.map((item,index)=>{
                    return <li key={index} onClick={()=>{this.click(index)}}><img src={item.path}/></li>
                })
            }
            <p>{this.state.num}</p>
        </div>
    }
}