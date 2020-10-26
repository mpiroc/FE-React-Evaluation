import React from 'react';
import './SkillCard.css'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import SkillTypeBadge from './SkillTypeBadge'

// TODO: Make interests and skills more DRY.
export default function InterestCard({ id }) {
    const skill = useSelector(state => state.skill.get(id))
    const history = useHistory()

    const type = skill.get('type')

    return(
        <div className="skill-card" onClick={() => history.push(`/skill/${id}`)}>
            <div className='skill-title'>Skill {skill.get('id')}</div>

            <div className='skill-property-label'><span>Name:</span></div>
            <div className='skill-property-value'><span>{skill.get('name')}</span></div>

            <div className='skill-property-label'><span>Type:</span></div>
            <div><SkillTypeBadge type={type} size='small' /></div>
        </div>
    )
}