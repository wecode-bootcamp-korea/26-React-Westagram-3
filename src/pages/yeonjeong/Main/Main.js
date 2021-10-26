import React, { Component } from 'react';
import Feed from './components/Feed';
import MainRight from './components/MainRight';
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
    fetch('http://localhost:3000/data/yeonjeong/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          feedData: data,
        })
      );

    fetch('http://localhost:3000/data/yeonjeong/storyUserData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          storyUserData: data,
        })
      );

    fetch('http://localhost:3000/data/yeonjeong/recommendUserData.json', {
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
          <MainRight
            storyUserData={storyUserData}
            recommendUserData={recommendUserData}
          />
        </main>
      </div>
    );
  }
}

export default MainJang;
