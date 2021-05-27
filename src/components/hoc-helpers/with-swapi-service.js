import React from 'react'
import {SwApiServiceConsumer} from '../swapi-service-context'

const withSwApiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (<SwApiServiceConsumer>
      {
        (swApiService) => {
          const serviceProps = mapMethodsToProps(swApiService)
          return <Wrapped {...props} {...serviceProps}/>
        }
      }
    </SwApiServiceConsumer>)
  }
}

export default withSwApiService