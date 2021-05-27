import React from 'react'
import ItemDetails, {Record} from '../item-details'
import {withSwApiService} from '../hoc-helpers'

const PlanetDetails = (props) => {
  return <ItemDetails {...props}>
    <Record label="Population:" field="population"/>
    <Record label="Rotation period:" field="rotationPeriod"/>
    <Record label="Diameter:" field="diameter"/>
  </ItemDetails>
}

const mapMethodsToProps = (swApiService) => {
  return {
    getData: swApiService.getPlanet
  }
}

export default withSwApiService(mapMethodsToProps)(PlanetDetails)