import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import Unfilter from './Unfilter'
import Hoglist from './Hoglist'
import Hogshow from './Hogshow'
import hogs from '../porkers_data';

class App extends Component {

  constructor(){
    super()
    let i = 0;
    const hogsWithId = hogs.map(hog=>{
      i+=1;
      const weirdKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      const newHog = {...hog, id:i, weight:hog[weirdKey], hide:false}
      delete newHog[weirdKey]
      return newHog
    })
    this.state = {
      hogs:hogsWithId,
      selectedHogId:undefined,
      greaseFilter:false,
      sortByName:false,
      sortByWeight:false
    }
  }

  showMePiggie = (hogId) => {
    this.setState({
      selectedHogId:hogId
    })
  }

  selectedPiggie = () => {
    return this.state.hogs.find((hog)=>hog.id===this.state.selectedHogId)
  }

  unshowPiggie = () => {
    this.setState({
      selectedHogId:undefined
    })
  }

  filterGreased = () => {
    this.setState({
      greaseFilter:true
    })
  }

  sortName = () => {
    this.setState({
      sortByName:true
    })
  }

  sortWeight = () => {
    this.setState({
      sortByWeight:true
    })
  }

  filterAndSortPigs = () => {
    const notHiddenHogs = this.state.hogs.filter((hog)=>hog.hide===false)

    if (this.state.greaseFilter) {
      return notHiddenHogs.filter((hog)=>hog.greased===true)
    }
    else if (this.state.sortByName) {
      return notHiddenHogs.sort((a,b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {return 1}
        else {return -1}
      })
    }
    else if (this.state.sortByWeight) {
      return notHiddenHogs.sort((a,b) => a.weight - b.weight)
    }
    else {
      return notHiddenHogs
    }
  }

  resetAllFilters = () => {
    this.setState({
      greaseFilter:false,
      sortByName:false,
      sortByWeight:false
    })
  }

  unhidePigs = () => {
    this.setState({
      hogs:this.state.hogs.map((hog)=> {return {...hog, hide:false}})
    })
  }

  hidePig = (hogId) => {
    this.setState({
      hogs:this.state.hogs.map((hog)=>{
        if (hog.id === hogId) {return {...hog, hide:true}}
        return hog
      })
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          {(this.state.greaseFilter || this.state.sortByName || this.state.sortByWeight)?
            < Unfilter resetAllFilters={this.resetAllFilters}/> :
            < Filter filterGreased={this.filterGreased} sortName={this.sortName} sortWeight={this.sortWeight} unhidePigs={this.unhidePigs}/>}
          {this.state.selectedHogId?
            <Hogshow hog={this.selectedPiggie()} unshowPiggie={this.unshowPiggie}/>
            : < Hoglist hogs={this.filterAndSortPigs()} showMePiggie={this.showMePiggie} hidePig={this.hidePig}/>}
      </div>
    )
  }
}

export default App;
