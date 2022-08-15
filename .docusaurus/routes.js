import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-git-pages/blog',
    component: ComponentCreator('/docusaurus-git-pages/blog', '7ea'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/archive',
    component: ComponentCreator('/docusaurus-git-pages/blog/archive', '877'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/greetings',
    component: ComponentCreator('/docusaurus-git-pages/blog/greetings', '302'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags', 'a31'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/greetings',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/greetings', 'e92'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/docs',
    component: ComponentCreator('/docusaurus-git-pages/docs', '2a2'),
    routes: [
      {
        path: '/docusaurus-git-pages/docs/intro',
        component: ComponentCreator('/docusaurus-git-pages/docs/intro', '079'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
