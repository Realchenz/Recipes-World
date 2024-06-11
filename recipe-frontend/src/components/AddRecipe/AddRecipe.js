import React, { useState } from 'react';
import './AddRecipe.css';

function AddRecipe() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior

      // Destructure formData for easier access
      let { title, description, ingredients, instructions, image } = formData;

      // Validate title as non-empty strings
      if (title.trim().length === 0){
        alert("Title must be a non-empty string.");
        return;
      }else{
        title = title.trim();
        if(!isNaN(title)){
          alert("Title must be a non-empty string.");
          return;
        }
      }

      // Validate description as a non-empty string
      if (description.trim().length === 0){
        alert("Description must be a non-empty string.");
        return;
      }else{
        description = description.trim();
        if(!isNaN(description)){
          alert("Description must be a non-empty string.");
          return;
        }
      }

      // Validate ingredients as comma-separated strings
      if(ingredients.trim().length === 0){
        alert("Ingredients must be a non-empty comma-seperated string.");
        return;
      }else{
        ingredients = ingredients.trim();
      }

      // Split the ingredients string by commas
      const ingredientsArray = ingredients.split(',');

      // Check each ingredient to ensure it's a string and does not contain numbers
      for (const ingredient of ingredientsArray) {
        // Trim whitespace and check if the ingredient is empty or contains a number
        if (!ingredient.trim() || ingredient.trim().split('').some(char => !isNaN(char) && char !== ' ')) {
          alert("Each ingredient must be a non-empty string and cannot contain numbers.");
          return;
        }
      }

      // Validate instructions as comma-separated strings
      if (instructions.trim().length === 0){
        alert("Instructions must be a non-empty comma-separated string.");
        return;
      }

      // Split the instructions string by commas
      const instructionsArray = instructions.split(';');

      // Check each instruction to ensure it's a string
      for (const instruction of instructionsArray) {
        // Trim whitespace and check if the instruction is empty
        if (!instruction.trim() || !isNaN(instruction)) {
          alert("Each instruction must be a non-empty string.");
          return;
        }
      }

      // Validate image as a URL format
      const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      if (!urlPattern.test(image)) {
        alert("Image must be a valid URL.");
        return;
    }

    //after validation, create a new recipe object and send it to the backend
    const newRecipe = {
      title,
      description,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
      image
    };

    // Send the new recipe to the backend
    fetch('http://localhost:8000/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })

    // Clear the form
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
      image: ''
    });

    alert('Recipe added successfully!');

  };

  return (
    <div className='add-recipe'>
      <form className="recipe-form" onSubmit={handleSubmit}>
        <h2>Input Recipe Info</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
              type="text" 
              id="title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
          />
        </div>
        

      <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
              type="text" 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
          />
      </div>
        
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="text"
          id="ingredients" 
          name="ingredients" 
          value={formData.ingredients} 
          onChange={handleChange} 
          placeholder="2 cups of flour, 1/2 cup of sugar (Comma Separated) ."
          required 
        />
      </div>
        
      <div className="form-group">
        <label htmlFor="instructions">Instructions</label>
        <input
          type="text"
          id="instructions" 
          name="instructions" 
          value={formData.instructions} 
          onChange={handleChange} 
          placeholder="Mix flour and sugar.; Bake at 350 degrees. (Semi-Colon Separated)."
          required 
        />
      </div>
        
      <div className="form-group">
        <label htmlFor="image">ImageURL</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          onChange={handleChange} 
          value={formData.image}
        />
      </div>
        
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
