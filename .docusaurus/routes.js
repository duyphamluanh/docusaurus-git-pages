import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-git-pages/blog',
    component: ComponentCreator('/docusaurus-git-pages/blog', '27c'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/archive',
    component: ComponentCreator('/docusaurus-git-pages/blog/archive', 'ca1'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/blog/first-blog-post', 'c6a'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/blog/long-blog-post', '9e7'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-git-pages/blog/mdx-blog-post', 'f51'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags', 'ca0'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/docusaurus', '6f5'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/facebook', 'c54'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/hello',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/hello', '14b'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/tags/hola',
    component: ComponentCreator('/docusaurus-git-pages/blog/tags/hola', 'ce7'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/blog/welcome',
    component: ComponentCreator('/docusaurus-git-pages/blog/welcome', '053'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/markdown-page',
    component: ComponentCreator('/docusaurus-git-pages/markdown-page', '333'),
    exact: true
  },
  {
    path: '/docusaurus-git-pages/docs',
    component: ComponentCreator('/docusaurus-git-pages/docs', '198'),
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
    component: ComponentCreator('/docusaurus-git-pages/', 'c82'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
