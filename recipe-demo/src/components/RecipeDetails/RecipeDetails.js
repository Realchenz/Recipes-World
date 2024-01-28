import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const RecipeDetails = ({ recipe }) => {
	const [show, setShow] = useState(false);

  	const handleClose = () => setShow(false);

	return(
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{recipe.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="recipe-details">
					<h2>{recipe.title}</h2>
					<p>{recipe.description}</p>
					<h3>Ingredients:</h3>
					<ul>
						{recipe.ingredients.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
						))}
					</ul>
					<h3>Instructions:</h3>
					<p>{recipe.instructions}</p>
					<img src={recipe.image} alt={recipe.title} style={{ maxWidth: '300px', maxHeight: '300px' }} />
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}




export default RecipeDetails;
