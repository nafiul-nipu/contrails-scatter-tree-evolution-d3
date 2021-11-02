import * as d3 from 'd3';



export default class ScatterD3{
    constructor(element, data, xDomain, yDomain){
        this.element = element;
        this.data = data;
        this.xDomain = xDomain;
        this.yDomain = yDomain;

        this.drawScatter(this.element, this.data, this.xDomain, this.yDomain);
    }

    drawScatter(el, particles, xD, yD){
        let margin = {top: 10, right: 30, bottom: 30, left: 60}
        const width = d3.select(el).node().clientWidth - margin.left - margin.right;
        const height = d3.select(el).node().clientHeight - margin.top - margin.bottom;
        console.log(width)
        console.log(height)

        let svg = d3.select(el)
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        let xScale = d3.scaleLinear()
            .domain([0, xD.max])
            .range([0, width])

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale));

        let yScale = d3.scaleLinear()
            .domain([yD.min, yD.max])
            .range([height, 0])

        svg.append("g")
            .call(d3.axisLeft(yScale));


        svg.append('g')
            .selectAll("dot")
            .data(particles) // the .filter part is just to keep a few dots on the chart, not all of them
            .enter()
            .append("circle")
              .attr("cx", function (d) { return xScale(d['Points:0']); } )
              .attr("cy", function (d) { return yScale(d['Points:1']); } )
              .attr("r", 2)
              .style("fill", "#69b3a2")
            //   .style("opacity", 0.3)
            //   .style("stroke", "white")

        
    }
}