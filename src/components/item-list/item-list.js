import React, {Component} from 'react'

import './item-list.css'
import SwApiService from '../../services/swapi-service'
import Spinner from '../spinner'

export default class ItemList extends Component {
  swApi = new SwApiService()
  state = {
    peopleList: []
  }

  componentDidMount() {
    this.swApi.getAllPeople()
      .then(peopleList => {
        this.setState({peopleList})
      })
  }

  onClickPerson = (id) => {
    this.props.onPersonSelected(id)
  }

  renderItems = (items) => {
    return items.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id} onClick={() => this.onClickPerson(id)}>
          {name}
        </li>
      )
    })
  }

  render() {
    const {peopleList} = this.state

    if (!peopleList) {
      return <Spinner/>
    }

    const items = this.renderItems(peopleList)

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    )
  }
}
