import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./header.scss";

export function Header(): JSX.Element {
  return (
    <nav className="header">
      <h3><NavLink
        to='/' exact={true}  activeClassName='link-active' className='link'>Home</NavLink></h3>
      <h3><NavLink
        to='/about' activeClassName='link-active' className='link'>About</NavLink></h3>
    </nav>
  )
}
