import React, { Component } from 'react';
import './Login.scss';

class LoginKang extends Component {
  constructor() {
    super();
    this.state = {
      idInputVal: '',
      pwInputVal: '',
      color: '#99d6ff',
    };
  }

  handleIdInput = event => {
    console.log(event.target.value);
    this.setState({
      idInputVal: event.target.value,
    });
  };

  handlePwInput = event => {
    console.log(event.target.value);
    this.setState({
      pwInputVal: event.target.value,
    });
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
              onChange={this.handleIdInput}
            />
            <input
              required
              className="pwBox"
              id="pwBox"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className={
                this.state.idInputVal.indexOf('@') !== -1 &&
                this.state.pwInputVal.length > 5
                  ? 'loginBtn2'
                  : 'loginBtn'
              }
            >
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
