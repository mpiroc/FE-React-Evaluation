import React from 'react';
import { useSelector } from 'react-redux'
import './Home.css';
import InterestCard from './InterestCard'

export default function Home() {
    const userName = useSelector(state => state.user.get('userName'));
    const interests = useSelector(state => state.interest)

    return (
        <div className="main-content">
            <p className='welcome-message'>Welcome {userName}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus
                pronin sapien nunc accuan eget.
            </p>
            <div className='interests-container'>
                {interests.keySeq().map(key => (<InterestCard id={key} />))}
            </div>
        </div>
    )
}
