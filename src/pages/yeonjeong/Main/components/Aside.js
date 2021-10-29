import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

class Aside extends Component {
  render() {
    const { storyUsersData, recommendUsersData } = this.props;
    return (
      <aside className="aside">
        <section className="userInfo">
          <img
            alt="user profile"
            src="https://images.unsplash.com/photo-1634161906242-43a1d5beef68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
          />
          <div className="userInfoDetail">
            <span className="userName">eliz_j_</span>
            <span className="description">WeCode - 위코드</span>
          </div>
        </section>
        <section className="story">
          <div className="storyTitle">
            <h4>스토리</h4>
            <Link to=""> 모두 보기</Link>
          </div>
          <ul>
            {storyUsersData.map(userData => {
              return (
                <li className="userInfo" key={userData.id}>
                  <img alt={userData.imgAlt} src={userData.img} />
                  <div className="userInfoDetail">
                    <span className="userName">{userData.userName}</span>
                    <span className="description">{userData.description}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="recommend">
          <div className="recommendTitle">
            <h4>회원님을 위한 추천</h4>
            <Link to="">모두 보기</Link>
          </div>
          <ul>
            {recommendUsersData.map(userData => {
              return (
                <li className="userInfo" key={userData.id}>
                  <img alt={userData.imgAlt} src={userData.img} />
                  <div className="userInfoDetail">
                    <span className="userName">{userData.userName}</span>
                    <span className="description">{userData.description}</span>
                  </div>
                  <button type="button">팔로우</button>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="westaInfo">
          <ul>
            <li>Westagram 정보</li>
            <li>&middot;</li>
            <li>지원</li>
            <li>&middot;</li>
            <li>홍보 센터</li>
            <li>&middot;</li>
            <li>API</li>
            <li>&middot;</li>
            <li>채용 정보</li>
            <li>&middot;</li>
            <li>개인정보처리방침</li>
            <li>&middot;</li>
            <li>약관</li>
            <li>&middot;</li>
            <li>디렉터리</li>
            <li>&middot;</li>
            <li>프로필</li>
            <li>&middot;</li>
            <li>해시태그</li>
            <li>&middot;</li>
            <li>언어</li>
          </ul>
          <span className="copyright">&copy; 2019 WESTAGRAM</span>
        </section>
      </aside>
    );
  }
}

export default Aside;
