import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as sudoku from '../archive/sudoku.js'

debugger;
console.log('app div', document.getElementById('app'), App);
ReactDOM.render(<App />, document.getElementById('app'));
