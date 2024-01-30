import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecipeList from './RecipeList';  

// recipes dataset
const recipes = [
  { title: 'Spaghetti Carbonara', image: 'Spaghetti Carbonara' },
  { title: 'Classic Margherita Pizza', image: 'Classic Margherita Pizza' },
  { title: 'Chicken Caesar Salad', image: 'Chicken Caesar Salad'},
  { title: 'Vegetable Stir-Fry', image: 'Vegetable Stir-Fry'},
  { title: 'Classic Beef Tacos', image: 'Classic Beef Tacos' },
  { title: 'Lemon Garlic Shrimp Pasta', image: 'Lemon Garlic Shrimp Pasta' },
  { title: 'Grilled Cheese Sandwich', image: 'Grilled Cheese Sandwic'}
];

test('renders RecipeList component with recipes', () => {
  render(<RecipeList recipes={recipes} />);

  // to check if each recipe is rendered
  recipes.forEach(recipe => {
    const titleElement = screen.getByText(recipe.title);
    const imageElement = screen.getByAltText(recipe.title);

    // assert that each recipe is rendered
    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  const detailsButtons = screen.queryAllByText('Details');

  if (detailsButtons.length === 1) {
    // only one Details button found
    expect(detailsButtons[0]).toBeInTheDocument();
  } else if (detailsButtons.length > 1) {
    // more than one Details button found
    console.warn('Found multiple Details buttons. Handle as needed.');
  } else {
    // no Details button found
    console.error('No Details button found.');
  }
}
);

