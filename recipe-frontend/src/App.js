/*import native components and third-party libs*/
import React, { useEffect, useState, useReducer} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';  

/*import css*/
import './App.css';

/*import self-defined components*/
import GroceryListOffcanvas from './components/Offcanvas/GroceryListOffcanvas';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';


/*import routes modules*/
import AppRoutes from './route/AppRoutes';

const App = () => {

  // Redux state management for grocery list
  const groceryList = useSelector(state => state.groceryList);
  const dispatch = useDispatch();

  const handleAddToGroceryList = (ingredient) => {
    dispatch({ type: 'ADD_TO_GROCERY_LIST', payload: ingredient });
  };

  const handleRemoveFromGroceryList = (ingredient) => {
    dispatch({ type: 'REMOVE_FROM_GROCERY_LIST', payload: ingredient });
  };

  const handleClearGroceryList = () => {
    dispatch({ type: 'CLEAR_GROCERY_LIST' });
  };

  // Redux state management for login status
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  // Offcanvas state
  const [show, setShow] = useState(false);
  const handleOffcanvasClose = () => setShow(false);
  const handleOffcanvasShow = () => setShow(true);


  // Fetch recipes from the backend server
  const [recipes, setRecipes] = useState([]);
  const port = 8000; // Change this to the port used by the backend server
  useEffect(() => {
    axios.get(`http://localhost:${port}/api/recipes`).then(response => {
      setRecipes(response.data);
      const recipeData = response.data;
      // console.log(JSON.stringify(recipeData[1])); // console.log(recipes);
    }).catch(error => {
      console.error('Error: ', error);
    });
  }, []);

  const initialState = {
    filteredRecipes: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FILTERED_RECIPES':
        return { ...state, filteredRecipes: action.payload };
      default:
        return state;
    }
  };

  const [recipeState, recipeDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    recipeDispatch({ type: 'SET_FILTERED_RECIPES', payload: recipes });
  }, [recipes]);

  // Validate token every 5 minutes
  const interval = 5 * 60 * 1000; // 5 minutes
  setInterval(() => {
    validateToken();
  }, interval);

  const validateToken = () => {
    const token = localStorage.getItem('jwtToken');
    axios.post('http://localhost:8000/api/validateToken', { token })
      .then(response => {
        // Assuming the backend sends { valid: true } or { valid: false }
        if (!response.data.valid) {
          dispatch({ type: 'LOGOUT'});
        }
      })
      .catch(error => {
        console.error('Error validating token:', error);
        dispatch({ type: 'LOGOUT' });
      });
  };

  return (
    <Router>
      <div className="App">
        <HamburgerMenu recipes={recipes} dispatch={recipeDispatch} isLoggedIn={isLoggedIn}/>

        <header className="App-header">
          <div className='icon-container'>
          <FaShoppingCart 
            style={{ cursor: 'pointer', fontSize: '24px', margin: '10px' }} 
            onClick={handleOffcanvasShow} 
          />
          </div>
          <div className='content-container'>
            <Navbar.Brand href="/">
              Recipes World
            </Navbar.Brand>
            <div style={{ margin: '10px' }}></div>
            <span className="text-muted" style={{ fontSize: '20px' }}>Give you an amazing experience</span>
          </div>
          <div className="spacer"></div>
        </header>

        <GroceryListOffcanvas
          show={show}
          handleClose={handleOffcanvasClose}
          groceryList={groceryList}
          handleRemoveFromGroceryList={handleRemoveFromGroceryList}
          handleClearGroceryList={handleClearGroceryList}
        />

        <AppRoutes recipes={recipeState.filteredRecipes} 
        handleAddToGroceryList={handleAddToGroceryList}
        setRecipes = {setRecipes}/>
      </div>
    </Router>
  );
};

export default App;
