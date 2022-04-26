import { router } from './utils/router.js';

window.store = {
  items: [],
  notifications: [],
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);