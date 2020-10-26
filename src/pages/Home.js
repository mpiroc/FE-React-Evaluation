import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import { InterestCardCollection } from '../components/InterestCard';
import { SkillCardCollection } from '../components/SkillCard';

const MAX_INTERESTS_ON_HOME_PAGE = 3
const MAX_SKILLS_ON_HOME_PAGE = 3

export default function Home() {
    const userName = useSelector(state => state.user.get('userName'));

    return (
        <div className="home-main-content">
            <p className='home-welcome-message'>Welcome {userName}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo. Proin sodales pulvinar sic
                tempor. Sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Nam fermentum, nulla luctus
                pharetra vulputate, felis tellus mollis orci, sed rhoncus
                pronin sapien nunc accuan eget.
            </p>
            <h3 className='.home-section-header'>Your Top Interests</h3>
            <InterestCardCollection max={MAX_INTERESTS_ON_HOME_PAGE} />

            <h3 className='.home-section-header'>Your Top Skills</h3>
            <SkillCardCollection max={MAX_SKILLS_ON_HOME_PAGE} />
        </div>
    );
}
