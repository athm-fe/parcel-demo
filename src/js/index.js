import fs from 'fs';

import _ from 'lodash/core';
import modES6 from './modES6';
const modCommonJS = require('./modCommonJS');

import 'normalize.css/normalize.css';
import topbar from '../components/topbar';
import '../components/footer/index.scss';
import '../css/index.scss';
import playURL from '../img/play.png';

console.log('_', _);
console.log('modES6', modES6);
console.log('modCommonJS', modCommonJS);

// Read contents as a string
const testStr = fs.readFileSync(__dirname + '/test.txt', 'utf8');

// Read contents as a Buffer
const testPNGBuffer = fs.readFileSync(__dirname + '/test.png');

console.log('inline test.txt', testStr);

const testPNG = document.createElement('div');
testPNG.innerHTML = `<img src="data:image/png;base64,${testPNGBuffer.toString('base64')}">`;
document.querySelector('.main').appendChild(testPNG);

topbar.init();

const play = document.createElement('div');
play.innerHTML = `<img src="${playURL}">`;
document.querySelector('.main').appendChild(play);