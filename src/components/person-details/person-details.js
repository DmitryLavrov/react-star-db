import React, {Component} from 'react'

import './person-details.css'
import SwApiService from "../../services/swapi-service"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"
import ErrorButton from "../error-button"

export default class PersonDetails extends Component {
  swapiService = new SwApiService()

  state = {
    person: null,
    loading: true,
    hasError: false
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) this.updatePerson()
  }

  onPersonLoaded = (person) => {
    this.setState({person, loading: false})
  }

  onError = () => {
    this.setState({error: true})
  }

  updatePerson = () => {
    const {personId} = this.props

    if (!personId) return
    if (this.state.loading !== true) this.setState({loading: true})

    this.swapiService.getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError)
  }

  render() {
    if (!this.state.person) {
      return (
        <p>Please select item</p>
      )
    }

    const {person, loading, hasError} = this.state

    const showPerson = !(loading || hasError)
    const spinner = loading ? <Spinner/> : null
    const errorView = hasError ? <ErrorIndicator/> : null
    const personView = showPerson ? <PersonView person={person}/> : null

    return (
      <div className="person-details card">
        {spinner}
        {personView}
        {errorView}
      </div>
    )
  }
}

const PersonView = ({person}) => {
  const {id, name, gender, birthYear, eyeColor} = person

  return (
    <React.Fragment>
      <img className="person-image"
           src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
           alt="Person"/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton/>
      </div>
    </React.Fragment>
  )
}