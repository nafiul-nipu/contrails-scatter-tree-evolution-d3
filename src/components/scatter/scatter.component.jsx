import React from "react";

import ScatterD3 from "./scatter-d3";

class Scatter extends React.Component{
    constructor(props){
        super(props);
        this.scatterId = React.createRef();

        this.state = {

        }
    }

    componentDidMount(){

    }

    shouldComponentUpdate(nextProps){
        return true
    }

    render(){
        return(
            <div ref={this.scatterId}></div>
        )
    }
}