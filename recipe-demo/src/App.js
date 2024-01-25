import React, { useState } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Recipe Book</h1>
      </header>
      <RecipeList onSelectRecipe={setSelectedRecipe} />
      {selectedRecipe && (
        <div className="recipe-details">
          <h2>{selectedRecipe.title}</h2>
          <p>{selectedRecipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{selectedRecipe.instructions}</p>
          <img src={selectedRecipe.image} alt={selectedRecipe.title} style={{ maxWidth: '300px', maxHeight: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
