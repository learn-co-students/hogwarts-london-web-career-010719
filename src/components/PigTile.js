import React from 'react'
import Picture from './Picture'

class PigTile extends React.Component {
    state = {
        name: this.props.hog.name,
        specialty: this.props.hog.specialty,
        greased: this.props.hog.greased,
        weight: this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'],
        medal: this.props.hog['highest medal achieved']
    }

    render() {
        return (
            <div className="pigTile minPigTile maxPigTile" onClick={() => this.props.showDetail(this.props.id)}>
                <Picture name={this.state.name}/>
                <h3>Name: {this.state.name}</h3>
                <ul className='hoggyText'>
                    <li>Specialty: {this.state.specialty}</li>
                    <li>Greased: {this.state.greased ? 'Yes' : 'No'}</li>
                    <li>Weight: {this.state.weight}</li>
                    <li>Medal: {this.state.medal}</li>
                </ul>
            </div>
            
        )
    }
}

export default PigTile;