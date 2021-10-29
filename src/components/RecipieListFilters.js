import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
// import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class RecipieListFilters extends React.Component {

  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  handleClick = () => {
   this.props.history.push('/create');
  }

  render() {
    return (
      <div className="content-container">

        <button className="button button-wide" onClick={this.handleClick}>Add Recipie</button>

        <div className="input-group">

          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              value={this.props.filters.text}
              placeholder="Search recipies"
              onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}
            />
          </div>

          <div className="input-group__item">
            <select
              value={this.props.filters.sortBy}
              onChange={(e) => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === 'amount') {
                  this.props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input-group__item">

            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
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
