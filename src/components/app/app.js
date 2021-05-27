import React, {Component} from 'react'

import './app.css'
import Header from '../header'
import RandomPlanet from '../random-planet'
import SwApiService from '../../services/swapi-service'
import ErrorBoundary from '../error-boundary'
import {SwApiServiceProvider} from '../swapi-service-context'
import DummySwApiService from '../swapi-service-context'
import {PeoplePage} from "../pages"
import {PlanetsPage} from "../pages"
import {StarshipsPage} from "../pages"

export default class App extends Component {
  state = {
    swApiService: new SwApiService()
  }

  switchDataSource = () => {
    this.setState(({swApiService}) => {
      const Service = swApiService instanceof SwApiService
        ? DummySwApiService
        : SwApiService
      return {swApiService: new Service()}
    })
  }

  render() {
    return (
      <ErrorBoundary>
        <SwApiServiceProvider value={this.state.swApiService}>
          <div className="stardb-app">
            <Header switchDataSource={this.switchDataSource}/>

            <RandomPlanet/>

            <PeoplePage/>

            <PlanetsPage/>

            <StarshipsPage/>

          </div>
        </SwApiServiceProvider>
      </ErrorBoundary>
    )
  }
};
