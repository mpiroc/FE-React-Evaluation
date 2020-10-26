import React from 'react';
import { useSelector } from 'react-redux';
import './SkillCardCollection.css';
import SkillCard from './SkillCard';

// TODO: Test with large number of cards to ensure that scrolling works properly.
export default function SkillCardCollection({ max }) {
    let skillIds = useSelector(state => state.skill)
        .keySeq()

    // 0 is a legitimate value for max, so we can't just test for truthiness.
    if (max !== undefined && max !== null) {
        skillIds = skillIds.take(max)
    }
        
    return (
        <div className='skills-container'>
            {skillIds.map(id => <SkillCard id={id} key={id} />)}
        </div>
    )
}