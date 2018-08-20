import React from 'react'

export default class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
          {this.props.location.params&&this.props.location.params.data.name}
        </div>
    }
}