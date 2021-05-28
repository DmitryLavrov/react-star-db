import React from 'react'

import {compose, pipe, withChildFunction, withData, withSwApiService} from '../hoc-helpers'
import ItemList from '../item-list'

const renderName = ({name}) => <span>{name}</span>
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swApiService) => {
  return {getData: swApiService.getAllPeople}
}

const mapPlanetMethodsToProps = (swApiService) => {
  return {getData: swApiService.getAllPlanets}
}

const mapStarshipMethodsToProps = (swApiService) => {
  return {getData: swApiService.getAllStarships}
}


const PersonList = pipe(
  withChildFunction(renderName),
  withData,
  withSwApiService(mapPersonMethodsToProps)
)(ItemList)

const PlanetList = compose(
  withSwApiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const StarshipList = withSwApiService(mapStarshipMethodsToProps)(
  withData(
    withChildFunction(renderNameAndModel)(
      ItemList)))

export {
  PersonList,
  PlanetList,
  StarshipList
}