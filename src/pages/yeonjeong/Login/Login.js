import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginJang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idInput: '',
      pwInput: '',
    };

    this.handleIdInput = this.handleIdInput.bind(this);
    this.handlePwInput = this.handlePwInput.bind(this);
  }

  handleIdInput(e) {
    this.setState({ idInput: e.target.value });
  }

  handlePwInput(e) {
    this.setState({ pwInput: e.target.value });
  }

  goToMain = () => {
    return `this.props.history.push('/main-yj')`;
  };

  render() {
    let idTest = this.state.idInput.indexOf('@');
    let pwTest = this.state.pwInput.length >= 5;
    return (
      <main className="loginOuterBox">
        <div className="loginInnerBox">
          <h1>Westagram</h1>
          <form className="loginForm">
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              id="pw"
              type="text"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              id="loginBtn"
              onClick={this.goToMain}
              style={{
                backgroundColor: idTest && pwTest ? '#4192ef' : '#c6defa',
                cursor: idTest && pwTest ? 'pointer' : 'default',
              }}
            >
              로그인
            </button>
          </form>
          <Link to="/login-yj">비밀번호를 잊으셨나요?</Link>
        </div>
      </main>
    );
  }
}

export default LoginJang;
