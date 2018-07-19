import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CityWeatherCard from './cities/CityWeatherCard';

class Cities extends Component {
  static defaultProps = {
    cities: [],
  };

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        <div className="pure-g">
          <div className="pure-u-7-12 margin-h-center">
            <h2 className="cities__heading">Your Cities</h2>
            {cities.map(city => (
              <CityWeatherCard city={city} key={city.title} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps)(Cities);
