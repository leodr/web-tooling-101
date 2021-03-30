export const Link = ({ href, children }) => {
    return React.createElement('a', { href: href, target: '_blank' }, children);
};
