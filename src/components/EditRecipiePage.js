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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Recipie</h1>
          </div>
        </div>
        <div className="content-container">
          <RecipieForm
            expense={this.props.recipie}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Recipie</button>
        </div>
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
