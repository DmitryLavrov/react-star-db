import React from 'react'

import {withData, withSwApiService} from '../hoc-helpers'
import ItemList from '../item-list'

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

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

const PersonList = withSwApiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps)

const PlanetList = withSwApiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps)

const StarshipList = withSwApiService(
  withData(
    withChildFunction(ItemList, renderNameAndModel)),
  mapStarshipMethodsToProps)

export {
  PersonList,
  PlanetList,
  StarshipList
}