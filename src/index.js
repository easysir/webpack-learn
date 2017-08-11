// The import and export statements have been standardized in ES22015.
// Although they are not supported in most browsers yet.

/**
 * Behind the scenes, webpack actually "transpliles" the code so that older browsers can alse run it.
 */

import _ from 'lodash';
import printMe from './print.js';
// 
import './style.css';
import Icon from './owl.png';

console.log(Icon);

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());