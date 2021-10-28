import React, { Component } from 'react';
import { footerInfo } from './footerInfo';
import './Footer.scss';
export class Info extends Component {
  render() {
    return (
      <footer>
        <ul className="aside-footer-info">
          {footerInfo.map(info => (
            <li key={info.id}>{info.content}</li>
          ))}
          <li>© 2019 WESTAGRAM</li>
        </ul>
      </footer>
    );
  }
}

export default Info;
