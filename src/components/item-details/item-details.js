import React, {Component} from 'react'

import './item-details.css'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import ErrorButton from '../error-button'

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: true,
    hasError: false
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId
      || this.props.getData !== prevProps.getData) {
      this.updateItem()
    }
  }

  onItemLoaded = (item) => {
    this.setState({item: item, loading: false})
  }

  onError = () => {
    this.setState({error: true})
  }

  updateItem = () => {
    const {itemId, getData} = this.props

    if (!itemId) return
    if (this.state.loading !== true) this.setState({loading: true})

    getData(itemId)
      .then(this.onItemLoaded)
      .catch(this.onError)
  }

  render() {
    if (!this.state.item) {
      return (
        <p>Please select item</p>
      )
    }

    const {item, loading, hasError} = this.state
    const {imageUrl, name} = item

    const showItem = !(loading || hasError)
    const spinner = loading ? <Spinner/> : null
    const errorView = hasError ? <ErrorIndicator/> : null
    const itemView = showItem
      ? <React.Fragment>
        <img className="person-image"
             src={imageUrl}
             alt="Item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, index) => {
              return React.cloneElement(child, {item})
            })}
          </ul>
          <ErrorButton/>
        </div>
      </React.Fragment>
      : null

    return (
      <div className="item-details card">
        {spinner}
        {errorView}
        {itemView}
      </div>
    )
  }
}

// const ItemView = ({item, label, field}) => {
//   const {id, imageUrl, name, gender, birthYear, eyeColor} = item
//
//   return (
//     <React.Fragment>
//       <img className="person-image"
//            src={imageUrl}
//            alt="Item"/>
//
//       <div className="card-body">
//         <h4>{name}</h4>
//         <ul className="list-group list-group-flush">
//           {this.props.children}
//         </ul>
//         <ErrorButton/>
//       </div>
//     </React.Fragment>
//   )
// }

const Record = ({label, item, field}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {Record}