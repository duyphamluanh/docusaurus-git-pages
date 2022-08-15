import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
