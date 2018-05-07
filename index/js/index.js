import _ from 'lodash/core';
import modES6 from './modES6';
const modCommonJS = require('./modCommonJS');

import 'normalize.css/normalize.css';
import topbar from '../../components/topbar';
import '../../components/footer/index.scss';
import '../css/main.scss';
import playURL from '../img/play.png';

console.log('_', _);
console.log('modES6', modES6);
console.log('modCommonJS', modCommonJS);

topbar.init();

const play = document.createElement('div');
play.innerHTML = `<img src="${playURL}">`;
document.querySelector('.main').appendChild(play);