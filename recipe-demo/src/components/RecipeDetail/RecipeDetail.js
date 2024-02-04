import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeDetail.scss';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const RecipeDetail = ({ recipe }) => {
	
	return(
		<Container>
			<Row>
				<h3>{recipe.title}</h3>
			</Row>
			<Row>
				<Col xs={8}>
				<div>
					<p className="text-muted" style={{ wordWrap: 'break-word', fontSize: '14pt', fontStyle: 'italic' }}>{selectedRecipe.description}</p>
					<h3 style={{ fontSize: '24pt' }}>Ingredients:</h3>
					<ul>
					{selectedRecipe.ingredients.map((ingredient, index) => (
					<li key={index} style={{ fontSize: '14pt' }}>{ingredient}</li>
					))}
					</ul>
					<h3 style={{ fontSize: '24pt' }}>Instructions:</h3>
					<p className="text-muted" style={{ wordWrap: 'break-word', fontSize: '14pt' }}>{selectedRecipe.instructions}</p>
				</div>
				</Col>
				<Col>
				<div>
					<img 
					variant="top"
					src={selectedRecipe.image}
					alt={selectedRecipe.title}
					style={{ width: '300px', height: '300px', marginBottom: '10px' }} />
				</div>
				</Col>
			</Row>
		</Container>
	)
	
};

export default RecipeDetail;
