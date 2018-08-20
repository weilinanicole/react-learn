import React from 'react'

import axios from 'axios'

import {getData,getIndex} from '../../action'

import store from '../../store'

export default class Pre extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5b0be9c51725f034fca4cc0f/example/week')
        .then((res)=>{
            store.dispatch(getData(res.data.list))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    click(index){
        store.dispatch(getIndex(index))
    }
    render(){
        let index=store.getState().getIndex.getIndex&&store.getState().getIndex.getIndex||0;
        console.log(index)
        let data=store.getState().getData.getData&&store.getState().getData.getData.slice(index*4,index*4+4);
        let datas=store.getState().getData.getData;
        let num=datas&&datas.length/4;
        let arr=[];
        for(let i=0;i<num;i++){
            arr.push(num-1)
        }
       
        return <div>
        {
            data&&data.map((item,index)=>{
                return <div key={index}>
                    <ol>
                        <li>分类ID</li>
                        <li>分类名称</li>
                        <li>备注</li>
                        <li>分类排序</li>
                        <li>展示状态</li>
                        <li>操作</li>
                    </ol>
                    <ul className='box'>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.tips}</li>
                        <li>{item.top}</li>
                        <li>{item.status}</li>
                        <li><button type='button'>编辑</button><button type='button'>删除</button></li>
                    </ul>
                    
                </div>
            })
        }
        <div className="pages">
            <span>上一页</span>
            {
                arr.map((item,index)=>{
                    return <li key={index}>
                        <button type='button' onClick={()=>{this.click(index)}}>{item}</button>
                    </li>
                })
            }
            <span>下一页</span>
        </div>
    </div>
    }
}