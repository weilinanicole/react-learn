import React from 'react'
import store from '../component/store'
import {getData} from '../component/action'
export default class App extends React.Component{
    constructor(){
        super()
        this.state={
            list:[1,2,3,4]
        }

    }
    componentDidMount(){
        store.dispatch(getData(this.state.list))
        console.log(store.getState())
    }
    render(){
        let list=store.getState().getData.getData;
        return <div></div>
    }
}