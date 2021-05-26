import React, {Component} from 'react'

import './app.css'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
import SwApiService from '../../services/swapi-service'
import Row from '../row'
import ItemDetails, {Record} from '../item-details'
import ErrorBoundary from '../error-boundary'
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from '../sw-components'
import {SwApiServiceProvider} from '../swapi-service-context'
import DummySwApiService from '../swapi-service-context'


export default class App extends Component {
  // swApiService = new SwApiService()
  // swApiService = new DummySwApiService()

  state = {
    showPlanet: true,
    swApiService: new SwApiService(),
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  updateSta

  onClickButton = () => {
    const {showPlanet} = this.state
    this.setState({showPlanet: !showPlanet})
  }

  switchDataSource = () => {
    this.setState(({swApiService}) => {
      const Service = swApiService instanceof SwApiService
        ? DummySwApiService
        : SwApiService
      console.log('switched to',Service.name)
      return {
        swApiService: new Service()
      }
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const {showPlanet} = this.state

    const randomPlanetView = showPlanet ? <RandomPlanet/> : null

    const {getPerson, getStarship} = this.state.swApiService

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
      <ErrorBoundary>
        <SwApiServiceProvider value={this.state.swApiService}>
          <div className="stardb-app">
            <Header switchDataSource={this.switchDataSource}/>

            <PersonList/>

            <PersonDetails itemId={11}/>

            <PlanetList/>

            <PlanetDetails itemId={5}/>

            <StarshipList/>

            <StarshipDetails itemId={9}/>

            {/*<Row left={personDetails} right={starshipDetails}/>*/}

          </div>
        </SwApiServiceProvider>
      </ErrorBoundary>
    )
  }
};
