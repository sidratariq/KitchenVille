import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './RecipieListItem';
import selectExpenses from '../selectors/Recipies';

const RecipieListItem = (props) => (
  <div>
    <h1>Recipe List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(RecipieListItem);
