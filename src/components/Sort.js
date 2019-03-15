import React, {Component} from 'react'

export default class Sort extends Component {
    

  render() {
    return(
            <div className="filterWrapper">
                <div className="ui menu">
                    <div className="item">
                        <label>Sort by </label>
                    </div>
                    <div className="ui item">
                        <select
                            className="ui selection dropdown"
                            name="sort"
                            onChange={(event) => this.props.sortedHogs(event.target.value) }>
                            <option value="name">Name</option>
                            <option value="weight">Weight</option>
                        </select>
                    </div>
                    <div className="item">
                        <label>Greased Pigs Only?</label>
                    </div>
                    <div className="item">
                        <input
                            className="ui toggle checkbox"
                            type="checkbox"
                            onChange = {() => this.props.filteredHogs()}
                        />
                    </div>
                </div>
            </div>
        )

    };
};