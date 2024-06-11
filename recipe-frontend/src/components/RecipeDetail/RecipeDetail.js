import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselSlider from './CarouselSlider';
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import axios from 'axios';
import { useSelector } from 'react-redux';
import './RecipeDetail.css';
import ModalWrapper from './ModalWrapper';
import CarouselWrapper from './CarouselWrapper';


const RecipeDetail = ({ recipes, addToGroceryList }) => {
  const groceryList = useSelector(state => state.groceryList);
  const { id } = useParams();
  let recipe = recipes.find((recipe) => recipe.id === id);

  if(recipe){
    localStorage.setItem('lastRecipe', JSON.stringify(recipe));
  }else{
    const recipeData = localStorage.getItem('lastRecipe');
    if (recipeData) {
      recipe = JSON.parse(recipeData)
    }
  }

  const searchUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search';
  const api_key = `${process.env.REACT_APP_API_KEY}`;
  
  const [ingredientsData, setIngredientsData] = useState([]);

  const [showInstructions, setShowInstructions] = useState(false);

  const handleModalClose = () => {
    setShowInstructions(false);
  };

  const handleCarouselClick = (e) => {
    e.stopPropagation();
  };

  const [slideCount, setSlideCount] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleShowInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  useEffect(() => {
    const fetchIngredientsData = async () => {
      try {
        const fetchedIngredients = recipe.ingredients; 
        const fetchedData = await Promise.all(
        fetchedIngredients.map(async (ingredient) => {
          const response = await axios.get(`${searchUrl}?query=${ingredient}&api_key=${api_key}`);
            console.log(response.data.foods[0]);
            return response.data.foods[0];
          })
        );
        const fdcIdsArray = fetchedData.map(data => data.fdcId);
        setIngredientsData(fdcIdsArray);
      } catch (error) {
        console.error('Error fetching ingredients data:', error);
      }
    };

    fetchIngredientsData();
  }, [recipe.ingredients, ingredientsData]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const handleAddToGroceryList = (ingredient) => {
    // check if ingredient is already in the grocery list
    if (isIngredientInGroceryList(ingredient)) {
      return;
    }
    addToGroceryList(ingredient);
  };

  const isIngredientInGroceryList = (ingredient) => {
    return groceryList.includes(ingredient);
  };


  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} lg={10}>
          <h1 className="text-center mb-4 recipe-title">{recipe.title}</h1>
          <Row className="mb-4">
            <Col xs={12} md={6} order={1}>
              <div className="text-muted">
                <p className="mb-3" style={{ fontSize: '20px', fontStyle: 'italic', marginTop: '50px'}}>
                  {recipe.description}
                </p>
                <Container className='ingredient-box'>
                  <h3 className="mb-3">Ingredients</h3>
                  <ul className="list-unstyled">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} style={{ fontSize: '16px' }}>
                        <Container>
                          <Row>
                            <Col md={6}>
                            <a href={`https://fdc.nal.usda.gov/fdc-app.html#/food-details/${ingredientsData[index]}/nutrients`} target="_blank" rel="noopener noreferrer">{ingredient}</a>
                            </Col>
                            <Col md={6}>
                              <Button
                                onClick={() => handleAddToGroceryList(ingredient)}
                                className='add-to-grocery-list-button'
                                >
                                Add to Grocery List
                              </Button>
                            </Col>
                          </Row>
                        </Container>
                      </li>
                    ))}
                  </ul>
                </Container>
                <Container className="mt-5">
                  <Row>
                    <Button
                      onClick={handleShowInstructions}
                      className="show-instructions-button"
                      index={recipe.id}
                    >
                      Show Instructions
                    </Button>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col xs={12} md={6} order={2}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="img-fluid rounded"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Col>
          </Row>
          <Row>
            <Link to={`/`}>
              <Button
                className="back-to-home-button"
                variant="primary"
                index={recipe.id}>
                Back To Home
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
      {showInstructions && (
        <ModalWrapper onClick={handleModalClose}>
        <CarouselWrapper className="carousel-container" onClick={handleCarouselClick}>
        <CarouselProvider
          visibleSlides={slideCount}
          totalSlides={recipe.instructions.length}
          step={1}
          currentSlide={currentSlide}
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
        >
          <CarouselSlider
            setSlideCount={setSlideCount}
            setCurrentSlide={setCurrentSlide}
            recipe={recipe}
          />
        </CarouselProvider>
      </CarouselWrapper>
      </ModalWrapper>
    )}
    </Container>
  );
};

export default RecipeDetail;

