import React from 'react';
import { connect } from 'react-redux';
import RecipieForm from './RecipieForm';
import { addRecipie } from '../actions/recipies';

const AddRecipiePage = (props) => (
  <div>
    <h1>Add Recipie</h1>
    <RecipieForm
      onSubmit={(recipie) => {
        props.dispatch(addRecipie(recipie));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddRecipiePage);
