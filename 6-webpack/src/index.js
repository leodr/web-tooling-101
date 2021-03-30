import React from 'react';
import Confetti from 'react-confetti';
import ReactDOM from 'react-dom';
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
            <ul position>
                {children}
                <Confetti />
            </ul>
        );

        ReactDOM.render(repoList, document.querySelector('#root'));
    });
