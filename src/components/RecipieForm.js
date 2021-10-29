import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class RecipieForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.recipie ? props.recipie.description : '',
      note: props.recipie ? props.recipie.note : '',
      steps: props.recipie ? props.recipie.steps: '',
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onStepsChange = (e) => {
    const steps = e.target.value;
    this.setState(() => ({ steps }));
  };


  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.note) {
      this.setState(() => ({ error: 'Please provide description and Ingredients.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        steps: this.state.steps
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <input
          type="text"
          placeholder="Recipie Title"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <textarea
          placeholder="Add Your Ingredients"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>

        <textarea
          placeholder="Enter Steps to Follow"
          className="textarea"
          value={this.state.steps}
          onChange={this.onStepsChange}
        >
        </textarea>

        <div>
          <button className="button">Add Recipie</button>
        </div>
      </form>
    )
  }
}
