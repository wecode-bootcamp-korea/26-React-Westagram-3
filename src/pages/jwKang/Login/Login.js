import React, { Component } from 'react';
import './Login.scss';

class LoginKang extends Component {
  constructor() {
    super();
    this.state = {
      idInputVal: '',
      pwInputVal: '',
    };
  }

  handleIdInput = e => {
    const { value } = e.target;
    this.setState({
      idInputVal: value,
      pwInputVal: value,
    });
  };

  render() {
    return (
      <div className="body">
        <main className="loginContainer">
          <h1 className="title">Westagram</h1>
          <form className="userForm">
            <input
              className="idBox"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              className="pwBox"
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
