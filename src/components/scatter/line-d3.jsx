import * as d3 from 'd3';



export default class LineD3{
    constructor(element, data, xDomain, yDomain){
        this.element = element;
        this.data = data;
        this.xDomain = xDomain;
        this.yDomain = yDomain;

        this.drawLine(this.element, this.data, this.xDomain, this.yDomain);
    }

    drawLine(){

    }


        
}
