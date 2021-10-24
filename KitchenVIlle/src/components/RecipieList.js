import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './RecipieListItem';
import selectRecipies from '../selectors/Recipies';

const RecipieListItem = (props) => (
  <div>
    <h1>Recipe List</h1>
    {props.recipies.map((recipie) => {
      return <ExpenseListItem key={recipie.id} {...recipie} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    recipies: selectRecipies(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(RecipieListItem);
