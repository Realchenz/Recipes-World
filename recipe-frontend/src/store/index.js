// src/store/index.js
import { createStore } from 'redux';

const initialState = {
  groceryList: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_GROCERY_LIST':
      return {
        ...state,
        groceryList: [...state.groceryList, action.payload],
      };
    case 'REMOVE_FROM_GROCERY_LIST':
      return {
        ...state,
        groceryList: state.groceryList.filter(item => item !== action.payload),
      };
    case 'CLEAR_GROCERY_LIST':
      return {
        ...state,
        groceryList: [],
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;