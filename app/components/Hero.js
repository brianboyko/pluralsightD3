import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Counter from '../containers/Counter'
import Graph from './Graph';
import barchart from '../charts/barchart';
import linechart from '../charts/linechart';

const Hero = (props) => (
  <div>
    <Counter/>
    <Graph definition={barchart}/>
    <Graph definition={linechart}/>

  </div>
)

export default Hero;
