import { html } from '../vendor/lit-html/index.js';
import { header } from '../utils/header.js';

export function view(){
  return html`
    ${header()}
    main
  `;
}

export function init(){
  console.log('init main');
}
