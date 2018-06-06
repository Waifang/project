import _ from 'lodash';
import '../css/index.styl';
import app from '../views/app.html';
function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
$('#app').html(app);