import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav id="nav-yj">
        <div className="navLogo">
          <img alt="Westagram logo" src="/images/insta_logo.png" />
          <h1>Westagram</h1>
        </div>
        <form className="navSearchForm">
          <input type="text" placeholder="검색" />
          <i className="fas fa-search" />
        </form>
        <div className="navIcon">
          <img alt="explore icon" src="/images/explore.png" />
          <img alt="heart icon" src="/images/heart.png" />
          <img alt="profile icon" src="/images/profile.png" />
        </div>
      </nav>
    );
  }
}

export default Nav;
