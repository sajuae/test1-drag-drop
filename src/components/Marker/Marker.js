import React, { Component, PropTypes } from 'react'
import classes from './Marker.scss'

export default class Marker extends Component{
  constructor(props){
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
  }
  
 static propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    ready: React.PropTypes.bool.isRequired
  }
  
  onDragStart(ev){
    let obj = JSON.stringify({
        x: this.props.x, 
        y: this.props.y,
        color: this.props.color
    });
    
    ev.dataTransfer.setData("marker", obj);
  }
  
  render(){
    let style={
        backgroundColor: this.props.color
    };
  
    return (
      <li draggable={!this.props.ready} onDragStart={this.onDragStart}>
        <div className={classes.markerDot} style={style}> </div>
        <span>X:{this.props.x} Y:{this.props.y}</span>
      </li>
    );   
  }
}