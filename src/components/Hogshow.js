import React, { Component } from 'react';

class Hogshow extends Component{
	render(){
		return (<div className='pigTile'>
			<h3>Name: {this.props.hog.name}</h3>
			<p className="hoggyText">Specialty: {this.props.hog.specialty}</p>
			<p className="hoggyText">Greased: {this.props.hog.greased? 'Yes':'So not greased'}</p>
			<p className="hoggyText">Weight: ~{this.props.hog.weight} french door fridges</p>
			<p className="achievementText">Highest medal achieved: {this.props.hog['highest medal achieved']}</p>
			<img src={`/hog-imgs/${this.props.hog.name.split(' ').join('_')}.jpg`} alt="cannot render" />
			<br></br>
			<button onClick={this.props.unshowPiggie}>Take me back to Hogwarts</button>
		</div>)
	}
}

export default Hogshow
