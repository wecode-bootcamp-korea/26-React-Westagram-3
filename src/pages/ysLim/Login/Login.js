import React, { Component } from 'react';
import './Login.scss';

class LoginLim extends Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line react/no-unused-state
    this.state = {
      userID: '',
      userPassword: '',
    };
  }

  handleIdInput = e => {
    this.setState({ userID: e.target.value });
  };

  handlePasswordInput = e => {
    this.setState({ userPassword: e.target.value });
  };

  render() {
    let userID = this.state.userID.includes('@');
    let userPW = this.state.userPassword.length > 4;

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
              onChange={this.handleIdInput}
              placeholder="전화번호, 사용자명, 혹은 이메일"
            />
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handlePasswordInput}
              placeholder="비밀번호"
            />
            <input
              id="submit"
              className="login-button"
              style={{
                backgroundColor: userID && userPW ? 'green' : 'red',
              }}
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
