import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';

class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button>
            <ImSearch />
          </button>
          <input onChange={this.handleChange} value={this.state.value} />
        </form>
      </header>
    );
  }
}

export default SearchBar;
