import React, {Component} from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const withData = (View) => {
  return class extends Component {

    state = {
      data: [],
      loading: true,
      error: false
    }

    componentDidMount = () => {
      this.update()
    }

    componentDidUpdate = (prevProps) => {
      if (this.props.getData !== prevProps.getData) {
        this.update()
      }
    }

    onError = () => {
      this.setState({error: true, loading: false})
    }

    onUpdated = (data) => {
      this.setState({data, loading: false})
    }

    update = () => {
      this.setState({loading: true, error: false})
      this.props.getData()
        .then(data => {this.onUpdated(data)})
        .catch(this.onError)
    }

    render = () => {
      const {data, loading, error} = this.state

      if (error) return <ErrorIndicator/>

      if (loading) return <Spinner/>

      return <View {...this.props} data={data}/>
    }
  }
}

export default withData