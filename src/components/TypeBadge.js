import React from 'react';
import './TypeBadge.css';

function getSizeClassName(size) {
    switch(size) {
        case 'small':
        case 'normal':
            return size;
        default:
            return 'normal';
    }
}

export default function TypeBadge({ type, size, typeMap }) {
    return (
        <span className={`type-badge type-badge-type-${typeMap[type] || 'unknown'} type-badge-size-${getSizeClassName(size)}`}>
            {type}
        </span>
    );
}
