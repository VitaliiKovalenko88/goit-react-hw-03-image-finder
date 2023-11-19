import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';
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
      <header className={css.header}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button className={css.btn}>
            <ImSearch />
            <span className={css.btnLabel}>Search</span>
          </button>
          <input
            className={css.inp}
            onChange={this.handleChange}
            type="text"
            value={this.state.value}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
