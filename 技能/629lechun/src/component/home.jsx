import React from 'react'
import Head from './home/head.jsx'
import {connect} from 'react-redux'
import Login from './login.jsx'
import {Fragment} from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import Main from './home/main.jsx'
import Shop from './home/shop.jsx'
import My from './home/my.jsx'

class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='wrap'>
            <Fragment>
                <Head/>
                <section>
                    <Route path='/home/main' component={Main}></Route>
                    <Route path='/home/shop' component={Shop}></Route>
                    <Route path='/home/my' component={My}></Route>
                </section>
                <footer>
                    <Link to='/home/main'>主页</Link>
                    <div>购物袋</div>
                    <Link to='/home/my'>我的</Link>
                </footer>
            </Fragment>
        </div>
        
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        ...state
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        changeIsLogin:()=>{
            dispatch()
        }

        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Home)