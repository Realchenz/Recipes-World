import React from 'react';
import { shallow, render, mount } from 'enzyme';
import RecipeDetails from './RecipeDetails';

describe('RecipeDetails', () => {
  let props;
  let shallowRecipeDetails;
  let renderedRecipeDetails;
  let mountedRecipeDetails;

  const shallowTestComponent = () => {
    if (!shallowRecipeDetails) {
      shallowRecipeDetails = shallow(<RecipeDetails {...props} />);
    }
    return shallowRecipeDetails;
  };

  const renderTestComponent = () => {
    if (!renderedRecipeDetails) {
      renderedRecipeDetails = render(<RecipeDetails {...props} />);
    }
    return renderedRecipeDetails;
  };

  const mountTestComponent = () => {
    if (!mountedRecipeDetails) {
      mountedRecipeDetails = mount(<RecipeDetails {...props} />);
    }
    return mountedRecipeDetails;
  };  

  beforeEach(() => {
    props = {};
    shallowRecipeDetails = undefined;
    renderedRecipeDetails = undefined;
    mountedRecipeDetails = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
