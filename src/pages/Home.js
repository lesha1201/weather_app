import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './home/Header';
import Cities from './home/Cities';
import { fetchCityForecast as fetchCityForecastAction } from '../state/cities';
import { citiesAPI } from '../utils/api';
import { storePlaceLocally } from '../utils/helpers';

class Home extends React.Component {
  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        citiesAPI
          .searchCities(pos.coords.longitude, pos.coords.latitude)
          .then(cities => {
            let { place_name } = cities[0];
            storePlaceLocally(place_name, true);
            this.props
              .fetchCityForecast(place_name, true)
              .then(this.fetchLocalPlaces(1));
          });
      });
    } else {
      this.fetchLocalPlaces();
    }
  }

  fetchLocalPlaces(start = 0) {
    let localCities = localStorage.getItem('cities');
    if (localCities) {
      localCities = localCities.split(';').slice(start);
      localCities.forEach(city => {
        this.props.fetchCityForecast(city);
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Cities />
      </div>
    );
  }
}

Home.propTypes = {
  fetchCityForecast: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    fetchCityForecast: fetchCityForecastAction,
  },
)(Home);
