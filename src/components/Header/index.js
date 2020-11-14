import React from 'react';
import 'components/Header/styles.scss';

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <a href="#" onClick={() => {}}>
        logo
      </a>
    </div>

    <div className="header-menu-wrapper">
      <ul className="header-menu">
        <li className="header-menu-item">
          <a href="#" onClick={() => {}}>
            курсы
          </a>
        </li>
        <li className="header-menu-item">
          <a href="#" onClick={() => {}}>
            тест на уровень английского
          </a>
        </li>
        <li className="header-menu-item">
          <a href="#" onClick={() => {}}>
            как заговорить
          </a>
        </li>
        <li className="header-menu-item">
          <a href="#" onClick={() => {}}>
            преподаватели
          </a>
        </li>
        <li className="header-menu-item">
          <a href="#" onClick={() => {}}>
            отзывы
          </a>
        </li>
      </ul>
    </div>

    <div className="header-user">user</div>
  </div>
);

export default Header;
