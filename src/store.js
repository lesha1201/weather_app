import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { citiesAPI } from './utils/api';

// reducers
import cities, { fetchCityForecast, prioritizeCity } from './state/cities';
import { storePlaceLocally } from './utils/helpers';

const rootReducer = combineReducers({
  cities,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

let localCities = localStorage.getItem('cities');
if (localCities) {
  localCities = localCities.split(';');
  localCities.forEach(city => fetchCityForecast(city)(store.dispatch));
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(pos => {
    citiesAPI
      .searchCities(pos.coords.longitude, pos.coords.latitude)
      .then(cities => {
        let { place_name } = cities[0];
        let isNew = storePlaceLocally(place_name, true);
        isNew
          ? fetchCityForecast(place_name, true)(store.dispatch)
          : store.dispatch(prioritizeCity(place_name, true));
      });
  });
}

export default store;
