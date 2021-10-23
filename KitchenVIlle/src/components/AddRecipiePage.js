import React from 'react';
import { connect } from 'react-redux';
import RecipieForm from './RecipieForm';
import { addExpense } from '../actions/expenses';

const AddRecipiePage = (props) => (
  <div>
    <h1>Add Recipie</h1>
    <RecipieForm
      onSubmit={(recipie) => {
        props.dispatch(addExpense(recipie));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddRecipiePage);
