import React, { Component } from 'react';
import './Login.scss';

class LoginLim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      userPassword: '',
      // username: '',
      // contact: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isOkayToGo = e => {
    const { userID, userPassword } = this.state;
    fetch('http://10.58.1.234:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userID,
        password: userPassword,
        // name: this.state.username,
        // phone_num: this.state.contact,
      }),
    })
      .then(res => res.json())
      // .then(res => console.log('결과', res));
      .then(result => {
        const { history } = this.props;
        if (result.message === 'INVALID_USER') {
          alert('login please'); ////////
        } else if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          history.push('/main-ys');
        }
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
          <form className="login-info-box" onSubmit={e => e.preventDefault()}>
            <input
              id="username"
              name="username"
              type="text"
              onChange={this.handleInput}
              placeholder="이름"
            />
            <input
              id="email"
              className="info-input"
              name="userID"
              type="text"
              onChange={this.handleInput}
              placeholder="이메일"
            />
            <input
              id="password"
              name="userPassword"
              type="password"
              onChange={this.handleInput}
              placeholder="비밀번호"
            />
            <input
              id="contact"
              name="contact"
              type="text"
              onChange={this.handleInput}
              placeholder="전화번호"
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
              onClick={this.isOkayToGo}
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
