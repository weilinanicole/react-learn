import React from 'react';
import Dialog from './dialog.jsx';
import '../scss/index.min.css';
import './font.js';
export default class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            btns: ['alert', 'confirm', 'prompt'],
            type:null
        }
    }
    show(name) {
        this.setState({
            type:name,
            mark:true
        })
    }
    remove(){
        this.setState({
            type: null,
            mark: false
        })
    }
    render(){
        return <div className="wrap">
        <main>
            {
                this.state.btns.map((item, index) => {
                    return <button key={index} onClick={() => {
                        this.show(item)
                    }}>打开{item}提示框</button>
                })
            }
        </main>
            <Dialog type={this.state.type} mark={this.state.mark} remove={this.remove.bind(this)}/>
        </div>
    }
}