import React, { Component } from 'react';
import './MainRight.scss';

class MainRight extends Component {
  render() {
    return (
      <section className="main_right">
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
            <span> 모두 보기</span>
          </div>
          <ul>
            <li className="userInfo">
              <img
                alt="user profile"
                src="https://images.unsplash.com/photo-1597024065285-6f47cd40f5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              />
              <div className="userInfoDetail">
                <span className="userName">yumyum</span>
                <span className="description">20분 전</span>
              </div>
            </li>
            <li className="userInfo">
              <img
                alt="user profile"
                src="https://images.unsplash.com/photo-1597024065285-6f47cd40f5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              />
              <div className="userInfoDetail">
                <span className="userName">lalala</span>
                <span className="description">1시간 전</span>
              </div>
            </li>
            <li className="userInfo">
              <img
                alt="user profile"
                src="https://images.unsplash.com/photo-1597024065285-6f47cd40f5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              />
              <div className="userInfoDetail">
                <span className="userName">pwwwwwww</span>
                <span className="description">15시간 전</span>
              </div>
            </li>
          </ul>
        </section>
        <section className="recommend">
          <div className="recommendTitle">
            <h4>회원님을 위한 추천</h4>
            <span>모두 보기</span>
          </div>
          <ul>
            <li className="userInfo">
              <img
                alt="user profile"
                src="https://images.unsplash.com/photo-1597024065285-6f47cd40f5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              />
              <div className="userInfoDetail">
                <span className="userName">yumyum</span>
                <span className="description">yoyoyoyo님 외</span>
              </div>
              <button type="button">팔로우</button>
            </li>
            <li className="userInfo">
              <img
                alt="user profile"
                src="https://images.unsplash.com/photo-1597024065285-6f47cd40f5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              />
              <div className="userInfoDetail">
                <span className="userName">lalala</span>
                <span className="description">sumsum님 외</span>
              </div>
              <button type="button">팔로우</button>
            </li>
            <li className="userInfo">
              <img
                alt="user profile"
                src="https://images.unsplash.com/photo-1597024065285-6f47cd40f5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              />
              <div className="userInfoDetail">
                <span className="userName">pwwwwwww</span>
                <span className="description">newnew님 외</span>
              </div>
              <button type="button">팔로우</button>
            </li>
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
      </section>
    );
  }
}

export default MainRight;
