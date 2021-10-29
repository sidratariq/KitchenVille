import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { withRouter } from 'react-router-dom';

class RecipieListFilters extends React.Component {

  handleClick = () => {
    this.props.history.push('/create');
  }

  render() {
    return (
      <div className="content-container">

        <button className="button button-wide" onClick={this.handleClick}>Add Recipie</button>

        <div className="input-group">

          <input
            type="text"
            className="text-input text-width"
            value={this.props.filters.text}
            placeholder="Search recipies"
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />

          <div className="input-group__item">
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(withRouter(RecipieListFilters));
