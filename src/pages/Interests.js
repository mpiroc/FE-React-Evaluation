import React from 'react';
import './Interests.css';
import { InterestCardCollection } from '../components/InterestCard';

export default function Interests() {
    return (
        <div className='interests-container'>
            <h3 className='interests-header'>Your Interests</h3>
            <InterestCardCollection />
        </div>
    );
}
