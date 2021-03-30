import React from 'react';
import { Link } from './link.js';

export const RepoItem = ({ repo }) => (
    <li>
        <Link href={repo.html_url}>{repo.name}</Link>
    </li>
);
