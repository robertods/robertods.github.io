import { render } from './vendor/lit-html/index.js';
import { view } from './views/home.js';

render( view(), document.getElementById('app') );