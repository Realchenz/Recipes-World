import { createStore } from 'redux';

// Function to load state from localStorage
function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined; // No saved state found
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined; // Fail gracefully by returning undefined
  }
}

// Function to save state to localStorage
function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors or log them if necessary
  }
}

const persistedState = loadState(); // Load any saved state

const initialState = persistedState || {
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

// Subscribe to store updates to save the state to localStorage
store.subscribe(() => {
  saveState({
    groceryList: store.getState().groceryList,
  });
});

export default store;