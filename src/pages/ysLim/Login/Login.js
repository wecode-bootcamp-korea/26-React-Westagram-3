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

  submitForm = e => {
    const { userID, userPassword } = this.state;
    fetch('http://10.58.1.234:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: userID,
        password: userPassword,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'INVALID_USER')
          alert('아이디와 비밀번호를 다시 입력해주세요');
        if (result.message === 'DUPLICATION_ERROR')
          alert('중복된 이메일입니다.');
        if (result.access_token) {
          this.goToMain();
          localStorage.setItem('token', result.access_token);
        }
      });
  };

  goToMain = () => {
    const { history } = this.props;
    history.push('/main-ys');
  };

  render() {
    const { userID, userPassword } = this.state;
    const isIdValid = userID.includes('@');
    const isPwValid = userPassword.length > 4;
    const isFormValid = isIdValid && isPwValid;

    return (
      <main className="login-page-ysLim">
        <section className="main-container">
          <div className="logo-box">
            <h1 class="logo">westagram</h1>
          </div>
          <form className="login-info-box" onSubmit={e => e.preventDefault()}>
            <input
              className="info-input"
              name="userID"
              type="text"
              onChange={this.handleInput}
              placeholder="이메일"
            />
            <input
              name="userPassword"
              type="password"
              onChange={this.handleInput}
              placeholder="비밀번호"
            />
            <button
              className={`button Login ${isFormValid ? 'activate' : ''}`}
              disabled={!isFormValid}
              type="submit"
              onClick={this.submitForm}
            >
              로그인
            </button>
          </form>
          <div className="finding-password">비밀번호를 잊으셨나요?</div>
        </section>
      </main>
    );
  }
}

export default LoginLim;
