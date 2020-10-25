import React from 'react';
import { useLocation } from 'react-router-dom'
import logo from '../logo.png';
import './NavigationBar.css';

export default function NavigationBar() {
    const location = useLocation()

    function getClassName(route) {
        if (route === location.pathname) {
            return 'navitem current'
        }

        return 'navitem'
    }

    return (
        <div class='nav-container'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='no.inc logo' />
            </div>
            
            <div className='spacer'>.</div>
            <nav>
                <div className={getClassName('/')}><span>Home</span></div>
                <div className={getClassName('/interests')}><span>Navigation 2</span></div>
                <div className={getClassName('/skills')}><span>Navigation 3</span></div>
                <div>
                    <span id='username'><span id='username-icon'></span> Username</span>
                </div>
            </nav>
        </div>
    )
}
