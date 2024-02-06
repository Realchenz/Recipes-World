import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

const RecipeDetail = ( {recipes} ) => {

	const { id } = useParams();
	const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

	if (!recipe) {
		// Handle case where recipe is not found
		return <div>Recipe not found</div>;
	}

	return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} lg={8}>
          <h1 className="text-center mb-4">{recipe.title}</h1>
          <Row className="mb-4">
            <Col xs={12} md={6} order={1}>
              <div className="text-muted">
                <p className="mb-3" style={{ fontSize: '18px', fontStyle: 'italic' }}>{recipe.description}</p>
                <h3 className="mb-3">Ingredients:</h3>
                <ul className="list-unstyled">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} style={{ fontSize: '16px' }}>{ingredient}</li>
                  ))}
                </ul>
                <h3 className="mb-3">Instructions:</h3>
                <p style={{ fontSize: '16px' }}>{recipe.instructions}</p>
              </div>
            </Col>
            <Col xs={12} md={6} order={2}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="img-fluid rounded"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
	
};

export default RecipeDetail;
