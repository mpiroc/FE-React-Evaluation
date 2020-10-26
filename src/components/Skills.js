import React from 'react';
import './Skills.css';
import SkillCardCollection from './SkillCardCollection'

export default function Skills() {
    return (
        <div>
            <h3 className='skills-header'>Your Skills</h3>
            <SkillCardCollection />
        </div>
    )
}
