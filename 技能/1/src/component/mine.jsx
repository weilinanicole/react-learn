import React from 'react';
import { connect } from 'react-redux'

class Mine extends React.Component{
    constructor() {
        super();
    }
    componentDidMount(){
        this.props.judge();
    }
    render(){
        return <div>我是我的页面</div>
    }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = () => {
    return {
        judge:()=>{
            if (!window.sessionStorage.login) {
                window.location.href='/login';
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Mine)