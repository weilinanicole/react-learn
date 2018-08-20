import React from 'react';
import Alert from './alert.jsx';
import Confirm from './confirm.jsx';
import Prompt from './prompt.jsx';
export default class dialog extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
        {this.props.mark&&<mark>
        {this.props.type === 'alert'&&<Alert getDate={this.props.remove.bind(this)}/>}
        {this.props.type === 'confirm' && <Confirm getCon={this.props.remove.bind(this)}/>}
        {this.props.type === 'prompt' && <Prompt getPrompt={this.props.remove.bind(this)}/>}
        </mark>}</div>
    }
}