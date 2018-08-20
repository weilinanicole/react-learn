import React from 'react';
export default class App extends React.Component{
    constructor(){
        super()
    }

    state={
        Tree:{
            tag:'div',
            children:[
                'zs',
                18,
                {
                    tag:'p',
                    children:['fsafs',20],
                    props:{
                        name:'zs',
                        age:100
                    }
                }
            ]
        }
    }


    render(){
        return <div id='app'>
                    <this.state.Tree.tag name={this.state.Tree.children[0]} age={this.state.Tree.children[1]}>
                        {this.state.Tree.children[0]}
                        {this.state.Tree.children[1]}
                        <p name={this.state.Tree.children[2].props.name} age={this.state.Tree.children[2].props.age}>
                            {this.state.Tree.children[2].children[0]}
                            {this.state.Tree.children[2].children[1]}
                        </p>
                    </this.state.Tree.tag>
                </div>
    }
       
}