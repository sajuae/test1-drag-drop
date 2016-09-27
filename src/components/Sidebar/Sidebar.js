import React from 'react'
import Marker from '../Marker'
import classes from './Sidebar.scss'

export const Sidebar = (props) => (
  <div>
    <ul>
      <Marker x='3' y='7' color='#940329' />
      <Marker x='7' y='3' color='#298345' />
      <Marker x='5' y='4' color='#938475' />
      <Marker x='9' y='8' color='#234598' />
    </ul>
  </div>
)

//Counter.propTypes = {
  //counter: React.PropTypes.number.isRequired,
  //doubleAsync: React.PropTypes.func.isRequired,
  //increment: React.PropTypes.func.isRequired
//}

export default Sidebar
