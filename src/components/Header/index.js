import React from 'react';
import 'components/Header/styles.scss';

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <a href="#">logo</a>
    </div>

    <div className="header-menu-wrapper">
      <ul className="header-menu">
        <li className="header-menu-item">
          <a href="#">курсы</a>
        </li>
        <li className="header-menu-item">
          <a href="#">тест на уровень английского</a>
        </li>
        <li className="header-menu-item">
          <a href="#">как заговорить</a>
        </li>
        <li className="header-menu-item">
          <a href="#">преподаватели</a>
        </li>
        <li className="header-menu-item">
          <a href="#">отзывы</a>
        </li>
      </ul>
    </div>

    <div className="header-user">user</div>
  </div>
);

export default Header;
