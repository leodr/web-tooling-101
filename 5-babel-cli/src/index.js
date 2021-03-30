// import Confetti from 'react-confetti';
import { RepoItem } from './list-item.js';

fetch('https://api.github.com/orgs/tobitsoftware/repos')
    .then((response) => response.json())
    .then((repos) => {
        let children = [];

        repos.forEach((repo) => {
            const li = <RepoItem key={repo.id} repo={repo} />;

            children.push(li);
        });

        const repoList = (
            <ul>
                {children}
                {/* <Confetti /> */}
            </ul>
        );

        ReactDOM.render(repoList, document.querySelector('#root'));
    });
