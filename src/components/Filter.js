import React, { Component } from 'react';

class Filter extends Component{
	render(){
		return (<div className="filterWrapper">
		<button onClick={this.props.sortName}>Sort by name</button>
		<button onClick={this.props.sortWeight}>Sort by weight</button>
		<button onClick={this.props.filterGreased}>Give me only greased pig</button>
		<button onClick={this.props.unhidePigs}>Show all hidden pigs again</button>
		</div>)
	}
}

export default Filter
