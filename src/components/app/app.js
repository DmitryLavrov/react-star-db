import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import ErrorButton from "../error-button"
import ErrorIndicator from "../error-indicator"
import PersonPage from "../person-page/person-page"
import SwApiService from "../../services/swapi-service"

export default class App extends Component {
  swApiService = new SwApiService()

  state = {
    showPlanet: true,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  onClickButton = () => {
    const {showPlanet} = this.state
    this.setState({showPlanet: !showPlanet})
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const {showPlanet} = this.state

    const randomPlanetView = showPlanet ? <RandomPlanet/> : null

    return (
      <div className="stardb-app">
        <Header/>
        {randomPlanetView}

        <div className="row mb2 button-row">
          <button className="toggle-planet btn btn-warning btn-lg"
                  onClick={this.onClickButton}>
            Toggle Random Planet
          </button>
          <ErrorButton/>
        </div>

        <PersonPage/>

        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList onItemSelected={this.onItemSelected}*/}
        {/*              getData={this.swApiService.getAllPlanets}>*/}
        {/*      {i => (<span>{i.name} (${i.diameter})<button>!</button></span>)}*/}
        {/*    </ItemList>*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <PersonDetails personId={this.state.selectedPerson}/>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList onItemSelected={this.onItemSelected}*/}
        {/*              getData={this.swApiService.getAllStarships}>*/}
        {/*      {i => (`${i.name} (${i.model})`)}*/}
        {/*    </ItemList>*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <PersonDetails personId={this.state.selectedPerson}/>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    )
  }
};
