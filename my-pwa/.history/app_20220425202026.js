import { router } from './utils/router.js';

window.store = getState();
window.addEventListener('load', router);
window.addEventListener('hashchange', router);