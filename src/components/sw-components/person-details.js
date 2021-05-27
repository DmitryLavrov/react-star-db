import React from 'react'
import ItemDetails, {Record} from '../item-details'
import {withSwApiService} from '../hoc-helpers'

const PersonDetails = (props) => {
  return <ItemDetails {...props}>
    <Record label="Gender:" field="gender"/>
    <Record label="Eye color:" field="eyeColor"/>
  </ItemDetails>
}

const mapMethodsToProps = (swApiService) => {
  return {
    getData: swApiService.getPerson
  }
}

export default withSwApiService(mapMethodsToProps)(PersonDetails)