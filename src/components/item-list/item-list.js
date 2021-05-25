import React from 'react'

import './item-list.css'
import SwApiService from '../../services/swapi-service'
import {withData} from '../hoc-helpers'

const ItemList = (props) => {

    const {data, onItemSelected, children: renderLabel} = props

    const items = data.map(item => {
      const {id} = item
      const label = renderLabel(item)

      return (
        <li className="list-group-item"
            key={id} onClick={() => onItemSelected(id)}>
          {label}
        </li>
      )
    })

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    )
}

const {getAllPeople} = new SwApiService()

export default withData(ItemList, getAllPeople)