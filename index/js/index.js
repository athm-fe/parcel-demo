import _ from 'lodash/core';
import topbar from '../../components/topbar';

import modES6 from './modES6';
const modCommonJS = require('./modCommonJS');

import 'normalize.css/normalize.css';
import '../../components/footer/index.scss';
import mainStyle from '../css/main.scss';
import testStyle from '../css/test.css';

import playURL from '../img/play.png';

console.log('_', _);

topbar.init();

console.log('modES6', modES6);
console.log('modCommonJS', modCommonJS);

console.log(mainStyle);
console.log(testStyle);

const play = document.createElement('div');
play.innerHTML = `<img src="${playURL}">`;
document.body.appendChild(play);