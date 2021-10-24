import React from 'react';
import { connect } from 'react-redux';
import RecipieForm from './RecipieForm';
import { editRecipie, removeRecipie } from '../actions/recipies';

const EditRecipiePage = (props) => {
  return (
    <div>
      <RecipieForm
        recipie={props.recipie}
        onSubmit={(recipie) => {
          props.dispatch(editRecipie(props.recipie.id, recipie));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeRecipie({ id: props.recipie.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    recipie: state.recipies.find((recipie) => recipie.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditRecipiePage);
