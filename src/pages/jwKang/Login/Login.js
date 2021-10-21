import React, { Component } from 'react';
import './Login.scss';

class LoginKang extends Component {
  goMain = () => {
    this.props.history.push('/Main-jw');
  };

  render() {
    return (
      <div className="body">
        <main className="login-container">
          <h1 className="title">Westagram</h1>
          <form className="userForm" id="userForm">
            <input
              required
              className="idBox"
              id="idBox"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              required
              className="pwBox"
              id="pwBox"
              type="password"
              placeholder="비밀번호"
            />
            <button className="loginBtn" id="loginBtn" onClick={this.goMain}>
              로그인
            </button>
          </form>

          <a href="_blank" className="forgot-pw">
            비밀번호를 잊으셨나요?
          </a>
        </main>
      </div>
    );
  }
}

export default LoginKang;
