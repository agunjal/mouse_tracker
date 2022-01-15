import React from 'react'
import PropTypes from 'prop-types'

const PositionIndicator = (props) => {
  return <div style={props.positions} className="red-dot"></div>
}

PositionIndicator.propTypes = {
  positions: PropTypes.object
}

export default PositionIndicator
