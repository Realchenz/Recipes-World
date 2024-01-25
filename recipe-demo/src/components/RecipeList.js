import React from 'react';

const RecipeList = ({ onSelectRecipe }) => {
  const recipes = [
    // ... your recipe objects here
    {
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
      instructions: "Cook pasta. In separate pan, cook pancetta. Whisk eggs and Parmesan, then combine with pasta and pancetta. Season with pepper.",
      image: "https://media.istockphoto.com/id/177413384/photo/pasta-with-carbonara.jpg?s=1024x1024&w=is&k=20&c=5ZRLITJjvwm0aEV6ynpdnJrjDmlraH-PD9mleSts6sQ="
    },
    {
      title: "Classic Margherita Pizza",
      description: "A simple yet delicious pizza with tomatoes, mozzarella cheese, and fresh basil.",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
      instructions: "Roll out dough, apply sauce, add cheese and basil. Bake in a preheated oven until crust is golden.",
      image: "https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg"
    }
  ];

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index} onClick={() => onSelectRecipe(recipe)}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} style={{ width: '100px', height: '100px' }} />
          {/* You can add more info or an image thumbnail here */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;