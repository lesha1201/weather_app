import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeCity as removeCityAction } from '../../../state/cities';

const CityWeatherCard = ({ city, removeCity }) => {
  const title = `${city.location.city}, ${city.location.country}`;
  const today = city.item.forecast[0];

  return (
    <div className="city-card">
      <h3 className="city-card__title">{title}</h3>
      <div>
        <button onClick={() => removeCity(city.placeName)}>X</button>
        <div>Today</div>
        <div>
          <img />
        </div>
        <div>{today.text}</div>
        <ul>
          <li>
            <span>High</span>
            {today.high}
          </li>
          <li>
            <span>Low</span>
            {today.low}
          </li>
          <li>
            <span>Humidity</span>
            {city.atmosphere.humidity + '%'}
          </li>
          <li>
            <span>Visibility</span>
            {city.atmosphere.visibility + city.units.distance}
          </li>
          <li>
            <span>Wind</span>
            {city.wind.speed + city.units.speed}
          </li>
        </ul>
      </div>
    </div>
  );
};

CityWeatherCard.propTypes = {};

export default connect(
  null,
  { removeCity: removeCityAction },
)(CityWeatherCard);
