import React from 'react';
import { shallow, render, mount } from 'enzyme';
import RecipeDetail from './RecipeDetail';

describe('RecipeDetail', () => {
  let props;
  let shallowRecipeDetail;
  let renderedRecipeDetail;
  let mountedRecipeDetail;

  const shallowTestComponent = () => {
    if (!shallowRecipeDetail) {
      shallowRecipeDetail = shallow(<RecipeDetail {...props} />);
    }
    return shallowRecipeDetail;
  };

  const renderTestComponent = () => {
    if (!renderedRecipeDetail) {
      renderedRecipeDetail = render(<RecipeDetail {...props} />);
    }
    return renderedRecipeDetail;
  };

  const mountTestComponent = () => {
    if (!mountedRecipeDetail) {
      mountedRecipeDetail = mount(<RecipeDetail {...props} />);
    }
    return mountedRecipeDetail;
  };  

  beforeEach(() => {
    props = {};
    shallowRecipeDetail = undefined;
    renderedRecipeDetail = undefined;
    mountedRecipeDetail = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
