import { ADD_CITY, REMOVE_CITY } from '../constants';
import { weatherAPI } from '../utils/api';
import { storePlaceLocally } from '../utils/helpers';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_CITY:
      return action.payload.isCurrentCity
        ? [{ ...action.payload, isCurrentCity: true }, ...state]
        : [...state, action.payload];
    case REMOVE_CITY:
      var localCities = localStorage.getItem('cities');
      if (localCities) {
        localCities = localCities
          .split(';')
          .filter(placeName => placeName !== action.payload);
        localStorage.setItem('cities', localCities.join(';'));
      }
      return state.filter(city => city.placeName !== action.payload);
    default:
      return state;
  }
}

export const addCity = city => ({ type: ADD_CITY, payload: city });
export const removeCity = placeName => ({
  type: REMOVE_CITY,
  payload: placeName,
});

export const fetchCityForecast = (placeName, isCurrentCity) => dispatch =>
  weatherAPI
    .fetchWeather(placeName)
    .then(forecast => {
      // Store city name locally
      storePlaceLocally(placeName);
      dispatch(addCity({ ...forecast, placeName, isCurrentCity }));
    })
    .catch(() => {});
