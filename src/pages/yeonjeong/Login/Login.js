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

  handleLogin = () => {
    const { idInput, pwInput } = this.state;
    fetch('http://10.58.0.69:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
      }),
    })
      .then(res => res.json())
      .then(result => {
        const { history } = this.props;
        if (result.message === 'INVALID_USER') {
          alert('login please');
        } else if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          history.push('/main-yj');
        }
      });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { handleInput, handleLogin, handleSubmit } = this;
    const { idInput, pwInput } = this.state;

    let idTest = idInput.indexOf('@') !== -1;
    let pwTest = pwInput.length >= 5;

    return (
      <main className="loginOuterBox">
        <div className="loginInnerBox">
          <h1>Westagram</h1>
          <form className="loginForm" onSubmit={handleSubmit}>
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
              onClick={handleLogin}
              className={idTest && pwTest ? 'activated' : 'deactivated'}
              type="button"
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
