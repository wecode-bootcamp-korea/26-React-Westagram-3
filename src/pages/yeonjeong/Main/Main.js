import React, { Component } from 'react';
import Feed from './components/Feed';
import Aside from './components/Aside';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class MainJang extends Component {
  constructor() {
    super();

    this.state = {
      feedData: [],
      storyUserData: [],
      recommendUserData: [],
    };
  }

  componentDidMount() {
    fetch('data/yeonjeong/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          feedData: data,
        })
      );

    fetch('data/yeonjeong/storyUserData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          storyUserData: data,
        })
      );

    fetch('data/yeonjeong/recommendUserData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          recommendUserData: data,
        })
      );
  }

  render() {
    const { feedData, storyUserData, recommendUserData } = this.state;
    return (
      <div class="mainPage">
        <Nav />
        <main>
          <section className="feed">
            <Feed feedData={feedData} />
          </section>
          <Aside
            storyUserData={storyUserData}
            recommendUserData={recommendUserData}
          />
        </main>
      </div>
    );
  }
}

export default MainJang;
