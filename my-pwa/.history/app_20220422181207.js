import { render } from './vendor/lit-html/index.js';
import { view } from './views/home.js';

window.store = {
  items: [],
}

render( view(), document.getElementById('app') );