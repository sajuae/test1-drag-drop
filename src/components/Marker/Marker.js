import React from 'react'
import classes from './Marker.scss'

export const Marker = (props) => (
  <li>
    X:{props.x} Y:{props.y} <span className={classes.marker}>a</span>
  </li>
)

//Counter.propTypes = {
  //counter: React.PropTypes.number.isRequired,
  //doubleAsync: React.PropTypes.func.isRequired,
  //increment: React.PropTypes.func.isRequired
//}

export default Marker
