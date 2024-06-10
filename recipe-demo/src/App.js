/*import native components and third-party libs*/
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

/*import css*/
import './App.css';

/*import self-defined components*/
import GroceryListOffcanvas from './components/Offcanvas/GroceryListOffcanvas';
import HamburgerMenu from './components/subcomponents/HamburgerMenu';

/*import routes modules*/
import AppRoutes from './route/AppRoutes'; 

const App = () => {
  const getLocalStorage = () => {
    const groceryData = localStorage.getItem('groceryData')
    if (groceryData) {
      return JSON.parse(groceryData)
    } else {
      return []
    }
  }

  const [groceryList, setGroceryList] = useState(getLocalStorage);

  const handleAddToGroceryList = (ingredient) => {
    handleShow();
    setGroceryList((prevList) => {
      prevList = [...prevList,ingredient]
      localStorage.setItem('groceryData', JSON.stringify(prevList))
      return prevList
    });
  };

  const handleRemoveFromGroceryList = (ingredient) => {
    setGroceryList((prevList) => {
      prevList = prevList.filter((item) => item !== ingredient)
      localStorage.setItem('groceryData', JSON.stringify(prevList))
      if(prevList.length === 0){
        localStorage.removeItem('groceryData');
      }
      return prevList
    });
  };

  const handleClearGroceryList = () => {
    localStorage.removeItem('groceryData');
    setGroceryList([]);
  };

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
        <header className="App-header">
          <Navbar.Brand href="/">
            Recipes World
          </Navbar.Brand>
          <div style={{ margin: '10px' }}></div>
          <span className="text-muted" style={{ fontSize: '20px' }}>Give you an amazing experience</span>
        </header>
        
        <HamburgerMenu recipes={recipes} handleShow={handleShow} />

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
