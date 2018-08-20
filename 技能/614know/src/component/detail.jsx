import React from 'react'

export default class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
         window.localStorage.setItem('item',JSON.stringify(this.props.location))
        // console.log(typeof this.props.location)
    }
    render(){
        //  let data=this.props.location.params&&this.props.location.params.data;
        // return <div>
        //    <li>{data.target.question.title}</li>
        //    <li>{data.target.excerpt}</li>
        // </div>
        let data=window.localStorage.getItem('item')&&window.localStorage.getItem('item');
        return <div>{data}</div>
    }
}
