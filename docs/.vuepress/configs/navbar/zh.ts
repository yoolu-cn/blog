import type { NavbarConfig } from 'vuepress-theme-gungnir'
import { version } from '../meta'

export const zh: NavbarConfig = [
  {
    text: '首页',
    link: '/',
    icon: 'fa-fort-awesome',
  },
  {
    text: '标签',
    link: '/tags/',
    icon: 'fa-tag',
  },
  {
    text: '链接',
    link: '/links/',
    icon: 'fa-satellite-dish',
  },
  {
    text: '文档',
    link: '/zh/docs/basic/intro.md',
    icon: 'ri-book-2-fill',
  },
  {
    text: `v${version}`,
    icon: 'co-git',
    children: [
      {
        text: 'GitHub',
        link: 'https://github.com/yoolu-cn/blog',
        icon: 'ri-github-line',
      },
      {
        text: 'Changelog',
        link: 'https://github.com/yoolu-cn/blog/blob/main/CHANGELOG.md',
        icon: 'oi-git-compare',
      },
    ],
  },
]
