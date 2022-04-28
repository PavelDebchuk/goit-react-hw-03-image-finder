import { Component } from 'react';
import './components.styles.css';

export default class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('Введите слова для поиска');
      return;
    }
    this.props.searchName(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleNameChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
