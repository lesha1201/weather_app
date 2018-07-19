import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeCity as removeCityAction } from '../../../state/cities';
import OtherDay from './cityWeatherCard/OtherDay';

const CityWeatherCard = ({ city, removeCity }) => {
  const title = `${city.location.city}, ${city.location.country}`;
  const today = city.item.forecast[0];
  const { isCurrentCity } = city;

  return (
    <div className="city-card">
      <h3 className="city-card__title">
        {title}
        {isCurrentCity && (
          <ion-icon class="city-card__location-icon" name="locate" />
        )}
      </h3>
      <div>
        <button
          className="city-card__close-btn"
          onClick={() => removeCity(city.placeName)}
        >
          &#10006;
        </button>
        <div>Today</div>
        <div>{today.text}</div>
        <div className="city-card__today-info">
          <div className="city-card__accent-forecast">
            <img
              className="city-card__today-img"
              src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Sunny"
            />
            <div className="city-card__today-temp">
              {city.item.condition.temp}&#8451;
            </div>
          </div>
          <ul className="city-card__info-list">
            <li className="city-card__info-li">
              <span className="city-card__info-title">Humidity:</span>
              {city.atmosphere.humidity + '%'}
            </li>
            <li className="city-card__info-li">
              <span className="city-card__info-title">Visibility:</span>
              {city.atmosphere.visibility + ' ' + city.units.distance}
            </li>
            <li className="city-card__info-li">
              <span className="city-card__info-title">Wind:</span>
              {city.wind.speed + ' ' + city.units.speed}
            </li>
            <li className="city-card__info-li">
              <span className="city-card__info-title">High:</span>
              {today.high}&#8451;
            </li>
            <li className="city-card__info-li">
              <span className="city-card__info-title">Low:</span>
              {today.low}&#8451;
            </li>
          </ul>
        </div>
        <div className="city-card__other-days">
          {city.item.forecast
            .slice(1, 6)
            .map(forecast => (
              <OtherDay
                forecast={forecast}
                key={forecast.date + forecast.low}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

CityWeatherCard.propTypes = {
  removeCity: PropTypes.func.isRequired,
  city: PropTypes.shape({
    atmosphere: PropTypes.object.isRequired,
    wind: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    item: PropTypes.shape({
      forecast: PropTypes.array.isRequired,
    }),
    placeName: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(
  null,
  { removeCity: removeCityAction },
)(CityWeatherCard);
