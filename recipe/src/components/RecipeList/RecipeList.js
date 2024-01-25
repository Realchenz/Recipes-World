import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = () => {

	const recipes = [
		{ id: 1, title: 'Chef John\'s American Goulash', description: 'American goulash was one of my all-time favorite comfort food meals when I was growing up. They served it in my school cafeteria alongside a slice of buttered white bread and a carton of milk. This Americanized version of goulash was invented to stretch a small amount of beef into enough food for a not-so-small family. It\'s a simple dish that doesn\'t taste simple, so it\'s perfect for your weeknight dinner rotation.'},
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
