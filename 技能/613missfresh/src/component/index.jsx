import React from 'react'

import Hot from './hot.jsx'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// const comp=(ind)=>{
//     console.log(ind.match.params.id)
//     return <ul>
//         {/* {this.state.list[ind.match.params.id]} */}
//     </ul>
// }


export default class Index extends React.Component{
    constructor(){
        super()
        this.state={
            list:['热卖','端午节','水果','蔬菜','轻食','粮油','乳品']
        }
    }
    
    

    render(){
        return <Route>
            <div>
            <div className='list'>
            {
                this.state.list.map((item ,index)=>{
                    return <Link key={index} to={`/index/${index}`}>{item}</Link>
                })
            }
            </div>
            {/* 方法一：无状态组件 */}
            {/* <Route path='/index/:id?'  render={({match})=>{
                if(match.params){
                    return (<div>
                        <h3>{this.state.list[match.params.id]}</h3>
                    </div>)
                }else{
                    return <h3></h3>
                }}}></Route>    */}
                {/* 方法二：单独组件 */}
                <Route path='/index/:id?' component={Hot}></Route>
            </div>
        </Route>
    }
}