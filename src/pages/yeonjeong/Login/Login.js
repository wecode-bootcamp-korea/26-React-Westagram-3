import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginJang extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      password: '',
    };
  }

  loginFormInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { id, password } = this.state;
    fetch('https://westagram-signup.herokuapp.com/signup', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };

  goToMain = e => {
    const { history } = this.props;
    history.push('/main-yj');
  };

  render() {
    const { id, password } = this.state;

    const isIdValid = id.indexOf('@') !== -1;
    const isPwValid = password.length >= 5;

    return (
      <main className="loginOuterBox">
        <div className="loginInnerBox">
          <h1>Westagram</h1>
          <form
            className="loginForm"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.loginFormInput}
            />
            <input
              type="text"
              name="password"
              placeholder="비밀번호"
              onChange={this.loginFormInput}
            />
            <button
              onClick={this.handleLogin}
              className={isIdValid && isPwValid ? 'btn' : 'btn deactivated'}
              type="button"
              disabled={!isIdValid || !isPwValid}
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
