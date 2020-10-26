import React from 'react';
import './InterestTypeBadge.css'

function getTypeClassName(type) {
    switch(type) {
        case 'Sport':
            return 'interest-type-sport'
        case 'Game':
            return 'interest-type-game'
        default:
            return 'interest-type-unknown'
    }
}

function getSizeClassName(size) {
    switch(size) {
        case 'small':
            return 'interest-size-small'
        case 'normal':
        default:
            return 'interest-size-normal'
    }
}

export default function InterestTypeBadge({ type, size }) {
    return (
        <span className={`interest-type-value ${getTypeClassName(type)} ${getSizeClassName(size)}`}>
            {type}
        </span>
    )
}
