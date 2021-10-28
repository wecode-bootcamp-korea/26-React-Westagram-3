import React, { Component } from 'react';

export class StoryList extends Component {
  render() {
    return (
      <section className="story">
        <div className="story-bar">
          <span className="section-name">스토리</span>
          <span className="see-all">모두보기</span>
        </div>
        <ul className="story-list">
          <li>
            <div className="story-img-activate" />
            <img
              className="profile"
              src={process.env.PUBLIC_URL + '/images/ysLim/main/profile4.png'}
              alt="Random user's profile 1"
            />
            <div className="my-username">
              <span className="userID">_yum_s</span>
              <br />
              <span className="story-time-log">16분 전</span>
            </div>
          </li>
          <li>
            <div className="story-img-activate" />
            <img
              className="profile"
              src={process.env.PUBLIC_URL + '/images/ysLim/main/profile8.png'}
              alt="Random user's profile 2"
            />
            <div className="my-username">
              <span className="userID">drink_n_drink_</span>
              <br />
              <span className="story-time-log">3시간 전</span>
            </div>
          </li>
          <li>
            <div className="story-img-activate" />
            <img
              className="profile"
              src={process.env.PUBLIC_URL + '/images/ysLim/main/profile6.png'}
              alt="Random user's profile 3"
            />
            <div className="my-username">
              <span className="userID">butter_oiler</span>
              <br />
              <span className="story-time-log">20시간 전</span>
            </div>
          </li>
          <li>
            <div className="story-img-activate" />
            <img
              className="profile"
              src={process.env.PUBLIC_URL + '/images/ysLim/main/profile7.png'}
              alt="My pic"
            />
            <div className="my-username">
              <span className="userID">maybe-good</span>
              <br />
              <span className="story-time-log">4일 전</span>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default StoryList;
