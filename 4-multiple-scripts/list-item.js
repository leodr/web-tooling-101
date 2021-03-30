import { Link } from './link.js';

export const RepoItem = ({ repo }) => {
    return React.createElement(
        'li',
        null,
        React.createElement(Link, { href: repo.html_url }, repo.name)
    );
};
