import React, {Component} from "react"
import ItemList from "../item-list"
import ItemDetails from "../item-details"
import SwApiService from "../../services/swapi-service"
import Row from "../row"
import ErrorBoundary from "../error-boundary"

export default class PersonPage extends Component {
  swApiService = new SwApiService()
  state = {
    selectedPerson: 4,
  }

  onItemSelected = (id) => {
    this.setState({selectedPerson: id})
  }

  render() {
    const itemList = (
      <ItemList onItemSelected={this.onItemSelected}
                getData={this.swApiService.getAllPeople}>
        {i => (`${i.name} (${i.birthYear})`)}
      </ItemList>
    )

    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson}/>
    )

     return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundary>
    )
  }
}
