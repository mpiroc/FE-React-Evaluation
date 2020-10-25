import React from 'react';
import logo from '../logo.png';
import './NavigationBar.css';

export default function NavigationBar() {
    return (
        <div class='navcontainer'>
            <div className='logocontainer'>
                <img className='logo' src={logo} alt='no.inc logo' />
            </div>
            
            <div className='spacer'>.</div>
            <nav>
                <div className='navitem'><span>Home</span></div>
                <div className='navitem'><span>Navigation 2</span></div>
                <div className='navitem'><span>Navigation 3</span></div>
                <div className='usernamecontainer'>
                    <span id='username'><span id='username-icon'></span> Username</span>
                </div>
            </nav>
        </div>
    )
}
