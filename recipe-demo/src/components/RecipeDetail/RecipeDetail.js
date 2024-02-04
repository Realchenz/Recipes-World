import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeDetail.scss';

const RecipeDetail = props => (
	<div>This is a component called RecipeDetail.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class RecipeDetail extends React.Component {
//   render() {
//     return <div>This is a component called RecipeDetail.</div>;
//   }
// }

const RecipeDetailPropTypes = {
	// always use prop types!
};

RecipeDetail.propTypes = RecipeDetailPropTypes;

export default RecipeDetail;
