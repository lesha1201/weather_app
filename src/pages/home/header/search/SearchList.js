import React from 'react';
import PropTypes from 'prop-types';
import { fetchCityForecast as fetchForecastAction } from '../../../../state/cities';
import { connect } from 'react-redux';

function omitLocalCities(cities) {
  let localCities = localStorage.getItem('cities');
  if (localCities) {
    localCities = localCities.split(';');
    return cities.filter(city => !localCities.includes(city.place_name));
  }
  return cities;
}

function SearchList({ cities, clearField, fetchCityForecast }) {
  function onCityClick(city) {
    const { place_name } = city;
    fetchCityForecast(place_name);
    clearField();
  }

  let newCities = omitLocalCities(cities);
  return (
    <ul className="header__search-list">
      {newCities.map(city => (
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
  fetchCityForecast: PropTypes.func.isRequired,
};

export default connect(
  null,
  { fetchCityForecast: fetchForecastAction },
)(SearchList);
