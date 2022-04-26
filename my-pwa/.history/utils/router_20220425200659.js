import { render } from '../../vendor/lit-html/index.js';

export async function router(){
  let { hash } = window.location;

  if(hash == ''){
    hash = '#/home';
  }

  const root = document.getElementById('app'); 
  const viewName = hash.replace('#/', '');
  
  try{
    const { default:view } = await import(`../views/${viewName}.js`);
    render(view(), root);
    view.init && view.init();
  }
  catch(err){
    console.error(err);
    const { default:view } = await import(`../views/404.js`);
    render(view(), root);
  }
  
}