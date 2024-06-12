import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipeList from '../components/RecipeList/RecipeList';
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";
import TeamPage from "../components/TeamPage/TeamPage";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import Login from "../components/User/Login";
import Profile from "../components/User/Profile";

const AppRoutes = ({ recipes, handleAddToGroceryList, setRecipes }) => {
  return (
    <Routes>
      <Route path="/" element={<RecipeList recipes={recipes} setRecipes={setRecipes}/>} />
      <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} addToGroceryList={handleAddToGroceryList} />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/addrecipes" element={<AddRecipe recipes={recipes} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;