import React from 'react'

import store from '../store'

export default class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

         let Index=this.props.match.params.id;
         let list=store.getState().getData.getData&&store.getState().getData.getData.list[Index];
         return <div className='detail'>
              <li><img src={list&&list.img} alt=""/></li>
              <ul>
                <li>{list&&list.name}</li>
                <li>{list&&list.production}</li>
                <li>{list&&list.price}</li>
              </ul>
         </div>
    }
}

