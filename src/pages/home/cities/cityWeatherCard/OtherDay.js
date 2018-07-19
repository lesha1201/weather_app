import React from 'react';
import PropTypes from 'prop-types';

const OtherDay = ({ forecast }) => {
  return (
    <div className="city-card__other-day">
      <div className="city-cary__othery-day-title">{forecast.day}</div>
      <img
        className="city-card__othery-day-img"
        src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
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
  }).isRequired,
};

export default OtherDay;
