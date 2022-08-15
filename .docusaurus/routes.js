import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-git-pages/blog',
    component: ComponentCreator('/docusaurus-git-pages/blog', 'a50'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/archive',
    component: ComponentCreator('/docusaurus-git-pages/blog/archive', '877'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/blog/first-blog-post', '537'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/greetings',
    component: ComponentCreator('/docusaurus-git-pages/blog/greetings', '302'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/blog/long-blog-post', '8d7'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/blog/mdx-blog-post', '792'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags', 'a31'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/docusaurus', 'ff9'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/facebook', 'a41'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/greetings',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/greetings', 'e92'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/hello',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/hello', '933'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/hola',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/hola', '7f1'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/welcome',
    component: ComponentCreator('/docusaurus-git-pages/blog/welcome', '666'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/markdown-page',
    component: ComponentCreator('/docusaurus-git-pages/markdown-page', 'a27'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/my-markdown-page',
    component: ComponentCreator('/docusaurus-git-pages/my-markdown-page', '9ce'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/my-react-page',
    component: ComponentCreator('/docusaurus-git-pages/my-react-page', 'cb0'),
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
    path: '/docusaurus-git-pages/',
    component: ComponentCreator('/docusaurus-git-pages/', '7ab'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
