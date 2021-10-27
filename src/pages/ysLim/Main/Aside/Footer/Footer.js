import React, { Component } from 'react';
import { footerInfo } from './footerInfo';
import './Footer.scss';
export class Info extends Component {
  render() {
    return (
      <footer>
        <ul className="aside-footer-info">
          {footerInfo.map(vl => (
            <li key={vl.id}>{vl.content}</li>
          ))}
          <li>© 2019 WESTAGRAM</li>
        </ul>
      </footer>
    );
  }
}

export default Info;
