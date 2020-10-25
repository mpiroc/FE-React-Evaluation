import React from 'react';
import './TypeBadge.css'

function getTypeClassName(type) {
    switch(type) {
        case 'Sport':
            return 'type-sport'
        case 'Game':
            return 'type-game'
        default:
            return 'type-unknown'
    }
}

function getSizeClassName(size) {
    switch(size) {
        case 'small':
            return 'size-small'
        case 'normal':
        default:
            return 'size-normal'
    }
}

export default function TypeBadge({ type, size }) {
    return (
        <span className={`type-value ${getTypeClassName(type)} ${getSizeClassName(size)}`}>
            {type}
        </span>
    )
}
