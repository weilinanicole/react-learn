import React from 'react'

import Child from './child.jsx'

// export default class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             father:['Navigation One','Navigation Two','Navigation Three'],
//             child:['Option1','Option2','Option3','Option4','Option5','Option6','Option7','Option8','Option9','Option10','Option11','Option12'],
//             isShow:false
//         }
       
//     }
//     click(index){
//         let num=index*4;
//         let child=this.state.child.slice(index*4,index*4+4)
//         this.setState({
//             isShow:!this.state.isShow,
//             child
//         })
//         console.log(this.state.isShow)
//     }

//     render(){
//         return <div>
//             {
//                 this.state.father.map((item,index)=>{
//                    return  <ul key={index} onClick={()=>{this.click(index)}}>
//                                 <li>{item}</li>
//                             </ul>     
//                 })
//             }
//             <Child isShow={this.state.isShow} child={this.state.child}/>
//         </div>

//     }
// }
export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            list:[{
               father: 'Navigation One',
               child:['Option1','Option2','Option3','Option4'],
               isShow:false
            },{
                father: 'Navigation Two',
                child:['Option5','Option6','Option7','Option8'],
                isShow:false
             },{
                father: 'Navigation Three',
                child:['Option9','Option10','Option11','Option12'],
                isShow:false
             }]
        }
    }
    click(index){
        let list=this.state.list
        for(let i=0;i<list.length;i++){
            list[i].isShow=false
        }
        list[index].isShow=!this.state.list[index].isShow
        this.setState({
          list
        })
    }
    render(){
        return <div>
            {
                this.state.list.map((item,index)=>{
                   return <div key={index}>
                            <ul onClick={()=>{this.click(index)}}>
                                <li>{item.father}</li>
                                {
                                    item.child.map((items,indexs)=>{   
                                        return item.isShow?<li key={indexs}>{items}</li>:null
                                    })
                                }
                            </ul>
                        </div>
                })
            }
        </div>
    }

}
