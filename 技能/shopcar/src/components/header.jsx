import React from 'react';
import store from '../redux/store.js';
import {getdata} from '../redux/action.js';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
    fetch('/data/data.json')
    .then(res=>{
        res.json().then(receive=>{
            store.dispatch(getdata(receive))
        })
    })
    }
    render() { 
        return <header>
              {
                  store.getState().getdata&&store.getState().getdata.map((item,index)=>{
                      return  <p key={index}>
                         <Link to={`${item.path}`}> {item.name}</Link>
                      </p>
                  })
              }
        </header>
    }
}
 
export default Head;