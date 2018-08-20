import React from 'react'

export default class Shop extends React.Component{
    constructor(){
        super()
        this.state={
            list:['热卖','端午节','水果','蔬菜','轻食','粮油','乳品']
        }
    }
    render(){
        console.log(this.props.match.params.id)
        return <div>
            {
                this.props.match.params.id?<p>{this.state.list[this.props.match.params.id]}</p>:null
            }

        </div>
    }
}