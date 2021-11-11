import * as d3 from 'd3';



export default class LineD3{
    constructor(element, data, xDomain, yDomain){
        this.element = element;
        this.data = data;
        this.xDomain = xDomain;
        this.yDomain = yDomain;

        this.drawLine(this.element, this.data, this.xDomain, this.yDomain);
    }

    drawLine(el, shape, xD, yD){
        console.log(shape)
        let margin = {top: 10, right: 30, bottom: 30, left: 60}
        const width = d3.select(el).node().parentNode.clientWidth - margin.left - margin.right;
        const height = d3.select(el).node().parentNode.clientHeight - margin.top - margin.bottom;

        let svg = d3.select(el)
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleLinear()
                .domain([0, 16])
                .range([ 0, width ]);
        svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));
          
              // Add Y axis
        var y = d3.scaleLinear()
                .domain([-2,2])
                .range([ height, 0 ]);

        svg.append("g")
                .call(d3.axisLeft(y));

        let line = d3.line()
                .x(function(d) { return x(d.X) })
                .y(function(d) { return y(d.Y) })
                .curve(d3.curveBasis)

        svg.append("path")
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1)
                .attr("d", line(shape))
    }


        
}
