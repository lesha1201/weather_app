import React, { Component } from 'react';
import SearchField from '../../../components/SearchField';
import SearchList from './search/SearchList';
import { MAPBOX_API_KEY } from '../../../config';

class Search extends Component {
  state = {
    cityPrefix: '',
    cities: [],
  };

  componentDidMount() {
    let self = this;
    this.clearCities = function(e) {
      if (!e.target.classList.contains('header__search'))
        self.setState({
          cities: [],
        });
    };
    document.addEventListener('click', this.clearCities);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clearCities);
  }

  onChange = e => {
    this.setState(
      {
        cityPrefix: e.target.value,
      },
      () => {
        const { cityPrefix } = this.state;
        // Fetch data after 600ms
        if (this.timeout) clearTimeout(this.timeout);

        if (cityPrefix.length > 0) {
          this.timeout = setTimeout(() => {
            fetch(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
                cityPrefix,
              )}.json?access_token=${MAPBOX_API_KEY}&types=place&language=en`,
            ).then(res =>
              res
                .json()
                .then(result =>
                  this.setState({ cities: result.features || [] }),
                ),
            );
          }, 600);
        } else {
          this.setState({
            cities: [],
          });
        }
      },
    );
  };

  clearField = () => {
    this.setState({
      cityPrefix: '',
    });
  };

  render() {
    const { cityPrefix, cities } = this.state;
    return (
      <div className="header__search-block">
        <SearchField
          value={cityPrefix}
          placeholder="City..."
          name="search_city"
          className="header__search"
          onChange={this.onChange}
        />
        <SearchList cities={cities} clearField={this.clearField} />
      </div>
    );
  }
}

export default Search;
