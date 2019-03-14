import React, { Component } from 'react';
// import hogimages from './../hog-mgs'

class Hoggie extends Component{
	render(){
		return (<div className="pigTile">
			<h3 onClick={()=>this.props.showMePiggie(this.props.hog.id)}>{this.props.hog.name}</h3>
			<img src={`/hog-imgs/${this.props.hog.name.split(' ').join('_')}.jpg`} alt="cannot render" />
			<br></br>
			<button onClick={()=>this.props.hidePig(this.props.hog.id)}>Hide me</button>
			</div>)
	}
}

export default Hoggie
