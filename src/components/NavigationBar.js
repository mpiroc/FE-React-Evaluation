import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import './NavigationBar.css';
import { useSelector } from 'react-redux';

export default function NavigationBar() {
    const username = useSelector(state => state.user.get('userName'));

    return (
        <div className='navbar-container'>
            <div className='navbar-logo-container'>
                <img src={logo} alt='no.inc logo' />
            </div>
            
            <div className='navbar-spacer'>.</div>
            <nav>
                <div className='navbar-item'><NavLink exact to='/'>Home</NavLink></div>
                <div className='navbar-item'><NavLink exact to='/interests'>Interests</NavLink></div>
                <div className='navbar-item'><NavLink exact to='/skills'>Skills</NavLink></div>
                <div>
                    <span id='navbar-username'><span id='navbar-username-icon'></span>{username}</span>
                </div>
            </nav>
        </div>
    );
}
