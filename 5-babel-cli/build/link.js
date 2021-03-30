export var Link = function Link(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, children);
};