import React, { Component } from 'react';
import Aside from '../../../components/Aside/Aside';
import Feed from '../../../components/Feed/Feed';
import './Main.scss';

class MainKang extends Component {
  goLogin = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push('/Login-jw');
  };
  render() {
    return (
      <div className="body">
        <div className="total">
          <div className="main-layout">
            <Feed />

            <Aside />
          </div>
        </div>
      </div>
    );
  }
}

export default MainKang;
