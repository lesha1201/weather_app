import { MAPBOX_API_KEY } from '../config';

function YQL(query) {
  return (
    'https://query.yahooapis.com/v1/public/yql?q=' +
    encodeURI(query) +
    '&format=json'
  );
}

export const weatherAPI = {
  fetchWeather: place_name => {
    var query = YQL(
      `select units, title, location, wind, atmosphere, item from weather.forecast where woeid in (select woeid from geo.places(1) where text='${place_name}') and u='c'`,
    );

    return fetch(query).then(res =>
      res.json().then(res => {
        return new Promise((response, reject) => {
          if (res.query.count > 0) {
            response(res.query.results.channel);
          } else {
            reject("Can't fetch");
          }
        });
      }),
    );
  },
};

export const citiesAPI = {
  searchCities: (cityPrefix, latitude) => {
    if (latitude) {
      // then cityPrefix == longitude
      cityPrefix += ', ' + latitude;
    }
    return fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
        cityPrefix,
      )}.json?access_token=${MAPBOX_API_KEY}&types=place&language=en`,
    ).then(res => res.json().then(result => result.features || []));
  },
};
