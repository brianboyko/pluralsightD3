import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

const ROOT = document.getElementById('root')

const App = (props) => (
  <div>
    <div>Props:</div>
    <div>{JSON.stringify(props)}</div>
  </div>
)

render(<App tomato="foo"/>, ROOT);
