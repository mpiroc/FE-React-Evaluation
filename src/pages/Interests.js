import React from 'react';
import './Interests.css';
import InterestCardCollection from '../components/InterestCardCollection'

export default function Interests() {
    return (
        <div>
            <h3 className='interests-header'>Your Interests</h3>
            <InterestCardCollection />
        </div>
    )
}
