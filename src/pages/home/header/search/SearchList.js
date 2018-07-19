import React from 'react';
import PropTypes from 'prop-types';
import { addCity as addCityAction } from '../../../../state/cities';
import { connect } from 'react-redux';

function SearchList({ cities, clearField, addCity }) {
  // Event delegation
  function onCityClick(city) {
    addCity(city);
    clearField();
  }

  return (
    <ul className="header__search-list">
      {cities.map(city => (
        <li
          key={city.id}
          className="header__search-list-li"
          onClick={() => onCityClick(city)}
        >
          {city.place_name}
        </li>
      ))}
    </ul>
  );
}

SearchList.propTypes = {
  cities: PropTypes.array.isRequired,
  clearField: PropTypes.func.isRequired,
  addCity: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addCity: addCityAction },
)(SearchList);
