import React from 'react';
import Logo from './header/Logo';
import Search from './header/Search';

function Header() {
  return (
    <div className="header">
      <div className="pure-g">
        <div className="pure-u-7-12 margin-h-center header__container">
          <Logo />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
