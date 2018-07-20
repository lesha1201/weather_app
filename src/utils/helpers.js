export function storePlaceLocally(placeName, atTheTop) {
  // Store city name locally
  // result = fales - city is already stored, result = true - store city
  let result = false;
  let localCities = localStorage.getItem('cities');
  if (localCities) {
    localCities = localCities.split(';');
    let inx = localCities.indexOf(placeName);

    if (inx === -1) {
      atTheTop ? localCities.unshift(placeName) : localCities.push(placeName);
      result = true;
    } else if (atTheTop && inx !== 0) {
      localCities.splice(inx, 1);
      localCities.unshift(placeName);
    }
  } else {
    localCities = [placeName];
    result = true;
  }
  localStorage.setItem('cities', localCities.join(';'));
  return result;
}

export function fetchLocalPlaces() {
  let localCities = localStorage.getItem('cities');
  if (localCities) {
    localCities = localCities.split(';');
    localCities.forEach(city => this.props.fetchCityForecast(city));
  }
}

export function getWeatherImgName(code) {
  const weatherImgs = [
    ['1', '3', '4', '45', '47'],
    ['5', '6', '7', '18'],
    ['8', '9', '10', '11', '12', '35', '40'],
    ['13', '14', '15', '16', '17', '41', '42', '43', '46'],
    ['20', '21', '22'],
    ['23', '24'],
    ['26'],
    ['27'],
    ['28'],
    ['29'],
    ['30', '44'],
    ['31', '33'],
    ['32', '34', '36'],
    ['37', '38', '39'],
  ];
  for (let i = 0; i < weatherImgs.length; i++) {
    if (weatherImgs[i].includes(code + '')) {
      return weatherImgs[i].join(',') + '.png';
    }
  }
  return 'unknown.png';
}
