import React from 'react'

import {withData, withSwApiService} from '../hoc-helpers'
import ItemList from '../item-list'

const withChildFunction = (fn) => (Wrapped) => {
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


const pipe = (...functions) => x => functions.reduce((acc, fn) => fn(acc), x)

const PersonList = pipe(withChildFunction(renderName),
                        withData,
                        withSwApiService(mapPersonMethodsToProps))(ItemList)

// const PersonList = withSwApiService(mapPersonMethodsToProps)(
//                      withData(
//                        withChildFunction(renderName)(
//                          ItemList)))



const PlanetList = withSwApiService(mapPlanetMethodsToProps)(
                     withData(
                       withChildFunction(renderName)(
                         ItemList)))

const StarshipList = withSwApiService(mapStarshipMethodsToProps)(
                       withData(
                         withChildFunction(renderNameAndModel)(
                           ItemList)))

export {
  PersonList,
  PlanetList,
  StarshipList
}