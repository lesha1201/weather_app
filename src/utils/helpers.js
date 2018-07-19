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
