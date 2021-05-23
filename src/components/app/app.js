import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import ErrorButton from "../error-button"
import ErrorIndicator from "../error-indicator"
import PersonPage from "../person-page/person-page"

export default class App extends Component {

  state= {
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
      <div>
        <Header/>
        {randomPlanetView}
        <button className="btn btn-outline-info"
                onClick={this.onClickButton}>
          Toggle Random Planet
        </button>
        <ErrorButton />
        <PersonPage/>
        <PersonPage/>
        <PersonPage/>
      </div>
    )
  }
};
