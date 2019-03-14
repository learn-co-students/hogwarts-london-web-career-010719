import React, { Component } from 'react';
import Hoggie from './Hoggie'

class Hoglist extends Component{
	render(){
		return (<div>
			{this.props.hogs.map((hog)=><Hoggie hog={hog} showMePiggie={this.props.showMePiggie} hidePig={this.props.hidePig}/>)}
			</div>)
	}
}

export default Hoglist
