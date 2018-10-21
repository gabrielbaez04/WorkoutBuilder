import React from 'react';
import Autosuggest from 'react-autosuggest';

class SearchBox extends React.Component {
    state = {
      exercises: [],
      value: '',
      suggestions: [],
    }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  getSuggestions = (value) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp(escapedValue, 'i');

    return this.state.exercises.filter(exercise => regex.test(exercise.name));
  }

  getSuggestionValue = (suggestion) => {
    this.props.populateExercise(suggestion);
    return suggestion.name;
  }

  renderSuggestion = suggestion => (
    <span>{suggestion.name}</span>
  )

  componentDidMount = () => {
    fetch('https://wger.de/api/v2/exercise/?language=2&status=2&limit=1000')
      .then(response => response.json())
      .then(data => this.setState({ exercises: data.results }));
  }

  render() {
    const css = require('./SearchBox.css');
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search Exercise...',
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchBox;
