import React, { Component } from 'react';

class Unfilter extends Component{
	render(){
		return (<div className="filterWrapper">
		<button onClick={this.props.resetAllFilters}>Go back</button>
		</div>)
	}
}

export default Unfilter
