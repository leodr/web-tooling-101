import React from 'react';
import './link.css';

export const Link = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);
