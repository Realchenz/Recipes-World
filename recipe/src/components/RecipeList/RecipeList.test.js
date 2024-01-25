import React from 'react';
import { shallow, render, mount } from 'enzyme';
import RecipeList from './RecipeList';

describe('RecipeList', () => {
  let props;
  let shallowRecipeList;
  let renderedRecipeList;
  let mountedRecipeList;

  const shallowTestComponent = () => {
    if (!shallowRecipeList) {
      shallowRecipeList = shallow(<RecipeList {...props} />);
    }
    return shallowRecipeList;
  };

  const renderTestComponent = () => {
    if (!renderedRecipeList) {
      renderedRecipeList = render(<RecipeList {...props} />);
    }
    return renderedRecipeList;
  };

  const mountTestComponent = () => {
    if (!mountedRecipeList) {
      mountedRecipeList = mount(<RecipeList {...props} />);
    }
    return mountedRecipeList;
  };  

  beforeEach(() => {
    props = {};
    shallowRecipeList = undefined;
    renderedRecipeList = undefined;
    mountedRecipeList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
