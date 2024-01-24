import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = () => {

	const recipes = [
		{ id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian dish' },
		{ id: 2, title: 'Chicken Alfredo', description: 'Creamy pasta with chicken' },
		{ id: 3, title: 'Vegetable Stir Fry', description: 'Healthy and delicious' },
	];

	return (
		<div className="recipe-list">
			{recipes.map(recipe => (
				<div key={recipe.id} className="recipe-item">
					<h3>{recipe.title}</h3>
					<p>{recipe.description}</p>
				</div>
			))}
		</div>
	);
};

export default RecipeList;
