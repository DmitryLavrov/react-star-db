import React from 'react'
import ItemDetails, {Record} from '../item-details'
import {SwApiServiceConsumer} from '../swapi-service-context'

const PersonDetails = ({itemId}) => {
  return <SwApiServiceConsumer>
    {
      ({getPerson}) => {
        return <ItemDetails itemId={itemId}
                            getData={getPerson}>
          <Record label="Gender:" field="gender"/>
          <Record label="Eye color:" field="eyeColor"/>
        </ItemDetails>
      }
    }
  </SwApiServiceConsumer>
}

const PlanetDetails = ({itemId}) => {
  return <SwApiServiceConsumer>
    {
      ({getPlanet}) => {
        return <ItemDetails itemId={itemId}
                            getData={getPlanet}>
          <Record label="Population:" field="population"/>
          <Record label="Rotation period:" field="rotationPeriod"/>
          <Record label="Diameter:" field="diameter"/>
        </ItemDetails>
      }
    }
  </SwApiServiceConsumer>
}

const StarshipDetails = ({itemId}) => {
  return <SwApiServiceConsumer>
    {
      ({getStarship}) => {
        return <ItemDetails itemId={itemId}
                            getData={getStarship}>
          <Record label="Model:" field="model"/>
          <Record label="Length:" field="length"/>
          <Record label="Cost:" field="costInCredits"/>
        </ItemDetails>
      }}
  </SwApiServiceConsumer>
}

export
{
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}