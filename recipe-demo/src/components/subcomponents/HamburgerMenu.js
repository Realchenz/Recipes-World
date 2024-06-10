// HamburgerMenu.js
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

const HamburgerMenu = ({ recipes, handleShow }) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <div className="menu-item">
        Recipes Lists
        <div className="sub-menu">
          {recipes.map((recipe) => (
            <a key={recipe.id} className="menu-item" href={"/recipes/" + recipe.id}>
              {recipe.title}
            </a>
          ))}
        </div>
      </div>
      <a className="menu-item" onClick={handleShow} href="#">
        Grocery List
      </a>
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
