import React from 'react';
import { connect } from 'react-redux';
import RecipieForm from './RecipieForm';
import { startEditRecipie, startRemoveRecipie } from '../actions/recipies';

export class EditRecipiePage extends React.Component {
  onSubmit = (recipie) => {
    this.props.startEditRecipie(this.props.recipie.id, recipie);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveRecipie({ id: this.props.recipie.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <RecipieForm
          recipie={this.props.recipie}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  recipie: state.recipies.find((recipie) => recipie.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditRecipie: (id, recipie) => dispatch(startEditRecipie(id, recipie)),
  startRemoveRecipie: (data) => dispatch(startRemoveRecipie(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipiePage);
