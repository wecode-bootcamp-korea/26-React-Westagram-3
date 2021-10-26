import React, { Component } from 'react';
import './Login.scss';

class LoginLim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      userPassword: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { userID, userPassword } = this.state;
    let user = userID.includes('@');
    let userPW = userPassword.length > 4;

    return (
      <main id="login-page-ysLim">
        <section className="main-container">
          <div className="logo-box">
            <span id="logo">westagram</span>
          </div>
          <form className="login-info-box">
            <input
              id="username"
              className="info-input"
              name="userID"
              type="text"
              onChange={this.handleInput}
              placeholder="전화번호, 사용자명, 혹은 이메일"
            />
            <input
              id="password"
              name="userPassword"
              type="password"
              onChange={this.handleInput}
              placeholder="비밀번호"
            />
            <input
              id="submit"
              className={
                user && userPW
                  ? 'activateLoginBtnYsLim'
                  : 'deactivateLoginBtnYsLim'
              }
              disabled={!(user && userPW)}
              type="submit"
              value="로그인"
            />
          </form>
          <div className="finding-password">비밀번호를 잊으셨나요?</div>
        </section>
        <script src="assets/js/login.js" />
      </main>
    );
  }
}

export default LoginLim;
