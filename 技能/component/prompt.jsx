import React from 'react';
export default class prompt extends React.Component {
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
            <p><input type="text"/></p>
            <button onClick={() => this.props.getPrompt(true)}>取消</button>
            <button onClick={() => this.props.getPrompt(true)}>确定</button>
        </div>
    }
}