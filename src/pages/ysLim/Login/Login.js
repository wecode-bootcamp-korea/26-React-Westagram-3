import React, { Component } from 'react';
import './Login.scss';

class LoginLim extends Component {
  render() {
    return (
      <main id="login-page-ysLim">
        <section className="main-container">
          <div className="logo-box">
            <span id="logo">westagram</span>
          </div>
          <form className="login-info-box" action="get">
            <input
              id="username"
              className="info-input"
              name="username"
              type="text"
              placeholder="전화번호, 사용자명, 혹은 이메일"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호"
            />
            <input
              id="submit"
              className="login-button"
              type="submit"
              value="로그인"
              disabled
            />
          </form>
          <div className="finding-password">
            <a href="main.html">비밀번호를 잊으셨나요?</a>
          </div>
        </section>
        <script src="assets/js/login.js" />
      </main>
    );
  }
}

export default LoginLim;
