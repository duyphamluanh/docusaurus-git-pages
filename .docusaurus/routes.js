import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-git-pages/blog',
    component: ComponentCreator('/docusaurus-git-pages/blog', '91e'),
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
    component: ComponentCreator('/docusaurus-git-pages/docs', '37d'),
    routes: [
      {
        path: '/docusaurus-git-pages/docs/category/tutorial---basics',
        component: ComponentCreator('/docusaurus-git-pages/docs/category/tutorial---basics', 'a03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/category/tutorial---extras',
        component: ComponentCreator('/docusaurus-git-pages/docs/category/tutorial---extras', '3d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/hello',
        component: ComponentCreator('/docusaurus-git-pages/docs/hello', '8a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/intro',
        component: ComponentCreator('/docusaurus-git-pages/docs/intro', '079'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docusaurus-git-pages/docs/tutorial-basics/congratulations', '31e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docusaurus-git-pages/docs/tutorial-basics/create-a-blog-post', 'b0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docusaurus-git-pages/docs/tutorial-basics/create-a-document', '2ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docusaurus-git-pages/docs/tutorial-basics/create-a-page', '711'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docusaurus-git-pages/docs/tutorial-basics/deploy-your-site', '8b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docusaurus-git-pages/docs/tutorial-basics/markdown-features', 'fc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docusaurus-git-pages/docs/tutorial-extras/manage-docs-versions', 'e3c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docusaurus-git-pages/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docusaurus-git-pages/docs/tutorial-extras/translate-your-site', 'ec4'),
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
