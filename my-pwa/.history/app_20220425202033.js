import { router } from './utils/router.js';

window.store = loadState();
window.addEventListener('load', router);
window.addEventListener('hashchange', router);