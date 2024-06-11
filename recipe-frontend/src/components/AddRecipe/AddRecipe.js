import React, { useState } from 'react';
import './AddRecipe.css';

function AddRecipe() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    imageURL: ''
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
        required 
      />
    </div>
      
    <div className="form-group">
      <label htmlFor="imageURL">Image</label>
      <input 
        type="text" 
        id="imageURL" 
        name="imageURL" 
        onChange={handleChange} 
      />
    </div>
      
      <button type="submit">Submit Recipe</button>
    </form>
  );
}

export default AddRecipe;
