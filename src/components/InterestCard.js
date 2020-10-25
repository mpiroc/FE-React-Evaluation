import React from 'react';
import './InterestCard.css'
import { useSelector } from 'react-redux'
import TypeBadge from './TypeBadge'

export default function InterestCard({ id }) {
    const interest = useSelector(state => state.interest.get(id))

    const type = interest.get('type')

    return(
        <div className="interest-card">
            <div id='title'>Interest {interest.get('id')}</div>

            <div className='property-label'><span>Name:</span></div>
            <div className='property-value'><span>{interest.get('name')}</span></div>

            <div className='property-label'><span>Type:</span></div>
            <div><TypeBadge type={type} size='small' /></div>
        </div>
    )
}

