import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './RecipeList.css'; // 引入CSS文件

const RecipeList = ({ recipes, setRecipes}) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const lastRecipeIndex = currentPage * itemsPerPage;
  const firstRecipeIndex = lastRecipeIndex - itemsPerPage;
  const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const port = 8000; // Change this to the port used by the backend server
  const handleRemove = async (id) => {
    try {
      // Assuming an API call to remove the recipe from the database
      await fetch(`http://localhost:${port}/api/recipes/${id}`, { method: 'DELETE' });
      // Update the recipes state to reflect the removal
      const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
      setRecipes(updatedRecipes);
    } catch (error) {
      console.error("Failed to remove recipe:", error);
    }
  };


  return (
    <Container>
      <Row>
        <div className="card-container">
          {currentRecipes.map((recipe) => (
            <Card key={recipe.id} className="recipe-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={recipe.image} alt={recipe.title} className="card-img" />
              </div>
              <Card.Body>
                <Card.Title className="card-title">{recipe.title}</Card.Title>
                <div className='button-align'>
                  <Link to={`/recipes/${recipe.id}`} className="button-link">
                    <Button className="button-style" variant="primary" index={recipe.id}>
                      Details
                    </Button>
                  </Link>
                  <Button className="button-style" variant="primary" 
                  onClick={() => handleRemove(recipe.id)}>
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Row>
      <Row>
        <div className="pagination-container">
          <Button onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}  className="pagination-button">
            Previous
          </Button>
          <Button onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages} className="pagination-button">
            Next
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default RecipeList;