import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://i.gifer.com/XOsX.gif" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} -{' '}
            <button className={s.button} onClick={props.logout}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink className={s.login} to={'/login'}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
