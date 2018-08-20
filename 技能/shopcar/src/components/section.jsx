import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import first from '../components/first.jsx';
import second from '../components/second.jsx';
import third from '../components/third.jsx'
class Sec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <section>
                  <Route path='/first' component={first}></Route>
                  <Route path='/shop' component={second}></Route>
                  <Route path='/mine' component={third}></Route>  
                  <Route path='/' render={()=>{return <Redirect to='/first'/>}}></Route>   
        </section>
    }
}
 
export default Sec;