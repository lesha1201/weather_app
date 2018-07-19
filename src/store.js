import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import cities, { fetchCityForecast } from './state/cities';

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

export default store;
