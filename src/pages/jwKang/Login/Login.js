import React, { Component } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class LoginKang extends Component {
  constructor() {
    super();
    this.state = {
      idInputVal: '',
      pwInputVal: '',
    };
  }

  //fetch 함수 시작
  goToMain = e => {
    console.log('go to main function');
    e.preventDefault();
    console.log(this.state.pwInputVal);
    fetch('http://10.58.2.168:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idInputVal,
        password: this.state.pwInputVal,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과 : ', result));
  };

  handleIdInput = e => {
    this.setState({
      idInputVal: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwInputVal: e.target.value,
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
              onClick={this.goToMain}
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
