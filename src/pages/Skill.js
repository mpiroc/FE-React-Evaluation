import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Skill.css';
import TypeBadge from '../components/TypeBadge';
import { SKILL_TYPE_MAP } from '../type-maps';

export default function Interest() {
    const id = parseInt(useParams().id);
    const skills = useSelector(state => state.skill);

    if (!skills.has(id)) {
        return null;
    }

    const skill = skills.get(id);
    const type = skill.get('type');

    return(
        <div className="interest-container">
            <div className="interest-name-container"><span>{skill.get('name')}</span></div>
            <div className="interest-badge-container"><TypeBadge typeMap={SKILL_TYPE_MAP} type={type} size='normal' /></div>
            <div className="interest-detail-container"><span>{skill.get('detail')}</span></div>
        </div>
    );
}

