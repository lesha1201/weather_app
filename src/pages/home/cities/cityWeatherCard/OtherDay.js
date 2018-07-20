import React from 'react';
import PropTypes from 'prop-types';
import { getWeatherImgName } from '../../../../utils/helpers';

const OtherDay = ({ forecast }) => {
  return (
    <div className="city-card__other-day">
      <div className="city-cary__othery-day-title">{forecast.day}</div>
      <img
        className="city-card__othery-day-img"
        src={`../../../../img/weather-icons/${getWeatherImgName(
          forecast.code,
        )}`}
        alt="Mostly Sunny"
      />
      <div className="city-cary__othery-day-title">{forecast.low}&#8451;</div>
    </div>
  );
};

OtherDay.propTypes = {
  forecast: PropTypes.shape({
    day: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
};

export default OtherDay;
