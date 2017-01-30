import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Counter from '../containers/Counter'
import Graph from './Graph';
import barchart from '../charts/barchart';

const Hero = (props) => (
  <div>
    <Counter/>
    <Graph definition={barchart}/>
  </div>
)

export default Hero;
