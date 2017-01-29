import React, {Component} from 'react';
import ReactDOM, {render, findDOMNode} from 'react-dom';
import Counter from '../containers/Counter'
const d3 = require('d3');
console.log("d3:", d3);

const drawGraph = (element) => {
  let w = 300;
  let h = 100;
  let padding = 2;
  let dataset = [5, 10, 14, 20, 25];
  let bar = d3.select(element)
    .append("svg")
    .attr("width", w)
    .attr("height", h)

  console.log("element", element);
  console.log("bar", bar)

  bar.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr('x', (data, i) => (i * (w/dataset.length)))
    .attr('y', (data) => (h - (data * 4)))
    .attr('width', ((w / dataset.length) - padding))
    .attr('height', (data) => (data * 4))
    .attr('fill', (data) => ("rgb(0, " + (data*10) + ", 0)"))

}


class Graph extends Component {
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount () {
    drawGraph(this.refs.graph);
  }
  render () {
    return (<div ref="graph"></div>);
  }
}

export default Graph;
