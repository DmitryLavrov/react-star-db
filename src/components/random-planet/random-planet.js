import React, {Component} from 'react'
import PropTypes from "prop-types"

import './random-planet.css'
import SwApiService from '../../services/swapi-service'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'


export default class RandomPlanet extends Component {
  static defaultProps = {updateInterval: 10000}

  static propTypes = {
    // updateInterval: (props, propName, compName) => {
    //   const Value = props[propName]
    //
    //   if (typeof Value === 'number' && !Value.isNaN) {
    //     return null
    //   }
    //
    //   return new TypeError( `${compName}:${propName} must be a number!`)
    // }

    updateInterval: PropTypes.number
  }

  swApi = new SwApiService()
  interval

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, this.props.updateInterval)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentWillUnmount() {
    clearTimeout(this.interval)
  }

  componentDidCatch(error, errorInfo) {
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20 + 2)
    this.swApi
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const {planet, loading, error} = this.state

    const showPlanet = !(error || loading)

    const errorView = error ? <ErrorIndicator/> : null
    const spinner = loading ? <Spinner/> : null
    const planetView = showPlanet ? <PlanetView planet={planet}/> : null

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {planetView}
        {errorView}
      </div>
    )
  }
}


const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet

  return (
    <React.Fragment>
      <img className="planet-image"
           alt="The planet"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}