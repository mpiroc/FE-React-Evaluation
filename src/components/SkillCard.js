import React from 'react';
import './SkillCard.css'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import TypeBadge from './TypeBadge'
import { SKILL_TYPE_MAP } from '../type-maps'

export default function SkillCard({ id }) {
    const skill = useSelector(state => state.skill.get(id))
    const history = useHistory()

    const type = skill.get('type')

    return(
        <div className="skill-card" onClick={() => history.push(`/skill/${id}`)}>
            <div className='skill-title'>Skill {skill.get('id')}</div>

            <div className='skill-property-label'><span>Name:</span></div>
            <div className='skill-property-value'><span>{skill.get('name')}</span></div>

            <div className='skill-property-label'><span>Type:</span></div>
            <div><TypeBadge typeMap={SKILL_TYPE_MAP} type={type} size='small' /></div>
        </div>
    )
}

export function SkillCardCollection({ max }) {
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
