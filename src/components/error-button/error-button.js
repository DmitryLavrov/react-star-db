import React, {Component} from "react"

export default class ErrorButton extends Component {
  state = {
    errorFlag: false
  }

  makeError = () => {
    this.setState({errorFlag: true})
  }

  render = () => {
    if (this.state.errorFlag) {
      this.foo.bar = 0
    }

    return (
      <button className="btn btn-info" onClick={this.makeError}>
        Make Error
      </button>
    )
  }
}