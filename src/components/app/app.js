import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'

import './app.css'

export default class App extends Component {

  state= {
    showPlanet: true,
    personSelected: null
  }

  onClickButton = () => {
    const {showPlanet} = this.state
    this.setState({showPlanet: !showPlanet})
  }

  onPersonSelected =(id) => {
    this.setState({personSelected: id})
    console.log(id)
  }

  render() {
    const {showPlanet, personSelected} = this.state

    const randomPlanetView = showPlanet ? <RandomPlanet/> : null

    return (
      <div>
        <Header/>
        {randomPlanetView}
        <button className="btn btn-outline-info"
                onClick={this.onClickButton}>
          Toggle Random Planet
        </button>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={personSelected}/>
          </div>
        </div>
      </div>
    )
  }
};
