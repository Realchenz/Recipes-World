import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Recipe Book</h1>
      </header>      
      <RecipeList></RecipeList>
    </div>
  );
}

export default App;
