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
      <nav className={'blue darken-3'}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Royals vsu drift</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/racers">Участники</Link></li>
            <li><Link to="#">Судьи</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};