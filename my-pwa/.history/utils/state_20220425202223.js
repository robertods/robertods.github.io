export function loadState(){

  const defaultState = {
    items: [],
    notifications: [],
  };

  let state = localStorage.getItem('items');

  return state || defaultState;

}