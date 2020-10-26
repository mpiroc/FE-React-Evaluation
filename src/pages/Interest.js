import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Interest.css'
import InterestTypeBadge from '../components/InterestTypeBadge'

export default function Interest() {
    const id = parseInt(useParams().id);
    const interests = useSelector(state => state.interest)

    if (!interests.has(id)) {
        return null;
    }

    const interest = interests.get(id)
    const type = interest.get('type')

    return(
        <div className="interest-container">
            <div className="interest-name-container"><span>{interest.get('name')}</span></div>
            <div className="interest-badge-container"><InterestTypeBadge type={type} size='normal' /></div>
            <div className="interest-detail-container"><span>{interest.get('detail')}</span></div>
        </div>
    )
}

