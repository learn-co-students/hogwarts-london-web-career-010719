import React from 'react'
import Picture from './Picture'

class PigList extends React.Component {
    render() {
        return (
            <div className="pigTile" onClick={() => this.props.showDetail(this.props.hog.name)}>
                <Picture name={this.props.hog.name}/>
                <h3>{this.props.hog.name}</h3>
                <button onClick={this.props.hideHog}>Hide</button>
            </div>
        )
    }
}

export default PigList;