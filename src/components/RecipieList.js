import React from 'react';
import { connect } from 'react-redux';
import RecipieListItems from './RecipieListItem';
import selectRecipies from '../selectors/Recipies';

const RecipieListItem = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Recipies</div>
      <div className="show-for-desktop">Recipie</div>
      <div className="show-for-desktop">Amount</div>
    </div>

    <div className="list-body">
      {
        props.recipies.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No recipies</span>
          </div>
        ) : (
          props.recipies.map((recipie) => {
            return <RecipieListItems key={recipie.id} {...recipie} />;
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    recipies: selectRecipies(state.recipies, state.filters)
  };
};

export default connect(mapStateToProps)(RecipieListItem);
