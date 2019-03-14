import React from 'react' 
import PigList from './PigList'
import PigTile from './PigTile';

class Container extends React.Component {
    state = {
        hogs: this.props.hogs,
        selectedHog: undefined,
    }

    showDetail = (name) => {
        this.setState({
            ...this.state,
            selectedHog: this.state.hogs.find((hog)=> hog.name === name)
        })
    }

    sortByName = () => {
        this.setState({
            hogs: this.state.hogs.sort((a,b) => {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()
                if( nameA > nameB ) {
                    return -1;
                }
                if( nameA < nameB) {
                    return 1;
                }
                return 0;
            }).reverse(),
            ...this.state
        })
    }

    sortByWeight = () => {
        this.setState({
            hogs: this.state.hogs.sort((a,b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']),
            ...this.state
        })
    }

    filteredHogs = (event) => {
        // console.log(this.state.hogs.filter(hog => hog.greased === true))
        if (event.target.innerText === 'Greased Filter: Off') {
            event.target.innerText = 'Greased Filter: On'
            this.setState({
                ...this.state,
                hogs: this.state.hogs.filter(hog => hog.greased === true)
            }) 
        } else {
            event.target.innerText = 'Greased Filter: Off'
            this.setState({
                ...this.state,
                hogs: this.props.hogs
            })
        }
    }

    hideHog = (event) => {
        event.stopPropagation()
        event.target.parentNode.style.display = 'none'
    }

    render() {
        return (
            <div className='ui grid container'>
                <div className='filterWrapper'>
                    Sort: 
                    <button onClick={this.sortByName}>Name</button>   
                    <button onClick={this.sortByWeight}>Weight</button> 
                    <button onClick={this.filteredHogs}>Greased Filter: Off</button>
                </div>

                <div className='indexWrapper'>
                    {   
                        this.state.selectedHog === undefined ? 
                        this.state.hogs.map((hog, index) => <PigList key={index} id={hog} hog={hog} showDetail={this.showDetail}hideHog={this.hideHog}/>) :
                        <PigTile hog={this.state.selectedHog} />
                    }
                </div>
            </div>
        )
    }
}

export default Container;