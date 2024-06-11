import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipeList from '../components/RecipeList/RecipeList';
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";
import TeamPage from "../components/TeamPage/TeamPage";
import AddRecipe from "../components/AddRecipe/AddRecipe";

const AppRoutes = ({ recipes, handleAddToGroceryList }) => {
  return (
    <Routes>
      <Route path="/" element={<RecipeList recipes={recipes} />} />
      <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} addToGroceryList={handleAddToGroceryList} />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/addrecipes" element={<AddRecipe recipes={recipes} />} />
    </Routes>
  );
};

export default AppRoutes;