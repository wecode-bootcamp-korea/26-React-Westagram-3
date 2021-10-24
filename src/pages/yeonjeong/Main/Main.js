import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './components/Feed';
import MainRight from './components/MainRight';
import './Main.scss';

class MainJang extends Component {
  render() {
    return (
      <div class="mainPage">
        <Nav />
        <main>
          <Feed />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default MainJang;
