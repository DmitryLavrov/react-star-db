import React, {Component} from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: [],
      error: false
    }

    onError() {
      this.setState({Error: true})
    }

    componentDidMount() {
      getData()
        .then(data => {this.setState({data})})
        .catch(this.onError)
    }

    render = () => {
      const {data} = this.state

      if (this.state.error) {
        return <ErrorIndicator/>
      }

      if (!data) {
        return <Spinner/>
      }

      return (
        <View {...this.props} data={data}/>
      )
    }
  }
}

export default withData