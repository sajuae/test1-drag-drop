import React from 'react'
import Sidebar from '../Sidebar'
import Grid from '../Grid'
import CheckButton from '../CheckButton'
import classes from './Demo.scss'

export const Demo = (props) => (
  <div>
    <div className={classes.sidebarContainer}>
        <Sidebar markers={props.markers} ready={props.ready} />
    </div>
    <div className={classes.gridContainer}>
        <Grid 
            settings={props.grid} 
            droppedMarkers={props.droppedMarkers} 
            dropMarker={props.dropMarker}
            ready={props.ready} />
        <CheckButton 
            checkMarkers={props.checkMarkers} 
            ready={props.ready}
            checked={props.checked}
            valid={props.valid}
        />
    </div>
  </div>
)

Demo.propTypes = {
  grid: React.PropTypes.object.isRequired,
  markers: React.PropTypes.array.isRequired,
  droppedMarkers: React.PropTypes.array.isRequired,
  ready: React.PropTypes.bool.isRequired,
  checked: React.PropTypes.bool.isRequired,
  valid: React.PropTypes.bool.isRequired,
  dropMarker: React.PropTypes.func.isRequired,
  checkMarkers: React.PropTypes.func.isRequired,
}

export default Demo