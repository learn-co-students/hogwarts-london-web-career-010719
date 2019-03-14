import React from 'react'

class Picture extends React.Component {
    
    render() {
        const hogName = this.props.name

        return (
            <img src={`hog-imgs/${hogName.toLowerCase().split(' ').join('_')}.jpg`} alt={hogName} />
        )
    }
 
}

export default Picture;