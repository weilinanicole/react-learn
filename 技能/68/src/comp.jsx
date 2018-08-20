import React from 'react'
export default class Comp extends React.Component{
    constructor(){
        super()
    }
    state={
        list:[
            {name:'a',
            isShow:false,
            child:['a1','a2','a3']
            },
            {name:'b',
            isShow:false,
            child:['b1','b2','b3']
            },
            {name:'c',
            isShow:false,
            child:['c1','c2','c3']
            }
        ]
    }
    click(ind){
        let {list}=this.state;
        for(let i=0;i<list.length;i++){
            list[i].isShow=false
        }
        list[ind].isShow=true
        this.setState({
            list
        })
    }
    render(){
        return <div>{
            this.state.list.map((item,index)=>{
                return <div key={index}>
                        <p onClick={()=>{this.click(index)}}>{item.name}</p>
                        <ul>
                            {
                                item.isShow?
                                item.child.map((val,indexs)=>{
                                    return <li key={indexs}>{val}</li>
                                }):null
                            }
                        </ul>
                    </div>
            })
        }
        </div>
    }
}