import React, {Component} from 'react'



export default class HogCard extends Component {

    // return a hog image on the passed hog argument
    returnImage = (name) => {
        let lowerName = name.toLowerCase().split(' ').join('_')
        return `/hog-imgs/${lowerName}.jpg`
    };


    
    render() {
      return (
        <div className=" pigTile ui four wide column ">
        
            <p>{this.props.name}</p>
            <img src={this.returnImage(this.props.name)} alt="pig"/><br></br>
            <button onClick={() => this.props.setSelectedHog(this.props)}>Info</button>
            <button>Hide Hog</button> 
            {
                 this.props.selectedHog ? 
                 <ul>
                     <li>Specialty: {this.props.specialty}</li>
                     <li>Weight: {this.props.weight}</li>
                     <li>Medal: {this.props.medal}</li>
                 </ul>
        
                  : null
            }
        </div>
      )
    }
  }

  
//   {
//     name: 'Augustus Gloop',
//     specialty: 'Vacuum tubes',
//     greased: true,
//     weight: 4.1,
//     medal: 'wood'
//   }