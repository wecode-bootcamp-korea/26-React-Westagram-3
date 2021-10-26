import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginJang extends Component {
  constructor() {
    super();

    this.state = {
      idInput: '',
      pwInput: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  goToMain = () => {
    const { history } = this.props;
    history.push('/main-yj');
  };

  render() {
    const { handleInput, goToMain } = this;
    const { idInput, pwInput } = this.state;

    let idTest = idInput.indexOf('@') !== -1;
    let pwTest = pwInput.length >= 5;

    return (
      <main className="loginOuterBox">
        <div className="loginInnerBox">
          <h1>Westagram</h1>
          <form className="loginForm">
            <input
              id="id"
              type="text"
              name="idInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleInput}
            />
            <input
              id="pw"
              type="text"
              name="pwInput"
              placeholder="비밀번호"
              onChange={handleInput}
            />
            <button
              id="loginBtn"
              onClick={goToMain}
              className={idTest && pwTest ? 'activated' : 'deactivated'}
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
