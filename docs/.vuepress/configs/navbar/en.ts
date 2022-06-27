import type { NavbarConfig } from 'vuepress-theme-gungnir'
import { version } from '../meta'

export const en: NavbarConfig = [
  {
    text: 'Home',
    link: '/',
    icon: 'fa-fort-awesome',
  },
  {
    text: 'Tags',
    link: '/tags/',
    icon: 'fa-tag',
  },
  {
    text: 'Links',
    link: '/links/',
    icon: 'fa-satellite-dish',
  },
  {
    text: 'Docs',
    link: '/docs/basic/intro.md',
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
