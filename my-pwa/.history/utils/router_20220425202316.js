import { render } from '../vendor/lit-html/index.js';

export async function router(){
  let { hash } = window.location;

  if(hash == ''){
    hash = '#/main';
  }

  const root = document.getElementById('app'); 
  const viewName = hash.replace('#/', '');
  
  try{
    const { view, init } = await import(`../views/${viewName}.js`);
    render(view(), root);
    init && init();
  }
  catch(err){
    console.error(err);
    const { view } = await import(`../views/404.js`);
    render(view(), root);
  }
  
}
