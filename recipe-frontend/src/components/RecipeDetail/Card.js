import React from 'react';
import './Card.css'; // Import the CSS file here

const Card = ({ recipe, index }) => {
  return (
    <div className="card-wrapper"> {/* Use className instead of CardWrapper */}
      <div className="image-container">
        <img src={recipe.image} alt="lemon" />
      </div>

      <div className="content">
        <div className="heading">
          <h2 className="heading__title">
            <span className="next-line">{recipe.title}</span>
          </h2>
          <h3 className="step">
            <span className="next-line">Step {index}</span>
          </h3>
        </div>

        <div className="details">
          <p className="details__text">
            {recipe.instructions[index - 1]}
            <span className="next-line">sed do eiusmod tempor</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;