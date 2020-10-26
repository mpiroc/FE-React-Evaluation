import React from 'react';
import './InterestCard.css'
import { useSelector } from 'react-redux'
import InterestTypeBadge from './InterestTypeBadge'

export default function InterestCard({ id }) {
    const interest = useSelector(state => state.interest.get(id))

    const type = interest.get('type')

    return(
        <div className="interest-card">
            <div className='interest-title'>Interest {interest.get('id')}</div>

            <div className='interest-property-label'><span>Name:</span></div>
            <div className='interest-property-value'><span>{interest.get('name')}</span></div>

            <div className='interest-property-label'><span>Type:</span></div>
            <div><InterestTypeBadge type={type} size='small' /></div>
        </div>
    )
}

