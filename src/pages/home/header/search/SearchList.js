import React from 'react';
import PropTypes from 'prop-types';

function SearchList({ cities, clearField }) {
  // Event delegation
  function onClick(e) {
    if (e.target.tagName === 'LI') {
      clearField();
      // add city to your list
    }
  }

  return (
    <ul className="header__search-list" onClick={onClick}>
      {cities.map(city => (
        <li key={city.id} className="header__search-list-li">
          {city.place_name}
        </li>
      ))}
    </ul>
  );
}

SearchList.propTypes = {
  cities: PropTypes.array.isRequired,
  clearField: PropTypes.func.isRequired,
};

export default SearchList;
