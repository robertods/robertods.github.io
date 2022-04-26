import { router } from './utils/router.js';
import { loadState } from './utils/state.js';

window.store = loadState();
window.addEventListener('load', router);
window.addEventListener('hashchange', router);