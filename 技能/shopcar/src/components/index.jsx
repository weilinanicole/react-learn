import React from 'react';
import store from '../redux/store.js';
import '../css/style.css';
import Head from './header.jsx';
import Con from './section.jsx';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
         }
    }
    componentDidMount(){
        console.log(window.sessionStorage.nb)
      window.sessionStorage.nb?this.setState({
          isShow:false
      }):null
    }
    clearMask(){
       window.sessionStorage.nb = 'really NB';
       this.setState({
           isShow:false
       })
    }
    render() { 
        return <Router>
            <div className='wrap'>
                <div className="box">
                        <Head/>
                        <Con/>
                </div>
                    {
                        this.state.isShow?<div className="mask">
                        <div className="banner">
                            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3815798069,713875322&fm=27&gp=0.jpg" alt=""/>
                            <p>你真牛逼<span onClick={e=>{this.clearMask()}}>点我关闭</span></p>
                        </div>
                    </div>:null
                    }
            </div>
               
        </Router>
       
    }
}
 
export default Index;