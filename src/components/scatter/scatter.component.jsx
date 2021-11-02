import React from "react";
import * as d3 from 'd3'
import ScatterD3 from "./scatter-d3";

class Scatter extends React.Component{
    constructor(props){
        super(props);
        this.scatterId = React.createRef();

        this.state = {

        }
    }

    componentDidMount(){
        let url = `https://raw.githubusercontent.com/nafiul-nipu/contrails-scatter-tree-evolution-d3/master/src/data/particles/${this.props.time}.csv`

        let xDomain = {} ;
        let yDomain = {};
        console.log(this.props.time)
        const row = d => {
            d['origId'] = +d['origId'];
            d['iceLabel'] = +d['iceLabel'];
            d['T'] = +d['T'];
            d['d'] = +d['d'];
            d['Points:0'] = +d['Points:0'];
            d['Points:1'] = +d['Points:1'];
            d['Points:2'] = +d['Points:2'];
            d["cluster"] = +d['cluster'];

            xDomain.max = Math.max(xDomain.max || -Infinity, +d['Points:0']);
            yDomain.max = Math.max(yDomain.max || -Infinity, +d['Points:1']);

            xDomain.min = Math.min(xDomain.min || Infinity, +d['Points:0']);
            yDomain.min = Math.min(yDomain.min || Infinity, +d['Points:1']);

            return d

        }
        d3.csv(url, row).then(data => {
            this.setState({
                scatterPlot: new ScatterD3(this.scatterId.current, data, xDomain, yDomain)
            })
        })
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