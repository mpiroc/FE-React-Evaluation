import React from 'react';
import { useSelector } from 'react-redux';
import './InterestCardCollection.css';
import InterestCard from './InterestCard';

// TODO: Test with large number of cards to ensure that scrolling works properly.
export default function InterestCardCollection({ max }) {
    let interestIds = useSelector(state => state.interest)
        .keySeq()

    // 0 is a legitimate value for max, so we can't just test for truthiness.
    if (max !== undefined && max !== null) {
        interestIds = interestIds.take(max)
    }
        
    return (
        <div className='interests-container'>
            {interestIds.map(id => <InterestCard id={id} key={id} />)}
        </div>
    )
}