// HamburgerMenu.js
import {React, useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

const HamburgerMenu = ({ recipes, dispatch }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const handleSearch = () => {
      const filtered = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
      dispatch({ type: 'SET_FILTERED_RECIPES', payload: filtered });
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
    </Menu>
  );
};

export default HamburgerMenu;
