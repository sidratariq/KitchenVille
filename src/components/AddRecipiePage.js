import React from 'react';
import { connect } from 'react-redux';
import RecipieForm from './RecipieForm';
import { startAddRecipie } from '../actions/recipies';

export class AddRecipiePage extends React.Component {
  onSubmit = (recipie) => {
    console.log("Value of recipie",recipie)
    this.props.startAddRecipie(recipie);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Recipie</h1>
          </div>
        </div>
        <div className="content-container">
          <RecipieForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddRecipie: (recipie) => dispatch(startAddRecipie(recipie))
});

export default connect(undefined, mapDispatchToProps)(AddRecipiePage);
