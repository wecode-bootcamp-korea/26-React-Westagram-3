import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// 지원's 컴포넌트
import LoginKang from './pages/jwKang/Login/Login';
import MainKang from './pages/jwKang/Main/Main';

// 연수's 컴포넌트
import LoginLim from './pages/ysLim/Login/Login';
import MainLim from './pages/ysLim/Main/Main';

// 연정's 컴포넌트
import LoginJang from './pages/yeonjeong/Login/Login';
import MainJang from './pages/yeonjeong/Main/Main';

//공통 컴포넌트
import Nav from './components/Nav/Nav';

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login-jw" component={LoginKang} />
          <Route exact path="/main-jw" component={MainKang} />
          <Route exact path="/login-ys" component={LoginLim} />
          <Route exact path="/main-ys" component={MainLim} />
          <Route exact path="/login-yj" component={LoginJang} />
          <Route exact path="/main-yj" component={MainJang} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
