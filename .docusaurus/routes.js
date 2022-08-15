import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-git-pages/vi/blog',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog', 'da1'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/archive',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/archive', '2cd'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/first-blog-post', 'bca'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/greetings',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/greetings', 'e71'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/long-blog-post', 'f31'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/mdx-blog-post', '375'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/tags',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/tags', '289'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/tags/docusaurus', 'd7d'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/tags/facebook', '166'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/tags/greetings',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/tags/greetings', 'd7d'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/tags/hello',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/tags/hello', 'a1e'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/tags/hola',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/tags/hola', 'd7e'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/vi/blog/welcome',
    component: ComponentCreator('/docusaurus-git-pages/vi/blog/welcome', 'e53'),
    exact: true
  },
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
    component: ComponentCreator('/docusaurus-git-pages/vi/docs', '1e7'),
    routes: [
      {
        path: '/docusaurus-git-pages/vi/docs/intro',
        component: ComponentCreator('/docusaurus-git-pages/vi/docs/intro', 'e49'),
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
