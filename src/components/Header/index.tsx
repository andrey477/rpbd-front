import React from "react";
import block from "bem-cn";
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import './style.scss';

interface Props {

}

const bem = block('header');

export const Header: React.FC<Props> = () => {
  return (
    <header className={bem()}>
      <nav className={'orange darken-3'}>
        <div className={`${bem('container')} nav-wrapper`}>
          <div className={bem('logo')}>
            <div className={bem('img')}>
              <img src={logo} alt="" />
            </div>
            <Link to="/" className="brand-logo">VSU DRIFT</Link>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="#">Участники</Link></li>
            <li><Link to="#">Судьи</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};