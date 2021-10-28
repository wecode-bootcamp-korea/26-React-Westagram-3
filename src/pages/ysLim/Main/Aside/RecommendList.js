import React, { Component } from 'react';

export class RecommendList extends Component {
  render() {
    return (
      <section className="recommend">
        <div className="recommend-bar">
          <span className="section-name">회원님을 위한 추천</span>
          <span className="see-all">모두보기</span>
        </div>
        <ul className="recommend-list">
          <li>
            <div className="profile-userID-username">
              <img
                className="profile"
                src={process.env.PUBLIC_URL + '/images/ysLim/main/profile9.jpg'}
                alt="Random user's profile 4"
              />
              <div className="my-username">
                <span className="userID">ioooooahwow</span>
                <br />
                <span className="userID-subline">_rupi_na님 외2명이...</span>
              </div>
            </div>
            <span className="follow-bttn">팔로우</span>
          </li>
          <li>
            <div className="profile-userID-username">
              <img
                className="profile"
                src={
                  process.env.PUBLIC_URL + '/images/ysLim/main/profile10.jpg'
                }
                alt="Random user's profile 5"
              />
              <div className="my-username">
                <span className="userID">lovenpound_sun</span>
                <br />
                <span className="userID-subline">bingo_misoya님 외 12...</span>
              </div>
            </div>
            <span className="follow-bttn">팔로우</span>
          </li>
          <li>
            <div className="profile-userID-username">
              <img
                className="profile"
                src={
                  process.env.PUBLIC_URL + '/images/ysLim/main/profile11.jpg'
                }
                alt="Cooper Kao's Face!"
              />
              <div className="my-username">
                <span className="userID">cooper_kao</span>
                <br />
                <span className="userID-subline">jimmy_tommson님 외 2...</span>
              </div>
            </div>
            <span className="follow-bttn">팔로우</span>
          </li>
        </ul>
      </section>
    );
  }
}

export default RecommendList;
