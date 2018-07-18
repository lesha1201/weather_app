import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchField.scss';

const SearchField = ({ className, name, placeholder, value, onChange }) => {
  return (
    <div className="search-field">
      <input
        type="text"
        className={`search-field__input${className ? ' ' + className : ''}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ion-icon class="search-field__icon" name="search" />
    </div>
  );
};

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SearchField;
