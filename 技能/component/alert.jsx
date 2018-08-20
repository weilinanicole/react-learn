import React from 'react';
export default class alert extends React.Component {
    constructor() {
        super();
    }
    render() {
        return  <div className='out'>
            <h6>提示</h6>
            <p>操作成功</p>
            <button onClick={()=>this.props.getDate(true)}>确定</button>
        </div>
    }
}