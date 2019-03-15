import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import Sort from './Sort'

class App extends Component {
  
  state = {
    hogs: [...hogs],
    selectedHog: null,
    filter: false
  }
  
  setSelectedHog = hog =>  { 
    this.setState({selectedHog: hog})
  };
  
  sortedHogs = (type) => {
    if (type === "weight"){
    this.setState({
      hogs: [...hogs].sort( (a,b) => {return a.weight - b.weight })
    })
    }else{
      this.setState({
        hogs: [...hogs].sort( (a,b) => {return a["name"].localeCompare(b["name"])})
      })
    }
  }

  filteredHogs = () => {
    this.setState({filter: !this.state.filter})
  }
  

  
  render() {
    return (
      <div className="App">
          <Nav />
          <Sort sortedHogs = {this.sortedHogs} filteredHogs={this.filteredHogs}/>
          <HogList selectedHog={this.state.selectedHog} hogs={this.state.filter ? this.state.hogs.filter(hog => hog.greased === true ) : this.state.hogs}  setSelectedHog={this.setSelectedHog}/>

      </div>
    )
  }
}

export default App;
