import React from 'react';
import './SkillTypeBadge.css'

function getTypeClassName(type) {
    switch(type) {
        case 'Essential':
            return 'skill-type-essential'
        case 'Practical':
            return 'skill-type-practical'
        case 'Professional':
            return 'skill-type-professional'
        default:
            return 'skill-type-unknown'
    }
}

function getSizeClassName(size) {
    switch(size) {
        case 'small':
            return 'skill-size-small'
        case 'normal':
        default:
            return 'skill-size-normal'
    }
}

export default function InterestTypeBadge({ type, size }) {
    return (
        <span className={`skill-type-value ${getTypeClassName(type)} ${getSizeClassName(size)}`}>
            {type}
        </span>
    )
}
