import React from 'react'
import ItemDetails, {Record} from '../item-details'
import {withSwApiService} from '../hoc-helpers'

const StarshipDetails = (props) => {
  return <ItemDetails {...props}>
    <Record label="Model:" field="model"/>
    <Record label="Length:" field="length"/>
    <Record label="Cost:" field="costInCredits"/>
  </ItemDetails>
}

const mapMethodsToProps = (swApiService) => {
  return {
    getData: swApiService.getStarship
  }
}

export default withSwApiService(mapMethodsToProps)(StarshipDetails)
