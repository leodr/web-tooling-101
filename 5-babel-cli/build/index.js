import Confetti from 'react-confetti';
import { RepoItem } from './list-item.js';
fetch('https://api.github.com/orgs/tobitsoftware/repos').then(function (response) {
  return response.json();
}).then(function (repos) {
  var children = [];
  repos.forEach(function (repo) {
    var li = /*#__PURE__*/React.createElement(RepoItem, {
      key: repo.id,
      repo: repo
    });
    children.push(li);
  });
  var repoList = /*#__PURE__*/React.createElement("ul", null, children, /*#__PURE__*/React.createElement(Confetti, {
    width: window.innerWidth,
    height: window.innerHeight
  }));
  ReactDOM.render(repoList, document.querySelector('#root'));
});