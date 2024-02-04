import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Recipe Book</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />  
          <Route path="/recipes/:id" element={<RecipeDetail />} />   
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
