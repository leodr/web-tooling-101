import { Link } from './link.js';
export var RepoItem = function RepoItem(_ref) {
  var repo = _ref.repo;
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    href: repo.html_url
  }, repo.name));
};