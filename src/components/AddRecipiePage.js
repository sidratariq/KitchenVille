import React from 'react';
import { connect } from 'react-redux';
import RecipieForm from './RecipieForm';
import { startAddRecipie } from '../actions/recipies';

const AddRecipiePage = (props) => (
  <div>
    <h1>Add Recipie</h1>
    <RecipieForm
      onSubmit={(recipie) => {
        props.dispatch(startAddRecipie(recipie));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddRecipiePage);
