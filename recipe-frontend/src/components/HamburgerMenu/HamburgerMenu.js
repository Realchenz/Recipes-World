// HamburgerMenu.js
import {React, useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

const HamburgerMenu = ({ recipes, handleShow }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };
  
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <div className="menu-item" onClick={toggleSubMenu}>
        Recipes Lists
        {showSubMenu && <div className="sub-menu">
          {recipes.map((recipe) => (
            <a key={recipe.id} className="menu-item" href={"/recipes/" + recipe.id}>
              {recipe.title}
            </a>
          ))}
        </div>}
      </div>
      <a className="menu-item" href="/addrecipes">
        Add Your Recipes
      </a>
      <a className="menu-item" href="/team">
        Team Page
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
