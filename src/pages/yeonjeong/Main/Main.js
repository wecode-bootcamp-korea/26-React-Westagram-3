import React, { Component } from 'react';
import Feeds from './components/Feeds';
import Aside from './components/Aside';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class MainJang extends Component {
  constructor() {
    super();

    this.state = {
      feedsData: [],
      storyUsersData: [],
      recommendUsersData: [],
    };
  }

  handleFeedsData = () => {
    fetch('data/yeonjeong/feedsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          feedsData: data,
        })
      );
  };

  handleStoryUsersData = () => {
    fetch('data/yeonjeong/storyUsersData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          storyUsersData: data,
        })
      );
  };

  handleRecommendUsersData = () => {
    fetch('data/yeonjeong/recommendUsersData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          recommendUsersData: data,
        })
      );
  };

  componentDidMount() {
    this.handleFeedsData();
    this.handleStoryUsersData();
    this.handleRecommendUsersData();
  }

  render() {
    const { feedsData, storyUsersData, recommendUsersData } = this.state;

    return (
      <div class="mainPage">
        <Nav />
        <main>
          <section className="feed">
            <Feeds feedsData={feedsData} />
          </section>
          <Aside
            storyUsersData={storyUsersData}
            recommendUsersData={recommendUsersData}
          />
        </main>
      </div>
    );
  }
}

export default MainJang;
