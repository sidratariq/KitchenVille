import React from 'react';
import { connect } from 'react-redux';
import RecipieListItems from './RecipieListItem';
import selectRecipies from '../selectors/Recipies';

const RecipieListItem = (props) => (
  <div>
    <h1>Recipe List</h1>
    {props.recipies.map((recipie) => {
      return <RecipieListItems key={recipie.id} {...recipie} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    recipies: selectRecipies(state.recipies, state.filters)
  };
};

export default connect(mapStateToProps)(RecipieListItem);
