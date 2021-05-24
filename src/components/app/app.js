import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
<<<<<<< HEAD
import ItemList from '../item-list'
import PersonDetails from '../person-details'

import './app.css'

export default class App extends Component {

  state= {
    showPlanet: true,
    personSelected: null
=======

import './app.css'
import ErrorButton from "../error-button"
import ErrorIndicator from "../error-indicator"
import PersonPage from "../person-page/person-page"
import ItemList from "../item-list"
import PersonDetails from "../person-details"
import SwApiService from "../../services/swapi-service"

export default class App extends Component {
  swApiService = new SwApiService()

  state = {
    showPlanet: true,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
>>>>>>> d43b64784f1c475be8f867678ab0b185d7172271
  }

  onClickButton = () => {
    const {showPlanet} = this.state
    this.setState({showPlanet: !showPlanet})
  }

<<<<<<< HEAD
  onPersonSelected =(id) => {
    this.setState({personSelected: id})
    console.log(id)
  }

  render() {
    const {showPlanet, personSelected} = this.state
=======
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const {showPlanet} = this.state
>>>>>>> d43b64784f1c475be8f867678ab0b185d7172271

    const randomPlanetView = showPlanet ? <RandomPlanet/> : null

    return (
<<<<<<< HEAD
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
=======
      <div className="stardb-app">
        <Header/>
        {randomPlanetView}

        <div className="row mb2 button-row">
          <button className="toggle-planet btn btn-warning btn-lg"
                  onClick={this.onClickButton}>
            Toggle Random Planet
          </button>
          <ErrorButton/>
>>>>>>> d43b64784f1c475be8f867678ab0b185d7172271
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
