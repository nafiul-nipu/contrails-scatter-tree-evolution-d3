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
        // let url = `https://raw.githubusercontent.com/nafiul-nipu/contrails-scatter-tree-evolution-d3/master/src/data/particles/${this.props.time}.csv`

        // let xDomain = {} ;
        // let yDomain = {};
        // // console.log(this.props.time)
        // const row = d => {
        //     d['origId'] = +d['origId'];
        //     d['iceLabel'] = +d['iceLabel'];
        //     d['T'] = +d['T'];
        //     d['d'] = +d['d'];
        //     d['Points:0'] = +d['Points:0'];
        //     d['Points:1'] = +d['Points:1'];
        //     d['Points:2'] = +d['Points:2'];
        //     d["cluster"] = +d['cluster'];

        //     xDomain.max = Math.max(xDomain.max || -Infinity, +d['Points:0']);
        //     yDomain.max = Math.max(yDomain.max || -Infinity, +d['Points:1']);

        //     xDomain.min = Math.min(xDomain.min || Infinity, +d['Points:0']);
        //     yDomain.min = Math.min(yDomain.min || Infinity, +d['Points:1']);

        //     return d

        // }

        // const attrRow = d => {

        //     d['nodeCluster'] = +d['nodeCluster'];
        //     d['temperature'] = +d['temperature'];
        //     d['ice_particles'] = +d['ice_particles'];
        //     d['ice_mass'] = +d['ice_mass'];
        //     d['ice_length'] = +d['ice_length'];
            
        //     return d
        // }
        // d3.csv(url, row).then(data => {
        //     // this.setState({
        //     //     scatterPlot: new ScatterD3(this.scatterId.current, data, xDomain, yDomain)
        //     // })
        //     let attrUrl = `https://raw.githubusercontent.com/nafiul-nipu/contrails-scatter-tree-evolution-d3/master/src/data/attribute/${this.props.time}.csv`
        //     // console.log(this.props.time)
        //     // console.log(xDomain)
        //     // console.log(yDomain)
        //     d3.csv(attrUrl, attrRow).then(attributes => {
        //         // if(this.props.time == 0.1){
        //             new ScatterD3(this.scatterId.current, data, xDomain, yDomain, attributes)

        //         // }
                
        //     })

        // })


        if(this.props.time === 0.2){
            let url = `https://raw.githubusercontent.com/nafiul-nipu/contrails-scatter-tree-evolution-d3/master/src/data/particles/${this.props.time}.csv`

            let x1Domain = {} ;
            let y1Domain = {};

            let x2Domain = {} ;
            let y2Domain = {};
            // console.log(this.props.time)
            const row = d => {
                d['X1'] = +d['X1'];
                d['Y1'] = +d['Y1'];
                d['X2'] = +d['X2'];
                d['Y2'] = +d['Y2'];

                x1Domain.max = Math.max(x1Domain.max || -Infinity, +d['X1']);
                y1Domain.max = Math.max(y1Domain.max || -Infinity, +d['Y1']);

                x1Domain.min = Math.min(x1Domain.min || Infinity, +d['X1']);
                y1Domain.min = Math.min(y1Domain.min || Infinity, +d['Y1']);


                x2Domain.max = Math.max(x2Domain.max || -Infinity, +d['X2']);
                y2Domain.max = Math.max(y2Domain.max || -Infinity, +d['Y2']);

                x2Domain.min = Math.min(x2Domain.min || Infinity, +d['X2']);
                y2Domain.min = Math.min(y2Domain.min || Infinity, +d['Y2']);

                return d

            }

            let xDomain = {}
            let yDomain = {}

            if (x1Domain.max >= x2Domain.max){
                xDomain.max = x1Domain.max
            }else{
                xDomain.max = x2Domain.max
            }

            if (x1Domain.min <= x2Domain.min){
                xDomain.min = x1Domain.min
            }else{
                xDomain.min = x2Domain.min
            }

            if (y1Domain.max >= y2Domain.max){
                yDomain.max = y1Domain.max
            }else{
                yDomain.max = y2Domain.max
            }

            if (y1Domain.max <= y2Domain.max){
                yDomain.min = y1Domain.min
            }else{
                yDomain.min = y2Domain.min
            }


            d3.csv(url, row).then(data => {
            
                new LineD3(this.scatterId.current, data, xDomain, yDomain)
                
            })


        }
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