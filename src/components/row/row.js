import React from "react"
import PropTypes from "prop-types"

const Row = ({left, right}) => {
  return (
    <div className="row m2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>)
}

Row.prototype = {
  left: PropTypes.node,
  right: PropTypes.node
}

export default Row