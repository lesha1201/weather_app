import React, { Component } from 'react';
import SearchField from '../../../components/SearchField';
import axios from 'axios';

// AIzaSyAWTU4JRpilpXQ-dJ7OOre4TLM6CD2NwYU
// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Saint&types=(cities)&language=en_GB&key=AIzaSyAWTU4JRpilpXQ-dJ7OOre4TLM6CD2NwYU

class Search extends Component {
  state = {
    cityPrefix: '',
  };

  onChange = e => {
    this.setState(
      {
        cityPrefix: e.target.value,
      },
      () => {
        const { cityPrefix } = this.state;
        // Fetch data
      },
    );
  };

  render() {
    const { cityPrefix } = this.state;
    return (
      <div className="header__search-block">
        <SearchField
          value={cityPrefix}
          placeholder="City..."
          name="search_city"
          className="header__search"
          onChange={this.onChange}
        />
        {/* <SearchModal

        /> */}
      </div>
    );
  }
}

export default Search;
