import React, { Component, PropTypes } from 'react'
import d3 from 'd3';
import classes from './Grid.scss'

console.log('d3:');
console.log(d3);

function getGridData() {
	var data = new Array();
	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
	var ypos = 1;
	var width = 50;
	var height = 50;
    var click = 0;
	
	// iterate for rows	
	for (var row = 0; row < 10; row++) {
		data.push( new Array() );
		
		// iterate for cells/columns inside rows
		for (var column = 0; column < 10; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
                click: click
			})
			// increment the x position. I.e. move it over by 50 (width variable)
			xpos += width;
		}
		// reset the x position after a row is complete
		xpos = 1;
		// increment the y position for the next row. Move it down 50 (height variable)
		ypos += height;	
	}
	return data;
}

function renderGrid(gridData){
    console.log('renderGrid');
    console.log(d3);
    console.log(d3.select);
    
    var grid = d3.select("#grid")
        .append("svg")
        .attr("width","510px")
        .attr("height","510px");
        
    var row = grid.selectAll(".row")
        .data(gridData)
        .enter().append("g")
        .attr("class", "row");
        
    var column = row.selectAll(".square")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("class","square")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; })
        .attr("width", function(d) { return d.width; })
        .attr("height", function(d) { return d.height; })
        .style("fill", "#fff")
        .style("stroke", "#222");
}

export default class Grid extends Component {

  componentDidMount(){
    renderGrid(getGridData());
  }

  render() {
    return (
      <div>
        <div id="grid"></div>
      </div>
      );
  }
} 
    
//Counter.propTypes = {
  //counter: React.PropTypes.number.isRequired,
  //doubleAsync: React.PropTypes.func.isRequired,
  //increment: React.PropTypes.func.isRequired
//}


