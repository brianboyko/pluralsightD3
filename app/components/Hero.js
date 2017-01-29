import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Counter from '../containers/Counter'
import Graph from './Graph';

const Hero = (props) => (
  <div>
    <Counter/>
    <Graph/>
  </div>
)

export default Hero;
