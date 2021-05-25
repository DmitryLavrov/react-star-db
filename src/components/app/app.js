import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import ErrorButton from "../error-button"
import ErrorIndicator from "../error-indicator"
import PersonPage from "../person-page/person-page"
import SwApiService from "../../services/swapi-service"
import Row from '../row'
import ItemDetails, {Record} from '../item-details'
import ItemList from '../item-list'

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

    const {getPerson, getStarship} = this.swApiService

    const personDetails =
      <ItemDetails itemId={11}
                   getData={getPerson}>
        <Record label="Gender:" field="gender"/>
        <Record label="Eye color:" field="eyeColor"/>
      </ItemDetails>
    const starshipDetails =
      <ItemDetails itemId={5}
                   getData={getStarship}>
        <Record label="Model:" field="model"/>
        <Record label="Cost:" field="costInCredits"/>
      </ItemDetails>

    return (
      <div className="stardb-app">
        <Header/>

        {/*<Row left={personDetails} right={starshipDetails}/>*/}

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.swApiService.getAllPlanets}>
              {i => (<span>{i.name} (${i.diameter}) <button>!</button></span>)}
            </ItemList>
          </div>
          <div className="col-md-6">
            <ItemDetails personId={this.state.selectedPerson}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.swApiService.getAllStarships}>
              {i => (`${i.name} (${i.model})`)}
            </ItemList>
          </div>
          <div className="col-md-6">
            <ItemDetails personId={this.state.selectedPerson}/>
          </div>
        </div>

      </div>
    )
  }
};
