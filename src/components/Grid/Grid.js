import React, { Component, PropTypes } from 'react'
import * as d3 from 'd3';
import classes from './Grid.scss'

function getGridData(settings) {
	let data = new Array();
	let xpos = 1; 
	let ypos = 1;
	let width = settings.size;
	let height = settings.size;
	
	for (let row = 0; row < settings.rows; row++) {
		data.push( new Array() );
		
		for (let column = 0; column < settings.cols; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
                row: row,
                col: column
			})
			xpos += width;
		}
		xpos = 1;
		ypos += height;	
	}
	return data;
}

function getGridSize(settings){
    let size = settings.rows * settings.size + 4;
    return size + 'px';
}

function renderGrid(gridData, settings, onDrop){
   
    let grid = d3.select("#grid")
        .append("svg")
        .attr("width", getGridSize(settings))
        .attr("height", getGridSize(settings));
        
    let row = grid.selectAll(".row")
        .data(gridData)
        .enter().append("g")
        .attr("class", "row");
        
    let column = row.selectAll(".square")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("class","square")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; })
        .attr("row", function(d) { return d.row; })
        .attr("col", function(d) { return d.col; })
        .attr("width", function(d) { return d.width; })
        .attr("height", function(d) { return d.height; })
        .style("fill", "#fff")
        .style("stroke", "#222")
        .on("drop", function() {
                onDrop(this);
            })
        .on("dragenter", function() {
            if(!d3.select(this).attr("marked"))
                d3.select(this).style("fill", "#e1e1e1");
            
        }).on("dragleave", function() {
            if(!d3.select(this).attr("marked"))
                d3.select(this).style("fill", "#ffffff");
        });
}

function onDragOver(ev){
    ev.preventDefault(ev);
}  
  
export default class Grid extends Component {
    constructor(props){
        super(props);
        this.onDrop = this.onDrop.bind(this);
    }
     
    static propTypes = {
        settings: React.PropTypes.object.isRequired,
        droppedMarkers: React.PropTypes.array.isRequired,
        dropMarker: React.PropTypes.func.isRequired,
        ready: React.PropTypes.bool.isRequired,
    }

    onDrop(target){
        d3.event.stopPropagation();
        d3.event.preventDefault();
        
        if(this.props.ready)
            return;
        
        let selection = d3.select(target);
        let data = d3.event.dataTransfer.getData("marker");
        let obj = JSON.parse(data);

        selection.attr("marked", function(d) { return 1; });
        selection.style("fill", obj.color);
        
        obj.col = parseInt(selection.attr("col"), 10);
        obj.row = parseInt(selection.attr("row"), 10);

        this.props.dropMarker(obj); 
    }  

    componentDidMount(){
        renderGrid(getGridData(this.props.settings), this.props.settings, this.onDrop);
    }

    render() {
        let style = {
            width: getGridSize(this.props.settings),
            height: getGridSize(this.props.settings),
            marginLeft: 'auto',
            marginRight: 'auto',
        };
        
        return (<div id="grid" onDragOver={onDragOver} style={style}></div>);
    }
}