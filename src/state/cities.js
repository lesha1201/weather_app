import { ADD_CITY, REMOVE_CITY } from '../constants';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_CITY:
      return [...state, action.payload];
    case REMOVE_CITY:
      return state.filter(
        city => (city.id !== action.payload.id ? true : false),
      );
    default:
      return state;
  }
}

export const addCity = city => ({ type: ADD_CITY, payload: city });
export const removeCity = city => ({ type: REMOVE_CITY, payload: city });
