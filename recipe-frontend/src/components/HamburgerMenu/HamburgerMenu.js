// HamburgerMenu.js
import {React, useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = ({ recipes, dispatch, isLoggedIn }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const handleSearch = () => {
      const filtered = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
      dispatch({ type: 'SET_FILTERED_RECIPES', payload: filtered });
    };

    const handleUserIconClick = () => {
      if (isLoggedIn) {
        navigate('/profile'); // Redirect to profile page if logged in
      } else {
        navigate('/login'); // Redirect to login page if not logged in
      }
    };
  
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <div id = "search" className="menu-item" onClick={toggleSearch}>
        Search Recipes
        {showSearch && 
        <div className="search-box"  onClick={(e) => e.stopPropagation()}>
          <input type="text" placeholder="Search recipes..." onChange={(e) => setSearchTerm(e.target.value)}  />
          <button onClick={handleSearch}>Search</button>
        </div>}
      </div>
      <a className="menu-item" href="/addrecipes">
        Insert Recipe
      </a>
      <a className="menu-item" href="/team">
        People
      </a>
      <div className="user-icon" onClick={handleUserIconClick}>
        <FaUserCircle size="2em" />
      </div>
    </Menu>
  );
};

export default HamburgerMenu;
