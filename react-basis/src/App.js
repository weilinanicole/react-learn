import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import NewModule from './components/NewModule';

class App extends Component {
  state={
    persons:[
      {names:'zs',age:10},
      {names:'lisi',age:11},
      {names:'wangwu',age:12},
      {names:'zhaoliu',age:13},
    ]
  }

  methods=(newName)=>{
    this.setState({
      persons:[
        {names:newName,age:10},
        {names:'hehehe',age:11},
        {names:'wawawa',age:12},
        {names:'zhaoliu',age:13}
      ]
    })

  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={()=>this.methods('我叫新名字')}>点击修改值</button> */}
        <button onClick={this.methods.bind(this,'hello')}>点击传值</button>
        <NewModule names={this.state.persons[0].names} count={this.state.persons[0].age}/>
        <NewModule names={this.state.persons[1].names} 
                   count={this.state.persons[1].age}
                   myClick={this.methods.bind(this,'miss u')}/>
        <NewModule names={this.state.persons[2].names} count={this.state.persons[2].age}/>
        <NewModule names={this.state.persons[3].names} count={this.state.persons[3].age}>今天是2018年6月5日</NewModule>
      </div>
    );
  }
}



// ReactDOM.render(
//   <App  name='zs'/>
// )

export default App;
