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
    component: ComponentCreator('/docusaurus-git-pages/vi/docs', '4f9'),
    routes: [
      {
        path: '/docusaurus-git-pages/vi/docs/intro',
        component: ComponentCreator('/docusaurus-git-pages/vi/docs/intro', 'fc7'),
        exact: true,
        sidebar: "defaultSidebar"
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
