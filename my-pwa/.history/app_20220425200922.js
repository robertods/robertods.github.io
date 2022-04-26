import { render } from './vendor/lit-html/index.js';
import { view } from './views/home.js';

window.store = {
  items: [],
  notifications: [],
  
}

render( view(), document.getElementById('app') );