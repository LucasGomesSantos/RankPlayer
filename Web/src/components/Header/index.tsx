import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './styles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Game.png' alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/'>Nova Pontuação </NavLink>
            <NavLink to='/Ranking'>Top 100 jogadores </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;