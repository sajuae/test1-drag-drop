import React from 'react'
import Marker from '../Marker'
import classes from './Sidebar.scss'

export const Sidebar = (props) => {
    let key = 0;
    let markers = props.markers.map((marker) => {
        return (<Marker key={key++} x={marker.x} y={marker.y} color={marker.color} ready={props.ready} />);
    });
    
    return (
        <ul className={classes.sidebar}>
            {markers}
        </ul>
    );
}

Sidebar.propTypes = {
  markers: React.PropTypes.array.isRequired,
  ready: React.PropTypes.bool.isRequired
}

export default Sidebar