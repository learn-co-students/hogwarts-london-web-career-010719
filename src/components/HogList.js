import React, {Component} from 'react'
import HogCard from './HogCard'

export default class HogList extends Component {
    

  render() {
    return(
        <div className = "ui grid container">
        
            {this.props.hogs.map(hog => <HogCard {...hog} selectedHog={this.props.selectedHog && this.props.selectedHog.name === hog.name}  setSelectedHog={this.props.setSelectedHog}/>)}
        
        </div>
    )

    };
};
