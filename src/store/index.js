import { createStore } from 'redux';

const viewReducer = (state = { view: "0" }, action) => {
  if (action.type === 'library') {
    return {
      view: "0",
    };
  }

  if (action.type === 'explore') {
    return {
      view: "1"
    };
  }

  if (action.type === 'finished') {
    return {
      view: "2"
    };
  }
  return state;
};

const store = createStore(viewReducer);

export default store;