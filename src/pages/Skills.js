import React from 'react';
import './Skills.css';
import { SkillCardCollection } from '../components/SkillCard'

export default function Skills() {
    return (
        <div>
            <h3 className='skills-header'>Your Skills</h3>
            <SkillCardCollection />
        </div>
    )
}
