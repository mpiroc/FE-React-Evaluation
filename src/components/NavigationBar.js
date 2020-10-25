import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../logo.png';
import './NavigationBar.css';
import { useSelector } from 'react-redux';

export default function NavigationBar() {
    const username = useSelector(state => state.user.userName);

    return (
        <div class='nav-container'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='no.inc logo' />
            </div>
            
            <div className='spacer'>.</div>
            <nav>
                <div className='navitem'><NavLink exact to='/'>Home</NavLink></div>
                <div className='navitem'><NavLink exact to='/interests'>Interests</NavLink></div>
                <div className='navitem'><NavLink exact to='/skills'>Skills</NavLink></div>
                <div>
                    <span id='username'><span id='username-icon'></span>{username}</span>
                </div>
            </nav>
        </div>
    )
}
