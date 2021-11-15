import React from "react";
import * as d3 from 'd3'
import ScatterD3 from "./scatter-d3";
import LineD3 from "./line-d3";

class Scatter extends React.Component{
    constructor(props){
        super(props);
        this.scatterId = React.createRef();

        this.state = {

        }
    }

    componentDidMount(){

        // if(this.props.time === 0.2){
            let url = `https://raw.githubusercontent.com/nafiul-nipu/contrails-scatter-tree-evolution-d3/master/src/data/particles/contrails1/${this.props.time}.csv`

            let xDomain = {} ;
            let yDomain = {};

            // console.log(this.props.time)
            const row = d => {
                d['X'] = +d['X'];
                d['Y'] = +d['Y'];

                xDomain.max = Math.max(xDomain.max || -Infinity, +d['X']);
                yDomain.max = Math.max(yDomain.max || -Infinity, +d['Y']);

                xDomain.min = Math.min(xDomain.min || Infinity, +d['X']);
                yDomain.min = Math.min(yDomain.min || Infinity, +d['Y']);

                return d

            }

            d3.csv(url, row).then(data => {
            
                new LineD3(this.scatterId.current, data, xDomain, yDomain)
                
            })


        // }
    }

    shouldComponentUpdate(nextProps){
        return true
    }

    render(){
        return(
            <div ref={this.scatterId}>{this.props.time}</div>
        )
    }
}

export default Scatter;