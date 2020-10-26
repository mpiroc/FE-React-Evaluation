import React from 'react';
import './InterestCard.css'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import TypeBadge from './TypeBadge'
import { INTEREST_TYPE_MAP } from '../type-maps'

export default function InterestCard({ id }) {
    const interest = useSelector(state => state.interest.get(id))
    const history = useHistory()

    const type = interest.get('type')

    return(
        <div className="interest-card" onClick={() => history.push(`/interest/${id}`)}>
            <div className='interest-title'>Interest {interest.get('id')}</div>

            <div className='interest-property-label'><span>Name:</span></div>
            <div className='interest-property-value'><span>{interest.get('name')}</span></div>

            <div className='interest-property-label'><span>Type:</span></div>
            <div><TypeBadge typeMap={INTEREST_TYPE_MAP} type={type} size='small' /></div>
        </div>
    )
}

