import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-git-pages/vi/markdown-page',
    component: ComponentCreator('/docusaurus-git-pages/vi/markdown-page', '5fd'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/my-markdown-page',
    component: ComponentCreator('/docusaurus-git-pages/vi/my-markdown-page', '8cc'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/my-react-page',
    component: ComponentCreator('/docusaurus-git-pages/vi/my-react-page', '807'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/docs',
    component: ComponentCreator('/docusaurus-git-pages/vi/docs', '69b'),
    routes: [
      {
        path: '/docusaurus-git-pages/vi/docs/intro',
        component: ComponentCreator('/docusaurus-git-pages/vi/docs/intro', '9cd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docusaurus-git-pages/vi/docs/intro2',
        component: ComponentCreator('/docusaurus-git-pages/vi/docs/intro2', 'aa0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docusaurus-git-pages/vi/docs/intro3',
        component: ComponentCreator('/docusaurus-git-pages/vi/docs/intro3', 'cb0'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/docusaurus-git-pages/vi/',
    component: ComponentCreator('/docusaurus-git-pages/vi/', '812'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
