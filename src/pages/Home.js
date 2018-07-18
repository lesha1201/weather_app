import React from 'react';
import Header from './home/Header';
import Cities from './home/Cities';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Cities />
      </div>
    );
  }
}

export default Home;
