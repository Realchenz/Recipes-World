/*import native components and third-party libs*/
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

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

  // Offcanvas state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [recipes, setRecipes] = useState([]);
  const port = 8000; // Change this to the port used by the backend server
  useEffect(() => {
    axios.get(`http://localhost:${port}/api/recipes`).then(response => {
      setRecipes(response.data);
      const recipeData = response.data;
      console.log(JSON.stringify(recipeData[1])); // console.log(recipes);
    }).catch(error => {
      console.error('Error: ', error);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <HamburgerMenu recipes={recipes} handleShow={handleShow} />
        
        <header className="App-header">
          <Navbar.Brand href="/">
            Recipes World
          </Navbar.Brand>
          <div style={{ margin: '10px' }}></div>
          <span className="text-muted" style={{ fontSize: '20px' }}>Give you an amazing experience</span>
        </header>

        <GroceryListOffcanvas
          show={show}
          handleClose={handleClose}
          groceryList={groceryList}
          handleRemoveFromGroceryList={handleRemoveFromGroceryList}
          handleClearGroceryList={handleClearGroceryList}
        />

        <AppRoutes recipes={recipes} handleAddToGroceryList={handleAddToGroceryList} />
      </div>
    </Router>
  );
};

export default App;
