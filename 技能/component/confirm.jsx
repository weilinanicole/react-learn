import React from 'react';
export default class confirm extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return <div className='out'>
            <h6>请输入姓名</h6>
            <p>是否执行此操作</p>
            <button onClick={() => this.props.getCon(true)}>取消</button>
            <button onClick={() => this.props.getCon(true)}>确定</button>
        </div>
    }
}