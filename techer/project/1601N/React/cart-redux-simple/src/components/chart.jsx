import React from 'react';
import List from './list.jsx';
import '../scss/chart.css';
import {connect} from 'react-redux';

class Chart extends React.Component{
	constructor(){
		super();
	}

	render(){
		return <div className="box">
			{/**对比Vue的props传递*/}
			<List />
			<div className="box_price">
				<input type="checkbox" checked={this.props.isSelectAll} onChange={(e)=>this.props.clickSelectAll(e.target.checked)}/>全选
				<p>价格: ${this.props.price}</p>
			</div>
		</div>
	}
}

const mapStatetoProps = (state)=>{
	return {
		price: state.list.price,
		isSelectAll: state.list.isSelectAll
	}
}

const mapDispatchtoProps = (dispatch)=>{
	return {
		clickSelectAll: (val)=>{
			dispatch({
				type: 'CLICK_SELECT_ALL',
				text: val
			}),
			dispatch({
				type: 'SELECT_ALL_ITEM',
				text: val
			}),
			dispatch({
				type: 'CHANGE_PRICE'
			})
		}
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Chart)