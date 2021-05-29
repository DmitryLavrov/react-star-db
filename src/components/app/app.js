import React, {Component} from 'react'
import {BrowserRouter, Route} from "react-router-dom"

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
import {StarshipDetails} from "../sw-components/details"

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
          <BrowserRouter>
            <div className="stardb-app">
              <Header switchDataSource={this.switchDataSource}/>

              <RandomPlanet/>

              <Route path={"/"} exact render={() => <h2>Welcome to StarDB</h2>}/>

              <Route path={"/people"} exact render={() => <h2>People</h2>}/>

              <Route path={"/people"} component={PeoplePage}/>

              <Route path={"/planets"} component={PlanetsPage}/>

              <Route path={"/starships"} exact component={StarshipsPage}/>

              <Route path={"/starships/:id"} exact render={({match}) => {
                return <StarshipDetails itemId={match.params.id}/>
              }}/>

            </div>
          </BrowserRouter>
        </SwApiServiceProvider>
      </ErrorBoundary>
    )
  }
};
