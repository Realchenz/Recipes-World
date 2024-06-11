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
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send data to the server
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
          placeholder="e.g., 2 cups of flour, 1/2 cup of sugar, etc. Separated with comma."
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
          placeholder="e.g., Mix flour and sugar, Bake at 350 degrees, etc. Separated with comma."
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
